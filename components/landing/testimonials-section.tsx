"use client"

import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Sales Director",
    company: "TechFlow Inc",
    content: "Castova transformed how we manage leads. The dashboard is intuitive and the analytics are invaluable.",
    initials: "SC",
    avatarSrc: "/placeholder-user.jpg",
    companyLogoSrc: "/placeholder-logo.png",
  },
  {
    name: "Marcus Johnson",
    role: "CEO",
    company: "Growth Labs",
    content: "Finally, a lead management tool that doesn't overcomplicate things. Castova gets it right.",
    initials: "MJ",
    avatarSrc: "/placeholder-user.jpg",
    companyLogoSrc: "/placeholder-logo.png",
  },
  {
    name: "Elena Rodriguez",
    role: "Marketing Manager",
    company: "Digital Ventures",
    content: "The team collaboration features are game-changing. Our entire team loves using Castova.",
    initials: "ER",
    avatarSrc: "/placeholder-user.jpg",
    companyLogoSrc: "/placeholder-logo.png",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Loved by Teams Worldwide</h2>
          <p className="text-lg text-foreground/60">See what our customers have to say</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 bg-background border border-border hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <Avatar>
                  <AvatarImage src={testimonial.avatarSrc} alt={testimonial.name} />
                  <AvatarFallback className="bg-primary text-primary-foreground">{testimonial.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <div className="flex items-center gap-2">
                    <p className="text-sm text-foreground/60">{testimonial.role}</p>
                    <Image
                      src={testimonial.companyLogoSrc}
                      alt={testimonial.company}
                      width={20}
                      height={20}
                      className="rounded-full"
                    />
                  </div>
                </div>
              </div>
              <p className="text-foreground/70 italic">"{testimonial.content}"</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
