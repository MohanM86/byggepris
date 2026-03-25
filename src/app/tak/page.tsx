import { Metadata } from "next";
import Link from "next/link";
import { FadeInUp } from "@/components/ui/animations";
import { IconCalculator, IconCheck } from "@/components/icons";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "@/components/seo/JsonLd";

const faq = [
  { question: "Hva koster nytt tak?", answer: "Nytt tak koster typisk 1 500-4 000 kr per m² takflate. For et hus med 150 m² takflate betyr det 225 000-600 000 kr. Prisen avhenger av takbelegg (betongstein, stål, skifer), om bærekonstruksjon må skiftes, og tilgjengelighet." },
  { question: "Hva koster omlegging av tak?", answer: "Omlegging (skifte av belegg uten å bytte konstruksjon) koster 800-2 000 kr per m². For 150 m² tak: 120 000-300 000 kr. Inkluderer riving av gammelt belegg, undertak, lekter og nytt belegg." },
  { question: "Hvor lenge varer et tak?", answer: "Betongstein: 30-50 år. Ståltak: 40-60 år. Skifer: 50-100+ år. Takpapp/shingel: 15-25 år. Torvtak: 30-50 år med vedlikehold. Levetiden avhenger av klima, vedlikehold og kvalitet på montering." },
  { question: "Hva koster det å isolere loft?", answer: "Etterisolering av loft koster typisk 300-800 kr per m². For et loft på 80 m² betyr det 24 000-64 000 kr. Blåseisolasjon er rimeligst og mest effektivt for eksisterende loft. Kan spare 20-30% på oppvarmingskostnader." },
  { question: "Trenger man byggesøknad for nytt tak?", answer: "Vanlig omlegging av tak (bytte av belegg med samme type) er normalt ikke søknadspliktig. Men endring av takform, ny ark/takopplett, eller endring som påvirker fasaden kan kreve søknad." },
  { question: "Hva koster takstein vs ståltak?", answer: "Betongstein: 300-600 kr/m² for materiale. Ståltak (falstak/trapesplater): 400-800 kr/m². Ståltak er lettere, raskere å montere og varer lenger, men betongstein gir mer tradisjonelt utseende. Totalprisen inkl. arbeid er ofte lik." },
  { question: "Hva koster takreparasjon?", answer: "Mindre reparasjoner (bytte av noen stein, tette lekkasje) koster 5 000-20 000 kr. Reparasjon av en seksjon: 20 000-50 000 kr. Hvis skadene er omfattende, er det ofte mer lønnsomt å legge om hele taket." },
  { question: "Hva koster takrenner?", answer: "Nye takrenner koster typisk 300-600 kr per løpemeter inkl. montering. For et vanlig hus trenger du 30-50 løpemeter, altså 9 000-30 000 kr. Aluminium er vanligst. Kobber er dyrere (600-1 200 kr/m) men varer lenger." },
  { question: "Hva koster en ark / takopplett?", answer: "En ark (takvindu som stikker ut) koster typisk 80 000-200 000 kr per stk inkl. konstruksjon, isolasjon og innvendig ferdigstillelse. Takvindu (Velux-type) er mye rimeligere: 8 000-25 000 kr per vindu inkl. montering." },
  { question: "Hva er best – takstein eller ståltak?", answer: "Ståltak er best for de fleste: lettere, raskere montering, lang levetid (40-60 år), og mange farge-/formvalg. Betongstein gir mer tradisjonelt utseende og er noe rimeligere på materiale, men tyngre og krever sterkere konstruksjon." },
];

export const metadata: Metadata = {
  title: "Hva koster nytt tak? Priser for tak og omlegging 2026",
  description: "Nytt tak koster 1 500-4 000 kr per m² takflate. Se priser for omlegging, takstein vs stål, isolering, takrenner og reparasjon.",
  alternates: { canonical: "https://byggepris.no/tak" },
  openGraph: { title: "Hva koster nytt tak?", description: "Typisk 1 500-4 000 kr per m².", url: "https://byggepris.no/tak", type: "article" },
};

export default function Page() {
  return (
    <main className="pt-20">
      <BreadcrumbSchema items={[{ name: "Hjem", href: "/" }, { name: "Tak", href: "/tak" }]} />
      <ArticleSchema title="Hva koster nytt tak?" description="Prisguide for tak og omlegging i Norge." slug="tak" />
      <FAQSchema items={faq} />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <FadeInUp>
          <nav className="text-sm text-text-muted mb-6"><Link href="/" className="hover:text-accent-yellow">Hjem</Link> / <span className="text-text-secondary">Tak</span></nav>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-text-primary mb-6">Hva koster nytt tak?</h1>
          <p className="text-lg text-text-secondary mb-6">Nytt tak koster typisk mellom 1 500 og 4 000 kr per m² takflate. For et standard hus med 150 m² takflate betyr det 225 000-600 000 kroner. Omlegging uten å bytte konstruksjon er rimeligere: 120 000-300 000 kr.</p>

          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Pris etter type tak</h2>
          <div className="bg-bg-card border border-surface-border rounded-xl overflow-hidden my-6">
            <table className="w-full text-sm">
              <thead><tr className="text-left text-xs text-text-muted uppercase tracking-wider border-b border-surface-border"><th className="px-5 py-3">Taktype</th><th className="px-5 py-3">Materiale/m²</th><th className="px-5 py-3">Totalt inkl. arbeid/m²</th><th className="px-5 py-3">Levetid</th></tr></thead>
              <tbody className="divide-y divide-surface-border">
                <tr><td className="px-5 py-3 text-text-primary font-medium">Betongstein</td><td className="px-5 py-3 font-mono text-text-secondary">300–600 kr</td><td className="px-5 py-3 font-mono text-accent-yellow">1 500–2 500 kr</td><td className="px-5 py-3 text-text-tertiary">30-50 år</td></tr>
                <tr><td className="px-5 py-3 text-text-primary font-medium">Ståltak (falstak)</td><td className="px-5 py-3 font-mono text-text-secondary">400–800 kr</td><td className="px-5 py-3 font-mono text-accent-yellow">1 800–3 000 kr</td><td className="px-5 py-3 text-text-tertiary">40-60 år</td></tr>
                <tr><td className="px-5 py-3 text-text-primary font-medium">Skifer</td><td className="px-5 py-3 font-mono text-text-secondary">600–1 200 kr</td><td className="px-5 py-3 font-mono text-text-secondary">2 500–4 000 kr</td><td className="px-5 py-3 text-text-tertiary">50-100+ år</td></tr>
                <tr><td className="px-5 py-3 text-text-primary font-medium">Takpapp / shingel</td><td className="px-5 py-3 font-mono text-text-secondary">200–400 kr</td><td className="px-5 py-3 font-mono text-text-secondary">800–1 500 kr</td><td className="px-5 py-3 text-text-tertiary">15-25 år</td></tr>
                <tr><td className="px-5 py-3 text-text-primary font-medium">Torvtak</td><td className="px-5 py-3 font-mono text-text-secondary">400–800 kr</td><td className="px-5 py-3 font-mono text-text-secondary">2 000–3 500 kr</td><td className="px-5 py-3 text-text-tertiary">30-50 år</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Omlegging vs komplett nytt tak</h2>
          <div className="grid sm:grid-cols-2 gap-4 my-6">
            <div className="bg-bg-card border border-surface-border rounded-xl p-5">
              <p className="font-display font-bold text-text-primary mb-2">Omlegging</p>
              <p className="text-sm text-text-secondary mb-2">Pris: <strong>800–2 000 kr/m²</strong></p>
              <p className="text-xs text-text-tertiary">Bytte av takbelegg, undertak og lekter. Beholder eksisterende bærekonstruksjon (sperrer/åser). Egner seg når konstruksjonen er i god stand.</p>
            </div>
            <div className="bg-bg-card border border-surface-border rounded-xl p-5">
              <p className="font-display font-bold text-accent-yellow mb-2">Komplett nytt tak</p>
              <p className="text-sm text-text-secondary mb-2">Pris: <strong>1 500–4 000 kr/m²</strong></p>
              <p className="text-xs text-text-tertiary">Riving til bæring, ny konstruksjon, isolasjon, undertak, lekter og belegg. Nødvendig ved råteskader, endring av takform, eller ved tilbygg/påbygg.</p>
            </div>
          </div>

          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Tegn på at taket bør skiftes</h2>
          <div className="space-y-2 my-6">
            {["Lekkasjer eller fuktmerker på loft/i tak","Takstein som er sprukket, forvitret eller mangler","Mose og algevekst som løfter belegg","Synlig gjennomheng eller setninger i takflaten","Taket er over 30 år gammelt med betongstein eller over 20 år med papp","Isolasjonen på loft er tynn eller sammenpresset","Energikostnadene er uforklarlig høye (varmetap gjennom tak)"].map((t) => (
              <div key={t} className="flex gap-2 text-sm text-text-secondary">
                <IconCheck size={14} className="flex-shrink-0 text-accent-yellow mt-0.5" /><span>{t}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link href="/kalkulator" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent-yellow text-bg-primary font-display font-bold rounded-xl hover:bg-accent-warm transition-colors shadow-glow-sm"><IconCalculator size={18} /> Beregn ditt prosjekt</Link>
            <Link href="/bygge-hus" className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-surface-border text-text-primary font-display font-semibold rounded-xl hover:border-accent-yellow/30 transition-colors">Se husbyggpriser</Link>
          </div>
        </FadeInUp>
      </article>
    </main>
  );
}
