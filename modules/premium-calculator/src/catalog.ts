import { buildPremiumQuote } from "./pricing";
import type {
  PremiumQuote,
  PriceRule,
  PricingCatalog,
  Profession,
} from "./types";

/**
 * Builds a compact pricing catalog from validated rules.
 */
export function buildCatalog(rules: PriceRule[]): PricingCatalog {
  const professionMap = new Map<string, Profession>();
  const rulesByProfessionId: Record<string, PriceRule[]> = {};
  const productNames = new Set<string>();

  for (const rule of rules) {
    if (!professionMap.has(rule.professionId)) {
      professionMap.set(rule.professionId, {
        id: rule.professionId,
        name: rule.professionName,
      });
    }

    if (!rulesByProfessionId[rule.professionId]) {
      rulesByProfessionId[rule.professionId] = [];
    }
    rulesByProfessionId[rule.professionId].push(rule);
    productNames.add(rule.productName);
  }

  const professions = [...professionMap.values()].sort((a, b) =>
    a.name.localeCompare(b.name, "nl"),
  );

  return {
    professions,
    rulesByProfessionId,
    productNames: [...productNames].sort((a, b) => a.localeCompare(b, "nl")),
  };
}

/**
 * Returns quotes for all products available for a profession.
 * Optionally filters to an allow-list of product names.
 */
export function getAvailableQuotes(
  catalog: PricingCatalog,
  professionId: string,
  productFilter?: readonly string[],
): PremiumQuote[] {
  const rules = catalog.rulesByProfessionId[professionId] ?? [];
  const allow =
    productFilter && productFilter.length > 0
      ? new Set(productFilter)
      : null;

  const quotes = rules
    .filter((rule) => (allow ? allow.has(rule.productName) : true))
    .map(buildPremiumQuote);

  quotes.sort((a, b) =>
    a.productName.localeCompare(b.productName, "nl"),
  );

  return quotes;
}

export function getProfessionById(
  catalog: PricingCatalog,
  professionId: string,
): Profession | undefined {
  return catalog.professions.find((p) => p.id === professionId);
}
