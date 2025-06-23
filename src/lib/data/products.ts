// Define a common type for all products for stability
export type Product = {
  id: string;
  title: string;
  tagline: string;
  features: string[];
  price: string;
  ctaLabel: string;
  footnote: string;
  stripe_product_id?: string;
  stripe_price_id?: string;
};

export const automationProducts: Product[] = [
  {
    id: "script",
    title: "Bootstrap Your Server in Two Minutes",
    tagline: "One-click script: SSL, NGINX, firewalls — lifetime license to one machine.",
    features: [
      "Installs NGINX + Let's Encrypt",
      "Locks inbound ports to TradingView IPs",
      "Generates audit log for every step"
    ],
    price: "$1 one-time",
    ctaLabel: "Download for $1",
    footnote: "Digital good · no refunds",
    // No Stripe ID for one-time purchases via script
  },
  {
    id: "engine",
    title: "Fire Signals, Track Fills, Repeat",
    tagline: "Route TradingView alerts to exchanges with nonce guard and Telegram updates.",
    features: [
      "Retries & fallback order logic",
      "Real-time Telegram feed",
      "Free Setup Script included"
    ],
    price: "$5 / month",
    ctaLabel: "Start Free Trial",
    footnote: "7-day trial. Cancel before renewal to avoid charge.",
    stripe_product_id: "prod_OXj1CcemGMWOlU", // From original "Pro" plan
    stripe_price_id: "price_1NkdZCHMjzZ8mGZnRSjUm4yA",
  }
];

export const licenseHubProduct: Product = {
  id: "license-hub",
  title: "Ship Software, Not Headaches",
  tagline: "Self-hosted license manager: Stripe & PayPal webhooks, Argon2 keys, Postgres on your box.",
  features: [
    "Costs 90% less than legacy platforms",
    "Keep customer data on your server",
    "CLI & dashboard for key revokes"
  ],
  price: "$5 / month",
  ctaLabel: "Start Free Trial",
  footnote: "7-day trial · no refunds",
  stripe_product_id: "prod_OXj20YNpHYOXi7", // From original "Enterprise" plan
  stripe_price_id: "price_1Nkda2HMjzZ8mGZn4sKvbDAV",
};

// A combined list for use in places that need all plans
export const allProducts: Product[] = [...automationProducts, licenseHubProduct];

// The default free plan for new users
export const defaultPlanId = "script";