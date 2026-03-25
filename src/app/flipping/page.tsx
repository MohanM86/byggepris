import { Metadata } from "next";
import CategoryPageTemplate from "@/components/sections/CategoryPageTemplate";
import { projectTypes } from "@/data/prices";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "@/components/seo/JsonLd";
import { FlippingContent } from "@/components/content/FlippingContent";
const faq = [
  { question: "Hva koster flipping av leilighet?", answer: "Flipping koster typisk 5 000-20 000 kr per m². For en 80 m² leilighet betyr det 400 000-1 600 000 kr." },
  { question: "Lønner flipping seg?", answer: "Det kan lønne seg hvis du kjøper under markedspris og fokuserer på tiltak med høy avkastning (bad, kjøkken, maling). Husk å regne med skatt på gevinst." },
  { question: "Hva bør jeg pusse opp ved flipping?", answer: "Prioriter bad, kjøkken, maling og gulv. Disse gir mest verdiøkning per investerte krone." },
];
export const metadata: Metadata = { title: "Hva koster flipping? Priser for boligflipping", description: "Flipping koster 5 000-20 000 kr per m². Guide for oppgradering før salg.", alternates: { canonical: "https://byggepris.no/flipping" }, openGraph: { title: "Hva koster flipping?", description: "Typisk 5 000-20 000 kr per m².", url: "https://byggepris.no/flipping", type: "article" } };
export default function Page() {
  const project = projectTypes.find((p) => p.slug === "flipping")!;
  return (<>
    <BreadcrumbSchema items={[{ name: "Hjem", href: "/" }, { name: "Flipping", href: "/flipping" }]} />
    <ArticleSchema title="Hva koster flipping?" description="Prisguide for boligflipping i Norge." slug="flipping" />
    <FAQSchema items={faq} />
    <CategoryPageTemplate project={project} intro="Flipping av bolig koster typisk 5 000-20 000 kr per m². For en leilighet på 80 m² betyr det 400 000-1 600 000 kroner avhengig av omfang." content={<FlippingContent />} description="Flipping handler om å kjøpe en bolig, pusse opp strategisk, og selge med fortjeneste. Nøkkelen er å fokusere på tiltak som gir høyest verdiøkning i forhold til kostnaden." costFactors={["Boligens utgangstilstand","Hvilke rom som renoveres","Materialvalg og standard","Arbeidskostnad vs egeninnsats","Tidsbruk og holdekostnader","Meglerkostnader ved salg","Skatt på eventuell gevinst","Markedsforhold og timing"]} tips={["Fokuser på bad, kjøkken og overflater – det gir mest igjen.","Regn med alle kostnader inkl. megler, skatt og holdekostnader.","Ikke overinvester – tilpass standarden til området.","Maling og gulv gir mest visuell effekt for pengene.","Bruk profesjonell fotograf ved salg.","Ha en klar budsjett- og tidsplan før kjøp."]} faq={faq} relatedSlugs={["oppussing","bad","kjokken","totalrenovering"]} relatedNames={["Oppussing","Bad","Kjøkken","Totalrenovering"]} />
  </>);
}
