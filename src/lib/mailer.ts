import { Resend } from "resend"
import { env } from "$env/dynamic/private"
import { PRIVATE_SUPABASE_SERVICE_ROLE } from "$env/static/private"
import { PUBLIC_SUPABASE_URL } from "$env/static/public"
import { createClient, type User } from "@supabase/supabase-js"
import type { Database } from "../DatabaseDefinitions"
import handlebars from "handlebars"
import { error } from "@sveltejs/kit";

// Sends an email to the admin email address.
// Does not throw errors, but logs them.
export const sendAdminEmail = async ({
  subject,
  body,
}: {
  subject: string
  body: string
}) => {
  if (!env.PRIVATE_ADMIN_EMAIL) {
    return
  }
  try {
    const resend = new Resend(env.PRIVATE_RESEND_API_KEY)
    const resp = await resend.emails.send({
      from: env.PRIVATE_FROM_ADMIN_EMAIL || env.PRIVATE_ADMIN_EMAIL,
      to: [env.PRIVATE_ADMIN_EMAIL],
      subject: "ADMIN_MAIL: " + subject,
      text: body,
    })

    if (resp.error) {
      console.error("Failed to send admin email, error:", resp.error)
    }
  } catch (e) {
    console.error("Failed to send admin email, error:", e)
  }
}

export const sendUserEmail = async ({
  user,
  subject,
  from_email,
  template_name,
  template_properties,
}: {
  user: User
  subject: string
  from_email: string
  template_name: string
  template_properties: Record<string, string>
}) => {
  const email = user.email
  if (!email) {
    // --- HARDENING UPGRADE ---
    // Throw an explicit error instead of failing silently.
    console.error("Email Error: Attempted to send email to user with no email address.", { userId: user.id });
    throw new Error("User has no email address.");
  }

  const serverSupabase = createClient<Database>(
    PUBLIC_SUPABASE_URL,
    PRIVATE_SUPABASE_SERVICE_ROLE,
    { auth: { persistSession: false } },
  )
  const { data: serviceUserData } = await serverSupabase.auth.admin.getUserById(
    user.id,
  )
  const emailVerified =
    serviceUserData.user?.email_confirmed_at ||
    serviceUserData.user?.user_metadata?.email_verified

  if (!emailVerified) {
    console.warn("Email Aborted: Attempted to send email to unverified address.", { userId: user.id, email });
    // We can choose to fail silently here, as this is an expected state for new users.
    return;
  }

  const { data: profile, error: profileError } = await serverSupabase
    .from("profiles")
    .select("unsubscribed")
    .eq("id", user.id)
    .single()

  if (profileError) {
    // --- HARDENING UPGRADE ---
    console.error("Email Error: Could not fetch user profile to check subscription status.", { userId: user.id, email, error: profileError });
    throw new Error("Failed to fetch user profile.");
  }

  if (profile?.unsubscribed) {
    console.log("Email Aborted: User is unsubscribed.", { userId: user.id, email });
    return;
  }

  await sendTemplatedEmail({
    subject,
    to_emails: [email],
    from_email,
    template_name,
    template_properties,
  })
}

export const sendTemplatedEmail = async ({
  subject,
  to_emails,
  from_email,
  template_name,
  template_properties,
}: {
  subject: string
  to_emails: string[]
  from_email: string
  template_name: string
  template_properties: Record<string, string>
}) => {
  if (!env.PRIVATE_RESEND_API_KEY) {
    console.warn("Email not configured. PRIVATE_RESEND_API_KEY is not set. Skipping email send.");
    return
  }

  let plaintextBody: string | undefined = undefined
  try {
    const textTemplate = await import(
      `./emails/${template_name}_text.hbs?raw`
    ).then((mod) => mod.default)
    const template = handlebars.compile(textTemplate)
    plaintextBody = template(template_properties)
  } catch (e) {
    // ignore, plaintextBody is optional
  }

  let htmlBody: string | undefined = undefined
  try {
    const htmlTemplate = await import(
      `./emails/${template_name}_html.hbs?raw`
    ).then((mod) => mod.default)
    const template = handlebars.compile(htmlTemplate)
    htmlBody = template(template_properties)
  } catch (e) {
    // ignore, htmlBody is optional
  }

  if (!plaintextBody && !htmlBody) {
    console.error(
      "Email Error: No email body templates found. Requires plaintext or html. Template name: ",
      template_name,
    )
    throw new Error(`No email templates found for ${template_name}`);
  }

  try {
    const resend = new Resend(env.PRIVATE_RESEND_API_KEY)
    const emailPayload: any = {
      from: from_email,
      to: to_emails,
      subject: subject,
    }
    if (plaintextBody) emailPayload.text = plaintextBody;
    if (htmlBody) emailPayload.html = htmlBody;

    const { error: sendError } = await resend.emails.send(emailPayload);

    if (sendError) {
      console.error("Email Error: Failed to send email via Resend.", { error: sendError });
      throw new Error(`Resend API Error: ${sendError.message}`);
    }
  } catch (e) {
    console.error("Email Error: Unhandled exception in sendTemplatedEmail.", { error: e });
    throw e; // Re-throw the error to be handled by the caller
  }
}