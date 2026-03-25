import { Metadata } from "next";
import Link from "next/link";
import { FadeInUp } from "@/components/ui/animations";
import { IconCalculator } from "@/components/icons";

export const metadata: Metadata = {
  title: "Hva koster det å bygge hus i Norge?",
  description: "Komplett guide til hva det koster å bygge hus i Norge. Typisk pris 30 000-55 000 kr per m2. Se priseksempler og kalkulator.",
  alternates: { canonical: "https://byggepris.no/hva-koster-det-a-bygge-hus" },
};

export default function Page() {
  return (
    <main className="pt-20">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <FadeInUp>
          <nav className="text-sm text-text-muted mb-6">
            <Link href="/" className="hover:text-accent-yellow">Hjem</Link> / <span className="text-text-secondary">Hva koster det å bygge hus?</span>
          </nav>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-text-primary mb-6">Hva koster det å bygge hus?</h1>
          <p className="text-lg text-text-secondary mb-6">Å bygge hus i Norge koster typisk mellom 30 000 og 55 000 kr per m² avhengig av standard, beliggenhet og kompleksitet. For en gjennomsnittlig enebolig på 150 m² betyr det en totalkostnad på 4,5 til 8,5 millioner kroner.</p><h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Typiske kostnader for husbygging</h2><p className="text-text-secondary mb-4">Den totale kostnaden for å bygge hus inkluderer selve bygget, grunnarbeid, prosjektering, gebyr og tilkobling til infrastruktur. Mange glemmer å inkludere alle kostnadsposter når de budsjetterer.</p><div className="bg-bg-card border border-surface-border rounded-xl p-6 my-6"><h3 className="font-display font-bold text-text-primary mb-3">Priseksempel: Enebolig 150 m², normal standard</h3><div className="space-y-2 text-sm"><div className="flex justify-between text-text-secondary"><span>Selve bygget</span><span className="font-mono">4 500 000 kr</span></div><div className="flex justify-between text-text-secondary"><span>Grunnarbeid</span><span className="font-mono">450 000 kr</span></div><div className="flex justify-between text-text-secondary"><span>Prosjektering og gebyr</span><span className="font-mono">350 000 kr</span></div><div className="flex justify-between text-text-secondary"><span>Uforutsette kostnader (10%)</span><span className="font-mono">530 000 kr</span></div><div className="flex justify-between text-text-primary font-bold border-t border-surface-border pt-2 mt-2"><span>Totalt estimat</span><span className="font-mono text-accent-yellow">5 830 000 kr</span></div></div></div><h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Hva påvirker prisen mest?</h2><p className="text-text-secondary mb-4">Standard er den største enkeltfaktoren. Forskjellen mellom enkel og høy standard kan utgjøre millioner av kroner. Beliggenhet, tomteforhold og husets form påvirker også prisen vesentlig.</p>
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
