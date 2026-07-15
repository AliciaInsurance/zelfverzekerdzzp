/** A single validated pricing rule from pricing.csv. */
export type PriceRule = {
  professionRiskclassId: string;
  professionId: string;
  professionName: string;
  productName: string;
  basePrice: number;
  percentageAdjustment: number;
  fixedAdjustment: number;
  insuranceTaxPercentage: number;
  riskclassName: string;
};

export type Profession = {
  id: string;
  name: string;
};

/** Compact catalog used by the calculator UI and services. */
export type PricingCatalog = {
  professions: Profession[];
  /** Rules grouped by profession_id. */
  rulesByProfessionId: Record<string, PriceRule[]>;
  /** Distinct product names present in the catalog. */
  productNames: string[];
};

export type PremiumQuote = {
  productName: string;
  professionId: string;
  professionName: string;
  premiumExcludingTax: number;
  premiumIncludingTax: number;
  insuranceTaxPercentage: number;
  rule: PriceRule;
};

export type ValidationIssue = {
  code: string;
  message: string;
  row?: number;
};

export type ValidationResult =
  | { ok: true; rules: PriceRule[] }
  | { ok: false; issues: ValidationIssue[] };

export type CtaResolution = {
  label: string;
  href: string;
  external?: boolean;
};

export type ProductSelection = {
  profession: Profession;
  quote: PremiumQuote;
};
