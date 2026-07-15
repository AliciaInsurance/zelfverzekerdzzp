import type { CtaResolution, PremiumQuote, Profession } from "../types";

export type PremiumCalculatorClassNames = {
  root?: string;
  searchLabel?: string;
  searchInput?: string;
  suggestions?: string;
  suggestionItem?: string;
  suggestionItemActive?: string;
  results?: string;
  emptyState?: string;
  card?: string;
  cardTitle?: string;
  cardPrice?: string;
  cardTaxNote?: string;
  cardDisclaimer?: string;
  cardCta?: string;
};

export type PremiumCalculatorCtaResolver = (
  quote: PremiumQuote,
  profession: Profession,
) => CtaResolution;

export type PremiumCalculatorLabels = {
  searchLabel?: string;
  searchPlaceholder?: string;
  emptyQueryHint?: string;
  noResults?: string;
  noProducts?: string;
  taxIncluded?: string;
  disclaimer?: string;
  defaultCtaLabel?: string;
};
