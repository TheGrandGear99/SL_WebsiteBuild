import { error } from '@sveltejs/kit';
import { getUserSubscriptionState } from '$lib/server/subscription';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals: { safeGetSession, supabaseServiceRole } }) => {
  const { session, user } = await safeGetSession();
  if (!session || !user) {
    throw error(401, 'Unauthorized');
  }

  // Set default entitlements
  const entitlements = {
    setupScript: false,
    webhookEngine: false,
    licenseHub: false,
  };

  // All logged-in users get access to the setup script
  entitlements.setupScript = true;

  // Use the new, centralized function
  const subscriptionState = await getUserSubscriptionState(user, supabaseServiceRole);

  if (subscriptionState.isActiveCustomer) {
    const subscribedProductId = subscriptionState.currentPlan?.id;
    if (subscribedProductId === 'engine') {
      entitlements.webhookEngine = true;
    }
    if (subscribedProductId === 'license-hub') {
      entitlements.licenseHub = true;
    }
  }

  return { entitlements };
};