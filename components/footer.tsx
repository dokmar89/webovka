import Link from "next/link"
import { Separator } from "@/components/ui/separator"

const footerLinks = {
  Product: [
    { name: "Download", href: "#" },
    { name: "Features", href: "#" },
    { name: "Security", href: "#" },
    { name: "Team", href: "#" },
    { name: "Enterprise", href: "#" },
    { name: "Customer stories", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Resources", href: "#" },
  ],
  Platform: [
    { name: "Developer API", href: "#" },
    { name: "Partners", href: "#" },
    { name: "Atom", href: "#" },
    { name: "Electron", href: "#" },
    { name: "PassProve Desktop", href: "#" },
  ],
  Support: [
    { name: "Docs", href: "#" },
    { name: "Community Forum", href: "#" },
    { name: "Professional Services", href: "#" },
    { name: "Skills", href: "#" },
    { name: "Status", href: "#" },
    { name: "Contact PassProve", href: "#" },
  ],
  Company: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Press", href: "#" },
    { name: "Inclusion", href: "#" },
    { name: "Social Impact", href: "#" },
    { name: "Shop", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border/10">
      <div className="container py-12 space-y-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-3">
              <h3 className="font-medium tracking-tight">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-[#00FFB2] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="bg-border/10" />

        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            {new Date().getFullYear()} PassProve Inc.
          </p>
          <div className="flex items-center space-x-4">
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-[#00FFB2] transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-muted-foreground hover:text-[#00FFB2] transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
