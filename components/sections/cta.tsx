import { ArrowRight, Github } from "lucide-react"

export function CtaSection() {
    return (
        <section className="relative py-32 px-6">
            <div className="max-w-4xl mx-auto relative">
                <div className="absolute -inset-20 bg-white/[0.03] blur-3xl rounded-full animate-pulse-glow" />
                <div className="relative glass-card-static rounded-3xl py-20 px-8 text-center overflow-hidden">
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                    <div className="absolute inset-0 animate-shimmer pointer-events-none" />

                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-gradient-subtle">
                        Ready to build<br />something incredible?
                    </h2>
                    <p className="text-gray-500 max-w-md mx-auto mb-10 text-base leading-relaxed">
                        Join 48,000+ developers already shipping with Lumina.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                        <button className="btn-premium group px-8 py-3.5 text-sm font-semibold bg-white text-black rounded-lg flex items-center gap-2">
                            Get Started for Free
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                        </button>
                        <button className="px-7 py-3.5 text-sm font-medium rounded-lg border border-white/10 hover:border-white/15 hover:bg-white/5 transition-all flex items-center gap-2 text-gray-400">
                            <Github className="w-4 h-4" />
                            Star on GitHub
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
