import Link from "next/link";
import { IconHouse, IconCalculator } from "@/components/icons";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <div className="text-8xl font-display font-extrabold gradient-text mb-4">404</div>
        <h1 className="font-display font-bold text-2xl text-text-primary mb-3">
          Siden finnes ikke
        </h1>
        <p className="text-text-secondary mb-8">
          Beklager, vi finner ikke siden du leter etter. Den kan ha blitt flyttet eller fjernet.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-accent-yellow text-bg-primary font-display font-bold rounded-xl hover:bg-accent-warm transition-colors"
          >
            <IconHouse size={18} />
            Til forsiden
          </Link>
          <Link
            href="/kalkulator"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-surface-border text-text-primary font-display font-semibold rounded-xl hover:border-accent-yellow/30 transition-colors"
          >
            <IconCalculator size={18} />
            Bruk kalkulator
          </Link>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {[
            { href: "/bygge-hus", label: "Bygge hus" },
            { href: "/bad", label: "Bad" },
            { href: "/kjokken", label: "Kjøkken" },
            { href: "/oppussing", label: "Oppussing" },
            { href: "/byggepriser", label: "Byggepriser" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="px-3 py-1.5 text-xs text-text-tertiary hover:text-accent-yellow border border-surface-border rounded-lg hover:border-accent-yellow/30 transition-all">
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
