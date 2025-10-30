"use client"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X, Mail, Phone, Building2, Calendar } from "lucide-react"

interface LeadDetail {
  id: string
  name: string
  email: string
  phone: string
  company: string
  status: string
  source: string
  dateAdded: string
  notes: string
  lastContact: string
}

const mockLeadDetails: Record<string, LeadDetail> = {
  "1": {
    id: "1",
    name: "John Smith",
    email: "john@example.com",
    phone: "+1 (555) 123-4567",
    company: "Tech Corp",
    status: "qualified",
    source: "Organic",
    dateAdded: "2025-01-15",
    notes: "Interested in enterprise plan. Budget approved for Q1.",
    lastContact: "2025-01-18",
  },
  "2": {
    id: "2",
    name: "Sarah Johnson",
    email: "sarah@example.com",
    phone: "+1 (555) 234-5678",
    company: "Digital Solutions",
    status: "new",
    source: "Paid Ads",
    dateAdded: "2025-01-18",
    notes: "New lead from campaign. Needs initial consultation.",
    lastContact: "2025-01-18",
  },
}

export function LeadDetailModal({ leadId, onClose }: { leadId: string; onClose: () => void }) {
  const lead = mockLeadDetails[leadId]

  if (!lead) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 flex items-center justify-between p-6 border-b border-border bg-card">
          <h2 className="text-2xl font-bold text-foreground">Lead Details</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
        </div>

        <div className="p-6 space-y-6">
          {/* Header */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-2">{lead.name}</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                {lead.status}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200">
                {lead.source}
              </span>
            </div>
          </div>

          {/* Contact Information */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">Email</p>
                <p className="text-sm font-medium text-foreground">{lead.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">Phone</p>
                <p className="text-sm font-medium text-foreground">{lead.phone}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Building2 className="w-5 h-5 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">Company</p>
                <p className="text-sm font-medium text-foreground">{lead.company}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">Date Added</p>
                <p className="text-sm font-medium text-foreground">{new Date(lead.dateAdded).toLocaleDateString()}</p>
              </div>
            </div>
          </div>

          {/* Notes */}
          <div>
            <h4 className="font-semibold text-foreground mb-2">Notes</h4>
            <p className="text-sm text-muted-foreground bg-muted p-4 rounded-lg">{lead.notes}</p>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap gap-3">
            <Button className="flex-1">Send Email</Button>
            <Button variant="outline" className="flex-1 bg-transparent">
              Schedule Call
            </Button>
            <Button variant="outline" className="flex-1 bg-transparent">
              Update Status
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
