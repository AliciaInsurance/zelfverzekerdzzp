import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { describe, it } from "node:test";
import { fileURLToPath } from "node:url";

import { buildCatalog, getAvailableQuotes } from "../src/catalog";
import { formatEuro, formatMonthlyPremiumLabel } from "../src/format";
import { parseDutchNumber } from "../src/parser";
import {
  buildPremiumQuote,
  calculatePremiumExcludingTax,
  calculatePremiumIncludingTax,
} from "../src/pricing";
import { matchesProfessionQuery, searchProfessions } from "../src/search";
import type { PriceRule } from "../src/types";
import {
  formatValidationError,
  validatePricingCsv,
} from "../src/validator";

const __dirname = dirname(fileURLToPath(import.meta.url));
const csvPath = join(__dirname, "..", "pricing", "pricing.csv");

describe("parseDutchNumber", () => {
  it("parses comma decimals", () => {
    assert.equal(parseDutchNumber("14,38"), 14.38);
    assert.equal(parseDutchNumber("6,05"), 6.05);
  });

  it("parses plain and dot decimals", () => {
    assert.equal(parseDutchNumber("5"), 5);
    assert.equal(parseDutchNumber("22.5"), 22.5);
  });

  it("rejects invalid values", () => {
    assert.equal(parseDutchNumber(""), null);
    assert.equal(parseDutchNumber("abc"), null);
  });
});

describe("pricing formula", () => {
  const rule: PriceRule = {
    professionRiskclassId: "1",
    professionId: "p1",
    professionName: "Tester",
    productName: "Rechtsbijstandsverzekering",
    basePrice: 31.74,
    percentageAdjustment: 0,
    fixedAdjustment: 0,
    insuranceTaxPercentage: 21,
    riskclassName: "Rechtsbijstand 1",
  };

  it("calculates excl and incl tax with full precision", () => {
    const excl = calculatePremiumExcludingTax(rule);
    const incl = calculatePremiumIncludingTax(rule);
    assert.equal(excl, 31.74);
    assert.equal(incl, 31.74 * 1.21);
  });

  it("applies percentage and fixed adjustments", () => {
    const adjusted: PriceRule = {
      ...rule,
      basePrice: 100,
      percentageAdjustment: 10,
      fixedAdjustment: 5,
      insuranceTaxPercentage: 21,
    };
    const excl = calculatePremiumExcludingTax(adjusted);
    const incl = calculatePremiumIncludingTax(adjusted);
    assert.ok(Math.abs(excl - 115) < 1e-10);
    assert.ok(Math.abs(incl - 115 * 1.21) < 1e-10);
  });

  it("builds quote", () => {
    const quote = buildPremiumQuote(rule);
    assert.equal(quote.productName, rule.productName);
    assert.ok(quote.premiumIncludingTax > quote.premiumExcludingTax);
  });
});

describe("formatEuro", () => {
  it("formats Dutch euro amounts", () => {
    assert.equal(formatEuro(38.41), "€ 38,41");
    assert.equal(formatMonthlyPremiumLabel(38.41), "Vanaf € 38,41 per maand");
  });

  it("rounds only for display", () => {
    assert.equal(formatEuro(10.005), "€ 10,01");
  });
});

describe("search", () => {
  const professions = [
    { id: "1", name: "Softwareontwikkelaar" },
    { id: "2", name: "Accountant" },
    { id: "3", name: "IT-specialist" },
    { id: "4", name: "Mensendieck-oefentherapeut" },
  ];

  it("matches case-insensitive substrings and word starts", () => {
    assert.equal(matchesProfessionQuery("IT-specialist", "spec"), true);
    assert.equal(matchesProfessionQuery("Accountant", "acc"), true);
    assert.equal(matchesProfessionQuery("Accountant", "ACC"), true);
    assert.equal(matchesProfessionQuery("Softwareontwikkelaar", "ontwik"), true);
  });

  it("returns ranked results", () => {
    const results = searchProfessions(professions, "acc");
    assert.equal(results[0]?.name, "Accountant");
  });
});

describe("validator + real pricing.csv", () => {
  it("validates the current pricing.csv", () => {
    const content = readFileSync(csvPath, "utf8");
    const result = validatePricingCsv(content);
    assert.equal(result.ok, true);
    if (!result.ok) return;

    assert.ok(result.rules.length > 3000);
    const catalog = buildCatalog(result.rules);
    assert.ok(catalog.professions.length >= 600);
    assert.ok(catalog.productNames.includes("Rechtsbijstandsverzekering"));

    const first = catalog.professions[0];
    const quotes = getAvailableQuotes(catalog, first.id);
    assert.ok(quotes.length > 0);
  });

  it("rejects missing columns", () => {
    const result = validatePricingCsv("foo,bar\n1,2\n");
    assert.equal(result.ok, false);
    if (result.ok) return;
    assert.match(formatValidationError(result.issues), /Verplichte kolommen/);
  });

  it("rejects duplicate profession_riskclass_id", () => {
    const csv = [
      "profession_riskclass_id,percentage_adjustment,base_price,fixed_adjustment,profession_name,product_name,insurance_tax_percentage,riskclass_name,profession_id",
      '1,0,10,0,A,ProductA,21,R,p1',
      '1,0,10,0,A,ProductB,21,R,p1',
    ].join("\n");
    const result = validatePricingCsv(csv);
    assert.equal(result.ok, false);
    if (result.ok) return;
    assert.ok(
      result.issues.some((i) => i.code === "duplicate_profession_riskclass_id"),
    );
  });
});
