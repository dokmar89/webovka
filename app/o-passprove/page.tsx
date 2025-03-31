'use client'

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from 'next/link'
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Shield, CheckCircle, Building2, Globe, Award, Clock, Users } from 'lucide-react'
import { typography } from '@/lib/design-system'
import Image from "next/image"

const OPassProvePage = () => {
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

  const metrics = [
    { value: "300+", label: "Spokojených e-shopů", icon: <Building2 className="h-6 w-6 text-[#8FBEC3]" /> },
    { value: "100k+", label: "Ověření měsíčně", icon: <CheckCircle className="h-6 w-6 text-[#8FBEC3]" /> },
    { value: "99.9%", label: "Dostupnost služby", icon: <Clock className="h-6 w-6 text-[#8FBEC3]" /> },
    { value: "95%", label: "Spokojenost zákazníků", icon: <Users className="h-6 w-6 text-[#8FBEC3]" /> }
  ];

  const features = [
    "Ověřujeme věk zákazníků na e-shopech napříč celou ČR",
    "Jsme držiteli certifikace ISO 27001",
    "Platíte pouze za jednotlivá ověření věku",
    "Uživatelský portál zdarma",
    "Nepřetržitá technická podpora"
  ];

  const clients = Array(6).fill(null);

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
              <Award className="w-4 h-4 mr-2" />
              <span>Od roku 2019 pomáháme e-shopům s ověřením věku</span>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center mb-4"
            >
              <Image
                src="/files/Logo_PassProve_bila.svg"
                alt="PassProve Logo"
                width={250}
                height={100}
                className="w-auto h-[70px] md:h-[100px]"
                priority
              />
            </motion.div>
            
            <h1 className={typography.heading.h1}>
              <span className="block mt-6 text-[#FAC833]">Bezpečné a spolehlivé ověření věku pro váš e-shop</span>
            </h1>
            <p className={`${typography.body.large} text-white/60 max-w-3xl mx-auto mt-6`}>
              Jsme česká společnost specializující se na ověřování věku zákazníků pro e-shopy, které prodávají zboží s věkovým omezením.
            </p>
          </motion.div>

          {/* Metrics Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="max-w-6xl mx-auto mb-32"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {metrics.map((metric, index) => (
                <div
                  key={index}
                  className="rounded-xl p-8 text-center shadow-lg border border-white/10 backdrop-blur-sm bg-white/5"
                >
                  <div className="flex justify-center mb-4">
                    {metric.icon}
                  </div>
                  <div className="text-4xl font-bold text-[#FAC833] mb-3">{metric.value}</div>
                  <div className="text-base text-white/60">{metric.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Mission & ISO Section */}
          <div className="grid lg:grid-cols-2 gap-14 max-w-6xl mx-auto mb-32">
            <motion.div 
              custom={0} 
              initial="hidden" 
              animate="visible" 
              variants={fadeIn}
              className="group"
            >
              <Card className="relative overflow-hidden border-0 bg-[#154350] shadow-xl h-full">
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
                  <div>
                    <CardTitle className="text-3xl font-bold">Naše mise</CardTitle>
                    <CardDescription className="text-white/70 mt-2 text-lg">
                      Pomáháme e-shopům s dodržováním zákonů
                    </CardDescription>
                  </div>
                </CardHeader>

                <CardContent className="space-y-8 relative z-10 px-10">
                  <p className={`${typography.body.large} text-white/80`}>
                    Ověřujeme věk zákazníků e-shopů, které prodávají tabákové výrobky, erotické pomůcky, alkohol nebo jiné výrobky určené pro osoby nad 18 let.
                  </p>
                  <p className={`${typography.body.base} text-white/70`}>
                    S PassProve budete zodpovědný prodejce, který dodržuje své zákonné povinnosti a zajišťuje, že věkově omezené produkty se nedostanou do rukou nezletilých osob.
                  </p>
                </CardContent>

                <CardFooter className="pt-6 pb-10 relative z-10 px-10">
                  <Button 
                    asChild
                    className="w-full bg-[#FAC833] hover:bg-[#FAC833]/90 text-[#231F20] border-0 rounded-full h-14 px-8 text-lg"
                  >
                    <Link href="/funkce/jak-to-funguje" className="flex items-center justify-center">
                      <span>Jak to funguje</span>
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>

            <motion.div 
              custom={1} 
              initial="hidden" 
              animate="visible" 
              variants={fadeIn}
              className="group"
            >
              <Card className="relative overflow-hidden border border-white/10 bg-[#154350]/70 shadow-lg h-full backdrop-blur-sm">
                <div className="absolute inset-0 opacity-[0.02]"
                  style={{
                    backgroundImage: `linear-gradient(#8FBEC3 1px, transparent 1px),
                                    linear-gradient(90deg, #8FBEC3 1px, transparent 1px)`,
                    backgroundSize: '20px 20px'
                  }}
                />

                <div className="absolute top-8 right-8">
                  <Badge className="bg-[#FAC833] hover:bg-[#FAC833]/90 text-[#231F20] px-4 py-1.5 text-sm">
                    Certifikováno
                  </Badge>
                </div>

                <CardHeader className="pb-6 pt-10 relative z-10 px-10">
                  <div>
                    <CardTitle className="text-3xl font-bold">Bezpečnost na prvním místě</CardTitle>
                    <CardDescription className="text-white/70 mt-2 text-lg">
                      ISO 27001 certifikace
                    </CardDescription>
                  </div>
                </CardHeader>

                <CardContent className="space-y-8 relative z-10 px-10">
                  <p className={`${typography.body.large} text-white/80`}>
                    Jsme držiteli certifikace ISO 27001, mezinárodního standardu pro systémy řízení bezpečnosti informací.
                  </p>
                  <p className={`${typography.body.base} text-white/70`}>
                    To znamená, že při práci s vašimi daty dodržujeme nejvyšší bezpečnostní standardy a vaše data jsou u nás v bezpečí. Všechna osobní data zpracováváme v souladu s GDPR.
                  </p>

                  <div className="flex justify-center mt-4">
                    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                      <Shield className="h-20 w-20 text-[#FAC833] mx-auto" />
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="pt-6 pb-10 relative z-10 px-10">
                  <Button 
                    asChild
                    variant="outline"
                    className="w-full border-white/10 text-white hover:bg-white/5 rounded-full h-14 px-8 text-lg"
                  >
                    <Link href="/bezpecnost" className="flex items-center justify-center">
                      <span>Více o bezpečnosti</span>
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          </div>

          {/* Features Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="max-w-6xl mx-auto mb-32"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-14 shadow-xl border border-white/10 relative z-10">
              <h2 className={`${typography.heading.h2} text-white mb-12 text-center`}>
                Proč si vybrat PassProve
              </h2>

              <div className="grid md:grid-cols-2 gap-10">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-start space-x-6 bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/10 hover:bg-white/15 transition-all duration-300"
                  >
                    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-[#FAC833]/10 rounded-xl border border-[#FAC833]/20">
                      <CheckCircle className="h-6 w-6 text-[#FAC833]" />
                    </div>
                    <p className={`${typography.body.large} text-white/70 pt-2`}>{feature}</p>
                  </div>
                ))}
          </div>
          </div>
          </motion.div>

          {/* Clients Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="max-w-6xl mx-auto mb-32"
          >
            <h2 className="text-2xl font-semibold text-center text-white/90 mb-10">Důvěřují nám</h2>
            <div className="flex flex-wrap justify-center gap-16 md:gap-24">
              {clients.map((_, i) => (
                <div key={i} className="h-16 w-44 bg-white/5 backdrop-blur-sm rounded-md border border-white/10" />
              ))}
          </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="max-w-[1280px] mx-auto text-center mb-16"
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
                  <Globe className="h-16 w-16 text-[#FAC833] mx-auto mb-6" />
          </div>
                <h2 className={`${typography.heading.h2} text-white mb-6`}>Připraveni začít s ověřováním věku?</h2>
                <p className="text-white/70 mb-10 max-w-3xl mx-auto text-lg leading-relaxed">
                  Chtěli byste začít ověřovat věk vašich zákazníků, nebo máte další otázky? Neváhejte nás kontaktovat nebo si prohlédnout náš ceník.
                </p>
                <div className="flex flex-col sm:flex-row gap-8 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-[#FAC833] hover:bg-[#FAC833]/90 text-[#231F20] border-0 rounded-full h-16 px-12 text-lg"
                  >
                    <Link href="/cenik" className="flex items-center">
                      <span>Zobrazit ceník</span>
                      <ArrowRight className="h-5 w-5 ml-3" />
                    </Link>
                  </Button>
                  <Button 
                    asChild
                    size="lg" 
                    variant="outline" 
                    className="border-white/10 text-white hover:bg-white/5 rounded-full h-16 px-12 text-lg"
                  >
                    <Link href="/kontakt" className="flex items-center">
                      <span>Kontaktujte nás</span>
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

export default OPassProvePage;
