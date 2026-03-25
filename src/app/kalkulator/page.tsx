import { Metadata } from "next";
import Calculator from "@/components/calculator/Calculator";

export const metadata: Metadata = {
  title: "Byggekalkulator – Beregn byggekostnad gratis",
  description: "Gratis byggekalkulator for norske byggeprosjekter. Beregn kostnad for nybygg, tilbygg, oppussing, bad, kjøkken og mer. Realistiske prisestimater basert på m².",
  alternates: { canonical: "https://byggepris.no/kalkulator" },
};

export default function KalkulatorPage() {
  return (
    <main className="pt-20">
      <Calculator />
    </main>
  );
}
