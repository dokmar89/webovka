'use client'

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { typography } from '@/lib/design-system';
import { motion } from "framer-motion";

const platforms = [
  { name: "Shoptet", logo: "/public2/icons/shoptet.svg" },
  { name: "PrestaShop", logo: "/public2/icons/prestashop.svg" },
  { name: "WooCommerce", logo: "/public2/icons/woocommerce.svg" },
  { name: "Shopify", logo: "/public2/icons/shopify.svg" },
  { name: "Magento", logo: "/public2/icons/magento.svg" },
  { name: "OpenCart", logo: "/public2/icons/opencart.svg" },
  { name: "API", logo: "/public2/icons/api.svg" },
];

export function Platforms() {
  return (
    <section className="relative py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-8 max-w-4xl mx-auto"
      >
        <h2 className={`${typography.heading.h2} text-white mb-6`}>
          Podporované e-commerce platformy
        </h2>
        <p className={`${typography.body.large} text-white/60 max-w-3xl mx-auto`}>
          Jednoduché napojení pro všechny populární e-shopové řešení
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="overflow-hidden w-full my-16"
      >
        <div className="flex flex-wrap justify-center gap-10 md:gap-16">
          {platforms.map((platform) => (
            <Card
              key={platform.name}
              className="w-auto h-auto bg-white/5 backdrop-blur-sm shadow-lg border border-white/10 p-6 transition-all duration-200 hover:bg-white/10 group"
            >
              <Image
                src={platform.logo}
                alt={platform.name}
                width={120}
                height={120}
                className="object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </Card>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-center mt-16"
      >
        <Button 
          asChild 
          size="lg" 
          className="bg-[#FAC833] hover:bg-[#FAC833]/90 text-[#231F20] border-0 rounded-full h-16 px-12 text-lg"
        > 
          <Link href="/propojeni-s-eshopem/pluginy-pro-ecommerce" className="flex items-center">
            Všechny integrace
            <ArrowRight className="ml-3 h-5 w-5" />
          </Link>
        </Button>
      </motion.div>
    </section>
  )
}
