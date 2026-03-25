import { Metadata } from "next";
import CategoryPageTemplate from "@/components/sections/CategoryPageTemplate";
import { projectTypes } from "@/data/prices";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "@/components/seo/JsonLd";
import { TotalrenoveringContent } from "@/components/content/TotalrenoveringContent";
const faq = [
  { question: "Hva koster totalrenovering av hus?", answer: "Totalrenovering koster typisk 15 000-40 000 kr per m². For en bolig på 120 m² betyr det 1,8-4,8 millioner kr." },
  { question: "Lønner det seg å totalrenovere?", answer: "Det lønner seg ofte hvis boligen har god beliggenhet og grunnstruktur. Sammenlign alltid med nybyggkostnad." },
  { question: "Hvor lang tid tar totalrenovering?", answer: "En full totalrenovering tar typisk 3-7 måneder avhengig av boligens størrelse og omfang." },
];
export const metadata: Metadata = { title: "Hva koster totalrenovering? Komplett prisguide", description: "Totalrenovering koster 15 000-40 000 kr per m². Komplett prisguide med kalkulator.", alternates: { canonical: "https://byggepris.no/totalrenovering" }, openGraph: { title: "Hva koster totalrenovering?", description: "Typisk 15 000-40 000 kr per m².", url: "https://byggepris.no/totalrenovering", type: "article" } };
export default function Page() {
  const project = projectTypes.find((p) => p.slug === "totalrenovering")!;
  return (<>
    <BreadcrumbSchema items={[{ name: "Hjem", href: "/" }, { name: "Totalrenovering", href: "/totalrenovering" }]} />
    <ArticleSchema title="Hva koster totalrenovering?" description="Prisguide for totalrenovering i Norge." slug="totalrenovering" />
    <FAQSchema items={faq} />
    <CategoryPageTemplate project={project} intro="Totalrenovering i Norge koster typisk mellom 15 000 og 40 000 kr per m². For en bolig på 120 m² betyr det 1,8 til 4,8 millioner kroner." content={<TotalrenoveringContent />} description="En totalrenovering innebærer at hele boligen renoveres fra gulv til tak, inkludert bad, kjøkken, elektro, rør og overflater. Det er et omfattende prosjekt som krever god planlegging." costFactors={["Boligens alder og tilstand","Antall våtrom","Endring av planløsning og bærende vegger","Nytt elektrisk anlegg","Nye rør og VVS","Isolasjon og energioppgradering","Vinduer og dører","Utvendig arbeid"]} tips={["Lag en prioritert plan – hva MÅ gjøres vs hva er fint å ha.","Bruk totalentreprenør for bedre pris og koordinering.","Sett av minst 15% buffer for uforutsette funn.","Flytt ut under arbeidet for raskere og billigere gjennomføring.","Ta bilder og dokumenter alt før riving.","Sjekk om noe kan gjenbrukes."]} faq={faq} relatedSlugs={["oppussing","bad","kjokken","bygge-hus"]} relatedNames={["Oppussing","Bad","Kjøkken","Bygge hus"]} />
  </>);
}
