'use client'

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { typography } from '@/lib/design-system'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { ArrowRight, Code, LayoutTemplate, Server } from "lucide-react"

const PropojenisEshopemPage = () => {
  const integrationOptions = [
    {
      title: "Widget - hotové řešení",
      description: "Jednoduchý způsob integrace pro netechnické uživatele",
      icon: <LayoutTemplate className="w-10 h-10 text-[#FAC833]" />,
      link: "/propojeni-s-eshopem/hotove-reseni"
    },
    {
      title: "Pluginy pro e-commerce",
      description: "Rozšíření pro populární e-shopové platformy",
      icon: <Code className="w-10 h-10 text-[#FAC833]" />,
      link: "/propojeni-s-eshopem/pluginy-pro-ecommerce"
    },
    {
      title: "API Endpoints",
      description: "Přímá integrace pro vlastní vývojáře",
      icon: <Server className="w-10 h-10 text-[#FAC833]" />,
      link: "/propojeni-s-eshopem/api-endpoints"
    }
  ];

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
              <Code className="w-4 h-4 mr-2" />
              <span>Propojení s e-shopem</span>
            </div>
            <h1 className={typography.heading.h1}>
              Možnosti propojení
              <span className="block mt-6 text-[#FAC833]">Od netechiků až po zkušené vývojáře</span>
            </h1>
            <p className={`${typography.body.large} text-white/60 max-w-3xl mx-auto mt-6`}>
              PassProve nabízí několik způsobů, jak ověřování věku integrovat do vašeho e-shopu.
              Vyberte si řešení, které nejlépe odpovídá vašim technickým znalostem a požadavkům.
            </p>
          </motion.div>

          {/* Integration Options */}
          <div className="grid md:grid-cols-3 gap-8 max-w-[1280px] mx-auto mb-32">
            {integrationOptions.map((option, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="border border-white/10 bg-[#154350]/70 shadow-lg backdrop-blur-sm h-full hover:bg-[#154350] hover:border-[#FAC833]/20 transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-[#FAC833]/20 to-[#8FBEC3]/20 backdrop-blur-sm flex items-center justify-center mb-4">
                      {option.icon}
                    </div>
                    <h3 className="text-2xl font-semibold text-white">{option.title}</h3>
                  </CardHeader>
                  <CardContent className="pb-6">
                    <p className="text-white/70">{option.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      asChild
                      variant="outline" 
                      className="w-full border-white/10 text-white hover:bg-white/5 rounded-full"
                    >
                      <Link href={option.link} className="flex items-center justify-center">
                        Více informací
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Features Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="max-w-[1280px] mx-auto mb-32"
          >
            <Card className="border-0 bg-[#154350] shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-10 p-10">
                <div className="space-y-6">
                  <h2 className={`${typography.heading.h2} text-white`}>Proč integrovat PassProve?</h2>
                  <p className="text-lg text-white/80">
                    PassProve není jen služba pro ověření věku. Je to komplexní řešení, které umožňuje vašemu
                    e-shopu efektivně dodržovat zákonné povinnosti při prodeji věkově omezeného zboží.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#FAC833]/20 flex items-center justify-center mt-1">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.6667 3.5L5.25 9.91667L2.33333 7" stroke="#FAC833" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div>
                        <span className="text-white font-medium">Legislativní soulad</span>
                        <p className="text-white/60 text-sm">V souladu se zákonem 65/2017 Sb. a dalšími předpisy</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#FAC833]/20 flex items-center justify-center mt-1">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.6667 3.5L5.25 9.91667L2.33333 7" stroke="#FAC833" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div>
                        <span className="text-white font-medium">Jednoduchá implementace</span>
                        <p className="text-white/60 text-sm">Implementace během několika minut s minimálním technickým know-how</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#FAC833]/20 flex items-center justify-center mt-1">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.6667 3.5L5.25 9.91667L2.33333 7" stroke="#FAC833" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div>
                        <span className="text-white font-medium">Bezpečnost osobních údajů</span>
                        <p className="text-white/60 text-sm">GDPR kompatibilní s certifikací ISO 27001</p>
                      </div>
                    </li>
          </ul>
                </div>
                <div>
                  <div className="relative rounded-xl overflow-hidden border border-white/10 h-full">
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#154350] to-transparent opacity-60"></div>
                    <div className="w-full h-full flex items-center justify-center p-8 bg-[#154350]">
                      <div className="space-y-6 text-center">
                        <div className="w-20 h-20 mx-auto rounded-full bg-[#FAC833]/20 flex items-center justify-center">
                          <Code className="w-10 h-10 text-[#FAC833]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-xl font-medium text-white">Jednoduchá integrace</h3>
                          <p className="text-white/60">Stačí pár řádků kódu pro zapojení do vašeho e-shopu</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="max-w-[1280px] mx-auto text-center"
          >
            <div className="py-10 px-8 rounded-2xl bg-gradient-to-r from-[#FAC833]/10 to-[#8FBEC3]/10 backdrop-blur-sm border border-white/10">
              <h2 className={`${typography.heading.h3} text-white mb-6`}>
                Nevíte si rady s výběrem?
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto mb-8">
                Kontaktujte naše technické specialisty, kteří vám pomohou zvolit
                nejlepší způsob integrace pro váš konkrétní případ.
              </p>
              <Button 
                asChild
                className="bg-[#FAC833] hover:bg-[#FAC833]/90 text-[#164550] border-0 rounded-full h-14 px-10 text-lg"
              >
                <Link href="/kontakt">
                  Kontaktovat odborníky
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
        </section>
      <Footer />
    </div>
  );
};

export default PropojenisEshopemPage;
