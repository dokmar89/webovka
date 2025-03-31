'use client'

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, Filter, Search } from "lucide-react"
import { typography } from '@/lib/design-system'
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"

const articles = [
  {
    image: "/images/blog/bankid.jpg",
    category: "Novinky",
    title: "BankID nově v PassProve",
    excerpt: "Představujeme integraci s bankovní identitou, která umožňuje ověřit věk zákazníka během několika sekund přímo pomocí bankovní identity.",
    date: "24. března 2023",
    link: "/blog/bankid-nove-v-passprove",
  },
  {
    image: "/images/blog/implementace.jpg",
    category: "Návody",
    title: "Jak implementovat PassProve do Shoptetu",
    excerpt: "Podrobný průvodce implementací našeho řešení do vašeho e-shopu na platformě Shoptet včetně kódových ukázek a nastavení.",
    date: "15. února 2023",
    link: "/blog/jak-implementovat-passprove-do-shoptetu",
  },
  {
    image: "/images/blog/iso.jpg",
    category: "Bezpečnost",
    title: "Získali jsme ISO 27001 certifikaci",
    excerpt: "Jsme držiteli certifikace ISO 27001, což znamená, že splňujeme nejvyšší standardy v oblasti bezpečnosti informačních systémů a ochrany dat.",
    date: "8. ledna 2023",
    link: "/blog/ziskali-jsme-iso-27001-certifikaci",
  },
  {
    image: "/images/blog/zakon.jpg",
    category: "Legislativa",
    title: "Změny v zákoně o regulaci prodeje alkoholu",
    excerpt: "Přinášíme přehled změn v zákoně o regulaci prodeje alkoholu a tabákových výrobků, které vstoupí v platnost od 1. ledna 2024.",
    date: "5. prosince 2022",
    link: "/blog/zmeny-v-zakone-o-regulaci-prodeje-alkoholu",
  },
  {
    image: "/images/blog/partnerstvi.jpg",
    category: "Novinky",
    title: "Partnerství s Asociací českých e-shopů",
    excerpt: "Navázali jsme strategické partnerství s Asociací českých e-shopů, což nám umožní lépe komunikovat naše služby českým e-shopům.",
    date: "18. listopadu 2022",
    link: "/blog/partnerstvi-s-asociaci-ceskych-e-shopu",
  },
  {
    image: "/images/blog/integrace.jpg",
    category: "Návody",
    title: "Integrace s WooCommerce",
    excerpt: "Podrobný návod na integraci PassProve s WooCommerce, včetně nastavení callback URL a testování v sandbox prostředí.",
    date: "30. října 2022",
    link: "/blog/integrace-s-woocommerce",
  }
];

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
};

const BlogPage = () => {
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
              <span>PassProve Blog</span>
            </div>
            <h1 className={typography.heading.h1}>
              Aktuality a novinky
              <span className="block mt-6 text-[#FAC833]">ze světa věkového ověřování</span>
            </h1>
            <p className={`${typography.body.large} text-white/60 max-w-3xl mx-auto mt-6`}>
              Zde najdete všechny důležité informace o novinkách v PassProve, změnách v legislativě a návody na implementaci.
            </p>
          </motion.div>

          {/* Search a filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="flex flex-col md:flex-row gap-6">
              <div className="relative flex-grow">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/40 h-5 w-5" />
                <Input 
                  type="text" 
                  placeholder="Hledat články..." 
                  className="bg-white/5 border-white/10 rounded-full pl-12 h-14 text-white placeholder:text-white/40 focus:border-[#FAC833]/50 focus:ring-1 focus:ring-[#FAC833]/50"
                />
              </div>
              <Button variant="outline" className="h-14 rounded-full px-8 border-white/10 text-white hover:bg-white/5 flex items-center gap-2">
                <Filter className="h-5 w-5" />
                <span>Filtrovat</span>
              </Button>
            </div>
          </motion.div>

          {/* Articles grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto mb-20">
            {articles.map((article, index) => (
              <motion.div 
                custom={index} 
                initial="hidden" 
                animate="visible" 
                variants={fadeIn}
                key={index}
              >
                <Card className="group border border-white/10 bg-white/5 backdrop-blur-sm shadow-lg overflow-hidden h-full hover:bg-white/10 transition-all duration-300">
                  <CardHeader className="p-0">
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#154350]/80 to-transparent"></div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-10 space-y-4 relative">
                    <Badge className="bg-[#FAC833]/20 hover:bg-[#FAC833]/30 text-[#FAC833] font-medium py-1.5 px-3">
                      {article.category}
                    </Badge>
                    <CardTitle className="text-2xl">{article.title}</CardTitle>
                    <div className="text-[#8FBEC3] text-sm font-medium mt-2 mb-4">
                      {article.date}
                    </div>
                    <CardDescription className="text-white/70 text-lg">
                      {article.excerpt}
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="px-10 pb-10 pt-0">
                    <Button 
                      asChild 
                      variant="outline" 
                      className="w-full border-white/10 text-white hover:bg-white/5 rounded-full h-14"
                    >
                      <Link href={article.link} className="flex items-center justify-center">
                        Přečíst celý článek
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex justify-center space-x-2 max-w-7xl mx-auto"
          >
            <Button 
              variant="outline" 
              className="w-12 h-12 p-0 flex items-center justify-center rounded-full border-white/10 bg-white/5 hover:bg-white/10"
              disabled
            >
              <ArrowRight className="h-5 w-5 transform rotate-180" />
            </Button>
            <Button 
              variant="outline" 
              className="w-12 h-12 p-0 flex items-center justify-center rounded-full border-white/10 bg-[#FAC833]/10 text-[#FAC833] hover:bg-[#FAC833]/20"
            >
              1
            </Button>
            <Button 
              variant="outline" 
              className="w-12 h-12 p-0 flex items-center justify-center rounded-full border-white/10 bg-white/5 hover:bg-white/10"
            >
              2
            </Button>
            <Button 
              variant="outline" 
              className="w-12 h-12 p-0 flex items-center justify-center rounded-full border-white/10 bg-white/5 hover:bg-white/10"
            >
              <ArrowRight className="h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default BlogPage 