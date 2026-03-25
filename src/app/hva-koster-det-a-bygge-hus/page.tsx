import { Metadata } from "next";
import Link from "next/link";
import { FadeInUp } from "@/components/ui/animations";
import { IconCalculator } from "@/components/icons";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "@/components/seo/JsonLd";

const faq = [
  { question: "Hva koster det å bygge hus på 150 m² i Norge?", answer: "Et hus på 150 m² koster typisk mellom 4,5 og 8,5 millioner kroner avhengig av standard. Med normal standard bør du regne ca. 5,3-6,5 millioner kroner inkludert grunnarbeid, prosjektering og buffer." },
  { question: "Hva er pris per m² for nybygg i Norge?", answer: "Pris per m² for nybygg ligger typisk mellom 30 000 og 55 000 kr. Enkel standard starter fra ca. 25 000 kr/m², normal standard rundt 35 000-40 000 kr/m², og høy standard over 45 000 kr/m²." },
  { question: "Er det billigere å bygge ferdighus?", answer: "Ja, ferdighus er typisk 15-25% rimeligere enn arkitekttegnet hus fordi produksjonen er standardisert. Et ferdighus på 150 m² koster vanligvis 3,5-5,5 millioner kroner." },
  { question: "Hva er de største kostnadene ved husbygging?", answer: "De største kostnadspostene er råbygg og konstruksjon (30-40%), innredning og overflater (25-35%), VVS og elektro (15-20%), grunnarbeid (8-15%) og prosjektering (5-10%)." },
  { question: "Hvor lang tid tar det å bygge hus?", answer: "Selve byggeprosessen tar vanligvis 8-12 måneder. Med planlegging, arkitekt og byggesøknad bør du regne 12-18 måneder totalt fra idé til innflytting." },
  { question: "Koster det mer å bygge i Oslo?", answer: "Ja, Oslo er typisk 10-15% dyrere enn landsgjennomsnittet. Stavanger og Tromsø er også over snittet med 5-10% påslag." },
];

export const metadata: Metadata = {
  title: "Hva koster det å bygge hus i Norge? Komplett prisguide 2025",
  description: "Komplett guide til hva det koster å bygge hus i Norge. Typisk pris 30 000-55 000 kr per m². Se priseksempler, kostnadsfordeling og kalkulator.",
  alternates: { canonical: "https://byggepris.no/hva-koster-det-a-bygge-hus" },
  openGraph: { title: "Hva koster det å bygge hus i Norge?", description: "Typisk pris 30 000-55 000 kr per m². Komplett prisguide.", url: "https://byggepris.no/hva-koster-det-a-bygge-hus", type: "article" },
};

export default function Page() {
  return (
    <main className="pt-20">
      <BreadcrumbSchema items={[{ name: "Hjem", href: "/" }, { name: "Hva koster det å bygge hus?", href: "/hva-koster-det-a-bygge-hus" }]} />
      <ArticleSchema title="Hva koster det å bygge hus i Norge?" description="Komplett guide til husbyggkostnader i Norge." slug="hva-koster-det-a-bygge-hus" />
      <FAQSchema items={faq} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <FadeInUp>
          <nav className="text-sm text-text-muted mb-6">
            <Link href="/" className="hover:text-accent-yellow">Hjem</Link> / <span className="text-text-secondary">Hva koster det å bygge hus?</span>
          </nav>

          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-text-primary mb-6">
            Hva koster det å bygge hus i Norge?
          </h1>

          {/* Direct answer for AI extraction */}
          <p className="text-lg text-text-secondary mb-6">
            Å bygge hus i Norge koster typisk mellom 30 000 og 55 000 kr per kvadratmeter avhengig av standard, beliggenhet og kompleksitet. For en gjennomsnittlig enebolig på 150 m² betyr det en totalkostnad på 4,5 til 8,5 millioner kroner inkludert grunnarbeid og prosjektering.
          </p>

          <div className="bg-bg-card border border-surface-border rounded-2xl p-6 mb-8">
            <h2 className="font-display font-bold text-sm text-text-tertiary uppercase tracking-wider mb-4">Hurtigoversikt: Pris for husbygging</h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between"><span className="text-text-secondary">Pris per m² (normal standard)</span><span className="font-mono text-text-primary font-semibold">35 000 – 40 000 kr</span></div>
              <div className="flex justify-between"><span className="text-text-secondary">Pris per m² (enkel standard)</span><span className="font-mono text-text-primary">25 000 – 30 000 kr</span></div>
              <div className="flex justify-between"><span className="text-text-secondary">Pris per m² (høy standard)</span><span className="font-mono text-text-primary">45 000 – 55 000 kr</span></div>
              <div className="flex justify-between"><span className="text-text-secondary">Typisk enebolig 120 m²</span><span className="font-mono text-text-primary">3 600 000 – 6 600 000 kr</span></div>
              <div className="flex justify-between"><span className="text-text-secondary">Typisk enebolig 150 m²</span><span className="font-mono text-text-primary">4 500 000 – 8 250 000 kr</span></div>
              <div className="flex justify-between"><span className="text-text-secondary">Typisk enebolig 200 m²</span><span className="font-mono text-text-primary">6 000 000 – 11 000 000 kr</span></div>
              <div className="flex justify-between"><span className="text-text-secondary">Typisk byggetid</span><span className="font-mono text-text-primary">8 – 12 måneder</span></div>
            </div>
          </div>

          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Detaljert kostnadsfordeling</h2>
          <p className="text-text-secondary mb-4">
            Når du bygger hus er det viktig å forstå hvor pengene faktisk går. Mange fokuserer kun på prisen for selve huset, men glemmer at tomt, grunnarbeid, prosjektering og uforutsette kostnader kan legge 20-40% på totalbudsjettet.
          </p>

          <div className="bg-bg-card border border-surface-border rounded-xl p-6 my-6">
            <p className="font-display font-bold text-text-primary mb-4">Priseksempel: Enebolig 150 m², normal standard</p>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between"><span className="text-text-secondary">Råbygg og konstruksjon</span><span className="font-mono text-text-primary">1 800 000 – 2 400 000 kr</span></div>
              <div className="flex justify-between"><span className="text-text-secondary">Innredning (kjøkken, bad, overflater)</span><span className="font-mono text-text-primary">800 000 – 1 500 000 kr</span></div>
              <div className="flex justify-between"><span className="text-text-secondary">VVS og rørlegger</span><span className="font-mono text-text-primary">300 000 – 500 000 kr</span></div>
              <div className="flex justify-between"><span className="text-text-secondary">Elektrisk installasjon</span><span className="font-mono text-text-primary">250 000 – 450 000 kr</span></div>
              <div className="flex justify-between"><span className="text-text-secondary">Vinduer og ytterdører</span><span className="font-mono text-text-primary">200 000 – 500 000 kr</span></div>
              <div className="flex justify-between"><span className="text-text-secondary">Grunnarbeid og fundamentering</span><span className="font-mono text-text-primary">300 000 – 600 000 kr</span></div>
              <div className="flex justify-between"><span className="text-text-secondary">Prosjektering og arkitekt</span><span className="font-mono text-text-primary">250 000 – 500 000 kr</span></div>
              <div className="flex justify-between"><span className="text-text-secondary">Byggesøknad og gebyrer</span><span className="font-mono text-text-primary">50 000 – 150 000 kr</span></div>
              <div className="flex justify-between"><span className="text-text-secondary">Utendørs (terrasse, innkjørsel, hage)</span><span className="font-mono text-text-primary">200 000 – 600 000 kr</span></div>
              <div className="flex justify-between border-t border-surface-border pt-3 mt-3"><span className="text-accent-amber font-semibold">Buffer for uforutsette kostnader (10-15%)</span><span className="font-mono text-accent-yellow font-semibold">400 000 – 700 000 kr</span></div>
              <div className="flex justify-between border-t border-surface-border pt-3"><span className="text-text-primary font-bold">Totalt estimat</span><span className="font-mono text-accent-yellow font-bold text-base">4 550 000 – 7 900 000 kr</span></div>
            </div>
          </div>

          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Hva påvirker prisen mest?</h2>
          <p className="text-text-secondary mb-4">
            Prisforskjellen mellom det billigste og dyreste huset er enorm. Her er de viktigste faktorene som bestemmer hvor på skalaen ditt prosjekt havner:
          </p>

          <h3 className="font-display font-bold text-lg text-text-primary mt-8 mb-3">Standard og materialvalg</h3>
          <p className="text-text-secondary mb-4">
            Standard er den absolutt viktigste kostnadsdriveren. Forskjellen mellom enkel og høy standard kan være 50-100% i prisøkning. Valg av kjøkken, bad, gulv, vinduer og overflater utgjør en stor del av totalbudsjettet. Et IKEA-kjøkken koster 50 000-100 000 kr, mens et skreddersydd kjøkken kan koste 300 000+ kr. Tilsvarende forskjeller finnes for bad, gulv og alle andre materialer.
          </p>

          <h3 className="font-display font-bold text-lg text-text-primary mt-8 mb-3">Beliggenhet</h3>
          <p className="text-text-secondary mb-4">
            Byggepriser varierer mellom regioner. Oslo og Akershus er typisk 10-15% dyrere enn landsgjennomsnittet, primært på grunn av høyere lønnskostnader og stor etterspørsel etter håndverkere. Stavanger og Tromsø ligger 5-10% over snittet. Sørlandet og deler av Midt-Norge har lavere priser. Transportkostnader for materialer kan også øke prisen i avsidesliggende områder.
          </p>

          <h3 className="font-display font-bold text-lg text-text-primary mt-8 mb-3">Husets form og kompleksitet</h3>
          <p className="text-text-secondary mb-4">
            Enkle, rektangulære hus med standard takhelling er billigst å bygge. Hvert hjørne, hver vinkel og hvert nivåforskjell øker kostnaden. Et hus med mange hjørner, takopplett, store glassfasader eller spesialtilpasset arkitektur kan koste 20-40% mer enn et tilsvarende hus med enkel form. Velg form med omhu — det er her mange sparer mest uten å tape på kvalitet.
          </p>

          <h3 className="font-display font-bold text-lg text-text-primary mt-8 mb-3">Grunnforhold</h3>
          <p className="text-text-secondary mb-4">
            Dårlige grunnforhold kan legge hundretusener på budsjettet. Fjell som må sprengges, leire som krever pæling, eller høy grunnvannstand som krever ekstra drenering — alt dette påvirker fundamenteringskostnaden betydelig. En geoteknisk undersøkelse (10 000-30 000 kr) er en god investering for å avdekke overraskelser før du starter.
          </p>

          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Ferdighus vs arkitekttegnet</h2>
          <p className="text-text-secondary mb-4">
            Valget mellom ferdighus og arkitekttegnet hus er et av de viktigste valgene du tar, og det har stor innvirkning på prisen:
          </p>
          <div className="bg-bg-card border border-surface-border rounded-xl p-6 my-6">
            <div className="grid sm:grid-cols-2 gap-6 text-sm">
              <div>
                <p className="font-semibold text-accent-yellow mb-3">Ferdighus</p>
                <div className="space-y-2 text-text-secondary">
                  <p><strong className="text-text-primary">Pris:</strong> 25 000-40 000 kr/m²</p>
                  <p><strong className="text-text-primary">Byggetid:</strong> 4-8 måneder</p>
                  <p><strong className="text-text-primary">Fordeler:</strong> Forutsigbar pris, rask leveranse, velprøvde løsninger</p>
                  <p><strong className="text-text-primary">Ulemper:</strong> Begrenset tilpasning, mindre unikt</p>
                  <p><strong className="text-text-primary">Best for:</strong> De som vil ha god kvalitet til forutsigbar pris</p>
                </div>
              </div>
              <div>
                <p className="font-semibold text-text-primary mb-3">Arkitekttegnet</p>
                <div className="space-y-2 text-text-secondary">
                  <p><strong className="text-text-primary">Pris:</strong> 35 000-55 000+ kr/m²</p>
                  <p><strong className="text-text-primary">Byggetid:</strong> 8-14 måneder (+ planlegging)</p>
                  <p><strong className="text-text-primary">Fordeler:</strong> Full designfrihet, tilpasset tomten, unikt</p>
                  <p><strong className="text-text-primary">Ulemper:</strong> Dyrere, lengre prosess, mer uforutsigbart</p>
                  <p><strong className="text-text-primary">Best for:</strong> Krevende tomter, spesielle ønsker, høy standard</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Skjulte kostnader mange glemmer</h2>
          <p className="text-text-secondary mb-4">
            Mange som skal bygge hus budsjetterer for selve bygget, men glemmer en rekke kostnadsposter som til sammen kan utgjøre 15-30% av totalprisen:
          </p>
          <div className="bg-accent-yellow/5 border border-accent-yellow/10 rounded-xl p-6 my-6">
            <div className="space-y-3 text-sm">
              <div className="flex justify-between"><span className="text-text-secondary">Tilkoblingsavgift vann og avløp</span><span className="font-mono text-accent-amber font-semibold">30 000 – 100 000 kr</span></div>
              <div className="flex justify-between"><span className="text-text-secondary">Strømtilkobling</span><span className="font-mono text-accent-amber font-semibold">15 000 – 50 000 kr</span></div>
              <div className="flex justify-between"><span className="text-text-secondary">Oppmåling og kartforretning</span><span className="font-mono text-accent-amber font-semibold">10 000 – 30 000 kr</span></div>
              <div className="flex justify-between"><span className="text-text-secondary">Geoteknisk undersøkelse</span><span className="font-mono text-accent-amber font-semibold">10 000 – 30 000 kr</span></div>
              <div className="flex justify-between"><span className="text-text-secondary">Forsikring under bygging</span><span className="font-mono text-accent-amber font-semibold">10 000 – 30 000 kr</span></div>
              <div className="flex justify-between"><span className="text-text-secondary">Interiør og møbler</span><span className="font-mono text-accent-amber font-semibold">100 000 – 500 000 kr</span></div>
              <div className="flex justify-between"><span className="text-text-secondary">Hage, gjerde, postkasse</span><span className="font-mono text-accent-amber font-semibold">50 000 – 200 000 kr</span></div>
              <div className="flex justify-between"><span className="text-text-secondary">Midlertidig bolig under bygging</span><span className="font-mono text-accent-amber font-semibold">50 000 – 150 000 kr</span></div>
            </div>
          </div>
          <p className="text-text-secondary mb-6">
            Les mer i vår detaljerte guide om <Link href="/skjulte-kostnader-ved-oppussing" className="text-accent-yellow hover:underline">skjulte kostnader ved bygging og oppussing</Link>.
          </p>

          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Slik sparer du penger på husbygging</h2>
          <div className="space-y-4 text-text-secondary mb-6">
            <p><strong className="text-text-primary">1. Velg enkel form.</strong> Rektangulært grunnriss med standard takhelling er 15-30% billigere enn komplekse former.</p>
            <p><strong className="text-text-primary">2. Innhent minst 3 tilbud.</strong> Prisforskjellen mellom entreprenører kan være 20-30% for samme prosjekt.</p>
            <p><strong className="text-text-primary">3. Vurder ferdighus.</strong> 15-25% rimeligere enn arkitekttegnet, med god kvalitet og forutsigbar pris.</p>
            <p><strong className="text-text-primary">4. Gjør grundig planlegging.</strong> Endringer etter byggestart koster 2-5 ganger mer enn om de var planlagt fra start.</p>
            <p><strong className="text-text-primary">5. Prioriter smart.</strong> Invester i god isolasjon og vinduer (sparer energi i 30+ år), spar på innredning du kan oppgradere senere.</p>
            <p><strong className="text-text-primary">6. Sett av buffer.</strong> Minimum 10-15% av totalbudsjettet for uforutsette kostnader.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Link href="/kalkulator" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent-yellow text-bg-primary font-display font-bold rounded-xl hover:bg-accent-warm transition-colors shadow-glow-sm">
              <IconCalculator size={18} /> Beregn ditt prosjekt
            </Link>
            <Link href="/bygge-hus" className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-surface-border text-text-primary font-display font-semibold rounded-xl hover:border-accent-yellow/30 transition-colors">
              Se detaljert prisguide for husbygging
            </Link>
          </div>
        </FadeInUp>
      </article>
    </main>
  );
}
