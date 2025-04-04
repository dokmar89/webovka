import React from 'react';
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { ServiceDescription } from "@/components/service-description"
import { Platforms } from "@/components/platforms"
import { Blog } from "@/components/blog"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#164550]">
      <Navbar />
      <div className="relative">
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

        <div className="container px-8 md:px-12 mx-auto max-w-[1440px]">
          <main>
            <Hero />
            <div>
              <ServiceDescription />
            </div>
            <div>
              <Platforms />
            </div>
            <div>
              <Blog />
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  )
} 