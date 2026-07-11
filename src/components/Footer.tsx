import Link from "next/link";
import { Logo } from "@/components/Logo";
import { footerDisclaimer, footerNav } from "@/content/navigation";

export function Footer() {
  return (
    <footer className="border-t border-navy/10 bg-navy text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo className="text-white [&_span:last-child]:text-white [&_span:first-child]:from-blue [&_span:first-child]:to-aqua" />
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Slim verzekerd ondernemen. Zonder gedoe.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/90">
              Navigatie
            </h3>
            <ul className="space-y-2">
              {footerNav.primary.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/90">
              Juridisch
            </h3>
            <ul className="space-y-2">
              {footerNav.legal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-8">
          <p className="text-xs leading-relaxed text-white/60">
            {footerDisclaimer}
          </p>
          <p className="mt-4 text-xs text-white/40">
            © {new Date().getFullYear()} ZelfverzekerdZZP. Alle rechten
            voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  );
}
