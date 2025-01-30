/**
 * Conjugates a quantitative noun based on its count.
 * (1, 'jabł', 'ko', 'ka', 'ek) => '1 jabłko'
 * (2, 'jabł', 'ko', 'ka', 'ek) => '2 jabłka'
 * (5, 'jabł', 'ko', 'ka', 'ek) => '5 jabłek'
 */
export function conjugateNumeric(
  count: number,
  base: string,
  suffixSingular: string,
  suffixA: string,
  suffixB: string,
) {
  const countString = count.toString();
  if (count === 1) {
    return `${countString} ${base}${suffixSingular}`;
  }
  const remainder = count % 10;
  if (count >= 12 && count <= 14) {
    // Exception for numbers 12, 13 and 14, which are conjugated differently
    return `${countString} ${base}${suffixB}`;
  }
  const useSuffixB = remainder <= 1 || remainder >= 5;
  return `${countString} ${base}${useSuffixB ? suffixB : suffixA}`;
}
