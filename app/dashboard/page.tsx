"use client"

import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { AnalyticsOverview } from "@/components/dashboard/analytics-overview"
import { ConversionFunnelChart } from "@/components/dashboard/conversion-funnel-chart"
import { SourceBreakdownChart } from "@/components/dashboard/source-breakdown-chart"
import { TeamPerformanceChart } from "@/components/dashboard/team-performance-chart"

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground mt-1">Welcome back! Here's your lead performance overview.</p>
        </div>

        <AnalyticsOverview />

        <div className="grid md:grid-cols-2 gap-6">
          <ConversionFunnelChart />
          <SourceBreakdownChart />
        </div>

        <TeamPerformanceChart />
      </div>
    </DashboardLayout>
  )
}
