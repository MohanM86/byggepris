import { Metadata } from "next";
import Link from "next/link";
import { FadeInUp } from "@/components/ui/animations";
import { IconCalculator } from "@/components/icons";

export const metadata: Metadata = {
  title: "Hva påvirker byggekostnad? De viktigste faktorene",
  description: "Forstå de viktigste faktorene som påvirker byggekostnad i Norge. Standard, beliggenhet, kompleksitet og mer.",
  alternates: { canonical: "https://byggepris.no/hva-pavirker-byggekostnad" },
};

export default function Page() {
  return (
    <main className="pt-20">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <FadeInUp>
          <nav className="text-sm text-text-muted mb-6">
            <Link href="/" className="hover:text-accent-yellow">Hjem</Link> / <span className="text-text-secondary">Hva påvirker byggekostnad?</span>
          </nav>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-text-primary mb-6">Hva påvirker byggekostnad?</h1>
          <p className="text-lg text-text-secondary mb-6">Byggekostnader påvirkes av mange faktorer. De viktigste er standard og materialvalg, beliggenhet, prosjektets kompleksitet, grunnforhold og markedsforhold. Å forstå disse faktorene hjelper deg å planlegge et realistisk budsjett.</p><h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">De viktigste kostnadsdriverne</h2><div className="space-y-4 my-6">{[{t:"Standard og materialvalg",d:"Den viktigste enkeltfaktoren. Forskjellen mellom enkel og høy standard kan være 50-100% i prisøkning."},{t:"Beliggenhet",d:"Oslo er 10-15% dyrere enn landsgjennomsnittet. Stavanger og Tromsø er også over snittet."},{t:"Kompleksitet",d:"Enkle former er billigere. Mange hjørner, spesielle takløsninger og uvanlige materialer øker prisen."},{t:"Grunnforhold",d:"Dårlige grunnforhold kan kreve ekstra fundamentering som øker kostnaden betydelig."},{t:"Markedsforhold",d:"Høy etterspørsel etter håndverkere driver prisene opp. Timing kan spare penger."},{t:"Prosjektets omfang",d:"Større prosjekter har ofte lavere m²-pris, men høyere totalkostnad."}].map(({t,d})=>(<div key={t} className="bg-bg-card border border-surface-border rounded-xl p-5"><h3 className="font-display font-bold text-text-primary mb-1">{t}</h3><p className="text-sm text-text-secondary">{d}</p></div>))}</div>
          <div className="mt-10">
            <Link href="/kalkulator" className="inline-flex items-center gap-2 px-5 py-3 bg-accent-yellow text-bg-primary font-display font-bold rounded-xl hover:bg-accent-warm transition-colors shadow-glow-sm">
              <IconCalculator size={18} /> Beregn ditt prosjekt
            </Link>
          </div>
        </FadeInUp>
      </article>
    </main>
  );
}
