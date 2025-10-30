"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

interface Integration {
  name: string
  description: string
  status: "connected" | "available"
  icon: string
}

const integrations: Integration[] = [
  {
    name: "HubSpot",
    description: "Sync leads and manage CRM data",
    status: "connected",
    icon: "🔗",
  },
  {
    name: "Salesforce",
    description: "Connect your Salesforce instance",
    status: "available",
    icon: "☁️",
  },
  {
    name: "Slack",
    description: "Get notifications in Slack",
    status: "available",
    icon: "💬",
  },
  {
    name: "Zapier",
    description: "Automate workflows with Zapier",
    status: "available",
    icon: "⚡",
  },
  {
    name: "Google Sheets",
    description: "Export leads to Google Sheets",
    status: "available",
    icon: "📊",
  },
  {
    name: "Custom API",
    description: "Build custom integrations",
    status: "available",
    icon: "🔧",
  },
]

export function IntegrationSettings() {
  return (
    <Card className="p-6 space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">CRM & Integration Connectors</h3>
        <p className="text-sm text-muted-foreground mb-6">Connect your favorite tools to Castova</p>

        <div className="grid md:grid-cols-2 gap-4">
          {integrations.map((integration) => (
            <div
              key={integration.name}
              className="p-4 border border-border rounded-lg flex items-start justify-between"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">{integration.icon}</span>
                  <h4 className="font-medium text-foreground">{integration.name}</h4>
                </div>
                <p className="text-sm text-muted-foreground">{integration.description}</p>
              </div>
              <div className="ml-4">
                {integration.status === "connected" ? (
                  <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">Connected</Badge>
                ) : (
                  <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                    Connect <ExternalLink className="w-3 h-3" />
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}
