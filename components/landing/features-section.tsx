"use client"

import { Card } from "@/components/ui/card"
import { BarChart3, Users, Zap, Shield } from "lucide-react"
import Image from "next/image"

const features = [
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Track lead sources, conversion funnels, and team performance in real-time dashboards.",
    imageSrc: "/placeholder-analytics.png",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Manage team members with role-based access and permission controls.",
    imageSrc: "/placeholder-team.png",
  },
  {
    icon: Zap,
    title: "Smart Lead Capture",
    description: "Multi-field forms with validation and seamless chatbot integration.",
    imageSrc: "/placeholder-lead.png",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "API key management and CRM integrations with HubSpot and Salesforce.",
    imageSrc: "/placeholder-security.png",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Powerful Features, Simple Design</h2>
          <p className="text-lg text-foreground/60">Everything you need to manage leads effectively</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={index}
                className="p-8 hover:shadow-lg transition-all duration-300 hover:border-primary/50 bg-card border border-border"
              >
                <div className="flex flex-col md:flex-row items-center gap-6">
                  {index % 2 === 0 && (
                    <Image
                      src={feature.imageSrc}
                      alt={feature.title}
                      width={400}
                      height={200}
                      className="rounded-md object-cover w-full md:w-1/2"
                    />
                  )}
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <Icon className="w-12 h-12 text-primary" />
                      <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                    </div>
                    <p className="text-foreground/60">{feature.description}</p>
                  </div>
                  {index % 2 !== 0 && (
                    <Image
                      src={feature.imageSrc}
                      alt={feature.title}
                      width={400}
                      height={200}
                      className="rounded-md object-cover w-full md:w-1/2"
                    />
                  )}
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
