'use client'

import React from 'react'
import { ArrowRight, ShieldCheck, Clock, LockKeyhole, CheckCircle2, Sparkles } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { colors, gradients, typography, animations } from '@/lib/design-system'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    }
  })
}

export function Hero() {
  return (
    <section className="relative pt-20 pb-32 w-full overflow-hidden">
      {/* Hero Content */}
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-[1440px] mx-auto px-8 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-gradient-to-r from-[#FAC833]/10 to-[#8FBEC3]/10 backdrop-blur-sm border border-[#FAC833]/20 text-sm text-[#8FBEC3]">
            <ShieldCheck className="w-4 h-4 mr-2 text-[#FAC833]" />
            <span>Zákon 65/2017 Sb. o ochraně zdraví před škodlivými účinky návykových látek</span>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="flex justify-center mb-6"
          >
            <Image
              src="/files/Logo_PassProve_bila.svg"
              alt="PassProve Logo"
              width={200}
              height={80}
              className="h-16 w-auto"
            />
          </motion.div>
          
          <div className="space-y-8">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={typography.heading.h1}
            >
              Ověříme věk vašich zákazníků
              <span className="block mt-6 text-[#FAC833]">snadno, rychle a bezpečně</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`${typography.body.large} text-white/80 max-w-3xl mt-6`}
            >
              PassProve je komplexní služba pro bezpečné ověření věku zákazníků nakupujících online.
              Díky nám můžete provozovat e-shop s věkově omezeným zbožím pohodlně a v souladu se zákonem.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-8"
          >
            <Button 
              asChild
              size="lg"
              className="relative group rounded-full h-16 px-12 text-lg bg-gradient-to-r from-[#FAC833] to-[#FAC833]/90 text-[#164550] hover:opacity-90 transition-all duration-300 shadow-lg shadow-[#FAC833]/20 font-medium"
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
              className="rounded-full h-16 px-12 text-lg border-[#FAC833]/20 text-white hover:bg-[#FAC833]/10 transition-all duration-300"
            >
              <Link href="/jak-to-funguje">
                Jak to funguje
              </Link>
            </Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-10 pt-6"
          >
            <div className="flex items-center gap-4 p-4 rounded-xl bg-[#164550]/50 backdrop-blur-sm border border-white/5 hover:border-[#FAC833]/20 transition-all duration-300 hover:shadow-lg hover:shadow-[#FAC833]/5 group">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#FAC833]/20 to-[#8FBEC3]/20 backdrop-blur-sm flex items-center justify-center group-hover:from-[#FAC833]/30 group-hover:to-[#8FBEC3]/30 transition-all duration-300">
                <Clock className="w-6 h-6 text-[#FAC833]" />
              </div>
              <div>
                <div className="text-base font-medium text-[#FAC833]">30s</div>
                <div className="text-sm text-white/60">Rychlé ověření</div>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-xl bg-[#164550]/50 backdrop-blur-sm border border-white/5 hover:border-[#FAC833]/20 transition-all duration-300 hover:shadow-lg hover:shadow-[#FAC833]/5 group">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#FAC833]/20 to-[#8FBEC3]/20 backdrop-blur-sm flex items-center justify-center group-hover:from-[#FAC833]/30 group-hover:to-[#8FBEC3]/30 transition-all duration-300">
                <ShieldCheck className="w-6 h-6 text-[#FAC833]" />
              </div>
              <div>
                <div className="text-base font-medium text-[#FAC833]">GDPR</div>
                <div className="text-sm text-white/60">Compliance</div>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-xl bg-[#164550]/50 backdrop-blur-sm border border-white/5 hover:border-[#FAC833]/20 transition-all duration-300 hover:shadow-lg hover:shadow-[#FAC833]/5 group">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#FAC833]/20 to-[#8FBEC3]/20 backdrop-blur-sm flex items-center justify-center group-hover:from-[#FAC833]/30 group-hover:to-[#8FBEC3]/30 transition-all duration-300">
                <LockKeyhole className="w-6 h-6 text-[#FAC833]" />
              </div>
              <div>
                <div className="text-base font-medium text-[#FAC833]">ISO</div>
                <div className="text-sm text-white/60">27001</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Visual content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative lg:h-[600px] group"
        >
          {/* Premium glass card effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-[#154350]/20 via-[#8FBEC3]/20 to-[#FAC833]/10 rounded-3xl blur-2xl group-hover:from-[#154350]/30 group-hover:via-[#8FBEC3]/30 group-hover:to-[#FAC833]/20 transition-all duration-700" />
          
          {/* Main mockup */}
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl h-full border border-[#FAC833]/10">
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
            
            {/* Logo místo mockupu */}
            <div className="flex items-center justify-center h-full w-full bg-[#154350]/90 p-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="relative"
              >
                <div className="absolute -inset-12 bg-gradient-to-r from-[#154350]/40 via-[#8FBEC3]/10 to-[#FAC833]/20 rounded-full blur-3xl animate-pulse opacity-60" />
                <Image
                  src="/files/Logo_PassProve_bila.svg"
                  alt="PassProve Logo"
                  width={600}
                  height={300}
                  className="w-full h-auto max-w-[500px] relative z-10"
                  priority
                />
                <div className="absolute -inset-2 bg-gradient-to-r from-[#154350]/0 via-[#8FBEC3]/5 to-[#FAC833]/10 rounded-full blur-xl animate-pulse opacity-70" 
                  style={{ animationDelay: '-1.5s' }}
                />
              </motion.div>
            </div>

            {/* Premium badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -top-8 -right-8 bg-gradient-to-r from-[#154350]/70 to-[#154350]/80 backdrop-blur-sm p-5 rounded-2xl shadow-lg border border-[#FAC833]/20 animate-float"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FAC833] to-[#FAC833]/90 flex items-center justify-center shadow-inner">
                  <CheckCircle2 className="w-6 h-6 text-[#164550]" />
                </div>
                <div>
                  <div className="text-base font-medium text-white">Ověřeno</div>
                  <div className="text-sm text-[#8FBEC3]">za 2.4 sekundy</div>
                </div>
              </div>
            </motion.div>

            {/* Method badges */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute -left-8 bottom-12 bg-gradient-to-r from-[#154350]/80 to-[#154350]/70 backdrop-blur-sm p-5 rounded-2xl shadow-lg border border-[#FAC833]/20 animate-float"
              style={{ animationDelay: '-2s' }}
            >
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-[#154350] flex items-center justify-center text-white text-sm font-medium border border-[#FAC833]/20 shadow-lg">ID</div>
                  <div className="w-10 h-10 rounded-full bg-[#8FBEC3] flex items-center justify-center text-[#154350] text-sm font-medium border border-[#FAC833]/20 shadow-lg">SMS</div>
                  <div className="w-10 h-10 rounded-full bg-[#FAC833] flex items-center justify-center text-[#154350] text-sm font-medium border border-[#FAC833]/20 shadow-lg">Bank</div>
                </div>
                <div>
                  <div className="text-base font-medium text-white">Více způsobů ověření</div>
                  <div className="text-sm text-[#8FBEC3]">Vyberte si ten nejvhodnější</div>
                </div>
              </div>
            </motion.div>

            {/* Enterprise badge */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="absolute top-1/3 -right-10 bg-gradient-to-r from-[#FAC833]/20 to-[#FAC833]/10 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-[#FAC833]/30 animate-float"
              style={{ animationDelay: '-1s' }}
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#FAC833] flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-[#154350]" />
                </div>
                <div>
                  <div className="text-sm font-medium text-white">Enterprise</div>
                  <div className="text-xs text-[#8FBEC3]">Řešení na míru</div>
                </div>
              </div>
            </motion.div>

            {/* Decorative elements */}
            <div className="absolute top-1/4 -right-3 w-2 h-2 rounded-full bg-[#FAC833] animate-pulse" />
            <div className="absolute top-1/2 -left-3 w-2 h-2 rounded-full bg-[#8FBEC3] animate-pulse" style={{ animationDelay: '-1s' }} />
            <div className="absolute bottom-1/4 -right-3 w-2 h-2 rounded-full bg-[#FAC833] animate-pulse" style={{ animationDelay: '-2s' }} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}