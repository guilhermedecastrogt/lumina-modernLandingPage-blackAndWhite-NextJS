import { ArrowRight, ArrowUpRight } from "lucide-react"

const stats = [
    { value: "100%", label: "Uptime Guarantee" },
    { value: "10x", label: "Faster Renders" },
    { value: "75%", label: "Less Bundle Size" },
]

export function ShowcaseSection() {
    return (
        <section id="solutions" className="relative py-28 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
                    <div className="w-full lg:w-1/2">
                        <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-gray-500 mb-5">
                            Why Lumina?
                        </span>
                        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 text-gradient-subtle leading-tight">
                            Redefining Digital Infrastructure
                        </h2>
                        <p className="text-gray-500 mb-10 text-base leading-relaxed max-w-lg">
                            Built from the ground up for performance, scalability, and developer experience.
                            Every component is designed to work seamlessly at any scale.
                        </p>

                        <div className="flex items-center gap-4 mb-14">
                            <button className="btn-premium px-6 py-3 text-sm font-semibold bg-white text-black rounded-lg flex items-center gap-2">
                                Get Started
                                <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1.5">
                                Read the Docs
                                <ArrowUpRight className="w-3.5 h-3.5" />
                            </a>
                        </div>

                        <div className="grid grid-cols-3 gap-6">
                            {stats.map((s, i) => (
                                <div key={i}>
                                    <span className="stat-number text-3xl md:text-4xl font-extrabold text-white">{s.value}</span>
                                    <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">{s.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 relative">
                        <div className="absolute -inset-8 bg-white/[0.03] blur-3xl rounded-full animate-pulse-glow" />
                        <div className="relative rounded-2xl overflow-hidden border border-white/10">
                            <img
                                src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2532&auto=format&fit=crop"
                                alt="Abstract digital visualization"
                                className="w-full h-[480px] object-cover grayscale"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <div className="glass-card-static rounded-xl px-5 py-4 flex items-center justify-between">
                                    <div className="flex items-center gap-3 text-sm">
                                        <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                                        <span className="text-gray-300">GPU accelerated · 60fps</span>
                                    </div>
                                    <span className="text-xs text-gray-500 font-mono">v2.4.1</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
