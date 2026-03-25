import { Metadata } from "next";
import Link from "next/link";
import { FadeInUp } from "@/components/ui/animations";
import { IconCalculator } from "@/components/icons";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "@/components/seo/JsonLd";

const faq = [
  { question: "Hva koster en rørlegger per time?", answer: "Timepris for rørlegger er typisk 700-1 100 kr inkl. mva. Oslo: 850-1 100 kr. Distriktene: 650-900 kr. Oppstartsgebyr 500-1 500 kr kommer i tillegg. Rørlegger er normalt dyrere enn elektriker." },
  { question: "Hva koster rørlegger på nytt bad?", answer: "Rørleggerarbeid på bad koster typisk 40 000-80 000 kr. Inkluderer nye rør, sluk, tilkobling av toalett, servant og dusj. Hvis rør må omlegges (flyttes) koster det 20 000-40 000 kr ekstra." },
  { question: "Hva koster det å bytte rør i huset?", answer: "Komplett utskifting av vannrør i et hus koster typisk 60 000-150 000 kr. Avløpsrør: 80 000-200 000 kr. Totalt for all rørlegging: 150 000-350 000 kr. Prisen avhenger av antall bad, tilgjengelighet og rørtype." },
  { question: "Hva koster det å flytte vasken på kjøkken?", answer: "Å flytte kjøkkenvasken til ny plassering koster typisk 8 000-20 000 kr for rørleggerarbeidet. Kort flytt (under 1 meter) er rimeligst. Lengre flytt krever ny rørføring og kan koste opp mot 25 000 kr." },
  { question: "Hva koster det å installere oppvaskmaskin?", answer: "Tilkobling av oppvaskmaskin koster typisk 3 000-6 000 kr hvis rør allerede er på plass. Ny tilkobling med rørføring: 5 000-12 000 kr. Inkluderer vanntilkobling, avløp og evt. ny stoppekran." },
  { question: "Hva koster varmtvannsbereder?", answer: "Ny varmtvannsbereder koster 8 000-20 000 kr for beholderen og 5 000-10 000 kr for installasjon. Totalt: 13 000-30 000 kr. Størrelsen avhenger av husstandens størrelse — 120-200 liter er vanligst." },
  { question: "Hva koster det å installere varmepumpe?", answer: "Luft-til-luft varmepumpe: 15 000-30 000 kr installert. Luft-til-vann: 80 000-150 000 kr. Bergvarmepumpe: 150 000-300 000 kr (inkl. boring). Varmepumpe kan redusere strømregningen med 30-60%." },
  { question: "Kan man gjøre rørleggerarbeid selv?", answer: "Nei, rørleggerarbeid krever autorisert rørleggerfirma i Norge. Du kan ikke koble til eller endre vannrør, avløp eller sluk selv. Uautorisert arbeid gir problemer med forsikring og kan føre til vannskader." },
  { question: "Hva koster vannbåren varme?", answer: "Vannbåren gulvvarme koster typisk 800-1 500 kr per m² for installasjon. For et hus på 120 m²: 96 000-180 000 kr. I tillegg trengs varmekilden (varmepumpe). Vannbåren varme gir jevn og behagelig varme." },
  { question: "Hva koster det å skifte sluk?", answer: "Skifte av sluk koster 5 000-15 000 kr. Enkel utskifting av slukrist: 1 000-3 000 kr. Nytt sluk med omlegging av avløp: 10 000-20 000 kr. Sluk bør alltid skiftes ved baderomsrenovering." },
];

export const metadata: Metadata = {
  title: "Hva koster rørlegger? Timepriser og prisguide 2026",
  description: "Rørlegger koster 700-1 100 kr per time. Se priser for bad, kjøkken, varmtvannsbereder, varmepumpe og komplett rørlegging.",
  alternates: { canonical: "https://byggepris.no/rorlegger" },
  openGraph: { title: "Hva koster rørlegger?", description: "Timepris 700-1 100 kr.", url: "https://byggepris.no/rorlegger", type: "article" },
};

export default function Page() {
  return (
    <main className="pt-20">
      <BreadcrumbSchema items={[{ name: "Hjem", href: "/" }, { name: "Rørlegger", href: "/rorlegger" }]} />
      <ArticleSchema title="Hva koster rørlegger?" description="Prisguide for rørleggerarbeid i Norge." slug="rorlegger" />
      <FAQSchema items={faq} />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <FadeInUp>
          <nav className="text-sm text-text-muted mb-6"><Link href="/" className="hover:text-accent-yellow">Hjem</Link> / <span className="text-text-secondary">Rørlegger</span></nav>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-text-primary mb-6">Hva koster rørlegger?</h1>
          <p className="text-lg text-text-secondary mb-6">En rørlegger koster typisk 700-1 100 kr per time inkl. mva i Norge. Rørlegger er dyrere enn de fleste andre håndverkere fordi arbeidet krever sertifisering og har høy risiko (vannskader). Vanlige jobber som bad koster 40 000-80 000 kr.</p>

          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Priseksempler for vanlige rørleggerjobber</h2>
          <div className="bg-bg-card border border-surface-border rounded-xl overflow-hidden my-6">
            <table className="w-full text-sm">
              <thead><tr className="text-left text-xs text-text-muted uppercase tracking-wider border-b border-surface-border"><th className="px-5 py-3">Jobb</th><th className="px-5 py-3">Typisk pris</th></tr></thead>
              <tbody className="divide-y divide-surface-border">
                {[
                  ["Rørlegger på bad (komplett)", "40 000–80 000 kr"],
                  ["Flytte kjøkkenvask", "8 000–20 000 kr"],
                  ["Tilkoble oppvaskmaskin", "3 000–6 000 kr"],
                  ["Tilkoble vaskemaskin", "2 000–5 000 kr"],
                  ["Ny varmtvannsbereder (inkl. montering)", "13 000–30 000 kr"],
                  ["Skifte sluk", "5 000–15 000 kr"],
                  ["Nye vannrør hele huset", "60 000–150 000 kr"],
                  ["Nye avløpsrør hele huset", "80 000–200 000 kr"],
                  ["Luft-til-luft varmepumpe", "15 000–30 000 kr"],
                  ["Vannbåren gulvvarme (per m²)", "800–1 500 kr"],
                  ["Oppstartsgebyr / utkjøring", "500–1 500 kr"],
                ].map(([j, p]) => (
                  <tr key={j}><td className="px-5 py-3 text-text-primary font-medium">{j}</td><td className="px-5 py-3 font-mono text-accent-yellow">{p}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Slik sparer du på rørlegger</h2>
          <div className="space-y-3 text-text-secondary mb-6">
            <p><strong className="text-text-primary">Behold eksisterende rørplassering.</strong> Å flytte rør koster 20 000-50 000 kr ekstra. Hvis du kan beholde toalett, servant og dusj på samme plass, sparer du mye.</p>
            <p><strong className="text-text-primary">Samle jobber.</strong> Oppstartsgebyr og utkjøring (500-1 500 kr) gjør det lønnsomt å samle flere jobber i én bestilling.</p>
            <p><strong className="text-text-primary">Klargjør før rørlegger kommer.</strong> Riv gammelt bad, fjern møbler og gi fri tilgang. Rørleggerens tid er dyr — ikke betal for rydding.</p>
            <p><strong className="text-text-primary">Kjøp sanitærprodukter selv.</strong> Du kan spare 20-40% ved å kjøpe toalett, servant og blandebatteri direkte, men avklar med rørlegger først.</p>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link href="/kalkulator" className="inline-flex items-center gap-2 px-6 py-3 bg-accent-yellow text-bg-primary font-display font-bold rounded-xl hover:bg-accent-warm transition-colors shadow-glow-sm"><IconCalculator size={18} /> Beregn ditt prosjekt</Link>
            <Link href="/bad" className="inline-flex items-center gap-2 px-6 py-3 border border-surface-border text-text-primary font-display font-semibold rounded-xl hover:border-accent-yellow/30 transition-colors">Se badpriser</Link>
          </div>
        </FadeInUp>
      </article>
    </main>
  );
}
