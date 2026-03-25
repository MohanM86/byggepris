import { Metadata } from "next";
import Link from "next/link";
import { FadeInUp } from "@/components/ui/animations";
import { IconCalculator } from "@/components/icons";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "@/components/seo/JsonLd";

const faq = [
  { question: "Hva er gjennomsnittlig pris per m² for nybygg i Norge?", answer: "Gjennomsnittlig pris per m² for nybygg er ca. 35 000-40 000 kr med normal standard. Enkel standard starter fra 25 000 kr/m², høy standard kan overstige 55 000 kr/m²." },
  { question: "Hva er pris per m² for bad?", answer: "Baderomsrenovering koster typisk 40 000-80 000 kr per m². Et standard bad på 6 m² koster dermed 240 000-480 000 kr." },
  { question: "Hvorfor er m²-prisen høyere for små prosjekter?", answer: "Små prosjekter har høyere m²-pris fordi faste kostnader som rigg, transport og prosjektledelse fordeles på færre kvadratmeter. Et 5 m² bad har høyere m²-pris enn et 15 m² bad." },
  { question: "Inkluderer m²-prisen tomt?", answer: "Nei, m²-priser for bygging inkluderer normalt ikke tomtekjøp. De inkluderer materialer og arbeid for selve bygget. Grunnarbeid, prosjektering og gebyr er ofte heller ikke inkludert." },
];

export const metadata: Metadata = {
  title: "Pris per m² i Norge – Oppdatert oversikt for bygging og renovering",
  description: "Oppdatert oversikt over pris per m² for alle typer byggeprosjekter i Norge. Se m²-priser for nybygg, tilbygg, bad, kjøkken, oppussing og mer.",
  alternates: { canonical: "https://byggepris.no/pris-per-kvm" },
  openGraph: { title: "Pris per m² i Norge", description: "Komplett m²-prisoversikt for bygging og renovering.", url: "https://byggepris.no/pris-per-kvm", type: "article" },
};

export default function Page() {
  return (
    <main className="pt-20">
      <BreadcrumbSchema items={[{ name: "Hjem", href: "/" }, { name: "Pris per m²", href: "/pris-per-kvm" }]} />
      <ArticleSchema title="Pris per m² i Norge" description="Komplett oversikt over m²-priser for bygging og renovering." slug="pris-per-kvm" />
      <FAQSchema items={faq} />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <FadeInUp>
          <nav className="text-sm text-text-muted mb-6"><Link href="/" className="hover:text-accent-yellow">Hjem</Link> / <span className="text-text-secondary">Pris per m²</span></nav>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-text-primary mb-6">Pris per m² i Norge – Komplett oversikt</h1>

          <p className="text-lg text-text-secondary mb-6">Pris per kvadratmeter er det vanligste målet for å sammenligne byggekostnader i Norge. Prisen varierer fra ca. 5 000 kr/m² for enkel oppussing til over 80 000 kr/m² for luksuriøs baderomsrenovering. Denne guiden gir deg en komplett oversikt over hva du kan forvente å betale per m² for alle typer byggeprosjekter.</p>

          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Komplett m²-pristabell</h2>
          <p className="text-text-secondary mb-4">Tabellen viser pris per m² for de vanligste prosjekttypene, fordelt på tre standardnivåer. Prisene inkluderer materialer og arbeid, men normalt ikke tomt, grunnarbeid eller prosjektering.</p>

          <div className="bg-bg-card border border-surface-border rounded-2xl overflow-hidden my-6">
            <table className="w-full">
              <thead><tr className="text-left text-xs text-text-muted uppercase tracking-wider border-b border-surface-border"><th className="px-5 py-3">Prosjekttype</th><th className="px-5 py-3">Enkel</th><th className="px-5 py-3">Normal</th><th className="px-5 py-3">Høy</th></tr></thead>
              <tbody className="divide-y divide-surface-border text-sm">
                <tr className="hover:bg-bg-tertiary/30"><td className="px-5 py-3 text-text-primary font-medium">Nybygg enebolig</td><td className="px-5 py-3 font-mono text-text-secondary">25 000 kr</td><td className="px-5 py-3 font-mono text-accent-yellow">35 000 kr</td><td className="px-5 py-3 font-mono text-text-secondary">55 000 kr</td></tr>
                <tr className="hover:bg-bg-tertiary/30"><td className="px-5 py-3 text-text-primary font-medium">Tilbygg</td><td className="px-5 py-3 font-mono text-text-secondary">28 000 kr</td><td className="px-5 py-3 font-mono text-accent-yellow">45 000 kr</td><td className="px-5 py-3 font-mono text-text-secondary">65 000 kr</td></tr>
                <tr className="hover:bg-bg-tertiary/30"><td className="px-5 py-3 text-text-primary font-medium">Baderomsrenovering</td><td className="px-5 py-3 font-mono text-text-secondary">35 000 kr</td><td className="px-5 py-3 font-mono text-accent-yellow">55 000 kr</td><td className="px-5 py-3 font-mono text-text-secondary">80 000 kr</td></tr>
                <tr className="hover:bg-bg-tertiary/30"><td className="px-5 py-3 text-text-primary font-medium">Kjøkken</td><td className="px-5 py-3 font-mono text-text-secondary">20 000 kr</td><td className="px-5 py-3 font-mono text-accent-yellow">40 000 kr</td><td className="px-5 py-3 font-mono text-text-secondary">70 000 kr</td></tr>
                <tr className="hover:bg-bg-tertiary/30"><td className="px-5 py-3 text-text-primary font-medium">Totalrenovering</td><td className="px-5 py-3 font-mono text-text-secondary">12 000 kr</td><td className="px-5 py-3 font-mono text-accent-yellow">25 000 kr</td><td className="px-5 py-3 font-mono text-text-secondary">40 000 kr</td></tr>
                <tr className="hover:bg-bg-tertiary/30"><td className="px-5 py-3 text-text-primary font-medium">Oppussing (generell)</td><td className="px-5 py-3 font-mono text-text-secondary">6 000 kr</td><td className="px-5 py-3 font-mono text-accent-yellow">15 000 kr</td><td className="px-5 py-3 font-mono text-text-secondary">25 000 kr</td></tr>
                <tr className="hover:bg-bg-tertiary/30"><td className="px-5 py-3 text-text-primary font-medium">Garasje</td><td className="px-5 py-3 font-mono text-text-secondary">12 000 kr</td><td className="px-5 py-3 font-mono text-accent-yellow">22 000 kr</td><td className="px-5 py-3 font-mono text-text-secondary">35 000 kr</td></tr>
                <tr className="hover:bg-bg-tertiary/30"><td className="px-5 py-3 text-text-primary font-medium">Hytte</td><td className="px-5 py-3 font-mono text-text-secondary">20 000 kr</td><td className="px-5 py-3 font-mono text-accent-yellow">35 000 kr</td><td className="px-5 py-3 font-mono text-text-secondary">50 000 kr</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Hvorfor varierer m²-prisen så mye?</h2>
          <p className="text-text-secondary mb-4">Prisforskjellen mellom laveste og høyeste m²-pris for samme prosjekttype kan være 100-200%. De viktigste årsakene er:</p>

          <h3 className="font-display font-bold text-lg text-text-primary mt-8 mb-3">Prosjektets størrelse</h3>
          <p className="text-text-secondary mb-4">M²-prisen faller med størrelse. Et bad på 4 m² kan koste 70 000 kr/m², mens et bad på 12 m² kanskje koster 45 000 kr/m². Årsaken er at faste kostnader som rigg, transport, prosjektledelse og mobilisering fordeles på flere m². Tilsvarende er m²-prisen for et hus på 200 m² lavere enn for et på 100 m², fordi grunnarbeid, prosjektering og takareal ikke dobles selv om arealet gjør det.</p>

          <h3 className="font-display font-bold text-lg text-text-primary mt-8 mb-3">Materialvalg</h3>
          <p className="text-text-secondary mb-4">Materialer utgjør 30-45% av totalprisen, og her er variasjonen enorm. Et gulv i vinyl koster 300-600 kr/m² inkl. legging, mens eikeparkett koster 800-1 500 kr/m². Fliser til bad varierer fra 300 kr/m² til 3 000+ kr/m² for naturstein. Kjøkkeninnredning spenner fra 30 000 kr (IKEA) til 300 000+ kr (skreddersydd).</p>

          <h3 className="font-display font-bold text-lg text-text-primary mt-8 mb-3">Region</h3>
          <p className="text-text-secondary mb-4">Håndverkerkostnader varierer mellom regioner. Oslo og Stavanger har de høyeste timeprisene (700-900 kr/t), mens Midt-Norge og Sørlandet ofte er 10-20% rimeligere. Transportkostnader for materialer kan også øke m²-prisen i avsidesliggende områder.</p>

          <h3 className="font-display font-bold text-lg text-text-primary mt-8 mb-3">Romtype</h3>
          <p className="text-text-secondary mb-4">Våtrom (bad, vaskerom) er alltid dyrere per m² enn tørre rom fordi de krever membranarbeid, rørlegger og flislegger. En stue koster kanskje 8 000-15 000 kr/m² å renovere, mens et bad koster 40 000-80 000 kr/m². Kjøkken ligger et sted imellom avhengig av innredningsvalg.</p>

          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Regionale prisforskjeller per m²</h2>
          <div className="bg-bg-card border border-surface-border rounded-xl p-6 my-6">
            <p className="text-xs text-text-muted mb-4">Avvik fra landsgjennomsnittet for nybygg, normal standard</p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-text-secondary">Oslo og Akershus</span><span className="font-mono text-accent-yellow">+10-15%</span></div>
              <div className="flex justify-between"><span className="text-text-secondary">Stavanger</span><span className="font-mono text-accent-amber">+5-10%</span></div>
              <div className="flex justify-between"><span className="text-text-secondary">Tromsø</span><span className="font-mono text-accent-amber">+5-10%</span></div>
              <div className="flex justify-between"><span className="text-text-secondary">Bergen</span><span className="font-mono text-text-primary">+3-5%</span></div>
              <div className="flex justify-between"><span className="text-text-secondary">Trondheim</span><span className="font-mono text-text-primary">+2-4%</span></div>
              <div className="flex justify-between"><span className="text-text-secondary">Kristiansand, Drammen</span><span className="font-mono text-text-tertiary">Gjennomsnitt</span></div>
              <div className="flex justify-between"><span className="text-text-secondary">Sørlandet, Midt-Norge</span><span className="font-mono text-steel-400">-3-5%</span></div>
            </div>
          </div>

          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Slik bruker du m²-prisen riktig</h2>
          <p className="text-text-secondary mb-4">M²-prisen er nyttig som utgangspunkt for budsjettering, men vær oppmerksom på disse fallgruvene:</p>
          <div className="space-y-4 text-text-secondary mb-6">
            <p><strong className="text-text-primary">Legg til ekstra for små prosjekter.</strong> Under 20 m² bør du legge 10-20% på oppgitt m²-pris fordi faste kostnader veier tyngre.</p>
            <p><strong className="text-text-primary">Ikke glem tilleggskostnadene.</strong> M²-priser inkluderer sjelden tomt, grunnarbeid, prosjektering, gebyrer eller uforutsette kostnader. Disse kan utgjøre 15-30% ekstra.</p>
            <p><strong className="text-text-primary">Sammenlign likt med likt.</strong> Når du sammenligner tilbud, sjekk hva som er inkludert. Noen oppgir m²-pris ekskl. mva, andre inkl. Noen inkluderer riving, andre ikke.</p>
            <p><strong className="text-text-primary">Bruk m²-pris for ballpark, tilbud for presisjon.</strong> M²-priser gir et godt estimat, men innhent alltid konkrete tilbud basert på tegninger og beskrivelser for nøyaktig pris.</p>
          </div>

          <div className="mt-10">
            <Link href="/kalkulator" className="inline-flex items-center gap-2 px-6 py-3 bg-accent-yellow text-bg-primary font-display font-bold rounded-xl hover:bg-accent-warm transition-colors shadow-glow-sm">
              <IconCalculator size={18} /> Beregn m²-pris for ditt prosjekt
            </Link>
          </div>
        </FadeInUp>
      </article>
    </main>
  );
}
