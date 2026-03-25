"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { IconCalculator, IconMenu, IconClose, IconChevronRight } from "@/components/icons";

const navLinks = [
  { href: "/byggepriser", label: "Byggepriser" },
  { href: "/kalkulator", label: "Kalkulator" },
  {
    label: "Prosjekter",
    children: [
      { href: "/bygge-hus", label: "Bygge hus" },
      { href: "/tilbygg", label: "Tilbygg" },
      { href: "/oppussing", label: "Oppussing" },
      { href: "/bad", label: "Bad" },
      { href: "/kjokken", label: "Kjøkken" },
      { href: "/totalrenovering", label: "Totalrenovering" },
      { href: "/garasje", label: "Garasje" },
      { href: "/hytte", label: "Hytte" },
      { href: "/flipping", label: "Flipping" },
    ],
  },
  { href: "/pris-per-kvm", label: "Pris per m²" },
  { href: "/om-byggepris", label: "Om oss" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass border-b border-surface-border/50" : "bg-transparent"}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-[4.5rem]">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-yellow to-accent-gold flex items-center justify-center">
                <span className="text-bg-primary font-display font-bold text-sm">B</span>
              </div>
              <span className="font-display font-bold text-lg text-text-primary group-hover:text-accent-yellow transition-colors">Byggepris</span>
              <span className="text-accent-yellow font-display text-lg">.no</span>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label} className="relative" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
                    <button className="px-3 py-2 text-sm text-text-secondary hover:text-text-primary transition-colors flex items-center gap-1">
                      {link.label}
                      <IconChevronRight size={14} className={`transition-transform duration-200 ${dropdownOpen ? "rotate-90" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.2 }} className="absolute top-full left-0 mt-1 w-56 glass rounded-xl p-2 shadow-elevated">
                          {link.children.map((child) => (
                            <Link key={child.href} href={child.href} className="block px-3 py-2 text-sm text-text-secondary hover:text-accent-yellow hover:bg-surface-hover rounded-lg transition-all">{child.label}</Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link key={link.href} href={link.href!} className="px-3 py-2 text-sm text-text-secondary hover:text-text-primary transition-colors">{link.label}</Link>
                )
              )}
            </div>

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

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 bg-bg-primary/95 backdrop-blur-xl lg:hidden">
            <motion.nav initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: 50, opacity: 0 }} transition={{ duration: 0.3 }} className="pt-24 px-6 space-y-1">
              {navLinks.map((link, i) =>
                link.children ? (
                  <div key={link.label}>
                    <p className="px-4 py-3 text-xs font-semibold text-text-tertiary uppercase tracking-wider">{link.label}</p>
                    <div className="grid grid-cols-2 gap-1">
                      {link.children.map((child) => (
                        <Link key={child.href} href={child.href} onClick={() => setMobileOpen(false)} className="px-4 py-3 text-text-secondary hover:text-accent-yellow hover:bg-bg-card rounded-lg transition-all text-sm">{child.label}</Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <motion.div key={link.href} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}>
                    <Link href={link.href!} onClick={() => setMobileOpen(false)} className="block px-4 py-3 text-lg font-display font-semibold text-text-primary hover:text-accent-yellow transition-colors">{link.label}</Link>
                  </motion.div>
                )
              )}
              <div className="pt-6">
                <Link href="/kalkulator" onClick={() => setMobileOpen(false)} className="flex items-center justify-center gap-2 w-full py-3 bg-accent-yellow text-bg-primary font-display font-bold text-base rounded-xl">
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
