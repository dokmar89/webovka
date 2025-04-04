import "./globals.css"
import { Inter } from "next/font/google"

export const metadata = {
  title: "PassProve - Ověření věku pro e-shopy",
  description: "Jednoduché a spolehlivé ověření věku pro váš e-shop. Prodávejte alkohol, tabák a další věkově omezené zboží v souladu se zákonem.",
}

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-inter",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs" suppressHydrationWarning className={inter.variable}>
      <body>
        <div className="background-animation" />
        {children}
      </body>
    </html>
  )
}