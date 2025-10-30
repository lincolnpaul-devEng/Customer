"use client"

import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { IntegrationSettings } from "@/components/dashboard/integration-settings"

export default function IntegrationsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Integrations</h1>
          <p className="text-muted-foreground mt-1">Connect your favorite tools and services.</p>
        </div>

        <IntegrationSettings />
      </div>
    </DashboardLayout>
  )
}
