import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const ApiEndpointsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#164550] to-[#1A3E4D] text-white py-12">
      <Navbar />
      <div className="container mx-auto space-y-10 pt-16">  {/* Added padding to push content below navbar */}
        <header className="text-center">
          <h1 className="text-5xl font-bold text-[#FFD700] mb-4">Římé napojení přes API</h1>
        </header>
        <section className="bg-[#1A3E4D] p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 border-l-4 border-[#FFD700]">
          <h2 className="text-4xl font-semibold text-[#FFD700] mb-4">Co to znamená?</h2>
          <p className="text-lg mb-4">API je jako hlavní vrátnice do našeho systému. Představte si ho jako sadu dveří, přes které může váš web nebo aplikace komunikovat s naším řešením...</p>
        </section>
        <section className="bg-[#1A3E4D] p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 border-l-4 border-[#FFD700]">
          <h2 className="text-4xl font-semibold text-[#FFD700] mb-4">Pro koho se to hodí?</h2>
          <ul className="list-disc pl-5 mb-4">
            <li>Pro ty, kteří mají vlastní vývojářský tým a chtějí mít vše pod kontrolou.</li>
            <li>Pokud chcete plnou volnost v tom, jak bude ověřovací proces vypadat a fungovat.</li>
          </ul>
        </section>
        <section className="bg-[#1A3E4D] p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 border-l-4 border-[#FFD700]">
          <h2 className="text-4xl font-semibold text-[#FFD700] mb-4">Výhody:</h2>
          <ul className="list-disc pl-5 mb-4">
            <li>Naprostá kontrola nad vzhledem i průběhem ověření.</li>
            <li>Možnost propojit ověřování s dalšími službami nebo procesy ve vašem systému.</li>
          </ul>
        </section>
        <section className="bg-[#1A3E4D] p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 border-l-4 border-[#FFD700]">
          <h2 className="text-4xl font-semibold text-[#FFD700] mb-4">Nevýhody:</h2>
          <ul className="list-disc pl-5 mb-4">
            <li>Vyžaduje zkušenější vývojáře, kteří API propojování nastaví.</li>
            <li>Trvá to déle, než když využijete již hotový nástroj.</li>
          </ul>
        </section>
        <section className="bg-[#1A3E4D] p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 border-l-4 border-[#FFD700]">
          <h2 className="text-4xl font-semibold text-[#FFD700] mb-4">Pro zkušenější:</h2>
          <p className="text-lg mb-4">API poskytuje koncové body (endpointy), které lze volat z klientské strany (Javascript ve front-endu) nebo ze serveru (PHP, Node.js, Python…)</p>
          <p className="text-lg mb-4">Implementace vyžaduje odesílání a zpracování HTTP požadavků (GET, POST, apod.), autentizaci pomocí tokenů či klíčů a ošetření chybových stavů.</p>
          <p className="text-lg mb-4">Typicky se využívá, pokud chcete ověřovací proces pevně začlenit do existujícího systému (např. registrace uživatelů, objednávkový proces) a potřebujete detailní kontrolu nad tím, jak a kdy k ověření dochází.</p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ApiEndpointsPage;
