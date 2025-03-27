import "@/styles/globals.css"
import { Inter } from "next/font/google"



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
    <html lang="cs" suppressHydrationWarning>
      <body>
        <div className="background-animation" />
        {children}
      </body>
    </html>
  )
}



import './globals.css'