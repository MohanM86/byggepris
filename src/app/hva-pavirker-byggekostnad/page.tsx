import { Metadata } from "next";
import Link from "next/link";
import { FadeInUp } from "@/components/ui/animations";
import { IconCalculator } from "@/components/icons";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "@/components/seo/JsonLd";

const faq = [
  { question: "Hva påvirker byggekostnaden mest?", answer: "Standard og materialvalg er den viktigste enkeltfaktoren og kan doble m² prisen. Deretter beliggenhet med Oslo 15 % over snittet, bygningsform der komplekse former koster 15–25 % mer, og grunnforhold som kan legge til 100 000–800 000 kr." },
  { question: "Hvor mye dyrere er Oslo enn resten?", answer: "Oslo og Akershus er typisk 10–15 % dyrere enn landssnittet på grunn av høyere lønnskostnader og større etterspørsel etter håndverkere. En enebolig til 6 mill. nasjonalt koster ca. 6,6–6,9 mill. i Oslo." },
  { question: "Gjør bygningsformen stor prisforskjell?", answer: "Ja, enormt. Et rektangulært hus med enkel takvinkel er 15–25 % billigere enn et hus med mange hjørner, arker og takoppbygg. Hvert ekstra hjørne koster penger i materialer og arbeidstimer." },
  { question: "Hvor mye dyrere er høy standard?", answer: "Høy standard koster typisk 50–80 % mer enn enkel. Enkel koster 25 000 kr per m², normal 37 000 kr per m² og høy 50 000 kr per m². Forskjellen ligger i materialer, bad og kjøkken kvalitet." },
  { question: "Påvirker grunnforhold prisen mye?", answer: "Ja. Enkel grunn med sand og grus gir minimalt tillegg. Fjell som må sprenges koster 100 000–400 000 kr ekstra. Kvikkleire som krever pæling koster 200 000–800 000 kr ekstra." },
  { question: "Er totalentreprise dyrere enn delt?", answer: "Ja, totalentreprise koster typisk 5–10 % mer fordi hovedentreprenøren tar påslag for koordinering og risiko. Men du får én kontaktperson, én kontrakt og mer forutsigbar pris." },
  { question: "Påvirker sesong byggekostnaden?", answer: "Ja, vinter gir typisk 5–10 % lavere håndverkerpriser fordi det er roligere periode. Ulempen er at utvendig arbeid er vanskeligere. For innvendig arbeid er vinter en god tid å bygge." },
  { question: "Hvor mye koster uforutsette utgifter?", answer: "Budsjetter 10–15 % buffer for nybygg og 15–20 % for renovering av eldre boliger. De vanligste overraskelsene er dårlige grunnforhold, skjulte fuktskader og endringer underveis." },
  { question: "Påvirker energikrav prisen?", answer: "TEK17 krav øker byggekostnaden med ca. 5–10 % men gir 50–70 % lavere energiforbruk over boligens levetid. Over 20 år sparer du typisk 300 000–600 000 kr i strøm." },
  { question: "Hva koster prosjektering?", answer: "Prosjektering med arkitekt, ingeniør og byggesøknad koster typisk 5–10 % av byggekostnaden. For et hus til 5 mill. betyr det 250 000–500 000 kr. Gode tegninger sparer penger i byggeperioden." },
];

export const metadata: Metadata = {
  title: "Hva påvirker byggekostnad? De viktigste faktorene",
  description: "Forstå hva som driver byggekostnaden. Standard, beliggenhet, form, grunnforhold og entrepriseform forklart med priser.",
  alternates: { canonical: "https://byggepris.no/hva-pavirker-byggekostnad" },
};

export default function Page() {
  return (
    <main className="pt-20"><BreadcrumbSchema items={[{name:"Hjem",href:"/"},{name:"Hva påvirker byggekostnad",href:"/hva-pavirker-byggekostnad"}]} /><ArticleSchema title="Hva påvirker byggekostnad?" description="Kostnadsdrivere forklart." slug="hva-pavirker-byggekostnad" /><FAQSchema items={faq} /><article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14"><FadeInUp>
      <nav className="text-sm text-text-muted mb-6"><Link href="/" className="hover:text-accent-yellow">Hjem</Link> / <span className="text-text-secondary">Hva påvirker byggekostnad</span></nav>
      <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-text-primary mb-4">Hva påvirker byggekostnaden?</h1>
      <p className="text-lg text-text-secondary mb-8">Byggekostnaden påvirkes av mange faktorer som til sammen kan gjøre forskjellen mellom 3 og 8 millioner for tilsynelatende like prosjekter. De viktigste er standard, beliggenhet, bygningsform, grunnforhold og entrepriseform.</p>
      <div className="space-y-4 my-6">
        {[
          {t:"Standard og materialvalg",p:"Kan doble m² prisen",d:"Enkel standard koster 25 000 kr per m² mens luksuriøs koster 65 000 kr pluss. Bad og kjøkken er rommene der standardvalget påvirker mest."},
          {t:"Beliggenhet",p:"Oslo +10–15 % over snittet",d:"Lønnskostnader for håndverkere varierer mellom regioner. Oslo er dyrest og Sørlandet og Midt Norge rimeligst."},
          {t:"Bygningsform",p:"Enkel form sparer 15–25 %",d:"Rektangulært grunnriss med standard takvinkel er billigst. Hvert ekstra hjørne, ark og balkong øker kostnaden."},
          {t:"Grunnforhold",p:"+100 000 til +800 000 kr",d:"Sand og grus er billigst å bygge på. Fjell krever sprengning og leire kan kreve pæling. Alltid gjør geoteknisk undersøkelse først."},
          {t:"Sesong og timing",p:"Vinter kan spare 5–10 %",d:"Roligere perioder gir lavere priser og bedre tilgjengelighet på håndverkere."},
        ].map((item)=>(<div key={item.t} className="bg-bg-card border border-surface-border rounded-xl p-5"><div className="flex items-center justify-between mb-1"><h3 className="font-display font-bold text-text-primary">{item.t}</h3><span className="font-mono text-sm text-accent-yellow font-semibold">{item.p}</span></div><p className="text-sm text-text-secondary">{item.d}</p></div>))}
      </div>
      <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/kalkulator" className="inline-flex items-center gap-2 px-6 py-3 bg-accent-yellow text-bg-primary font-display font-bold rounded-xl hover:bg-accent-warm transition-colors shadow-glow-sm"><IconCalculator size={18} /> Beregn ditt prosjekt</Link>
        <Link href="/byggekostnader" className="inline-flex items-center gap-2 px-6 py-3 border border-surface-border text-text-primary font-display font-semibold rounded-xl hover:border-accent-yellow/30 transition-colors">Se byggekostnader</Link>
      </div>
    </FadeInUp></article></main>
  );
}
