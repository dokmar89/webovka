import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from 'next/link'

const HowItWorksPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#164550] to-[#1A3E4D] text-white py-12">
      <Navbar />
      <div className="container mx-auto space-y-10 pt-24">  
        <header className="text-center">
          <h1 className="text-5xl font-bold text-[#FFD700] mb-4">Jak to funguje?</h1>
          <p className="text-xl italic">Kompletní průvodce funkcemi PassProve</p>
        </header>
        <section className="bg-[#1A3E4D] p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 border-l-4 border-[#FFD700]">
          <h2 className="text-4xl font-semibold text-[#FFD700] mb-4">Krok za krokem</h2>
          <ol className="list-decimal pl-5 mb-4 text-lg">
            <li>Zaregistrujte se v PassProve.</li>
            <li>Vyplňte základní údaje, vyberte si tarif, vyčkejte na naše instrukce.</li>
            <li>Propojte PassProve s vaším e-shopem a začněte ověřovat věk zákazníků.</li>
          </ol>
          <p className="text-lg mb-4">Každý nově registrovaný uživatel získá zdarma kredit v hodnotě 200 Kč.</p>
          <div className="flex justify-center">
            <Link href="/demo" className="bg-[#FFD700] text-black rounded px-6 py-2 hover:bg-[#FFC300] transition duration-300">Demo</Link>
          </div>
        </section>
        <section className="bg-[#164550] p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 border-l-4 border-[#FFD700]">
          <h2 className="text-4xl font-semibold text-[#FFD700] mb-4">Ověřování věku zákazníků</h2>
          <p className="text-lg mb-4">PassProve pomáháme e-shopům ověřovat věk jejich zákazníků. E-shopy, které prodávají tabákové výrobky, pyrotechniku, erotické pomůcky, alkohol nebo jiné výrobky určené pro osoby nad 18 let, by měly ověřovat věk spotřebitelů za pomoci online prověřeného systému.</p>
          <div className="flex justify-center">
            <Link href="/cenik" className="bg-[#FFD700] text-black rounded px-6 py-2 hover:bg-[#FFC300] transition duration-300">Ceník</Link>
          </div>
        </section>
        <section className="bg-[#1A3E4D] p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 border-l-4 border-[#FFD700]">
          <h2 className="text-4xl font-semibold text-[#FFD700] mb-4">Flexibilita pro uživatele</h2>
          <p className="text-lg mb-4">Každý uživatel si může zvolit zda bude využívat PassProve bez závazků, nebo uzavře smlouvu a bude využívat výhodnější ceny služeb. Více informací v ceníku zde.</p>
          <div className="flex justify-center">
            <Link href="/cenik" className="bg-[#FFD700] text-black rounded px-6 py-2 hover:bg-[#FFC300] transition duration-300">Ceník</Link>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default HowItWorksPage;
