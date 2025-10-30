"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function LocalizationSettings() {
  const [language, setLanguage] = useState("en")
  const [timezone, setTimezone] = useState("UTC")
  const [saved, setSaved] = useState(false)

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <Card className="p-6 space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">Localization</h3>

        <div className="space-y-4">
          <div>
            <Label htmlFor="language" className="text-sm font-medium text-foreground">
              Language
            </Label>
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger id="language">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="es">Spanish</SelectItem>
                <SelectItem value="fr">French</SelectItem>
                <SelectItem value="de">German</SelectItem>
                <SelectItem value="ja">Japanese</SelectItem>
                <SelectItem value="zh">Chinese</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="timezone" className="text-sm font-medium text-foreground">
              Timezone
            </Label>
            <Select value={timezone} onValueChange={setTimezone}>
              <SelectTrigger id="timezone">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="UTC">UTC</SelectItem>
                <SelectItem value="EST">Eastern Time (EST)</SelectItem>
                <SelectItem value="CST">Central Time (CST)</SelectItem>
                <SelectItem value="MST">Mountain Time (MST)</SelectItem>
                <SelectItem value="PST">Pacific Time (PST)</SelectItem>
                <SelectItem value="GMT">Greenwich Mean Time (GMT)</SelectItem>
                <SelectItem value="CET">Central European Time (CET)</SelectItem>
                <SelectItem value="IST">Indian Standard Time (IST)</SelectItem>
                <SelectItem value="JST">Japan Standard Time (JST)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex gap-3 mt-6">
          <Button onClick={handleSave}>{saved ? "Saved!" : "Save Settings"}</Button>
          <Button variant="outline" className="bg-transparent">
            Cancel
          </Button>
        </div>
      </div>
    </Card>
  )
}
