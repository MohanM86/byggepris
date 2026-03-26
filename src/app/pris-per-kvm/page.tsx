import { Metadata } from "next";
import Link from "next/link";
import { FadeInUp } from "@/components/ui/animations";
import { IconCalculator } from "@/components/icons";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "@/components/seo/JsonLd";

const faq = [
  { question: "Hva er pris per m2 for nybygg?", answer: "Gjennomsnittlig m2-pris for nybygg i Norge er 35 000-40 000 kr med normal standard. Enkel: 25 000-30 000 kr/m2. Hoy: 45 000-55 000 kr/m2. Oslo er 10-15% over snittet." },
  { question: "Hva er pris per m2 for oppussing?", answer: "Oppussing koster 8 000-25 000 kr/m2. Overflateoppussing (maling, gulv): 5 000-10 000 kr/m2. Med nytt bad eller kjokken: 15 000-25 000 kr/m2. Totalrenovering: 15 000-40 000 kr/m2." },
  { question: "Hva er pris per m2 for bad?", answer: "Bad er det dyreste rommet: 40 000-80 000 kr per m2. Et bad pa 6 m2 koster 240 000-480 000 kr. Hoy pris skyldes mange fagfolk, strenge krav til vatromssikring og dyre materialer." },
  { question: "Hva er pris per m2 for tilbygg?", answer: "Tilbygg koster 35 000-65 000 kr per m2 — dyrere enn nybygg fordi du ma tilpasse deg eksisterende konstruksjon. Tilbygg med bad er dyrest (45 000-65 000 kr/m2)." },
  { question: "Hva er pris per m2 for kjokken?", answer: "Kjokkenrenovering koster 25 000-70 000 kr per m2. IKEA-kjokken: 20 000-35 000 kr/m2. Norsk merke: 35 000-55 000 kr/m2. Skreddersydd: 50 000-70 000+ kr/m2." },
  { question: "Hva er pris per m2 for garasje?", answer: "Garasje koster 15 000-35 000 kr per m2. Ferdiggarasje er rimeligst: 12 000-20 000 kr/m2. Isolert stedsbygd: 20 000-30 000 kr/m2. Murgarasje: 25 000-35 000 kr/m2." },
  { question: "Hvorfor varierer m2-prisen sa mye?", answer: "De storste faktorene er: standard (kan doble prisen), beliggenhet (Oslo +15%), kompleksitet (enkle former er billigst), grunnforhold, og om prosjektet inkluderer vatrom (bad/kjokken er dyrest per m2)." },
  { question: "Hva er pris per m2 for terrasse?", answer: "Terrasse koster 2 000-7 000 kr per m2. Trykkimpregnert: 1 500-3 000 kr/m2. Kompositt: 3 000-5 000 kr/m2. Kebony: 4 000-6 000 kr/m2. Inkludert baerekonstruksjon og montering." },
  { question: "Hva er pris per m2 for maling?", answer: "Innvendig maling: 80-200 kr per m2 veggflate. Utvendig: 300-600 kr/m2 fasadeflate. Maling er det billigste oppussingstiltaket per m2, men gir mest visuell effekt." },
  { question: "Hvor mye koster det a bygge per m2 i Oslo vs resten?", answer: "Oslo er 10-15% dyrere enn landssnittet. En enebolig som koster 37 000 kr/m2 nasjonalt koster ca. 41 000-43 000 kr/m2 i Oslo. Bergen og Trondheim er 3-5% over snittet." },
];

export const metadata: Metadata = { title: "Pris per m2 — Hva koster det per kvadratmeter? 2026", description: "Komplett oversikt over pris per m2 for alle byggeprosjekter i Norge. Nybygg, bad, kjokken, oppussing, tilbygg og mer.", alternates: { canonical: "https://byggepris.no/pris-per-kvm" }, openGraph: { title: "Pris per m2 i Norge", description: "Komplett m2-prisoversikt for bygging.", url: "https://byggepris.no/pris-per-kvm", type: "article" } };

export default function Page() {
  return (<main className="pt-20"><BreadcrumbSchema items={[{name:"Hjem",href:"/"},{name:"Pris per m2",href:"/pris-per-kvm"}]} /><ArticleSchema title="Pris per m2 i Norge" description="Komplett m2-prisoversikt." slug="pris-per-kvm" /><FAQSchema items={faq} /><article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14"><FadeInUp>
    <nav className="text-sm text-text-muted mb-6"><Link href="/" className="hover:text-accent-yellow">Hjem</Link> / <span className="text-text-secondary">Pris per m2</span></nav>
    <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-text-primary mb-6">Pris per m2 for alle byggeprosjekter</h1>
    <p className="text-lg text-text-secondary mb-6">M2-prisen varierer enormt basert pa prosjekttype — fra 80 kr/m2 for innvendig maling til 80 000 kr/m2 for luksuriøst bad. Her er en komplett oversikt som hjelper deg a budsjettere riktig.</p>

    <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Komplett m2-prisoversikt</h2>
    <div className="bg-bg-card border border-surface-border rounded-xl overflow-hidden my-6"><table className="w-full text-sm"><thead><tr className="text-left text-xs text-text-muted uppercase tracking-wider border-b border-surface-border"><th className="px-5 py-3">Prosjekttype</th><th className="px-5 py-3">Lav</th><th className="px-5 py-3">Normal</th><th className="px-5 py-3">Hoy</th></tr></thead><tbody className="divide-y divide-surface-border">
      {[["Bad","35 000","55 000","80 000"],["Kjokken","20 000","40 000","70 000"],["Tilbygg","28 000","45 000","65 000"],["Nybygg enebolig","25 000","37 000","55 000"],["Totalrenovering","12 000","25 000","40 000"],["Hytte","20 000","35 000","50 000"],["Kjeller (innredning)","15 000","25 000","35 000"],["Garasje","12 000","22 000","35 000"],["Oppussing","6 000","15 000","25 000"],["Flipping","5 000","12 000","20 000"],["Terrasse","1 500","4 000","7 000"],["Tak (omlegging)","800","1 500","4 000"],["Fasade (maling)","300","450","600"],["Gulv","400","800","1 500"],["Maling innvendig","80","140","200"]].map(([n,l,m,h])=>(<tr key={n}><td className="px-5 py-3 text-text-primary font-medium">{n}</td><td className="px-5 py-3 font-mono text-text-secondary">{l} kr</td><td className="px-5 py-3 font-mono text-accent-yellow">{m} kr</td><td className="px-5 py-3 font-mono text-text-secondary">{h} kr</td></tr>))}
    </tbody></table></div>

    <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Regionale prisforskjeller</h2>
    <div className="bg-bg-card border border-surface-border rounded-xl p-6 my-6"><div className="space-y-2 text-sm">
      {[["Oslo og Akershus","+10-15%","text-accent-yellow"],["Stavanger","+5-10%","text-accent-amber"],["Tromso og Nord-Norge","+5-10%","text-accent-amber"],["Bergen og Trondheim","+3-5%","text-text-secondary"],["Kristiansand, Drammen","Gjennomsnitt","text-text-tertiary"],["Sorlandet, Midt-Norge","-3-5%","text-text-tertiary"]].map(([r,p,c])=>(<div key={r} className="flex justify-between"><span className="text-text-secondary">{r}</span><span className={`font-mono font-semibold ${c}`}>{p}</span></div>))}
    </div></div>

    <p className="text-text-secondary mb-6">Se detaljerte prisguider for hvert prosjekttype: <Link href="/bygge-hus" className="text-accent-yellow hover:underline">bygge hus</Link>, <Link href="/bad" className="text-accent-yellow hover:underline">bad</Link>, <Link href="/kjokken" className="text-accent-yellow hover:underline">kjokken</Link>, <Link href="/oppussing" className="text-accent-yellow hover:underline">oppussing</Link> og <Link href="/tilbygg" className="text-accent-yellow hover:underline">tilbygg</Link>.</p>

    <div className="mt-10"><Link href="/kalkulator" className="inline-flex items-center gap-2 px-6 py-3 bg-accent-yellow text-bg-primary font-display font-bold rounded-xl hover:bg-accent-warm transition-colors shadow-glow-sm"><IconCalculator size={18} /> Beregn ditt prosjekt</Link></div>
  </FadeInUp></article></main>);
}
