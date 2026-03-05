export const CURRENT_EDITION = "2026";

export function hasEdition(
  edition: unknown,
  expected = CURRENT_EDITION,
): boolean {
  if (typeof edition === "string" || typeof edition === "number") {
    return String(edition) === expected;
  }

  if (Array.isArray(edition)) {
    return edition.some((value) => String(value) === expected);
  }

  if (edition && typeof edition === "object") {
    return JSON.stringify(edition).includes(expected);
  }

  return false;
}
