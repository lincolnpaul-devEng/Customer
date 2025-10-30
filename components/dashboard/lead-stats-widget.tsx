"use client"

import { Card } from "@/components/ui/card"

export function LeadStatsWidget() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold text-foreground mb-4">Lead Statistics</h3>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground">New Leads Today</span>
          <span className="font-semibold text-foreground">42</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground">Qualified Leads</span>
          <span className="font-semibold text-foreground">28</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground">Pending Follow-up</span>
          <span className="font-semibold text-foreground">15</span>
        </div>
      </div>
    </Card>
  )
}
