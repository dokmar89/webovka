'use client'

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from 'next/link'
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Gift, Zap, Clock, Shield } from 'lucide-react'
import { typography } from '@/lib/design-system'

const benefits = [
  {
    title: "Kredit 200 Kč zdarma",
    description: "Každý nově registrovaný uživatel získá kredit v hodnotě 200 Kč na testování služby.",
    icon: <Gift className="h-6 w-6 text-[#FAC833]" />
  },
  {
    title: "Rychlá aktivace",
    description: "Aktivace účtu je otázkou několika minut. Můžete začít ihned testovat.",
    icon: <Zap className="h-6 w-6 text-[#FAC833]" />
  },
  {
    title: "Bez závazků",
    description: "Žádné dlouhodobé závazky. Můžete kdykoliv přestat službu využívat.",
    icon: <Clock className="h-6 w-6 text-[#FAC833]" />
  },
  {
    title: "Bezpečné testování",
    description: "Testování probíhá v bezpečném prostředí s plnou podporou našeho týmu.",
    icon: <Shield className="h-6 w-6 text-[#FAC833]" />
  }
]

const TryForFreePage = () => {
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
    <div className="min-h-screen bg-[#164550]">
      <Navbar />
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

        <div className="container px-8 md:px-12 py-32 mx-auto relative z-10 max-w-[1440px]">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-8 max-w-4xl mx-auto mb-24"
          >
            <div className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-sm text-[#8FBEC3] mx-auto">
              <CheckCircle className="w-4 h-4 mr-2" />
              <span>Začněte zdarma ještě dnes</span>
            </div>
            <h1 className={typography.heading.h1}>
              Vyzkoušejte PassProve
              <span className="block mt-6 text-[#FAC833]">Kredit 200 Kč zdarma pro nové uživatele</span>
            </h1>
            <p className={`${typography.body.large} text-white/60 max-w-3xl mx-auto mt-6`}>
              Vyzkoušejte si ověřování věku zákazníků bez rizika. Registrujte se a získejte kredit zdarma.
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 max-w-[1280px] mx-auto mb-32">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={fadeIn}
              >
                <Card className="relative overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm shadow-lg h-full">
                  <CardHeader className="pb-6 pt-10 relative z-10 px-10">
                    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-[#FAC833]/10 rounded-xl border border-[#FAC833]/20 mb-6">
                      {benefit.icon}
                    </div>
                    <CardTitle className="text-2xl font-bold text-white">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="px-10 pb-10">
                    <p className="text-white/60">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Steps Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="max-w-[1280px] mx-auto mb-32"
          >
            <Card className="relative overflow-hidden border-0 bg-[#154350] shadow-xl">
              <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-[#8FBEC3] to-[#FAC833]"></div>
              <div className="absolute -right-20 -top-20 w-40 h-40 bg-[#8FBEC3]/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute inset-0 opacity-[0.02]"
                style={{
                  backgroundImage: `linear-gradient(#8FBEC3 1px, transparent 1px),
                                  linear-gradient(90deg, #8FBEC3 1px, transparent 1px)`,
                  backgroundSize: '20px 20px'
                }}
              />

              <CardHeader className="pb-6 pt-10 relative z-10 px-10">
                <CardTitle className="text-3xl font-bold">Jak začít?</CardTitle>
                <CardDescription className="text-white/70 mt-2 text-lg">
                  Jednoduchý proces ve třech krocích
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-8 relative z-10 px-10">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-[#FAC833]/10 rounded-full border border-[#FAC833]/20 mr-4">
                      <span className="text-[#FAC833] font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="text-white text-lg font-semibold mb-2">Registrace</h3>
                      <p className="text-white/60">Vytvořte si účet během několika minut. Stačí vyplnit základní údaje.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-[#FAC833]/10 rounded-full border border-[#FAC833]/20 mr-4">
                      <span className="text-[#FAC833] font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="text-white text-lg font-semibold mb-2">Aktivace kreditu</h3>
                      <p className="text-white/60">Po registraci automaticky získáte kredit 200 Kč na testování služby.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-[#FAC833]/10 rounded-full border border-[#FAC833]/20 mr-4">
                      <span className="text-[#FAC833] font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="text-white text-lg font-semibold mb-2">Testování</h3>
                      <p className="text-white/60">Začněte testovat ověřování věku ve vašem e-shopu s plnou podporou našeho týmu.</p>
                    </div>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="pt-6 pb-10 relative z-10 px-10">
                <Button 
                  asChild
                  className="w-full bg-[#FAC833] hover:bg-[#FAC833]/90 text-[#231F20] border-0 rounded-full h-14 px-8 text-lg"
                >
                  <Link href="/registrace" className="flex items-center justify-center">
                    <span>Registrovat se</span>
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="max-w-[1280px] mx-auto text-center mb-16"
          >
            <Card className="border border-white/10 bg-white/5 backdrop-blur-sm shadow-xl">
              <CardContent className="pt-16 pb-16 px-16 relative z-10">
                <h2 className={`${typography.heading.h2} text-white mb-6`}>Máte otázky?</h2>
                <p className="text-white/70 mb-10 max-w-3xl mx-auto text-lg leading-relaxed">
                  Náš tým je připraven vám pomoci s implementací a zodpovědět všechny vaše dotazy.
                </p>
                <div className="flex flex-col sm:flex-row gap-8 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-[#FAC833] hover:bg-[#FAC833]/90 text-[#231F20] border-0 rounded-full h-16 px-12 text-lg"
                  >
                    <Link href="/kontakt" className="flex items-center">
                      <span>Kontaktovat podporu</span>
                      <ArrowRight className="h-5 w-5 ml-3" />
                    </Link>
                  </Button>
                  <Button 
                    asChild
                    size="lg" 
                    variant="outline" 
                    className="border-white/10 text-white hover:bg-white/5 rounded-full h-16 px-12 text-lg"
                  >
                    <Link href="/dokumentace" className="flex items-center">
                      <span>Zobrazit dokumentaci</span>
                      <ArrowRight className="h-5 w-5 ml-3" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
        </section>
      <Footer />
    </div>
  );
};

export default TryForFreePage;
