import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from 'next/link'

const VyzkousejteZdarmaPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#164550] to-[#1A3E4D] text-white py-12">
      <Navbar />
      <div className="container mx-auto space-y-10 pt-16">  {/* Added padding to push content below navbar */}
        <header className="text-center">
          <h1 className="text-5xl font-bold text-[#FFD700] mb-4">Vyzkoušejte zdarma</h1>
        </header>
        <section className="bg-[#1A3E4D] p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 border-l-4 border-[#FFD700]">
          <p className="text-lg mb-4"><strong>PassProve funguje na důvěře, proto vždy platíte za jednotlivá ověření věku. Každý nově registrovaný uživatel získá zdarma kredit v hodnotě 200 Kč.</strong></p>
          <p className="text-lg mb-4"><strong>Každý uživatel si může zvolit zda bude využívat PassProve bez závazků, nebo uzavře smlouvu a bude využívat výhodnější ceny služeb. Více informací v ceníku zde.</strong> <Link href="/cenik" className="text-[#FFD700] underline">Ceník</Link></p>
          <div className="flex justify-center">
            <Link href="/demo" className="bg-[#FFD700] text-black rounded px-6 py-2 hover:bg-[#FFC300] transition duration-300">Demo</Link>
          </div>
        </section>
        <section className="bg-[#1A3E4D] p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 border-l-4 border-[#FFD700]">
          <h2 className="text-4xl font-semibold text-[#FFD700] mb-4">Demo iframe</h2>
          {/* Add demo iframe here */}
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default VyzkousejteZdarmaPage;
