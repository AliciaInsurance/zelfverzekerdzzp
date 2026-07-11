import Link from "next/link";
import { ArrowRight, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const packageItems = [
  { label: "AVB", color: "bg-blue/10 text-blue" },
  { label: "BAV", color: "bg-aqua/10 text-aqua" },
  { label: "Rechtsbijstand", color: "bg-navy/10 text-navy" },
];

export function PackagePreview() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-navy/10 bg-white p-6 shadow-xl">
      <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-blue/20 to-aqua/20 blur-2xl" />

      <div className="relative">
        <div className="mb-4 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue to-aqua">
            <Shield className="h-4 w-4 text-white" aria-hidden />
          </div>
          <span className="text-sm font-medium text-muted">Aanbevolen pakket</span>
        </div>

        <div className="mb-6 space-y-2">
          {packageItems.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-between rounded-lg border border-navy/5 px-4 py-3"
            >
              <span className="font-medium text-navy">{item.label}</span>
              <span
                className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${item.color}`}
              >
                Inbegrepen
              </span>
            </div>
          ))}
        </div>

        <p className="mb-4 text-sm text-muted">
          Bekijk welke verzekeringen bij jouw beroep passen
        </p>

        <Button asChild variant="secondary" className="w-full">
          <Link href="/beroepen">
            Bekijk
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
