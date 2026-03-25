import { Metadata } from "next";
import Link from "next/link";
import { FadeInUp } from "@/components/ui/animations";
import { IconBlueprint, IconTrend, IconRisk, IconContractor, IconCalculator, IconCheck } from "@/components/icons";
import { BreadcrumbSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Om Byggepris.no – Norges byggeprisguide",
  description: "Byggepris.no er Norges uavhengige plattform for byggepriser og renoveringskostnader. Les om vår metode, datakilder og visjon.",
  alternates: { canonical: "https://byggepris.no/om-byggepris" },
};

export default function Page() {
  return (
    <main className="pt-20">
      <BreadcrumbSchema items={[{ name: "Hjem", href: "/" }, { name: "Om Byggepris.no", href: "/om-byggepris" }]} />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <FadeInUp>
          <nav className="text-sm text-text-muted mb-6"><Link href="/" className="hover:text-accent-yellow">Hjem</Link> / <span className="text-text-secondary">Om Byggepris.no</span></nav>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-text-primary mb-6">Om Byggepris.no</h1>

          <p className="text-lg text-text-secondary mb-6">
            Byggepris.no er Norges uavhengige plattform for byggekostnader og prisinformasjon. Vi hjelper privatpersoner med å forstå hva byggeprosjekter faktisk koster, slik at de kan planlegge bedre og ta informerte beslutninger.
          </p>

          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Vår visjon</h2>
          <p className="text-text-secondary mb-4">
            Vi ønsker å gjøre byggeprisinformasjon tilgjengelig, forståelig og pålitelig for alle. Byggebransjen kan oppleves som uoversiktlig, og mange opplever budsjettsprekk fordi de mangler god prisinformasjon tidlig i prosessen. Byggepris.no skal være det naturlige første steget når du planlegger et byggeprosjekt.
          </p>
          <p className="text-text-secondary mb-4">
            Vår ambisjon er å være Norges mest pålitelige og komplette kilde for byggeprisinformasjon — for privatpersoner, men også nyttig for fagfolk som vil gi kundene realistiske forventninger.
          </p>

          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Hvordan vi jobber</h2>
          <div className="grid sm:grid-cols-2 gap-4 my-6">
            {[
              { icon: IconBlueprint, title: "Basert på reelle markedspriser", desc: "Vi samler og analyserer prisdata fra byggebransjen, SSB og offentlige kilder for å gi realistiske estimater som reflekterer det norske markedet." },
              { icon: IconTrend, title: "Oppdatert jevnlig", desc: "Prisdataene oppdateres regelmessig for å reflektere dagens kostnadsnivå. Vi følger SSBs byggekostnadsindeks og bransjetrender." },
              { icon: IconRisk, title: "Inkluderer skjulte kostnader", desc: "Vi tar hensyn til typiske tilleggskostnader som prosjektering, gebyr, grunnarbeid og uforutsette utgifter — ikke bare selve bygget." },
              { icon: IconContractor, title: "Uavhengig informasjon", desc: "Byggepris.no er en uavhengig plattform. Vi selger ikke byggetjenester, har ingen skjult agenda, og tar ikke betalt for å anbefale leverandører." },
            ].map((p) => (
              <div key={p.title} className="bg-bg-card border border-surface-border rounded-xl p-5">
                <div className="w-10 h-10 rounded-lg bg-accent-yellow/10 flex items-center justify-center text-accent-yellow mb-3"><p.icon size={20} /></div>
                <h3 className="font-display font-bold text-text-primary mb-1">{p.title}</h3>
                <p className="text-sm text-text-secondary">{p.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Våre datakilder</h2>
          <p className="text-text-secondary mb-4">Prisestimatene våre er basert på en kombinasjon av:</p>
          <div className="space-y-2 mb-6">
            {[
              "SSBs byggekostnadsindeks og prisstatistikk for boliger",
              "Bransjerapporter fra byggenæringens organisasjoner",
              "Markedsundersøkelser av håndverkerpriser og materialpriser",
              "Erfaringsdata fra reelle byggeprosjekter i Norge",
              "Prisinformasjon fra materialleverandører og byggevarehus",
              "Offentlig tilgjengelig data om kommunale gebyrer og avgifter",
            ].map((s) => (
              <div key={s} className="flex gap-2 text-sm text-text-secondary">
                <IconCheck size={14} className="flex-shrink-0 text-accent-yellow mt-0.5" /><span>{s}</span>
              </div>
            ))}
          </div>

          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Viktig å forstå</h2>
          <div className="bg-accent-yellow/5 border border-accent-yellow/10 rounded-xl p-6 my-6">
            <p className="text-sm text-text-secondary mb-3">Alle prisestimater på Byggepris.no er <strong className="text-text-primary">veiledende</strong>. De gir et realistisk bilde av hva byggeprosjekter typisk koster i Norge, men faktisk pris for ditt prosjekt kan avvike basert på:</p>
            <ul className="space-y-1 text-sm text-text-secondary">
              <li>• Lokale markedsforhold og tilgang på håndverkere</li>
              <li>• Spesifikke grunnforhold og tomtekarakteristikker</li>
              <li>• Dine konkrete materialvalg og standardønsker</li>
              <li>• Tidspunkt og sesongvariasjoner</li>
              <li>• Skjulte forhold som avdekkes underveis</li>
            </ul>
            <p className="text-sm text-text-secondary mt-3">Vi anbefaler alltid å innhente <strong className="text-text-primary">minst 3 konkrete tilbud</strong> fra kvalifiserte entreprenører for ditt spesifikke prosjekt.</p>
          </div>

          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Hva vi tilbyr</h2>
          <div className="space-y-3 text-text-secondary mb-6">
            <p><strong className="text-text-primary">Gratis byggekalkulator</strong> — beregn estimert kostnad for 9 ulike prosjekttyper basert på størrelse, standard og beliggenhet.</p>
            <p><strong className="text-text-primary">Dybdeartikler og prisguider</strong> — detaljert prisinformasjon for hvert prosjekttype med kostnadsfordeling, sparetips og FAQ.</p>
            <p><strong className="text-text-primary">Prissammenligninger</strong> — m²-priser for alle prosjekttyper, regionale forskjeller og standardnivåer.</p>
            <p><strong className="text-text-primary">Praktiske tips</strong> — sparetips, vanlige feil, skjulte kostnader og råd for å gjennomføre prosjektet smartere.</p>
          </div>

          <div className="mt-10">
            <Link href="/kalkulator" className="inline-flex items-center gap-2 px-5 py-3 bg-accent-yellow text-bg-primary font-display font-bold rounded-xl hover:bg-accent-warm transition-colors shadow-glow-sm">
              <IconCalculator size={18} /> Prøv kalkulatoren
            </Link>
          </div>
        </FadeInUp>
      </article>
    </main>
  );
}
