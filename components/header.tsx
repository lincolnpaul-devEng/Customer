"use client"

import { CastovaLogo } from "./castova-logo"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Menu } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export function Header() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <header className="border-b border-border bg-background sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <CastovaLogo animated={false} />
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-foreground/70 hover:text-foreground transition">
            Features
          </a>
          <a href="#testimonials" className="text-sm text-foreground/70 hover:text-foreground transition">
            Testimonials
          </a>
          <a href="#pricing" className="text-sm text-foreground/70 hover:text-foreground transition">
            Pricing
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </Button>
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={() => router.push("/login")}>
              Sign In
            </Button>
            <Button variant="default" size="sm" onClick={() => router.push("/signup")}>
              Sign Up
            </Button>
          </div>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#features" className="block px-3 py-2 rounded-md text-base font-medium text-foreground/70 hover:text-foreground hover:bg-accent transition">
              Features
            </a>
            <a href="#testimonials" className="block px-3 py-2 rounded-md text-base font-medium text-foreground/70 hover:text-foreground hover:bg-accent transition">
              Testimonials
            </a>
            <a href="#pricing" className="block px-3 py-2 rounded-md text-base font-medium text-foreground/70 hover:text-foreground hover:bg-accent transition">
              Pricing
            </a>
          </div>
          <div className="pt-4 pb-3 border-t border-border">
            <div className="px-2 space-y-2">
              <Button variant="ghost" className="w-full justify-start" onClick={() => router.push("/login")}>
                Sign In
              </Button>
              <Button variant="default" className="w-full justify-start" onClick={() => router.push("/signup")}>
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
