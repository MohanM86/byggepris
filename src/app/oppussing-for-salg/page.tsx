import { Metadata } from "next";
import Link from "next/link";
import { FadeInUp } from "@/components/ui/animations";
import { IconCalculator } from "@/components/icons";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "@/components/seo/JsonLd";

const faq = [
  { question: "Hva lønner seg å pusse opp før salg?", answer: "Maling og overflater gir best avkastning (100-200% tilbake). Deretter nye gulv (80-120%), kjøkkenoppgradering (60-90%) og baderomsrenovering (50-80%). Unngå dyre tiltak som totalrenovering kun for salg." },
  { question: "Hvor mye øker verdien med nytt bad?", answer: "Et nytt bad øker boligverdien med typisk 50-80% av investeringen. Et bad til 350 000 kr kan øke verdien med 175 000-280 000 kr. Avkastningen er best hvis det gamle badet var utdatert eller skadet." },
  { question: "Hvor mye øker verdien med nytt kjøkken?", answer: "Nytt kjøkken øker verdien med typisk 60-90% av investeringen. Et kjøkken til 250 000 kr kan øke verdien med 150 000-225 000 kr. Nye fronter og benkeplate på eksisterende kjøkken gir enda bedre avkastning." },
  { question: "Er det verdt å pusse opp før salg?", answer: "Ja, for de riktige tiltakene. Maling, gulv og enkel kjøkkenoppgradering gir nesten alltid mer tilbake enn de koster. Full baderomsrenovering lønner seg bare hvis badet er virkelig dårlig. Totalrenovering lønner seg sjelden kun for salg." },
  { question: "Hva trekker opp prisen på boligen?", answer: "De viktigste verdidriverne er: modernisert bad og kjøkken, lyse og nøytrale overflater, god planløsning, nye gulv, godt vedlikehold, energieffektivitet og ryddig utvendig. Profesjonell styling øker prisen 5-10%." },
  { question: "Når på året lønner det seg å selge?", answer: "Våren (mars-juni) er beste tid for boligsalg — flest kjøpere og høyest priser. September-oktober er nest best. Unngå juli og desember. Planlegg oppussingen slik at du er klar for salg i mars-april." },
  { question: "Hva koster boligstyling?", answer: "Profesjonell boligstyling koster typisk 15 000-40 000 kr for en leilighet og 25 000-60 000 kr for et hus. Det inkluderer møbler, tilbehør og styling for fotografering. Investering som ofte gir 5-10% høyere salgspris." },
  { question: "Bør jeg male før salg?", answer: "Ja, maling er det tiltaket med høyest avkastning. Det koster 15 000-40 000 kr for en leilighet og gir inntrykk av en velholdt, ny bolig. Bruk lyse, nøytrale farger (hvit, lys grå) som appellerer til flest kjøpere." },
  { question: "Lønner det seg å legge nytt gulv før salg?", answer: "Ja, nye gulv gir typisk 80-120% avkastning. Parkett eller eikefinér gir best inntrykk. For en leilighet på 70 m² koster nye gulv 50 000-100 000 kr og kan øke verdien med 60 000-120 000 kr." },
  { question: "Hva bør man ikke pusse opp før salg?", answer: "Unngå: totalrenovering kun for salg (for høy kostnad), dyre spesialtilpasninger (personlig smak), utbygging/tilbygg (lang prosess), og luksusmaterialer i budsjettområder (overinvestering). Fokuser på det synlige og kostnadseffektive." },
];

export const metadata: Metadata = {
  title: "Oppussing før salg – Hva lønner seg å pusse opp?",
  description: "Hvilke oppussingstiltak gir best avkastning ved boligsalg? Se rangering av tiltak, kostnader og forventet verdiøkning.",
  alternates: { canonical: "https://byggepris.no/oppussing-for-salg" },
  openGraph: { title: "Oppussing før salg – hva lønner seg?", description: "Tiltak rangert etter avkastning.", url: "https://byggepris.no/oppussing-for-salg", type: "article" },
};

export default function Page() {
  return (
    <main className="pt-20">
      <BreadcrumbSchema items={[{ name: "Hjem", href: "/" }, { name: "Oppussing før salg", href: "/oppussing-for-salg" }]} />
      <ArticleSchema title="Oppussing før salg" description="Hva lønner seg å pusse opp før boligsalg." slug="oppussing-for-salg" />
      <FAQSchema items={faq} />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <FadeInUp>
          <nav className="text-sm text-text-muted mb-6"><Link href="/" className="hover:text-accent-yellow">Hjem</Link> / <span className="text-text-secondary">Oppussing før salg</span></nav>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-text-primary mb-6">Oppussing før salg – hva lønner seg?</h1>

          <p className="text-lg text-text-secondary mb-6">Riktig oppussing før boligsalg kan øke salgsprisen med mer enn investeringen koster. Men ikke alle tiltak lønner seg. Nøkkelen er å fokusere på det som gir størst visuell effekt for pengene, og unngå dyre tiltak som ikke gir tilsvarende verdiøkning.</p>

          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Tiltak rangert etter avkastning</h2>
          <div className="space-y-4 my-6">
            {[
              { nr: 1, title: "Maling og overflater", cost: "15 000–40 000 kr", roi: "100–200%", color: "text-accent-yellow", desc: "Klart best avkastning. Gir inntrykk av ny bolig. Bruk lyse, nøytrale farger. Inkluder tak, vegger og lister." },
              { nr: 2, title: "Nye gulv", cost: "50 000–120 000 kr", roi: "80–120%", color: "text-accent-yellow", desc: "Stor visuell effekt. Parkett eller eikefinér gir best inntrykk. Unngå billig laminat som signaliserer budsjett." },
              { nr: 3, title: "Kjøkkenoppgradering", cost: "30 000–200 000 kr", roi: "60–90%", color: "text-accent-yellow", desc: "Nye fronter og benkeplate kan være nok (30 000-80 000 kr). Komplett nytt kjøkken gir mer, men koster mer. Kjøkken er viktig for kjøpere." },
              { nr: 4, title: "Utvendig oppgradering", cost: "20 000–100 000 kr", roi: "50–80%", color: "text-accent-amber", desc: "Førsteinntrykk teller. Maling av fasade, rydding, ny belysning, planter. Billig tiltak med god effekt." },
              { nr: 5, title: "Baderomsrenovering", cost: "200 000–500 000 kr", roi: "50–80%", color: "text-accent-amber", desc: "Viktig for salg, men dyrt. Vurder overflateoppdatering (ny fuging, maling, nytt tilbehør, ny dusjvegg) til 20 000-50 000 kr i stedet for full renovering." },
              { nr: 6, title: "Profesjonell styling", cost: "15 000–40 000 kr", roi: "200–500%", color: "text-accent-yellow", desc: "Ekstremt god avkastning. Profesjonelle møbler og foto kan øke salgsprisen med 5-10%. Nesten alltid verdt investeringen." },
            ].map((t) => (
              <div key={t.nr} className="bg-bg-card border border-surface-border rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <span className={`w-8 h-8 rounded-lg bg-accent-yellow/10 border border-accent-yellow/20 ${t.color} text-sm font-display font-bold flex items-center justify-center flex-shrink-0`}>{t.nr}</span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-display font-bold text-text-primary">{t.title}</h3>
                      <span className={`font-mono text-sm font-semibold ${t.color}`}>{t.roi} ROI</span>
                    </div>
                    <p className="text-xs text-text-muted mb-2">Typisk kostnad: {t.cost}</p>
                    <p className="text-sm text-text-secondary">{t.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Eksempel: Leilighet 70 m² – oppussing for salg</h2>
          <div className="bg-bg-card border border-surface-border rounded-xl p-6 my-6">
            <div className="space-y-3 text-sm">
              <div className="flex justify-between"><span>Male hele leiligheten</span><span className="font-mono text-text-primary">25 000 kr</span></div>
              <div className="flex justify-between"><span>Nye gulv (parkett)</span><span className="font-mono text-text-primary">70 000 kr</span></div>
              <div className="flex justify-between"><span>Nye kjøkkenfronter + benkeplate</span><span className="font-mono text-text-primary">50 000 kr</span></div>
              <div className="flex justify-between"><span>Ny fuging + tilbehør bad</span><span className="font-mono text-text-primary">15 000 kr</span></div>
              <div className="flex justify-between"><span>Profesjonell styling og foto</span><span className="font-mono text-text-primary">25 000 kr</span></div>
              <div className="flex justify-between border-t border-surface-border pt-3 mt-3"><span className="font-semibold text-text-primary">Total investering</span><span className="font-mono text-text-primary font-semibold">185 000 kr</span></div>
              <div className="flex justify-between"><span className="font-semibold text-accent-yellow">Forventet verdiøkning</span><span className="font-mono text-accent-yellow font-semibold">250 000–400 000 kr</span></div>
              <div className="flex justify-between"><span className="font-semibold text-accent-yellow">Netto gevinst</span><span className="font-mono text-accent-yellow font-semibold">65 000–215 000 kr</span></div>
            </div>
          </div>

          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Hva du IKKE bør gjøre før salg</h2>
          <div className="space-y-3 text-text-secondary mb-6">
            <p><strong className="text-text-primary">Totalrenovering:</strong> For dyrt og tidkrevende kun for salg. Lønner seg sjelden med mindre boligen er usalgbar i nåværende stand.</p>
            <p><strong className="text-text-primary">Dyre spesialtilpasninger:</strong> Innebygde løsninger, spesialbestilte materialer og personlig smak appellerer ikke nødvendigvis til kjøpere.</p>
            <p><strong className="text-text-primary">Tilbygg/utbygging:</strong> Tar for lang tid (3-6 mnd) og gir sjelden full avkastning ved umiddelbart salg.</p>
            <p><strong className="text-text-primary">Luksusmaterialer i budsjettområde:</strong> Overinvestering. Tilpass standarden til prisnivået i nabolaget.</p>
          </div>

          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Timing er viktig</h2>
          <p className="text-text-secondary mb-4">
            Planlegg oppussingen slik at boligen er klar for salg i <strong>mars-april</strong>, som er den beste tiden å selge bolig i Norge. Regn med 4-8 uker for oppussing og 2-3 uker for styling, foto og annonsering. Start planleggingen i januar for vårsalg.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link href="/kalkulator" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent-yellow text-bg-primary font-display font-bold rounded-xl hover:bg-accent-warm transition-colors shadow-glow-sm"><IconCalculator size={18} /> Beregn oppussingskostnad</Link>
            <Link href="/flipping" className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-surface-border text-text-primary font-display font-semibold rounded-xl hover:border-accent-yellow/30 transition-colors">Se guide for boligflipping</Link>
          </div>
        </FadeInUp>
      </article>
    </main>
  );
}
