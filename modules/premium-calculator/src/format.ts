/**
 * Formats a number as a Dutch euro amount.
 * Example: 38.41 → "€ 38,41"
 *
 * Rounding to two decimals happens only here, for display.
 */
export function formatEuro(amount: number): string {
  const rounded = Math.round((amount + Number.EPSILON) * 100) / 100;
  const formatted = new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(rounded);

  // Intl.nl-NL yields "€ 38,41" (non-breaking space). Normalize to regular space
  // for consistent copy/assertions while keeping Dutch decimal comma.
  return formatted.replace(/\u00A0/g, " ");
}

/**
 * Display helper for monthly premiums.
 * Example: "Vanaf € 38,41 per maand"
 */
export function formatMonthlyPremiumLabel(amount: number): string {
  return `Vanaf ${formatEuro(amount)} per maand`;
}
