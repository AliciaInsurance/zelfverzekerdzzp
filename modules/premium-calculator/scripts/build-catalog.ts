/**
 * Build-time script: reads pricing.csv, validates, writes generated/catalog.json.
 *
 * Run with:
 *   node --experimental-strip-types modules/premium-calculator/scripts/build-catalog.ts
 *
 * An invalid CSV fails the process with a clear error (exit code 1).
 */

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { buildCatalog } from "../src/catalog";
import { formatValidationError, validatePricingCsv } from "../src/validator";

const __dirname = dirname(fileURLToPath(import.meta.url));
const moduleRoot = join(__dirname, "..");
const csvPath = join(moduleRoot, "pricing", "pricing.csv");
const outPath = join(moduleRoot, "generated", "catalog.json");

function main() {
  const content = readFileSync(csvPath, "utf8");
  const result = validatePricingCsv(content);

  if (!result.ok) {
    console.error(formatValidationError(result.issues));
    process.exit(1);
  }

  const catalog = buildCatalog(result.rules);

  // Drop riskclassName from client payload — internal only
  const clientCatalog = {
    professions: catalog.professions,
    productNames: catalog.productNames,
    rulesByProfessionId: Object.fromEntries(
      Object.entries(catalog.rulesByProfessionId).map(([id, rules]) => [
        id,
        rules.map(
          ({
            professionRiskclassId,
            professionId,
            professionName,
            productName,
            basePrice,
            percentageAdjustment,
            fixedAdjustment,
            insuranceTaxPercentage,
          }) => ({
            professionRiskclassId,
            professionId,
            professionName,
            productName,
            basePrice,
            percentageAdjustment,
            fixedAdjustment,
            insuranceTaxPercentage,
            riskclassName: "",
          }),
        ),
      ]),
    ),
  };

  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, `${JSON.stringify(clientCatalog)}\n`, "utf8");

  console.log(
    `Premium catalog generated: ${catalog.professions.length} professions, ${result.rules.length} rules, ${catalog.productNames.length} products → ${outPath}`,
  );
}

main();
