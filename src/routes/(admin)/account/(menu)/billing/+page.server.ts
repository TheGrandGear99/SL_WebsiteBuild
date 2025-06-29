import { error } from '@sveltejs/kit';
import { getUserSubscriptionState } from '$lib/server/subscription';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals: { safeGetSession, supabaseServiceRole } }) => {
  const { session, user } = await safeGetSession();
  if (!session || !user) {
    throw error(401, 'Unauthorized');
  }

  // Use the new, centralized function to get all subscription data
  const subscriptionState = await getUserSubscriptionState(user, supabaseServiceRole);

  return {
    isActiveCustomer: subscriptionState.isActiveCustomer,
    hasEverHadSubscription: subscriptionState.hasEverHadSubscription,
    currentPlanId: subscriptionState.currentPlanId,
  };
};