import { Metadata } from "next";
import Link from "next/link";
import { FadeInUp } from "@/components/ui/animations";
import { IconCalculator, IconCheck } from "@/components/icons";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "@/components/seo/JsonLd";

const faq = [
  { question: "Er det billigere å bygge hus eller kjøpe?", answer: "I pressområder som Oslo er det ofte billigere å bygge enn å kjøpe tilsvarende ferdig bolig. I mindre pressede områder kan bruktbolig være rimeligere. Hovedregelen: nybygg koster 30 000-55 000 kr/m², mens bruktboligpris avhenger helt av beliggenhet." },
  { question: "Hva koster det å totalrenovere et hus på 200 m²?", answer: "Totalrenovering av 200 m² koster typisk 3-8 millioner kr (15 000-40 000 kr/m²). Til sammenligning koster nybygg på 200 m² ca. 6-11 millioner kr (30 000-55 000 kr/m²). Totalrenovering lønner seg hvis kostnaden er under 60-70% av nybyggpris." },
  { question: "Er det lurt å bygge hus nå?", answer: "Materialpriser har stabilisert seg etter toppårene 2021-2022, og tilgangen på håndverkere er bedre. Byggekostnadene stiger typisk 3-5% per år, så å vente er sjelden billigere. Vurder din økonomiske situasjon og behov fremfor å time markedet." },
  { question: "Er nybygg en god investering?", answer: "Nybygg gir lavere vedlikeholdskostnader de første 10-15 årene, moderne energistandard (TEK17), og full designfrihet. Men verdistigningen er ofte lavere enn for bruktbolig i attraktive områder fordi nybygg allerede er priset til markedsnivå." },
  { question: "Når lønner det seg å rive og bygge nytt?", answer: "Det lønner seg å rive og bygge nytt når: totalrenoveringskostnaden overstiger 60-70% av nybyggpris, boligen har store konstruksjonsmangler (setningsskader, råte i bæring), eller du trenger vesentlig mer plass enn eksisterende bolig tillater." },
  { question: "Hva koster det å renovere et gammelt hus?", answer: "Renovering av gammelt hus (pre-1970) koster typisk 20 000-50 000 kr/m², altså 20-50% mer enn nyere boliger. Årsaken er skjulte problemer: asbest, fuktskader, dårlig isolasjon, underdimensjonert elektro. Budsjetter med minst 20% buffer." },
  { question: "Bygge nytt vs pusse opp – hva gir best verdi?", answer: "Oppussing gir best verdi hvis boligen har god beliggenhet, solid bærekonstruksjon og du kan beholde eksisterende planløsning. Nybygg gir best verdi hvis du trenger vesentlig mer plass, boligen har store konstruksjonsproblemer, eller du bygger i et område med høye tomtepriser." },
  { question: "Hvor lang tid tar totalrenovering vs nybygg?", answer: "Totalrenovering tar typisk 3-7 måneder. Nybygg tar 8-12 måneder for selve byggingen, pluss 3-6 måneder planlegging. Total tid: renovering 4-9 mnd, nybygg 12-18 mnd." },
  { question: "Kan man bo i huset under renovering?", answer: "Ved enklere oppussing (maling, gulv) kan du ofte bo i huset. Ved totalrenovering bør du flytte ut – det går raskere, blir billigere, og du slipper støv og støy. Midlertidig bolig koster 15 000-50 000 kr/mnd, men sparer tid og frustrasjon." },
  { question: "Hva er billigst per m² – renovere eller bygge nytt?", answer: "Renovering er nesten alltid billigst per m²: 8 000-40 000 kr/m² vs 30 000-55 000 kr/m² for nybygg. Men totalrenovering av eldre boliger med mange problemer kan nærme seg nybyggpris (40 000+ kr/m²), og da kan nybygg gi bedre resultat." },
];

export const metadata: Metadata = {
  title: "Bygge nytt vs pusse opp – Hva lønner seg i 2026?",
  description: "Komplett sammenligning av kostnader mellom nybygg og oppussing. Se m²-priser, tidsbruk, fordeler og ulemper for begge alternativer.",
  alternates: { canonical: "https://byggepris.no/bygge-nytt-vs-pusse-opp" },
  openGraph: { title: "Bygge nytt vs pusse opp – hva lønner seg?", description: "Komplett kostnadssammenligning.", url: "https://byggepris.no/bygge-nytt-vs-pusse-opp", type: "article" },
};

export default function Page() {
  return (
    <main className="pt-20">
      <BreadcrumbSchema items={[{ name: "Hjem", href: "/" }, { name: "Bygge nytt vs pusse opp", href: "/bygge-nytt-vs-pusse-opp" }]} />
      <ArticleSchema title="Bygge nytt vs pusse opp" description="Komplett sammenligning av kostnader." slug="bygge-nytt-vs-pusse-opp" />
      <FAQSchema items={faq} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <FadeInUp>
          <nav className="text-sm text-text-muted mb-6">
            <Link href="/" className="hover:text-accent-yellow">Hjem</Link> / <span className="text-text-secondary">Bygge nytt vs pusse opp</span>
          </nav>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-text-primary mb-6">Bygge nytt vs pusse opp – hva lønner seg?</h1>

          <p className="text-lg text-text-secondary mb-6">
            Valget mellom å bygge nytt og pusse opp avhenger av boligens tilstand, beliggenhet, budsjettet ditt og hva du ønsker å oppnå. Generelt er oppussing rimeligere per m² (8 000-40 000 kr) enn nybygg (30 000-55 000 kr), men nybygg gir større fleksibilitet og lavere vedlikeholdskostnader.
          </p>

          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Prissammenligning side om side</h2>
          <div className="bg-bg-card border border-surface-border rounded-2xl overflow-hidden my-6">
            <table className="w-full text-sm">
              <thead><tr className="text-left text-xs text-text-muted uppercase tracking-wider border-b border-surface-border"><th className="px-5 py-3"></th><th className="px-5 py-3">Pusse opp</th><th className="px-5 py-3">Totalrenovere</th><th className="px-5 py-3">Bygge nytt</th></tr></thead>
              <tbody className="divide-y divide-surface-border">
                <tr><td className="px-5 py-3 text-text-primary font-medium">Pris per m²</td><td className="px-5 py-3 font-mono text-steel-400">8 000–25 000 kr</td><td className="px-5 py-3 font-mono text-accent-amber">15 000–40 000 kr</td><td className="px-5 py-3 font-mono text-accent-yellow">30 000–55 000 kr</td></tr>
                <tr><td className="px-5 py-3 text-text-primary font-medium">150 m² bolig</td><td className="px-5 py-3 font-mono text-text-secondary">1,2–3,75 mill.</td><td className="px-5 py-3 font-mono text-text-secondary">2,25–6 mill.</td><td className="px-5 py-3 font-mono text-text-secondary">4,5–8,25 mill.</td></tr>
                <tr><td className="px-5 py-3 text-text-primary font-medium">Typisk tid</td><td className="px-5 py-3 text-text-secondary">1–4 mnd</td><td className="px-5 py-3 text-text-secondary">3–7 mnd</td><td className="px-5 py-3 text-text-secondary">12–18 mnd</td></tr>
                <tr><td className="px-5 py-3 text-text-primary font-medium">Designfrihet</td><td className="px-5 py-3 text-text-secondary">Begrenset</td><td className="px-5 py-3 text-text-secondary">Middels</td><td className="px-5 py-3 text-text-secondary">Full</td></tr>
                <tr><td className="px-5 py-3 text-text-primary font-medium">Byggesøknad</td><td className="px-5 py-3 text-text-secondary">Sjelden</td><td className="px-5 py-3 text-text-secondary">Ofte</td><td className="px-5 py-3 text-text-secondary">Alltid</td></tr>
                <tr><td className="px-5 py-3 text-text-primary font-medium">Energistandard</td><td className="px-5 py-3 text-text-secondary">Uendret</td><td className="px-5 py-3 text-text-secondary">Delvis oppgradert</td><td className="px-5 py-3 text-text-secondary">TEK17 (best)</td></tr>
                <tr><td className="px-5 py-3 text-text-primary font-medium">Risiko for overraskelser</td><td className="px-5 py-3 text-text-secondary">Lav</td><td className="px-5 py-3 text-accent-amber">Høy</td><td className="px-5 py-3 text-text-secondary">Lav-middels</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Når lønner det seg å pusse opp?</h2>
          <div className="grid md:grid-cols-2 gap-5 my-6">
            <div className="bg-bg-card border border-surface-border rounded-2xl p-6">
              <h3 className="font-display font-bold text-lg text-text-primary mb-3">Pusse opp er best når:</h3>
              <div className="space-y-2">
                {["Boligens grunnstruktur er solid","Du er fornøyd med beliggenheten","Oppussing kan gjøres etappevis","Budsjettet er begrenset","Du beholder eksisterende planløsning","Boligen er under 40-50 år gammel"].map((t) => (
                  <div key={t} className="flex gap-2 text-sm text-text-secondary">
                    <IconCheck size={14} className="flex-shrink-0 text-steel-400 mt-0.5" /><span>{t}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-bg-card border border-surface-border rounded-2xl p-6">
              <h3 className="font-display font-bold text-lg text-accent-yellow mb-3">Bygge nytt er best når:</h3>
              <div className="space-y-2">
                {["Totalrenovering koster over 60-70% av nybyggpris","Boligen har store konstruksjonsproblemer","Du trenger vesentlig mer plass","Du vil ha full designfrihet","Tomten tillater nybygg","Du vil ha moderne energistandard (TEK17)"].map((t) => (
                  <div key={t} className="flex gap-2 text-sm text-text-secondary">
                    <IconCheck size={14} className="flex-shrink-0 text-accent-yellow mt-0.5" /><span>{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Tommelfingerregel: 60/70-regelen</h2>
          <p className="text-text-secondary mb-4">
            Hvis totalrenoveringen koster <strong>mer enn 60-70% av hva det ville kostet å bygge nytt</strong>, bør du vurdere nybygg. Da får du en helt ny bolig med moderne standard, garantier og lave vedlikeholdskostnader — for en relativt liten merkostnad sammenlignet med å lappe på en gammel.
          </p>
          <div className="bg-accent-yellow/5 border border-accent-yellow/10 rounded-xl p-6 my-6">
            <p className="text-sm text-text-secondary"><strong className="text-text-primary">Eksempel:</strong> En bolig på 150 m² der totalrenovering er estimert til 4,5 mill. kr og nybygg til 6,5 mill. kr. Renovering er 69% av nybyggpris — altså i grenseland. Her bør du vurdere nybygg fordi du får en helt ny bolig med garantier for bare 2 mill. kr mer.</p>
          </div>

          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Skjulte kostnader som tipper regnestykket</h2>
          <p className="text-text-secondary mb-4">Ved renovering av eldre boliger er det vanlig å finne problemer som ikke var synlige før riving:</p>
          <div className="bg-bg-card border border-surface-border rounded-xl p-6 my-6">
            <div className="space-y-3 text-sm">
              <div className="flex justify-between"><span className="text-text-secondary">Fuktskader i bærekonstruksjon</span><span className="font-mono text-accent-amber">50 000–300 000 kr</span></div>
              <div className="flex justify-between"><span className="text-text-secondary">Asbest som krever sanering</span><span className="font-mono text-accent-amber">30 000–100 000 kr</span></div>
              <div className="flex justify-between"><span className="text-text-secondary">Elektrisk anlegg som må byttes</span><span className="font-mono text-accent-amber">80 000–200 000 kr</span></div>
              <div className="flex justify-between"><span className="text-text-secondary">Dårlig fundament / setningsskader</span><span className="font-mono text-accent-amber">100 000–500 000 kr</span></div>
              <div className="flex justify-between"><span className="text-text-secondary">Manglende isolasjon som må etterfylles</span><span className="font-mono text-accent-amber">50 000–200 000 kr</span></div>
            </div>
          </div>
          <p className="text-text-secondary mb-4">
            Disse overraskelsene kan øke renoveringskostnaden med 20-40%, og plutselig nærmer du deg nybyggpris. Ved nybygg er kostnadene mer forutsigbare fordi du bygger fra scratch.
          </p>

          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Verdistigning: nybygg vs renovert</h2>
          <p className="text-text-secondary mb-4">
            En godt renovert bolig i attraktivt område kan ha like god eller bedre verdistigning enn nybygg, fordi beliggenheten ofte er mer sentral. Nybygg i nye boligfelt kan oppleve god verdistigning de første årene, men stabiliserer seg deretter. For ren investering er beliggenhet viktigere enn om boligen er ny eller renovert.
          </p>

          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Energikostnader over tid</h2>
          <p className="text-text-secondary mb-4">
            Et nybygg etter TEK17 bruker typisk <strong>50-70% mindre energi</strong> enn en bolig fra 1970-tallet. For en bolig på 150 m² kan dette spare 15 000-30 000 kr per år i strøm. Over 20 år er det 300 000-600 000 kr spart. Når du sammenligner totalkostnad bør du inkludere energibesparelsen i regnestykket.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Link href="/kalkulator" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent-yellow text-bg-primary font-display font-bold rounded-xl hover:bg-accent-warm transition-colors shadow-glow-sm">
              <IconCalculator size={18} /> Beregn begge alternativer
            </Link>
            <Link href="/totalrenovering" className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-surface-border text-text-primary font-display font-semibold rounded-xl hover:border-accent-yellow/30 transition-colors">
              Se totalrenoveringspriser
            </Link>
          </div>
        </FadeInUp>
      </article>
    </main>
  );
}
