import { PricingCard } from "@/components/ui/pricing-card"

export function PricingSection() {
    return (
        <section id="pricing" className="relative py-28 px-6">
            <div className="section-divider mb-24" />
            <div className="max-w-5xl mx-auto text-center">
                <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-gray-500 mb-5">
                    Pricing
                </span>
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-5 text-gradient-subtle">
                    Start free. Scale infinitely.
                </h2>
                <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed mb-16">
                    No credit card required. Upgrade when you&apos;re ready for production.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <PricingCard
                        tier="Starter"
                        price="Free"
                        description="Perfect for side projects."
                        features={["5 components", "Community support", "MIT License", "Basic shaders"]}
                    />
                    <PricingCard
                        tier="Pro"
                        price="$29"
                        period="/mo"
                        description="For teams shipping fast."
                        features={["All components", "Priority support", "Advanced shaders", "Custom themes", "Analytics"]}
                        highlighted
                    />
                    <PricingCard
                        tier="Enterprise"
                        price="Custom"
                        description="For scale and compliance."
                        features={["Everything in Pro", "SSO & SAML", "Dedicated support", "SLA guarantee", "Custom integrations"]}
                    />
                </div>
            </div>
        </section>
    )
}
