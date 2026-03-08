import { Check } from "lucide-react"

interface PricingCardProps {
    tier: string
    price: string
    period?: string
    description: string
    features: string[]
    highlighted?: boolean
}

export function PricingCard({ tier, price, period, description, features, highlighted }: PricingCardProps) {
    return (
        <div className={`relative rounded-2xl p-7 text-left transition-all ${highlighted ? "glass-card border-white/20 ring-1 ring-white/10" : "glass-card"}`}>
            {highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 text-xs font-semibold bg-white rounded-full text-black">
                        Most Popular
                    </span>
                </div>
            )}
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">{tier}</h3>
            <div className="flex items-baseline gap-1 mb-2">
                <span className="text-4xl font-extrabold text-white">{price}</span>
                {period && <span className="text-sm text-gray-600">{period}</span>}
            </div>
            <p className="text-sm text-gray-600 mb-6">{description}</p>
            <ul className="space-y-2.5 mb-8">
                {features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-gray-400">
                        <Check className="w-3.5 h-3.5 text-white shrink-0" />
                        {f}
                    </li>
                ))}
            </ul>
            <button className={`w-full py-3 text-sm font-semibold rounded-lg transition-all ${highlighted ? "btn-premium bg-white text-black" : "border border-white/10 text-white hover:bg-white/5"}`}>
                Get Started
            </button>
        </div>
    )
}
