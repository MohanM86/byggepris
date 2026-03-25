import { Metadata } from "next";
import CategoryPageTemplate from "@/components/sections/CategoryPageTemplate";
import { projectTypes } from "@/data/prices";
export const metadata: Metadata = { title: "Hva koster flipping? Priser for boligflipping", description: "Flipping koster 5 000-20 000 kr per m2. Se guide.", alternates: { canonical: "https://byggepris.no/flipping" } };
export default function Page() {
  const project = projectTypes.find((p) => p.slug === "flipping")!;
  return (<CategoryPageTemplate project={project}
    intro="Flipping av bolig koster typisk 5 000-20 000 kr per m2. For en leilighet på 80 m2 betyr det 400 000-1 600 000 kroner avhengig av omfang."
    description="Prisene varierer basert på standard, beliggenhet, materialvalg og kompleksitet. Bruk vår kalkulator for å få et mer nøyaktig estimat tilpasset ditt prosjekt."
    costFactors={["Materialvalg og standardnivå","Beliggenhet og lokale markedsforhold","Prosjektets kompleksitet og omfang","Tilgjengelighet på håndverkere","Grunnforhold og eksisterende konstruksjon","VVS og elektrisk installasjon","Prosjekteringskostnader","Uforutsette utgifter og tillegg"]}
    tips={["Innhent minst 3 tilbud fra kvalifiserte entreprenører.","Lag et detaljert budsjett med 10-15% buffer.","Planlegg grundig før du starter.","Vurder hva som gir mest verdi for pengene.","Sjekk referanser og sertifiseringer.","Vurder timing – vinter kan gi lavere priser."]}
    faq={[{question:"Hva er typisk pris per m²?",answer:"Se priskortet øverst på siden for oppdaterte prisintervaller basert på ulike standardnivåer."},{question:"Hvor lang tid tar prosjektet?",answer:"Typisk varighet er angitt i priskortet. Faktisk tid avhenger av omfang og kompleksitet."},{question:"Bør jeg bruke totalentreprenør?",answer:"Totalentreprise gir forutsigbar pris og én kontaktperson, men kan koste noe mer enn å styre underentreprenører selv."}]}
    relatedSlugs={["oppussing","bad","kjokken","totalrenovering"]}
    relatedNames={["Oppussing","Bad","Kjøkken","Totalrenovering"]}
  />);
}
