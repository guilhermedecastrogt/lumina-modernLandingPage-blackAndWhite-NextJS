import { Layers } from "lucide-react"

export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center">
                        <Layers className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-lg font-bold tracking-tight">Lumina</span>
                </div>

                <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
                    {["Features", "Solutions", "Pricing", "Docs"].map((item) => (
                        <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors">
                            {item}
                        </a>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <a href="#" className="hidden sm:block text-sm text-gray-400 hover:text-white transition-colors">
                        Sign in
                    </a>
                    <button className="btn-premium px-5 py-2 text-sm font-medium bg-white text-black rounded-lg">
                        Get Started
                    </button>
                </div>
            </div>
        </nav>
    )
}
