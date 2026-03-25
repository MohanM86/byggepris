import { Metadata } from "next";
import CategoryPageTemplate from "@/components/sections/CategoryPageTemplate";
import { projectTypes } from "@/data/prices";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "@/components/seo/JsonLd";
const faq = [
  { question: "Hva koster et tilbygg på 30 m²?", answer: "Et tilbygg på 30 m² koster typisk 1-2 millioner kr. Normal standard ligger rundt 1,2-1,5 millioner kr." },
  { question: "Trenger jeg byggesøknad for tilbygg?", answer: "Ja, de fleste tilbygg krever byggesøknad. Mindre tilbygg under 15 m² kan meldes som tiltak uten ansvarsrett." },
  { question: "Hvor lang tid tar et tilbygg?", answer: "Byggingen tar typisk 8-20 uker avhengig av størrelse og kompleksitet." },
];
export const metadata: Metadata = { title: "Hva koster tilbygg? Pris per m²", description: "Tilbygg koster typisk 35 000-65 000 kr per m². Komplett prisguide.", alternates: { canonical: "https://byggepris.no/tilbygg" }, openGraph: { title: "Hva koster tilbygg?", description: "Typisk pris 35 000-65 000 kr per m².", url: "https://byggepris.no/tilbygg", type: "article" } };
export default function Page() {
  const project = projectTypes.find((p) => p.slug === "tilbygg")!;
  return (<>
    <BreadcrumbSchema items={[{ name: "Hjem", href: "/" }, { name: "Tilbygg", href: "/tilbygg" }]} />
    <ArticleSchema title="Hva koster tilbygg?" description="Prisguide for tilbygg i Norge." slug="tilbygg" />
    <FAQSchema items={faq} />
    <CategoryPageTemplate project={project} intro="Tilbygg i Norge koster typisk mellom 35 000 og 65 000 kr per m². For et tilbygg på 30 m² betyr det en totalkostnad på ca. 1-2 millioner kroner." description="Et tilbygg er ofte den mest kostnadseffektive måten å få mer plass. Prisen avhenger av romtype, grunnforhold og eksisterende konstruksjon." costFactors={["Grunnarbeid og fundamentering","Tilkobling til eksisterende konstruksjon","Romtype (bad/kjøkken koster mer enn stue)","Om bærende vegger må endres","Takform og tilpasning","Byggesøknad og regulering","Graving og drenering","VVS og elektrisk installasjon"]} tips={["Planlegg tilbygget som naturlig forlengelse av boligen.","Sjekk reguleringsplan og byggegrenser først.","Unngå komplisert takløsning.","Bruk samme materialer som eksisterende bolig.","Vurder kjeller under tilbygget.","Innhent tilbud fra tilbyggspesialister."]} faq={faq} relatedSlugs={["bygge-hus","oppussing","totalrenovering","garasje"]} relatedNames={["Bygge hus","Oppussing","Totalrenovering","Garasje"]} />
  </>);
}
