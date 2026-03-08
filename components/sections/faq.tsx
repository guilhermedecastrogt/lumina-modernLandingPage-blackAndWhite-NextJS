import { ChevronDown } from "lucide-react"

const faqs = [
    { q: "What tech stack does Lumina use?", a: "Next.js, React, and Three.js for GPU-accelerated rendering." },
    { q: "How do I integrate with my project?", a: "One CLI command: npx lumina init. Works with any React setup." },
    { q: "Is there a free tier available?", a: "Yes — our Starter plan is completely free with 5 components." },
    { q: "Can I customize the components?", a: "Every component is fully customizable via props and CSS variables." },
    { q: "Do you offer enterprise support?", a: "Yes, with dedicated SLAs, SSO, and priority response times." },
    { q: "What about performance impact?", a: "Tree-shakable and < 5KB per component. Zero performance penalty." },
]

export function FaqSection() {
    return (
        <section className="relative py-28 px-6">
            <div className="section-divider mb-24" />
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-5 text-gradient-subtle">
                        Frequently Asked Questions
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="faq-item group p-5 rounded-xl border border-white/[0.06] hover:border-white/10 transition-all">
                            <div className="flex items-center justify-between">
                                <h3 className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors">{faq.q}</h3>
                                <ChevronDown className="w-4 h-4 text-gray-600 shrink-0 ml-3" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
