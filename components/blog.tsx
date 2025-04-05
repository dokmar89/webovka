'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import { typography } from '@/lib/design-system'
import { motion } from "framer-motion"

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
]

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1 + 0.3,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
}

export function Blog() {
  return (
    <section className="relative py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-8 max-w-4xl mx-auto mb-16"
      >
        <h2 className={`${typography.heading.h2} text-[#064052] dark:text-white mb-6`}>
          Aktuality
        </h2>
        <p className={`${typography.body.large} text-[#064052]/80 dark:text-white/60 max-w-3xl mx-auto`}>
          Nejnovější informace ze světa PassProve
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-14 max-w-7xl mx-auto mb-16">
        {articles.map((article, index) => (
          <motion.div 
            custom={index} 
            initial="hidden" 
            animate="visible" 
            variants={fadeIn}
            key={index}
          >
            <Card className="group border border-white/50 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-sm shadow-lg overflow-hidden h-full hover:bg-white/90 dark:hover:bg-white/10 transition-all duration-300">
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
                <Badge className="bg-[#FAC833]/20 hover:bg-[#FAC833]/30 text-[#064052] dark:text-[#FAC833] font-medium py-1.5 px-3">
                  {article.category}
                </Badge>
                <CardTitle className="text-2xl text-[#064052] dark:text-white">{article.title}</CardTitle>
                <div className="text-[#064052]/70 dark:text-[#8FBEC3] text-sm font-medium mt-2 mb-4">
                  {article.date}
                </div>
                <CardDescription className="text-[#064052]/80 dark:text-white/70 text-lg">
                  {article.excerpt}
                </CardDescription>
              </CardContent>
              <CardFooter className="px-10 pb-10 pt-0">
                <Button 
                  asChild 
                  variant="outline" 
                  className="w-full border-[#064052]/20 dark:border-white/10 text-[#064052] dark:text-white hover:bg-gradient-to-r hover:from-white/30 hover:to-transparent dark:hover:bg-gradient-to-r dark:hover:from-[#97AAAF]/10 dark:hover:to-transparent rounded-full h-14 transition-all duration-300 group hover:border-[#064052]/40 dark:hover:border-white/20"
                >
                  <Link href={article.link} className="flex items-center justify-center">
                    Přečíst celý článek
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="text-center"
      >
        <Button 
          asChild 
          size="lg"
          className="bg-gradient-to-r from-[#FAC833] to-[#FAD862] hover:from-[#FAD862] hover:to-[#FAE891] text-[#064052] border-0 rounded-full h-16 px-12 text-lg transition-all duration-300 hover:shadow-md hover:scale-[1.02] group"
        >
          <Link href="/blog" className="flex items-center">
            Zobrazit vše
            <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </Button>
      </motion.div>
    </section>
  )
}
