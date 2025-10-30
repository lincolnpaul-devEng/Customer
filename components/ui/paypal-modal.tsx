'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface PayPalModalProps {
  isOpen: boolean
  onClose: () => void
  onPaymentSuccess: () => void
}

export function PayPalModal({ isOpen, onClose, onPaymentSuccess }: PayPalModalProps) {
  const handlePayPalPayment = async () => {
    // In a real application, you would integrate with the PayPal API here
    await new Promise((resolve) => setTimeout(resolve, 2000))
    onPaymentSuccess()
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Pay with PayPal</DialogTitle>
        </DialogHeader>
        <div className="py-4 text-center">
          <p className="text-lg font-semibold">Confirm Your PayPal Payment</p>
          <p className="text-muted-foreground mt-2">You will be redirected to PayPal to complete your purchase.</p>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button onClick={handlePayPalPayment}>Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
