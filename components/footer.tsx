import Link from "next/link"
import { Separator } from "@/components/ui/separator"

const footerLinks = {
  "Služby": [
    { name: "Jak to funguje", href: "/funkce/jak-to-funguje" },
    { name: "Ceník", href: "/cenik" },
    { name: "Bezpečnost", href: "/bezpecnost" },
    { name: "Pro vývojáře", href: "/vyvojari" },
    { name: "Případové studie", href: "/reference" },
  ],
  "Podpora": [
    { name: "Dokumentace", href: "/dokumentace" },
    { name: "Časté dotazy", href: "/faq" },
    { name: "Technická podpora", href: "/podpora" },
    { name: "Kontakt", href: "/kontakt" },
    { name: "Status služeb", href: "/status" },
  ],
  "Společnost": [
    { name: "O PassProve", href: "/o-passprove" },
    { name: "Blog", href: "/blog" },
    { name: "Kariéra", href: "/kariera" },
    { name: "Pro média", href: "/pro-media" },
    { name: "Kontaktní údaje", href: "/kontakt" },
  ],
  "Právní": [
    { name: "Obchodní podmínky", href: "/podminky" },
    { name: "Ochrana osobních údajů", href: "/gdpr" },
    { name: "Zpracování dat", href: "/zpracovani-dat" },
    { name: "Cookies", href: "/cookies" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#154350]">
      <div className="container px-6 py-16 space-y-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h3 className="font-medium text-lg text-white/90">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-[#FAC833] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="bg-white/10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-white/90 hover:text-[#FAC833] transition-colors">
              <img src="/files/Logo_PassProve_bila.svg" alt="PassProve" className="h-8" />
            </Link>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link
              href="https://www.linkedin.com/company/passprove"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-[#FAC833] transition-colors"
            >
              LinkedIn
            </Link>
            <Link
              href="https://twitter.com/passprove"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-[#FAC833] transition-colors"
            >
              Twitter
            </Link>
            <Link
              href="https://github.com/passprove"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-[#FAC833] transition-colors"
            >
              GitHub
            </Link>
          </div>
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} PassProve. Všechna práva vyhrazena.
          </p>
        </div>
      </div>
    </footer>
  )
}
