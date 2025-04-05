'use client'

import { Navbar } from "@/components/navbar"
import { PageHeader } from "@/components/page-header"
import { Footer } from "@/components/footer"
import { Check, X, Star, Shield, Clock, Zap, ChevronRight, Award } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { colors, typography, gradients } from "@/lib/design-system"

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  }

  const testimonials = [
    {
      quote: "Díky ověřovacím službám jsme zvýšili konverze o 30% a snížili podvody na minimum.",
      author: "Jan Novák",
      company: "E-commerce Director, Alza.cz",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      quote: "Implementace trvala méně než den a výsledky předčily naše očekávání. Skvělá služba!",
      author: "Petra Svobodová",
      company: "CTO, Zásilkovna",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      quote: "Profesionální přístup, spolehlivost a bezkonkurenční ceny. Jednoznačně doporučuji.",
      author: "Martin Dvořák",
      company: "CEO, Mall.cz",
      avatar: "/placeholder.svg?height=60&width=60",
    },
  ]

  const features = [
    {
      icon: Shield,
      title: "Maximální bezpečnost",
      description: "Všechna data jsou šifrována a zpracována v souladu s GDPR a dalšími bezpečnostními standardy.",
    },
    {
      icon: Zap,
      title: "Rychlá implementace",
      description: "Integrace našeho řešení do vašeho systému zabere méně než jeden den.",
    },
    {
      icon: Clock,
      title: "Dostupnost 24/7",
      description: "Naše služby jsou dostupné nepřetržitě s garantovanou dostupností 99.99%.",
    },
  ]

  const stats = [
    { value: "99.99%", label: "Dostupnost služeb" },
    { value: "< 300ms", label: "Průměrná odezva" },
    { value: "5M+", label: "Ověření měsíčně" },
    { value: "500+", label: "Spokojených klientů" },
  ]

const CeníkPage = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-[#daebed] to-[#c5e2e6] dark:from-[#164550] dark:to-[#0d2b33]">
        <Navbar />
        
        {/* Hero Section */}
        <section className="relative min-h-screen w-full overflow-hidden">
          {/* Pozadí s vzory */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]"
              style={{
                backgroundImage: `radial-gradient(#064052 1px, transparent 1px)`,
                backgroundSize: '30px 30px'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#b1d5d9]/20 via-transparent to-transparent dark:from-[#154350]/5 dark:via-transparent dark:to-transparent" />
          </div>
          
          {/* Dekorativní prvky */}
          <div className="absolute top-32 right-[5%] w-72 h-72 md:w-96 md:h-96 rounded-full bg-[#8FBEC3]/10 dark:bg-[#8FBEC3]/5 blur-3xl z-0 animate-pulse"></div>
          <div className="absolute top-1/2 left-[10%] w-64 h-64 md:w-80 md:h-80 rounded-full bg-[#FAC833]/10 dark:bg-[#FAC833]/5 blur-3xl z-0 animate-pulse" style={{animationDelay: "1.5s"}}></div>
          
          {/* Diagonální prvek v horní části */}
          <div className="absolute top-0 left-0 right-0 h-[30vh] overflow-hidden z-0">
            <div className="absolute top-0 left-0 right-0 h-full bg-[#b1d5d9]/30 dark:bg-[#154350]/30 transform -skew-y-6 origin-top-left"></div>
          </div>

          <div className="container px-8 md:px-12 py-32 mx-auto relative z-10 max-w-[1440px]">
            {/* Hero obsah */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center space-y-8 max-w-4xl mx-auto mb-32"
            >
              <div className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-white/20 dark:bg-white/5 backdrop-blur-sm border border-white/20 text-sm text-[#064052] dark:text-[#8FBEC3] mx-auto">
                <Shield className="w-4 h-4 mr-2" />
                <span>Transparentní ceník</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-[#064052] dark:text-white leading-tight">
                Vyberte si plán
                <span className="block mt-4 text-[#FAC833]">který nejlépe odpovídá vašim potřebám</span>
              </h1>
              
              <p className="text-[#064052]/80 dark:text-white/60 text-lg md:text-xl max-w-3xl mx-auto">
                Nabízíme dva základní cenové plány, které se liší délkou závazku a úrovní poskytovaných služeb. Vyberte si ten, který vám bude nejlépe vyhovovat.
              </p>
            </motion.div>

            {/* Pricing Grid */}
            <div className="grid md:grid-cols-2 gap-8 lg:gap-10 max-w-[900px] mx-auto mb-32">
              {/* Contract Plan */}
              <motion.div custom={0} initial="hidden" animate="visible" variants={fadeIn}>
                <Card className="relative overflow-hidden border-0 bg-[#154350] shadow-xl h-full glass-card">
                  <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-[#8FBEC3] to-[#FAC833]"></div>
                  <div className="absolute -right-20 -top-20 w-40 h-40 bg-[#8FBEC3]/10 rounded-full blur-3xl pointer-events-none" />
                  <div className="absolute -left-20 -bottom-20 w-40 h-40 bg-[#FAC833]/10 rounded-full blur-3xl pointer-events-none" />
                  <div className="absolute inset-0 opacity-[0.02]"
                    style={{
                      backgroundImage: `linear-gradient(#8FBEC3 1px, transparent 1px),
                                      linear-gradient(90deg, #8FBEC3 1px, transparent 1px)`,
                      backgroundSize: '20px 20px'
                    }}
                  />

                  <div className="absolute top-8 right-8">
                    <Badge className="bg-[#FAC833] hover:bg-[#FAC833]/90 text-[#231F20] px-4 py-1.5 text-sm">
                      Doporučeno
                    </Badge>
                  </div>

                  <CardHeader className="pb-6 pt-10 relative z-10 px-10">
                    <div>
                      <CardTitle className="text-3xl font-bold">Se smlouvou</CardTitle>
                      <CardDescription className="text-white/70 mt-2 text-lg">
                        Smlouva na 2 roky
                      </CardDescription>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-8 relative z-10 px-10">
                    <div className="space-y-4">
                      <h3 className="text-xl font-medium">Ceny za ověření</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex justify-between items-center py-3 border-b border-white/10">
                          <span>BankID</span>
                          <span className="font-bold text-[#FAC833] text-lg">5 Kč</span>
                        </div>
                        <div className="flex justify-between items-center py-3 border-b border-white/10">
                          <span>MojeID</span>
                          <span className="font-bold text-[#FAC833] text-lg">5 Kč</span>
                        </div>
                        <div className="flex justify-between items-center py-3 border-b border-white/10">
                          <span>OCR</span>
                          <span className="font-bold text-[#FAC833] text-lg">10 Kč</span>
                        </div>
                        <div className="flex justify-between items-center py-3 border-b border-white/10">
                          <span>Facescan</span>
                          <span className="font-bold text-[#FAC833] text-lg">10 Kč</span>
                        </div>
                        <div className="flex justify-between items-center py-3 border-b border-white/10 col-span-2">
                          <span>Opakované ověření</span>
                          <span className="font-bold text-[#FAC833] text-lg">2 Kč</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl font-medium">Benefity</h3>
                      <ul className="space-y-4">
                        <li className="flex items-center gap-3">
                          <div className="rounded-full bg-[#FAC833]/20 p-1.5">
                            <Check className="h-5 w-5 text-[#FAC833]" />
                          </div>
                          <span className="text-lg">Customizovatelný vzhled widgetu</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="rounded-full bg-[#FAC833]/20 p-1.5">
                            <Check className="h-5 w-5 text-[#FAC833]" />
                          </div>
                          <span className="text-lg">24/7 support přednostní do 1 hodiny</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="rounded-full bg-[#FAC833]/20 p-1.5">
                            <Check className="h-5 w-5 text-[#FAC833]" />
                          </div>
                          <span className="text-lg">Nižší ceny za všechny metody ověření</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="rounded-full bg-[#FAC833]/20 p-1.5">
                            <Check className="h-5 w-5 text-[#FAC833]" />
                          </div>
                          <span className="text-lg">Dedikovaný account manager</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>

                  <CardFooter className="pt-6 pb-10 relative z-10 px-10">
                    <Button 
                      className="w-full bg-[#FAC833] hover:bg-[#FAC833]/90 text-[#231F20] border-0 rounded-full h-14 px-8 text-lg"
                    >
                      <span>Kontaktovat obchod</span>
                      <ChevronRight className="h-5 w-5 ml-2" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>

              {/* No Contract Plan */}
              <motion.div custom={1} initial="hidden" animate="visible" variants={fadeIn}>
                <Card className="relative overflow-hidden border border-white/10 bg-[#154350]/70 shadow-lg h-full backdrop-blur-sm">
                  <div className="absolute inset-0 opacity-[0.02]"
                    style={{
                      backgroundImage: `linear-gradient(#8FBEC3 1px, transparent 1px),
                                      linear-gradient(90deg, #8FBEC3 1px, transparent 1px)`,
                      backgroundSize: '20px 20px'
                    }}
                  />
                  <CardHeader className="pb-6 pt-10 relative z-10 px-10">
                    <CardTitle className="text-3xl font-bold">Bez smlouvy</CardTitle>
                    <CardDescription className="text-white/70 mt-2 text-lg">
                      Flexibilní řešení
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-8 relative z-10 px-10">
                    <div className="space-y-4">
                      <h3 className="text-xl font-medium">Ceny za ověření</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex justify-between items-center py-3 border-b border-white/10">
                          <span>BankID</span>
                          <span className="font-bold text-lg">7 Kč</span>
                        </div>
                        <div className="flex justify-between items-center py-3 border-b border-white/10">
                          <span>MojeID</span>
                          <span className="font-bold text-lg">7 Kč</span>
                        </div>
                        <div className="flex justify-between items-center py-3 border-b border-white/10">
                          <span>OCR</span>
                          <span className="font-bold text-lg">12 Kč</span>
                        </div>
                        <div className="flex justify-between items-center py-3 border-b border-white/10">
                          <span>Facescan</span>
                          <span className="font-bold text-lg">12 Kč</span>
                        </div>
                        <div className="flex justify-between items-center py-3 border-b border-white/10 col-span-2">
                          <span>Opakované ověření</span>
                          <span className="font-bold text-lg">4 Kč</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl font-medium">Benefity</h3>
                      <ul className="space-y-4">
                        <li className="flex items-center gap-3">
                          <div className="rounded-full bg-white/10 p-1.5">
                            <X className="h-5 w-5 text-white/60" />
                          </div>
                          <span className="text-white/60 text-lg">Customizovatelný vzhled widgetu</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="rounded-full bg-white/10 p-1.5">
                            <X className="h-5 w-5 text-white/60" />
                          </div>
                          <span className="text-white/60 text-lg">24/7 support přednostní do 1 hodiny</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="rounded-full bg-[#FAC833]/20 p-1.5">
                            <Check className="h-5 w-5 text-[#FAC833]" />
                          </div>
                          <span className="text-lg">Standardní podpora v pracovní dny</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="rounded-full bg-[#FAC833]/20 p-1.5">
                            <Check className="h-5 w-5 text-[#FAC833]" />
                          </div>
                          <span className="text-lg">Bez dlouhodobého závazku</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>

                  <CardFooter className="pt-6 pb-10 relative z-10 px-10">
                    <Button 
                      variant="outline" 
                      className="w-full border-white/10 text-white hover:bg-white/5 rounded-full h-14 px-8 text-lg"
                    >
                      <span>Registrovat se</span>
                      <ChevronRight className="h-5 w-5 ml-2" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            </div>

            {/* Stats section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="max-w-6xl mx-auto mb-32"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="rounded-xl p-8 text-center shadow-lg border border-white/10 backdrop-blur-sm bg-white/5"
                  >
                    <div className="text-4xl font-bold text-[#FAC833] mb-3">{stat.value}</div>
                    <div className="text-base text-white/60">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Comparison Table */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="max-w-7xl mx-auto mb-32"
            >
              <h2 className={`${typography.heading.h2} text-white mb-12 text-center`}>Detailní porovnání</h2>
              <div className="rounded-xl overflow-hidden shadow-xl border border-white/10 backdrop-blur-sm">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader className="bg-white/5">
                      <TableRow>
                        <TableHead className="w-[350px] font-semibold text-white/90 text-lg p-6">Funkce</TableHead>
                        <TableHead className="text-center font-semibold text-white/90 text-lg p-6">Se smlouvou</TableHead>
                        <TableHead className="text-center font-semibold text-white/90 text-lg p-6">Bez smlouvy</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium border-b border-white/10 p-6 text-lg">Způsob platby</TableCell>
                        <TableCell className="text-center border-b border-white/10 p-6">Kredit v klientském portálu</TableCell>
                        <TableCell className="text-center border-b border-white/10 p-6">Kredit v klientském portálu</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium border-b border-white/10 p-6 text-lg">BankID</TableCell>
                        <TableCell className="text-center font-bold text-[#FAC833] border-b border-white/10 p-6">5 Kč</TableCell>
                        <TableCell className="text-center border-b border-white/10 p-6">7 Kč</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium border-b border-white/10 p-6 text-lg">MojeID</TableCell>
                        <TableCell className="text-center font-bold text-[#FAC833] border-b border-white/10 p-6">5 Kč</TableCell>
                        <TableCell className="text-center border-b border-white/10 p-6">7 Kč</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium border-b border-white/10 p-6 text-lg">OCR</TableCell>
                        <TableCell className="text-center font-bold text-[#FAC833] border-b border-white/10 p-6">10 Kč</TableCell>
                        <TableCell className="text-center border-b border-white/10 p-6">12 Kč</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium border-b border-white/10 p-6 text-lg">Facescan</TableCell>
                        <TableCell className="text-center font-bold text-[#FAC833] border-b border-white/10 p-6">10 Kč</TableCell>
                        <TableCell className="text-center border-b border-white/10 p-6">12 Kč</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium border-b border-white/10 p-6 text-lg">Opakované ověření</TableCell>
                        <TableCell className="text-center font-bold text-[#FAC833] border-b border-white/10 p-6">2 Kč</TableCell>
                        <TableCell className="text-center border-b border-white/10 p-6">4 Kč</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium border-b border-white/10 p-6 text-lg">Customizovatelný vzhled widgetu</TableCell>
                        <TableCell className="text-center border-b border-white/10 p-6">
                          <div className="flex justify-center">
                            <div className="rounded-full bg-[#FAC833]/20 p-1.5">
                              <Check className="h-5 w-5 text-[#FAC833]" />
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="text-center border-b border-white/10 p-6">
                          <div className="flex justify-center">
                            <div className="rounded-full bg-white/10 p-1.5">
                              <X className="h-5 w-5 text-white/60" />
                            </div>
                          </div>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium border-b border-white/10 p-6 text-lg">24/7 support přednostní do 1 hodiny</TableCell>
                        <TableCell className="text-center border-b border-white/10 p-6">
                          <div className="flex justify-center">
                            <div className="rounded-full bg-[#FAC833]/20 p-1.5">
                              <Check className="h-5 w-5 text-[#FAC833]" />
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="text-center border-b border-white/10 p-6">
                          <div className="flex justify-center">
                            <div className="rounded-full bg-white/10 p-1.5">
                              <X className="h-5 w-5 text-white/60" />
                            </div>
                          </div>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium border-b border-white/10 p-6 text-lg">Dedikovaný account manager</TableCell>
                        <TableCell className="text-center border-b border-white/10 p-6">
                          <div className="flex justify-center">
                            <div className="rounded-full bg-[#FAC833]/20 p-1.5">
                              <Check className="h-5 w-5 text-[#FAC833]" />
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="text-center border-b border-white/10 p-6">
                          <div className="flex justify-center">
                            <div className="rounded-full bg-white/10 p-1.5">
                              <X className="h-5 w-5 text-white/60" />
                            </div>
                          </div>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium p-6 text-lg">Délka závazku</TableCell>
                        <TableCell className="text-center p-6">2 roky</TableCell>
                        <TableCell className="text-center p-6">Bez závazku</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
            </motion.div>

            {/* Features section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="max-w-[1280px] mx-auto mb-32"
            >
              <h2 className={`${typography.heading.h2} text-white mb-12 text-center`}>Proč zvolit naše služby</h2>
              <div className="grid md:grid-cols-3 gap-14">
                {features.map((feature, index) => (
                  <Card
                    key={index}
                    className="border border-white/10 bg-white/5 backdrop-blur-sm shadow-lg"
                  >
                    <CardContent className="pt-10 pb-8 px-10">
                      <div className="rounded-full bg-[#8FBEC3]/20 p-4 w-16 h-16 flex items-center justify-center mb-6">
                        <feature.icon className="h-8 w-8 text-[#8FBEC3]" />
                      </div>
                      <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                      <p className="text-white/60 text-lg">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* Testimonials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="max-w-7xl mx-auto mb-32"
            >
              <h2 className={`${typography.heading.h2} text-white mb-12 text-center`}>Co říkají naši klienti</h2>
              <div className="grid md:grid-cols-3 gap-14">
                {testimonials.map((testimonial, index) => (
                  <Card
                    key={index}
                    className="border border-white/10 bg-white/5 backdrop-blur-sm shadow-lg"
                  >
                    <CardContent className="pt-10 px-10 pb-8">
                      <div className="flex items-center mb-6">
                        <Star className="h-6 w-6 text-[#FAC833] mr-1" />
                        <Star className="h-6 w-6 text-[#FAC833] mr-1" />
                        <Star className="h-6 w-6 text-[#FAC833] mr-1" />
                        <Star className="h-6 w-6 text-[#FAC833] mr-1" />
                        <Star className="h-6 w-6 text-[#FAC833]" />
                      </div>
                      <p className="text-white/70 mb-6 italic text-lg">"{testimonial.quote}"</p>
                      <div className="flex items-center">
                        <img
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.author}
                          className="w-12 h-12 rounded-full mr-4"
                        />
                        <div>
                          <p className="font-semibold text-lg">{testimonial.author}</p>
                          <p className="text-white/60">{testimonial.company}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* Trusted by section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="max-w-6xl mx-auto mb-32"
            >
              <h2 className="text-xl font-medium text-center text-white/60 mb-10">Důvěřují nám</h2>
              <div className="flex flex-wrap justify-center gap-16 md:gap-24">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="h-16 w-44 bg-white/5 backdrop-blur-sm rounded-md border border-white/10" />
                ))}
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="max-w-5xl mx-auto text-center mb-16"
            >
              <Card className="border border-white/10 bg-white/5 backdrop-blur-sm shadow-xl">
                <div className="absolute inset-0 opacity-[0.02]"
                  style={{
                    backgroundImage: `linear-gradient(#8FBEC3 1px, transparent 1px),
                                    linear-gradient(90deg, #8FBEC3 1px, transparent 1px)`,
                    backgroundSize: '20px 20px'
                  }}
                />
                <CardContent className="pt-16 pb-16 px-16 relative z-10">
                  <div className="mb-8">
                    <Award className="h-16 w-16 text-[#FAC833] mx-auto mb-6" />
                  </div>
                  <h2 className={`${typography.heading.h2} text-white mb-6`}>Máte zájem o naše služby?</h2>
                  <p className="text-white/70 mb-10 max-w-3xl mx-auto text-lg leading-relaxed">
                    Kontaktujte náš obchodní tým pro více informací nebo si založte účet bez smlouvy a začněte ihned. Jsme
                    připraveni vám pomoci s výběrem nejvhodnějšího řešení pro vaše potřeby.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-8 justify-center">
                    <Button
                      size="lg"
                      className="bg-[#FAC833] hover:bg-[#FAC833]/90 text-[#231F20] border-0 rounded-full h-16 px-12 text-lg"
                    >
                      <span>Kontaktovat obchod</span>
                      <ChevronRight className="h-5 w-5 ml-3" />
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="border-white/10 text-white hover:bg-white/5 rounded-full h-16 px-12 text-lg"
                    >
                      <span>Registrovat se</span>
                      <ChevronRight className="h-5 w-5 ml-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default CeníkPage;
