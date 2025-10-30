"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CastovaLogo } from "@/components/castova-logo"
import { useAuth } from "@/lib/auth-context"
import Link from "next/link"
import { ShaderAnimation } from "@/components/ui/shader-animation"

export default function SignupPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { signup } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      if (!name || !email || !password || !confirmPassword) {
        setError("Please fill in all fields")
        return
      }

      if (password !== confirmPassword) {
        setError("Passwords do not match")
        return
      }

      if (password.length < 6) {
        setError("Password must be at least 6 characters")
        return
      }

      await signup(email, password, name)
      router.push("/dashboard")
    } catch (err) {
      setError("Signup failed. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-background flex items-center justify-center">
      <div className="fixed inset-0 z-0">
        <ShaderAnimation />
      </div>

      <div className="relative z-10 w-full max-w-md px-4">
        <div className="bg-card/80 backdrop-blur-sm border border-border rounded-lg p-8 shadow-lg">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <CastovaLogo animated={false} />
          </div>

          {/* Title */}
          <h1 className="text-2xl font-bold text-white text-center mb-2">Create Account</h1>
          <p className="text-white/70 text-center mb-6">Join Castova and start managing leads</p>

          {/* Error Message */}
          {error && (
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 mb-6">
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name" className="text-white/80">
                Full Name
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-2 bg-background/50 border-border text-white placeholder:text-white/40"
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-white/80">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 bg-background/50 border-border text-white placeholder:text-white/40"
              />
            </div>

            <div>
              <Label htmlFor="password" className="text-white/80">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-2 bg-background/50 border-border text-white placeholder:text-white/40"
              />
            </div>

            <div>
              <Label htmlFor="confirmPassword" className="text-white/80">
                Confirm Password
              </Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="mt-2 bg-background/50 border-border text-white placeholder:text-white/40"
              />
            </div>

            <Button type="submit" disabled={isLoading} className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-6">
              {isLoading ? "Creating Account..." : "Create Account"}
            </Button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-card/80 text-white/60">Already have an account?</span>
            </div>
          </div>

          {/* Sign In Link */}
          <Link href="/login">
            <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10 bg-transparent">
              Sign In
            </Button>
          </Link>
        </div>
      </div>
    </main>
  )
}
