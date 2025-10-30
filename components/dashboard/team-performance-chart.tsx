"use client"

import { Card } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  { week: "Week 1", sarah: 120, marcus: 100, elena: 90 },
  { week: "Week 2", sarah: 150, marcus: 130, elena: 110 },
  { week: "Week 3", sarah: 180, marcus: 160, elena: 140 },
  { week: "Week 4", sarah: 220, marcus: 200, elena: 180 },
]

export function TeamPerformanceChart() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold text-foreground mb-4">Team Performance</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
          <XAxis dataKey="week" stroke="var(--muted-foreground)" />
          <YAxis stroke="var(--muted-foreground)" />
          <Tooltip
            contentStyle={{
              backgroundColor: "var(--card)",
              border: `1px solid var(--border)`,
              borderRadius: "0.5rem",
            }}
          />
          <Legend />
          <Line type="monotone" dataKey="sarah" stroke="var(--chart-1)" strokeWidth={2} dot={{ r: 4 }} />
          <Line type="monotone" dataKey="marcus" stroke="var(--chart-2)" strokeWidth={2} dot={{ r: 4 }} />
          <Line type="monotone" dataKey="elena" stroke="var(--chart-3)" strokeWidth={2} dot={{ r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  )
}
