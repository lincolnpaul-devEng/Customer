'use client'

import { AlertCircle } from "lucide-react"

export function ErrorToast() {
  return (
    <div className="fixed top-4 right-4 w-80 p-4 bg-red-500 text-white rounded-lg shadow-lg flex items-center">
      <AlertCircle className="w-6 h-6 mr-3" />
      <div>
        <h4 className="font-bold">Payment Failed</h4>
        <p>There was an error processing your payment.</p>
      </div>
    </div>
  )
}
