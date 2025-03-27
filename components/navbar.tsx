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
import { themes } from "@/lib/themes"

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
  const [theme, setTheme] = React.useState("dark")
  const currentTheme = themes[theme as keyof typeof themes]

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    document.documentElement.classList.toggle('dark')
  }

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-50 mt-5">
      <div className="max-w-7xl mx-auto px-4">
        <div className={cn(
          "navbar-gradient flex h-16 items-center rounded-xl px-4 backdrop-blur-xl transition-colors duration-200",
          currentTheme.navbar.background,
          currentTheme.navbar.hover,
          currentTheme.navbar.blur
        )}>
          <Link href="/" className="flex-none">
            <Image
              src={theme === 'light' ? "../files/Logo_PassProve_barvy.svg" : "../files/Logo_PassProve_bila.svg"}
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
                      "bg-transparent hover:bg-transparent",
                      currentTheme.navbar.text
                    )}>
                      O PassProve
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                {menuItems.map((item, index) => (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuTrigger className={cn(
                      "bg-transparent data-[state=open]:bg-transparent hover:bg-transparent",
                      currentTheme.navbar.text
                    )}>
                      {item.trigger}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className={cn(
                        "grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]",
                        theme === 'light' ? 'bg-white' : 'bg-[#014653]'
                      )}>
                        {item.content.map((subItem, subIndex) => (
                          <ListItem
                            key={subIndex}
                            title={subItem.title}
                            href={subItem.href}
                            className={currentTheme.navbar.text}
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
                      "bg-transparent hover:bg-transparent",
                      currentTheme.navbar.text
                    )}>
                      Ceník
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <button
                    onClick={toggleTheme}
                    className={cn(
                      "inline-flex items-center justify-center rounded-md h-8 w-8 bg-transparent hover:bg-transparent",
                      currentTheme.navbar.text
                    )}
                  >
                    {theme === 'light' ? (
                      <Moon className="h-4 w-4" />
                    ) : (
                      <Sun className="h-4 w-4" />
                    )}
                  </button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex-none flex items-center space-x-6">
            <Link href="/prihlaseni" 
              className={cn(
                "inline-flex items-center justify-center rounded-md px-4 py-2",
                "bg-transparent hover:bg-white/5 transition-all duration-300",
                "cursor-pointer",
                currentTheme.navbar.text
              )}
            >
              Přihlásit se
            </Link>
            <Link href="/registrace"
              className={cn(
                "inline-flex items-center justify-center rounded-md px-4 py-2",
                "transition-all duration-300",
                "cursor-pointer",
                currentTheme.navbar.text,
                theme === 'light' 
                  ? 'bg-[#014653]/5 hover:bg-[#014653]/10' 
                  : 'bg-white/5 hover:bg-white/10'
              )}
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
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
