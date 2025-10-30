"use client"

export function CastovaLogo({ animated = false }: { animated?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <div className="relative w-8 h-8 flex items-center justify-center">
        <div className="text-2xl font-bold text-primary">C</div>
        {animated && <div className="absolute inset-0 border-2 border-primary rounded-full animate-orbit opacity-50" />}
        {!animated && <div className="absolute inset-0 border-2 border-primary rounded-full opacity-30" />}
      </div>
      <span className="text-xl font-semibold text-foreground">Castova</span>
    </div>
  )
}
