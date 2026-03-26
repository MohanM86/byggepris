import { Metadata } from "next";
import Link from "next/link";
import { FadeInUp } from "@/components/ui/animations";
import { IconCalculator } from "@/components/icons";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "@/components/seo/JsonLd";

const faq = [
  { question: "Hva koster drenering rundt hus?", answer: "Drenering rundt et helt hus koster typisk 80 000–200 000 kr. Per løpemeter koster det 2 000–4 000 kr. For en husvegg på 10 meter betyr det 20 000–40 000 kr. Inkluderer graving, drensrør, singel og tilbakefylling." },
  { question: "Når må man drenere?", answer: "Når du opplever fukt i kjeller, synlig vann langs grunnmur, mugg eller lukt i kjeller, saltutslag på vegg eller sprekker i grunnmur. Drenering har vanligvis levetid på 20–30 år, så hus eldre enn dette bør sjekkes." },
  { question: "Kan man drenere selv?", answer: "Graving med maskin bør gjøres av fagfolk. Du kan spare noe ved å gjøre tilbakefylling og overflatearbeid selv. Feil drenering kan gjøre vondt verre med vannskader, så dette er ikke stedet å spare." },
  { question: "Hva koster graving for drenering?", answer: "Graving koster 800–2 000 kr per time for maskin med fører. For en husvegg tar graving typisk 1–2 dager. Tilkomst påvirker prisen mye, trang tilkomst kan doble kostnaden." },
  { question: "Hva inkluderer drenering?", answer: "Komplett drenering inkluderer graving langs grunnmur, ny fuktsikring og membran på mur, drensrør i riktig fall, singel rundt rør, geotekstil, tilkobling til avløp eller infiltrasjon og tilbakefylling." },
  { question: "Hva koster fuktsikring av kjeller?", answer: "Fuktsikring utvendig koster 1 500–3 000 kr per m² vegg inkl. graving. Innvendig fuktsikring koster 800–2 000 kr per m² men løser bare symptomene. Utvendig er alltid best." },
  { question: "Må man søke for drenering?", answer: "Nei, drenering krever normalt ikke byggesøknad. Men tilkobling til kommunalt overvannsnett kan kreve tillatelse. Sjekk med kommunen hvis du endrer avrenning mot nabotomt." },
  { question: "Hva er forskjellen på drenering og fuktsikring?", answer: "Drenering leder vann bort fra huset med rør i bakken. Fuktsikring er membran og belegg på grunnmuren som hindrer fukt i å trenge gjennom. Begge bør gjøres samtidig for best resultat." },
  { question: "Hvor lenge varer drenering?", answer: "Moderne drenering varer 25–40 år. Eldre systemer med teglrør kan ha kortere levetid. Filter og geotekstil hindrer tilstopping. Årlig sjekk av sluk og utløp forlenger levetiden." },
  { question: "Hva koster det å legge ny drenskum?", answer: "Ny drenskum koster 5 000–15 000 kr installert. Nødvendig for inspeksjon og vedlikehold. Bør plasseres i hvert hjørne av huset og der drensrøret endrer retning." },
];

export const metadata: Metadata = {
  title: "Hva koster drenering? Priser for drenering rundt hus 2026",
  description: "Drenering koster 2 000–4 000 kr per løpemeter. Rundt helt hus 80 000–200 000 kr. Se komplett guide med priser og tips.",
  alternates: { canonical: "https://byggepris.no/drenering" },
};

export default function Page() {
  return (
    <main className="pt-20">
      <BreadcrumbSchema items={[{name:"Hjem",href:"/"},{name:"Drenering",href:"/drenering"}]} />
      <ArticleSchema title="Hva koster drenering?" description="Prisguide for drenering i Norge." slug="drenering" />
      <FAQSchema items={faq} />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14"><FadeInUp>
        <nav className="text-sm text-text-muted mb-6"><Link href="/" className="hover:text-accent-yellow">Hjem</Link> / <span className="text-text-secondary">Drenering</span></nav>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent-yellow/20 bg-accent-yellow/5 mb-4"><span className="text-accent-yellow text-xs font-semibold">OPPDATERT 2026</span></div>
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-text-primary mb-4">Hva koster drenering?</h1>
        <p className="text-lg text-text-secondary mb-8">Drenering koster typisk <strong className="text-text-primary">2 000–4 000 kr per løpemeter</strong>. Rundt et helt hus betyr det 80 000–200 000 kr. Dårlig drenering er den vanligste årsaken til fuktskader i kjeller og kan føre til skader for hundretusener hvis det ikke fikses.</p>

        <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Komplett pristabell</h2>
        <div className="bg-bg-card border border-surface-border rounded-2xl overflow-hidden my-6">
          <table className="w-full text-sm"><thead><tr className="text-left text-xs text-text-muted uppercase tracking-wider border-b border-surface-border"><th className="px-5 py-3">Jobb</th><th className="px-5 py-3">Typisk pris</th></tr></thead>
            <tbody className="divide-y divide-surface-border">
              {[["Drenering per løpemeter","2 000–4 000 kr"],["Drenering en husvegg (10 m)","20 000–40 000 kr"],["Drenering rundt helt hus","80 000–200 000 kr"],["Fuktsikring grunnmur per m²","1 500–3 000 kr"],["Ny drenskum per stk","5 000–15 000 kr"],["Graving per time (maskin)","800–2 000 kr"],["Innvendig fuktsikring per m²","800–2 000 kr"],["Radonsperre (tillegg)","200–500 kr/m²"]].map(([j,p])=>(
                <tr key={j} className="hover:bg-bg-tertiary/30"><td className="px-5 py-3 text-text-primary font-medium">{j}</td><td className="px-5 py-3 font-mono text-accent-yellow">{p}</td></tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Tegn på at du trenger ny drenering</h2>
        <div className="space-y-3 text-text-secondary mb-6">
          <p>Fukt eller vanninntrengning i kjeller er det tydeligste tegnet. Andre varselsignaler er mugg eller muggen lukt, saltutslag på grunnmur, sprekker i kjellervegger og synlig vann langs husveggen etter regn.</p>
          <p>Hus bygget før 1990 har ofte utdatert drenering som nærmer seg slutten av levetiden. En inspeksjon koster 3 000–8 000 kr og avdekker om dreneringen må byttes.</p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          {[{href:"/kjeller",label:"Kjeller"},{href:"/grunnarbeid",label:"Grunnarbeid"},{href:"/bygge-hus",label:"Bygge hus"}].map(l=>(
            <Link key={l.href} href={l.href} className="px-4 py-2 bg-bg-card border border-surface-border rounded-xl text-sm text-text-secondary hover:text-accent-yellow hover:border-accent-yellow/30 transition-all">{l.label}</Link>
          ))}
          <Link href="/kalkulator" className="px-4 py-2 bg-accent-yellow/10 border border-accent-yellow/20 rounded-xl text-sm text-accent-yellow font-semibold hover:bg-accent-yellow/20 transition-all flex items-center gap-1"><IconCalculator size={14} /> Bruk kalkulator</Link>
        </div>
      </FadeInUp></article>
    </main>
  );
}
