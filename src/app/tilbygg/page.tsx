import { Metadata } from "next";
import CategoryPageTemplate from "@/components/sections/CategoryPageTemplate";
import { projectTypes } from "@/data/prices";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "@/components/seo/JsonLd";
import { TilbyggContent } from "@/components/content/TilbyggContent";

const faq = [
  { question: "Hva koster et tilbygg på 50 m²?", answer: "Et tilbygg på 50 m² koster typisk 1,75-3,25 millioner kr avhengig av standard og om det inkluderer våtrom. Normal standard uten bad ligger rundt 2-2,5 mill. Med bad legger du til 200 000-400 000 kr." },
  { question: "Hva koster det å bygge ut 30 m²?", answer: "Et tilbygg på 30 m² koster typisk 1-2 millioner kr. Enkel stue-utvidelse ligger i nedre sjikt, mens tilbygg med bad og soverom havner i øvre." },
  { question: "Hva koster det å bygge på 20 m²?", answer: "Et tilbygg på 20 m² koster typisk 700 000-1 300 000 kr. M²-prisen er høyere for små tilbygg fordi faste kostnader som grunnarbeid og tak fordeles på færre kvadratmeter." },
  { question: "Hva er forskjellen mellom tilbygg og påbygg?", answer: "Tilbygg er utvidelse i bredden eller lengden på bakkeplan. Påbygg er utvidelse oppover med ny etasje. Påbygg er typisk dyrere (35 000-70 000 kr/m²) fordi det ofte krever forsterkning av bærende konstruksjon og nytt tak." },
  { question: "Er tilbygg eller påbygg dyrest?", answer: "Påbygg er normalt dyrest, typisk 35 000-70 000 kr/m² mot 35 000-65 000 kr/m² for tilbygg. Påbygg krever ofte forsterkning av eksisterende bærekonstruksjon, som kan koste 100 000-300 000 kr ekstra." },
  { question: "Hvor stort tilbygg kan man bygge uten å søke?", answer: "Du kan normalt ikke bygge tilbygg til bolig uten søknad. Regelen om 15 m² uten ansvarsrett gjelder kun frittliggende småbygg (bod, uthus), IKKE tilbygg som er forbundet med boligen. Alle tilbygg krever normalt byggesøknad." },
  { question: "Hva koster det å få tegnet et tilbygg?", answer: "Arkitekt/tegner for tilbygg koster typisk 30 000-80 000 kr avhengig av kompleksitet. Enkel tegning for byggesøknad kan koste fra 15 000 kr. Komplett prosjektering med konstruksjonsberegninger koster 50 000-100 000 kr." },
  { question: "Hvor mye koster en søknad om tilbygg?", answer: "Kommunale gebyrer for byggesøknad for tilbygg varierer mellom 10 000 og 40 000 kr avhengig av kommune. I tillegg trenger du ansvarlig søker (arkitekt/konsulent) som koster 15 000-40 000 kr." },
  { question: "Hvor lang tid tar tilbygg?", answer: "Selve byggingen av et tilbygg tar typisk 8-20 uker avhengig av størrelse og kompleksitet. Planlegging, tegning og byggesøknad tar 2-4 måneder i tillegg. Total prosjekttid er 5-9 måneder." },
  { question: "Hva regnes som tilbygg?", answer: "Tilbygg er en utvidelse av eksisterende bygning som øker det bebygde arealet (BYA). Det kan være en ny stue, et ekstra soverom, et bad, eller en utvidelse av kjøkkenet. Tilbygg er alltid bygget inntil eksisterende konstruksjon." },
  { question: "Hva koster en 100 m² terrasse?", answer: "En terrasse på 100 m² koster typisk 200 000-600 000 kr avhengig av materiale og konstruksjon. Trykkimpregnert tre er rimeligst (1 500-3 000 kr/m²), kompositt noe dyrere (2 500-4 500 kr/m²), og kebony/edeltre dyrest (4 000-7 000 kr/m²)." },
  { question: "Kan man bygge leilighet over garasje?", answer: "Ja, men det krever byggesøknad, oppfylle TEK17-krav for boenhet, og brannkrav mellom garasje og boenhet. Kostnaden for en leilighet over garasje er typisk 25 000-45 000 kr/m² i tillegg til garasjen. Sjekk reguleringsplanen for tillatt utnyttelse." },
];

export const metadata: Metadata = {
  title: "Hva koster tilbygg? Pris per m² for tilbygg 2026",
  description: "Tilbygg koster typisk 35 000-65 000 kr per m². Se priser for 20, 30 og 50 m² tilbygg, byggesøknad, og forskjell på tilbygg vs påbygg.",
  alternates: { canonical: "https://byggepris.no/tilbygg" },
  openGraph: { title: "Hva koster tilbygg?", description: "Typisk 35 000-65 000 kr per m². Komplett prisguide.", url: "https://byggepris.no/tilbygg", type: "article" },
};

export default function Page() {
  const project = projectTypes.find((p) => p.slug === "tilbygg")!;
  return (<>
    <BreadcrumbSchema items={[{ name: "Hjem", href: "/" }, { name: "Tilbygg", href: "/tilbygg" }]} />
    <ArticleSchema title="Hva koster tilbygg?" description="Prisguide for tilbygg i Norge." slug="tilbygg" />
    <FAQSchema items={faq} />
    <CategoryPageTemplate project={project}
      intro="Tilbygg i Norge koster typisk mellom 35 000 og 65 000 kr per m². For et tilbygg på 30 m² betyr det en totalkostnad på ca. 1-2 millioner kroner. Tilbygg er dyrere per m² enn nybygg fordi du må tilpasse deg eksisterende konstruksjon."
      description="Et tilbygg er ofte den mest kostnadseffektive måten å få mer plass uten å flytte. Du beholder beliggenhet og nabolag, og utvider boligen med det arealet du trenger. Prisen avhenger av størrelse, romtype, takløsning og grunnforhold."
      content={<TilbyggContent />}
      costFactors={["Grunnarbeid og fundamentering – ofte 150 000-250 000 kr","Tilkobling til eksisterende tak – enkel takform sparer 50 000-150 000 kr","Romtype: bad/kjøkken koster 20 000-50 000 kr mer per m² enn stue","Om bærende vegger må endres i eksisterende hus","Byggesøknad, tegninger og gebyrer – 40 000-120 000 kr","Elektrisk og VVS-installasjon","Graving, drenering og utvendig etterarbeid","Påbygg (ny etasje) krever ofte forsterkning av bærende konstruksjon"]}
      tips={["Velg enkel takform – pulttak er billigst og enklest å koble til eksisterende tak.","Behold eksisterende rør- og elektroopplegg der mulig.","Sjekk reguleringsplan FØR du tegner – maks utnyttelsesgrad og byggegrenser styrer alt.","Bruk samme materialer som eksisterende hus for helhetlig uttrykk.","Vurder kjeller under tilbygget hvis du graver uansett – mer plass for liten merkostnad.","Innhent minst 3 tilbud fra entreprenører med tilbyggerfaring.","Planlegg for fremtidig bruk – det er billigere å bygge litt for stort nå enn å utvide igjen senere.","Søk tidlig – byggesøknad tar 4-12 uker hos kommunen."]
      }
      faq={faq}
      relatedSlugs={["bygge-hus","oppussing","totalrenovering","garasje","pris-per-kvm"]}
      relatedNames={["Bygge hus","Oppussing","Totalrenovering","Garasje","Pris per m²"]}
    />
  </>);
}
