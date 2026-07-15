"use client";

import { useMemo, useState } from "react";
import { getAvailableQuotes } from "../catalog";
import type { PricingCatalog, Profession } from "../types";
import { ProfessionSearch } from "./ProfessionSearch";
import { ProductResultCard } from "./ProductResultCard";
import type {
  PremiumCalculatorClassNames,
  PremiumCalculatorCtaResolver,
  PremiumCalculatorLabels,
} from "./types";

export type PremiumCalculatorProps = {
  catalog: PricingCatalog;
  /** Optional allow-list of product names. When omitted, all available products are shown. */
  products?: readonly string[];
  ctaResolver: PremiumCalculatorCtaResolver;
  onProductSelected?: (
    quote: ReturnType<typeof getAvailableQuotes>[number],
    profession: Profession,
  ) => void;
  classNames?: PremiumCalculatorClassNames;
  labels?: PremiumCalculatorLabels;
};

const DEFAULT_LABELS: Required<PremiumCalculatorLabels> = {
  searchLabel: "Zoek je beroep",
  searchPlaceholder: "Bijv. consultant, fotograaf, schildersbedrijf…",
  emptyQueryHint:
    "Typ je beroep om te zien welke verzekeringen beschikbaar zijn en wat de indicatieve premie is.",
  noResults: "Geen beroepen gevonden. Probeer een andere zoekterm.",
  noProducts: "Voor dit beroep zijn geen producten beschikbaar.",
  taxIncluded: "Inclusief assurantiebelasting",
  disclaimer:
    "Indicatieve premie voor jouw beroep. De definitieve premie wordt bepaald tijdens het afsluiten.",
  defaultCtaLabel: "Bekijk verzekering",
};

export function PremiumCalculator({
  catalog,
  products,
  ctaResolver,
  onProductSelected,
  classNames,
  labels: labelOverrides,
}: PremiumCalculatorProps) {
  const labels = { ...DEFAULT_LABELS, ...labelOverrides };
  const [selected, setSelected] = useState<Profession | null>(null);

  const quotes = useMemo(() => {
    if (!selected) return [];
    return getAvailableQuotes(catalog, selected.id, products);
  }, [catalog, selected, products]);

  return (
    <div
      className={
        classNames?.root ??
        "overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-lg"
      }
    >
      <div className="border-b border-navy/10 bg-gradient-to-r from-navy to-blue px-6 py-4">
        <p className="font-medium text-white">Premiecalculator</p>
      </div>

      <div className="space-y-6 p-6 md:p-8">
        <ProfessionSearch
          professions={catalog.professions}
          selected={selected}
          onSelect={setSelected}
          onClear={() => setSelected(null)}
          labels={{
            searchLabel: labels.searchLabel,
            searchPlaceholder: labels.searchPlaceholder,
          }}
          classNames={classNames}
        />

        {!selected && (
          <p
            className={
              classNames?.emptyState ?? "text-sm leading-relaxed text-muted"
            }
          >
            {labels.emptyQueryHint}
          </p>
        )}

        {selected && quotes.length === 0 && (
          <p
            className={
              classNames?.emptyState ?? "text-sm leading-relaxed text-muted"
            }
          >
            {labels.noProducts}
          </p>
        )}

        {selected && quotes.length > 0 && (
          <div
            className={
              classNames?.results ??
              "grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            }
          >
            {quotes.map((quote) => {
              const cta = ctaResolver(quote, selected);
              return (
                <ProductResultCard
                  key={`${quote.professionId}-${quote.productName}`}
                  quote={quote}
                  cta={{
                    label: cta.label || labels.defaultCtaLabel,
                    href: cta.href,
                    external: cta.external,
                  }}
                  labels={{
                    taxIncluded: labels.taxIncluded,
                    disclaimer: labels.disclaimer,
                  }}
                  onSelect={() => onProductSelected?.(quote, selected)}
                  classNames={classNames}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
