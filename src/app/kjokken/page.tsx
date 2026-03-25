import { Metadata } from "next";
import CategoryPageTemplate from "@/components/sections/CategoryPageTemplate";
import { projectTypes } from "@/data/prices";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "@/components/seo/JsonLd";
import { KjokkenContent } from "@/components/content/KjokkenContent";
const faq = [
  { question: "Hva koster nytt kjøkken?", answer: "Et nytt kjøkken koster typisk 200 000-1 400 000 kr avhengig av størrelse og standard. Selve kjøkkeninnredningen utgjør ofte 40-60% av totalen." },
  { question: "Hva koster IKEA-kjøkken vs skreddersydd?", answer: "Et IKEA-kjøkken koster typisk 50 000-150 000 kr for innredningen. Skreddersydd fra snekker kan koste 150 000-500 000 kr eller mer." },
  { question: "Hvor lang tid tar kjøkkenrenovering?", answer: "Et kjøkkenbytte tar typisk 2-6 uker inkludert rørlegger og elektriker." },
];
export const metadata: Metadata = { title: "Hva koster nytt kjøkken? Priser for kjøkken", description: "Nytt kjøkken koster 25 000-70 000 kr per m². Komplett prisguide.", alternates: { canonical: "https://byggepris.no/kjokken" }, openGraph: { title: "Hva koster nytt kjøkken?", description: "Typisk 200 000-1 400 000 kr totalt.", url: "https://byggepris.no/kjokken", type: "article" } };
export default function Page() {
  const project = projectTypes.find((p) => p.slug === "kjokken")!;
  return (<>
    <BreadcrumbSchema items={[{ name: "Hjem", href: "/" }, { name: "Kjøkken", href: "/kjokken" }]} />
    <ArticleSchema title="Hva koster nytt kjøkken?" description="Prisguide for kjøkkenrenovering i Norge." slug="kjokken" />
    <FAQSchema items={faq} />
    <CategoryPageTemplate project={project} intro="Et nytt kjøkken i Norge koster typisk mellom 25 000 og 70 000 kr per m². For et kjøkken på 12 m² betyr det 300 000-840 000 kroner." description="Kjøkkenet er ofte det rommet som gir mest verdi tilbake ved renovering. Kostnaden avhenger av innredning, hvitevarer, benkeplate og om rør/elektro må flyttes." content={<KjokkenContent />} costFactors={["Kjøkkeninnredning (40-60% av kostnaden)","Benkeplatemateriale (laminat vs stein vs kompositt)","Hvitevarer","Rørlegger ved omlegging","Elektriker for nye punkter","Gulv og veggmaterialer","Belysning","Ventilasjon og avtrekk"]} tips={["Behold eksisterende røropplegg for å spare.","Velg standard kabinettstørrelser.","IKEA-kjøkken med god benkeplate er godt kompromiss.","Prioriter god belysning og oppbevaring.","Bestill alt materiell før arbeidet starter.","Vurder å montere overskap selv."]} faq={faq} relatedSlugs={["bad","oppussing","totalrenovering","flipping"]} relatedNames={["Bad","Oppussing","Totalrenovering","Flipping"]} />
  </>);
}
