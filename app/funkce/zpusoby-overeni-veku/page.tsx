import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from 'next/link';

const ZpusobyOvereniVekuPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#164550] to-[#1A3E4D] text-white py-12">
      <Navbar />
      <div className="container mx-auto space-y-10 pt-24">  
        <header className="text-center">
          <h1 className="text-5xl font-bold text-[#FFD700] mb-4">Způsoby ověření věku</h1>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <section className="bg-[#1A3E4D] p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 border-l-4 border-[#FFD700]">
            <h2 className="text-4xl font-semibold text-[#FFD700] mb-4">Bankovní identita</h2>
            <p className="text-lg mb-4">Bankovní identita neboli Bank iD je digitální ověřovací nástroj, který umožňuje bezpečné a spolehlivé potvrzení totožnosti osoby prostřednictvím její banky...</p>
            <ol className="list-decimal pl-5 mb-4">
              <li>Přihlášení přes banku...</li>
              <li>Ověření věku...</li>
              <li>Zabezpečení a ochrana dat...</li>
            </ol>
            <p className="text-lg mb-4">S PassProve za 3,90 Kč za 1 ověření! <Link href="/cenik" className="text-[#FFD700] underline">Podívejte se na ceník.</Link></p>
          </section>
          <section className="bg-[#1A3E4D] p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 border-l-4 border-[#FFD700]">
            <h2 className="text-4xl font-semibold text-[#FFD700] mb-4">MojeID</h2>
            <p className="text-lg mb-4">MojeID je služba, která umožňuje uživatelům spravovat své digitální identity...</p>
            <ol className="list-decimal pl-5 mb-4">
              <li>Přihlášení přes MojeID...</li>
              <li>Ověření věku...</li>
              <li>Zabezpečení a ochrana dat...</li>
            </ol>
            <p className="text-lg mb-4">S PassProve za 2,00 Kč za 1 ověření! <Link href="/cenik" className="text-[#FFD700] underline">Podívejte se na ceník.</Link></p>
          </section>
          <section className="bg-[#1A3E4D] p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 border-l-4 border-[#FFD700]">
            <h2 className="text-4xl font-semibold text-[#FFD700] mb-4">Doklad totožnosti</h2>
            <p className="text-lg mb-4">Doklad totožnosti je úřední dokument, který potvrzuje identitu a osobní údaje jednotlivce...</p>
            <ol className="list-decimal pl-5 mb-4">
              <li>Nahrání dokladu...</li>
              <li>Kontrola údajů...</li>
              <li>Zabezpečení a ochrana dat...</li>
            </ol>
            <p className="text-lg mb-4">S PassProve za 6,90 Kč za 1 ověření! <Link href="/cenik" className="text-[#FFD700] underline">Podívejte se na ceník.</Link></p>
          </section>
          <section className="bg-[#1A3E4D] p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 border-l-4 border-[#FFD700]">
            <h2 className="text-4xl font-semibold text-[#FFD700] mb-4">Opakované ověření věku</h2>
            <p className="text-lg mb-4">Opakované ověření věku mohou využívat zákazníci e-shopu, kteří již ověřili jejich věk...</p>
            <ol className="list-decimal pl-5 mb-4">
              <li>Prvotní ověření věku...</li>
              <li>Zadání telefonního čísla...</li>
              <li>Odeslání ověřovacího kódu...</li>
              <li>Ověření kódu a věku...</li>
              <li>Dokončení nákupu...</li>
            </ol>
            <p className="text-lg mb-4">S PassProve za 1,50 Kč za 1 ověření! <Link href="/cenik" className="text-[#FFD700] underline">Podívejte se na ceník.</Link></p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ZpusobyOvereniVekuPage;
