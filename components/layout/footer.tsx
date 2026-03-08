import { Layers, Github, Twitter, Mail } from "lucide-react"

export function Footer() {
    const columns = [
        { title: "Product", links: ["Components", "Templates", "Shaders", "Changelog"] },
        { title: "Developers", links: ["Documentation", "API Reference", "Examples", "CLI"] },
        { title: "Company", links: ["About", "Blog", "Careers", "Contact"] },
        { title: "Legal", links: ["Privacy", "Terms", "License", "Security"] },
    ]

    return (
        <footer className="relative z-10 border-t border-white/[0.04]">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
                    <div className="col-span-2 md:col-span-1">
                        <div className="flex items-center gap-2 mb-5">
                            <div className="w-7 h-7 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center">
                                <Layers className="w-3.5 h-3.5 text-white" />
                            </div>
                            <span className="text-sm font-bold tracking-tight">Lumina</span>
                        </div>
                        <p className="text-xs text-gray-600 leading-relaxed">
                            Next-generation components for the modern web.
                        </p>
                    </div>

                    {columns.map((col) => (
                        <div key={col.title}>
                            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">{col.title}</h4>
                            <ul className="space-y-2.5">
                                {col.links.map((link) => (
                                    <li key={link}>
                                        <a href="#" className="text-sm text-gray-600 hover:text-white transition-colors">{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="section-divider mb-6" />

                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-gray-700">© 2026 Lumina. All rights reserved.</p>
                    <div className="flex items-center gap-5">
                        <a href="#" className="text-gray-700 hover:text-white transition-colors"><Github className="w-4 h-4" /></a>
                        <a href="#" className="text-gray-700 hover:text-white transition-colors"><Twitter className="w-4 h-4" /></a>
                        <a href="#" className="text-gray-700 hover:text-white transition-colors"><Mail className="w-4 h-4" /></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
