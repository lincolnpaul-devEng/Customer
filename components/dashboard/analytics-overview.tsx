"use client"

import { Card } from "@/components/ui/card"
import { TrendingUp, Users, Target, Zap } from "lucide-react"

const stats = [
  {
    label: "Total Leads",
    value: "2,847",
    change: "+12.5%",
    icon: Users,
    color: "text-blue-500",
  },
  {
    label: "Conversion Rate",
    value: "24.8%",
    change: "+2.3%",
    icon: Target,
    color: "text-green-500",
  },
  {
    label: "Active Campaigns",
    value: "8",
    change: "+1",
    icon: Zap,
    color: "text-purple-500",
  },
  {
    label: "Revenue Generated",
    value: "$48,250",
    change: "+18.2%",
    icon: TrendingUp,
    color: "text-emerald-500",
  },
]

export function AnalyticsOverview() {
  return (
    <div className="grid md:grid-cols-4 gap-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon
        return (
          <Card key={index} className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-xs text-green-600 mt-2">{stat.change} from last month</p>
              </div>
              <Icon className={`w-8 h-8 ${stat.color} opacity-20`} />
            </div>
          </Card>
        )
      })}
    </div>
  )
}
