"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

interface NotificationSetting {
  id: string
  label: string
  description: string
  enabled: boolean
}

export function NotificationPreferences() {
  const [notifications, setNotifications] = useState<NotificationSetting[]>([
    {
      id: "new_leads",
      label: "New Leads",
      description: "Get notified when new leads are captured",
      enabled: true,
    },
    {
      id: "lead_updates",
      label: "Lead Updates",
      description: "Receive updates when leads change status",
      enabled: true,
    },
    {
      id: "team_activity",
      label: "Team Activity",
      description: "Get notified of team member actions",
      enabled: false,
    },
    {
      id: "conversion_milestones",
      label: "Conversion Milestones",
      description: "Celebrate when conversion goals are reached",
      enabled: true,
    },
    {
      id: "weekly_digest",
      label: "Weekly Digest",
      description: "Receive a weekly summary of your performance",
      enabled: true,
    },
  ])

  const [saved, setSaved] = useState(false)

  const toggleNotification = (id: string) => {
    setNotifications((prev) => prev.map((n) => (n.id === id ? { ...n, enabled: !n.enabled } : n)))
  }

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <Card className="p-6 space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">Notification Preferences</h3>

        <div className="space-y-4">
          {notifications.map((notification) => (
            <div key={notification.id} className="flex items-start justify-between p-4 border border-border rounded-lg">
              <div className="flex-1">
                <Label className="text-sm font-medium text-foreground cursor-pointer">{notification.label}</Label>
                <p className="text-xs text-muted-foreground mt-1">{notification.description}</p>
              </div>
              <input
                type="checkbox"
                checked={notification.enabled}
                onChange={() => toggleNotification(notification.id)}
                className="w-5 h-5 rounded border-border cursor-pointer"
              />
            </div>
          ))}
        </div>

        <div className="flex gap-3 mt-6">
          <Button onClick={handleSave}>{saved ? "Saved!" : "Save Preferences"}</Button>
          <Button variant="outline" className="bg-transparent">
            Reset to Default
          </Button>
        </div>
      </div>
    </Card>
  )
}
