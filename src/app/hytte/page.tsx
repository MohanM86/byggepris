import { Metadata } from "next";
import CategoryPageTemplate from "@/components/sections/CategoryPageTemplate";
import { projectTypes } from "@/data/prices";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "@/components/seo/JsonLd";
import { HytteContent } from "@/components/content/HytteContent";
const faq = [
  { question: "Hva koster det å bygge hytte?", answer: "En hytte koster typisk 25 000-50 000 kr per m². For en hytte på 80 m² betyr det 2-4 millioner kr." },
  { question: "Er ferdighytte billigere?", answer: "Ja, en ferdighytte er typisk 20-30% rimeligere enn arkitekttegnet hytte. Monteringsklar hytte gir best forutsigbarhet." },
  { question: "Hva koster det å bygge hytte på fjellet vs sjøen?", answer: "Fjellhytte kan bli dyrere pga. veiforhold og transport. Sjøhytte har ofte strengere regulering. Forskjellen er typisk 5-15%." },
];
export const metadata: Metadata = { title: "Hva koster hyttebygging? Priser for hytte", description: "Hytte koster 25 000-50 000 kr per m². Komplett prisguide for hyttebygging.", alternates: { canonical: "https://byggepris.no/hytte" }, openGraph: { title: "Hva koster hyttebygging?", description: "Typisk 25 000-50 000 kr per m².", url: "https://byggepris.no/hytte", type: "article" } };
export default function Page() {
  const project = projectTypes.find((p) => p.slug === "hytte")!;
  return (<>
    <BreadcrumbSchema items={[{ name: "Hjem", href: "/" }, { name: "Hytte", href: "/hytte" }]} />
    <ArticleSchema title="Hva koster hyttebygging?" description="Prisguide for hyttebygging i Norge." slug="hytte" />
    <FAQSchema items={faq} />
    <CategoryPageTemplate project={project} intro="Å bygge hytte i Norge koster typisk mellom 25 000 og 50 000 kr per m². For en hytte på 80 m² betyr det 2-4 millioner kroner." content={<HytteContent />} description="Hyttebygging er populært i Norge, og prisene varierer mye basert på beliggenhet, tilgjengelighet, standard og om du velger ferdighytte eller spesialtegnet." costFactors={["Tomtens tilgjengelighet og veiforhold","Transport av materialer til byggeplass","Tilkobling til strøm, vann og avløp","Grunnforhold og fundamentering","Standard og isolasjonsgrad","Ferdighytte vs arkitekttegnet","Reguleringsbestemmelser","Vinterbygging og sesong"]} tips={["Velg ferdighytte for forutsigbar pris.","Planlegg transport og logistikk nøye.","Sjekk reguleringsplan for maks størrelse.","Vurder solceller og biotoalett for off-grid.","Bygg i sommerhalvåret for lavere kostnad.","Isoler godt for helårsbruk og bedre verdi."]} faq={faq} relatedSlugs={["bygge-hus","garasje","tilbygg","oppussing"]} relatedNames={["Bygge hus","Garasje","Tilbygg","Oppussing"]} />
  </>);
}
