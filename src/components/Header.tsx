"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/Logo";
import { MobileNavigation } from "@/components/MobileNavigation";
import { CTAButton } from "@/components/CTAButton";
import { mainNav } from "@/content/navigation";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-navy/10 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex" aria-label="Hoofdnavigatie">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue rounded-sm",
                pathname.startsWith(item.href)
                  ? "text-blue"
                  : "text-navy",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <CTAButton campaign="header" size="sm" />
        </div>

        <MobileNavigation />
      </div>
    </header>
  );
}
