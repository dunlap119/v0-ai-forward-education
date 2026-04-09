import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { AISection } from "@/components/ai-section"
import { TestimonialSection } from "@/components/testimonial-section"
import { MissionSection } from "@/components/mission-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <MissionSection />
      <FeaturesSection />
      <AISection />
      <TestimonialSection />
      <CTASection />
      <Footer />
    </main>
  )
}
