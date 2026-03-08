import { Zap, Shield, Boxes, Cpu, ArrowUpRight } from "lucide-react"

const features = [
    { icon: <Zap className="w-5 h-5" />, title: "Lightning Performance", desc: "Sub-50ms interactions with zero layout shifts. Optimized for Core Web Vitals." },
    { icon: <Shield className="w-5 h-5" />, title: "Enterprise Security", desc: "SOC 2 compliant with end-to-end encryption and role-based access control." },
    { icon: <Boxes className="w-5 h-5" />, title: "Modular Architecture", desc: "Tree-shakable components. Import only what you need, nothing more." },
    { icon: <Cpu className="w-5 h-5" />, title: "GPU Acceleration", desc: "WebGL-powered rendering with hardware acceleration for 60fps effects." },
]

export function FeaturesSection() {
    return (
        <section id="features" className="relative py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.04] rounded-2xl overflow-hidden border border-white/[0.06]">
                    {features.map((f, i) => (
                        <div key={i} className="group relative p-8 bg-black/60 hover:bg-white/[0.04] transition-colors duration-300">
                            <div className="flex items-center justify-between mb-6">
                                <div className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-white group-hover:border-white/20 transition-all">
                                    {f.icon}
                                </div>
                                <ArrowUpRight className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors opacity-0 group-hover:opacity-100" />
                            </div>
                            <h3 className="text-base font-semibold mb-2 tracking-tight">{f.title}</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
