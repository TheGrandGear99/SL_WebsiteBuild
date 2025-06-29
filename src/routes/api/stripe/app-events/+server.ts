import { PRIVATE_STRIPE_API_KEY, PRIVATE_STRIPE_WEBHOOK_SECRET, PRIVATE_SUPABASE_SERVICE_ROLE } from '$env/static/private';
import { PUBLIC_SUPABASE_URL } from '$env/static/public';
import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';
import type { Database } from '../../../../DatabaseDefinitions';

const stripe = new Stripe(PRIVATE_STRIPE_API_KEY, {
  apiVersion: '2023-08-16'
});

// Create a Supabase client with the service role key to bypass RLS
const supabaseAdmin = createClient<Database>(PUBLIC_SUPABASE_URL, PRIVATE_SUPABASE_SERVICE_ROLE);

export const POST: RequestHandler = async ({ request }) => {
  const sig = request.headers.get('stripe-signature');
  const body = await request.text();

  if (!sig) {
    throw error(400, 'Missing Stripe signature');
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, PRIVATE_STRIPE_WEBHOOK_SECRET);
  } catch (err: any) {
    console.error('Error constructing Stripe webhook event:', err.message);
    throw error(400, `Webhook Error: ${err.message}`);
  }

  // --- HANDLE THE EVENT ---
  console.log(`Received Stripe event: ${event.type}`);

  switch (event.type) {
    case 'checkout.session.completed':
      // This event fires when a user successfully completes a checkout.
      // We can use this to know a subscription has been created.
      const session = event.data.object as Stripe.Checkout.Session;
      console.log(`Checkout session for ${session.customer_email} was successful. Customer: ${session.customer}`);
      // NOTE: Stripe also sends a 'customer.subscription.created' event, which is often a better
      // place to handle new subscriptions, as it contains the full subscription object.
      // We are logging here for completeness but will act on the subscription event.
      break;

    case 'customer.subscription.created':
    case 'customer.subscription.updated':
    case 'customer.subscription.deleted':
      const subscription = event.data.object as Stripe.Subscription;
      const customerId = subscription.customer as string;

      // Find our internal user ID from the Stripe customer ID
      const { data: customerData, error: customerError } = await supabaseAdmin
        .from('stripe_customers')
        .select('user_id')
        .eq('stripe_customer_id', customerId)
        .single();
        
      if (customerError || !customerData) {
        console.error(`Webhook Error: Could not find user for Stripe customer ID ${customerId}`);
        // We return a 200 here because the webhook itself was valid, but we couldn't process it.
        // Returning a 500 would cause Stripe to retry, which we don't want if the customer doesn't exist.
        return json({ received: true, message: "Customer not found in our database." });
      }

      const userId = customerData.user_id;
      
      // Here you could update your `profiles` or a `subscriptions` table.
      // For example, setting a `is_subscribed` flag or storing the `plan_id`.
      // For this example, we'll just log that we would perform the update.
      console.log(`DATABASE ACTION: Updating subscription status for user ${userId}. New status: ${subscription.status}`);
      // Example DB update (you would uncomment and adapt this):
      /*
      const { error: updateError } = await supabaseAdmin
        .from('profiles')
        .update({ 
            subscription_status: subscription.status,
            plan_id: subscription.items.data[0].price.product
        })
        .eq('id', userId);

      if (updateError) {
        console.error(`Webhook DB Error: Failed to update subscription status for user ${userId}`, updateError);
      }
      */
      break;
  }

  return json({ received: true });
};