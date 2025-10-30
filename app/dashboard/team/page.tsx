"use client"

import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { TeamMembersTable } from "@/components/dashboard/team-members-table"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { useState } from "react"
import { InviteTeamMemberModal } from "@/components/dashboard/invite-team-member-modal"

export default function TeamPage() {
  const [showInviteModal, setShowInviteModal] = useState(false)

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Team Members</h1>
            <p className="text-muted-foreground mt-1">Manage your team and set permissions.</p>
          </div>
          <Button className="gap-2" onClick={() => setShowInviteModal(true)}>
            <Plus className="w-4 h-4" />
            Invite Member
          </Button>
        </div>

        <TeamMembersTable />

        {showInviteModal && <InviteTeamMemberModal onClose={() => setShowInviteModal(false)} />}
      </div>
    </DashboardLayout>
  )
}
