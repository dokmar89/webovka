'use client'

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { typography } from '@/lib/design-system'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { ArrowRight, Code, LayoutTemplate, Server } from "lucide-react"

const PropojenisEshopemPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#164550] to-[#1A3E4D] text-white py-12">
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
            <header className="text-center">
              <h1 className="text-5xl font-bold text-[#FFD700] mb-4">Plugin do známých platforem</h1>
            </header>
            <section className="bg-[#1A3E4D] p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 border-l-4 border-[#FFD700]">
              <h2 className="text-4xl font-semibold text-[#FFD700] mb-4">Co to znamená?</h2>
              <p className="text-lg mb-4">Plugin je doplněk, který si jednoduše nainstalujete třeba do svého internetového obchodu (např. na WordPressu, Shoptetu, Shopify a jiných) a on za vás vyřeší všechno potřebné. Nemusíte programovat – stačí plugin povolit a nastavit pár základních věcí.</p>
            </section>
            <section className="bg-[#1A3E4D] p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 border-l-4 border-[#FFD700]">
              <h2 className="text-4xl font-semibold text-[#FFD700] mb-4">Pro koho se to hodí?</h2>
              <p className="text-lg mb-4">Pro uživatele, kteří používají zavedené e-commerce platformy (jako je výše zmíněný WordPress, Shoptet atd.).</p>
              <p className="text-lg mb-4">Pro ty, kteří nechtějí příliš řešit technické detaily a mají rádi hotové a snadno zapojitelné řešení.</p>
            </section>
            <section className="bg-[#1A3E4D] p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 border-l-4 border-[#FFD700]">
              <h2 className="text-4xl font-semibold text-[#FFD700] mb-4">Výhody:</h2>
              <ul className="list-disc pl-5 mb-4">
                <li>Rychlá a snadná instalace.</li>
                <li>Minimální technická náročnost.</li>
              </ul>
            </section>
            <section className="bg-[#1A3E4D] p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 border-l-4 border-[#FFD700]">
              <h2 className="text-4xl font-semibold text-[#FFD700] mb-4">Nevýhody:</h2>
              <ul className="list-disc pl-5 mb-4">
                <li>Menší možnost přizpůsobit si ověřovací proces přesně podle sebe.</li>
                <li>Pluginy jsou závislé na konkrétní platformě, takže když změníte systém, musíte řešení hledat znovu.</li>
              </ul>
            </section>
            <section className="bg-[#1A3E4D] p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 border-l-4 border-[#FFD700]">
              <h2 className="text-4xl font-semibold text-[#FFD700] mb-4">Pro zkušenější:</h2>
              <p className="text-lg mb-4">Pluginy jsou určeny pro konkrétní platformy, například e-shopové nebo publikační systémy, kde se instalují jako rozšíření.</p>
              <p className="text-lg mb-4">Interně využívají naše API, ale jejich instalace a konfigurace je výrazně snazší – stačí vyplnit API klíč, povolit plugin a nastavit základní parametry.</p>
              <p className="text-lg mb-4">Omezením může být menší flexibilita, protože se přizpůsobujete hotovému řešení pluginu. Nicméně dostanete rychlé a fungující řešení bez nutnosti psát kód od nuly.</p>
            </section>
          </motion.div>

          {/* Integration Options */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-[1280px] mx-auto mb-32">
            {/* Integration Option Cards */}
          </div>

          {/* Documentation Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="max-w-[1280px] mx-auto mb-32"
          >
            {/* Documentation Content */}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="max-w-[1280px] mx-auto text-center mb-16"
          >
            {/* CTA Content */}
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PropojenisEshopemPage;
