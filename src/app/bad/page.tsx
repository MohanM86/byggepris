import { Metadata } from "next";
import CategoryPageTemplate from "@/components/sections/CategoryPageTemplate";
import { projectTypes } from "@/data/prices";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "@/components/seo/JsonLd";
import { BadContent } from "@/components/content/BadContent";
const faq = [
  { question: "Hva koster nytt bad på 6 m²?", answer: "Et bad på 6 m² koster typisk 240 000-480 000 kr med normal standard. Høy standard kan koste over 500 000 kr." },
  { question: "Kan jeg pusse opp badet selv?", answer: "Membranarbeid og rørleggerarbeid må utføres av fagfolk. Riving, maling og enkel montering kan du gjøre selv." },
  { question: "Hvor lang tid tar baderomsrenovering?", answer: "Et standard bad tar typisk 3-8 uker fra riving til ferdig." },
];
export const metadata: Metadata = { title: "Hva koster nytt bad? Pris for baderomsrenovering", description: "Nytt bad koster 40 000-80 000 kr per m². Komplett prisguide for bad.", alternates: { canonical: "https://byggepris.no/bad" }, openGraph: { title: "Hva koster nytt bad?", description: "Typisk 40 000-80 000 kr per m².", url: "https://byggepris.no/bad", type: "article" } };
export default function Page() {
  const project = projectTypes.find((p) => p.slug === "bad")!;
  return (<>
    <BreadcrumbSchema items={[{ name: "Hjem", href: "/" }, { name: "Bad", href: "/bad" }]} />
    <ArticleSchema title="Hva koster nytt bad?" description="Prisguide for baderomsrenovering i Norge." slug="bad" />
    <FAQSchema items={faq} />
    <CategoryPageTemplate project={project} intro="Et nytt bad i Norge koster typisk mellom 40 000 og 80 000 kr per m². For et standard bad på 6 m² betyr det ca. 240 000-480 000 kroner." description="Bad er blant de dyreste rommene å renovere per m² fordi det krever membranarbeid, rørlegger, flislegger og elektriker. Kvaliteten på våtromsarbeid er kritisk for å unngå fuktskader." content={<BadContent />} costFactors={["Membranarbeid og våtromssertifisering","Rørlegger og evt. omlegging av rør","Flislegging og materialkvalitet","Størrelse og kompleksitet","Antall sanitærprodukter","Gulvvarme","Ventilasjon","Belysning og elektro"]} tips={["Velg tidløse materialer som varer.","Ikke spar på membranarbeid.","Behold eksisterende røropplegg om mulig.","Velg standard størrelser på dusj og badekar.","Planlegg oppbevaring godt fra start.","Bruk sertifisert våtromshåndverker."]} faq={faq} relatedSlugs={["kjokken","oppussing","totalrenovering","tilbygg"]} relatedNames={["Kjøkken","Oppussing","Totalrenovering","Tilbygg"]} />
  </>);
}
