import { Metadata } from "next";
import Link from "next/link";
import { FadeInUp } from "@/components/ui/animations";
import { IconCalculator } from "@/components/icons";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "@/components/seo/JsonLd";

const faq = [
  { question: "Hva pavirker byggekostnaden mest?", answer: "Standard og materialvalg er den viktigste enkeltfaktoren og kan doble m2-prisen. Deretter beliggenhet (Oslo +15%), bygningsform (komplekse former +15-25%), grunnforhold (leire/fjell +100 000-800 000 kr) og entrepriseform." },
  { question: "Hvor mye dyrere er Oslo enn resten?", answer: "Oslo og Akershus er typisk 10-15% dyrere enn landssnittet pga. hoyere lonnskostnader og storre ettersporsel etter handverkere. En enebolig til 6 mill. nasjonalt koster ca. 6,6-6,9 mill. i Oslo." },
  { question: "Gjor bygningsformen stor prisforskjell?", answer: "Ja, enormt. Et rektangulaert hus med enkel takvinkel er 15-25% billigere enn et hus med mange hjorner, arker, takoppbygg og ulike takhojder. Hvert ekstra hjorne koster penger i materialer og arbeidstimer." },
  { question: "Hvor mye dyrere er hoy standard?", answer: "Hoy standard koster typisk 50-80% mer enn enkel. Enkel: 25 000 kr/m2. Normal: 37 000 kr/m2. Hoy: 50 000 kr/m2. Luksurios: 65 000+ kr/m2. Forskjellen ligger i materialer, bad/kjokken-kvalitet og detaljer." },
  { question: "Pavirker grunnforhold prisen mye?", answer: "Ja, grunnforhold kan legge til 100 000-800 000 kr. Enkel grunn (sand/grus): minimalt tillegg. Fjell som ma sprenges: 100 000-400 000 kr. Kvikkleire som krever peling: 200 000-800 000 kr. Geoteknisk undersokelse (10 000-30 000 kr) avdekker risiko." },
  { question: "Er totalentreprise dyrere enn delt?", answer: "Ja, totalentreprise koster typisk 5-10% mer fordi hovedentreprenoren tar passlag for koordinering og risiko. Men du far en kontaktperson, en kontrakt og mer forutsigbar pris. For de fleste lønner det seg." },
  { question: "Pavirker sesong byggekostnaden?", answer: "Ja, vinter gir typisk 5-10% lavere handverkerpriser fordi det er roligere periode. Ulempen er at utvendig arbeid er vanskeligere. For innvendig arbeid er vinter en god tid a bygge." },
  { question: "Hvor mye koster uforutsette utgifter?", answer: "Budsjetter 10-15% buffer for nybygg og 15-20% for renovering av eldre boliger. De vanligste overraskelsene er darlige grunnforhold, skjulte fuktskader, asbest, og endringer underveis (2-5x dyrere enn planlagte)." },
  { question: "Pavirker energikrav prisen?", answer: "TEK17-krav oker byggekostnaden med ca. 5-10%, men gir 50-70% lavere energiforbruk over boligens levetid. Over 20 ar sparer du typisk 300 000-600 000 kr i strom. Energikravene lønner seg." },
  { question: "Hva koster prosjektering?", answer: "Prosjektering (arkitekt, ingeniør, byggesoknad) koster typisk 5-10% av byggekostnaden. For et hus til 5 mill: 250 000-500 000 kr. For tilbygg: 50 000-150 000 kr. Gode tegninger sparer penger i byggeperioden." },
];

export const metadata: Metadata = { title: "Hva pavirker byggekostnad? De viktigste faktorene", description: "Forstå hva som driver byggekostnaden. Standard, beliggenhet, form, grunnforhold og entrepriseform forklart med priser.", alternates: { canonical: "https://byggepris.no/hva-pavirker-byggekostnad" }, openGraph: { title: "Hva pavirker byggekostnad?", description: "De viktigste kostnadsdriverne forklart.", url: "https://byggepris.no/hva-pavirker-byggekostnad", type: "article" } };

export default function Page() {
  return (<main className="pt-20"><BreadcrumbSchema items={[{name:"Hjem",href:"/"},{name:"Hva pavirker byggekostnad",href:"/hva-pavirker-byggekostnad"}]} /><ArticleSchema title="Hva pavirker byggekostnad?" description="De viktigste faktorene som driver byggekostnaden." slug="hva-pavirker-byggekostnad" /><FAQSchema items={faq} /><article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14"><FadeInUp>
    <nav className="text-sm text-text-muted mb-6"><Link href="/" className="hover:text-accent-yellow">Hjem</Link> / <span className="text-text-secondary">Hva pavirker byggekostnad</span></nav>
    <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-text-primary mb-6">Hva pavirker byggekostnaden?</h1>
    <p className="text-lg text-text-secondary mb-6">Byggekostnaden pavirkes av mange faktorer som til sammen kan gjøre forskjellen mellom 3 og 8 millioner for tilsynelatende like prosjekter. Her forklarer vi de viktigste kostnadsdriverne.</p>

    <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">De 8 viktigste faktorene</h2>
    <div className="space-y-4 my-6">
      {[
        { t: "1. Standard og materialvalg", p: "Kan doble m2-prisen", d: "Enkel standard (25 000 kr/m2) vs luksurios (65 000+ kr/m2). Bad og kjokken er rommene der standardvalget pavirker mest. Dyre materialer som naturstein, eik og designarmaturer kan tredoble kostnadene for enkeltrom." },
        { t: "2. Beliggenhet", p: "Oslo +10-15% over snittet", d: "Lonnskostnader for handverkere varierer mellom regioner. Oslo er dyrest, Sorlandet og Midt-Norge rimeligst. Forskjellen kan utgjore 500 000-1 000 000 kr pa et husprosjekt." },
        { t: "3. Bygningsform", p: "Enkel form sparer 15-25%", d: "Rektangulaert grunnriss med standard takvinkel er billigst. Hvert ekstra hjorne, ark, balkong og takniva oker kostnaden. En L-formet bolig koster 10-15% mer enn rektangulaer." },
        { t: "4. Grunnforhold", p: "+100 000 til +800 000 kr", d: "Sand og grus er billigst a bygge pa. Fjell krever sprengning (100 000-400 000 kr). Leire kan kreve peling (200 000-800 000 kr). Alltid gjør geoteknisk undersokelse forst." },
        { t: "5. Entrepriseform", p: "Totalentreprise +5-10%", d: "Totalentreprise er dyrere men mer forutsigbart. Delt entreprise kan spare penger men krever mer koordinering og kompetanse fra byggherre." },
        { t: "6. Energikrav (TEK17)", p: "+5-10% av byggekostnad", d: "Moderne isolasjonskrav, vinduer og ventilasjon oker byggeprisen, men sparer 15 000-30 000 kr/ar i strom. Lønner seg pa 10-15 ar." },
        { t: "7. Sesong og timing", p: "Vinter kan spare 5-10%", d: "Roligere perioder gir lavere priser og bedre tilgjengelighet pa handverkere. Var/sommer er hoysesongen med hoyest priser." },
        { t: "8. Prosjektering og planlegging", p: "5-10% av totalkostnad", d: "God planlegging koster, men endringer underveis er 2-5 ganger dyrere. Bruk tid og penger pa a planlegge riktig fra start." },
      ].map((item) => (
        <div key={item.t} className="bg-bg-card border border-surface-border rounded-xl p-5">
          <div className="flex items-center justify-between mb-1"><h3 className="font-display font-bold text-text-primary">{item.t}</h3><span className="font-mono text-sm text-accent-yellow font-semibold">{item.p}</span></div>
          <p className="text-sm text-text-secondary">{item.d}</p>
        </div>
      ))}
    </div>

    <div className="mt-10 flex flex-col sm:flex-row gap-4">
      <Link href="/kalkulator" className="inline-flex items-center gap-2 px-6 py-3 bg-accent-yellow text-bg-primary font-display font-bold rounded-xl hover:bg-accent-warm transition-colors shadow-glow-sm"><IconCalculator size={18} /> Beregn ditt prosjekt</Link>
      <Link href="/byggekostnader" className="inline-flex items-center gap-2 px-6 py-3 border border-surface-border text-text-primary font-display font-semibold rounded-xl hover:border-accent-yellow/30 transition-colors">Se byggekostnader</Link>
    </div>
  </FadeInUp></article></main>);
}
