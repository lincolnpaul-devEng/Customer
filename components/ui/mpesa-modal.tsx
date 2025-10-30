'use client'

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface MpesaModalProps {
  isOpen: boolean
  onClose: () => void
  onPaymentSuccess: () => void
}

export function MpesaModal({ isOpen, onClose, onPaymentSuccess }: MpesaModalProps) {
  const [phoneNumber, setPhoneNumber] = useState("")

  const handleMpesaPayment = async () => {
    // In a real application, you would integrate with the M-Pesa API here
    await new Promise((resolve) => setTimeout(resolve, 2000))
    onPaymentSuccess()
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Pay with M-Pesa</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="phone-number">Phone Number</Label>
            <Input id="phone-number" placeholder="Enter your M-Pesa phone number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button onClick={handleMpesaPayment}>Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
