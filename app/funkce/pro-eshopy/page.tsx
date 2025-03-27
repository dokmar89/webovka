import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from 'next/link'

const ProEshopyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#164550] to-[#1A3E4D] text-white py-12">
      <Navbar />
      <div className="container mx-auto space-y-10 pt-16">  
        <header className="text-center">
          <h1 className="text-5xl font-bold text-[#FFD700] mb-4">Pro e-shopy</h1>
        </header>
        <section className="bg-[#1A3E4D] p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 border-l-4 border-[#FFD700]">
          <h2 className="text-4xl font-semibold text-[#FFD700] mb-4">Jak to funguje?</h2>
          <ul className="list-disc pl-5 mb-4">
            <li>✅ Napojení PassProve je snadné. Veškeré informace k implementaci pro jednotlivé platformy poskytujeme veřejně.</li>
            <li>✅ PassProve chrání váš e-shop i vaše zákazníky.</li>
            <li>✅ <Link href="/demo" className="text-[#FFD700] underline">Otestujte/Vyzkoušejte zdarma ověření věku zde.</Link></li>
          </ul>
        </section>
        <section className="bg-[#1A3E4D] p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 border-l-4 border-[#FFD700]">
          <h2 className="text-4xl font-semibold text-[#FFD700] mb-4">Vyberte platformu pro napojení PassProve</h2>
          <ul className="list-disc pl-5 mb-4">
            <li><Link href="/shoptet">Shoptet</Link></li>
            <li><Link href="/woocommerce">WooCommerce</Link></li>
            <li><Link href="/upgates">Upgates</Link></li>
            <li><Link href="/fastcentrik">FastCentrik</Link></li>
            <li><Link href="/eshop-rychle">e-shop-rychle</Link></li>
            <li><Link href="/prestashop">Prestashop</Link></li>
            <li><Link href="/webareal">Webareal</Link></li>
            <li><Link href="http://simpleshop.cz/">Simpleshop.cz</Link></li>
            <li><Link href="http://shop5.cz/">Shop5.cz</Link></li>
            <li>Vlastní API</li>
            <li>Jiná platforma</li>
          </ul>
        </section>
        <section className="bg-[#1A3E4D] p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 border-l-4 border-[#FFD700]">
          <h2 className="text-4xl font-semibold text-[#FFD700] mb-4">Pro přepravce</h2>
          <p className="text-lg mb-4">Ověřujte věk nejen při uskutečnění nákupu. Některé produkty je nutné ověřit i při vyzvednutí zákazníka u kurýra nebo na výdejním místě...</p>
          <p className="text-lg mb-4">Kontaktujte nás pro bližší informace k napojení PassProve do vašeho přepravního systému a ceníku pro přepravní společnosti.</p>
          <div className="flex justify-center">
            <Link href="/kontakt" className="bg-[#FFD700] text-black rounded px-6 py-2 hover:bg-[#FFC300] transition duration-300">Kontaktujte nás</Link>
          </div>
        </section>
        <section className="bg-[#1A3E4D] p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 border-l-4 border-[#FFD700]">
          <h2 className="text-4xl font-semibold text-[#FFD700] mb-4">Vyzkoušejte zdarma</h2>
          <p className="text-lg mb-4">PassProve funguje na důvěře, proto vždy platíte za jednotlivá ověření věku. Každý nově registrovaný uživatel získá zdarma kredit v hodnotě 200 Kč.</p>
          <p className="text-lg mb-4">Každý uživatel si může zvolit, zda bude využívat PassProve bez závazků, nebo uzavře smlouvu a bude využívat výhodnější ceny služeb. Více informací v ceníku zde.</p>
          <div className="flex justify-center">
            <Link href="/cenik" className="bg-[#FFD700] text-black rounded px-6 py-2 hover:bg-[#FFC300] transition duration-300">Ceník</Link>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ProEshopyPage;
