import { Metadata } from "next";
import CategoryPageTemplate from "@/components/sections/CategoryPageTemplate";
import { projectTypes } from "@/data/prices";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "@/components/seo/JsonLd";
import { GarasjeContent } from "@/components/content/GarasjeContent";
const faq = [
  { question: "Hva koster en dobbeltgarasje?", answer: "En dobbeltgarasje på ca. 40 m² koster typisk 600 000-1 400 000 kr avhengig av standard og grunnforhold." },
  { question: "Trenger jeg byggesøknad for garasje?", answer: "Garasjer under 50 m² kan ofte bygges uten søknad hvis de er frittliggende og i én etasje, men sjekk alltid med kommunen." },
  { question: "Hva er billigst – mur eller tre?", answer: "Tregarasje er typisk 20-30% rimeligere enn murgarasje. Mur gir bedre brannmotstand og holdbarhet." },
];
export const metadata: Metadata = { title: "Hva koster garasje? Priser for garasjebygging", description: "Garasje koster 15 000-35 000 kr per m². Komplett prisguide.", alternates: { canonical: "https://byggepris.no/garasje" }, openGraph: { title: "Hva koster garasje?", description: "Typisk 15 000-35 000 kr per m².", url: "https://byggepris.no/garasje", type: "article" } };
export default function Page() {
  const project = projectTypes.find((p) => p.slug === "garasje")!;
  return (<>
    <BreadcrumbSchema items={[{ name: "Hjem", href: "/" }, { name: "Garasje", href: "/garasje" }]} />
    <ArticleSchema title="Hva koster garasje?" description="Prisguide for garasjebygging i Norge." slug="garasje" />
    <FAQSchema items={faq} />
    <CategoryPageTemplate project={project} intro="En ny garasje i Norge koster typisk mellom 15 000 og 35 000 kr per m². En standard dobbeltgarasje på 40 m² koster 600 000-1 400 000 kroner." content={<GarasjeContent />} description="Garasjebygging er relativt enkelt sammenlignet med boligbygging, men prisen påvirkes av grunnforhold, materialvalg og om den skal varmes opp." costFactors={["Grunnforhold og fundamentering","Materialvalg (tre vs mur vs stål)","Oppvarming og isolasjon","Garasjeport-type og kvalitet","Elektrisk installasjon","Innvendig standard","Taktype og tekking","Avstand til bolig og tilkobling"]} tips={["Velg ferdiggarasje for lavere pris og raskere montering.","Sjekk byggeforskriftene for avstand til nabogrense.","Planlegg for fremtidig bruk (verksted, lager).","Isoler taket for å unngå kondens.","Velg seksjonalport for plass og komfort.","Legg strøm og belysning fra start."]} faq={faq} relatedSlugs={["bygge-hus","tilbygg","hytte","oppussing"]} relatedNames={["Bygge hus","Tilbygg","Hytte","Oppussing"]} />
  </>);
}
