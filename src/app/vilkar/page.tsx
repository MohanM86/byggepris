import { Metadata } from "next";
import Link from "next/link";
import { FadeInUp } from "@/components/ui/animations";
export const metadata: Metadata = { title: "Vilkår for bruk", description: "Vilkår for bruk av Byggepris.no." };
export default function Page() {
  return (<main className="pt-20"><article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14"><FadeInUp>
    <nav className="text-sm text-text-muted mb-6"><Link href="/" className="hover:text-accent-yellow">Hjem</Link> / <span className="text-text-secondary">Vilkår</span></nav>
    <h1 className="font-display font-extrabold text-3xl text-text-primary mb-6">Vilkår for bruk</h1>
    <div className="prose prose-invert max-w-none text-text-secondary space-y-4">
      <p>Ved å bruke Byggepris.no godtar du følgende vilkår.</p>
      <h2 className="font-display font-bold text-xl text-text-primary mt-8 mb-3">Prisestimater</h2>
      <p>Alle prisestimater på Byggepris.no er veiledende og erstatter ikke profesjonell rådgivning. Faktiske kostnader kan avvike betydelig fra estimatene. Vi anbefaler alltid å innhente konkrete tilbud fra kvalifiserte entreprenører.</p>
      <h2 className="font-display font-bold text-xl text-text-primary mt-8 mb-3">Ansvarsbegrensning</h2>
      <p>Byggepris.no kan ikke holdes ansvarlig for beslutninger tatt basert på informasjon fra tjenesten. Bruk informasjonen som et utgangspunkt og innhent alltid profesjonell rådgivning for ditt spesifikke prosjekt.</p>
      <h2 className="font-display font-bold text-xl text-text-primary mt-8 mb-3">Opphavsrett</h2>
      <p>Alt innhold på Byggepris.no er beskyttet av opphavsrett. Gjenbruk krever skriftlig tillatelse.</p>
    </div>
  </FadeInUp></article></main>);
}
