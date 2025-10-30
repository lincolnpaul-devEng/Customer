"use client"

import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { LeadsTable } from "@/components/dashboard/leads-table"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { useState } from "react"
import { LeadDetailModal } from "@/components/dashboard/lead-detail-modal"

export default function LeadsPage() {
  const [selectedLead, setSelectedLead] = useState<string | null>(null)

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Leads</h1>
            <p className="text-muted-foreground mt-1">Manage and track all your leads in one place.</p>
          </div>
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            Add Lead
          </Button>
        </div>

        <LeadsTable onSelectLead={setSelectedLead} />

        {selectedLead && <LeadDetailModal leadId={selectedLead} onClose={() => setSelectedLead(null)} />}
      </div>
    </DashboardLayout>
  )
}
