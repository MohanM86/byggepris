import { Metadata } from "next";
import Link from "next/link";
import { FadeInUp } from "@/components/ui/animations";
import { IconCalculator, IconCheck } from "@/components/icons";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "@/components/seo/JsonLd";

const faq = [
  { question: "Hva koster etterisolering?", answer: "Etterisolering koster typisk 300–1 500 kr per m² avhengig av metode. Loft med blåseisolasjon koster 300–600 kr per m². Vegger utvendig koster 1 000–2 500 kr per m² inkl. ny kledning. Gulv koster 400–800 kr per m²." },
  { question: "Hva koster det å isolere loft?", answer: "Loftisolering koster 300–600 kr per m². Blåseisolasjon er billigst og mest effektivt for eksisterende loft. For et loft på 80 m² betyr det 24 000–48 000 kr. Kan spare 15–30 % på oppvarming." },
  { question: "Hva koster etterisolering av vegger?", answer: "Etterisolering av vegger utvendig koster 1 000–2 500 kr per m² inkl. ny vindsperre, isolasjon og kledning. For 150 m² fasade betyr det 150 000–375 000 kr. Innvendig etterisolering koster 500–1 200 kr per m²." },
  { question: "Lønner etterisolering seg?", answer: "Ja, for de fleste. Et dårlig isolert hus fra 1970 tallet bruker 30 000–50 000 kr mer i strøm per år enn et godt isolert. Loftisolering har typisk 3–5 års tilbakebetalingstid. Veggisolering tar 8–15 år." },
  { question: "Kan man isolere selv?", answer: "Loftisolering med matter kan du gjøre selv og spare 50 % av arbeidskostnaden. Blåseisolasjon krever spesialutstyr og fagfolk. Veggisolering utvendig bør gjøres av fagfolk. Innvendig isolering med plater kan du gjøre selv." },
  { question: "Hva er best isolasjon?", answer: "Mineralull fra Glava eller Rockwool er mest brukt. Den har god isolasjonsevne, er brannbestandig og rimelig. EPS brukes i grunn og under gulv. XPS brukes i fuktutsatte områder. Treisolasjon fra Hunton er et miljøvennlig alternativ." },
  { question: "Hva koster det å isolere gulv?", answer: "Gulvisolering koster 400–800 kr per m². For et hus på 100 m² betyr det 40 000–80 000 kr. Krever ofte at gulvet rives opp. Isolasjon under betongplate ved nybygg er rimeligere med 150–300 kr per m²." },
  { question: "Hva koster blåseisolasjon?", answer: "Blåseisolasjon koster 300–500 kr per m² for loft, inkl. arbeid og materiale. Minimum bestilling er typisk 50 m². Raskere og billigere enn å legge matter manuelt. Fyller alle hulrom og spalter." },
  { question: "Hvor mye isolasjon trenger man?", answer: "TEK17 krever minimum 30–35 cm mineralull i tak og loft, 20–25 cm i vegger og 20–30 cm i gulv. Eldre hus har ofte bare 10–15 cm. Å gå fra 10 til 30 cm i loftet kan halvere varmetapet gjennom taket." },
  { question: "Får man støtte til etterisolering?", answer: "Enova tilbyr støtte til energitiltak i bolig, inkludert etterisolering. Støtten varierer men har vært opp til 20–30 % av kostnaden. Sjekk enova.no for gjeldende satser og krav." },
  { question: "Hva bør man isolere først?", answer: "Prioriter slik: Først loft fordi det er billigst og gir størst effekt. Deretter vinduer fordi de gir stor varmegevinst. Så vegger som har størst areal men er dyrere. Til slutt gulv som gir minst varmetap men bedre komfort." },
  { question: "Hva koster kryperomsisolering?", answer: "Kryperomsisolering koster 200–500 kr per m². For et kryperom på 80 m² betyr det 16 000–40 000 kr. Viktig for å unngå fuktp problemer og kaldt gulv. Ofte oversett men god investering." },
];

export const metadata: Metadata = {
  title: "Hva koster isolasjon? Priser for etterisolering 2026",
  description: "Etterisolering koster 300–1 500 kr/m². Se priser for loft, vegger, gulv og blåseisolasjon. Tips for energisparing og Enova støtte.",
  alternates: { canonical: "https://byggepris.no/isolasjon" },
  openGraph: { title: "Hva koster isolasjon?", description: "Etterisolering 300–1 500 kr/m².", url: "https://byggepris.no/isolasjon", type: "article" },
};

export default function Page() {
  return (
    <main className="pt-20">
      <BreadcrumbSchema items={[{ name: "Hjem", href: "/" }, { name: "Isolasjon", href: "/isolasjon" }]} />
      <ArticleSchema title="Hva koster isolasjon?" description="Prisguide for isolasjon og etterisolering." slug="isolasjon" />
      <FAQSchema items={faq} />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <FadeInUp>
          <nav className="text-sm text-text-muted mb-6"><Link href="/" className="hover:text-accent-yellow">Hjem</Link> / <span className="text-text-secondary">Isolasjon</span></nav>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent-yellow/20 bg-accent-yellow/5 mb-4"><span className="text-accent-yellow text-xs font-semibold">OPPDATERT 2026</span></div>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-text-primary mb-4">Hva koster etterisolering?</h1>
          <p className="text-lg text-text-secondary mb-8">Etterisolering koster typisk <strong className="text-text-primary">300–1 500 kr per m²</strong> avhengig av metode og område. Loftisolering er rimeligst og gir raskest tilbakebetaling. Et dårlig isolert hus kan bruke 30 000–50 000 kr mer i strøm per år enn nødvendig.</p>

          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Prisbarometer</h2>
          <div className="bg-bg-card border border-surface-border rounded-2xl overflow-hidden my-6">
            <table className="w-full text-sm"><thead><tr className="text-left text-xs text-text-muted uppercase tracking-wider border-b border-surface-border"><th className="px-5 py-3">Type</th><th className="px-5 py-3">Pris per m²</th><th className="px-5 py-3">100 m²</th><th className="px-5 py-3">Tilbakebetaling</th></tr></thead>
              <tbody className="divide-y divide-surface-border">
                {[["Loft med blåseisolasjon","300–500 kr","30 000–50 000 kr","3–5 år"],["Loft med matter","400–600 kr","40 000–60 000 kr","4–6 år"],["Vegger utvendig","1 000–2 500 kr","100 000–250 000 kr","8–15 år"],["Vegger innvendig","500–1 200 kr","50 000–120 000 kr","6–10 år"],["Gulv","400–800 kr","40 000–80 000 kr","5–8 år"],["Kryperom","200–500 kr","16 000–40 000 kr","3–5 år"]].map(([j,m,t,r])=>(
                  <tr key={j} className="hover:bg-bg-tertiary/30"><td className="px-5 py-3 text-text-primary font-medium">{j}</td><td className="px-5 py-3 font-mono text-accent-yellow">{m}</td><td className="px-5 py-3 font-mono text-text-secondary">{t}</td><td className="px-5 py-3 text-text-tertiary">{r}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Hva gir mest energisparing?</h2>
          <div className="space-y-3 text-text-secondary mb-6">
            <p><strong className="text-text-primary">1. Loft</strong> er billigst og gir størst effekt fordi varm luft stiger. Blåseisolasjon er raskest og rimeligst.</p>
            <p><strong className="text-text-primary">2. Vinduer</strong> gir stor varmegevinst ved bytte fra tolags til trelags. Se vår <Link href="/vinduer" className="text-accent-yellow hover:underline">vindusguide</Link>.</p>
            <p><strong className="text-text-primary">3. Vegger</strong> har størst areal og dermed stort potensial, men er dyrere å etterisolere.</p>
            <p><strong className="text-text-primary">4. Gulv</strong> gir minst varmetap men bedre komfort, særlig med gulvvarme.</p>
            <p>Kombiner med <Link href="/varmepumpe" className="text-accent-yellow hover:underline">varmepumpe</Link> for best totaleffekt.</p>
          </div>

          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Gjøre selv eller bruke fagfolk</h2>
          <div className="grid sm:grid-cols-2 gap-4 my-6">
            <div className="bg-bg-card border border-surface-border rounded-xl p-5">
              <p className="font-display font-bold text-accent-yellow mb-3">Kan gjøre selv</p>
              <div className="space-y-2">{["Legge isolasjonsmatter på loft","Innvendig isolering med plater","Tetting rundt vinduer og dører","Isolering av rør og ventiler","Dampsperre på innsiden"].map(t=>(<div key={t} className="flex gap-2 text-sm text-text-secondary"><IconCheck size={14} className="flex-shrink-0 text-accent-yellow mt-0.5"/><span>{t}</span></div>))}</div>
            </div>
            <div className="bg-bg-card border border-surface-border rounded-xl p-5">
              <p className="font-display font-bold text-text-primary mb-3">Bruk fagfolk for</p>
              <div className="space-y-2">{["Blåseisolasjon i loft og vegger","Utvendig etterisolering av fasade","Gulvisolering med oppgraving","Kryperomsisolering","Beregning av U verdi og behov"].map(t=>(<div key={t} className="flex gap-2 text-sm text-text-secondary"><IconCheck size={14} className="flex-shrink-0 text-text-tertiary mt-0.5"/><span>{t}</span></div>))}</div>
            </div>
          </div>

          <div className="mt-10 mb-6">
            <div className="flex flex-wrap gap-3">
              {[{href:"/varmepumpe",label:"Varmepumpe"},{href:"/vinduer",label:"Vinduer"},{href:"/fasade",label:"Fasade"},{href:"/tak",label:"Tak"},{href:"/bygge-hus",label:"Bygge hus"}].map(l=>(
                <Link key={l.href} href={l.href} className="px-4 py-2 bg-bg-card border border-surface-border rounded-xl text-sm text-text-secondary hover:text-accent-yellow hover:border-accent-yellow/30 transition-all">{l.label}</Link>
              ))}
              <Link href="/kalkulator" className="px-4 py-2 bg-accent-yellow/10 border border-accent-yellow/20 rounded-xl text-sm text-accent-yellow font-semibold hover:bg-accent-yellow/20 transition-all flex items-center gap-1"><IconCalculator size={14} /> Bruk kalkulator</Link>
            </div>
          </div>
        </FadeInUp>
      </article>
    </main>
  );
}
