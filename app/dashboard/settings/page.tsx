"use client"

import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { UserProfileSettings } from "@/components/dashboard/user-profile-settings"
import { NotificationPreferences } from "@/components/dashboard/notification-preferences"
import { ApiKeyManagement } from "@/components/dashboard/api-key-management"
import { LocalizationSettings } from "@/components/dashboard/localization-settings"
import { IntegrationSettings } from "@/components/dashboard/integration-settings"

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Settings</h1>
          <p className="text-muted-foreground mt-1">Manage your account and preferences.</p>
        </div>

        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full grid-cols-5 bg-muted">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="api">API Keys</TabsTrigger>
            <TabsTrigger value="localization">Localization</TabsTrigger>
            <TabsTrigger value="integrations">Integrations</TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-4">
            <UserProfileSettings />
          </TabsContent>

          <TabsContent value="notifications" className="space-y-4">
            <NotificationPreferences />
          </TabsContent>

          <TabsContent value="api" className="space-y-4">
            <ApiKeyManagement />
          </TabsContent>

          <TabsContent value="localization" className="space-y-4">
            <LocalizationSettings />
          </TabsContent>

          <TabsContent value="integrations" className="space-y-4">
            <IntegrationSettings />
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
