import type React from "react"
import { cn } from "@/lib/utils"

interface PlatformIconProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: string
  name: string
}

export function PlatformIcon({ icon, name, className, ...props }: PlatformIconProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center w-12 h-12 rounded-lg bg-black/30 hover:bg-black/40 transition-colors",
        className,
      )}
      {...props}
    >
      <img src={icon || "/placeholder.svg"} alt={`${name} icon`} className="w-8 h-8" />
    </div>
  )
}

