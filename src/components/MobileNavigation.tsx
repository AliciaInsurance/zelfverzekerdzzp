"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { CTAButton } from "@/components/CTAButton";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { mainNav } from "@/content/navigation";
import { cn } from "@/lib/utils";

export function MobileNavigation() {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label="Menu openen"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full max-w-xs">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <nav className="mt-8 flex flex-col gap-4" aria-label="Mobiele navigatie">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-sm py-1 text-base font-medium transition-colors hover:text-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue",
                pathname.startsWith(item.href) ? "text-blue" : "text-navy",
              )}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-4 border-t border-navy/10 pt-4">
            <CTAButton campaign="header-mobile" className="w-full" />
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
