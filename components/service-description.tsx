'use client'

import React from 'react'
import { ArrowRight, ShieldCheck, Zap, Lock } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { colors, gradients, typography, animations } from '@/lib/design-system'
import { motion } from "framer-motion"
import { cn } from '@/lib/utils'

export function ServiceDescription() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1 + 0.2,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="relative py-32">
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#8FBEC3] opacity-[0.02] rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-[#154350] opacity-[0.02] rounded-full blur-3xl animate-float" style={{ animationDelay: '-2s' }} />
      </div>

      <div className="container px-12 mx-auto max-w-7xl space-y-32 relative"> 
        {/* Background symbol */} 
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute inset-0 flex items-center justify-start"> 
          <span className="text-[#FAC833] text-[300px] transform rotate-[-15deg]">§</span> 
        </motion.div> 

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-14 shadow-xl border border-white/10 relative z-10"> 
          <h2 className={`${typography.heading.h2} text-white mb-12 text-center`}> 
            Dodržujte zákon 65/2017 Sb. o ochraně zdraví před škodlivými účinky návykových látek 
          </h2> 
          <div className="space-y-12 mt-6"> 
            <h3 className={`${typography.heading.h3} text-white mb-8 text-center`}> 
              Přínosy našeho řešení 
            </h3> 
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10"> 
              <BenefitItem 
                icon={<Zap className="h-8 w-8 text-[#FAC833]" />} 
                description="Umožněte svým zákazníkům rychlé ověření věku za pomoci MojeID, bankovní identity, s dokladem totožnosti nebo SMS." 
              /> 
              <BenefitItem 
                icon={<ShieldCheck className="h-8 w-8 text-[#FAC833]" />} 
                description="Nechte své zákazníky vybrat způsob ověření věku těsně před dokončením objednávky / uskutečněním jejich online nákupu v košíku." 
              /> 
            </div> 
          </div> 
        </motion.div> 

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="py-16"> 
          <div className="max-w-4xl mx-auto space-y-12"> 
            <div className="space-y-6 text-center"> 
              <h3 className={`${typography.heading.h3} text-white`}> 
                Prodáváte tabákové výrobky, erotické pomůcky, alkohol nebo jiné výrobky určené pro osoby nad 18 let? 
              </h3> 
              <p className={`${typography.body.large} text-white/60 max-w-3xl mx-auto`}> 
                S námi budete zodpovědný prodejce, který dodržuje své zákonné povinnosti a má kvalitní zákaznický servis. 
              </p> 
            </div> 
            <div className="flex justify-center"> 
              <Button 
                asChild 
                className="rounded-full h-16 px-12 text-lg bg-[#FAC833] text-[#231F20] hover:opacity-90 transition-all duration-300" 
              > 
                <Link href="/funkce/jak-to-funguje" className="flex items-center gap-3"> 
                  Jak to funguje 
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /> 
                </Link> 
              </Button> 
            </div> 
          </div> 
        </motion.div>

        {/* Feature cards */} 
        <div className="grid md:grid-cols-3 gap-14 mb-16"> 
          {[
            {
              icon: <Zap className="w-10 h-10 text-[#FAC833]" />,
              title: "PassProve doplněk napojíme do každého eshopu",
              link: "/propojeni-s-eshopem",
              linkText: "Zjistit více"
            },
            {
              icon: <Lock className="w-10 h-10 text-[#FAC833]" />, 
              title: "Plaťte pouze za jednotlivá ověření věku. Naše cena je nejnižší na trhu",
              link: "/cenik",
              linkText: "Ceník"
            },
            {
              icon: <ShieldCheck className="w-10 h-10 text-[#FAC833]" />,
              title: "Bezpečnost je u nás na prvním místě. Máme certifikaci ISO 27001",
              link: "/o-passprove",
              linkText: "O PassProve"
            }
          ].map((card, index) => (
            <motion.div 
              key={index} 
              custom={index}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="group"> 
              <Card className="p-10 space-y-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl shadow-xl transition-all duration-300 hover:bg-white/10 relative h-full"> 
                <div className="absolute inset-0 flex items-center justify-center opacity-10"> 
                  {React.cloneElement(card.icon, { className: "w-60 h-60 text-[#FAC833] transform rotate-[-15deg] blur-lg" })} 
                </div> 
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-[#FAC833]/10 mb-6"> 
                  {card.icon} 
                </div>
                <h3 className={`${typography.heading.h4} text-white/90 text-center`}>{card.title}</h3>
                <Button 
                  asChild 
                  variant="outline" 
                  className="w-full text-[#8FBEC3] border-[#8FBEC3]/20 hover:bg-[#8FBEC3]/5 rounded-full h-14 transition-all duration-300 mt-auto" 
                > 
                  <Link href={card.link} className="flex items-center justify-center gap-2"> 
                    {card.linkText} 
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /> 
                  </Link> 
                </Button> 
              </Card> 
            </motion.div> 
          ))} 
        </div>
      </div>
    </section>
  )
}

function BenefitItem({ description, icon }: { description: string, icon: React.ReactNode }) {
  return (
    <div className="flex items-start space-x-6 bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/10 hover:bg-white/15 transition-all duration-300 h-full"> 
      <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center bg-[#FAC833]/10 rounded-xl border border-[#FAC833]/20"> 
        {icon} 
      </div>
      <p className={`${typography.body.large} text-white/70 pt-2`}>{description}</p>
    </div>
  );
}
