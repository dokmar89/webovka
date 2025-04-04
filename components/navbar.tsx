"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Sun, Moon } from "lucide-react"

const menuItems = [
  {
    trigger: "Funkce",
    content: [
      {
        title: "Jak to funguje?",
        href: "/funkce/jak-to-funguje",
        description: "Seznamte se s procesem ověření věku",
      },
      {
        title: "Způsoby ověření věku",
        href: "/funkce/zpusoby-overeni-veku",
        description: "Různé metody pro ověření věku zákazníků",
      },
      {
        title: "Pro e-shopy",
        href: "/funkce/pro-eshopy",
        description: "Řešení přizpůsobené pro e-commerce",
      },
      {
        title: "Vyzkoušejte zdarma",
        href: "/funkce/vyzkousejte-zdarma",
        description: "Začněte s PassProve bez závazků",
      },
    ],
  },
  {
    trigger: "Propojení s e-shopem",
    content: [
      {
        title: "Hotové řešení",
        href: "/propojeni-s-eshopem/hotove-reseni",
        description: "Připravené řešení pro rychlou implementaci",
      },
      {
        title: "API endpointy",
        href: "/propojeni-s-eshopem/api-endpoints",
        description: "Technická dokumentace pro vývojáře",
      },
      {
        title: "Pluginy pro e-commerce",
        href: "/propojeni-s-eshopem/pluginy-pro-ecommerce",
        description: "Rozšíření pro populární e-shop platformy",
      },
    ],
  },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-50 mt-5">
      <div className="max-w-[1440px] mx-auto px-8 md:px-12">
        <div className={cn(
          "flex h-16 items-center rounded-xl px-6 backdrop-blur-md transition-all duration-200",
          "bg-gradient-to-r from-[#164550]/90 to-[#FAC833]/10 border border-[#FAC833]/20",
          isScrolled ? "shadow-lg shadow-[#FAC833]/5" : ""
        )}>
          <Link href="/" className="flex-none">
            <Image
              src="/public2/files/Logo_PassProve_bila.svg"
              alt="PassProve Logo"
              width={140}
              height={40}
              className="h-8 w-auto"
            />
          </Link>
          
          <div className="flex-1 flex justify-center ml-14">
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList className="space-x-6">
                <NavigationMenuItem>
                  <Link href="/o-passprove" legacyBehavior passHref>
                    <NavigationMenuLink className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent hover:bg-[#FAC833]/10 text-white/90 hover:text-white"
                    )}>
                      O PassProve
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                {menuItems.map((item, index) => (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuTrigger className="bg-transparent data-[state=open]:bg-[#FAC833]/10 hover:bg-[#FAC833]/10 text-white/90 hover:text-white">
                      {item.trigger}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-gradient-to-r from-[#164550]/95 to-[#FAC833]/5 border border-[#FAC833]/20 backdrop-blur-md">
                        {item.content.map((subItem, subIndex) => (
                          <ListItem
                            key={subIndex}
                            title={subItem.title}
                            href={subItem.href}
                            className="text-white/90 hover:text-white hover:bg-[#FAC833]/10"
                          >
                            {subItem.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}

                <NavigationMenuItem>
                  <Link href="/cenik" legacyBehavior passHref>
                    <NavigationMenuLink className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent hover:bg-[#FAC833]/10 text-white/90 hover:text-white"
                    )}>
                      Ceník
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex-none flex items-center space-x-6">
            <Link href="/prihlasit-se" 
              className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium text-white/90 hover:text-white bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
            >
              Přihlásit se
            </Link>
            <Link href="/registrace"
              className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium text-[#231F20] bg-[#FAC833] hover:bg-[#FAC833]/90 transition-all duration-300"
            >
              Registrace
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-white/60">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
