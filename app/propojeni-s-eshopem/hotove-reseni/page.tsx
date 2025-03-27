import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const HotoveReseniPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#164550] to-[#1A3E4D] text-white py-12">
      <Navbar />
      <div className="container mx-auto space-y-10 pt-16">  {/* Added padding to push content below navbar */}
        <header className="text-center">
          <h1 className="text-5xl font-bold text-[#FFD700] mb-4">Widget - hotové řešení</h1>
        </header>
        <section className="bg-[#1A3E4D] p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 border-l-4 border-[#FFD700]">
          <h2 className="text-4xl font-semibold text-[#FFD700] mb-4">Co to znamená?</h2>
          <p className="text-lg mb-4">Widget je něco jako kousek již hotového kódu, který vložíte na svou webovou stránku. Je to podobné, jako když do stránky vložíte třeba mapu z Google Maps. Nemusíte psát žádný kód sami, stačí widget jednoduše nasadit - a ověřování již běží.</p>
        </section>
        <section className="bg-[#1A3E4D] p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 border-l-4 border-[#FFD700]">
          <h2 className="text-4xl font-semibold text-[#FFD700] mb-4">Pro koho se to hodí?</h2>
          <ul className="list-disc pl-5 mb-4">
            <li>Pro ty, kteří chtějí ověřování rychle spustit bez složitého programování.</li>
            <li>Pro projekty, kde stačí využít připravený vzhled a funkce ověřovacího nástroje.</li>
          </ul>
        </section>
        <section className="bg-[#1A3E4D] p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 border-l-4 border-[#FFD700]">
          <h2 className="text-4xl font-semibold text-[#FFD700] mb-4">Výhody:</h2>
          <ul className="list-disc pl-5 mb-4">
            <li>Nejrychlejší a nejjednodušší cesta, jak začít.</li>
            <li>Stačí přidat jednoduchý kousek kódu a vše funguje.</li>
          </ul>
          <h2 className="text-4xl font-semibold text-[#FFD700] mb-4">Nevýhody:</h2>
          <ul className="list-disc pl-5 mb-4">
            <li>Omezené možnosti přizpůsobení vzhledu a průběhu ověření.</li>
            <li>Jste více závislí na tom, jak widget vylepšuje či aktualizuje jeho tvůrce.</li>
          </ul>
        </section>
        <section className="bg-[#1A3E4D] p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 border-l-4 border-[#FFD700]">
          <h2 className="text-4xl font-semibold text-[#FFD700] mb-4">Pro zkušenější:</h2>
          <p className="text-lg mb-4">Widget je připravený skript (většinou JavaScript), který vložíte přímo do své stránky. O vše, včetně komunikace s API, se postará interně. Vy tak nemusíte psát žádnou logiku – stačí widget umístit tam, kde chcete ověřování provádět.</p>
          <p className="text-lg mb-4">Technicky vzato běží widget ve vašem prohlížeči, přesněji na straně klienta, a volá interní API poskytovatele. Pro vás je to v podstatě black-box řešení s jednoduchým nasazením. Nevýhodou je menší možnost přizpůsobení vzhledu nebo logiky, kterou widget zajišťuje. Hodí se tam, kde je prioritou rychlé nasazení a minimální úsilí.</p>
        </section>
        <section className="bg-[#1A3E4D] p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 border-l-4 border-[#FFD700]">
          <h2 className="text-4xl font-semibold text-[#FFD700] mb-4">Shrneme si to:</h2>
          <p className="text-lg mb-4">API: Pro technické experty a ty, co chtějí detailní kontrolu a maximální možnosti úprav.</p>
          <p className="text-lg mb-4">Plugin: Pro méně technické uživatele, kteří pracují na známých platformách a chtějí rychlé řešení bez větší námahy.</p>
          <p className="text-lg mb-4">Widget: Pro všechny, kteří chtějí okamžitě nasadit jednoduchý a funkční nástroj bez zdlouhavého programování.</p>
          <p className="text-lg mb-4">Vyberte si tu cestu, která nejlépe odpovídá tomu, jak moc chcete ověřovací proces přizpůsobit a jak rychle ho chcete spustit.</p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default HotoveReseniPage;
