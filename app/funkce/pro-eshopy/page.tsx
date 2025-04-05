'use client'

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from 'next/link'
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, CheckCircle, ShieldCheck, Zap, Lock, Clock, ArrowDown, LucideShoppingCart } from 'lucide-react'
import { typography } from '@/lib/design-system'

const features = [
  {
    title: "Bezpečné ověření",
    description: "Ověřování věku zákazníků probíhá bezpečně a v souladu s GDPR.",
    icon: <ShieldCheck className="h-6 w-6 text-[#FAC833]" />
  },
  {
    title: "Rychlá implementace",
    description: "Implementace do vašeho e-shopu je otázkou několika minut.",
    icon: <Zap className="h-6 w-6 text-[#FAC833]" />
  },
  {
    title: "Ochrana dat",
    description: "Veškerá data jsou šifrována a bezpečně uložena.",
    icon: <Lock className="h-6 w-6 text-[#FAC833]" />
  },
  {
    title: "24/7 podpora",
    description: "Naše podpora je vám k dispozici 24 hodin denně, 7 dní v týdnu.",
    icon: <Clock className="h-6 w-6 text-[#FAC833]" />
  }
]

const ForEshopsPage = () => {
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
      
      {/* Hero Section - Překrývající se tvary */}
      <section className="relative min-h-[80vh] w-full overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#daebed] to-[#c5e2e6] dark:from-[#164550] dark:to-[#0d2b33]"></div>
        
        {/* Kruhový grafický prvek */}
        <div className="absolute top-0 right-0 h-[90%] aspect-square bg-[#eef8f9] dark:bg-[#1d5060]/60 rounded-full -translate-x-[30%] translate-y-[5%] opacity-80 z-[1]"></div>
        
        {/* Vlnitý prvek dole */}
        <div className="absolute bottom-0 left-0 right-0 h-[30%] z-[2] overflow-hidden">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-[200%]">
            <path 
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V100.44C57.1,98.19,139.39,80.29,213.21,74.62,271,70.09,306.12,63.68,321.39,56.44Z" 
              className="fill-[#f0f8f9] dark:fill-[#0d2b33]/90"
            ></path>
          </svg>
        </div>
        
        {/* Dekorativní prvky */}
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
            {/* Levý sloupec */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-white/20 dark:bg-white/5 backdrop-blur-sm border border-white/20 text-sm text-[#064052] dark:text-[#8FBEC3] mb-8">
                <CheckCircle className="w-4 h-4 mr-2" />
                <span>Řešení pro váš e-shop</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-[#064052] dark:text-white leading-tight">
                Pro e-shopy
                <span className="block mt-4 text-[#FAC833]">Komplexní řešení ověřování věku</span>
              </h1>
              
              <p className="text-[#064052]/80 dark:text-white/60 text-lg md:text-xl max-w-2xl mt-6">
                Nabízíme komplexní řešení pro ověřování věku zákazníků ve vašem e-shopu. Implementace je jednoduchá a rychlá.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <Button 
                  asChild
                  size="lg"
                  className="rounded-full h-14 px-8 text-base bg-gradient-to-r from-[#FAC833] to-[#FAD862] hover:from-[#FAD862] hover:to-[#FAE891] text-[#064052] border-0 transition-all duration-300 hover:shadow-md hover:scale-[1.02] group"
                >
                  <Link href="/registrace" className="flex items-center">
                    <span>Registrovat se</span>
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </Button>
                
                <Button 
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full h-14 px-8 text-base border-[#064052]/20 text-[#064052] dark:text-white dark:border-white/20 hover:bg-white/20 dark:hover:bg-white/5 transition-all duration-300 group"
                >
                  <Link href="#funkce" className="flex items-center">
                    <span>Prozkoumat řešení</span>
                    <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
                  </Link>
                </Button>
              </div>
            </motion.div>
            
            {/* Pravý sloupec - 3D e-shop ilustrace */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative h-[450px] mt-10 lg:mt-0"
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[85%] h-[75%] bg-white/70 dark:bg-[#1a4858]/70 rounded-2xl backdrop-blur-sm shadow-xl border border-white/50 dark:border-white/10 overflow-hidden z-20">
                {/* Stylizovaný fake e-shop */}
                <div className="w-full h-[15%] bg-[#064052] dark:bg-[#0d2b33] border-b border-white/10 flex items-center px-6">
                  <div className="h-3 w-3 rounded-full bg-[#fa5252] mr-2"></div>
                  <div className="h-3 w-3 rounded-full bg-[#fee500] mr-2"></div>
                  <div className="h-3 w-3 rounded-full bg-[#82c91e]"></div>
                  <div className="ml-auto flex space-x-4">
                    <div className="h-2 w-10 bg-white/40 rounded-full"></div>
                    <div className="h-2 w-10 bg-white/40 rounded-full"></div>
                    <div className="h-2 w-10 bg-white/40 rounded-full"></div>
                  </div>
                </div>
                <div className="p-6 h-[85%] flex flex-col">
                  <div className="flex justify-between mb-6">
                    <div className="h-6 w-32 bg-[#064052]/20 dark:bg-white/20 rounded-md"></div>
                    <div className="h-6 w-6 rounded-full bg-[#FAC833] flex items-center justify-center">
                      <LucideShoppingCart className="h-3 w-3 text-[#064052]" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="h-24 bg-[#064052]/10 dark:bg-white/10 rounded-lg"></div>
                    <div className="h-24 bg-[#064052]/10 dark:bg-white/10 rounded-lg"></div>
                  </div>
                  <div className="flex-grow flex items-center justify-center">
                    <div className="p-4 bg-[#FAC833]/20 rounded-lg border border-[#FAC833]/30 max-w-[80%]">
                      <div className="flex items-center space-x-2 mb-2">
                        <ShieldCheck className="h-5 w-5 text-[#FAC833]" />
                        <div className="h-3 w-24 bg-[#064052]/30 dark:bg-white/30 rounded-full"></div>
                      </div>
                      <div className="h-2 w-full bg-[#064052]/20 dark:bg-white/20 rounded-full mb-1.5"></div>
                      <div className="h-2 w-[70%] bg-[#064052]/20 dark:bg-white/20 rounded-full mb-3"></div>
                      <div className="flex justify-end">
                        <div className="h-6 w-16 bg-[#FAC833] rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Dekorace kolem e-shopu */}
              <div className="absolute top-[10%] right-[10%] w-16 h-16 rounded-lg bg-[#FAC833]/30 transform rotate-12 z-10"></div>
              <div className="absolute bottom-[15%] left-[15%] w-20 h-20 rounded-full bg-[#8FBEC3]/30 transform -rotate-12 z-10"></div>
              <div className="absolute top-[30%] left-[5%] w-10 h-10 rounded-lg bg-[#064052]/20 dark:bg-white/10 transform rotate-45 z-10"></div>
            </motion.div>
          </div>
          </div>
        </section>
      
      {/* Features section - Šachovnicový vzor */}
      <section id="funkce" className="relative py-24 bg-[#f0f8f9] dark:bg-[#0d2b33]">
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#064052] dark:text-white mb-6">
              Výhody našeho
              <span className="relative ml-3">
                řešení
                <svg viewBox="0 0 135 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute -bottom-3 left-0 w-full">
                  <path d="M2.5 9.5C22.5 -1.5 115 -1.5 132.5 9.5" stroke="#FAC833" strokeWidth="5" strokeLinecap="round"/>
                </svg>
              </span>
            </h2>
            <p className="text-[#064052]/70 dark:text-white/60 text-xl">
              Naše řešení pro e-shopy nabízí komplexní přístup k ověřování věku zákazníků.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white/80 dark:bg-[#164550]/60 border border-white/50 dark:border-white/10 rounded-3xl overflow-hidden shadow-lg backdrop-blur-sm ${index % 2 === 1 ? 'md:translate-y-12' : ''}`}
              >
                <div className="p-10 h-full">
                  <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center bg-[#FAC833]/10 rounded-xl border border-[#FAC833]/20 mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-[#064052] dark:text-white mb-4">{feature.title}</h3>
                  <p className="text-[#064052]/70 dark:text-white/60 text-lg">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Kruhové prvky na pozadí */}
        <div className="absolute w-80 h-80 -top-20 right-10 rounded-full bg-[#8FBEC3]/20 dark:bg-[#8FBEC3]/5 blur-3xl"></div>
        <div className="absolute w-96 h-96 bottom-10 -left-20 rounded-full bg-[#FAC833]/10 dark:bg-[#FAC833]/5 blur-3xl"></div>
      </section>
      
      {/* Integration Section - Karta s gradientem */}
      <section className="relative py-24 bg-white dark:bg-[#154350]">
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="max-w-5xl mx-auto"
          >
            <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-[#daebed]/70 to-[#c5e2e6]/70 dark:from-[#154350] dark:to-[#0d2b33] shadow-2xl">
              <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-[#8FBEC3] to-[#FAC833]"></div>
              <div className="absolute -right-20 -top-20 w-40 h-40 bg-[#8FBEC3]/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -left-20 -bottom-20 w-40 h-40 bg-[#FAC833]/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FAC833]/20 rounded-full translate-x-1/2 -translate-y-1/2 blur-xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#8FBEC3]/20 rounded-full -translate-x-1/2 translate-y-1/2 blur-xl"></div>

              <CardHeader className="pb-6 pt-10 relative z-10 px-10">
                <CardTitle className="text-3xl font-bold text-[#064052] dark:text-white">Snadná integrace</CardTitle>
                <CardDescription className="text-[#064052]/70 dark:text-white/70 mt-2 text-lg">
                  Připravené pluginy pro populární e-shopové platformy
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-8 relative z-10 px-10 pb-10">
                <p className="text-[#064052]/80 dark:text-white/80 text-lg leading-relaxed">
                  Nabízíme připravené pluginy pro nejpoužívanější e-shopové platformy jako Shoptet, PrestaShop a WooCommerce. Pro ostatní platformy máme k dispozici API dokumentaci.
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                  <div className="bg-white/70 dark:bg-white/5 rounded-xl flex items-center justify-center h-20 backdrop-blur-sm border border-white/50 dark:border-white/10">
                    <div className="h-6 w-28 bg-[#064052]/20 dark:bg-white/20 rounded-md"></div>
                  </div>
                  <div className="bg-white/70 dark:bg-white/5 rounded-xl flex items-center justify-center h-20 backdrop-blur-sm border border-white/50 dark:border-white/10">
                    <div className="h-6 w-28 bg-[#064052]/20 dark:bg-white/20 rounded-md"></div>
                  </div>
                  <div className="bg-white/70 dark:bg-white/5 rounded-xl flex items-center justify-center h-20 backdrop-blur-sm border border-white/50 dark:border-white/10">
                    <div className="h-6 w-28 bg-[#064052]/20 dark:bg-white/20 rounded-md"></div>
                  </div>
                  <div className="bg-white/70 dark:bg-white/5 rounded-xl flex items-center justify-center h-20 backdrop-blur-sm border border-white/50 dark:border-white/10">
                    <div className="h-6 w-28 bg-[#064052]/20 dark:bg-white/20 rounded-md"></div>
                  </div>
                </div>
                
                <Button 
                  asChild
                  className="mt-8 rounded-full h-14 px-8 text-base bg-gradient-to-r from-[#FAC833] to-[#FAD862] hover:from-[#FAD862] hover:to-[#FAE891] text-[#064052] border-0 transition-all duration-300 hover:shadow-md hover:scale-[1.02] group w-full sm:w-auto"
                >
                  <Link href="/dokumentace" className="flex items-center justify-center">
                    <span>Zobrazit dokumentaci</span>
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
          </div>
        </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-[#f0f8f9] dark:bg-[#0d2b33] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(#064052 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}
        />
        
        {/* Diagonální pozadí */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-white/50 dark:bg-[#154350]/30 transform -skew-y-6"></div>
        
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="bg-white/80 dark:bg-[#164550]/60 rounded-3xl p-12 md:p-16 backdrop-blur-sm border border-white/50 dark:border-white/10 shadow-lg">
              <h2 className="text-4xl md:text-5xl font-bold text-[#064052] dark:text-white mb-6">Začněte ještě dnes</h2>
              <p className="text-[#064052]/70 dark:text-white/70 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
                Vyzkoušejte PassProve zdarma a přesvědčte se o jeho výhodách. Získejte kredit 200 Kč na testování.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full h-14 px-10 text-base bg-gradient-to-r from-[#FAC833] to-[#FAD862] hover:from-[#FAD862] hover:to-[#FAE891] text-[#064052] border-0 transition-all duration-300 hover:shadow-md hover:scale-[1.02] group"
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
                  className="rounded-full h-14 px-10 text-base border-[#064052]/20 text-[#064052] dark:text-white dark:border-white/20 hover:bg-white/20 dark:hover:bg-white/5 transition-all duration-300"
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
      </section>
      
      <Footer />
    </div>
  );
};

export default ForEshopsPage;
