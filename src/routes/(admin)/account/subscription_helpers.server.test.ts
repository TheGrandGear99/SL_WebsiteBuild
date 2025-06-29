import { describe, it, expect, vi, beforeEach } from 'vitest';
import { getOrCreateCustomerId, fetchSubscription } from './subscription_helpers.server';
import type { User } from '@supabase/supabase-js';

// Mock the Stripe library
vi.mock('stripe', () => {
  const mockStripe = {
    customers: {
      create: vi.fn(),
      list: vi.fn(),
    },
    subscriptions: {
      list: vi.fn(),
    },
  };
  // The default export is a class, so we return a constructor
  return {
    default: vi.fn(() => mockStripe),
  };
});

// Mock our products data
vi.mock('$lib/data/products', () => ({
  allProducts: [
    { 
      id: 'engine', 
      name: 'Lynx-Relay', 
      stripe_product_id: 'prod_engine_123' 
    },
    { 
      id: 'license-hub', 
      name: 'Key Commander', 
      stripe_product_id: 'prod_hub_123' 
    },
  ],
}));

describe('Subscription Helpers', () => {
  const mockSupabase: any = {
    from: vi.fn().mockReturnThis(),
    select: vi.fn().mockReturnThis(),
    eq: vi.fn().mockReturnThis(),
    single: vi.fn(),
    insert: vi.fn(),
  };

  const mockUser = {
    id: 'user-uuid-123',
    email: 'test@example.com',
  } as User;
  
  // We need to access the mocked constructor to reset mocks
  let Stripe: any;

  beforeEach(async () => {
    vi.clearAllMocks();
    // Dynamically import the mocked stripe to access its instances
    Stripe = (await import('stripe')).default;
  });

  describe('getOrCreateCustomerId', () => {
    it('should return existing customer ID if found in DB', async () => {
      mockSupabase.single.mockResolvedValueOnce({
        data: { stripe_customer_id: 'cus_existing_123' },
        error: null,
      });

      const result = await getOrCreateCustomerId({ supabaseServiceRole: mockSupabase, user: mockUser });

      expect(result.customerId).toBe('cus_existing_123');
      expect(mockSupabase.from).toHaveBeenCalledWith('stripe_customers');
      expect(Stripe().customers.create).not.toHaveBeenCalled();
    });

    it('should create a new Stripe customer and save it to DB if not found', async () => {
      // Step 1: DB returns no customer
      mockSupabase.single.mockResolvedValueOnce({ data: null, error: { code: 'PGRST116' } });
      // Step 2: DB returns profile for new customer creation
      mockSupabase.single.mockResolvedValueOnce({ data: { full_name: 'Test User' }, error: null });
      // Step 3: Stripe API mock for creating a customer
      const mockStripeCustomer = { id: 'cus_new_456' };
      Stripe().customers.create.mockResolvedValue(mockStripeCustomer);
      // Step 4: DB insert mock returns no error
      mockSupabase.insert.mockResolvedValue({ error: null });

      const result = await getOrCreateCustomerId({ supabaseServiceRole: mockSupabase, user: mockUser });

      expect(Stripe().customers.create).toHaveBeenCalledWith({
        email: mockUser.email,
        name: 'Test User',
        metadata: expect.any(Object),
      });
      expect(mockSupabase.insert).toHaveBeenCalledWith({
        user_id: mockUser.id,
        stripe_customer_id: 'cus_new_456',
        updated_at: expect.any(Date),
      });
      expect(result.customerId).toBe('cus_new_456');
    });

    it('should return an error if user is null', async () => {
        const result = await getOrCreateCustomerId({ supabaseServiceRole: mockSupabase, user: null });
        expect(result.error).toBeDefined();
    });
  });

  describe('fetchSubscription', () => {
    it('should return primary subscription if an active one is found', async () => {
        const mockStripeSubscriptions = {
            data: [
                { status: 'canceled', items: { data: [{ price: { product: 'prod_old_789' } }] } },
                { status: 'active', items: { data: [{ price: { product: 'prod_engine_123' } }] } },
            ]
        };
        Stripe().subscriptions.list.mockResolvedValue(mockStripeSubscriptions);

        const result = await fetchSubscription({ customerId: 'cus_123' });

        expect(result.primarySubscription).toBeDefined();
        expect(result.primarySubscription?.appSubscription.id).toBe('engine');
        expect(result.hasEverHadSubscription).toBe(true);
    });

    it('should return null if no active subscription is found', async () => {
        const mockStripeSubscriptions = {
            data: [
                 { status: 'canceled', items: { data: [{ price: { product: 'prod_old_789' } }] } },
            ]
        };
        Stripe().subscriptions.list.mockResolvedValue(mockStripeSubscriptions);

        const result = await fetchSubscription({ customerId: 'cus_123' });

        expect(result.primarySubscription).toBeNull();
        expect(result.hasEverHadSubscription).toBe(true);
    });

     it('should return hasEverHadSubscription as false if no subscriptions ever', async () => {
        const mockStripeSubscriptions = { data: [] };
        Stripe().subscriptions.list.mockResolvedValue(mockStripeSubscriptions);

        const result = await fetchSubscription({ customerId: 'cus_123' });

        expect(result.primarySubscription).toBeNull();
        expect(result.hasEverHadSubscription).toBe(false);
    });
  });
});