import { Metadata } from "next";
import Link from "next/link";
import { FadeInUp } from "@/components/ui/animations";
import { IconCalculator } from "@/components/icons";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "@/components/seo/JsonLd";

const faq = [
  { question: "Hva koster det å bygge hus i 2026?", answer: "I 2026 koster det typisk 30 000–55 000 kr per m² å bygge hus i Norge. For en enebolig på 150 m² betyr det 4,5–8,5 millioner kr avhengig av standard, beliggenhet og kompleksitet." },
  { question: "Kan man bygge hus for 4 millioner?", answer: "Ja, med enkel standard, kompakt form på 100–120 m², ferdighus og rimelig beliggenhet. Tomt kommer i tillegg. Velg rektangulær form og standardmaterialer for å holde budsjettet." },
  { question: "Hvor stort hus kan man bygge for 5 millioner?", answer: "For 5 millioner kan du bygge 120–150 m² med normal standard eller 100 m² med høy standard. Ferdighus gir mest areal for pengene." },
  { question: "Hva koster grunnarbeid til hus?", answer: "Grunnarbeid koster typisk 300 000–600 000 kr. Grunnmur på 100 m² koster 200 000–400 000 kr. Graving koster 20 000–80 000 kr. Drenering koster 50 000–100 000 kr." },
  { question: "Er ferdighus billigere enn arkitekttegnet?", answer: "Ja, ferdighus er typisk 15–25 % billigere. Ferdighus koster 25 000–40 000 kr per m² og arkitekttegnet 35 000–55 000 kr per m². Ferdighus har også kortere byggetid og mer forutsigbar pris." },
  { question: "Hvor lang tid tar det å bygge hus?", answer: "Selve byggingen tar 8–12 måneder. Med planlegging, arkitekt og byggesøknad tar det 12–18 måneder totalt. Ferdighus er raskere med 4–8 måneder for selve byggingen." },
  { question: "Hva koster det å bygge hus på 100 m²?", answer: "Et hus på 100 m² koster 3–5,5 millioner kr avhengig av standard. Enkel ca. 3 mill., normal ca. 4 mill. og høy ca. 5,5 mill. Inkludert grunnarbeid og prosjektering." },
  { question: "Hva koster det å bygge hus på 200 m²?", answer: "Et hus på 200 m² koster 6–11 millioner kr. Normal standard ca. 7–9 mill. og høy standard 9–11 mill. Kvadratmeterprisen er noe lavere for store hus fordi faste kostnader fordeles på flere m²." },
  { question: "Hvor mye egenkapital trenger man?", answer: "Minimum 15 % av total prosjektkostnad. For et prosjekt på 5 mill. trenger du 750 000 kr. Tomt du eier teller som egenkapital. Noen banker krever 20 % for byggelån." },
  { question: "Er det billigere å bygge eller kjøpe?", answer: "I pressområder som Oslo er nybygg ofte billigere enn tilsvarende bruktbolig. I mindre pressede områder kan bruktbolig være rimeligere. Nybygg gir moderne standard og lave vedlikeholdskostnader." },
  { question: "Hva er dyrest når man bygger hus?", answer: "Arbeidskraft er største enkeltkostnad med 35–45 %. Deretter materialer med 30–40 %, grunnarbeid med 5–15 % og prosjektering med 5–10 %. Bad og kjøkken er dyrest per m² av enkeltrom." },
  { question: "Hvilke skjulte kostnader finnes?", answer: "Typiske skjulte kostnader er tilkoblingsavgifter vann og avløp på 30 000–150 000 kr, oppvarming under bygging, dokumentavgift på tomt 2,5 %, utvendig arbeid på 200 000–800 000 kr og buffer for uforutsett 10–15 %." },
];

export const metadata: Metadata = {
  title: "Hva koster det å bygge hus? Komplett prisguide 2026",
  description: "Se hva det koster å bygge hus i Norge i 2026. Typisk 30 000–55 000 kr/m². Priseksempler for 100, 150 og 200 m².",
  alternates: { canonical: "https://byggepris.no/hva-koster-det-a-bygge-hus" },
};

export default function Page() {
  return (
    <main className="pt-20"><BreadcrumbSchema items={[{name:"Hjem",href:"/"},{name:"Hva koster det å bygge hus?",href:"/hva-koster-det-a-bygge-hus"}]} /><ArticleSchema title="Hva koster det å bygge hus?" description="Komplett prisguide for husbygging." slug="hva-koster-det-a-bygge-hus" /><FAQSchema items={faq} /><article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14"><FadeInUp>
      <nav className="text-sm text-text-muted mb-6"><Link href="/" className="hover:text-accent-yellow">Hjem</Link> / <span className="text-text-secondary">Hva koster det å bygge hus?</span></nav>
      <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-text-primary mb-4">Hva koster det å bygge hus i Norge?</h1>
      <p className="text-lg text-text-secondary mb-8">Å bygge hus i Norge koster typisk <strong className="text-text-primary">30 000–55 000 kr per m²</strong>. For en enebolig på 150 m² betyr det 4,5–8,5 millioner kr inkl. grunnarbeid, prosjektering og buffer. Prisen avhenger av standard, beliggenhet, grunnforhold og kompleksitet.</p>
      <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Hva koster hus etter størrelse?</h2>
      <div className="bg-bg-card border border-surface-border rounded-2xl overflow-hidden my-6">
        <table className="w-full text-sm"><thead><tr className="text-left text-xs text-text-muted uppercase tracking-wider border-b border-surface-border"><th className="px-5 py-3">Størrelse</th><th className="px-5 py-3">Enkel</th><th className="px-5 py-3">Normal</th><th className="px-5 py-3">Høy</th></tr></thead>
          <tbody className="divide-y divide-surface-border">
            {[["80 m²","2,2–2,8 mill.","2,8–3,5 mill.","3,8–4,8 mill."],["100 m²","2,8–3,5 mill.","3,5–4,5 mill.","4,8–6,0 mill."],["120 m²","3,3–4,2 mill.","4,2–5,4 mill.","5,7–7,2 mill."],["150 m²","4,1–5,3 mill.","5,3–6,8 mill.","7,2–9,0 mill."],["200 m²","5,5–7,0 mill.","7,0–9,0 mill.","9,5–12 mill."]].map(([s,e,n,h])=>(
              <tr key={s}><td className="px-5 py-3 text-text-primary font-medium">{s}</td><td className="px-5 py-3 font-mono text-text-secondary">{e}</td><td className="px-5 py-3 font-mono text-accent-yellow">{n}</td><td className="px-5 py-3 font-mono text-text-secondary">{h}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-text-secondary mb-6">Se vår detaljerte <Link href="/bygge-hus" className="text-accent-yellow hover:underline">prisguide for husbygging</Link> med kostnadsfordeling, ferdighus vs arkitekt og steg for steg prosess.</p>
      <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/kalkulator" className="inline-flex items-center gap-2 px-6 py-3 bg-accent-yellow text-bg-primary font-display font-bold rounded-xl hover:bg-accent-warm transition-colors shadow-glow-sm"><IconCalculator size={18} /> Beregn ditt prosjekt</Link>
        <Link href="/bygge-hus" className="inline-flex items-center gap-2 px-6 py-3 border border-surface-border text-text-primary font-display font-semibold rounded-xl hover:border-accent-yellow/30 transition-colors">Komplett husbyggguide</Link>
      </div>
    </FadeInUp></article></main>
  );
}
