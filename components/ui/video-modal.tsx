"use client"

import { Dialog, DialogContent } from "@/components/ui/dialog"

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
  videoSrc: string
}

export function VideoModal({ isOpen, onClose, videoSrc }: VideoModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px] p-0 overflow-hidden">
        <video src={videoSrc} controls autoPlay className="w-full h-auto"></video>
      </DialogContent>
    </Dialog>
  )
}
