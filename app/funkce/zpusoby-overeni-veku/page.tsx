'use client'

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from 'next/link'
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, CheckCircle, CreditCard, Fingerprint, Phone, Shield, ArrowDown } from 'lucide-react'
import { typography } from '@/lib/design-system'

const verificationMethods = [
  {
    title: "Bankovní identita",
    description: "Ověření pomocí bankovní identity je nejrychlejší a nejbezpečnější způsob. Podporujeme všechny hlavní banky v ČR.",
    icon: <CreditCard className="h-6 w-6 text-[#FAC833]" />,
    benefits: [
      "Okamžité ověření",
      "Maximální bezpečnost",
      "Podpora všech bank",
      "Bez nutnosti nahrávání dokumentů"
    ]
  },
  {
    title: "Občanský průkaz",
    description: "Ověření pomocí občanského průkazu je klasický způsob. Stačí nahrát fotku dokladu a počkat na ověření.",
    icon: <Fingerprint className="h-6 w-6 text-[#FAC833]" />,
    benefits: [
      "Jednoduchý proces",
      "Dostupné pro všechny",
      "Rychlé ověření",
      "Bezpečné uložení dat"
    ]
  },
  {
    title: "Mobilní telefon",
    description: "Ověření pomocí mobilního telefonu je alternativní způsob. Využívá se ověřovací SMS kód.",
    icon: <Phone className="h-6 w-6 text-[#FAC833]" />,
    benefits: [
      "Rychlé ověření",
      "Dostupné non-stop",
      "Bez nutnosti dokumentů",
      "Jednoduchý proces"
    ]
  },
  {
    title: "MojeID",
    description: "Ověření pomocí MojeID je další z možností. Využívá se existující identita uživatele.",
    icon: <Shield className="h-6 w-6 text-[#FAC833]" />,
    benefits: [
      "Využití existující identity",
      "Rychlé ověření",
      "Vysoká bezpečnost",
      "Snadné použití"
    ]
  }
]

const VerificationMethodsPage = () => {
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
      
      {/* Hero Section - Hexagonální design */}
      <section className="relative min-h-[85vh] w-full overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#daebed] to-[#c5e2e6] dark:from-[#164550] dark:to-[#0d2b33]"></div>
        
        {/* Hexagonální pozadí */}
        <div className="absolute right-0 top-0 h-full w-[55%] z-[1] overflow-hidden">
          <div className="absolute inset-0 bg-[#eef8f9] dark:bg-[#1d5060]/60 clip-path-hexagon"></div>
        </div>
        
        {/* Stylovaný vzor */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02] z-[1]"
          style={{
            backgroundImage: `radial-gradient(#064052 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}
        />
        
        {/* Dekorativní prvky */}
        <div className="absolute w-64 h-64 top-20 left-[10%] rounded-full bg-[#FAC833]/10 dark:bg-[#FAC833]/5 blur-3xl z-[1] animate-pulse"></div>
        <div className="absolute w-48 h-48 bottom-40 right-[20%] rounded-full bg-[#8FBEC3]/15 dark:bg-[#8FBEC3]/10 blur-2xl z-[2] animate-pulse" style={{animationDelay: "1.5s"}}></div>

        <div className="container relative z-10 h-full flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center pt-32 pb-16">
            {/* Levý sloupec */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-white/20 dark:bg-white/5 backdrop-blur-sm border border-white/20 text-sm text-[#064052] dark:text-[#8FBEC3] mb-8">
                <CheckCircle className="w-4 h-4 mr-2" />
                <span>Flexibilní možnosti ověření</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-[#064052] dark:text-white leading-tight">
                Způsoby ověření věku
                <span className="block mt-4 text-[#FAC833]">Vyberte si způsob, který vám vyhovuje</span>
              </h1>
              
              <p className="text-[#064052]/80 dark:text-white/60 text-lg md:text-xl max-w-2xl mt-6">
                Nabízíme několik způsobů ověření věku. Každý si může vybrat ten, který mu nejvíce vyhovuje.
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
                  <Link href="#metody" className="flex items-center">
                    <span>Prozkoumat metody</span>
                    <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
                  </Link>
                </Button>
              </div>
            </motion.div>
            
            {/* Pravý sloupec - Animovaná grafika */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative h-[450px] mt-10 lg:mt-0"
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center z-20">
                {/* Středový hexagon */}
                <div className="relative h-32 w-32 flex items-center justify-center">
                  <div className="absolute inset-0 bg-white/70 dark:bg-[#1a4858]/70 rounded-xl backdrop-blur-sm border border-white/50 dark:border-white/10 transform rotate-45"></div>
                  <Shield className="w-12 h-12 text-[#FAC833] relative z-10" />
                </div>
                
                {/* Spojující čáry */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-[120%]">
                  <div className="h-20 w-0.5 bg-gradient-to-t from-[#FAC833] to-transparent"></div>
                  <div className="relative h-32 w-32 flex items-center justify-center">
                    <div className="absolute inset-0 bg-white/60 dark:bg-[#1a4858]/60 rounded-xl backdrop-blur-sm border border-white/50 dark:border-white/10 transform rotate-45"></div>
                    <CreditCard className="w-10 h-10 text-[#FAC833] relative z-10" />
                  </div>
                </div>
                
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-[120%]">
                  <div className="h-20 w-0.5 bg-gradient-to-b from-[#FAC833] to-transparent"></div>
                  <div className="relative h-32 w-32 flex items-center justify-center">
                    <div className="absolute inset-0 bg-white/60 dark:bg-[#1a4858]/60 rounded-xl backdrop-blur-sm border border-white/50 dark:border-white/10 transform rotate-45"></div>
                    <Fingerprint className="w-10 h-10 text-[#FAC833] relative z-10" />
                  </div>
                </div>
                
                <div className="absolute top-[30%] left-0 transform -translate-x-[130%] -translate-y-1/2">
                  <div className="h-0.5 w-20 bg-gradient-to-l from-[#FAC833] to-transparent"></div>
                  <div className="relative h-32 w-32 flex items-center justify-center">
                    <div className="absolute inset-0 bg-white/60 dark:bg-[#1a4858]/60 rounded-xl backdrop-blur-sm border border-white/50 dark:border-white/10 transform rotate-45"></div>
                    <Phone className="w-10 h-10 text-[#FAC833] relative z-10" />
                  </div>
                </div>
                
                <div className="absolute top-[70%] right-0 transform translate-x-[130%] -translate-y-1/2">
                  <div className="h-0.5 w-20 bg-gradient-to-r from-[#FAC833] to-transparent"></div>
                  <div className="relative h-32 w-32 flex items-center justify-center">
                    <div className="absolute inset-0 bg-white/60 dark:bg-[#1a4858]/60 rounded-xl backdrop-blur-sm border border-white/50 dark:border-white/10 transform rotate-45"></div>
                    <Shield className="w-10 h-10 text-[#FAC833] relative z-10" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
          </section>
      
      {/* Methods Section - Překrývající se karty */}
      <section id="metody" className="relative py-24 bg-[#f0f8f9] dark:bg-[#0d2b33]">
        <style jsx global>{`
          .clip-path-hexagon {
            clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%);
          }
        `}</style>
        
        {/* Trojúhelníkový prvek */}
        <div className="absolute top-0 left-0 w-full h-24 overflow-hidden">
          <div className="absolute inset-0 bg-[#daebed]/50 dark:bg-[#154350]/30 transform -skew-y-3 origin-top-left translate-y-[-95%]"></div>
        </div>
        
        <div className="container relative z-10 pt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#064052] dark:text-white mb-6">
              Způsoby
              <span className="relative ml-3">
                ověření
                <svg viewBox="0 0 152 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute -bottom-3 left-0 w-full">
                  <path d="M2.5 9.5C32.5 -1.5 122 -1.5 149.5 9.5" stroke="#FAC833" strokeWidth="5" strokeLinecap="round"/>
                </svg>
              </span>
            </h2>
            <p className="text-[#064052]/70 dark:text-white/60 text-xl">
              Vyberte si z několika způsobů ověření, které jsou k dispozici pro vaše zákazníky.
            </p>
          </motion.div>
          
          <div className="space-y-24 max-w-6xl mx-auto">
            {verificationMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className={`relative grid grid-cols-1 lg:grid-cols-2 gap-6 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Metoda popis */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:pl-16' : 'lg:pr-16'}`}>
                  <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center bg-[#FAC833]/10 rounded-xl border border-[#FAC833]/20">
                    {method.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-[#064052] dark:text-white">{method.title}</h3>
                  <p className="text-[#064052]/70 dark:text-white/60 text-lg leading-relaxed">{method.description}</p>
                  <ul className="space-y-3">
                    {method.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center text-[#064052]/70 dark:text-white/60">
                        <CheckCircle className="h-5 w-5 text-[#FAC833] mr-3 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Metoda ilustrace */}
                <div className={`relative h-[300px] ${index % 2 === 1 ? 'order-first lg:order-last' : ''}`}>
                  <div className="absolute inset-0 bg-white/80 dark:bg-[#164550]/60 rounded-3xl overflow-hidden shadow-lg backdrop-blur-sm border border-white/50 dark:border-white/10">
                    <div className="absolute inset-0 opacity-[0.02]"
                      style={{
                        backgroundImage: `linear-gradient(#064052 1px, transparent 1px),
                                        linear-gradient(90deg, #064052 1px, transparent 1px)`,
                        backgroundSize: '20px 20px'
                      }}
                    />
                    
                    <div className="absolute top-0 right-0 h-24 w-24 bg-[#FAC833]/10 rounded-full translate-x-1/3 -translate-y-1/3 blur-xl"></div>
                    <div className="absolute bottom-0 left-0 h-24 w-24 bg-[#8FBEC3]/10 rounded-full -translate-x-1/3 translate-y-1/3 blur-xl"></div>
                    
                    <div className="relative h-full w-full p-8 flex items-center justify-center">
                      {/* Ukázka metody */}
                      <div className="w-full max-w-[250px] mx-auto">
                        {index === 0 && (
                          <div className="bg-white dark:bg-[#1d5060] rounded-xl p-6 shadow-lg border border-[#FAC833]/20">
                            <div className="flex items-center justify-center mb-4">
                              <CreditCard className="h-12 w-12 text-[#FAC833]" />
                            </div>
                            <div className="space-y-2">
                              <div className="h-4 w-full bg-[#064052]/10 dark:bg-white/10 rounded-full"></div>
                              <div className="h-4 w-3/4 bg-[#064052]/10 dark:bg-white/10 rounded-full"></div>
                              <div className="h-4 w-1/2 bg-[#064052]/10 dark:bg-white/10 rounded-full"></div>
                            </div>
                            <div className="mt-6">
                              <div className="h-10 w-full bg-[#FAC833] rounded-lg"></div>
                            </div>
                          </div>
                        )}
                        
                        {index === 1 && (
                          <div className="bg-white dark:bg-[#1d5060] rounded-xl p-6 shadow-lg border border-[#FAC833]/20">
                            <div className="w-full h-32 bg-[#064052]/10 dark:bg-white/10 rounded-lg mb-4 flex items-center justify-center">
                              <Fingerprint className="h-16 w-16 text-[#FAC833]/50" />
                            </div>
                            <div className="space-y-2">
                              <div className="h-4 w-3/4 bg-[#064052]/10 dark:bg-white/10 rounded-full"></div>
                              <div className="h-4 w-1/2 bg-[#064052]/10 dark:bg-white/10 rounded-full"></div>
                            </div>
                            <div className="mt-4">
                              <div className="h-10 w-full bg-[#FAC833] rounded-lg"></div>
                            </div>
                          </div>
                        )}
                        
                        {index === 2 && (
                          <div className="bg-white dark:bg-[#1d5060] rounded-xl p-6 shadow-lg border border-[#FAC833]/20">
                            <div className="flex items-center justify-center mb-4">
                              <Phone className="h-12 w-12 text-[#FAC833]" />
                            </div>
                            <div className="grid grid-cols-4 gap-2 mt-6">
                              <div className="h-12 w-full bg-[#064052]/10 dark:bg-white/10 rounded-lg flex items-center justify-center text-[#064052] dark:text-white font-bold">1</div>
                              <div className="h-12 w-full bg-[#064052]/10 dark:bg-white/10 rounded-lg flex items-center justify-center text-[#064052] dark:text-white font-bold">2</div>
                              <div className="h-12 w-full bg-[#064052]/10 dark:bg-white/10 rounded-lg flex items-center justify-center text-[#064052] dark:text-white font-bold">3</div>
                              <div className="h-12 w-full bg-[#064052]/10 dark:bg-white/10 rounded-lg flex items-center justify-center text-[#064052] dark:text-white font-bold">4</div>
                            </div>
                            <div className="mt-6">
                              <div className="h-10 w-full bg-[#FAC833] rounded-lg"></div>
                            </div>
                          </div>
                        )}
                        
                        {index === 3 && (
                          <div className="bg-white dark:bg-[#1d5060] rounded-xl p-6 shadow-lg border border-[#FAC833]/20">
                            <div className="flex items-center justify-center mb-4">
                              <Shield className="h-12 w-12 text-[#FAC833]" />
                            </div>
                            <div className="h-16 w-16 mx-auto bg-[#064052]/10 dark:bg-white/10 rounded-full mb-4 flex items-center justify-center">
                              <div className="h-8 w-8 bg-[#064052]/20 dark:bg-white/20 rounded-full"></div>
                            </div>
                            <div className="space-y-2">
                              <div className="h-4 w-full bg-[#064052]/10 dark:bg-white/10 rounded-full"></div>
                              <div className="h-4 w-3/4 bg-[#064052]/10 dark:bg-white/10 rounded-full"></div>
                            </div>
                            <div className="mt-4">
                              <div className="h-10 w-full bg-[#FAC833] rounded-lg"></div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Pozadí dekorace */}
        <div className="absolute w-80 h-80 top-40 right-10 rounded-full bg-[#8FBEC3]/10 dark:bg-[#8FBEC3]/5 blur-3xl"></div>
        <div className="absolute w-96 h-96 bottom-40 -left-20 rounded-full bg-[#FAC833]/10 dark:bg-[#FAC833]/5 blur-3xl"></div>
          </section>
      
      {/* Security Section + CTA */}
      <section className="relative py-24 bg-gradient-to-br from-white to-[#eef8f9] dark:from-[#154350] dark:to-[#0d2b33]">
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Bezpečnost */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-white/80 dark:bg-[#1a4858]/40 rounded-3xl overflow-hidden shadow-lg backdrop-blur-sm border border-white/50 dark:border-white/10 p-10"
            >
              <div className="space-y-6">
                <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center bg-[#FAC833]/10 rounded-xl border border-[#FAC833]/20">
                  <Shield className="h-8 w-8 text-[#FAC833]" />
                </div>
                <h3 className="text-3xl font-bold text-[#064052] dark:text-white">Bezpečnost na prvním místě</h3>
                <p className="text-[#064052]/70 dark:text-white/60 text-lg leading-relaxed">
                  Všechny způsoby ověření jsou plně v souladu s GDPR a dalšími bezpečnostními standardy. Vaše data jsou šifrována a bezpečně uložena.
                </p>
                <Button 
                  asChild
                  className="mt-4 rounded-full h-12 px-6 text-base bg-gradient-to-r from-[#FAC833] to-[#FAD862] hover:from-[#FAD862] hover:to-[#FAE891] text-[#064052] border-0 transition-all duration-300 hover:shadow-md hover:scale-[1.02] group"
                >
                  <Link href="/bezpecnost" className="flex items-center">
                    <span>Více o bezpečnosti</span>
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </Button>
              </div>
            </motion.div>
            
            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-gradient-to-br from-[#daebed]/70 to-[#c5e2e6]/70 dark:from-[#154350] dark:to-[#0d2b33] rounded-3xl overflow-hidden shadow-lg backdrop-blur-sm border border-white/50 dark:border-white/10 p-10"
            >
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-[#064052] dark:text-white">Začněte ještě dnes</h3>
                <p className="text-[#064052]/70 dark:text-white/60 text-lg leading-relaxed">
                  Vyzkoušejte PassProve zdarma a přesvědčte se o jeho výhodách. Získejte kredit 200 Kč na testování.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    className="rounded-full h-12 px-6 text-base bg-gradient-to-r from-[#FAC833] to-[#FAD862] hover:from-[#FAD862] hover:to-[#FAE891] text-[#064052] border-0 transition-all duration-300 hover:shadow-md hover:scale-[1.02] group"
                  >
                    <Link href="/registrace" className="flex items-center">
                      <span>Vyzkoušet zdarma</span>
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </Button>
                  <Button 
                    asChild
                    variant="outline" 
                    className="rounded-full h-12 px-6 text-base border-[#064052]/20 text-[#064052] dark:text-white dark:border-white/20 hover:bg-white/20 dark:hover:bg-white/5 transition-all duration-300"
                  >
                    <Link href="/demo" className="flex items-center">
                      <span>Prohlédnout demo</span>
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Dekorace pozadí */}
        <div className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(#064052 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}
        />
      </section>
      
      <Footer />
    </div>
  );
};

export default VerificationMethodsPage;
