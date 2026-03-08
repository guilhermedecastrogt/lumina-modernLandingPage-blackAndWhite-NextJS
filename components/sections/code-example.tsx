import { ArrowUpRight } from "lucide-react"

export function CodeExampleSection() {
    return (
        <section className="relative py-28 px-6">
            <div className="section-divider mb-24" />
            <div className="max-w-4xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-12 items-start">
                    <div className="w-full lg:w-5/12">
                        <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-gray-500 mb-5">
                            Simple Integration
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-5 text-gradient-subtle leading-tight">
                            Drop in.<br />Ship it.
                        </h2>
                        <p className="text-gray-500 text-base leading-relaxed mb-8">
                            One import is all it takes. No complex configuration, no build step changes.
                        </p>
                        <button className="btn-premium px-6 py-3 text-sm font-semibold bg-white text-black rounded-lg flex items-center gap-2">
                            Read the Docs
                            <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>
                    </div>

                    <div className="w-full lg:w-7/12">
                        <div className="glass-card-static rounded-2xl overflow-hidden">
                            <div className="flex items-center gap-2 px-5 py-3 border-b border-white/5">
                                <div className="w-2.5 h-2.5 rounded-full bg-white/15" />
                                <div className="w-2.5 h-2.5 rounded-full bg-white/15" />
                                <div className="w-2.5 h-2.5 rounded-full bg-white/15" />
                                <span className="ml-3 text-xs text-gray-600 font-mono">page.tsx</span>
                            </div>
                            <pre className="px-6 py-5 text-sm font-mono leading-relaxed overflow-x-auto">
                                <code>
                                    <span className="text-gray-500">import</span>
                                    <span className="text-gray-300">{" { "}</span>
                                    <span className="text-white">ShaderAnimation</span>
                                    <span className="text-gray-300">{" } "}</span>
                                    <span className="text-gray-500">from</span>
                                    <span className="text-gray-400">{` "@/components/ui/shader-animation"`}</span>
                                    {"\n\n"}
                                    <span className="text-gray-500">export default function</span>
                                    <span className="text-white"> Page</span>
                                    <span className="text-gray-400">() {"{"}</span>
                                    {"\n  "}
                                    <span className="text-gray-500">return</span>
                                    <span className="text-gray-400">{" ("}</span>
                                    {"\n    "}
                                    <span className="text-gray-600">{"<"}</span>
                                    <span className="text-gray-400">div</span>
                                    <span className="text-gray-500"> className</span>
                                    <span className="text-gray-400">=</span>
                                    <span className="text-gray-300">{`"relative h-screen"`}</span>
                                    <span className="text-gray-600">{">"}</span>
                                    {"\n      "}
                                    <span className="text-gray-600">{"<"}</span>
                                    <span className="text-white">ShaderAnimation</span>
                                    <span className="text-gray-400"> /</span>
                                    <span className="text-gray-600">{">"}</span>
                                    {"\n    "}
                                    <span className="text-gray-600">{"</"}</span>
                                    <span className="text-gray-400">div</span>
                                    <span className="text-gray-600">{">"}</span>
                                    {"\n  "}
                                    <span className="text-gray-400">{")"}</span>
                                    {"\n"}
                                    <span className="text-gray-400">{"}"}</span>
                                </code>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
