import { Metadata } from "next";
import Link from "next/link";
import { FadeInUp } from "@/components/ui/animations";
import { IconCalculator } from "@/components/icons";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "@/components/seo/JsonLd";

const faq = [
  { question: "Hva koster grunnarbeid?", answer: "Grunnarbeid for en enebolig koster typisk 300 000–800 000 kr. Inkluderer graving, fundamentering, drenering og tilkobling. Grunnforholdene er avgjørende fordi fjell eller leire kan øke kostnadene med 100 000–500 000 kr." },
  { question: "Hva koster grunnmur?", answer: "Grunnmur koster typisk 200 000–400 000 kr for 100 m² grunnflate. Plate på mark uten kjeller er billigst med 150 000–250 000 kr. Full kjeller øker kostnaden til 400 000–700 000 kr." },
  { question: "Hva koster graving?", answer: "Graving koster typisk 800–2 000 kr per time for maskin med fører. For en enebolig tar graving 3–7 dager, altså 20 000–80 000 kr. Fjellsprengning kan koste 100 000–400 000 kr ekstra." },
  { question: "Hva koster det å sprenge fjell?", answer: "Fjellsprengning koster typisk 300–800 kr per kubikkmeter fjell. For en vanlig hustomt kan det bety 100 000–400 000 kr. Krever godkjent sprengningmester og nabovarsel." },
  { question: "Hva koster pæling?", answer: "Pæling for bygging på dårlig grunn eller kvikkleire koster typisk 200 000–800 000 kr. Stålpeler koster 3 000–8 000 kr per pel. For et hus trenger du 15–40 peler." },
  { question: "Hva koster geoteknisk undersøkelse?", answer: "Geoteknisk undersøkelse koster 10 000–30 000 kr. Det er en av de beste investeringene du kan gjøre fordi den avdekker grunnforhold før du starter og kan spare deg for hundretusener i overraskelser." },
  { question: "Hva koster plate på mark?", answer: "Plate på mark med isolert betongplate uten kjeller koster 1 500–3 000 kr per m². For 100 m² betyr det 150 000–300 000 kr. Inkluderer isolasjon under, armering, betong, varmerør i gulv og avretting." },
  { question: "Hva koster det å støpe?", answer: "Støpearbeid koster typisk 800–1 800 kr per m². Betong koster 1 500–2 500 kr per kubikkmeter levert. For en grunnmur på 100 m² trengs ca. 15–25 kubikkmeter betong." },
  { question: "Hva koster tilkobling til kommunalt nett?", answer: "Tilkobling til vann og avløp koster 30 000–150 000 kr avhengig av avstand til kommunalt nett. Tilkoblingsavgift er 20 000–80 000 kr. Graving og rørlegging koster 10 000–70 000 kr." },
  { question: "Når bør man ta geoteknisk undersøkelse?", answer: "Alltid før du bygger. Spesielt viktig ved marin leire, bratt tomt, naboproblemer med setninger, bygging nær vann eller ukjent grunnforhold. Koster 10 000–30 000 kr og kan spare deg for katastrofale overraskelser." },
];

export const metadata: Metadata = {
  title: "Hva koster grunnarbeid? Priser for graving og fundamentering 2026",
  description: "Grunnarbeid koster 300 000–800 000 kr. Se priser for grunnmur, graving, sprengning, pæling og geoteknisk undersøkelse.",
  alternates: { canonical: "https://byggepris.no/grunnarbeid" },
};

export default function Page() {
  return (
    <main className="pt-20"><BreadcrumbSchema items={[{name:"Hjem",href:"/"},{name:"Grunnarbeid",href:"/grunnarbeid"}]} /><ArticleSchema title="Hva koster grunnarbeid?" description="Prisguide for grunnarbeid." slug="grunnarbeid" /><FAQSchema items={faq} /><article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14"><FadeInUp>
      <nav className="text-sm text-text-muted mb-6"><Link href="/" className="hover:text-accent-yellow">Hjem</Link> / <span className="text-text-secondary">Grunnarbeid</span></nav>
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent-yellow/20 bg-accent-yellow/5 mb-4"><span className="text-accent-yellow text-xs font-semibold">OPPDATERT 2026</span></div>
      <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-text-primary mb-4">Hva koster grunnarbeid?</h1>
      <p className="text-lg text-text-secondary mb-8">Grunnarbeid for en enebolig koster typisk <strong className="text-text-primary">300 000–800 000 kr</strong>. Det er en av de mest uforutsigbare kostnadspostene i et byggeprosjekt fordi det du finner i bakken bestemmer prisen. En geoteknisk undersøkelse til 10 000–30 000 kr er den beste investeringen du kan gjøre for å unngå overraskelser.</p>
      <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Pristabell</h2>
      <div className="bg-bg-card border border-surface-border rounded-2xl overflow-hidden my-6">
        <table className="w-full text-sm"><thead><tr className="text-left text-xs text-text-muted uppercase tracking-wider border-b border-surface-border"><th className="px-5 py-3">Arbeid</th><th className="px-5 py-3">Typisk pris</th></tr></thead>
          <tbody className="divide-y divide-surface-border">
            {[["Geoteknisk undersøkelse","10 000–30 000 kr"],["Graving og planering","20 000–80 000 kr"],["Plate på mark (100 m²)","150 000–300 000 kr"],["Grunnmur (100 m²)","200 000–400 000 kr"],["Full kjeller (100 m²)","400 000–700 000 kr"],["Drenering","50 000–100 000 kr"],["Tilkobling vann og avløp","30 000–150 000 kr"],["Fjellsprengning","100 000–400 000 kr"],["Pæling (dårlig grunn)","200 000–800 000 kr"],["Komplett grunnarbeid enebolig","300 000–800 000 kr"]].map(([j,p])=>(
              <tr key={j} className="hover:bg-bg-tertiary/30"><td className="px-5 py-3 text-text-primary font-medium">{j}</td><td className="px-5 py-3 font-mono text-accent-yellow">{p}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-10 flex flex-wrap gap-3">
        {[{href:"/bygge-hus",label:"Bygge hus"},{href:"/drenering",label:"Drenering"},{href:"/kjeller",label:"Kjeller"}].map(l=>(<Link key={l.href} href={l.href} className="px-4 py-2 bg-bg-card border border-surface-border rounded-xl text-sm text-text-secondary hover:text-accent-yellow hover:border-accent-yellow/30 transition-all">{l.label}</Link>))}
        <Link href="/kalkulator" className="px-4 py-2 bg-accent-yellow/10 border border-accent-yellow/20 rounded-xl text-sm text-accent-yellow font-semibold hover:bg-accent-yellow/20 transition-all flex items-center gap-1"><IconCalculator size={14} /> Bruk kalkulator</Link>
      </div>
    </FadeInUp></article></main>
  );
}
