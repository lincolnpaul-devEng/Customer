"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Copy, Eye, EyeOff, Trash2, Plus } from "lucide-react"

interface ApiKey {
  id: string
  name: string
  key: string
  created: string
  lastUsed: string
}

export function ApiKeyManagement() {
  const [apiKeys, setApiKeys] = useState<ApiKey[]>([
    {
      id: "1",
      name: "Production API Key",
      key: "sk_live_••••••••••••••••••••••••",
      created: "2024-12-01",
      lastUsed: "2025-01-18",
    },
    {
      id: "2",
      name: "Development API Key",
      key: "sk_test_••••••••••••••••••••••••",
      created: "2024-11-15",
      lastUsed: "2025-01-17",
    },
  ])

  const [visibleKeys, setVisibleKeys] = useState<Set<string>>(new Set())

  const toggleKeyVisibility = (id: string) => {
    setVisibleKeys((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  const deleteKey = (id: string) => {
    setApiKeys((prev) => prev.filter((key) => key.id !== id))
  }

  return (
    <Card className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-foreground">API Keys</h3>
          <p className="text-sm text-muted-foreground mt-1">Manage your API keys for integrations</p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          Generate New Key
        </Button>
      </div>

      <div className="space-y-4">
        {apiKeys.map((apiKey) => (
          <div key={apiKey.id} className="p-4 border border-border rounded-lg space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-medium text-foreground">{apiKey.name}</h4>
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => toggleKeyVisibility(apiKey.id)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {visibleKeys.has(apiKey.id) ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </Button>
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                  <Copy className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => deleteKey(apiKey.id)}
                  className="text-destructive hover:text-destructive"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="bg-muted p-3 rounded font-mono text-sm text-muted-foreground break-all">
              {visibleKeys.has(apiKey.id) ? apiKey.key.replace(/•/g, "a") : apiKey.key}
            </div>

            <div className="grid md:grid-cols-2 gap-4 text-xs text-muted-foreground">
              <div>
                <p className="font-medium">Created</p>
                <p>{new Date(apiKey.created).toLocaleDateString()}</p>
              </div>
              <div>
                <p className="font-medium">Last Used</p>
                <p>{new Date(apiKey.lastUsed).toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
