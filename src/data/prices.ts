export interface ProjectType {
  slug: string;
  name: string;
  shortDesc: string;
  icon: string;
  pricePerM2Low: number;
  pricePerM2Mid: number;
  pricePerM2High: number;
  typicalM2Low: number;
  typicalM2High: number;
  typicalTotalLow: number;
  typicalTotalHigh: number;
  timeWeeksLow: number;
  timeWeeksHigh: number;
}

export const projectTypes: ProjectType[] = [
  { slug: "bygge-hus", name: "Bygge hus", shortDesc: "Nybygg av enebolig eller rekkehus", icon: "house", pricePerM2Low: 30000, pricePerM2Mid: 40000, pricePerM2High: 55000, typicalM2Low: 120, typicalM2High: 200, typicalTotalLow: 3600000, typicalTotalHigh: 11000000, timeWeeksLow: 30, timeWeeksHigh: 52 },
  { slug: "tilbygg", name: "Tilbygg", shortDesc: "Utvide boligen med nytt areal", icon: "extension", pricePerM2Low: 35000, pricePerM2Mid: 45000, pricePerM2High: 65000, typicalM2Low: 15, typicalM2High: 50, typicalTotalLow: 525000, typicalTotalHigh: 3250000, timeWeeksLow: 8, timeWeeksHigh: 20 },
  { slug: "oppussing", name: "Oppussing", shortDesc: "Generell oppussing av bolig", icon: "renovation", pricePerM2Low: 8000, pricePerM2Mid: 15000, pricePerM2High: 25000, typicalM2Low: 50, typicalM2High: 150, typicalTotalLow: 400000, typicalTotalHigh: 3750000, timeWeeksLow: 4, timeWeeksHigh: 16 },
  { slug: "bad", name: "Bad", shortDesc: "Nytt bad eller baderomsrenovering", icon: "bathroom", pricePerM2Low: 40000, pricePerM2Mid: 55000, pricePerM2High: 80000, typicalM2Low: 4, typicalM2High: 12, typicalTotalLow: 160000, typicalTotalHigh: 960000, timeWeeksLow: 3, timeWeeksHigh: 8 },
  { slug: "kjokken", name: "Kjøkken", shortDesc: "Nytt kjøkken eller kjøkkenrenovering", icon: "kitchen", pricePerM2Low: 25000, pricePerM2Mid: 40000, pricePerM2High: 70000, typicalM2Low: 8, typicalM2High: 20, typicalTotalLow: 200000, typicalTotalHigh: 1400000, timeWeeksLow: 2, timeWeeksHigh: 6 },
  { slug: "totalrenovering", name: "Totalrenovering", shortDesc: "Komplett renovering fra gulv til tak", icon: "wall", pricePerM2Low: 15000, pricePerM2Mid: 25000, pricePerM2High: 40000, typicalM2Low: 80, typicalM2High: 180, typicalTotalLow: 1200000, typicalTotalHigh: 7200000, timeWeeksLow: 12, timeWeeksHigh: 30 },
  { slug: "garasje", name: "Garasje", shortDesc: "Bygge ny garasje eller carport", icon: "garage", pricePerM2Low: 15000, pricePerM2Mid: 22000, pricePerM2High: 35000, typicalM2Low: 25, typicalM2High: 50, typicalTotalLow: 375000, typicalTotalHigh: 1750000, timeWeeksLow: 4, timeWeeksHigh: 10 },
  { slug: "hytte", name: "Hytte", shortDesc: "Bygge fritidsbolig eller hytte", icon: "cabin", pricePerM2Low: 25000, pricePerM2Mid: 35000, pricePerM2High: 50000, typicalM2Low: 60, typicalM2High: 120, typicalTotalLow: 1500000, typicalTotalHigh: 6000000, timeWeeksLow: 16, timeWeeksHigh: 40 },
  { slug: "flipping", name: "Flipping", shortDesc: "Oppgradering før salg for profitt", icon: "flipping", pricePerM2Low: 5000, pricePerM2Mid: 12000, pricePerM2High: 20000, typicalM2Low: 60, typicalM2High: 120, typicalTotalLow: 300000, typicalTotalHigh: 2400000, timeWeeksLow: 4, timeWeeksHigh: 12 },
];

export const regionMultipliers: Record<string, { name: string; multiplier: number }> = {
  oslo: { name: "Oslo", multiplier: 1.15 },
  bergen: { name: "Bergen", multiplier: 1.05 },
  trondheim: { name: "Trondheim", multiplier: 1.03 },
  stavanger: { name: "Stavanger", multiplier: 1.08 },
  "tromsø": { name: "Tromsø", multiplier: 1.10 },
  kristiansand: { name: "Kristiansand", multiplier: 1.00 },
  drammen: { name: "Drammen", multiplier: 1.02 },
  "østlandet": { name: "Østlandet (annet)", multiplier: 0.98 },
  "vestlandet": { name: "Vestlandet (annet)", multiplier: 0.97 },
  "midt-norge": { name: "Midt-Norge", multiplier: 0.95 },
  "nord-norge": { name: "Nord-Norge", multiplier: 1.05 },
  "sørlandet": { name: "Sørlandet", multiplier: 0.96 },
};

export const standardMultipliers: Record<string, { name: string; multiplier: number; desc: string }> = {
  enkel: { name: "Enkel standard", multiplier: 0.8, desc: "Rimelige materialer, enkel utførelse" },
  normal: { name: "Normal standard", multiplier: 1.0, desc: "Gode materialer, solid håndverk" },
  hoy: { name: "Høy standard", multiplier: 1.3, desc: "Premium materialer, topp kvalitet" },
  "luksuriøs": { name: "Luksuriøs", multiplier: 1.7, desc: "Eksklusive materialer, arkitekt-design" },
};

export const hiddenCosts = [
  { name: "Prosjektering og arkitekt", percent: "5-10%" },
  { name: "Byggesøknad og gebyr", percent: "1-3%" },
  { name: "Grunnarbeid og tomt", percent: "5-15%" },
  { name: "Uforutsette kostnader", percent: "10-15%" },
  { name: "Oppvarming under bygging", percent: "1-3%" },
  { name: "Tilkobling vann og avløp", percent: "2-5%" },
  { name: "Elektrisk installasjon ekstra", percent: "3-8%" },
  { name: "Maling og overflatebehandling", percent: "2-5%" },
];

export function formatNOK(amount: number): string {
  return new Intl.NumberFormat("nb-NO", { style: "decimal", maximumFractionDigits: 0 }).format(amount) + " kr";
}

export function formatNOKShort(amount: number): string {
  if (amount >= 1000000) return (amount / 1000000).toFixed(1).replace(".", ",") + " mill. kr";
  if (amount >= 1000) return Math.round(amount / 1000) + " 000 kr";
  return amount + " kr";
}
