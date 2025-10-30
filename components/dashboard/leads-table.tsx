"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronDown, Search, MoreHorizontal, Mail, Calendar } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface Lead {
  id: string
  name: string
  email: string
  phone: string
  company: string
  status: "new" | "qualified" | "contacted" | "converted"
  source: string
  dateAdded: string
}

const mockLeads: Lead[] = [
  {
    id: "1",
    name: "John Smith",
    email: "john@example.com",
    phone: "+1 (555) 123-4567",
    company: "Tech Corp",
    status: "qualified",
    source: "Organic",
    dateAdded: "2025-01-15",
  },
  {
    id: "2",
    name: "Sarah Johnson",
    email: "sarah@example.com",
    phone: "+1 (555) 234-5678",
    company: "Digital Solutions",
    status: "new",
    source: "Paid Ads",
    dateAdded: "2025-01-18",
  },
  {
    id: "3",
    name: "Michael Chen",
    email: "michael@example.com",
    phone: "+1 (555) 345-6789",
    company: "Growth Labs",
    status: "contacted",
    source: "Referral",
    dateAdded: "2025-01-16",
  },
  {
    id: "4",
    name: "Emma Davis",
    email: "emma@example.com",
    phone: "+1 (555) 456-7890",
    company: "Innovation Inc",
    status: "converted",
    source: "Direct",
    dateAdded: "2025-01-10",
  },
]

const statusColors: Record<string, string> = {
  new: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  qualified: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  contacted: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
  converted: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
}

export function LeadsTable({ onSelectLead }: { onSelectLead: (id: string) => void }) {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState<"name" | "date">("date")

  const filteredLeads = mockLeads.filter(
    (lead) =>
      lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.company.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const sortedLeads = [...filteredLeads].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name)
    }
    return new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime()
  })

  return (
    <Card className="overflow-hidden">
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search leads by name, email, or company..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-2 bg-transparent">
                Sort by <ChevronDown className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setSortBy("date")}>Date Added</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSortBy("name")}>Name</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-muted border-b border-border">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Email</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Company</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Status</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Source</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Date Added</th>
              <th className="px-6 py-3 text-right text-sm font-semibold text-foreground">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {sortedLeads.map((lead) => (
              <tr key={lead.id} className="hover:bg-muted/50 transition-colors">
                <td className="px-6 py-4 text-sm font-medium text-foreground">{lead.name}</td>
                <td className="px-6 py-4 text-sm text-muted-foreground flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  {lead.email}
                </td>
                <td className="px-6 py-4 text-sm text-muted-foreground">{lead.company}</td>
                <td className="px-6 py-4 text-sm">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[lead.status]}`}>
                    {lead.status.charAt(0).toUpperCase() + lead.status.slice(1)}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-muted-foreground">{lead.source}</td>
                <td className="px-6 py-4 text-sm text-muted-foreground flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {new Date(lead.dateAdded).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => onSelectLead(lead.id)}>View Details</DropdownMenuItem>
                      <DropdownMenuItem>Edit Lead</DropdownMenuItem>
                      <DropdownMenuItem>Send Email</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
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
