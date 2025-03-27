'use client'

import React from 'react'
import { ArrowRight, ShieldCheck, Clock, LockKeyhole } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { colors, gradients, typography, animations } from '@/lib/design-system'
import { cn } from '@/lib/utils'

export function Hero() {
  return (
    <section className="relative min-h-screen w-full">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(#8FBEC3 1px, transparent 1px),
                             linear-gradient(90deg, #8FBEC3 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#154350]/5 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative">
        <div className="container px-12 py-32 mx-auto relative z-10 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            <div className="space-y-12">
              <div className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-sm text-[#8FBEC3]">
                <ShieldCheck className="w-4 h-4 mr-2" />
                <span>Zákon 65/2017 Sb. o ochraně zdraví před škodlivými účinky návykových látek</span>
              </div>
              
              <div className="space-y-8">
                <h1 className={typography.heading.h1}>
                  Ověříme věk vašich zákazníků
                  <span className="block mt-6 text-[#FAC833]">snadno, rychle a bezpečně</span>
                </h1>
                <p className={`${typography.body.large} text-white/60 max-w-3xl mt-6`}>
                  Provozujte e-shop pohodlně a bez starostí. Věk vašich zákazníků ověříme my. 
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-8">
                <Button 
                  asChild
                  size="lg"
                  className="relative group rounded-full h-16 px-12 text-lg bg-[#FAC833] text-[#231F20] hover:opacity-90 transition-all duration-300"
                >
                  <Link href="/vyzkousejte-zdarma" className="flex items-center">
                    Vyzkoušejte zdarma
                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button 
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full h-16 px-12 text-lg border-white/10 text-white hover:bg-white/5 transition-all duration-300"
                >
                  <Link href="/jak-to-funguje">
                    Jak to funguje
                  </Link>
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-10 pt-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-white/5 backdrop-blur-sm flex items-center justify-center">
                    <Clock className="w-6 h-6 text-[#8FBEC3]" />
                  </div>
                  <div>
                    <div className="text-base font-medium text-[#FAC833]">30s</div>
                    <div className="text-sm text-white/60">Rychlé ověření</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-white/5 backdrop-blur-sm flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-[#8FBEC3]" />
                  </div>
                  <div>
                    <div className="text-base font-medium text-[#FAC833]">GDPR</div>
                    <div className="text-sm text-white/60">Compliance</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-white/5 backdrop-blur-sm flex items-center justify-center">
                    <LockKeyhole className="w-6 h-6 text-[#8FBEC3]" />
                  </div>
                  <div>
                    <div className="text-base font-medium text-[#FAC833]">ISO</div>
                    <div className="text-sm text-white/60">27001</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual content */}
            <div className="relative lg:h-[600px] group">
              {/* Background glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#154350]/20 to-[#8FBEC3]/20 rounded-3xl blur-2xl group-hover:from-[#154350]/30 group-hover:to-[#8FBEC3]/30 transition-all duration-500" />
              
              {/* Main mockup */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl h-full">
                {/* Grid overlay */}
                <div className="absolute inset-0 opacity-[0.02]"
                  style={{
                    backgroundImage: `linear-gradient(#8FBEC3 1px, transparent 1px),
                                   linear-gradient(90deg, #8FBEC3 1px, transparent 1px)`,
                    backgroundSize: '20px 20px'
                  }}
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                
                {/* SVG illustration */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 200 200"
                  width="300"
                  height="300"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                  <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#8FBEC3', stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: '#154350', stopOpacity: 1 }} />
                    </linearGradient>
                  </defs>
                  <g fill="none" stroke="white" strokeWidth="2">
                    <path
                      d="M100 10 L180 40 L180 160 C180 190 140 200 100 180 C60 200 20 190 20 160 L20 40 Z"
                      fill="url(#grad1)"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M70 130 L100 160 L150 100"
                      stroke="white"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="100" cy="100" r="10" fill="white" />
                    <path
                      d="M50 50 C70 30, 130 30, 150 50"
                      stroke="white"
                      strokeWidth="2"
                      fill="none"
                    />
                  </g>
                </svg>

                {/* Main image */}
                <Image
                  src="/mockup-verification.png"
                  alt="PassProve verification process"
                  width={600}
                  height={600}
                  className="rounded-xl w-full h-full object-cover"
                />

                {/* Verification badge */}
                <div className="absolute -top-8 -right-8 bg-[#154350]/70 backdrop-blur-sm p-5 rounded-2xl shadow-lg border border-white/10 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#FAC833] flex items-center justify-center">
                      <ShieldCheck className="w-6 h-6 text-[#231F20]" />
                    </div>
                    <div>
                      <div className="text-base font-medium text-white">Ověřeno</div>
                      <div className="text-sm text-white/60">za 2.4 sekundy</div>
                    </div>
                  </div>
                </div>

                {/* Method badges */}
                <div className="absolute -left-8 bottom-8 bg-[#154350]/70 backdrop-blur-sm p-5 rounded-2xl shadow-lg border border-white/10 animate-float" style={{ animationDelay: '-2s' }}>
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-2">
                      <div className="w-10 h-10 rounded-full bg-[#154350] flex items-center justify-center text-white text-sm font-medium border border-white/10">ID</div>
                      <div className="w-10 h-10 rounded-full bg-[#8FBEC3] flex items-center justify-center text-[#231F20] text-sm font-medium border border-white/10">SMS</div>
                      <div className="w-10 h-10 rounded-full bg-[#FAC833] flex items-center justify-center text-[#231F20] text-sm font-medium border border-white/10">Bank</div>
                    </div>
                    <div>
                      <div className="text-base font-medium text-white">Více způsobů ověření</div>
                      <div className="text-sm text-white/60">Vyberte si ten nejvhodnější</div>
                    </div>
                  </div>
                </div>

                {/* Decorative dots */}
                <div className="absolute top-1/4 -right-3 w-2 h-2 rounded-full bg-[#FAC833] animate-pulse" />
                <div className="absolute top-1/2 -left-3 w-2 h-2 rounded-full bg-[#8FBEC3] animate-pulse" style={{ animationDelay: '-1s' }} />
                <div className="absolute bottom-1/4 -right-3 w-2 h-2 rounded-full bg-[#154350] animate-pulse" style={{ animationDelay: '-2s' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}