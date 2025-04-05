'use client'

import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { ServiceDescription } from "@/components/service-description"
import { Platforms } from "@/components/platforms"
import { Blog } from "@/components/blog"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#daebed] dark:bg-[#064052] transition-colors duration-300">
      <Navbar />
      
      {/* Hero Sekce s vlastním pozadím */}
      <div className="relative bg-gradient-to-br from-[#daebed] to-[#c2e5ea] dark:from-[#064052] dark:to-[#0a2c36]">
        {/* Pozadí pro světlý motiv */}
        <div className="absolute inset-0 block dark:hidden">
          <div className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(#064052 1px, transparent 1px),
                              linear-gradient(90deg, #064052 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#b1d5d9]/20 via-transparent to-transparent" />
          
          {/* Dekorativní prvky - kruhy */}
          <div className="absolute top-[20%] right-[10%] w-72 h-72 rounded-full bg-[#FAC833]/10 blur-3xl animate-pulse" />
          <div className="absolute bottom-[10%] left-[5%] w-64 h-64 rounded-full bg-[#8FBEC3]/15 blur-2xl animate-pulse" style={{ animationDelay: "1.5s" }} />
        </div>
        
        {/* Pozadí pro tmavý motiv */}
        <div className="absolute inset-0 hidden dark:block">
          <div className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `linear-gradient(#8FBEC3 1px, transparent 1px),
                              linear-gradient(90deg, #8FBEC3 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#154350]/5 via-transparent to-transparent" />
          
          {/* Dekorativní prvky - kruhy */}
          <div className="absolute top-[15%] right-[15%] w-80 h-80 rounded-full bg-[#FAC833]/5 blur-3xl animate-pulse" />
          <div className="absolute bottom-[20%] left-[10%] w-56 h-56 rounded-full bg-[#8FBEC3]/10 blur-2xl animate-pulse" style={{ animationDelay: "2s" }} />
        </div>
        
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 mx-auto max-w-[1440px] overflow-hidden">
          <Hero />
        </div>
      </div>
      
      {/* ServiceDescription sekce - diagonální tvar */}
      <div className="relative bg-[#ebf6f7] dark:bg-[#0a3440] -skew-y-3 mt-[-3rem] py-20 z-10">
        <div className="skew-y-3 w-full px-4 sm:px-6 md:px-8 lg:px-12 mx-auto max-w-[1440px] overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <ServiceDescription />
          </motion.div>
        </div>
        
        {/* Dekorativní prvek v pravém dolním rohu */}
        <div className="absolute bottom-0 right-0 w-40 h-40 md:w-60 md:h-60 skew-y-3">
          <div className="relative w-full h-full">
            <div className="absolute bottom-[-20px] right-[-20px] w-full h-full rounded-tl-[40%] bg-[#b1d5d9]/30 dark:bg-[#154350]/30" />
          </div>
        </div>
      </div>
      
      {/* Platforms sekce - vlnitý design */}
      <div className="relative bg-[#daebed] dark:bg-[#064052] mt-[-2rem] pb-16 pt-24">
        <div className="absolute top-0 left-0 right-0 h-24 bg-[#ebf6f7] dark:bg-[#0a3440]" />
        
        {/* Vlnitý přechod mezi sekcemi */}
        <div className="absolute top-0 left-0 right-0 h-24 overflow-hidden">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto min-w-[1000px] fill-[#daebed] dark:fill-[#064052]">
            <path d="M0,224L48,208C96,192,192,160,288,165.3C384,171,480,213,576,218.7C672,224,768,192,864,170.7C960,149,1056,139,1152,149.3C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
        
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(#064052 2px, transparent 2px)`,
            backgroundSize: '30px 30px'
          }}
        />
        
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 mx-auto max-w-[1440px] overflow-hidden relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Platforms />
          </motion.div>
        </div>
      </div>
      
      {/* Blog sekce - asymetrické pozadí */}
      <div className="relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#faf3e0] dark:bg-[#144150] z-0" />
        <div className="absolute top-0 left-0 w-1/2 h-full bg-[#daebed] dark:bg-[#064052] z-0" />
        
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 mx-auto max-w-[1440px] overflow-hidden relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="py-10"
          >
            <Blog />
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}
