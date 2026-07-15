import { parseDutchNumber, parsePricingCsv, REQUIRED_COLUMNS } from "./parser";
import type { PriceRule, ValidationIssue, ValidationResult } from "./types";

function issue(
  code: string,
  message: string,
  row?: number,
): ValidationIssue {
  return { code, message, row };
}

/**
 * Validates raw pricing.csv content and returns typed price rules.
 * Fails with descriptive issues when the file is invalid.
 */
export function validatePricingCsv(content: string): ValidationResult {
  const { rows, missingColumns } = parsePricingCsv(content);
  const issues: ValidationIssue[] = [];

  if (missingColumns.length > 0) {
    issues.push(
      issue(
        "missing_columns",
        `Verplichte kolommen ontbreken: ${missingColumns.join(", ")}. Verwacht: ${REQUIRED_COLUMNS.join(", ")}.`,
      ),
    );
    return { ok: false, issues };
  }

  if (rows.length === 0) {
    issues.push(issue("empty_file", "pricing.csv bevat geen datarijen."));
    return { ok: false, issues };
  }

  const rules: PriceRule[] = [];
  const seenRiskclassIds = new Map<string, number>();
  const seenProfessionProduct = new Map<string, number>();

  for (const raw of rows) {
    const row = raw.__rowNumber;

    if (!raw.profession_id) {
      issues.push(issue("empty_profession_id", "profession_id is leeg.", row));
      continue;
    }
    if (!raw.profession_name) {
      issues.push(
        issue("empty_profession_name", "profession_name is leeg.", row),
      );
      continue;
    }
    if (!raw.product_name) {
      issues.push(issue("empty_product_name", "product_name is leeg.", row));
      continue;
    }
    if (!raw.profession_riskclass_id) {
      issues.push(
        issue(
          "empty_profession_riskclass_id",
          "profession_riskclass_id is leeg.",
          row,
        ),
      );
      continue;
    }

    const previousRiskRow = seenRiskclassIds.get(raw.profession_riskclass_id);
    if (previousRiskRow !== undefined) {
      issues.push(
        issue(
          "duplicate_profession_riskclass_id",
          `Dubbele profession_riskclass_id "${raw.profession_riskclass_id}" (eerder op rij ${previousRiskRow}).`,
          row,
        ),
      );
      continue;
    }
    seenRiskclassIds.set(raw.profession_riskclass_id, row);

    const comboKey = `${raw.profession_id}::${raw.product_name}`;
    const previousComboRow = seenProfessionProduct.get(comboKey);
    if (previousComboRow !== undefined) {
      issues.push(
        issue(
          "duplicate_profession_product",
          `Dubbele combinatie profession_id + product_name ("${raw.profession_id}" / "${raw.product_name}") (eerder op rij ${previousComboRow}).`,
          row,
        ),
      );
      continue;
    }
    seenProfessionProduct.set(comboKey, row);

    const basePrice = parseDutchNumber(raw.base_price);
    const percentageAdjustment = parseDutchNumber(raw.percentage_adjustment);
    const fixedAdjustment = parseDutchNumber(raw.fixed_adjustment);
    const insuranceTaxPercentage = parseDutchNumber(
      raw.insurance_tax_percentage,
    );

    if (basePrice === null) {
      issues.push(
        issue(
          "invalid_number",
          `Ongeldige base_price "${raw.base_price}".`,
          row,
        ),
      );
      continue;
    }
    if (percentageAdjustment === null) {
      issues.push(
        issue(
          "invalid_number",
          `Ongeldige percentage_adjustment "${raw.percentage_adjustment}".`,
          row,
        ),
      );
      continue;
    }
    if (fixedAdjustment === null) {
      issues.push(
        issue(
          "invalid_number",
          `Ongeldige fixed_adjustment "${raw.fixed_adjustment}".`,
          row,
        ),
      );
      continue;
    }
    if (insuranceTaxPercentage === null) {
      issues.push(
        issue(
          "invalid_number",
          `Ongeldige insurance_tax_percentage "${raw.insurance_tax_percentage}".`,
          row,
        ),
      );
      continue;
    }

    if (insuranceTaxPercentage < 0 || insuranceTaxPercentage > 100) {
      issues.push(
        issue(
          "invalid_tax_percentage",
          `Ongeldig insurance_tax_percentage ${insuranceTaxPercentage} (verwacht 0–100).`,
          row,
        ),
      );
      continue;
    }

    rules.push({
      professionRiskclassId: raw.profession_riskclass_id,
      professionId: raw.profession_id,
      professionName: raw.profession_name,
      productName: raw.product_name,
      basePrice,
      percentageAdjustment,
      fixedAdjustment,
      insuranceTaxPercentage,
      riskclassName: raw.riskclass_name,
    });
  }

  if (issues.length > 0) {
    return { ok: false, issues };
  }

  return { ok: true, rules };
}

export function formatValidationError(issues: ValidationIssue[]): string {
  const lines = issues.map((item) => {
    const prefix = item.row ? `Rij ${item.row}: ` : "";
    return `- [${item.code}] ${prefix}${item.message}`;
  });
  return `pricing.csv is ongeldig:\n${lines.join("\n")}`;
}
