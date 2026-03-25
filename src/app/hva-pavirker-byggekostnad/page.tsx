import { Metadata } from "next";
import Link from "next/link";
import { FadeInUp } from "@/components/ui/animations";
import { IconCalculator } from "@/components/icons";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "@/components/seo/JsonLd";

const faq = [
  { question: "Hva er den viktigste faktoren som påvirker byggekostnad?", answer: "Standard og materialvalg er den viktigste enkeltfaktoren. Forskjellen mellom enkel og høy standard kan være 50-100% i prisforskjell for samme prosjekt." },
  { question: "Koster det mer å bygge i Oslo?", answer: "Ja, Oslo er typisk 10-15% dyrere enn landsgjennomsnittet pga. høyere lønnskostnader og etterspørsel etter håndverkere." },
  { question: "Hvor mye buffer bør jeg ha i budsjettet?", answer: "Minimum 10-15% for nybygg og normal oppussing. For totalrenovering av eldre boliger anbefaler vi 15-20% buffer." },
  { question: "Påvirker årstiden byggekostnaden?", answer: "Ja, vinter kan gi lengre byggetid og økte kostnader for oppvarming og tildekking. Men lavere etterspørsel kan gi bedre priser på håndverkere." },
];

export const metadata: Metadata = {
  title: "Hva påvirker byggekostnad? De viktigste kostnadsfaktorene",
  description: "Forstå de viktigste faktorene som påvirker byggekostnad i Norge. Standard, beliggenhet, kompleksitet, grunnforhold og mer.",
  alternates: { canonical: "https://byggepris.no/hva-pavirker-byggekostnad" },
  openGraph: { title: "Hva påvirker byggekostnad?", description: "De viktigste kostnadsdriverne i byggeprosjekter.", url: "https://byggepris.no/hva-pavirker-byggekostnad", type: "article" },
};

export default function Page() {
  return (
    <main className="pt-20">
      <BreadcrumbSchema items={[{ name: "Hjem", href: "/" }, { name: "Hva påvirker byggekostnad?", href: "/hva-pavirker-byggekostnad" }]} />
      <ArticleSchema title="Hva påvirker byggekostnad?" description="De viktigste faktorene som bestemmer hva byggeprosjektet ditt koster." slug="hva-pavirker-byggekostnad" />
      <FAQSchema items={faq} />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <FadeInUp>
          <nav className="text-sm text-text-muted mb-6"><Link href="/" className="hover:text-accent-yellow">Hjem</Link> / <span className="text-text-secondary">Hva påvirker byggekostnad?</span></nav>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-text-primary mb-6">Hva påvirker byggekostnad?</h1>

          <p className="text-lg text-text-secondary mb-6">Byggekostnader i Norge påvirkes av mange faktorer. De viktigste er standard og materialvalg, beliggenhet, prosjektets kompleksitet, grunnforhold, markedsforhold og tidspunkt. Å forstå disse faktorene hjelper deg å planlegge realistisk og ta smarte valg som kan spare hundretusener.</p>

          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">1. Standard og materialvalg — den største enkeltfaktoren</h2>
          <p className="text-text-secondary mb-4">Valg av standard er det som har desidert størst innvirkning på totalprisen. Forskjellen mellom enkel og luksuriøs standard kan utgjøre en dobling av m²-prisen. Her er noen konkrete eksempler på hvordan materialvalg påvirker kostnaden:</p>
          <div className="bg-bg-card border border-surface-border rounded-xl p-6 my-6">
            <div className="space-y-3 text-sm">
              <div className="flex justify-between"><span className="text-text-secondary">Gulv: vinylplanker vs eikeparkett</span><span className="font-mono text-text-primary">400 vs 1 200 kr/m²</span></div>
              <div className="flex justify-between"><span className="text-text-secondary">Kjøkken: IKEA vs skreddersydd</span><span className="font-mono text-text-primary">70 000 vs 300 000 kr</span></div>
              <div className="flex justify-between"><span className="text-text-secondary">Benkeplate: laminat vs kompositt</span><span className="font-mono text-text-primary">5 000 vs 30 000 kr</span></div>
              <div className="flex justify-between"><span className="text-text-secondary">Badfliser: budsjett vs naturstein</span><span className="font-mono text-text-primary">300 vs 2 500 kr/m²</span></div>
              <div className="flex justify-between"><span className="text-text-secondary">Vinduer: standard vs premium</span><span className="font-mono text-text-primary">5 000 vs 15 000 kr/stk</span></div>
            </div>
          </div>
          <p className="text-text-secondary mb-4">Strategien for de fleste er å investere i det som er vanskelig å bytte senere (vinduer, isolasjon, rør, elektro) og spare på det som enkelt kan oppgraderes (fronter, overflater, armaturer).</p>

          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">2. Beliggenhet og region</h2>
          <p className="text-text-secondary mb-4">Byggekostnadene varierer betydelig mellom norske regioner. Hovedårsaken er forskjeller i lønnskostnader for håndverkere, etterspørsel og tilgjengelighet. I Oslo kan en tømrer koste 750-900 kr/time inkl. påslag, mens samme tømrer i Midt-Norge kanskje tar 550-700 kr/time.</p>
          <p className="text-text-secondary mb-4">Transportkostnader spiller også inn. I avsidesliggende strøk kan materialtransport legge 3-8% på totalbudsjettet. For hyttebygging i fjellet kan transport alene koste 100 000-300 000 kr hvis det kreves spesialtransport.</p>

          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">3. Prosjektets kompleksitet</h2>
          <p className="text-text-secondary mb-4">Jo mer komplekst prosjektet er, desto dyrere blir det per m². Kompleksitet inkluderer:</p>
          <div className="space-y-3 text-text-secondary mb-4">
            <p><strong className="text-text-primary">Form og geometri:</strong> Hvert hjørne, vinkel og nivåforskjell koster penger. Et rektangulært hus med pulttak er 15-25% billigere enn et hus med mange hjørner og takopplett.</p>
            <p><strong className="text-text-primary">Antall våtrom:</strong> Hvert bad og vaskerom krever separat rørlegger-, membran- og flisarbeid. To bad er ikke dobbelt så dyrt som ett, men 60-80% dyrere.</p>
            <p><strong className="text-text-primary">Bærende vegger:</strong> Å fjerne eller flytte bærende vegger krever stålbjelker og forsterkning, typisk 30 000-80 000 kr per vegg.</p>
            <p><strong className="text-text-primary">Spesialløsninger:</strong> Store glassfasader, innebygd belysning, skreddersydde møbler og spesialbestilte materialer driver opp prisen betydelig.</p>
          </div>

          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">4. Grunnforhold og tomt</h2>
          <p className="text-text-secondary mb-4">Grunnforholda er den faktoren som oftest gir uforutsette kostnader. Utfordringer som kan øke fundamenteringskostnaden dramatisk:</p>
          <div className="bg-accent-yellow/5 border border-accent-yellow/10 rounded-xl p-6 my-6">
            <div className="space-y-3 text-sm">
              <div className="flex justify-between"><span className="text-text-secondary">Fjell som må sprengges</span><span className="font-mono text-accent-amber font-semibold">+100 000 – 400 000 kr</span></div>
              <div className="flex justify-between"><span className="text-text-secondary">Kvikkleire — krever pæling</span><span className="font-mono text-accent-amber font-semibold">+200 000 – 800 000 kr</span></div>
              <div className="flex justify-between"><span className="text-text-secondary">Høy grunnvannstand — ekstra drenering</span><span className="font-mono text-accent-amber font-semibold">+50 000 – 200 000 kr</span></div>
              <div className="flex justify-between"><span className="text-text-secondary">Bratt tomt — støttemurer og terrengarbeid</span><span className="font-mono text-accent-amber font-semibold">+100 000 – 500 000 kr</span></div>
            </div>
          </div>
          <p className="text-text-secondary mb-4">En geoteknisk undersøkelse (10 000-30 000 kr) er en liten investering som kan avdekke store overraskelser. Vi anbefaler dette før ethvert nybygg eller større tilbygg.</p>

          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">5. Markedsforhold og timing</h2>
          <p className="text-text-secondary mb-4">Byggemarkedet svinger med konjunkturene. I perioder med høy byggeaktivitet (som 2021-2022) steg prisene med 8-12% årlig fordi etterspørselen etter håndverkere og materialer var enorm. I roligere perioder kan du forhandle bedre priser og få raskere oppstart.</p>
          <p className="text-text-secondary mb-4"><strong className="text-text-primary">Sesong:</strong> Vår og sommer er høysesong for bygging. Høst og vinter kan gi 5-10% lavere priser på håndverkere fordi det er mindre å gjøre. Ulempen er at vinterbygging kan kreve ekstra oppvarming og tildekking.</p>
          <p className="text-text-secondary mb-4"><strong className="text-text-primary">Materialkostnader:</strong> Trelast, stål og betong svinger i pris. Bestill materialer tidlig hvis prisene er gunstige. Leveringstider på vinduer, kjøkken og spesialbestilte produkter kan være 4-12 uker.</p>

          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">6. Entrepriseform</h2>
          <p className="text-text-secondary mb-4">Hvordan du organiserer prosjektet påvirker kostnaden:</p>
          <div className="space-y-3 text-text-secondary mb-4">
            <p><strong className="text-text-primary">Totalentreprise:</strong> Én hovedentreprenør tar alt ansvar. Enklest å forholde seg til, men typisk 5-10% dyrere. Du betaler for koordinering og risikopåslag.</p>
            <p><strong className="text-text-primary">Delt entreprise:</strong> Du engasjerer håndverkerne selv (tømrer, rørlegger, elektriker). Kan spare 5-15%, men krever mer tid, kompetanse og koordinering fra deg.</p>
            <p><strong className="text-text-primary">Egeninnsats:</strong> Å gjøre deler av arbeidet selv (maling, riving, enkel montering) kan spare 10-30% på de aktuelle postene. Men vær realistisk — feil kan bli dyrere enn å leie inn fagfolk.</p>
          </div>

          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">7. Energikrav og forskrifter</h2>
          <p className="text-text-secondary mb-4">Alle nybygg i Norge må oppfylle TEK17, som setter strenge krav til isolasjon, vinduer og tetthet. Dette øker byggekostnaden med 5-10% sammenlignet med eldre standarder, men gir lavere energiregning i mange tiår framover. Ved renovering av eldre boliger er det ikke alltid krav om å oppfylle TEK17, men å isolere opp til moderne standard kan likevel være en god investering.</p>

          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Link href="/kalkulator" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent-yellow text-bg-primary font-display font-bold rounded-xl hover:bg-accent-warm transition-colors shadow-glow-sm"><IconCalculator size={18} /> Beregn ditt prosjekt</Link>
            <Link href="/pris-per-kvm" className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-surface-border text-text-primary font-display font-semibold rounded-xl hover:border-accent-yellow/30 transition-colors">Se m²-priser</Link>
          </div>
        </FadeInUp>
      </article>
    </main>
  );
}
