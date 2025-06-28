import { error } from '@sveltejs/kit';
import { getOrCreateCustomerId, fetchSubscription } from '../subscription_helpers.server';
import { allProducts } from '$lib/data/products';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals: { safeGetSession, supabaseServiceRole } }) => {
  const { session, user } = await safeGetSession();
  // The layout guard should prevent this, but we'll check for safety
  if (!session || !user) {
    return error(401, 'Unauthorized');
  }

  const { error: idError, customerId } = await getOrCreateCustomerId({
    supabaseServiceRole,
    user
  });

  if (idError || !customerId) {
    return error(500, { message: 'Error getting customer data. Please try again later.' });
  }

  const { primarySubscription } = await fetchSubscription({ customerId });

  const isActiveCustomer = !!primarySubscription;
  const currentPlanId = primarySubscription?.appSubscription?.id;
  const currentPlanName = allProducts.find((p) => p.id === currentPlanId)?.title;
  const planStatus = primarySubscription?.stripeSubscription?.status;

  return {
    isActiveCustomer,
    currentPlanId,
    currentPlanName,
    planStatus,
  };
};