'use client'

import { CheckCircle2 } from "lucide-react"

export function SuccessToast() {
  return (
    <div className="fixed top-4 right-4 w-80 p-4 bg-green-500 text-white rounded-lg shadow-lg flex items-center">
      <CheckCircle2 className="w-6 h-6 mr-3" />
      <div>
        <h4 className="font-bold">Payment Successful</h4>
        <p>Your payment has been processed successfully.</p>
      </div>
    </div>
  )
}
