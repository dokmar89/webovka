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
      <div className="container px-12 mx-auto max-w-7xl">
        <main>
          <Hero />
          <ServiceDescription />
          <Platforms />
          <Blog />
        </main>
      </div>
      <Footer />
    </div>
  )
}
