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
    image: "/placeholder.svg",
    category: "Novinky",
    title: "Nové možnosti ověření věku",
    excerpt: "Představujeme nové způsoby, jak mohou vaši zákazníci ověřit svůj věk...",
    link: "/blog/nove-moznosti-overeni-veku",
  },
  {
    image: "/placeholder.svg",
    category: "Návody",
    title: "Jak implementovat PassProve",
    excerpt: "Podrobný průvodce implementací našeho řešení do vašeho e-shopu...",
    link: "/blog/jak-implementovat-passprove",
  },
  {
    image: "/placeholder.svg",
    category: "Bezpečnost",
    title: "ISO 27001 certifikace",
    excerpt: "Co pro vás znamená získání certifikace ISO 27001...",
    link: "/blog/iso-27001-certifikace",
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
        <h2 className={`${typography.heading.h2} text-white mb-6`}>
          Aktuality
        </h2>
        <p className={`${typography.body.large} text-white/60 max-w-3xl mx-auto`}>
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
                <CardDescription className="text-white/60 text-lg">
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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="text-center"
      >
        <Button 
          asChild 
          size="lg"
          className="bg-[#FAC833] hover:bg-[#FAC833]/90 text-[#231F20] border-0 rounded-full h-16 px-12 text-lg"
        >
          <Link href="/blog" className="flex items-center">
            Zobrazit vše
            <ArrowRight className="ml-3 h-5 w-5" />
          </Link>
        </Button>
      </motion.div>
    </section>
  )
}
