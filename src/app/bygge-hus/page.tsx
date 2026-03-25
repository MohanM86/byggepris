import { Metadata } from "next";
import CategoryPageTemplate from "@/components/sections/CategoryPageTemplate";
import { projectTypes } from "@/data/prices";

export const metadata: Metadata = {
  title: "Hva koster det å bygge hus? Pris per m² og totalkostnad",
  description: "Se hva det koster å bygge hus i Norge. Typisk pris 30 000-55 000 kr per m². Komplett prisguide med kalkulator og tips for nybygg.",
  alternates: { canonical: "https://byggepris.no/bygge-hus" },
};

export default function ByggeHus() {
  const project = projectTypes.find((p) => p.slug === "bygge-hus")!;
  return (
    <CategoryPageTemplate
      project={project}
      intro="Å bygge hus i Norge koster typisk mellom 30 000 og 55 000 kr per m² avhengig av standard. For en enebolig på 150 m² betyr det en totalkostnad på 4,5 til 8,5 millioner kroner."
      description="Kostnaden for å bygge nytt hus varierer mye basert på beliggenhet, standard, kompleksitet og markedsforhold. Oslo-regionen er typisk 10-15% dyrere enn landsgjennomsnittet."
      costFactors={[
        "Tomtens beskaffenhet og grunnforhold påvirker fundamentkostnader",
        "Standard og materialklasse har størst innvirkning på m²-pris",
        "Beliggenhet: Oslo og storbyene er 10-15% dyrere",
        "Husets kompleksitet: enkle former er rimeligere enn arkitektdesign",
        "Energikrav etter TEK17 øker kostnaden men sparer energi",
        "Garasje, terrasse og utendørsarbeid legger 10-20% på totalen",
        "Prosjekteringskostnader utgjør typisk 5-10% av budsjettet",
        "Sesong og markedsforhold påvirker håndverkerpriser",
      ]}
      tips={[
        "Velg enkel bygningsform med rette vegger og standard takhelling.",
        "Innhent minst 3 tilbud fra ulike entreprenører.",
        "Bruk totalentreprise for forutsigbar pris og én kontaktperson.",
        "Vurder ferdighus eller modulhus for lavere kostnad.",
        "Sett av minimum 10-15% buffer for uforutsette kostnader.",
        "Gjør grundig tomteundersøkelse før byggestart.",
      ]}
      faq={[
        { question: "Hva koster det å bygge hus på 150 m²?", answer: "Et hus på 150 m² koster typisk 4,5-8,5 millioner kr avhengig av standard. Normal standard gir ca. 5,3-6 millioner kr." },
        { question: "Er ferdighus billigere?", answer: "Ja, ferdighus er typisk 15-25% billigere enn arkitektegnet hus. Et ferdighus på 150 m² koster vanligvis 3,5-5,5 millioner kr." },
        { question: "Hvor lang tid tar husbygging?", answer: "Byggeprosessen tar 8-12 måneder. Med planlegging og byggesøknad bør du regne 12-18 måneder totalt." },
      ]}
      relatedSlugs={["tilbygg", "hytte", "garasje", "totalrenovering"]}
      relatedNames={["Tilbygg", "Hytte", "Garasje", "Totalrenovering"]}
    />
  );
}
