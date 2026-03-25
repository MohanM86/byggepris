import { Metadata } from "next";
import Link from "next/link";
import { FadeInUp } from "@/components/ui/animations";
import PriceIntelligence from "@/components/sections/PriceIntelligence";
import { TrustSection } from "@/components/sections/TrustAndContent";
import FAQAccordion from "@/components/sections/FAQAccordion";
import { IconCalculator } from "@/components/icons";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "@/components/seo/JsonLd";

const faq = [
  { question: "Hva er den største byggekostnaden?", answer: "Arbeidskraft er typisk den største enkeltkostnaden og utgjør 35-45% av totalbudsjettet. Materialer utgjør 30-40%. Resten fordeles på prosjektering, grunnarbeid, gebyrer og buffer." },
  { question: "Hvor mye buffer bør man ha i budsjettet?", answer: "Vi anbefaler minimum 10-15% buffer for nybygg og normal oppussing. For totalrenovering av eldre boliger bør bufferen være 15-20%. Aldri gå under 10%." },
  { question: "Stiger byggekostnadene?", answer: "Ja, SSBs byggekostnadsindeks viser typisk 3-5% årlig økning. Materialprisene stabiliserte seg etter toppen i 2021-2022, men lønnskostnader for håndverkere fortsetter å stige." },
  { question: "Hva er timepris for håndverkere?", answer: "Typiske timepriser inkl. mva: tømrer 550-850 kr, rørlegger 700-1 100 kr, elektriker 600-900 kr, maler 500-700 kr, flislegger 600-900 kr. Oslo og storbyene er i øvre sjikt." },
  { question: "Hva koster materialer vs arbeid?", answer: "For et typisk byggeprosjekt utgjør materialer 30-40% og arbeidskraft 35-45%. Resten er prosjektering, transport, gebyrer og uforutsette kostnader. Forholdet varierer med prosjekttype." },
  { question: "Kan man spare penger på å kjøpe materialer selv?", answer: "Ja, du kan spare 20-40% på materialer som fliser, gulv, sanitær og belysning ved å kjøpe selv. Håndverkere har ofte påslag på materialer. Men sjekk at fagfolkene godtar at du leverer materialene." },
  { question: "Er det billigere å bygge om vinteren?", answer: "Ja, ofte 5-10% lavere priser på håndverkere om vinteren fordi det er roligere periode. Ulempen er at utvendig arbeid er vanskeligere, og oppvarming/tildekking kan koste ekstra. For innvendig arbeid er vinter en god tid." },
  { question: "Hva er dokumentavgift?", answer: "Dokumentavgift er 2,5% av kjøpesummen ved kjøp av fast eiendom. Den betales til staten ved tinglysing. For et hus til 5 mill. er det 125 000 kr. Dokumentavgift påløper ikke ved nybygg på egen tomt." },
  { question: "Hva koster prosjektering?", answer: "Prosjektering (arkitekt, ingeniør, byggesøknad) koster typisk 5-10% av byggekostnaden. For en enebolig til 5 mill. betyr det 250 000-500 000 kr. For enklere prosjekter som tilbygg koster det 50 000-150 000 kr." },
  { question: "Hva er SSBs byggekostnadsindeks?", answer: "SSBs byggekostnadsindeks måler prisutviklingen for oppføring av nye boliger i Norge. Den publiseres månedlig og brukes som referanse for prisjustering i byggekontrakter. Indeksen dekker materialer og arbeidskraft." },
];

export const metadata: Metadata = {
  title: "Byggekostnader i Norge – Komplett guide 2026",
  description: "Alt du trenger å vite om byggekostnader i Norge. Kostnadsfordeling, materialer vs arbeid, håndverkerpriser og tips for å spare.",
  alternates: { canonical: "https://byggepris.no/byggekostnader" },
  openGraph: { title: "Byggekostnader i Norge", description: "Komplett guide til byggekostnader.", url: "https://byggepris.no/byggekostnader", type: "article" },
};

export default function Page() {
  return (
    <main className="pt-20">
      <BreadcrumbSchema items={[{ name: "Hjem", href: "/" }, { name: "Byggekostnader", href: "/byggekostnader" }]} />
      <ArticleSchema title="Byggekostnader i Norge" description="Komplett guide til byggekostnader." slug="byggekostnader" />
      <FAQSchema items={faq} />
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <FadeInUp>
          <nav className="text-sm text-text-muted mb-6"><Link href="/" className="hover:text-accent-yellow">Hjem</Link> / <span className="text-text-secondary">Byggekostnader</span></nav>
          <h1 className="font-display font-extrabold text-4xl text-text-primary mb-4">Byggekostnader i Norge</h1>
          <p className="text-lg text-text-secondary mb-6">Byggekostnader i Norge har steget jevnt de siste årene, drevet av økte material- og lønnskostnader. For å planlegge et vellykket byggeprosjekt er det viktig å forstå hva som driver kostnadene og hvordan du kan budsjettere realistisk.</p>

          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">De største kostnadspostene</h2>
          <div className="space-y-4 my-6">
            {[
              { t: "Arbeidskraft (35-45%)", d: "Tømrer, rørlegger, elektriker, maler, flislegger og andre håndverkere. Timepriser varierer fra 500 kr (maler) til 1 100 kr (rørlegger) inkl. mva. Oslo er typisk 15-20% dyrere enn distriktene." },
              { t: "Materialer (30-40%)", d: "Trelast, betong, isolasjon, vinduer, dører, fliser, sanitær, kjøkkeninnredning og overflater. Materialpriser har stabilisert seg etter toppen i 2021-2022, men stiger fortsatt med 2-4% per år." },
              { t: "Prosjektering (5-10%)", d: "Arkitekt, bygningsingeniør, geotekniker, ansvarlig søker og prosjektledelse. For en enebolig til 5 mill. betyr det 250 000-500 000 kr." },
              { t: "Grunnarbeid (5-15%)", d: "Graving, fundamentering, drenering og tilkobling til kommunalt nett. Kostnaden varierer enormt med grunnforhold — fra 200 000 kr på enkel grunn til 800 000+ kr med sprengning eller pæling." },
              { t: "Buffer (10-15%)", d: "Uforutsette kostnader som ALLTID bør inkluderes. For nybygg: 10-15%. For renovering av eldre boliger: 15-20%. Å budsjettere uten buffer er den vanligste årsaken til budsjettsprekk." },
            ].map(({ t, d }) => (
              <div key={t} className="bg-bg-card border border-surface-border rounded-xl p-5">
                <h3 className="font-display font-bold text-text-primary mb-1">{t}</h3>
                <p className="text-sm text-text-secondary">{d}</p>
              </div>
            ))}
          </div>

          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Timepriser for håndverkere i Norge</h2>
          <div className="bg-bg-card border border-surface-border rounded-xl overflow-hidden my-6">
            <table className="w-full text-sm">
              <thead><tr className="text-left text-xs text-text-muted uppercase tracking-wider border-b border-surface-border"><th className="px-5 py-3">Faggruppe</th><th className="px-5 py-3">Timepris inkl. mva</th><th className="px-5 py-3">Merknader</th></tr></thead>
              <tbody className="divide-y divide-surface-border">
                <tr><td className="px-5 py-3 text-text-primary font-medium">Rørlegger</td><td className="px-5 py-3 font-mono text-accent-yellow">700–1 100 kr</td><td className="px-5 py-3 text-text-tertiary">Dyrest pga. sertifiseringskrav</td></tr>
                <tr><td className="px-5 py-3 text-text-primary font-medium">Elektriker</td><td className="px-5 py-3 font-mono text-accent-amber">600–900 kr</td><td className="px-5 py-3 text-text-tertiary">Autorisasjonskrav</td></tr>
                <tr><td className="px-5 py-3 text-text-primary font-medium">Tømrer</td><td className="px-5 py-3 font-mono text-text-secondary">550–850 kr</td><td className="px-5 py-3 text-text-tertiary">Størst variasjon mellom regioner</td></tr>
                <tr><td className="px-5 py-3 text-text-primary font-medium">Flislegger</td><td className="px-5 py-3 font-mono text-text-secondary">600–900 kr</td><td className="px-5 py-3 text-text-tertiary">Ofte m²-pris i stedet for time</td></tr>
                <tr><td className="px-5 py-3 text-text-primary font-medium">Maler</td><td className="px-5 py-3 font-mono text-text-secondary">500–700 kr</td><td className="px-5 py-3 text-text-tertiary">Rimeligst, mulig å gjøre selv</td></tr>
                <tr><td className="px-5 py-3 text-text-primary font-medium">Murer</td><td className="px-5 py-3 font-mono text-text-secondary">550–800 kr</td><td className="px-5 py-3 text-text-tertiary">Spesialisert, færre tilgjengelig</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Slik reduserer du byggekostnadene</h2>
          <div className="space-y-3 text-text-secondary mb-6">
            <p><strong className="text-text-primary">Innhent flere tilbud.</strong> Prisforskjellen mellom entreprenører kan være 20-30% for samme prosjekt. Alltid minst 3 tilbud.</p>
            <p><strong className="text-text-primary">Kjøp materialer selv.</strong> Du kan spare 20-40% på fliser, gulv, sanitær og belysning ved å handle direkte.</p>
            <p><strong className="text-text-primary">Gjør egeninnsats.</strong> Maling, riving, enkel montering og utvendig arbeid kan spare 50 000-200 000 kr.</p>
            <p><strong className="text-text-primary">Planlegg grundig.</strong> Endringer underveis er 2-5x dyrere enn planlagte. Bruk tid på planlegging.</p>
            <p><strong className="text-text-primary">Bygg om vinteren.</strong> 5-10% lavere håndverkerpriser og bedre tilgjengelighet.</p>
            <p><strong className="text-text-primary">Velg enkle former.</strong> Rette vegger og standard takvinkel sparer 15-25% vs. komplekse former.</p>
          </div>

          <Link href="/kalkulator" className="inline-flex items-center gap-2 px-5 py-3 bg-accent-yellow text-bg-primary font-display font-bold rounded-xl hover:bg-accent-warm transition-colors shadow-glow-sm mt-4">
            <IconCalculator size={18} /> Beregn ditt prosjekt
          </Link>
        </FadeInUp>
      </section>
      <PriceIntelligence />
      <TrustSection />
      <FAQAccordion items={faq} title="Ofte stilte spørsmål om byggekostnader" />
    </main>
  );
}
