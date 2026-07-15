import type { Profession } from "./types";

function normalize(value: string): string {
  return value.trim().toLowerCase();
}

/**
 * Word-boundary and substring match, case-insensitive.
 * Matches:
 * - start of the full name
 * - start of any whitespace-separated word
 * - any contiguous substring
 */
export function matchesProfessionQuery(
  professionName: string,
  query: string,
): boolean {
  const q = normalize(query);
  if (!q) return false;

  const name = normalize(professionName);
  if (name.includes(q)) return true;

  const words = name.split(/[\s/\-_.,()]+/).filter(Boolean);
  return words.some((word) => word.startsWith(q) || word.includes(q));
}

/**
 * Fast in-memory profession search for ~700 items.
 * Results are sorted: prefix matches first, then alphabetical.
 */
export function searchProfessions(
  professions: Profession[],
  query: string,
  limit = 12,
): Profession[] {
  const q = normalize(query);
  if (!q) return [];

  const scored: Array<{ profession: Profession; score: number }> = [];

  for (const profession of professions) {
    const name = normalize(profession.name);
    if (!matchesProfessionQuery(profession.name, q)) continue;

    let score = 100;
    if (name.startsWith(q)) score = 0;
    else if (name.split(/[\s/\-_.,()]+/).some((w) => w.startsWith(q))) score = 1;
    else score = 2;

    scored.push({ profession, score });
  }

  scored.sort((a, b) => {
    if (a.score !== b.score) return a.score - b.score;
    return a.profession.name.localeCompare(b.profession.name, "nl");
  });

  return scored.slice(0, limit).map((item) => item.profession);
}
