"use client"

import { Header } from "@/components/header"
import { HeroSection } from "@/components/landing/hero-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { TestimonialsSection } from "@/components/landing/testimonials-section"
import { Footer } from "@/components/landing/footer"
// import { ShaderAnimation } from "@/components/ui/shader-animation"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* <div className="fixed inset-0 z-0">
        <ShaderAnimation />
      </div> */}

      <div className="relative z-10">
        <Header />
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <Footer />
      </div>
    </main>
  )
}
