"use client"

import { PricingSection } from "@/components/ui/pricing-section"

const PAYMENT_FREQUENCIES = ["monthly", "yearly"]

const TIERS = [
  {
    id: "starter",
    name: "Starter",
    price: {
      monthly: 2990,
      yearly: 29900,
    },
    description: "Perfect for getting started",
    features: ["Up to 100 leads/month", "Basic analytics", "Email support", "1 team member", "5 integrations"],
    cta: "Get started",
  },
  {
    id: "professional",
    name: "Professional",
    price: {
      monthly: 8990,
      yearly: 89900,
    },
    description: "Great for growing teams",
    features: [
      "Up to 1,000 leads/month",
      "Advanced analytics",
      "Priority support",
      "Up to 5 team members",
      "20 integrations",
    ],
    cta: "Get started",
    popular: true,
  },
  {
    id: "business",
    name: "Business",
    price: {
      monthly: 19990,
      yearly: 199900,
    },
    description: "For established businesses",
    features: ["Unlimited leads", "Custom analytics", "24/7 phone support", "Up to 20 team members", "50 integrations"],
    cta: "Get started",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: {
      monthly: "Custom",
      yearly: "Custom",
    },
    description: "For large organizations",
    features: [
      "Everything in Business",
      "Dedicated account manager",
      "Custom integrations",
      "Unlimited team members",
      "SLA guarantee",
    ],
    cta: "Contact Us",
    highlighted: true,
  },
]

export default function BillingPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Billing & Plans</h1>
          <p className="text-muted-foreground">
            Choose the perfect plan for your business. All prices are in Kenyan Shilling (KES).
          </p>
        </div>

        <PricingSection
          title="Simple, Transparent Pricing"
          subtitle="Choose the best plan for your needs"
          frequencies={PAYMENT_FREQUENCIES}
          tiers={TIERS}
        />

        <div className="mt-16 bg-card rounded-lg p-8 border border-border">
          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Can I change my plan anytime?</h3>
              <p className="text-muted-foreground">
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Do you offer refunds?</h3>
              <p className="text-muted-foreground">
                We offer a 14-day money-back guarantee if you're not satisfied with our service.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">What payment methods do you accept?</h3>
              <p className="text-muted-foreground">
                We accept M-Pesa, bank transfers, and all major credit cards for Kenyan customers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
