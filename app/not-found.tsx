'use client'

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { typography } from '@/lib/design-system'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#164550] flex flex-col">
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-center p-8">
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <h1 className={`${typography.heading.h1} text-white mb-6`}>
            <span className="block text-[#FAC833] mb-4">404</span>
            Stránka nenalezena
          </h1>
          <p className={`${typography.body.large} text-white/60 mb-12`}>
            Omlouváme se, ale stránka, kterou hledáte, neexistuje nebo byla přesunuta.
          </p>
          <Button 
            asChild
            className="rounded-full h-14 px-8 bg-[#FAC833] hover:bg-[#FAC833]/90 text-[#164550] font-medium text-lg"
          >
            <Link href="/" className="flex items-center">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Zpět na hlavní stránku
            </Link>
          </Button>
        </div>
      </div>
      <Footer />

      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(#8FBEC3 1px, transparent 1px),
                            linear-gradient(90deg, #8FBEC3 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#154350]/5 via-transparent to-transparent" />
      </div>
    </div>
  )
} 