"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"

export function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <span className="w-10 h-10" />
  }

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative inline-flex items-center justify-center p-1 h-10 w-10 rounded-full overflow-hidden transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FAC833] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#064052]"
      aria-label={theme === "light" ? "Přepnout na tmavý režim" : "Přepnout na světlý režim"}
    >
      <span className="absolute inset-0 bg-white/95 dark:from-[#064052] dark:to-[#064052]/90 dark:bg-gradient-to-r backdrop-blur-sm transition-opacity duration-300 opacity-100"></span>
      <span className="absolute inset-0 border border-[#b1d5d9]/60 dark:border-[#97AAAF]/20 rounded-full"></span>
      
      <Sun 
        className="h-5 w-5 text-[#064052] dark:text-white/80 transition-all duration-300 absolute transform origin-center scale-100 dark:scale-0 dark:opacity-0"
      />
      <Moon 
        className="h-5 w-5 text-white/90 dark:text-yellow-400/90 transition-all duration-300 absolute transform origin-center scale-0 opacity-0 dark:scale-100 dark:opacity-100"
      />
    </button>
  )
} 