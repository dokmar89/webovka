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
import { Menu, X, ChevronDown, Sun, Moon } from "lucide-react"
import { ThemeSwitch } from "@/components/theme-switch"

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const [openSubMenu, setOpenSubMenu] = React.useState<number | null>(null)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const toggleSubMenu = (index: number) => {
    setOpenSubMenu(openSubMenu === index ? null : index)
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 mt-5 sm:mt-5 mt-3">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className={cn(
          "flex h-16 items-center rounded-xl px-4 sm:px-6 backdrop-blur-md transition-all duration-200",
          "bg-[#daebed] shadow-sm dark:bg-[#064052]/60",
          "border border-[#b1d5d9]/70 dark:border-[#97AAAF]/20",
          isScrolled ? "shadow-lg shadow-[#b1d5d9]/20 dark:shadow-[#97AAAF]/5" : ""
        )}>
          <Link href="/" className="flex-none">
            <Image
              src="/files/Logo_PassProve_bila.svg"
              alt="PassProve Logo"
              width={120}
              height={40}
              className="h-7 sm:h-8 w-auto dark:block hidden"
            />
            <Image
              src="/files/Logo_PassProve_cerna.svg"
              alt="PassProve Logo"
              width={120}
              height={40}
              className="h-7 sm:h-8 w-auto dark:hidden block"
            />
          </Link>
          
          <div className="flex-1 flex justify-center ml-4 sm:ml-8 md:ml-14">
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList className="space-x-6">
                <NavigationMenuItem>
                  <Link href="/o-passprove" legacyBehavior passHref>
                    <NavigationMenuLink className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent hover:bg-gradient-to-r hover:from-white/30 hover:to-white/10 dark:hover:bg-gradient-to-r dark:hover:from-[#97AAAF]/10 dark:hover:to-transparent",
                      "text-[#064052] hover:text-[#064052] dark:text-white dark:hover:text-white",
                      "transition-all duration-300"
                    )}>
                      O PassProve
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                {menuItems.map((item, index) => (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuTrigger className={cn(
                      "bg-transparent hover:bg-gradient-to-r hover:from-white/40 hover:to-white/10 dark:hover:bg-gradient-to-r dark:hover:from-[#97AAAF]/10 dark:hover:to-transparent",
                      "data-[state=open]:bg-gradient-to-r data-[state=open]:from-white/60 data-[state=open]:to-white/20 dark:data-[state=open]:bg-gradient-to-r dark:data-[state=open]:from-[#97AAAF]/20 dark:data-[state=open]:to-transparent",
                      "text-[#064052] hover:text-[#064052] dark:text-white dark:hover:text-white",
                      "transition-all duration-300"
                    )}>
                      {item.trigger}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className={cn(
                        "grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]",
                        "bg-white/95 shadow-lg border dark:bg-[#064052]/90 rounded-xl",
                        "border-[#b1d5d9]/60 dark:border-[#97AAAF]/20 backdrop-blur-md"
                      )}>
                        {item.content.map((subItem, subIndex) => (
                          <ListItem
                            key={subIndex}
                            title={subItem.title}
                            href={subItem.href}
                            className={cn(
                              "text-[#064052] hover:text-[#064052] hover:bg-gradient-to-r hover:from-white/40 hover:to-white/10",
                              "dark:text-white dark:hover:text-white dark:hover:bg-gradient-to-r dark:hover:from-[#97AAAF]/10 dark:hover:to-transparent",
                              "transition-all duration-300 rounded-lg"
                            )}
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
                      "bg-transparent hover:bg-gradient-to-r hover:from-white/30 hover:to-white/10 dark:hover:bg-gradient-to-r dark:hover:from-[#97AAAF]/10 dark:hover:to-transparent",
                      "text-[#064052] hover:text-[#064052] dark:text-white dark:hover:text-white",
                      "transition-all duration-300"
                    )}>
                      Ceník
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex-none flex items-center space-x-2 sm:space-x-4 md:space-x-6">
            <ThemeSwitch />
            
            <div className="hidden sm:block">
              <Link href="/prihlasit-se" 
                className="inline-flex items-center justify-center rounded-full px-4 sm:px-6 py-2 sm:py-2.5 text-sm font-medium text-[#064052] hover:text-[#064052] dark:text-white dark:hover:text-white bg-white/90 hover:bg-white dark:bg-[#97AAAF]/20 dark:hover:bg-[#97AAAF]/30 backdrop-blur-md transition-all duration-300 border border-[#b1d5d9]/60 dark:border-[#97AAAF]/20 hover:shadow-md"
              >
                Přihlásit se
              </Link>
            </div>
            
            <div className="hidden sm:block">
              <Link href="/registrace"
                className="inline-flex items-center justify-center rounded-full px-4 sm:px-6 py-2 sm:py-2.5 text-sm font-medium text-[#064052] dark:text-[#064052] bg-gradient-to-r from-[#FAC833] to-[#FAD862] hover:from-[#FAD862] hover:to-[#FAE891] shadow-sm hover:shadow-md transition-all duration-300 border border-[#FAC833]/20 hover:scale-[1.02]"
              >
                Registrace
              </Link>
            </div>
            
            <button 
              onClick={toggleMobileMenu}
              className="md:hidden flex items-center justify-center p-2 rounded-md text-[#064052] dark:text-white hover:bg-gradient-to-r hover:from-white/30 hover:to-white/10 dark:hover:bg-gradient-to-r dark:hover:from-[#97AAAF]/10 dark:hover:to-transparent transition-all duration-300"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-2 py-3 px-4 rounded-xl bg-white/95 dark:bg-[#064052]/90 shadow-lg border border-[#b1d5d9]/60 dark:border-[#97AAAF]/20 backdrop-blur-md">
            <nav className="flex flex-col space-y-3">
              <Link 
                href="/o-passprove"
                className="px-3 py-2.5 rounded-lg text-[#064052] dark:text-white hover:bg-gradient-to-r hover:from-white/40 hover:to-white/10 dark:hover:bg-gradient-to-r dark:hover:from-[#97AAAF]/10 dark:hover:to-transparent font-medium transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                O PassProve
              </Link>
              
              {menuItems.map((item, index) => (
                <div key={index} className="flex flex-col">
                  <button
                    onClick={() => toggleSubMenu(index)}
                    className="flex items-center justify-between px-3 py-2.5 rounded-lg text-[#064052] dark:text-white hover:bg-gradient-to-r hover:from-white/40 hover:to-white/10 dark:hover:bg-gradient-to-r dark:hover:from-[#97AAAF]/10 dark:hover:to-transparent font-medium transition-all duration-300"
                  >
                    <span>{item.trigger}</span>
                    <ChevronDown className={cn(
                      "h-4 w-4 transition-transform duration-200",
                      openSubMenu === index && "rotate-180"
                    )} />
                  </button>
                  
                  {openSubMenu === index && (
                    <div className="pl-4 mt-1 space-y-1 border-l-2 border-[#b1d5d9]/50 dark:border-[#97AAAF]/30 ml-4">
                      {item.content.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.href}
                          className="block px-3 py-2 text-sm text-[#064052]/90 dark:text-white/90 hover:text-[#064052] dark:hover:text-white rounded-md hover:bg-gradient-to-r hover:from-white/40 hover:to-white/10 dark:hover:bg-gradient-to-r dark:hover:from-[#97AAAF]/10 dark:hover:to-transparent transition-all duration-300"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <Link 
                href="/cenik"
                className="px-3 py-2.5 rounded-lg text-[#064052] dark:text-white hover:bg-gradient-to-r hover:from-white/40 hover:to-white/10 dark:hover:bg-gradient-to-r dark:hover:from-[#97AAAF]/10 dark:hover:to-transparent font-medium transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Ceník
              </Link>
              
              <div className="flex flex-col space-y-2 mt-2 pt-2 border-t border-[#b1d5d9]/50 dark:border-[#97AAAF]/30">
                <Link 
                  href="/prihlasit-se"
                  className="px-3 py-2.5 rounded-lg text-[#064052] dark:text-white hover:bg-gradient-to-r hover:from-white/40 hover:to-white/10 dark:hover:bg-gradient-to-r dark:hover:from-[#97AAAF]/10 dark:hover:to-transparent font-medium sm:hidden transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Přihlásit se
                </Link>
                
                <Link 
                  href="/registrace"
                  className="px-3 py-2.5 rounded-lg bg-gradient-to-r from-[#FAC833] to-[#FAD862] text-[#064052] font-medium sm:hidden border border-[#FAC833]/20 hover:from-[#FAD862] hover:to-[#FAE891] hover:shadow-md transition-all duration-300 hover:scale-[1.02]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Registrace
                </Link>
              </div>
            </nav>
          </div>
        )}
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
          <p className="line-clamp-2 text-sm leading-snug text-[#064052]/80 dark:text-white/80">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
