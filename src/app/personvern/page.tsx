import { Metadata } from "next";
import Link from "next/link";
import { FadeInUp } from "@/components/ui/animations";
export const metadata: Metadata = { title: "Personvernerklæring", description: "Personvernerklæring for Byggepris.no." };
export default function Page() {
  return (<main className="pt-20"><article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14"><FadeInUp>
    <nav className="text-sm text-text-muted mb-6"><Link href="/" className="hover:text-accent-yellow">Hjem</Link> / <span className="text-text-secondary">Personvern</span></nav>
    <h1 className="font-display font-extrabold text-3xl text-text-primary mb-6">Personvernerklæring</h1>
    <div className="prose prose-invert max-w-none text-text-secondary space-y-4">
      <p>Byggepris.no tar personvern på alvor. Denne erklæringen beskriver hvordan vi behandler personopplysninger.</p>
      <h2 className="font-display font-bold text-xl text-text-primary mt-8 mb-3">Informasjon vi samler</h2>
      <p>Byggepris.no samler anonymisert bruksdata gjennom analyse-verktøy for å forbedre tjenesten. Vi samler ikke personopplysninger med mindre du aktivt oppgir dem.</p>
      <h2 className="font-display font-bold text-xl text-text-primary mt-8 mb-3">Informasjonskapsler</h2>
      <p>Vi bruker nødvendige informasjonskapsler for at nettstedet skal fungere, samt analyse-cookies for å forstå hvordan tjenesten brukes.</p>
      <h2 className="font-display font-bold text-xl text-text-primary mt-8 mb-3">Dine rettigheter</h2>
      <p>Du har rett til innsyn, retting og sletting av personopplysninger. Kontakt oss for spørsmål om personvern.</p>
    </div>
  </FadeInUp></article></main>);
}
