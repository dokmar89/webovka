import React from 'react'
import { Code2, PlugIcon as Plugin, Layout } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { typography, spacing } from '@/lib/design-system'

const integrationTypes = [
  {
    icon: Code2,
    title: "Přímé napojení přes API",
    description: "Application Programming Interface",
    content: {
      what: `API je jako hlavní vrátnice do našeho systému. Představte si ho jako sadu dveří, přes které může váš web nebo aplikace komunikovat s naším řešením. Vy řeknete: "Pošli SMS s kódem na toto číslo" a naše API to pro vás udělá. Je to zkrátka nejflexibilnější způsob - vývojáři mohou plně ovládat vzhled, funkce a průběh ověřování. Vyžaduje to však určitou technickou zdatnost a čas, protože je potřeba naprogramovat veškerou logiku.`,
      forWho: [
        "Pro ty, kteří mají vlastní vývojářský tým a chtějí mít vše pod kontrolou.",
        "Pokud chcete plnou volnost v tom, jak bude ověřovací proces vypadat a fungovat.",
      ],
      advantages: [
        "Naprostá kontrola nad vzhledem i průběhem ověření.",
        "Možnost propojit ověřování s dalšími službami nebo procesy ve vašem systému.",
      ],
      disadvantages: [
        "Vyžaduje zkušenější vývojáře, kteří API propojování nastaví.",
        "Trvá to déle, než když využijete již hotový nástroj.",
      ],
      technical: [
        "API poskytuje koncové body (endpointy), které lze volat z klientské strany (Javascript ve front-endu) nebo ze serveru (PHP, Node.js, Python…)",
        "Implementace vyžaduje odesílání a zpracování HTTP požadavků (GET, POST, apod.), autentizaci pomocí tokenů či klíčů a ošetření chybových stavů.",
        "Typicky se využívá, pokud chcete ověřovací proces pevně začlenit do existujícího systému (např. registrace uživatelů, objednávkový proces) a potřebujete detailní kontrolu nad tím, jak a kdy k ověření dochází.",
      ],
    },
  },
  {
    icon: Plugin,
    title: "Plugin do známých platforem",
    description: "Předpřipravené řešení pro populární e-commerce platformy",
    content: {
      what: `Plugin je doplněk, který si jednoduše nainstalujete třeba do svého internetového obchodu (např. na WordPressu, Shoptetu, Shopify a jiných) a on za vás vyřeší všechno potřebné. Nemusíte programovat – stačí plugin povolit a nastavit pár základních věcí.`,
      forWho: [
        "Pro uživatele, kteří používají zavedené e-commerce platformy (jako je výše zmíněný WordPress, Shoptet atd.).",
        "Pro ty, kteří nechtějí příliš řešit technické detaily a mají rádi hotové a snadno zapojitelné řešení.",
      ],
      advantages: [
        "Rychlá a snadná instalace.",
        "Minimální technická náročnost.",
      ],
      disadvantages: [
        "Menší možnost přizpůsobit si ověřovací proces přesně podle sebe.",
        "Pluginy jsou závislé na konkrétní platformě, takže když změníte systém, musíte řešení hledat znovu.",
      ],
      technical: [
        "Pluginy jsou určeny pro konkrétní platformy, například e-shopové nebo publikační systémy, kde se instalují jako rozšíření.",
        "Interně využívají naše API, ale jejich instalace a konfigurace je výrazně snazší – stačí vyplnit API klíč, povolit plugin a nastavit základní parametry.",
        "Omezením může být menší flexibilita, protože se přizpůsobujete hotovému řešení pluginu. Nicméně dostanete rychlé a fungující řešení bez nutnosti psát kód od nuly.",
      ],
    },
  },
  {
    icon: Layout,
    title: "Widget - hotové řešení",
    description: "Jednoduchá implementace pomocí připraveného kódu",
    content: {
      what: `Widget je něco jako kousek již hotového kódu, který vložíte na svou webovou stránku. Je to podobné, jako když do stránky vložíte třeba mapu z Google Maps. Nemusíte psát žádný kód sami, stačí widget jednoduše nasadit - a ověřování již běží.`,
      forWho: [
        "Pro ty, kteří chtějí ověřování rychle spustit bez složitého programování.",
        "Pro projekty, kde stačí využít připravený vzhled a funkce ověřovacího nástroje.",
      ],
      advantages: [
        "Nejrychlejší a nejjednodušší cesta, jak začít.",
        "Stačí přidat jednoduchý kousek kódu a vše funguje.",
      ],
      disadvantages: [
        "Omezené možnosti přizpůsobení vzhledu a průběhu ověření.",
        "Jste více závislí na tom, jak widget vylepšuje či aktualizuje jeho tvůrce.",
      ],
      technical: [
        "Widget je připravený skript (většinou JavaScript), který vložíte přímo do své stránky.",
        "O vše, včetně komunikace s API, se postará interně. Vy tak nemusíte psát žádnou logiku – stačí widget umístit tam, kde chcete ověřování provádět.",
        "Technicky vzato běží widget ve vašem prohlížeči, přesněji na straně klienta, a volá interní API poskytovatele. Pro vás je to v podstatě black-box řešení s jednoduchým nasazením.",
        "Nevýhodou je menší možnost přizpůsobení vzhledu nebo logiky, kterou widget zajišťuje.",
        "Hodí se tam, kde je prioritou rychlé nasazení a minimální úsilí.",
      ],
    },
  },
] as const

export function IntegrationOptions() {
  return (
    <section className={`relative ${spacing.section.lg}`}>
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-1/4 right-1/4 w-96 h-96 bg-[#8FBEC3] opacity-[0.02] rounded-full blur-3xl animate-float`} />
        <div className={`absolute bottom-1/4 left-1/4 w-72 h-72 bg-[#154350] opacity-[0.02] rounded-full blur-3xl animate-float`} style={{ animationDelay: '-2s' }} />
      </div>

      <div className={`${spacing.container.lg} mx-auto px-4 relative`}>
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-sm text-[#8FBEC3] mb-6">
            <Code2 className="w-4 h-4 mr-2" />
            <span>Flexibilní integrace</span>
          </div>
          <h2 className={`${typography.heading.h2} text-white mb-6`}>
            Propojení s e-shopem
          </h2>
          <p className={`${typography.body.large} text-white/60 max-w-3xl mx-auto`}>
            Integrace řešení, které má za cíl umožnit verifikaci věku koncových zákazníků, 
            umožnit dvoufaktorovou nebo multifaktorovou autentizaci, případně jiný typ 
            bezpečnostní kontroly, lze zvolit jednu z několika integračních cest.
          </p>
        </div>

        <div className="grid gap-8">
          {integrationTypes.map((type, index) => (
            <Card key={index} className="glass-card">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#FAC833]/10 flex items-center justify-center">
                    <type.icon className="w-6 h-6 text-[#FAC833]" />
                  </div>
                  <div>
                    <CardTitle className={`${typography.heading.h4} text-white`}>{type.title}</CardTitle>
                    <CardDescription className="text-white/60">
                      {type.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible>
                  <AccordionItem value="what" className="border-white/10">
                    <AccordionTrigger className="text-white hover:text-[#8FBEC3] transition-colors">
                      Co to znamená?
                    </AccordionTrigger>
                    <AccordionContent className="text-white/60">
                      {type.content.what}
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="forWho" className="border-white/10">
                    <AccordionTrigger className="text-white hover:text-[#8FBEC3] transition-colors">
                      Pro koho se to hodí?
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc list-inside text-white/60 space-y-2">
                        {type.content.forWho.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="advantages" className="border-white/10">
                    <AccordionTrigger className="text-white hover:text-[#8FBEC3] transition-colors">
                      Výhody
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc list-inside text-white/60 space-y-2">
                        {type.content.advantages.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="disadvantages" className="border-white/10">
                    <AccordionTrigger className="text-white hover:text-[#8FBEC3] transition-colors">
                      Nevýhody
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc list-inside text-white/60 space-y-2">
                        {type.content.disadvantages.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="technical" className="border-white/10">
                    <AccordionTrigger className="text-white hover:text-[#8FBEC3] transition-colors">
                      Pro zkušenější
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc list-inside text-white/60 space-y-2">
                        {type.content.technical.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-xl glass-card">
          <h2 className={`${typography.heading.h4} text-white mb-6`}>Shrnutí</h2>
          <ul className="space-y-4 text-white/60">
            <li>
              <strong className="text-[#FAC833]">API:</strong> Pro technické experty a ty, 
              co chtějí detailní kontrolu a maximální možnosti úprav.
            </li>
            <li>
              <strong className="text-[#FAC833]">Plugin:</strong> Pro méně technické uživatele, 
              kteří pracují na známých platformách a chtějí rychlé řešení bez větší námahy.
            </li>
            <li>
              <strong className="text-[#FAC833]">Widget:</strong> Pro všechny, kteří chtějí 
              okamžitě nasadit jednoduchý a funkční nástroj bez zdlouhavého programování.
            </li>
          </ul>
          <p className="mt-6 text-white/60">
            Vyberte si tu cestu, která nejlépe odpovídá tomu, jak moc chcete ověřovací 
            proces přizpůsobit a jak rychle ho chcete spustit.
          </p>
        </div>
      </div>
    </section>
  )
}

