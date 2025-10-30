"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { X } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function InviteTeamMemberModal({ onClose }: { onClose: () => void }) {
  const [email, setEmail] = useState("")
  const [role, setRole] = useState("sales_rep")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setEmail("")
      setRole("sales_rep")
      setSubmitted(false)
      onClose()
    }, 1500)
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-xl font-bold text-foreground">Invite Team Member</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
        </div>

        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8">
              <p className="text-lg font-semibold text-green-600 mb-2">Invitation sent!</p>
              <p className="text-muted-foreground">They'll receive an email to join your team.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="colleague@example.com"
                  required
                />
              </div>

              <div>
                <Label htmlFor="role" className="text-sm font-medium text-foreground">
                  Role
                </Label>
                <Select value={role} onValueChange={setRole}>
                  <SelectTrigger id="role">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">Administrator</SelectItem>
                    <SelectItem value="manager">Manager</SelectItem>
                    <SelectItem value="sales_rep">Sales Representative</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <p className="text-xs text-muted-foreground">
                  <strong>Sales Representative:</strong> Can view and manage assigned leads
                </p>
              </div>

              <div className="flex gap-3">
                <Button type="submit" className="flex-1">
                  Send Invite
                </Button>
                <Button type="button" variant="outline" className="flex-1 bg-transparent" onClick={onClose}>
                  Cancel
                </Button>
              </div>
            </form>
          )}
        </div>
      </Card>
    </div>
  )
}
