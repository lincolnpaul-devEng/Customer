"use client"

import { Button } from "@/components/ui/button"
import { CastovaLogo } from "@/components/castova-logo"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
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
              <Button size="lg" variant="outline">
                Watch Demo
              </Button>
            </div>
          </div>
          <div className="hidden md:flex items-center justify-center">
            <div className="w-full h-96 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center border border-border">
              <div className="text-center">
                <div className="text-6xl mb-4">📊</div>
                <p className="text-foreground/60">Lead Analytics Dashboard</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
