"use client"

import type React from "react"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { MoreHorizontal, Shield, Users, UserCheck } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface TeamMember {
  id: string
  name: string
  email: string
  role: "admin" | "manager" | "sales_rep"
  status: "active" | "pending"
  joinedDate: string
  initials: string
}

const mockTeamMembers: TeamMember[] = [
  {
    id: "1",
    name: "You",
    email: "you@example.com",
    role: "admin",
    status: "active",
    joinedDate: "2024-01-01",
    initials: "YO",
  },
  {
    id: "2",
    name: "Sarah Chen",
    email: "sarah@example.com",
    role: "manager",
    status: "active",
    joinedDate: "2024-06-15",
    initials: "SC",
  },
  {
    id: "3",
    name: "Marcus Johnson",
    email: "marcus@example.com",
    role: "sales_rep",
    status: "active",
    joinedDate: "2024-08-20",
    initials: "MJ",
  },
  {
    id: "4",
    name: "Elena Rodriguez",
    email: "elena@example.com",
    role: "sales_rep",
    status: "pending",
    joinedDate: "2025-01-18",
    initials: "ER",
  },
]

const roleIcons: Record<string, React.ReactNode> = {
  admin: <Shield className="w-4 h-4" />,
  manager: <Users className="w-4 h-4" />,
  sales_rep: <UserCheck className="w-4 h-4" />,
}

const roleLabels: Record<string, string> = {
  admin: "Administrator",
  manager: "Manager",
  sales_rep: "Sales Representative",
}

const roleDescriptions: Record<string, string> = {
  admin: "Full access to all features and settings",
  manager: "Can manage leads and team members",
  sales_rep: "Can view and manage assigned leads",
}

export function TeamMembersTable() {
  return (
    <Card className="overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-muted border-b border-border">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Member</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Email</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Role</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Status</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Joined</th>
              <th className="px-6 py-3 text-right text-sm font-semibold text-foreground">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {mockTeamMembers.map((member) => (
              <tr key={member.id} className="hover:bg-muted/50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback>{member.initials}</AvatarFallback>
                    </Avatar>
                    <span className="font-medium text-foreground">{member.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-muted-foreground">{member.email}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className="text-primary">{roleIcons[member.role]}</span>
                    <div>
                      <p className="text-sm font-medium text-foreground">{roleLabels[member.role]}</p>
                      <p className="text-xs text-muted-foreground">{roleDescriptions[member.role]}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      member.status === "active"
                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                        : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                    }`}
                  >
                    {member.status.charAt(0).toUpperCase() + member.status.slice(1)}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-muted-foreground">
                  {new Date(member.joinedDate).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Change Role</DropdownMenuItem>
                      <DropdownMenuItem>Resend Invite</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">Remove</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}
