import type { PremiumQuote, PriceRule } from "./types";

/**
 * Premium excluding insurance tax (assurantiebelasting).
 * Full internal precision — no rounding here.
 */
export function calculatePremiumExcludingTax(rule: PriceRule): number {
  return (
    rule.basePrice * (1 + rule.percentageAdjustment / 100) +
    rule.fixedAdjustment
  );
}

/**
 * Premium including insurance tax.
 * Full internal precision — no rounding here.
 */
export function calculatePremiumIncludingTax(rule: PriceRule): number {
  const excl = calculatePremiumExcludingTax(rule);
  return excl * (1 + rule.insuranceTaxPercentage / 100);
}

/**
 * Builds a full premium quote for a price rule.
 */
export function buildPremiumQuote(rule: PriceRule): PremiumQuote {
  const premiumExcludingTax = calculatePremiumExcludingTax(rule);
  const premiumIncludingTax = calculatePremiumIncludingTax(rule);

  return {
    productName: rule.productName,
    professionId: rule.professionId,
    professionName: rule.professionName,
    premiumExcludingTax,
    premiumIncludingTax,
    insuranceTaxPercentage: rule.insuranceTaxPercentage,
    rule,
  };
}
