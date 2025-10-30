'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CardPaymentForm } from "@/components/ui/card-payment-form"
import { PayPalModal } from "@/components/ui/paypal-modal"
import { MpesaModal } from "@/components/ui/mpesa-modal"
import { useToast } from "@/components/ui/use-toast"

export default function PaymentPage() {
  const { toast } = useToast()
  const [isPayPalModalOpen, setIsPayPalModalOpen] = useState(false)
  const [isMpesaModalOpen, setIsMpesaModalOpen] = useState(false)

  const handlePaymentSuccess = () => {
    toast({ title: "Payment successful!" })
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="w-full max-w-md p-8 space-y-8 bg-card rounded-lg shadow-lg">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground">Payment</h1>
          <p className="mt-2 text-muted-foreground">Choose your preferred payment method.</p>
        </div>
        <Tabs defaultValue="card">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="card">Card</TabsTrigger>
            <TabsTrigger value="paypal">PayPal</TabsTrigger>
            <TabsTrigger value="mpesa">M-Pesa</TabsTrigger>
          </TabsList>
          <TabsContent value="card">
            <CardPaymentForm />
          </TabsContent>
          <TabsContent value="paypal">
            <div className="text-center py-8">
              <Button onClick={() => setIsPayPalModalOpen(true)}>Pay with PayPal</Button>
            </div>
          </TabsContent>
          <TabsContent value="mpesa">
            <div className="text-center py-8">
              <Button onClick={() => setIsMpesaModalOpen(true)}>Pay with M-Pesa</Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <PayPalModal isOpen={isPayPalModalOpen} onClose={() => setIsPayPalModalOpen(false)} onPaymentSuccess={handlePaymentSuccess} />
      <MpesaModal isOpen={isMpesaModalOpen} onClose={() => setIsMpesaModalOpen(false)} onPaymentSuccess={handlePaymentSuccess} />
    </div>
  )
}
