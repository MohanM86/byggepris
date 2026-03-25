"use client";
import Link from "next/link";
import { IconCalculator } from "@/components/icons";

const footerLinks = [
  { title: "Byggeprosjekter", links: [{ href: "/bygge-hus", label: "Bygge hus" },{ href: "/tilbygg", label: "Tilbygg" },{ href: "/oppussing", label: "Oppussing" },{ href: "/bad", label: "Bad" },{ href: "/kjokken", label: "Kjøkken" },{ href: "/totalrenovering", label: "Totalrenovering" },{ href: "/garasje", label: "Garasje" },{ href: "/hytte", label: "Hytte" },{ href: "/flipping", label: "Flipping" }] },
  { title: "Prisguider", links: [{ href: "/byggepriser", label: "Byggepriser" },{ href: "/pris-per-kvm", label: "Pris per m²" },{ href: "/byggekostnader", label: "Byggekostnader" },{ href: "/hva-koster-det-a-bygge-hus", label: "Hva koster husbygging?" },{ href: "/hva-pavirker-byggekostnad", label: "Hva påvirker kostnad?" },{ href: "/skjulte-kostnader-ved-oppussing", label: "Skjulte kostnader" }] },
  { title: "Verktøy", links: [{ href: "/kalkulator", label: "Byggekalkulator" },{ href: "/bygge-nytt-vs-pusse-opp", label: "Bygge nytt vs pusse opp" },{ href: "/oppussing-for-salg", label: "Oppussing før salg" }] },
  { title: "Om Byggepris", links: [{ href: "/om-byggepris", label: "Om oss" },{ href: "/personvern", label: "Personvern" },{ href: "/vilkar", label: "Vilkår" }] },
];

export default function Footer() {
  return (
    <footer className="bg-bg-secondary border-t border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 border-b border-surface-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-bg-card rounded-2xl p-8 border border-surface-border">
            <div>
              <h3 className="font-display font-bold text-xl text-text-primary mb-1">Klar for å beregne ditt prosjekt?</h3>
              <p className="text-text-secondary text-sm">Bruk vår gratis kalkulator og få et prisestimat på sekunder.</p>
            </div>
            <Link href="/kalkulator" className="flex items-center gap-2 px-6 py-3 bg-accent-yellow text-bg-primary font-display font-bold rounded-xl hover:bg-accent-warm transition-colors shadow-glow whitespace-nowrap">
              <IconCalculator size={18} /> Start kalkulator
            </Link>
          </div>
        </div>
        <div className="py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="font-display font-semibold text-sm text-text-primary mb-4">{group.title}</h4>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.href}><Link href={link.href} className="text-sm text-text-tertiary hover:text-accent-yellow transition-colors">{link.label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="py-6 border-t border-surface-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded border border-accent-gold/60 bg-bg-card flex items-center justify-center relative overflow-hidden">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none">
                <path d="M12 4L20 10" stroke="#E8B931" strokeWidth="1.8" strokeLinecap="round"/>
                <path d="M12 4L4 10" stroke="#E8B931" strokeWidth="1.8" strokeLinecap="round"/>
                <line x1="5" y1="10" x2="5" y2="20" stroke="#F2F0ED" strokeWidth="1" opacity="0.5"/>
                <line x1="19" y1="10" x2="19" y2="20" stroke="#F2F0ED" strokeWidth="1" opacity="0.5"/>
                <line x1="5" y1="20" x2="19" y2="20" stroke="#F2F0ED" strokeWidth="1" opacity="0.5"/>
                <text x="12" y="17" textAnchor="middle" dominantBaseline="central" fontFamily="system-ui" fontWeight="900" fontSize="10" fill="#E8B931">B</text>
              </svg>
            </div>
            <span className="font-display font-semibold text-sm text-text-secondary">Bygge<span className="text-accent-yellow">pris</span><span className="text-accent-amber">.no</span></span>
          </div>
          <p className="text-xs text-text-muted">© {new Date().getFullYear()} Byggepris.no. Prisestimater er veiledende og erstatter ikke profesjonell rådgivning.</p>
        </div>
      </div>
    </footer>
  );
}
