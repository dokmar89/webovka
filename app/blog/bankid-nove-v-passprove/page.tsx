'use client'

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Share2, User, Award } from "lucide-react"
import { typography } from '@/lib/design-system'
import { motion } from "framer-motion"

const BankIDClanekPage = () => {
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
          <div className="mb-8">
            <Button 
              asChild 
              variant="ghost" 
              className="mb-6 pl-0 text-white/60 hover:text-white hover:bg-transparent"
            >
              <Link href="/blog" className="flex items-center">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Zpět na přehled
              </Link>
            </Button>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-left space-y-8 max-w-4xl mx-auto mb-10"
          >
            <div className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-sm text-[#8FBEC3]">
              <Award className="w-4 h-4 mr-2" />
              <span>Novinky</span>
            </div>
            <h1 className={typography.heading.h1}>
              BankID nově v PassProve
            </h1>
            
            <div className="flex flex-wrap gap-6 text-white/60">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-[#FAC833]" />
                <span>24. března 2023</span>
              </div>
              <div className="flex items-center">
                <User className="w-5 h-5 mr-2 text-[#FAC833]" />
                <span>Napsal: Jan Novák</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2 text-[#FAC833]" />
                <span>Čas čtení: 5 minut</span>
              </div>
            </div>
          </motion.div>
          
          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="relative aspect-[21/9] rounded-2xl overflow-hidden">
              <Image
                src="/images/blog/bankid.jpg"
                alt="BankID nově v PassProve"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
          
          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-4xl mx-auto space-y-8 text-white/80 mb-16"
          >
            <div className={typography.body.large}>
              <p className="mb-8">
                S radostí oznamujeme, že jsme do našich služeb nově integrovali možnost ověření věku pomocí <strong className="text-white">BankID</strong>. Tato novinka významně rozšiřuje možnosti, jak mohou zákazníci vašeho e-shopu ověřit svůj věk rychle, bezpečně a bez nutnosti nahrávat jakékoliv dokumenty.
              </p>
              
              <h2 className={`${typography.heading.h3} text-white mt-16 mb-8`}>
                Co je to BankID?
              </h2>
              
              <p className="mb-8">
                BankID je digitální bankovní identita, která umožňuje lidem prokazovat totožnost online pomocí stejných bezpečnostních prvků, které používají při přihlašování do internetového bankovnictví. V České republice je tato služba poskytována společností Bankovní identita, a.s., kterou společně založilo pět bank.
              </p>
              
              <p className="mb-8">
                Pro koncové uživatele je BankID jednoduchý způsob, jak se prokázat online. Nepotřebují si pamatovat další hesla nebo vytvářet nové účty - stačí jim přihlašovací údaje do internetového bankovnictví, které běžně používají.
              </p>
              
              <h2 className={`${typography.heading.h3} text-white mt-16 mb-8`}>
                Jaké výhody přináší integrace s BankID?
              </h2>
              
              <ul className="list-disc pl-6 space-y-4 mb-8">
                <li>
                  <strong className="text-white">Rychlost ověření</strong> - zákazník může být ověřen během několika vteřin
                </li>
                <li>
                  <strong className="text-white">Vysoká bezpečnost</strong> - identifikace probíhá stejným způsobem jako při přihlášení do internetového bankovnictví
                </li>
                <li>
                  <strong className="text-white">Uživatelský komfort</strong> - uživatelé nemusí vyplňovat žádné formuláře ani nahrávat dokumenty
                </li>
                <li>
                  <strong className="text-white">Vysoká důvěryhodnost</strong> - díky napojení na bankovní systémy je identifikace velmi spolehlivá
                </li>
                <li>
                  <strong className="text-white">Soulad s legislativou</strong> - BankID splňuje veškeré zákonné požadavky na ověření věku
                </li>
              </ul>
              
              <h2 className={`${typography.heading.h3} text-white mt-16 mb-8`}>
                Jak funguje ověření pomocí BankID?
              </h2>
              
              <p className="mb-8">
                Proces ověření je velmi jednoduchý a z pohledu zákazníka zabere jen několik kliknutí:
              </p>
              
              <ol className="list-decimal pl-6 space-y-6 mb-8">
                <li>
                  Zákazník si vybere na vašem e-shopu zboží s věkovým omezením.
                </li>
                <li>
                  Při platbě je přesměrován na stránku PassProve, kde si z nabízených metod vybere ověření pomocí BankID.
                </li>
                <li>
                  Ze seznamu bank vybere svoji banku.
                </li>
                <li>
                  Je přesměrován na přihlašovací stránku internetového bankovnictví své banky, kde se přihlásí standardním způsobem a potvrdí sdílení údajů.
                </li>
                <li>
                  Po úspěšném ověření je automaticky přesměrován zpět na váš e-shop a může dokončit objednávku.
                </li>
              </ol>
              
              <p className="mb-8">
                Celý proces trvá méně než 30 sekund a je plně automatizovaný. V rámci ověření se sdílí pouze minimální rozsah údajů - konkrétně pouze informace o tom, zda je osoba starší 18 let. Žádné jiné osobní údaje nejsou zpracovávány ani ukládány.
              </p>
              
              <h2 className={`${typography.heading.h3} text-white mt-16 mb-8`}>
                Které banky podporují BankID?
              </h2>
              
              <p className="mb-8">
                V současné době podporují BankID tyto banky:
              </p>
              
              <ul className="list-disc pl-6 space-y-4 mb-8">
                <li>Česká spořitelna</li>
                <li>ČSOB</li>
                <li>Komerční banka</li>
                <li>Moneta Money Bank</li>
                <li>Raiffeisenbank</li>
                <li>Fio banka</li>
                <li>mBank</li>
                <li>UniCredit Bank</li>
              </ul>
              
              <p className="mb-8">
                A seznam podporovaných bank se neustále rozšiřuje.
              </p>
              
              <h2 className={`${typography.heading.h3} text-white mt-16 mb-8`}>
                Jak začít používat ověření pomocí BankID?
              </h2>
              
              <p className="mb-8">
                Dobrou zprávou je, že pokud již používáte služby PassProve, není potřeba nic nastavovat. Metoda ověření pomocí BankID je automaticky k dispozici všem našim zákazníkům bez dalších poplatků nebo nastavení. Vaši zákazníci tak mohou okamžitě začít využívat tuto novou metodu ověření.
              </p>
              
              <p className="mb-8">
                Pokud ještě nejste našimi zákazníky a máte zájem o více informací, kontaktujte nás na <Link href="mailto:info@passprove.cz" className="text-[#FAC833] hover:underline">info@passprove.cz</Link> nebo si objednejte nezávaznou konzultaci.
              </p>
            </div>
          </motion.div>
          
          {/* Share buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-4xl mx-auto mb-16 flex items-center flex-wrap gap-4"
          >
            <span className="text-white/60">Sdílet článek:</span>
            <Button variant="outline" className="rounded-full h-12 w-12 p-0 border-white/10 hover:bg-white/5">
              <Share2 className="h-5 w-5" />
            </Button>
          </motion.div>
          
          {/* Related Articles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <h3 className={`${typography.heading.h3} text-white mb-10`}>
              Související články
            </h3>
            <div className="grid md:grid-cols-2 gap-10">
              <Card className="group border border-white/10 bg-white/5 backdrop-blur-sm shadow-lg overflow-hidden hover:bg-white/10 transition-all duration-300">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src="/images/blog/implementace.jpg"
                    alt="Jak implementovat PassProve do Shoptetu"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#154350]/80 to-transparent"></div>
                </div>
                <div className="p-8 space-y-4">
                  <Badge className="bg-[#FAC833]/20 hover:bg-[#FAC833]/30 text-[#FAC833] font-medium py-1.5 px-3">
                    Návody
                  </Badge>
                  <h4 className="text-xl font-bold">Jak implementovat PassProve do Shoptetu</h4>
                  <Button 
                    asChild 
                    variant="outline" 
                    className="w-full border-white/10 text-white hover:bg-white/5 rounded-full h-12"
                  >
                    <Link href="/blog/jak-implementovat-passprove-do-shoptetu">
                      Přečíst článek
                    </Link>
                  </Button>
                </div>
              </Card>

              <Card className="group border border-white/10 bg-white/5 backdrop-blur-sm shadow-lg overflow-hidden hover:bg-white/10 transition-all duration-300">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src="/images/blog/iso.jpg"
                    alt="Získali jsme ISO 27001 certifikaci"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#154350]/80 to-transparent"></div>
                </div>
                <div className="p-8 space-y-4">
                  <Badge className="bg-[#FAC833]/20 hover:bg-[#FAC833]/30 text-[#FAC833] font-medium py-1.5 px-3">
                    Bezpečnost
                  </Badge>
                  <h4 className="text-xl font-bold">Získali jsme ISO 27001 certifikaci</h4>
                  <Button 
                    asChild 
                    variant="outline" 
                    className="w-full border-white/10 text-white hover:bg-white/5 rounded-full h-12"
                  >
                    <Link href="/blog/ziskali-jsme-iso-27001-certifikaci">
                      Přečíst článek
                    </Link>
                  </Button>
                </div>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default BankIDClanekPage 