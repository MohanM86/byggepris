import { Metadata } from "next";
import Link from "next/link";
import { FadeInUp } from "@/components/ui/animations";
import { IconCalculator, IconCheck } from "@/components/icons";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "@/components/seo/JsonLd";

const faq = [
  { question: "Hva koster det å bygge terrasse?", answer: "En terrasse koster typisk 2 000-7 000 kr per m² avhengig av materiale og konstruksjon. For en terrasse på 30 m² betyr det 60 000-210 000 kr. Trykkimpregnert tre er rimeligst, kebony og kompositt dyrere." },
  { question: "Hva koster en terrasse på 50 m²?", answer: "En terrasse på 50 m² koster typisk 100 000-350 000 kr. Trykkimpregnert: 100 000-150 000 kr. Kompositt: 150 000-225 000 kr. Kebony/edeltre: 200 000-350 000 kr. Inkludert bærekonstruksjon og rekkverk." },
  { question: "Hva koster en terrasse på 100 m²?", answer: "En terrasse på 100 m² koster typisk 200 000-700 000 kr. Stor terrasse krever solid bærekonstruksjon, evt. søyler og fundamentering, som øker kostnaden per m². Rekkverkkostnaden øker også med størrelsen." },
  { question: "Trenger man byggesøknad for terrasse?", answer: "Terrasse under 1 meter over bakken er normalt unntatt søknadsplikt. Terrasse over 1 meter over bakken krever søknad. Overbygd terrasse (med tak) regnes som tilbygg og krever alltid søknad. Sjekk alltid med kommunen." },
  { question: "Hva er best av kompositt og tre?", answer: "Tre er rimeligere og mer naturlig, men krever vedlikehold (beis/olje hvert 2-3 år). Kompositt koster 30-50% mer, men er vedlikeholdsfritt og varer lenger. Kebony er et godt kompromiss: ekte tre med lang levetid." },
  { question: "Kan man bygge terrasse selv?", answer: "Ja, terrasse er et av de mest populære gjør-det-selv-prosjektene. Du trenger grunnleggende verktøy og snekkererfaring. Spar 40-60% av arbeidskostnaden. Fundamentering (pilarer/skrufundament) er viktigst å gjøre riktig." },
  { question: "Hva koster rekkverk til terrasse?", answer: "Rekkverk koster typisk 800-3 000 kr per løpemeter. Tre-rekkverk er rimeligst (800-1 500 kr/m). Glass-rekkverk er dyrest (2 000-4 000 kr/m) men gir åpent uttrykk. Stål/aluminium ligger mellom (1 200-2 500 kr/m)." },
  { question: "Hva koster skrufundament?", answer: "Skrufundament koster typisk 1 500-3 000 kr per punkt inkl. montering. For en terrasse på 30 m² trenger du 6-12 punkter, altså 9 000-36 000 kr. Raskere og billigere enn betongfundamenter, og kan brukes på de fleste grunnforhold." },
  { question: "Hvor lenge varer en terrasse?", answer: "Trykkimpregnert tre varer 15-25 år med vedlikehold. Kebony varer 25-40 år. Kompositt varer 25-30+ år uten vedlikehold. Edeltre (teak, ipe) kan vare 40+ år. Levetiden avhenger av vedlikehold, klima og konstruksjon." },
  { question: "Hva er billigste terrassemateriale?", answer: "Trykkimpregnert furu er rimeligst: 150-350 kr/m² for bord. Med bærekonstruksjon og montering: 1 500-3 000 kr/m² totalt. Ulempen er behov for vedlikehold og kortere levetid enn premium-alternativer." },
];

export const metadata: Metadata = {
  title: "Hva koster terrasse? Priser for terrasse og utedekke 2026",
  description: "Terrasse koster typisk 2 000-7 000 kr per m². Se priser for tre, kompositt, kebony, rekkverk og fundamentering. Komplett prisguide.",
  alternates: { canonical: "https://byggepris.no/terrasse" },
  openGraph: { title: "Hva koster terrasse?", description: "Typisk 2 000-7 000 kr per m².", url: "https://byggepris.no/terrasse", type: "article" },
};

export default function Page() {
  return (
    <main className="pt-20">
      <BreadcrumbSchema items={[{ name: "Hjem", href: "/" }, { name: "Terrasse", href: "/terrasse" }]} />
      <ArticleSchema title="Hva koster terrasse?" description="Prisguide for terrasse og utedekke i Norge." slug="terrasse" />
      <FAQSchema items={faq} />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <FadeInUp>
          <nav className="text-sm text-text-muted mb-6"><Link href="/" className="hover:text-accent-yellow">Hjem</Link> / <span className="text-text-secondary">Terrasse</span></nav>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-text-primary mb-6">Hva koster terrasse?</h1>
          <p className="text-lg text-text-secondary mb-6">En terrasse koster typisk mellom 2 000 og 7 000 kr per m² avhengig av materiale og konstruksjon. For en standard terrasse på 30 m² betyr det 60 000-210 000 kr. Terrasse er et av prosjektene med best avkastning for boligverdien.</p>

          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Pris etter materiale</h2>
          <div className="bg-bg-card border border-surface-border rounded-xl overflow-hidden my-6">
            <table className="w-full text-sm">
              <thead><tr className="text-left text-xs text-text-muted uppercase tracking-wider border-b border-surface-border"><th className="px-5 py-3">Materiale</th><th className="px-5 py-3">Pris per m²</th><th className="px-5 py-3">30 m²</th><th className="px-5 py-3">Vedlikehold</th><th className="px-5 py-3">Levetid</th></tr></thead>
              <tbody className="divide-y divide-surface-border">
                <tr><td className="px-5 py-3 text-text-primary font-medium">Trykkimpregnert furu</td><td className="px-5 py-3 font-mono text-text-secondary">1 500–3 000 kr</td><td className="px-5 py-3 font-mono text-text-secondary">45 000–90 000 kr</td><td className="px-5 py-3 text-text-tertiary">Beis hvert 2-3 år</td><td className="px-5 py-3 text-text-tertiary">15-25 år</td></tr>
                <tr><td className="px-5 py-3 text-text-primary font-medium">Termotre</td><td className="px-5 py-3 font-mono text-text-secondary">2 500–4 000 kr</td><td className="px-5 py-3 font-mono text-text-secondary">75 000–120 000 kr</td><td className="px-5 py-3 text-text-tertiary">Olje hvert 2-3 år</td><td className="px-5 py-3 text-text-tertiary">20-30 år</td></tr>
                <tr><td className="px-5 py-3 text-text-primary font-medium">Kompositt</td><td className="px-5 py-3 font-mono text-accent-yellow">3 000–5 000 kr</td><td className="px-5 py-3 font-mono text-accent-yellow">90 000–150 000 kr</td><td className="px-5 py-3 text-text-tertiary">Vask, ingen beis</td><td className="px-5 py-3 text-text-tertiary">25-30+ år</td></tr>
                <tr><td className="px-5 py-3 text-text-primary font-medium">Kebony</td><td className="px-5 py-3 font-mono text-text-secondary">4 000–6 000 kr</td><td className="px-5 py-3 font-mono text-text-secondary">120 000–180 000 kr</td><td className="px-5 py-3 text-text-tertiary">Minimalt</td><td className="px-5 py-3 text-text-tertiary">25-40 år</td></tr>
                <tr><td className="px-5 py-3 text-text-primary font-medium">Ipe / edeltre</td><td className="px-5 py-3 font-mono text-text-secondary">5 000–8 000 kr</td><td className="px-5 py-3 font-mono text-text-secondary">150 000–240 000 kr</td><td className="px-5 py-3 text-text-tertiary">Olje for farge</td><td className="px-5 py-3 text-text-tertiary">40+ år</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-secondary mb-4">Prisene inkluderer bærekonstruksjon, bord og montering. Rekkverk, trapper og fundamentering kommer i tillegg og kan utgjøre 20-40% av totalbudsjettet for høye terrasser.</p>

          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Kostnadsfordeling for en terrasse på 30 m²</h2>
          <div className="bg-bg-card border border-surface-border rounded-xl p-6 my-6">
            <div className="space-y-3 text-sm">
              <div className="flex justify-between"><span>Fundamentering (skrufundament/pilarer)</span><span className="font-mono text-text-primary">10 000 – 30 000 kr</span></div>
              <div className="flex justify-between"><span>Bærekonstruksjon (bjelker, stolper)</span><span className="font-mono text-text-primary">15 000 – 35 000 kr</span></div>
              <div className="flex justify-between"><span>Terrassebord (materiale)</span><span className="font-mono text-text-primary">15 000 – 60 000 kr</span></div>
              <div className="flex justify-between"><span>Montering / arbeid</span><span className="font-mono text-text-primary">20 000 – 50 000 kr</span></div>
              <div className="flex justify-between"><span>Rekkverk (hvis over 0,5m)</span><span className="font-mono text-text-primary">10 000 – 40 000 kr</span></div>
              <div className="flex justify-between"><span>Trapp</span><span className="font-mono text-text-primary">5 000 – 20 000 kr</span></div>
              <div className="flex justify-between border-t border-surface-border pt-3 mt-3"><span className="text-text-primary font-semibold">Totalt 30 m² (normal standard)</span><span className="font-mono text-accent-yellow font-semibold">75 000 – 180 000 kr</span></div>
            </div>
          </div>

          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Bygge terrasse selv vs leie inn</h2>
          <p className="text-text-secondary mb-4">Terrasse er et av de mest populære gjør-det-selv-prosjektene i Norge. Med grunnleggende verktøy og noe snekkererfaring kan du spare 40-60% av arbeidskostnaden.</p>
          <div className="grid sm:grid-cols-2 gap-4 my-6">
            <div className="bg-bg-card border border-surface-border rounded-xl p-5">
              <p className="font-display font-bold text-accent-yellow mb-2">Bygge selv</p>
              <p className="text-sm text-text-secondary mb-2">30 m² terrasse: <strong className="text-text-primary">40 000-90 000 kr</strong> (kun materialer)</p>
              <div className="space-y-1 text-xs text-text-tertiary">
                <p>+ Sparer 30 000-80 000 kr i arbeid</p>
                <p>+ God helgeprosjekt (2-4 helger)</p>
                <p>- Krever verktøy og erfaring</p>
                <p>- Fundamentering er viktigst å gjøre riktig</p>
              </div>
            </div>
            <div className="bg-bg-card border border-surface-border rounded-xl p-5">
              <p className="font-display font-bold text-text-primary mb-2">Leie inn snekker</p>
              <p className="text-sm text-text-secondary mb-2">30 m² terrasse: <strong className="text-text-primary">75 000-180 000 kr</strong> (komplett)</p>
              <div className="space-y-1 text-xs text-text-tertiary">
                <p>+ Profesjonelt resultat</p>
                <p>+ Garantert riktig konstruksjon</p>
                <p>+ Ferdig på 1-2 uker</p>
                <p>- Dyrere</p>
              </div>
            </div>
          </div>

          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Byggesøknad for terrasse</h2>
          <p className="text-text-secondary mb-4">Reglene for byggesøknad avhenger av terrassens høyde over bakken:</p>
          <div className="space-y-3 my-6">
            {[
              { h: "Under 0,5 m over bakken", r: "Ingen søknad, ingen melding. Fritt fram." },
              { h: "0,5-1,0 m over bakken", r: "Normalt unntatt søknadsplikt, men sjekk kommunens reguleringsplan for evt. begrensninger." },
              { h: "Over 1,0 m over bakken", r: "Krever byggesøknad. Rekkverk er påbudt (min. 1 m høyde). Avstand til nabogrense gjelder." },
              { h: "Overbygd terrasse (med tak)", r: "Regnes som tilbygg og krever alltid byggesøknad uavhengig av høyde." },
            ].map((item) => (
              <div key={item.h} className="bg-bg-card border border-surface-border rounded-xl p-4 flex gap-3">
                <IconCheck size={16} className="flex-shrink-0 text-accent-yellow mt-0.5" />
                <div><p className="text-sm text-text-primary font-semibold">{item.h}</p><p className="text-sm text-text-secondary">{item.r}</p></div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link href="/kalkulator" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent-yellow text-bg-primary font-display font-bold rounded-xl hover:bg-accent-warm transition-colors shadow-glow-sm"><IconCalculator size={18} /> Beregn ditt prosjekt</Link>
            <Link href="/tilbygg" className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-surface-border text-text-primary font-display font-semibold rounded-xl hover:border-accent-yellow/30 transition-colors">Se tilbyggpriser</Link>
          </div>
        </FadeInUp>
      </article>
    </main>
  );
}
