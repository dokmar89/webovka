'use client'

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from 'next/link'
import Image from 'next/image'
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Zap, Shield, Clock, ChevronRight, ArrowDown } from 'lucide-react'
import { typography } from '@/lib/design-system'

const steps = [
  {
    title: "Registrace",
    description: "Zaregistrujte se v PassProve a získejte kredit v hodnotě 200 Kč zdarma.",
    icon: <Shield className="h-6 w-6 text-[#FAC833]" />
  },
  {
    title: "Nastavení",
    description: "Vyplňte základní údaje, vyberte si tarif a vyčkejte na naše instrukce.",
    icon: <Zap className="h-6 w-6 text-[#FAC833]" />
  },
  {
    title: "Propojení",
    description: "Propojte PassProve s vaším e-shopem pomocí našich pluginů nebo API.",
    icon: <Clock className="h-6 w-6 text-[#FAC833]" />
  }
]

const HowItWorksPage = () => {
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
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section - Split design with diagonal divider */}
      <section className="relative min-h-[90vh] w-full overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#daebed] to-[#c5e2e6] dark:from-[#164550] dark:to-[#0d2b33]"></div>
        
        {/* Diagonal divider */}
        <div className="absolute inset-0 z-[1]">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
            <polygon 
              points="0,0 100,0 100,35 0,65" 
              className="fill-[#eef8f9] dark:fill-[#1d5060] opacity-70"
            />
          </svg>
        </div>
        
        {/* Floating elements */}
        <div className="absolute w-64 h-64 top-20 right-[10%] rounded-full bg-[#FAC833]/10 dark:bg-[#FAC833]/5 blur-3xl z-[1] animate-pulse"></div>
        <div className="absolute w-48 h-48 bottom-20 left-[15%] rounded-full bg-[#8FBEC3]/15 dark:bg-[#8FBEC3]/10 blur-2xl z-[1] animate-pulse" style={{animationDelay: "1.2s"}}></div>
        
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02] z-[1]"
          style={{
            backgroundImage: `radial-gradient(#064052 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}
        />
        
        <div className="container relative z-10 h-full flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center pt-32 pb-16">
            {/* Left column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-white/20 dark:bg-white/5 backdrop-blur-sm border border-white/20 text-sm text-[#064052] dark:text-[#8FBEC3] mb-8">
                <CheckCircle className="w-4 h-4 mr-2" />
                <span>Kompletní průvodce funkcemi PassProve</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-[#064052] dark:text-white leading-tight">
                Jak to funguje?
                <span className="block mt-4 text-[#FAC833]">Jednoduchý proces ve třech krocích</span>
              </h1>
              
              <p className="text-[#064052]/80 dark:text-white/60 text-lg md:text-xl max-w-2xl mt-6">
                Ověřování věku zákazníků nikdy nebylo jednodušší. Projděte si náš průvodce a zjistěte, jak začít.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <Button 
                  asChild
                  size="lg"
                  className="rounded-full h-14 px-8 text-base bg-gradient-to-r from-[#FAC833] to-[#FAD862] hover:from-[#FAD862] hover:to-[#FAE891] text-[#064052] border-0 transition-all duration-300 hover:shadow-md hover:scale-[1.02] group"
                >
                  <Link href="/vyzkousejte-zdarma" className="flex items-center">
                    <span>Vyzkoušet zdarma</span>
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </Button>
                
                <Button 
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full h-14 px-8 text-base border-[#064052]/20 text-[#064052] dark:text-white dark:border-white/20 hover:bg-white/20 dark:hover:bg-white/5 transition-all duration-300 group"
                >
                  <Link href="#kroky" className="flex items-center">
                    <span>Prozkoumat postup</span>
                    <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
                  </Link>
                </Button>
              </div>
            </motion.div>
            
            {/* Right column - Floating cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative h-[400px] md:h-[500px] mt-10 lg:mt-0"
            >
              <div className="absolute top-[5%] left-[10%] w-[70%] h-[60%] bg-white/70 dark:bg-[#1a4858]/70 rounded-2xl backdrop-blur-sm shadow-xl border border-white/50 dark:border-white/10 flex items-center justify-center z-20 transform rotate-[-6deg]">
                <div className="text-center p-8 space-y-4">
                  <Shield className="w-16 h-16 text-[#FAC833] mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-[#064052] dark:text-white">Bezpečné ověření</h3>
                  <p className="text-[#064052]/70 dark:text-white/70">Chráníme data vašich zákazníků v souladu s GDPR</p>
                </div>
              </div>
              
              <div className="absolute top-[25%] right-[5%] w-[60%] h-[50%] bg-white/60 dark:bg-[#164550]/60 rounded-2xl backdrop-blur-sm shadow-xl border border-white/50 dark:border-white/10 flex items-center justify-center z-10 transform rotate-[4deg]">
                <div className="text-center p-8 space-y-4">
                  <Zap className="w-12 h-12 text-[#FAC833] mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-[#064052] dark:text-white">Rychlé nasazení</h3>
                  <p className="text-[#064052]/70 dark:text-white/70">Začněte používat službu během několika minut</p>
                </div>
              </div>
              
              <div className="absolute bottom-[5%] left-[15%] w-[65%] h-[45%] bg-white/50 dark:bg-[#133a45]/50 rounded-2xl backdrop-blur-sm shadow-xl border border-white/50 dark:border-white/10 flex items-center justify-center z-30 transform rotate-[8deg]">
                <div className="text-center p-8 space-y-4">
                  <Clock className="w-10 h-10 text-[#FAC833] mx-auto mb-2" />
                  <h3 className="text-xl font-bold text-[#064052] dark:text-white">24/7 dostupnost</h3>
                  <p className="text-[#064052]/70 dark:text-white/70">Služba je k dispozici nepřetržitě</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Scroll indicator */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
          >
            <div className="flex flex-col items-center text-[#064052]/60 dark:text-white/40">
              <span className="text-sm mb-2">Posuňte dolů</span>
              <div className="w-6 h-10 border-2 border-[#064052]/40 dark:border-white/30 rounded-full flex justify-center">
                <motion.div 
                  animate={{ y: [0, 12, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="w-2 h-2 bg-[#064052]/60 dark:bg-white/50 rounded-full mt-2"
                />
              </div>
            </div>
          </motion.div>
          </div>
        </section>
      
      {/* Steps section - Asymetrical layout */}
      <section id="kroky" className="relative py-24 bg-[#f0f8f9] dark:bg-[#0d2b33]">
        {/* Orbs background */}
        <div className="absolute w-80 h-80 -top-20 right-10 rounded-full bg-[#8FBEC3]/20 dark:bg-[#8FBEC3]/5 blur-3xl"></div>
        <div className="absolute w-96 h-96 bottom-10 -left-20 rounded-full bg-[#FAC833]/10 dark:bg-[#FAC833]/5 blur-3xl"></div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto mb-20 text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-[#064052] dark:text-white mb-6"
            >
              Tři jednoduché kroky k&nbsp;
              <span className="relative">
                ověřování věku
                <svg viewBox="0 0 385 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute -bottom-3 left-0 w-full">
                  <path d="M2.5 9.5C62.5 -1.5 323 -1.5 382.5 9.5" stroke="#FAC833" strokeWidth="5" strokeLinecap="round"/>
                </svg>
              </span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-[#064052]/70 dark:text-white/70 max-w-2xl mx-auto"
            >
              Zjistěte, jak jednoduše můžete implementovat ověřování věku do vašeho e-shopu a splnit tak zákonné požadavky.
            </motion.p>
          </div>
          
          {/* Steps timeline */}
          <div className="relative max-w-5xl mx-auto">
            {/* Connecting line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#8FBEC3]/20 via-[#FAC833]/30 to-[#8FBEC3]/20 rounded-full"></div>
            
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex items-center mb-24 last:mb-0 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {/* Timeline node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-white dark:bg-[#164550] rounded-full flex items-center justify-center shadow-lg border-4 border-[#FAC833]/30">
                    <span className="text-xl md:text-2xl font-bold text-[#FAC833]">{index + 1}</span>
                  </div>
                </div>
                
                {/* Content card - alternating left and right */}
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-16 md:pr-24 text-right' : 'pl-16 md:pl-24 text-left'}`}>
                  <Card className="overflow-hidden border-0 bg-white/80 dark:bg-[#154350]/80 backdrop-blur-sm shadow-lg">
                    <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-[#8FBEC3] to-[#FAC833]"></div>
                    <CardHeader className="relative z-10 px-8 pb-4 pt-8">
                      <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-[#FAC833]/10 rounded-xl border border-[#FAC833]/20 mb-4">
                        {step.icon}
                      </div>
                      <CardTitle className="text-2xl font-bold text-[#064052] dark:text-white">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="px-8 pb-8">
                      <p className="text-[#064052]/70 dark:text-white/70">{step.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
          </div>
        </section>
      
      {/* Features section - Moderne grid design */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[#daebed] dark:bg-[#164550]"></div>
          <div className="absolute top-0 left-0 right-0 h-20 bg-[#f0f8f9] dark:bg-[#0d2b33]"></div>
          
          {/* Wave pattern divider */}
          <div className="absolute top-0 left-0 right-0 h-20 overflow-hidden">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto min-w-[1000px] fill-[#daebed] dark:fill-[#164550]">
              <path d="M0,128L48,144C96,160,192,192,288,197.3C384,203,480,181,576,181.3C672,181,768,203,864,202.7C960,203,1056,181,1152,170.7C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
        </div>
        
        <div className="container relative z-10 pt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <Card className="relative overflow-hidden border-0 bg-white/80 dark:bg-[#1d5060]/80 backdrop-blur-sm shadow-xl">
              <div className="absolute -top-16 -right-16 w-32 h-32 bg-[#FAC833]/20 rounded-full blur-xl pointer-events-none" />
              <div className="absolute inset-0 opacity-[0.02]"
                style={{
                  backgroundImage: `radial-gradient(#064052 1px, transparent 1px)`,
                  backgroundSize: '20px 20px'
                }}
              />

              <CardContent className="p-10 md:p-16">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#064052] dark:text-white mb-6">Ověřování věku zákazníků</h2>
                    <p className="text-[#064052]/80 dark:text-white/70 text-lg leading-relaxed mb-8">
                      PassProve pomáhá e-shopům ověřovat věk jejich zákazníků. E-shopy, které prodávají tabákové výrobky, pyrotechniku, erotické pomůcky, alkohol nebo jiné výrobky určené pro osoby nad 18 let, by měly ověřovat věk spotřebitelů za pomoci online prověřeného systému.
                    </p>
                    
                    <Button 
                      asChild
                      className="bg-gradient-to-r from-[#FAC833] to-[#FAD862] hover:from-[#FAD862] hover:to-[#FAE891] text-[#064052] border-0 rounded-full h-14 px-8 text-base transition-all duration-300 hover:shadow-md hover:scale-[1.02] group"
                    >
                      <Link href="/cenik" className="flex items-center">
                        <span>Zobrazit ceník</span>
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </Button>
                  </div>
                  
                  <div className="relative h-[300px] md:h-full">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#8FBEC3]/10 to-transparent rounded-2xl"></div>
                      <div className="relative text-center p-10">
                        <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-6 bg-gradient-to-br from-[#FAC833]/20 to-white/30 dark:to-white/10 rounded-full flex items-center justify-center">
                          <Shield className="w-12 h-12 md:w-16 md:h-16 text-[#FAC833]" />
                        </div>
                        <div className="text-2xl md:text-3xl font-bold text-[#064052] dark:text-white mb-4">ISO 27001</div>
                        <p className="text-[#064052]/70 dark:text-white/70">Certifikovaná bezpečnost a ochrana dat</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          </div>
        </section>
      
      {/* CTA section - Offset design */}
      <section className="relative py-24 bg-[#f0f8f9] dark:bg-[#0d2b33]">
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative max-w-5xl mx-auto"
          >
            {/* Decorative elements */}
            <div className="absolute -top-10 -left-10 w-20 h-20 bg-white/80 dark:bg-[#164550]/80 rounded-lg shadow-lg transform rotate-12 z-0"></div>
            <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-[#FAC833]/30 rounded-lg shadow-lg transform -rotate-12 z-0"></div>
            <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#8FBEC3]/30 rounded-full shadow-lg z-0"></div>
            
            <Card className="border border-white/50 dark:border-white/10 bg-white/80 dark:bg-[#154350]/80 backdrop-blur-sm shadow-xl relative z-10">
              <CardContent className="pt-16 pb-16 px-8 md:px-16 relative">
                <h2 className="text-3xl md:text-4xl font-bold text-[#064052] dark:text-white mb-6 text-center">Připraveni začít?</h2>
                <p className="text-[#064052]/80 dark:text-white/70 mb-10 max-w-3xl mx-auto text-lg leading-relaxed text-center">
                  Vyzkoušejte PassProve zdarma a přesvědčte se o jeho výhodách. Získejte kredit 200 Kč na testování.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-[#FAC833] to-[#FAD862] hover:from-[#FAD862] hover:to-[#FAE891] text-[#064052] border-0 rounded-full h-14 px-8 text-base transition-all duration-300 hover:shadow-md hover:scale-[1.02] group"
                  >
                    <Link href="/registrace" className="flex items-center">
                      <span>Vyzkoušet zdarma</span>
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </Button>
                  <Button 
                    asChild
                    size="lg" 
                    variant="outline" 
                    className="border-[#064052]/20 text-[#064052] dark:text-white dark:border-white/20 hover:bg-white/20 dark:hover:bg-white/5 rounded-full h-14 px-8 text-base transition-all duration-300 group"
                  >
                    <Link href="/demo" className="flex items-center">
                      <span>Prohlédnout demo</span>
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
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

export default HowItWorksPage;
