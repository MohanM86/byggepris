import { Metadata } from "next";
import Link from "next/link";
import { FadeInUp } from "@/components/ui/animations";
import PriceIntelligence from "@/components/sections/PriceIntelligence";
import { TrustSection } from "@/components/sections/TrustAndContent";
import FAQAccordion from "@/components/sections/FAQAccordion";

export const metadata: Metadata = {
  title: "Byggekostnader i Norge – Alt du trenger å vite",
  description: "Komplett guide til byggekostnader i Norge. Forstå hva som driver kostnadene, typiske prisintervaller, og hvordan du kan budsjettere smart for ditt prosjekt.",
  alternates: { canonical: "https://byggepris.no/byggekostnader" },
};

export default function Byggekostnader() {
  return (
    <main className="pt-20">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <FadeInUp>
          <nav className="text-sm text-text-muted mb-6">
            <Link href="/" className="hover:text-accent-yellow">Hjem</Link> / <span className="text-text-secondary">Byggekostnader</span>
          </nav>
          <h1 className="font-display font-extrabold text-4xl lg:text-display-md text-text-primary mb-4">
            Byggekostnader i Norge
          </h1>
          <p className="text-lg text-text-secondary mb-4">
            Byggekostnader i Norge har steget jevnt de siste årene, drevet av økte material- og lønnskostnader. For å planlegge et vellykket byggeprosjekt er det viktig å forstå hva som driver kostnadene og hvordan du kan budsjettere realistisk.
          </p>
          <p className="text-text-secondary mb-6">
            Denne guiden gir deg en komplett oversikt over byggekostnader for ulike prosjekttyper, fra nybygg til renovering, og hjelper deg å forstå de viktigste kostnadsdriverne.
          </p>

          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Hva er byggekostnader?</h2>
          <p className="text-text-secondary mb-4">
            Byggekostnader er den totale summen av utgifter knyttet til et byggeprosjekt. Dette inkluderer materialkostnader, arbeidskostnader, prosjekteringskostnader, offentlige gebyrer og uforutsette utgifter.
          </p>

          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">De største kostnadspostene</h2>
          <div className="space-y-4 mb-6">
            {[
              { title: "Materialer (30-40%)", desc: "Trelast, betong, isolasjon, vinduer, dører, takstein og innvendig materialer utgjør den største enkeltkostnaden." },
              { title: "Arbeidskraft (35-45%)", desc: "Tømrer, murer, rørlegger, elektriker og andre håndverkere. Lønnskostnadene varierer mellom regioner." },
              { title: "Prosjektering (5-10%)", desc: "Arkitekt, ingeniør, byggesøknad og prosjektledelse." },
              { title: "Grunnarbeid (5-15%)", desc: "Graving, fundamentering, drenering og tilkobling til kommunalt nett." },
              { title: "Buffer (10-15%)", desc: "Uforutsette kostnader som alltid bør inkluderes i budsjettet." },
            ].map((item) => (
              <div key={item.title} className="bg-bg-card border border-surface-border rounded-xl p-5">
                <h3 className="font-display font-bold text-text-primary mb-1">{item.title}</h3>
                <p className="text-sm text-text-secondary">{item.desc}</p>
              </div>
            ))}
          </div>
        </FadeInUp>
      </section>
      <PriceIntelligence />
      <TrustSection />
      <FAQAccordion items={[
        { question: "Hva er den største byggekostnaden?", answer: "Arbeidskraft er typisk den største enkeltkostnaden og utgjør 35-45% av totalbudsjettet. Materialkostnader utgjør 30-40%." },
        { question: "Hvor mye buffer bør jeg ha?", answer: "Vi anbefaler alltid å ha minst 10-15% buffer i budsjettet for uforutsette kostnader. For eldre boliger eller komplekse prosjekter bør bufferen være enda høyere." },
        { question: "Stiger byggekostnadene?", answer: "Ja, byggekostnadene i Norge har steget jevnt de siste årene. SSBs byggekostnadsindeks viser en typisk årlig økning på 5-8%." },
      ]} />
    </main>
  );
}
