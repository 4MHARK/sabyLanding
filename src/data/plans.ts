export interface BillingOption {
  id: "monthly" | "annual";
  label: string;
  price: number;
  note?: string;
}

export interface Plan {
  id: string;
  name: string;
  description: string;
  badge?: string;
  billing: BillingOption[];
  features: string[];
}

export const plans: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    description: "For small teams experimenting with Saby",
    billing: [
      { id: "monthly", label: "Monthly", price: 29, note: "Billed monthly" },
      {
        id: "annual",
        label: "Annual",
        price: 24,
        note: "Save 20% when billed yearly",
      },
    ],
    features: [
      "Up to 5 workspaces",
      "Community support",
      "Email digests",
      "Up to 25k events / mo",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    description: "Most popular for scaling product and data teams",
    badge: "Recommended",
    billing: [
      { id: "monthly", label: "Monthly", price: 79, note: "Billed monthly" },
      {
        id: "annual",
        label: "Annual",
        price: 64,
        note: "Billed yearly, includes 1 month free",
      },
    ],
    features: [
      "Unlimited workspaces",
      "Premium chat support",
      "Advanced automation",
      "Priority pipelines",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "Mission-critical data orchestration at scale",
    billing: [
      {
        id: "monthly",
        label: "Monthly",
        price: 189,
        note: "Custom SLAs and onboarding",
      },
      {
        id: "annual",
        label: "Annual",
        price: 169,
        note: "Dedicated CSM + white-glove launch",
      },
    ],
    features: [
      "Global SSO/SAML",
      "24/7 enterprise support",
      "Usage-based overage controls",
      "Private data plane regions",
    ],
  },
];
