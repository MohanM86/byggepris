import { Metadata } from "next";
import CategoryPageTemplate from "@/components/sections/CategoryPageTemplate";
import { projectTypes } from "@/data/prices";
export const metadata: Metadata = { title: "Hva koster totalrenovering? Prisguide", description: "Totalrenovering 15 000-40 000 kr per m2. Komplett prisguide.", alternates: { canonical: "https://byggepris.no/totalrenovering" } };
export default function Page() {
  const project = projectTypes.find((p) => p.slug === "totalrenovering")!;
  return (<CategoryPageTemplate project={project}
    intro="Totalrenovering i Norge koster typisk mellom 15 000 og 40 000 kr per m2. For en bolig på 120 m2 betyr det 1,8 til 4,8 millioner kroner."
    description="Prisene varierer basert på standard, beliggenhet, materialvalg og kompleksitet. Bruk vår kalkulator for å få et mer nøyaktig estimat tilpasset ditt prosjekt."
    costFactors={["Materialvalg og standardnivå","Beliggenhet og lokale markedsforhold","Prosjektets kompleksitet og omfang","Tilgjengelighet på håndverkere","Grunnforhold og eksisterende konstruksjon","VVS og elektrisk installasjon","Prosjekteringskostnader","Uforutsette utgifter og tillegg"]}
    tips={["Innhent minst 3 tilbud fra kvalifiserte entreprenører.","Lag et detaljert budsjett med 10-15% buffer.","Planlegg grundig før du starter.","Vurder hva som gir mest verdi for pengene.","Sjekk referanser og sertifiseringer.","Vurder timing – vinter kan gi lavere priser."]}
    faq={[{question:"Hva er typisk pris per m²?",answer:"Se priskortet øverst på siden for oppdaterte prisintervaller basert på ulike standardnivåer."},{question:"Hvor lang tid tar prosjektet?",answer:"Typisk varighet er angitt i priskortet. Faktisk tid avhenger av omfang og kompleksitet."},{question:"Bør jeg bruke totalentreprenør?",answer:"Totalentreprise gir forutsigbar pris og én kontaktperson, men kan koste noe mer enn å styre underentreprenører selv."}]}
    relatedSlugs={["oppussing","bad","kjokken","bygge-hus"]}
    relatedNames={["Oppussing","Bad","Kjøkken","Bygge hus"]}
  />);
}
