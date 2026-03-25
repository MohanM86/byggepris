import { Metadata } from "next";
import Link from "next/link";
import { FadeInUp } from "@/components/ui/animations";
import { IconCalculator } from "@/components/icons";
export const metadata: Metadata = { title: "Oppussing før salg – Hva lønner seg?", description: "Hvilke oppussingsprosjekter gir best avkastning ved boligsalg? Se hva som lønner seg å pusse opp før du selger.", alternates: { canonical: "https://byggepris.no/oppussing-for-salg" } };
export default function Page() {
  return (<main className="pt-20"><article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14"><FadeInUp>
    <nav className="text-sm text-text-muted mb-6"><Link href="/" className="hover:text-accent-yellow">Hjem</Link> / <span className="text-text-secondary">Oppussing før salg</span></nav>
    <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-text-primary mb-6">Oppussing før salg – Hva lønner seg?</h1>
    <p className="text-lg text-text-secondary mb-6">Riktig oppussing før boligsalg kan øke salgsprisen mer enn investeringen. De mest lønnsomme tiltakene er maling, kjøkkenoppgradering og baderomsrenovering. Unngå dyre tiltak som ikke gir tilsvarende verdiøkning.</p>
    <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Mest lønnsomme tiltak</h2>
    <div className="space-y-3 my-6">
      {[{t:"Maling og overflater",c:"10 000-30 000 kr",r:"Høy – gir inntrykk av velholdt bolig"},{t:"Kjøkkenoppgradering",c:"50 000-200 000 kr",r:"Middels til høy – kjøkken er viktig for kjøpere"},{t:"Baderomsrenovering",c:"160 000-500 000 kr",r:"Middels – viktig men dyrt"},{t:"Gulv",c:"20 000-80 000 kr",r:"Middels til høy – nye gulv gjør mye"},{t:"Utvendig oppgradering",c:"30 000-100 000 kr",r:"Middels – førsteinntrykk teller"},{t:"Totalrenovering",c:"1-5 mill. kr",r:"Lav – sjelden lønnsomt kun for salg"}].map(({t,c,r})=>(<div key={t} className="bg-bg-card border border-surface-border rounded-xl p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"><div><h3 className="font-display font-bold text-text-primary">{t}</h3><p className="text-xs text-text-muted">Typisk kostnad: {c}</p></div><span className="text-sm text-text-secondary">Avkastning: {r}</span></div>))}
    </div>
    <div className="mt-10"><Link href="/kalkulator" className="inline-flex items-center gap-2 px-5 py-3 bg-accent-yellow text-bg-primary font-display font-bold rounded-xl hover:bg-accent-warm transition-colors shadow-glow-sm"><IconCalculator size={18} /> Beregn oppussingskostnad</Link></div>
  </FadeInUp></article></main>);
}
