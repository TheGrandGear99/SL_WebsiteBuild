import type { User } from '@supabase/supabase-js';
import { error } from '@sveltejs/kit';
import { getOrCreateCustomerId, fetchSubscription } from '../../routes/(admin)/account/subscription_helpers.server';
import { allProducts } from '$lib/data/products';
import type { SupabaseClient } from '@supabase/supabase-js';
import type { Database } from '../../DatabaseDefinitions';

export async function getUserSubscriptionState(user: User, supabaseServiceRole: SupabaseClient<Database>) {
  const { error: idError, customerId } = await getOrCreateCustomerId({
    supabaseServiceRole,
    user,
  });

  if (idError || !customerId) {
    console.error("Critical Error: Failed to get or create customer ID for user:", user.id, idError);
    throw error(500, { message: 'Could not retrieve your account data. Please contact support.' });
  }

  const { primarySubscription, hasEverHadSubscription, error: fetchErr } = await fetchSubscription({
    customerId,
  });

  if (fetchErr) {
    console.error("Non-critical Error: Failed to fetch subscription for customerId:", customerId, fetchErr);
    // In this case, we can often proceed, assuming the user has no active plan.
  }

  const isActiveCustomer = !!primarySubscription;
  const currentPlanId = primarySubscription?.appSubscription?.id;
  const currentPlan = allProducts.find((p) => p.id === currentPlanId);
  const planStatus = primarySubscription?.stripeSubscription?.status;

  return {
    isActiveCustomer,
    hasEverHadSubscription,
    currentPlanId,
    currentPlan,
    planStatus,
  };
}