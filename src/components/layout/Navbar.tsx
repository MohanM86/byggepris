"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { IconCalculator, IconMenu, IconClose, IconChevronRight } from "@/components/icons";

/* ── tiny inline SVG icons (16×16) ── */
const I = ({ d, s }: { d: string; s?: string }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke={s || "currentColor"} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 opacity-60 group-hover:opacity-100 transition-opacity">
    <path d={d} />
  </svg>
);

const icons: Record<string, JSX.Element> = {
  /* prosjekter */
  "bygge-hus":      <I d="M8 2L14 7V14H10V10H6V14H2V7L8 2Z" />,
  "tilbygg":        <I d="M2 6L6 3L10 6V12H2V6Z M10 8H14V12H10" />,
  "oppussing":      <I d="M3 13V8L5 6H11L13 8V13 M6 10H10 M6 13V10" />,
  "totalrenovering":<I d="M2 14H14 M4 14V5L8 2L12 5V14 M7 14V10H9V14" />,
  "bad":            <I d="M2 8C2 5 4 4 8 4S14 5 14 8V9H2V8Z M4 9V12 M12 9V12 M3 12H13" />,
  "kjokken":        <I d="M2 6H14V13H2V6Z M5 6V4 M11 6V4 M2 9H14" />,
  "garasje":        <I d="M2 7L8 3L14 7V13H2V7Z M5 13V9H11V13" />,
  "hytte":          <I d="M3 8L8 3L13 8V13H3V8Z M6 13V10H10V13 M1 8L8 1L15 8" />,
  "terrasse":       <I d="M1 10H15 M3 10V14 M7 10V14 M11 10V14 M1 14H15 M2 10L4 7H12L14 10" />,
  "tak":            <I d="M2 8L8 3L14 8 M4 7V4H6V5.5 M3 8H13" />,
  "fasade":         <I d="M3 3H13V13H3V3Z M3 7H13 M8 3V13 M5 5V5.01 M11 5V5.01 M5 9V9.01 M11 9V9.01" />,
  "kjeller":        <I d="M2 8H14 M4 8V14H12V8 M6 10H10 M6 12H10 M4 4H12" />,
  "flipping":       <I d="M4 12L8 4L12 12 M6 9H10 M3 14H13" />,
  "utleiedel":      <I d="M2 7L8 3L14 7V14H2V7Z M8 7V14 M5 10H5.01 M11 10H11.01" />,
  /* fagfolk */
  "elektriker":     <I d="M9 2L5 8H8L7 14L11 8H8L9 2Z" />,
  "rorlegger":      <I d="M4 3V7C4 9 6 10 8 10S12 9 12 7V3 M6 10V14 M10 10V14 M4 14H12" />,
  "maling":         <I d="M10 2L13 2L13 6L10 6L10 8L7 8L7 14L5 14L5 8L3 8L3 5L10 5V2Z" />,
  "gulv":           <I d="M2 10H14 M2 10L4 6H12L14 10 M2 10V13H14V10 M6 10V13 M10 10V13" />,
  "vinduer":        <I d="M3 3H13V13H3V3Z M3 8H13 M8 3V13" />,
  "isolasjon":      <I d="M4 2V14 M8 2V14 M12 2V14 M2 5H6 M6 8H10 M10 11H14" />,
  "varmepumpe":     <I d="M8 2C5 2 3 4.5 3 7.5C3 10 5 12 8 14C11 12 13 10 13 7.5C13 4.5 11 2 8 2Z M6 7L8 9L10 5" />,
  "pipe-og-ildsted":<I d="M6 14V8L8 5L10 8V14 M4 14H12 M7 3C7 1.5 8 1 8 1S9 1.5 9 3" />,
  "grunnarbeid":    <I d="M2 10H14 M4 10V14H12V10 M5 10V7H11V10 M7 7V5H9V7 M2 14H14" />,
  "drenering":      <I d="M3 4C5 6 5 8 3 10C5 12 5 14 3 14 M8 4C10 6 10 8 8 10C10 12 10 14 8 14 M13 4C15 6 15 8 13 10" />,
  "byggesaknad":    <I d="M4 2H12V14H4V2Z M6 5H10 M6 7H10 M6 9H8 M9 11L10 12L12 10" />,
};

const megaProsjekter = [
  { href: "/bygge-hus", label: "Bygge hus", sub: "30 000–55 000 kr/m²" },
  { href: "/tilbygg", label: "Tilbygg", sub: "35 000–65 000 kr/m²" },
  { href: "/oppussing", label: "Oppussing", sub: "8 000–25 000 kr/m²" },
  { href: "/totalrenovering", label: "Totalrenovering", sub: "15 000–40 000 kr/m²" },
  { href: "/bad", label: "Bad", sub: "40 000–80 000 kr/m²" },
  { href: "/kjokken", label: "Kjøkken", sub: "25 000–70 000 kr/m²" },
  { href: "/garasje", label: "Garasje", sub: "15 000–35 000 kr/m²" },
  { href: "/hytte", label: "Hytte", sub: "25 000–50 000 kr/m²" },
  { href: "/terrasse", label: "Terrasse", sub: "2 000–7 000 kr/m²" },
  { href: "/tak", label: "Tak", sub: "1 500–4 000 kr/m²" },
  { href: "/fasade", label: "Fasade", sub: "300–4 000 kr/m²" },
  { href: "/kjeller", label: "Kjeller", sub: "15 000–35 000 kr/m²" },
  { href: "/flipping", label: "Flipping", sub: "5 000–20 000 kr/m²" },
  { href: "/utleiedel", label: "Utleiedel", sub: "500k–1,5 mill." },
];

const megaFagfolk = [
  { href: "/elektriker", label: "Elektriker", sub: "600–900 kr/time" },
  { href: "/rorlegger", label: "Rørlegger", sub: "700–1 100 kr/time" },
  { href: "/maling", label: "Maling", sub: "80–600 kr/m²" },
  { href: "/gulv", label: "Gulv", sub: "400–1 500 kr/m²" },
  { href: "/vinduer", label: "Vinduer", sub: "5 000–15 000 kr/stk" },
  { href: "/isolasjon", label: "Isolasjon", sub: "300–1 500 kr/m²" },
  { href: "/varmepumpe", label: "Varmepumpe", sub: "15k–300k kr" },
  { href: "/pipe-og-ildsted", label: "Pipe og ildsted", sub: "25k–200k kr" },
  { href: "/grunnarbeid", label: "Grunnarbeid", sub: "300k–800k kr" },
  { href: "/drenering", label: "Drenering", sub: "2 000–4 000 kr/m" },
  { href: "/byggesaknad", label: "Byggesøknad", sub: "25k–100k kr" },
];

function MegaItem({ href, label, sub, onClick }: { href: string; label: string; sub: string; onClick?: () => void }) {
  const slug = href.replace("/", "");
  return (
    <Link href={href} onClick={onClick} className="group flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-accent-yellow/5 transition-all">
      <div className="w-8 h-8 rounded-lg bg-bg-tertiary/50 border border-surface-border flex items-center justify-center text-accent-yellow group-hover:border-accent-yellow/30 group-hover:bg-accent-yellow/10 transition-all">
        {icons[slug] || <I d="M8 2L14 7V14H2V7L8 2Z" />}
      </div>
      <div className="min-w-0">
        <p className="text-sm font-semibold text-text-primary group-hover:text-accent-yellow transition-colors leading-tight">{label}</p>
        <p className="text-[11px] text-text-tertiary font-mono leading-tight">{sub}</p>
      </div>
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMega, setOpenMega] = useState<string | null>(null);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => { document.body.style.overflow = mobileOpen ? "hidden" : ""; }, [mobileOpen]);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass border-b border-surface-border/50" : "bg-transparent"}`}
        initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-[4.5rem]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg border border-accent-gold/80 bg-bg-card flex items-center justify-center relative overflow-hidden">
                <svg viewBox="0 0 32 32" width="32" height="32" fill="none" className="absolute inset-0">
                  <rect x="5" y="11" width="22" height="18" fill="#E8B931" opacity="0.04"/>
                  <path d="M16 4L28 13" stroke="#E8B931" strokeWidth="2.2" strokeLinecap="round"/>
                  <path d="M16 4L4 13" stroke="#E8B931" strokeWidth="2.2" strokeLinecap="round"/>
                  <line x1="6" y1="13" x2="6" y2="28" stroke="#F2F0ED" strokeWidth="1.3" opacity="0.55"/>
                  <line x1="26" y1="13" x2="26" y2="28" stroke="#F2F0ED" strokeWidth="1.3" opacity="0.55"/>
                  <line x1="6" y1="28" x2="26" y2="28" stroke="#F2F0ED" strokeWidth="1.3" opacity="0.55"/>
                  <text x="16" y="21" textAnchor="middle" dominantBaseline="central" fontFamily="system-ui" fontWeight="900" fontSize="14" fill="#E8B931">B</text>
                </svg>
              </div>
              <span className="font-display font-extrabold text-lg group-hover:text-accent-yellow transition-colors">
                <span className="text-text-primary">Bygge</span><span className="text-accent-yellow">pris.no</span>
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              <Link href="/byggepriser" className="px-3 py-2 text-sm text-text-secondary hover:text-text-primary transition-colors">Byggepriser</Link>

              {/* Mega: Prosjekter */}
              <div className="relative" onMouseEnter={() => setOpenMega("prosjekter")} onMouseLeave={() => setOpenMega(null)}>
                <button className="px-3 py-2 text-sm text-text-secondary hover:text-text-primary transition-colors flex items-center gap-1">
                  Prosjekter <IconChevronRight size={14} className={`transition-transform duration-200 ${openMega === "prosjekter" ? "rotate-90" : ""}`} />
                </button>
                <AnimatePresence>
                  {openMega === "prosjekter" && (
                    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.2 }}
                      className="absolute top-full -left-40 mt-2 w-[620px] glass rounded-2xl border border-surface-border/50 shadow-elevated p-5">
                      <div className="flex items-center gap-2 mb-3 px-3">
                        <div className="w-1 h-4 rounded-full bg-accent-yellow" />
                        <p className="text-xs font-semibold text-text-tertiary uppercase tracking-wider">Byggeprosjekter</p>
                      </div>
                      <div className="grid grid-cols-3 gap-0.5">
                        {megaProsjekter.map((item) => <MegaItem key={item.href} {...item} />)}
                      </div>
                      <div className="mt-4 pt-3 border-t border-surface-border/50 px-3">
                        <Link href="/pris-per-kvm" className="text-xs text-accent-yellow hover:underline">Se alle m²-priser →</Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mega: Fagfolk */}
              <div className="relative" onMouseEnter={() => setOpenMega("fagfolk")} onMouseLeave={() => setOpenMega(null)}>
                <button className="px-3 py-2 text-sm text-text-secondary hover:text-text-primary transition-colors flex items-center gap-1">
                  Fagfolk <IconChevronRight size={14} className={`transition-transform duration-200 ${openMega === "fagfolk" ? "rotate-90" : ""}`} />
                </button>
                <AnimatePresence>
                  {openMega === "fagfolk" && (
                    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.2 }}
                      className="absolute top-full -left-20 mt-2 w-[480px] glass rounded-2xl border border-surface-border/50 shadow-elevated p-5">
                      <div className="flex items-center gap-2 mb-3 px-3">
                        <div className="w-1 h-4 rounded-full bg-accent-amber" />
                        <p className="text-xs font-semibold text-text-tertiary uppercase tracking-wider">Fagfolk og materialer</p>
                      </div>
                      <div className="grid grid-cols-2 gap-0.5">
                        {megaFagfolk.map((item) => <MegaItem key={item.href} {...item} />)}
                      </div>
                      <div className="mt-4 pt-3 border-t border-surface-border/50 px-3">
                        <Link href="/byggekostnader" className="text-xs text-accent-yellow hover:underline">Se håndverkerpriser →</Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/pris-per-kvm" className="px-3 py-2 text-sm text-text-secondary hover:text-text-primary transition-colors">Pris per m²</Link>
            </div>

            {/* CTA + mobile toggle */}
            <div className="flex items-center gap-3">
              <Link href="/kalkulator" className="hidden sm:flex items-center gap-2 px-4 py-2 bg-accent-yellow text-bg-primary font-display font-semibold text-sm rounded-lg hover:bg-accent-warm transition-colors shadow-glow-sm">
                <IconCalculator size={16} /> Kalkulator
              </Link>
              <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 text-text-secondary hover:text-text-primary transition-colors" aria-label="Meny">
                {mobileOpen ? <IconClose size={24} /> : <IconMenu size={24} />}
              </button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 bg-bg-primary/95 backdrop-blur-xl lg:hidden overflow-y-auto">
            <motion.nav initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: 30, opacity: 0 }} transition={{ duration: 0.3 }} className="pt-24 px-5 pb-10">
              <Link href="/byggepriser" onClick={() => setMobileOpen(false)} className="block px-4 py-3 text-lg font-display font-semibold text-text-primary hover:text-accent-yellow transition-colors">Byggepriser</Link>
              <Link href="/kalkulator" onClick={() => setMobileOpen(false)} className="block px-4 py-3 text-lg font-display font-semibold text-text-primary hover:text-accent-yellow transition-colors">Kalkulator</Link>

              <div className="mt-4">
                <div className="flex items-center gap-2 px-4 mb-2"><div className="w-1 h-3 rounded-full bg-accent-yellow" /><p className="text-xs font-semibold text-text-tertiary uppercase tracking-wider">Prosjekter</p></div>
                <div className="grid grid-cols-2 gap-0.5">
                  {megaProsjekter.map((item) => <MegaItem key={item.href} {...item} onClick={() => setMobileOpen(false)} />)}
                </div>
              </div>

              <div className="mt-6">
                <div className="flex items-center gap-2 px-4 mb-2"><div className="w-1 h-3 rounded-full bg-accent-amber" /><p className="text-xs font-semibold text-text-tertiary uppercase tracking-wider">Fagfolk og materialer</p></div>
                <div className="grid grid-cols-2 gap-0.5">
                  {megaFagfolk.map((item) => <MegaItem key={item.href} {...item} onClick={() => setMobileOpen(false)} />)}
                </div>
              </div>

              <div className="mt-6 space-y-1">
                <Link href="/pris-per-kvm" onClick={() => setMobileOpen(false)} className="block px-4 py-3 text-lg font-display font-semibold text-text-primary hover:text-accent-yellow">Pris per m²</Link>
                <Link href="/om-byggepris" onClick={() => setMobileOpen(false)} className="block px-4 py-3 text-sm text-text-secondary hover:text-accent-yellow">Om Byggepris.no</Link>
              </div>

              <div className="mt-6 px-4">
                <Link href="/kalkulator" onClick={() => setMobileOpen(false)} className="flex items-center justify-center gap-2 w-full py-3.5 bg-accent-yellow text-bg-primary font-display font-bold text-base rounded-xl shadow-glow-sm">
                  <IconCalculator size={20} /> Start kalkulator
                </Link>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
