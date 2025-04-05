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
    <section className="relative pt-16 sm:pt-20 md:pt-24 pb-16 sm:pb-24 md:pb-32 w-full overflow-hidden">
      {/* Hero Content */}
      <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center max-w-[1440px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 sm:space-y-8 md:space-y-12"
        >
          <div className="inline-flex flex-wrap items-center justify-center px-3 sm:px-5 py-2 sm:py-3 rounded-full bg-white/50 backdrop-blur-sm border border-[#FAC833]/20 text-xs sm:text-sm text-[#064052] dark:text-[#8FBEC3] dark:bg-gradient-to-r dark:from-[#FAC833]/10 dark:to-[#8FBEC3]/10">
            <ShieldCheck className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-[#FAC833]" />
            <span>Zákon 65/2017 Sb. o ochraně zdraví před škodlivými účinky návykových látek</span>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="flex justify-start sm:justify-center mb-2 sm:mb-4 md:mb-6"
          >
            <Image
              src="/files/Logo_PassProve_bila.svg"
              alt="PassProve Logo"
              width={200}
              height={80}
              className="h-10 sm:h-12 md:h-16 w-auto dark:block hidden"
            />
            <Image
              src="/files/Logo_PassProve_cerna.svg"
              alt="PassProve Logo"
              width={200}
              height={80}
              className="h-10 sm:h-12 md:h-16 w-auto dark:hidden block"
            />
          </motion.div>
          
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#064052] dark:text-white"
            >
              Ověříme věk vašich zákazníků
              <span className="block mt-2 sm:mt-3 md:mt-6 text-[#FAC833]">snadno, rychle a bezpečně</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-[#064052]/90 dark:text-white/80 max-w-3xl mt-3 sm:mt-4 md:mt-6"
            >
              PassProve je komplexní služba pro bezpečné ověření věku zákazníků nakupujících online.
              Díky nám můžete provozovat e-shop s věkově omezeným zbožím pohodlně a v souladu se zákonem.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8"
          >
            <Button 
              asChild
              size="lg"
              className="relative group rounded-full h-12 sm:h-14 md:h-16 px-5 sm:px-8 md:px-12 text-base sm:text-lg bg-gradient-to-r from-[#FAC833] to-[#FAC833]/90 text-[#164550] hover:opacity-95 transition-all duration-300 shadow-lg shadow-[#FAC833]/20 font-medium hover:scale-[1.02] overflow-hidden"
            >
              <Link href="/vyzkousejte-zdarma" className="flex items-center z-10 relative">
                <span className="relative z-10">Vyzkoušejte zdarma</span>
                <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                <span className="absolute inset-0 bg-gradient-to-r from-[#FAD862] to-[#FAE891] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Link>
            </Button>
            
            <Button 
              asChild
              size="lg"
              variant="outline"
              className="rounded-full h-12 sm:h-14 md:h-16 px-5 sm:px-8 md:px-12 text-base sm:text-lg border-[#064052]/20 text-[#064052] dark:text-white dark:border-[#FAC833]/20 hover:bg-gradient-to-r hover:from-white/30 hover:to-transparent dark:hover:bg-gradient-to-r dark:hover:from-[#FAC833]/10 dark:hover:to-transparent transition-all duration-300 group hover:scale-[1.02]"
            >
              <Link href="/jak-to-funguje" className="flex items-center">
                <span>Jak to funguje</span>
                <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300" />
              </Link>
            </Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 pt-3 sm:pt-4 md:pt-6"
          >
            {/* Feature cards */}
            <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-white/70 dark:bg-[#164550]/50 backdrop-blur-sm border border-white/60 dark:border-white/5 hover:border-[#FAC833]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#FAC833]/5 group hover:bg-white/80 dark:hover:bg-[#164550]/60 hover:scale-[1.01]">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-[#FAC833]/20 to-[#8FBEC3]/20 backdrop-blur-sm flex items-center justify-center group-hover:from-[#FAC833]/30 group-hover:to-[#8FBEC3]/30 transition-all duration-300">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-[#FAC833]" />
              </div>
              <div>
                <div className="text-sm sm:text-base font-medium text-[#FAC833]">30s</div>
                <div className="text-xs sm:text-sm text-[#064052]/90 dark:text-white/60">Rychlé ověření</div>
              </div>
            </div>
            {/* Opakuj pro další 2 feature karty s upravenými třídami responsivity */}
          </motion.div>
        </motion.div>

        {/* Visual content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] group mt-6 lg:mt-0 hidden sm:block"
        >
          {/* Premium glass card effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-[#154350]/20 via-[#8FBEC3]/20 to-[#FAC833]/10 rounded-3xl blur-2xl group-hover:from-[#154350]/30 group-hover:via-[#8FBEC3]/30 group-hover:to-[#FAC833]/20 transition-all duration-700" />
          
          {/* Main mockup */}
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl h-full border border-[#FAC833]/10">
            {/* Logo místo mockupu */}
            <div className="flex items-center justify-center h-full w-full bg-white/90 dark:bg-[#154350]/90 p-6 sm:p-8 md:p-12">
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
                  className="w-full h-auto max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[500px] relative z-10 dark:block hidden"
                  priority
                />
                <Image
                  src="/files/Logo_PassProve_cerna.svg"
                  alt="PassProve Logo"
                  width={600}
                  height={300}
                  className="w-full h-auto max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[500px] relative z-10 dark:hidden block"
                  priority
                />
                <div className="absolute -inset-2 bg-gradient-to-r from-[#154350]/0 via-[#8FBEC3]/5 to-[#FAC833]/10 rounded-full blur-xl animate-pulse opacity-70" 
                  style={{ animationDelay: '-1.5s' }}
                />
              </motion.div>
            </div>

            {/* Badges - upravit velikosti a pozice pro různé rozlišení */}
          </div>
        </motion.div>
      </div>
    </section>
  )
}