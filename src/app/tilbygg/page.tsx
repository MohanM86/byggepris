import { Metadata } from "next";
import CategoryPageTemplate from "@/components/sections/CategoryPageTemplate";
import { projectTypes } from "@/data/prices";
export const metadata: Metadata = { title: "Hva koster tilbygg? Pris per m² for tilbygg i Norge", description: "Typisk pris for tilbygg er 35 000-65 000 kr per m². Se komplett prisguide for tilbygg med kalkulator og kostnadsfaktorer.", alternates: { canonical: "https://byggepris.no/tilbygg" } };
export default function Tilbygg() {
  const project = projectTypes.find((p) => p.slug === "tilbygg")!;
  return (<CategoryPageTemplate project={project}
    intro="Tilbygg i Norge koster typisk mellom 35 000 og 65 000 kr per m². For et tilbygg på 30 m² betyr det en totalkostnad på ca. 1-2 millioner kroner avhengig av standard og kompleksitet."
    description="Et tilbygg er ofte den mest kostnadseffektive måten å få mer plass i boligen. Prisen avhenger av hva rommet skal brukes til, grunnforhold, og hvor mye av eksisterende konstruksjon som må endres."
    costFactors={["Grunnarbeid og fundamentering er en stor kostnad","Tilkobling til eksisterende konstruksjon krever spesialkompetanse","Hva rommet skal brukes til (bad/kjøkken koster mer enn stue)","Om det kreves endring av bærende vegger","Takets form og tilpasning til eksisterende tak","Behov for byggesøknad og reguleringsplanendring","Graving, drenering og utvendige arbeider","Elektrisk og VVS-installasjon"]}
    tips={["Planlegg tilbygget som en naturlig forlengelse av eksisterende bolig.","Sjekk reguleringsplan og byggegrenser før du starter planlegging.","Unngå komplisert takløsning – det driver opp prisen.","Bruk samme materialer som eksisterende bolig for helhetlig uttrykk.","Vurder om kjeller under tilbygget gir mer verdi.","Innhent tilbud fra entreprenører med erfaring med tilbygg."]}
    faq={[{question:"Hva koster et tilbygg på 30 m²?",answer:"Et tilbygg på 30 m² koster typisk 1-2 millioner kr. Normal standard ligger rundt 1,2-1,5 millioner kr."},{question:"Trenger jeg byggesøknad for tilbygg?",answer:"Ja, de fleste tilbygg krever byggesøknad. Mindre tilbygg under 15 m² kan noen ganger meldes som tiltak uten ansvarsrett."},{question:"Hvor lang tid tar et tilbygg?",answer:"Selve byggingen tar typisk 8-20 uker avhengig av størrelse og kompleksitet."}]}
    relatedSlugs={["bygge-hus","oppussing","totalrenovering","garasje"]}
    relatedNames={["Bygge hus","Oppussing","Totalrenovering","Garasje"]}
  />);
}
