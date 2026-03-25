import { Metadata } from "next";
import CategoryPageTemplate from "@/components/sections/CategoryPageTemplate";
import { projectTypes } from "@/data/prices";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "@/components/seo/JsonLd";
const faq = [
  { question: "Hva koster oppussing per m²?", answer: "Oppussing koster typisk 8 000-25 000 kr per m² avhengig av omfang og standard." },
  { question: "Hva er billigst å pusse opp selv?", answer: "Maling, tapetsering og enkel montering er de enkleste tiltakene å gjøre selv og kan spare 30-50% på arbeidskostnad." },
  { question: "Hvor lang tid tar oppussing av leilighet?", answer: "En typisk leilighetsoppussing tar 4-16 uker avhengig av omfang." },
];
export const metadata: Metadata = { title: "Hva koster oppussing? Priser i Norge", description: "Oppussingspris 8 000-25 000 kr per m². Komplett prisguide for oppussing.", alternates: { canonical: "https://byggepris.no/oppussing" }, openGraph: { title: "Hva koster oppussing?", description: "Typisk 8 000-25 000 kr per m².", url: "https://byggepris.no/oppussing", type: "article" } };
export default function Page() {
  const project = projectTypes.find((p) => p.slug === "oppussing")!;
  return (<>
    <BreadcrumbSchema items={[{ name: "Hjem", href: "/" }, { name: "Oppussing", href: "/oppussing" }]} />
    <ArticleSchema title="Hva koster oppussing?" description="Prisguide for oppussing i Norge." slug="oppussing" />
    <FAQSchema items={faq} />
    <CategoryPageTemplate project={project} intro="Oppussing i Norge koster typisk mellom 8 000 og 25 000 kr per m². For en leilighet på 80 m² betyr det 640 000 til 2 millioner kroner." description="Prisen varierer stort basert på hva som skal gjøres. Overflateoppussing (maling, gulv) er billigst, mens endring av planløsning og våtrom koster mest." costFactors={["Omfang – overflater vs planløsningsendring","Antall våtrom som berøres","Alder på boligen og skjulte problemer","Materialvalg og standard","Behov for rørlegger og elektriker","Om bærende vegger skal flyttes","Avfallshåndtering og riving","Midlertidig bolig under arbeidet"]} tips={["Start med det som gir mest visuell effekt – maling og gulv.","Behold eksisterende planløsning for å spare penger.","Gjør enklere arbeid selv (maling, demontering).","Bestill materialer selv for bedre priser.","Planlegg alt ferdig før håndverkerne starter.","Unngå endringer underveis – det koster dyrt."]} faq={faq} relatedSlugs={["bad","kjokken","totalrenovering","flipping"]} relatedNames={["Bad","Kjøkken","Totalrenovering","Flipping"]} />
  </>);
}
