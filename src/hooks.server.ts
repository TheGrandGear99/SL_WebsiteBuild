import { PRIVATE_SUPABASE_SERVICE_ROLE } from "$env/static/private";
import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from "$env/static/public";
import { createServerClient } from "@supabase/ssr";
import { createClient } from "@supabase/supabase-js";
import type { Handle } from "@sveltejs/kit";
import { sequence } from "@sveltejs/kit/hooks";

// --- SECURITY HARDENING: CONTENT SECURITY POLICY ---
// This handle attaches a robust Content Security Policy (CSP) to every server response.
// A CSP is a critical security layer that helps prevent cross-site scripting (XSS) attacks.
// NOTE: This is a strict policy. If you add new external scripts, fonts, or images,
// you MUST add their sources to the policy below, or they will be blocked by the browser.
const securityHeaders: Handle = async ({ event, resolve }) => {
  const response = await resolve(event);
  response.headers.set(
    'Content-Security-Policy',
    [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com", // 'unsafe-inline' is needed for Svelte's reactivity and Google Analytics
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com", // 'unsafe-inline' is needed for Svelte's dynamic styles
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data:",
      "connect-src 'self' https://*.supabase.co https://www.google-analytics.com",
      "frame-src 'self' https://js.stripe.com",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join('; ')
  );
  return response;
};

export const supabase: Handle = async ({ event, resolve }) => {
  event.locals.supabase = createServerClient(
    PUBLIC_SUPABASE_URL,
    PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll: () => event.cookies.getAll(),
        setAll: (cookiesToSet) => {
          cookiesToSet.forEach(({ name, value, options }) => {
            // --- SECURITY HARDENING: HTTP-ONLY COOKIES ---
            // We ensure the HttpOnly flag is always set on our auth cookies
            event.cookies.set(name, value, { ...options, path: "/", httpOnly: true, secure: true });
          });
        },
      },
    },
  );

  event.locals.supabaseServiceRole = createClient(
    PUBLIC_SUPABASE_URL,
    PRIVATE_SUPABASE_SERVICE_ROLE,
    { auth: { persistSession: false } },
  );

  event.locals.safeGetSession = async () => {
    const {
      data: { session },
    } = await event.locals.supabase.auth.getSession();
    if (!session) {
      return { session: null, user: null, amr: null };
    }

    const {
      data: { user },
      error: userError,
    } = await event.locals.supabase.auth.getUser();
    if (userError) {
      return { session: null, user: null, amr: null };
    }

    const { data: aal, error: amrError } =
      await event.locals.supabase.auth.mfa.getAuthenticatorAssuranceLevel();
    if (amrError) {
      return { session, user, amr: null };
    }

    return { session, user, amr: aal.currentAuthenticationMethods };
  };

  return resolve(event, {
    filterSerializedResponseHeaders(name) {
      return name === "content-range" || name === "x-supabase-api-version";
    },
  });
};

const authGuard: Handle = async ({ event, resolve }) => {
  const { session, user } = await event.locals.safeGetSession();
  event.locals.session = session;
  event.locals.user = user;
  return resolve(event);
};

// The 'sequence' function runs our handles in the order they are listed.
// Security headers are applied first to every response.
export const handle: Handle = sequence(securityHeaders, supabase, authGuard);