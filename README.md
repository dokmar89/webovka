# PassProve — produktový web

Prezentační a dokumentační web představující koncept PassProve a možnosti integrace do e-shopů.

**Stav:** Doprovodný web / starší prezentační vrstva; tvrzení na existujících stránkách vyžadují samostatné ověření.

## Co projekt obsahuje

- Stránky produktu, ceníku a informací o projektu.
- Popis integrací a API.
- Blog a sdílené prezentační sekce.

## Technologie

Next.js, React, TypeScript, Tailwind CSS.

## Architektura a struktura

- `app/` — obsahové stránky
- `components/` — sekce webu a sdílené rozhraní
- `lib/` — pomocné funkce vzhledu a motivů

## Lokální vývoj

Potřebujete Node.js a npm. V kořenové složce repozitáře spusťte:

```sh
npm install
npm run dev
```

Příkaz pro sestavení uvedený v projektu: `npm run build`.

Jde o příkazy deklarované v repozitáři, nikoli o potvrzení úspěšného sestavení. Instalace závislostí, sestavení ani napojení na živé služby nebyly při úpravě dokumentace spuštěny.

## Konfigurace a omezení

Jde o prezentační web. Popisy poskytovatelů, certifikací nebo integrací nedokládají funkčnost příslušných serverových služeb. `npm run build` před sestavením Next.js spouští `npm install`. Při další údržbě zkontrolujte duplicitní soubory a konfiguraci.

## Co doplnit do dokumentace

Snímky obrazovky s fiktivními daty, opakovatelný postup ověření a přehled skutečně otestovaných integrací. Přihlašovací údaje a konfigurace konkrétního nasazení patří mimo Git.
