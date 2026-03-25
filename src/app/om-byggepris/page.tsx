import { Metadata } from "next";
import Link from "next/link";
import { FadeInUp } from "@/components/ui/animations";
export const metadata: Metadata = { title: "Om Byggepris.no – Norges byggeprisguide", description: "Byggepris.no er Norges uavhengige plattform for byggepriser og renoveringskostnader. Les mer om oss og vår metode.", alternates: { canonical: "https://byggepris.no/om-byggepris" } };
export default function Page() {
  return (<main className="pt-20"><article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14"><FadeInUp>
    <nav className="text-sm text-text-muted mb-6"><Link href="/" className="hover:text-accent-yellow">Hjem</Link> / <span className="text-text-secondary">Om Byggepris.no</span></nav>
    <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-text-primary mb-6">Om Byggepris.no</h1>
    <p className="text-lg text-text-secondary mb-6">Byggepris.no er Norges uavhengige plattform for byggekostnader og prisinformasjon. Vi hjelper privatpersoner med å forstå hva byggeprosjekter faktisk koster, slik at de kan planlegge bedre og ta informerte beslutninger.</p>
    <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Vår visjon</h2>
    <p className="text-text-secondary mb-6">Vi ønsker å gjøre byggeprisinformasjon tilgjengelig, forståelig og pålitelig for alle. Byggebransjen kan oppleves som uoversiktlig, og mange opplever budsjettsprekk fordi de mangler god prisinformasjon tidlig i prosessen.</p>
    <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Hvordan vi jobber</h2>
    <p className="text-text-secondary mb-4">Våre prisestimater er basert på en kombinasjon av offentlig tilgjengelig data fra SSB, bransjerapporter, markedsundersøkelser og erfaringsdata. Vi oppdaterer prisene jevnlig for å reflektere dagens kostnadsnivå.</p>
    <p className="text-text-secondary mb-4">Alle estimater er veiledende. Vi anbefaler alltid å innhente konkrete tilbud fra kvalifiserte entreprenører for ditt spesifikke prosjekt.</p>
    <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Uavhengighet</h2>
    <p className="text-text-secondary mb-6">Byggepris.no er en uavhengig plattform. Vi selger ikke byggetjenester og har ingen økonomisk interesse i å anbefale bestemte leverandører. Vårt mål er å gi deg nøytral og pålitelig informasjon.</p>
  </FadeInUp></article></main>);
}
