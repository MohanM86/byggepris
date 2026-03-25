import { Metadata } from "next";
import Link from "next/link";
import { FadeInUp } from "@/components/ui/animations";
import { IconCalculator } from "@/components/icons";

export const metadata: Metadata = {
  title: "Skjulte kostnader ved oppussing – Hva mange glemmer",
  description: "De vanligste skjulte kostnadene ved oppussing og bygging i Norge. Unngå budsjettsprekk med denne guiden.",
  alternates: { canonical: "https://byggepris.no/skjulte-kostnader-ved-oppussing" },
};

export default function Page() {
  return (
    <main className="pt-20">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <FadeInUp>
          <nav className="text-sm text-text-muted mb-6">
            <Link href="/" className="hover:text-accent-yellow">Hjem</Link> / <span className="text-text-secondary">Skjulte kostnader ved oppussing</span>
          </nav>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-text-primary mb-6">Skjulte kostnader ved oppussing</h1>
          <p className="text-lg text-text-secondary mb-6">Mange opplever at byggeprosjekter blir dyrere enn planlagt. Årsaken er ofte at viktige kostnadsposter glemmes i budsjettet. Her er de vanligste skjulte kostnadene du bør kjenne til.</p><div className="space-y-4 my-6">{[{t:"Prosjektering og arkitekt (5-10%)",d:"Tegninger, beregninger og byggesøknad er nødvendig for de fleste prosjekter."},{t:"Byggesøknad og gebyr (1-3%)",d:"Offentlige gebyrer for byggesøknad, oppmåling og tilsyn."},{t:"Grunnarbeid (5-15%)",d:"Graving, fundamentering, drenering og tilpasning til eksisterende konstruksjon."},{t:"Uforutsette overraskelser (10-15%)",d:"Råteskader, asbest, dårlig isolasjon og andre skjulte problemer."},{t:"Tilkobling vann og avløp (2-5%)",d:"Nye tilkoblinger eller oppgradering av eksisterende røropplegg."},{t:"Midlertidig bolig",d:"Hvis du må flytte ut under oppussing, kan leiekostnader bli betydelige."},{t:"Interiør og møbler",d:"Nye overflater og rom kan kreve nye møbler og innredning."},{t:"Utendørs etterarbeid",d:"Graving og byggearbeid kan skade hage, terrasse og innkjørsel."}].map(({t,d})=>(<div key={t} className="bg-bg-card border border-surface-border rounded-xl p-5"><h3 className="font-display font-bold text-text-primary mb-1">{t}</h3><p className="text-sm text-text-secondary">{d}</p></div>))}</div>
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
