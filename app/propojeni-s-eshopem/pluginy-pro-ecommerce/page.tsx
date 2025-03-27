import { Navbar } from "@/components/navbar"
import { PageHeader } from "@/components/page-header"
import { Footer } from "@/components/footer"

export default function EcommercePluginsPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <PageHeader 
          title="Pluginy pro e-commerce"
          description="Připravená řešení pro populární e-shopové platformy"
        />
        {/* Page specific content will go here */}
      </main>
      <Footer />
    </div>
  )
}

