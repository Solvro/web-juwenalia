import { fetchData } from "@/lib/api";
import type { SearchPhrase } from "@/lib/types";

import { LetterSearch } from "./letter";

export async function PhraseSearch() {
  let phrases: SearchPhrase[] = [];
  try {
    ({ data: phrases } = await fetchData<{ data: SearchPhrase[] }>(
      "items/phrases",
    ));
  } catch (error) {
    console.error("Could not load the phrases", error);
    return null;
  }
  const currentTime = Date.now();
  const currentPhrase = phrases
    .map((phrase) => ({
      ...phrase,
      startDateTime: new Date(phrase.startDate).getTime(),
    }))
    .filter(
      (phrase) =>
        phrase.startDateTime < currentTime &&
        phrase.startDateTime + phrase.intervalHours * 3600 * 1000 > currentTime,
    )
    // In case there are two overlapping phrases, we want to display the one that was started the latest.
    .sort((a, b) => b.startDateTime - a.startDateTime)
    .at(0);
  if (currentPhrase == null) {
    console.warn("No started phrases found.");
    return null;
  }
  const elapsedHours =
    (currentTime - currentPhrase.startDateTime) / 3600 / 1000;
  const currentLetterIndex = Math.floor(
    elapsedHours / currentPhrase.intervalHours,
  );
  return (
    <LetterSearch phrase={currentPhrase} currentIndex={currentLetterIndex} />
  );
}
