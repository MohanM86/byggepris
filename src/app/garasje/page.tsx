import { Metadata } from "next";
import CategoryPageTemplate from "@/components/sections/CategoryPageTemplate";
import { projectTypes } from "@/data/prices";
export const metadata: Metadata = { title: "Hva koster garasje? Priser for garasje", description: "Garasjepris 15 000-35 000 kr per m2. Se prisguide.", alternates: { canonical: "https://byggepris.no/garasje" } };
export default function Page() {
  const project = projectTypes.find((p) => p.slug === "garasje")!;
  return (<CategoryPageTemplate project={project}
    intro="En ny garasje i Norge koster typisk mellom 15 000 og 35 000 kr per m2. En standard dobbeltgarasje på 40 m2 koster 600 000-1 400 000 kroner."
    description="Prisene varierer basert på standard, beliggenhet, materialvalg og kompleksitet. Bruk vår kalkulator for å få et mer nøyaktig estimat tilpasset ditt prosjekt."
    costFactors={["Materialvalg og standardnivå","Beliggenhet og lokale markedsforhold","Prosjektets kompleksitet og omfang","Tilgjengelighet på håndverkere","Grunnforhold og eksisterende konstruksjon","VVS og elektrisk installasjon","Prosjekteringskostnader","Uforutsette utgifter og tillegg"]}
    tips={["Innhent minst 3 tilbud fra kvalifiserte entreprenører.","Lag et detaljert budsjett med 10-15% buffer.","Planlegg grundig før du starter.","Vurder hva som gir mest verdi for pengene.","Sjekk referanser og sertifiseringer.","Vurder timing – vinter kan gi lavere priser."]}
    faq={[{question:"Hva er typisk pris per m²?",answer:"Se priskortet øverst på siden for oppdaterte prisintervaller basert på ulike standardnivåer."},{question:"Hvor lang tid tar prosjektet?",answer:"Typisk varighet er angitt i priskortet. Faktisk tid avhenger av omfang og kompleksitet."},{question:"Bør jeg bruke totalentreprenør?",answer:"Totalentreprise gir forutsigbar pris og én kontaktperson, men kan koste noe mer enn å styre underentreprenører selv."}]}
    relatedSlugs={["bygge-hus","tilbygg","hytte","oppussing"]}
    relatedNames={["Bygge hus","Tilbygg","Hytte","Oppussing"]}
  />);
}
