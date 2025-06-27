// Define a common type for all products for stability
export type Product = {
  id: string;
  name: string;
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
    name: "Signal Shield",
    title: "Automated Trade Configurator",
    tagline: "One click. One minute. You’re all set.",
    features: [
      "Enables your PC for Automated Trading",
      "Safely Configures your PC for Webhooks",
      "Establishs a secure connection to TradingView",
      "Shields your PC from unwanted access",
      "Your first step to automated trading"
    ],
    price: "$1 one-time",
    ctaLabel: "Download for $1",
    footnote: "Digital good · no refunds"
  },
  {
    id: "engine",
    name: "Lynx-Relay",
    title: "Automated Trading Executor",
    tagline: "Turn TradingView alerts into automatic order execution",
    features: [
      "Advanced Order Management and Fill Protection",
      "Track Fills and Trade Performance",
      "Live Telegram updates - never miss a trade",
      "Works with Kraken, BinanceUS & Gemini spot markets",
      "Signal Shield included for free"
    ],
    price: "$5 / month",
    ctaLabel: "Start Free Trial",
    footnote: "7-day trial · cancel anytime",
    stripe_product_id: "prod_OXj1CcemGMWOlU",
    stripe_price_id: "price_1NkdZCHMjzZ8mGZnRSjUm4yA"
  }
];

export const licenseHubProduct: Product = {
  id: "license-hub",
  name: "Key Commander",
  title: "Ship Software, Not Headaches",
  tagline: "Self-Hosted, 100% GUI License Manager",
  features: [
    "Manage One Time Buys, Subscriptions, and Trials",
    "Multiple Products and Tiers Supported",
    "Instantly generate and deliver license keys to customers",
    "Visual dashboard to manage users, seats, and activations",
    "Automatic backups keep your data safe",
  ],
  price: "$5 / month",
  ctaLabel: "Start Free Trial",
  footnote: "7-day trial · no refunds",
  stripe_product_id: "prod_OXj20YNpHYOXi7",
  stripe_price_id: "price_1Nkda2HMjzZ8mGZn4sKvbDAV"
};

// A combined list for use in places that need all plans
export const allProducts: Product[] = [...automationProducts, licenseHubProduct];

// The default free plan for new users
export const defaultPlanId = "script";