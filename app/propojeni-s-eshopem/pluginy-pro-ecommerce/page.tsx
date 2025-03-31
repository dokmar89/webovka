'use client'

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, ShoppingCart, Store, Boxes, Download, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import { typography } from '@/lib/design-system'

const platforms = [
  {
    title: "WooCommerce",
    description: "Plugin pro WordPress a WooCommerce e-shopy",
    icon: <Store className="w-6 h-6 text-[#FAC833]" />,
    soon: false
  },
  {
    title: "Shoptet",
    description: "Oficiální doplněk pro nejpopulárnější českou platformu",
    icon: <ShoppingCart className="w-6 h-6 text-[#FAC833]" />,
    soon: false
  },
  {
    title: "Shopify",
    description: "Plugin pro mezinárodní platformu Shopify",
    icon: <Store className="w-6 h-6 text-[#FAC833]" />,
    soon: false
  },
  {
    title: "PrestaShop",
    description: "Modul pro PrestaShop e-commerce systém",
    icon: <ShoppingCart className="w-6 h-6 text-[#FAC833]" />,
    soon: true
  },
  {
    title: "Magento",
    description: "Rozšíření pro Adobe Commerce / Magento 2",
    icon: <Store className="w-6 h-6 text-[#FAC833]" />,
    soon: true
  },
  {
    title: "OpenCart",
    description: "Modul pro populární open-source platformu",
    icon: <ShoppingCart className="w-6 h-6 text-[#FAC833]" />,
    soon: true
  },
]

export default function EcommercePluginsPage() {
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
            <div className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-gradient-to-r from-[#FAC833]/10 to-[#8FBEC3]/10 backdrop-blur-sm border border-[#FAC833]/20 text-sm text-[#8FBEC3] mx-auto">
              <Boxes className="w-4 h-4 mr-2 text-[#FAC833]" />
              <span>Jednoduché rozšíření pro váš e-shop</span>
            </div>
            <h1 className={typography.heading.h1}>
              Pluginy pro e-commerce
              <span className="block mt-6 text-[#FAC833]">Snadná integrace do populárních platforem</span>
            </h1>
            <p className={`${typography.body.large} text-white/60 max-w-3xl mx-auto mt-6`}>
              Naše pluginy jsou navrženy pro snadnou integraci do nejpopulárnějších e-commerce platforem.
              Stačí pár kliknutí a můžete nabízet svým zákazníkům bezpečné ověření věku bez nutnosti 
              složitého programování.
            </p>
          </motion.div>

          {/* Platforms Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-[1280px] mx-auto mb-32">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="relative p-6 h-full bg-gradient-to-br from-[#164550]/80 to-[#154350] border border-white/10 hover:border-[#FAC833]/20 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#FAC833]/5">
                  {platform.soon && (
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#FAC833]/20 text-[#FAC833] text-xs font-medium">
                      Připravujeme
                    </div>
                  )}
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#FAC833]/20 to-[#8FBEC3]/20 backdrop-blur-sm flex items-center justify-center">
                      {platform.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white">{platform.title}</h3>
                    <p className="text-white/60">{platform.description}</p>
                    {!platform.soon ? (
                      <Button variant="link" asChild className="p-0 h-auto text-[#FAC833] hover:text-[#FAC833]/80 flex items-center">
                        <Link href={`/dokumentace/pluginy/${platform.title.toLowerCase()}`}>
                          Stáhnout plugin
                          <Download className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    ) : (
                      <div className="text-white/40 text-sm italic">Brzy k dispozici</div>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="max-w-[1280px] mx-auto mb-32"
          >
            <Card className="relative overflow-hidden border-0 bg-[#154350] shadow-xl">
              <div className="absolute inset-0 opacity-[0.02]"
                style={{
                  backgroundImage: `linear-gradient(#8FBEC3 1px, transparent 1px),
                                  linear-gradient(90deg, #8FBEC3 1px, transparent 1px)`,
                  backgroundSize: '20px 20px'
                }}
              />
              <div className="grid md:grid-cols-2 gap-10 p-8 md:p-12 relative z-10">
                <div className="space-y-6">
                  <h2 className={`${typography.heading.h2} text-white`}>Výhody pluginů</h2>
                  <p className="text-lg text-white/80">
                    Pluginy jsou určeny pro konkrétní platformy, například e-shopové nebo publikační systémy, 
                    kde se instalují jako rozšíření. Instalace a konfigurace je výrazně snazší – stačí vyplnit 
                    API klíč, povolit plugin a nastavit základní parametry.
                  </p>
                  <div className="space-y-4 mt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-[#FAC833]/20 flex items-center justify-center mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-[#FAC833]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-white">Rychlá instalace</h3>
                        <p className="text-white/60">Dokážete zprovoznit ověřování během několika minut bez nutnosti programování</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-[#FAC833]/20 flex items-center justify-center mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-[#FAC833]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-white">Snadná konfigurace</h3>
                        <p className="text-white/60">Intuitivní nastavení přímo v administraci vašeho e-shopu</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-[#FAC833]/20 flex items-center justify-center mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-[#FAC833]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-white">Pravidelné aktualizace</h3>
                        <p className="text-white/60">Plugins jsou pravidelně aktualizovány a udržovány pro optimální funkčnost</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="relative w-full max-w-md">
                    <div className="absolute -inset-4 bg-gradient-to-r from-[#FAC833]/10 to-[#8FBEC3]/10 rounded-3xl blur-xl opacity-50" />
                    <Image
                      src="/plugin-screenshot.png"
                      alt="Plugin pro e-shop"
                      width={500}
                      height={400}
                      className="rounded-xl border border-white/10 shadow-lg relative z-10"
                    />
                  </div>
                </div>
              </div>
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
              <div className="p-8 md:p-12 space-y-8">
                <div className="inline-flex items-center justify-center p-3 rounded-full bg-[#FAC833]/10 text-[#FAC833] mx-auto mb-4">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h2 className={`${typography.heading.h2} text-white`}>
                  Vyzkoušejte naše pluginy ještě dnes
                </h2>
                <p className="text-lg text-white/60 max-w-2xl mx-auto">
                  Stáhněte si plugin pro vaši e-commerce platformu a začněte ověřovat věk vašich zákazníků 
                  jednoduše a bezpečně. Získejte API klíč zdarma a otestujte integraci bez závazků.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button
                    asChild
                    className="rounded-full px-8 py-6 bg-gradient-to-r from-[#FAC833] to-[#FAC833]/90 text-[#164550] hover:opacity-90 transition-all duration-300 shadow-lg shadow-[#FAC833]/20 font-medium"
                  >
                    <Link href="/vyzkousejte-zdarma" className="flex items-center">
                      Vyzkoušet zdarma
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-full px-8 py-6 border-[#FAC833]/20 text-white hover:bg-[#FAC833]/10 transition-all duration-300"
                  >
                    <Link href="/kontakt" className="flex items-center">
                      Kontaktovat podporu
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

