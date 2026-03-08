import { Globe, Workflow, Lock } from "lucide-react"

const capabilities = [
    { icon: <Globe className="w-5 h-5" />, title: "Multi-Platform Integrations", desc: "Connect seamlessly across 50+ platforms with pre-built adapters and real-time sync." },
    { icon: <Workflow className="w-5 h-5" />, title: "Automated Pipelines", desc: "CI/CD native workflows with zero-config deployment to any cloud provider." },
    { icon: <Lock className="w-5 h-5" />, title: "End-to-End Security", desc: "Enterprise-grade encryption, SSO, RBAC, and full audit logging built-in." },
]

export function CapabilitiesSection() {
    return (
        <section className="relative py-28 px-6">
            <div className="section-divider mb-24" />
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-gray-500 mb-5">
                        Capabilities
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-5 text-gradient-subtle">
                        Crafting the Future
                    </h2>
                    <p className="text-gray-500 max-w-lg mx-auto text-base leading-relaxed">
                        Everything you need to build world-class applications, out of the box.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 items-start">
                    <div className="w-full lg:w-5/12 relative">
                        <div className="rounded-2xl overflow-hidden border border-white/10">
                            <img
                                src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2400&auto=format&fit=crop"
                                alt="Abstract mesh visualization"
                                className="w-full h-[420px] object-cover grayscale"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                        </div>
                    </div>

                    <div className="w-full lg:w-7/12 space-y-1">
                        {capabilities.map((item, i) => (
                            <div key={i} className="group flex items-start gap-5 p-6 rounded-xl hover:bg-white/[0.02] transition-colors border border-transparent hover:border-white/[0.06]">
                                <div className="w-11 h-11 rounded-xl border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-white group-hover:border-white/20 transition-all shrink-0 mt-0.5">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="text-base font-semibold mb-1.5 tracking-tight">{item.title}</h3>
                                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
