import { ArrowRight, ChevronRight, Terminal } from "lucide-react"

export function HeroSection() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center">
            <div className="animate-fade-up mb-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-xs text-gray-400 uppercase tracking-widest">
                    <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    Now in Public Beta
                    <ChevronRight className="w-3 h-3" />
                </div>
            </div>

            <h1 className="animate-fade-up-delay-1 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[0.95] max-w-5xl mb-8">
                <span className="text-gradient-subtle">Your Gateway to</span>
                <br />
                <span className="text-white">Web Innovation</span>
            </h1>

            <p className="animate-fade-up-delay-2 text-base md:text-lg text-gray-500 max-w-xl mb-12 leading-relaxed">
                GPU-accelerated components, immersive shader effects, and production-ready
                primitives — ship stunning experiences in hours, not weeks.
            </p>

            <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row gap-3">
                <button className="btn-premium group px-7 py-3.5 text-sm font-semibold bg-white text-black rounded-lg flex items-center justify-center gap-2">
                    Get Started
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
                <button className="group px-7 py-3.5 text-sm font-medium rounded-lg border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all flex items-center justify-center gap-2 text-gray-300">
                    <Terminal className="w-4 h-4" />
                    npx lumina init
                </button>
            </div>

            <div className="absolute bottom-10 animate-fade-up-delay-4">
                <div className="w-5 h-8 rounded-full border border-white/15 flex items-start justify-center p-1">
                    <div className="w-1 h-2 rounded-full bg-white/40 animate-float" />
                </div>
            </div>
        </section>
    )
}
