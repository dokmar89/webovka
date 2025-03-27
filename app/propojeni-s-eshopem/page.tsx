import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const PluginPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#164550] to-[#1A3E4D] text-white py-12">
      <Navbar />
      <div className="container mx-auto space-y-10 pt-16">  {/* Added padding to push content below navbar */}
        <header className="text-center">
          <h1 className="text-5xl font-bold text-[#FFD700] mb-4">Plugin do známých platforem</h1>
        </header>
        <section className="bg-[#1A3E4D] p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 border-l-4 border-[#FFD700]">
          <h2 className="text-4xl font-semibold text-[#FFD700] mb-4">Co to znamená?</h2>
          <p className="text-lg mb-4">Plugin je doplněk, který si jednoduše nainstalujete třeba do svého internetového obchodu (např. na WordPressu, Shoptetu, Shopify a jiných) a on za vás vyřeší všechno potřebné. Nemusíte programovat – stačí plugin povolit a nastavit pár základních věcí.</p>
        </section>
        <section className="bg-[#1A3E4D] p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 border-l-4 border-[#FFD700]">
          <h2 className="text-4xl font-semibold text-[#FFD700] mb-4">Pro koho se to hodí?</h2>
          <p className="text-lg mb-4">Pro uživatele, kteří používají zavedené e-commerce platformy (jako je výše zmíněný WordPress, Shoptet atd.).</p>
          <p className="text-lg mb-4">Pro ty, kteří nechtějí příliš řešit technické detaily a mají rádi hotové a snadno zapojitelné řešení.</p>
        </section>
        <section className="bg-[#1A3E4D] p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 border-l-4 border-[#FFD700]">
          <h2 className="text-4xl font-semibold text-[#FFD700] mb-4">Výhody:</h2>
          <ul className="list-disc pl-5 mb-4">
            <li>Rychlá a snadná instalace.</li>
            <li>Minimální technická náročnost.</li>
          </ul>
        </section>
        <section className="bg-[#1A3E4D] p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 border-l-4 border-[#FFD700]">
          <h2 className="text-4xl font-semibold text-[#FFD700] mb-4">Nevýhody:</h2>
          <ul className="list-disc pl-5 mb-4">
            <li>Menší možnost přizpůsobit si ověřovací proces přesně podle sebe.</li>
            <li>Pluginy jsou závislé na konkrétní platformě, takže když změníte systém, musíte řešení hledat znovu.</li>
          </ul>
        </section>
        <section className="bg-[#1A3E4D] p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 border-l-4 border-[#FFD700]">
          <h2 className="text-4xl font-semibold text-[#FFD700] mb-4">Pro zkušenější:</h2>
          <p className="text-lg mb-4">Pluginy jsou určeny pro konkrétní platformy, například e-shopové nebo publikační systémy, kde se instalují jako rozšíření.</p>
          <p className="text-lg mb-4">Interně využívají naše API, ale jejich instalace a konfigurace je výrazně snazší – stačí vyplnit API klíč, povolit plugin a nastavit základní parametry.</p>
          <p className="text-lg mb-4">Omezením může být menší flexibilita, protože se přizpůsobujete hotovému řešení pluginu. Nicméně dostanete rychlé a fungující řešení bez nutnosti psát kód od nuly.</p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default HotoveReseniPage;
