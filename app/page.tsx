import { ShaderAnimation } from "@/components/ui/shader-animation"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/sections/hero"
import { FeaturesSection } from "@/components/sections/features"
import { ShowcaseSection } from "@/components/sections/showcase"
import { CapabilitiesSection } from "@/components/sections/capabilities"
import { FaqSection } from "@/components/sections/faq"
import { CodeExampleSection } from "@/components/sections/code-example"
import { PricingSection } from "@/components/sections/pricing"
import { CtaSection } from "@/components/sections/cta"

export default function Home() {
  return (
    <div className="relative min-h-screen text-white font-sans selection:bg-white/20">
      <div className="fixed inset-0 z-0">
        <ShaderAnimation />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/85" />
      </div>

      <Navbar />

      <main className="relative z-10">
        <HeroSection />
        <FeaturesSection />
        <ShowcaseSection />
        <CapabilitiesSection />
        <FaqSection />
        <CodeExampleSection />
        <PricingSection />
        <CtaSection />
      </main>

      <Footer />
    </div>
  )
}
