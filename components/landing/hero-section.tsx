"use client"

import { Button } from "@/components/ui/button"
import { CastovaLogo } from "@/components/castova-logo"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { VideoModal } from "@/components/ui/video-modal"

export function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="relative overflow-hidden py-20 md:py-40 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-card">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-8 animate-fade-in-up">
              <CastovaLogo animated={true} />
            </div>
            <h1
              className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              Convert Leads Into Revenue
            </h1>
            <p
              className="text-lg md:text-xl text-foreground/70 mb-8 max-w-xl animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Castova is the modern platform for capturing, managing, and converting leads. Built for teams that value
              simplicity and results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <Button size="lg" className="gap-2">
                Get Started Free <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => setIsModalOpen(true)}>
                Watch Demo
              </Button>
            </div>
            <div className="mt-8 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <p className="text-sm text-foreground/60 mb-2">Trusted by leading companies:</p>
              <div className="flex gap-4">
                <span className="text-foreground/50 text-lg font-semibold">Company A</span>
                <span className="text-foreground/50 text-lg font-semibold">Company B</span>
                <span className="text-foreground/50 text-lg font-semibold">Company C</span>
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center justify-center">
            <Image
              src="/content-marketing.png"
              alt="Content Marketing"
              width={500}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
      <VideoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoSrc="/placeholder-video.mp4"
      />
    </section>
  )
}
