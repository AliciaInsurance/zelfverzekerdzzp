"use client";

import { PremiumCalculator } from "../../modules/premium-calculator/src/react";
import {
  pricingCatalog,
  resolvePremiumCta,
} from "@/lib/premium-calculator/adapter";

type SitePremiumCalculatorProps = {
  /** UTM content value for CTA tracking */
  ctaContent?: string;
  className?: string;
};

/**
 * Website-bound wrapper around the generic PremiumCalculator.
 * Keeps Alicia Direct / UTM concerns outside the reusable module.
 */
export function SitePremiumCalculator({
  ctaContent = "premium-calculator",
  className,
}: SitePremiumCalculatorProps) {
  return (
    <div className={className}>
      <PremiumCalculator
        catalog={pricingCatalog}
        ctaResolver={(quote, profession) =>
          resolvePremiumCta(quote, profession, ctaContent)
        }
      />
    </div>
  );
}
