import { Metadata } from "next";
import Link from "next/link";
import { FadeInUp } from "@/components/ui/animations";
import { IconCalculator, IconCheck } from "@/components/icons";

export const metadata: Metadata = {
  title: "Bygge nytt vs pusse opp – Hva lønner seg?",
  description: "Sammenligning av kostnader mellom å bygge nytt og pusse opp. Se når det lønner seg å renovere og når nybygg er bedre.",
  alternates: { canonical: "https://byggepris.no/bygge-nytt-vs-pusse-opp" },
};

export default function Page() {
  return (
    <main className="pt-20">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <FadeInUp>
          <nav className="text-sm text-text-muted mb-6">
            <Link href="/" className="hover:text-accent-yellow">Hjem</Link> / <span className="text-text-secondary">Bygge nytt vs pusse opp</span>
          </nav>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-text-primary mb-6">
            Bygge nytt vs pusse opp – Hva lønner seg?
          </h1>
          <p className="text-lg text-text-secondary mb-6">
            Valget mellom å bygge nytt og pusse opp avhenger av boligens tilstand, budsjettet ditt, og hva du ønsker å oppnå. Generelt er oppussing rimeligere, men nybygg gir større fleksibilitet og lavere vedlikeholdskostnader de første årene.
          </p>

          <div className="grid md:grid-cols-2 gap-5 my-8">
            <div className="bg-bg-card border border-surface-border rounded-2xl p-6">
              <h2 className="font-display font-bold text-xl text-accent-yellow mb-4">Bygge nytt</h2>
              <div className="space-y-3 mb-4">
                {["Full frihet til å designe etter eget ønske", "Nye materialer og teknologi", "Lave vedlikeholdskostnader i mange år", "Optimale energiløsninger (TEK17)", "Forutsigbar prosess med totalentreprise"].map((t) => (
                  <div key={t} className="flex gap-2 text-sm text-text-secondary">
                    <IconCheck size={14} className="flex-shrink-0 text-accent-yellow mt-0.5" />
                    <span>{t}</span>
                  </div>
                ))}
              </div>
              <div className="bg-bg-primary rounded-xl p-4">
                <p className="text-xs text-text-muted mb-1">Typisk m²-pris</p>
                <p className="font-display font-bold text-text-primary">30 000 – 55 000 kr</p>
              </div>
            </div>

            <div className="bg-bg-card border border-surface-border rounded-2xl p-6">
              <h2 className="font-display font-bold text-xl text-text-primary mb-4">Pusse opp</h2>
              <div className="space-y-3 mb-4">
                {["Lavere totalkostnad enn nybygg", "Beholde eksisterende beliggenhet og tomt", "Kortere prosjektperiode for deloppussing", "Økt boligverdi uten full investering", "Mulighet for etappevis gjennomføring"].map((t) => (
                  <div key={t} className="flex gap-2 text-sm text-text-secondary">
                    <IconCheck size={14} className="flex-shrink-0 text-steel-400 mt-0.5" />
                    <span>{t}</span>
                  </div>
                ))}
              </div>
              <div className="bg-bg-primary rounded-xl p-4">
                <p className="text-xs text-text-muted mb-1">Typisk m²-pris</p>
                <p className="font-display font-bold text-text-primary">8 000 – 40 000 kr</p>
              </div>
            </div>
          </div>

          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Når lønner det seg å bygge nytt?</h2>
          <p className="text-text-secondary mb-4">
            Nybygg lønner seg typisk når totalrenoveringskostnaden overstiger 60-70% av nybyggpris, når boligen har store konstruksjonsmessige problemer, eller når du trenger vesentlig mer plass enn dagens bolig tillater.
          </p>

          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Når lønner det seg å pusse opp?</h2>
          <p className="text-text-secondary mb-4">
            Oppussing lønner seg når boligens grunnstruktur er god, når du er fornøyd med beliggenheten, og når oppussingen kan gjøres etappevis. Det er også ofte billigere å pusse opp enn å bygge nytt, spesielt for bad, kjøkken og overflater.
          </p>

          <div className="mt-10">
            <Link href="/kalkulator" className="inline-flex items-center gap-2 px-5 py-3 bg-accent-yellow text-bg-primary font-display font-bold rounded-xl hover:bg-accent-warm transition-colors shadow-glow-sm">
              <IconCalculator size={18} /> Beregn begge alternativer
            </Link>
          </div>
        </FadeInUp>
      </article>
    </main>
  );
}
