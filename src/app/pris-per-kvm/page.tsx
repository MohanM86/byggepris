import { Metadata } from "next";
import Link from "next/link";
import { FadeInUp } from "@/components/ui/animations";
import { IconCalculator } from "@/components/icons";

export const metadata: Metadata = {
  title: "Pris per m² i Norge – Oppdatert oversikt",
  description: "Oppdatert oversikt over pris per m2 for bygging og renovering i Norge. Se m2-priser for nybygg, tilbygg, bad, kjøkken og mer.",
  alternates: { canonical: "https://byggepris.no/pris-per-kvm" },
};

export default function Page() {
  return (
    <main className="pt-20">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <FadeInUp>
          <nav className="text-sm text-text-muted mb-6">
            <Link href="/" className="hover:text-accent-yellow">Hjem</Link> / <span className="text-text-secondary">Pris per m² i Norge</span>
          </nav>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-text-primary mb-6">Pris per m² i Norge</h1>
          <p className="text-lg text-text-secondary mb-6">Pris per kvadratmeter er det vanligste målet for å sammenligne byggekostnader. I Norge varierer m²-prisen fra ca. 8 000 kr for enkel oppussing til over 80 000 kr for luksuriøs baderomsrenovering.</p><div className="bg-bg-card border border-surface-border rounded-xl overflow-hidden my-6"><table className="w-full"><thead><tr className="text-left text-xs text-text-muted uppercase tracking-wider border-b border-surface-border"><th className="px-5 py-3">Prosjekttype</th><th className="px-5 py-3">Lav</th><th className="px-5 py-3">Normal</th><th className="px-5 py-3">Høy</th></tr></thead><tbody className="divide-y divide-surface-border text-sm"><tr className="hover:bg-bg-tertiary/30"><td className="px-5 py-3 text-text-primary font-medium">Nybygg</td><td className="px-5 py-3 font-mono text-text-secondary">30 000 kr</td><td className="px-5 py-3 font-mono text-text-secondary">40 000 kr</td><td className="px-5 py-3 font-mono text-text-secondary">55 000 kr</td></tr><tr className="hover:bg-bg-tertiary/30"><td className="px-5 py-3 text-text-primary font-medium">Tilbygg</td><td className="px-5 py-3 font-mono text-text-secondary">35 000 kr</td><td className="px-5 py-3 font-mono text-text-secondary">45 000 kr</td><td className="px-5 py-3 font-mono text-text-secondary">65 000 kr</td></tr><tr className="hover:bg-bg-tertiary/30"><td className="px-5 py-3 text-text-primary font-medium">Bad</td><td className="px-5 py-3 font-mono text-text-secondary">40 000 kr</td><td className="px-5 py-3 font-mono text-text-secondary">55 000 kr</td><td className="px-5 py-3 font-mono text-text-secondary">80 000 kr</td></tr><tr className="hover:bg-bg-tertiary/30"><td className="px-5 py-3 text-text-primary font-medium">Kjøkken</td><td className="px-5 py-3 font-mono text-text-secondary">25 000 kr</td><td className="px-5 py-3 font-mono text-text-secondary">40 000 kr</td><td className="px-5 py-3 font-mono text-text-secondary">70 000 kr</td></tr><tr className="hover:bg-bg-tertiary/30"><td className="px-5 py-3 text-text-primary font-medium">Oppussing</td><td className="px-5 py-3 font-mono text-text-secondary">8 000 kr</td><td className="px-5 py-3 font-mono text-text-secondary">15 000 kr</td><td className="px-5 py-3 font-mono text-text-secondary">25 000 kr</td></tr></tbody></table></div><p className="text-text-secondary mb-4">Prisene er per m² inkludert materialer og arbeid. Prosjektering, gebyr og uforutsette kostnader kommer i tillegg.</p>
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
