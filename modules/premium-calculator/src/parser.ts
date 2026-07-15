/**
 * Minimal CSV parser for the premium-calculator pricing file.
 * Handles RFC4180-style quoted fields and Dutch decimal commas in numeric cells.
 */

export const REQUIRED_COLUMNS = [
  "profession_riskclass_id",
  "profession_id",
  "profession_name",
  "product_name",
  "base_price",
  "percentage_adjustment",
  "fixed_adjustment",
  "insurance_tax_percentage",
  "riskclass_name",
] as const;

export type RawPricingRow = Record<(typeof REQUIRED_COLUMNS)[number], string> & {
  __rowNumber: number;
};

function parseCsvLine(line: string): string[] {
  const fields: string[] = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];

    if (inQuotes) {
      if (char === '"') {
        if (line[i + 1] === '"') {
          current += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        current += char;
      }
      continue;
    }

    if (char === '"') {
      inQuotes = true;
      continue;
    }

    if (char === ",") {
      fields.push(current);
      current = "";
      continue;
    }

    current += char;
  }

  fields.push(current);
  return fields;
}

function splitCsvRows(content: string): string[] {
  const normalized = content.replace(/^\uFEFF/, "").replace(/\r\n/g, "\n").replace(/\r/g, "\n");
  const rows: string[] = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < normalized.length; i++) {
    const char = normalized[i];

    if (char === '"') {
      inQuotes = !inQuotes;
      current += char;
      continue;
    }

    if (char === "\n" && !inQuotes) {
      if (current.trim() !== "") {
        rows.push(current);
      }
      current = "";
      continue;
    }

    current += char;
  }

  if (current.trim() !== "") {
    rows.push(current);
  }

  return rows;
}

/**
 * Parses a Dutch/EU style decimal string into a number.
 * Accepts: "14,38", "22.5", "5", "0"
 */
export function parseDutchNumber(value: string): number | null {
  const trimmed = value.trim();
  if (trimmed === "") return null;

  // Remove thousands separators if present (1.234,56 or 1,234.56) — pricing uses simple decimals
  const normalized = trimmed.includes(",")
    ? trimmed.replace(/\./g, "").replace(",", ".")
    : trimmed;

  if (!/^-?\d+(\.\d+)?$/.test(normalized)) {
    return null;
  }

  const parsed = Number(normalized);
  return Number.isFinite(parsed) ? parsed : null;
}

/**
 * Parses pricing.csv content into raw string rows (not yet validated numerically).
 */
export function parsePricingCsv(content: string): {
  headers: string[];
  rows: RawPricingRow[];
  missingColumns: string[];
} {
  const lines = splitCsvRows(content);
  if (lines.length === 0) {
    return { headers: [], rows: [], missingColumns: [...REQUIRED_COLUMNS] };
  }

  const headers = parseCsvLine(lines[0]).map((h) => h.trim());
  const headerIndex = new Map(headers.map((h, i) => [h, i]));
  const missingColumns = REQUIRED_COLUMNS.filter((col) => !headerIndex.has(col));

  if (missingColumns.length > 0) {
    return { headers, rows: [], missingColumns };
  }

  const rows: RawPricingRow[] = [];

  for (let i = 1; i < lines.length; i++) {
    const fields = parseCsvLine(lines[i]);
    const get = (column: (typeof REQUIRED_COLUMNS)[number]) =>
      (fields[headerIndex.get(column)!] ?? "").trim();

    rows.push({
      profession_riskclass_id: get("profession_riskclass_id"),
      profession_id: get("profession_id"),
      profession_name: get("profession_name"),
      product_name: get("product_name"),
      base_price: get("base_price"),
      percentage_adjustment: get("percentage_adjustment"),
      fixed_adjustment: get("fixed_adjustment"),
      insurance_tax_percentage: get("insurance_tax_percentage"),
      riskclass_name: get("riskclass_name"),
      __rowNumber: i + 1,
    });
  }

  return { headers, rows, missingColumns: [] };
}
