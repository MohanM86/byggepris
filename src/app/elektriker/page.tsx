import { Metadata } from "next";
import Link from "next/link";
import { FadeInUp } from "@/components/ui/animations";
import { IconCalculator } from "@/components/icons";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "@/components/seo/JsonLd";

const faq = [
  { question: "Hva koster en elektriker per time?", answer: "Timepris for elektriker er typisk 600-900 kr inkl. mva. I Oslo og storbyene er prisen i øvre sjikt (750-950 kr). Oppstartsgebyr/utkjøring kommer ofte i tillegg: 500-1 500 kr." },
  { question: "Hva koster elektriker på bad?", answer: "Elektrikerarbeid på bad koster typisk 15 000-35 000 kr. Inkluderer nye kurser, gulvvarme (5 000-10 000 kr), spotlights, ventilasjon og jordfeilvern. Omfanget avhenger av om anlegget må oppgraderes." },
  { question: "Hva koster ny sikringstavle?", answer: "Ny sikringstavle (sikringsskap) koster typisk 15 000-40 000 kr inkl. montering. Pris avhenger av antall kurser og om det er nødvendig med ny inntak. Anbefales sterkt i boliger med skrusikringer." },
  { question: "Hva koster det å trekke nytt elektrisk anlegg?", answer: "Komplett nytt elektrisk anlegg for en bolig på 100 m² koster typisk 80 000-200 000 kr. Inkluderer ny tavle, nye kurser, nye uttak, belysning og jordfeilvern. For en leilighet på 60 m²: 50 000-120 000 kr." },
  { question: "Hva koster det å sette inn en ekstra stikkontakt?", answer: "En ny stikkontakt koster typisk 2 000-5 000 kr inkl. arbeid, avhengig av om det trengs ny kurs eller bare forlengelse av eksisterende. Oppstartsgebyr gjør at det lønner seg å samle flere jobber." },
  { question: "Hva koster det å installere elbil-lader?", answer: "Installasjon av elbil-lader hjemme koster typisk 10 000-25 000 kr inkl. lader og montering. Enkel lading fra stikkontakt: 3 000-5 000 kr for dedikert kurs. Krever alltid autorisert elektriker." },
  { question: "Kan man gjøre elektrisk arbeid selv?", answer: "Nei, elektrisk installasjonsarbeid er lovpålagt å utføre av autorisert elektriker eller elektrofagperson i Norge. Du kan bytte pærer, sikringer og dekklokk, men ikke gjøre noe med ledninger, uttak eller kurser." },
  { question: "Hva er dyrest av elektriker og rørlegger?", answer: "Rørlegger er normalt dyrere: 700-1 100 kr/time vs. 600-900 kr/time for elektriker. Rørleggerarbeid på bad koster 40 000-80 000 kr, mens elektrikerarbeid koster 15 000-35 000 kr. Rørleggerarbeidet er mer omfattende." },
  { question: "Hva skal ha egen kurs?", answer: "Følgende skal ha egen kurs: komfyr/stekeovn (32A), oppvaskmaskin, vaskemaskin, tørketrommel, varmtvannsbereder, elbil-lader, og varmepumpe. I tillegg bør bad og utendørs ha egne kurser med jordfeilvern." },
  { question: "Hva koster det å legge varmekabler?", answer: "Varmekabler i gulv koster typisk 500-1 200 kr per m² inkl. materialer og installasjon. For et bad på 6 m²: 5 000-10 000 kr. For en stue på 20 m²: 12 000-25 000 kr. Elektriker kobler til, gulvlegger kan legge kablene." },
];

export const metadata: Metadata = {
  title: "Hva koster elektriker? Timepriser og prisguide 2026",
  description: "Elektriker koster 600-900 kr per time. Se priser for nytt anlegg, bad, sikringstavle, elbil-lader, varmekabler og stikkontakter.",
  alternates: { canonical: "https://byggepris.no/elektriker" },
  openGraph: { title: "Hva koster elektriker?", description: "Timepris 600-900 kr. Komplett prisguide.", url: "https://byggepris.no/elektriker", type: "article" },
};

export default function Page() {
  return (
    <main className="pt-20">
      <BreadcrumbSchema items={[{ name: "Hjem", href: "/" }, { name: "Elektriker", href: "/elektriker" }]} />
      <ArticleSchema title="Hva koster elektriker?" description="Prisguide for elektrikerarbeid i Norge." slug="elektriker" />
      <FAQSchema items={faq} />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <FadeInUp>
          <nav className="text-sm text-text-muted mb-6"><Link href="/" className="hover:text-accent-yellow">Hjem</Link> / <span className="text-text-secondary">Elektriker</span></nav>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-text-primary mb-6">Hva koster elektriker?</h1>
          <p className="text-lg text-text-secondary mb-6">En elektriker koster typisk 600-900 kr per time inkl. mva i Norge. Vanlige jobber som nytt bad koster 15 000-35 000 kr, ny sikringstavle 15 000-40 000 kr, og komplett nytt anlegg for en bolig 80 000-200 000 kr.</p>

          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Priseksempler for vanlige elektrikerjobber</h2>
          <div className="bg-bg-card border border-surface-border rounded-xl overflow-hidden my-6">
            <table className="w-full text-sm">
              <thead><tr className="text-left text-xs text-text-muted uppercase tracking-wider border-b border-surface-border"><th className="px-5 py-3">Jobb</th><th className="px-5 py-3">Typisk pris</th></tr></thead>
              <tbody className="divide-y divide-surface-border">
                {[
                  ["Ny stikkontakt", "2 000–5 000 kr"],
                  ["Installere spot/downlight (per stk)", "1 500–3 000 kr"],
                  ["Elektriker på bad (komplett)", "15 000–35 000 kr"],
                  ["Ny sikringstavle", "15 000–40 000 kr"],
                  ["Elbil-lader installasjon", "10 000–25 000 kr"],
                  ["Varmekabler bad (6 m²)", "5 000–10 000 kr"],
                  ["Nytt anlegg leilighet (60 m²)", "50 000–120 000 kr"],
                  ["Nytt anlegg hus (150 m²)", "100 000–250 000 kr"],
                  ["Oppstartsgebyr / utkjøring", "500–1 500 kr"],
                ].map(([j, p]) => (
                  <tr key={j}><td className="px-5 py-3 text-text-primary font-medium">{j}</td><td className="px-5 py-3 font-mono text-accent-yellow">{p}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Når må du bruke elektriker?</h2>
          <p className="text-text-secondary mb-4">I Norge er det lovpålagt å bruke autorisert elektriker for alt installasjonsarbeid. Det eneste du kan gjøre selv er å bytte pærer, sikringer og dekklokk. Alt som innebærer arbeid med ledninger, uttak, kurser eller tavle krever autorisert fagperson.</p>
          <p className="text-text-secondary mb-6">Uautorisert elektrisk arbeid er ikke bare ulovlig — det kan føre til brann, gi problemer med forsikring, og gjøre boligen vanskelig å selge.</p>

          <div className="mt-10"><Link href="/kalkulator" className="inline-flex items-center gap-2 px-6 py-3 bg-accent-yellow text-bg-primary font-display font-bold rounded-xl hover:bg-accent-warm transition-colors shadow-glow-sm"><IconCalculator size={18} /> Beregn ditt prosjekt</Link></div>
        </FadeInUp>
      </article>
    </main>
  );
}
