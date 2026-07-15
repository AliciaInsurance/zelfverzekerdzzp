"use client";

import { ArrowRight } from "lucide-react";
import { formatMonthlyPremiumLabel } from "../format";
import type { CtaResolution, PremiumQuote } from "../types";
import type { PremiumCalculatorClassNames } from "./types";

type ProductResultCardProps = {
  quote: PremiumQuote;
  cta: CtaResolution;
  labels: {
    taxIncluded: string;
    disclaimer: string;
  };
  onSelect?: () => void;
  classNames?: PremiumCalculatorClassNames;
};

export function ProductResultCard({
  quote,
  cta,
  labels,
  onSelect,
  classNames,
}: ProductResultCardProps) {
  return (
    <article
      className={
        classNames?.card ??
        "flex flex-col rounded-xl border border-navy/10 bg-white p-5 shadow-sm transition-shadow hover:shadow-md sm:p-6"
      }
    >
      <h3
        className={
          classNames?.cardTitle ?? "text-lg font-semibold text-navy"
        }
      >
        {quote.productName}
      </h3>
      <p
        className={
          classNames?.cardPrice ?? "mt-2 text-base font-medium text-navy"
        }
      >
        {formatMonthlyPremiumLabel(quote.premiumIncludingTax)}
      </p>
      <p
        className={
          classNames?.cardTaxNote ?? "mt-1 text-sm text-muted"
        }
      >
        {labels.taxIncluded}
      </p>
      <p
        className={
          classNames?.cardDisclaimer ?? "mt-3 text-sm leading-relaxed text-muted"
        }
      >
        {labels.disclaimer}
      </p>
      <div className="mt-5 flex-1" />
      <a
        href={cta.href}
        target={cta.external === false ? undefined : "_blank"}
        rel={cta.external === false ? undefined : "noopener noreferrer"}
        onClick={onSelect}
        className={
          classNames?.cardCta ??
          "inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-blue px-5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2"
        }
      >
        {cta.label}
        <ArrowRight className="h-4 w-4" aria-hidden />
      </a>
    </article>
  );
}
