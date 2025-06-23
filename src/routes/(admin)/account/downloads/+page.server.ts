import { error } from '@sveltejs/kit';
import { fetchSubscription, getOrCreateCustomerId } from '../subscription_helpers.server';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals: { safeGetSession, supabaseServiceRole } }) => {
  const { session, user } = await safeGetSession();
  if (!session || !user) {
    // This should not happen due to the layout guard, but we check for safety.
    error(401, 'Unauthorized');
  }

  // Set default entitlements
  const entitlements = {
    setupScript: false,
    webhookEngine: false,
    licenseHub: false,
  };

  // All users get the setup script for a $1 "purchase"
  // In a real scenario, you would check for a one-time purchase here.
  // For this implementation, we will grant it to all logged-in users.
  entitlements.setupScript = true;

  const { error: idError, customerId } = await getOrCreateCustomerId({
    supabaseServiceRole,
    user,
  });

  if (idError || !customerId) {
    // If we can't get a customer ID, they can't have subscriptions. Return default entitlements.
    return { entitlements };
  }

  const { primarySubscription, error: fetchErr } = await fetchSubscription({
    customerId,
  });

  if (fetchErr) {
    // If fetching fails, return default entitlements.
    return { entitlements };
  }

  if (primarySubscription) {
    const subscribedProductId = primarySubscription.appSubscription?.id;
    if (subscribedProductId === 'engine') {
      entitlements.webhookEngine = true;
    }
    if (subscribedProductId === 'license-hub') {
      entitlements.licenseHub = true;
    }
  }

  return { entitlements };
};