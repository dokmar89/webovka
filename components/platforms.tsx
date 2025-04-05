'use client'

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { typography } from '@/lib/design-system';
import { motion } from "framer-motion";

const platforms = [
  { name: "Shoptet", logo: "/icons/shoptet.svg" },
  { name: "PrestaShop", logo: "/icons/prestashop.svg" },
  { name: "WooCommerce", logo: "/icons/woocommerce.svg" },
  { name: "Shopify", logo: "/icons/shopify.svg" },
  { name: "Magento", logo: "/icons/magento.svg" },
  { name: "OpenCart", logo: "/icons/opencart.svg" },
  { name: "API", logo: "/icons/api.svg" },
];

export function Platforms() {
  return (
    <section className="relative py-16 sm:py-20 md:py-32 px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-4 sm:space-y-8 max-w-4xl mx-auto"
      >
        <h2 className={`${typography.heading.h2} text-[#064052] dark:text-white text-3xl sm:text-4xl md:text-5xl mb-2 sm:mb-6`}>
          Podporované e-commerce platformy
        </h2>
        <p className={`${typography.body.large} text-[#064052]/80 dark:text-white/60 max-w-3xl mx-auto text-base sm:text-lg`}>
          Jednoduché napojení pro všechny populární e-shopové řešení
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="overflow-hidden w-full my-8 sm:my-12 md:my-16"
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:flex lg:flex-wrap justify-center gap-4 sm:gap-6 md:gap-10 lg:gap-16">
          {platforms.map((platform) => (
            <Card
              key={platform.name}
              className="w-auto h-auto bg-white/90 dark:bg-white/5 backdrop-blur-sm shadow-lg border border-white/60 dark:border-white/10 p-3 sm:p-4 md:p-6 transition-all duration-300 hover:bg-white hover:shadow-xl dark:hover:bg-white/10 group hover:scale-[1.05]"
            >
              <Image
                src={platform.logo}
                alt={platform.name}
                width={120}
                height={120}
                className="object-contain w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 group-hover:scale-110 transition-all duration-300"
              />
            </Card>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-center mt-8 sm:mt-12 md:mt-16"
      >
        <Button 
          asChild 
          size="lg" 
          className="bg-gradient-to-r from-[#FAC833] to-[#FAD862] hover:from-[#FAD862] hover:to-[#FAE891] text-[#064052] border-0 rounded-full h-12 sm:h-14 md:h-16 px-6 sm:px-8 md:px-12 text-base sm:text-lg transition-all duration-300 hover:shadow-md hover:scale-[1.02] group"
        > 
          <Link href="/propojeni-s-eshopem/pluginy-pro-ecommerce" className="flex items-center">
            Všechny integrace
            <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </Button>
      </motion.div>
    </section>
  )
}
