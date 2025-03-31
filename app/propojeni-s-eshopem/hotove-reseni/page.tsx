'use client'

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Code, Layers, LayoutTemplate, Boxes, Check, ExternalLink, Sparkles } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import { typography } from '@/lib/design-system'

const features = [
  {
    title: "Okamžitý start",
    description: "Implementujte řešení do 15 minut bez nutnosti programování",
    icon: <LayoutTemplate className="w-6 h-6 text-[#FAC833]" />
  },
  {
    title: "Jednoduchá integrace",
    description: "Stačí vložit jeden řádek kódu do vašeho webu",
    icon: <Code className="w-6 h-6 text-[#FAC833]" />
  },
  {
    title: "Automatické aktualizace",
    description: "Widget se automaticky aktualizuje s nejnovějšími funkcemi",
    icon: <Layers className="w-6 h-6 text-[#FAC833]" />
  },
  {
    title: "Responzivní design",
    description: "Perfektně funguje na počítačích, tabletech i mobilech",
    icon: <Boxes className="w-6 h-6 text-[#FAC833]" />
  }
]

export default function HotoveReseniPage() {
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
              <LayoutTemplate className="w-4 h-4 mr-2 text-[#FAC833]" />
              <span>Nejrychlejší způsob implementace</span>
            </div>
            <h1 className={typography.heading.h1}>
              Widget - hotové řešení
              <span className="block mt-6 text-[#FAC833]">Okamžitá integrace ověření věku</span>
            </h1>
            <p className={`${typography.body.large} text-white/60 max-w-3xl mx-auto mt-6`}>
              Widget je hotové řešení, které jednoduše vložíte do svého webu bez nutnosti programování.
              Během několika minut můžete nabídnout svým zákazníkům bezpečné ověření věku s minimem úsilí.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 max-w-[1280px] mx-auto mb-32">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="p-6 h-full bg-gradient-to-br from-[#164550]/80 to-[#154350] border border-white/10 hover:border-[#FAC833]/20 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#FAC833]/5">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#FAC833]/20 to-[#8FBEC3]/20 backdrop-blur-sm flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                    <p className="text-white/60">{feature.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Implementation Section */}
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
                  <h2 className={`${typography.heading.h2} text-white`}>Jak to funguje</h2>
                  <p className="text-lg text-white/80">
                    Widget je kousek připraveného kódu, který vložíte na svou webovou stránku.
                    O vše ostatní se postaráme my. Je to podobné, jako když do stránky vložíte třeba mapu z Google Maps.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-[#FAC833]/20 flex items-center justify-center mt-0.5">
                        <Check className="w-4 h-4 text-[#FAC833]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-white">Zjednodušený proces</h3>
                        <p className="text-white/60">Nemusíte psát žádný kód sami, stačí widget jednoduše nasadit</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-[#FAC833]/20 flex items-center justify-center mt-0.5">
                        <Check className="w-4 h-4 text-[#FAC833]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-white">Technicky nenáročné</h3>
                        <p className="text-white/60">Widget běží na straně klienta a vše řeší automaticky</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-[#FAC833]/20 flex items-center justify-center mt-0.5">
                        <Check className="w-4 h-4 text-[#FAC833]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-white">Vhodné pro rychlé nasazení</h3>
                        <p className="text-white/60">Ideální, když potřebujete okamžité řešení bez zdlouhavé implementace</p>
                      </div>
                    </div>
                  </div>
                  <Button
                    asChild
                    className="rounded-full px-8 py-6 mt-4 bg-gradient-to-r from-[#FAC833] to-[#FAC833]/90 text-[#164550] hover:opacity-90 transition-all duration-300 shadow-lg shadow-[#FAC833]/20 font-medium"
                  >
                    <Link href="/vyzkousejte-zdarma" className="flex items-center">
                      Vyzkoušet widget
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FAC833]/10 to-transparent pointer-events-none"></div>
                  <div className="bg-[#0D2B33] p-6 h-full font-mono text-sm text-white/80 space-y-4">
                    <div className="flex items-center gap-2 mb-6 text-xs">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span className="ml-2 text-white/60">widget-implementation.html</span>
                    </div>
                    <pre><code className="text-[#8FBEC3]">&lt;<span className="text-[#FAC833]">script</span>&gt;</code></pre>
                    <pre><code>  <span className="text-[#FAC833]">const</span> <span className="text-[#8FBEC3]">passProveWidget</span> = {`{`}</code></pre>
                    <pre><code>    apiKey: <span className="text-green-400">"YOUR_API_KEY"</span>,</code></pre>
                    <pre><code>    targetElement: <span className="text-green-400">"#age-verification"</span>,</code></pre>
                    <pre><code>    mode: <span className="text-green-400">"popup"</span>,</code></pre>
                    <pre><code>    theme: <span className="text-green-400">"dark"</span></code></pre>
                    <pre><code>  {`}`};</code></pre>
                    <pre><code className="text-[#8FBEC3]">&lt;/<span className="text-[#FAC833]">script</span>&gt;</code></pre>
                    <pre><code className="text-[#8FBEC3]">&lt;<span className="text-[#FAC833]">script</span> <span className="text-[#8FBEC3]">src</span>=<span className="text-green-400">"https://widget.passprove.cz/v1"</span>&gt;&lt;/<span className="text-[#FAC833]">script</span>&gt;</code></pre>
                    <pre><code className="text-[#8FBEC3]">&lt;<span className="text-[#FAC833]">div</span> <span className="text-[#8FBEC3]">id</span>=<span className="text-green-400">"age-verification"</span>&gt;&lt;/<span className="text-[#FAC833]">div</span>&gt;</code></pre>
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
                  Připraveni začít?
                </h2>
                <p className="text-lg text-white/60 max-w-2xl mx-auto">
                  PassProve widget je nejjednodušší způsob, jak integrovat ověření věku do vašeho e-shopu.
                  Začněte zdarma a během pár minut budete připraveni.
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
                    <Link href="/propojeni-s-eshopem" className="flex items-center">
                      Další možnosti integrace
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
  );
}
