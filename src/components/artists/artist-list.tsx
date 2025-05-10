import { Artist } from "@/components/artists/artist";
import { NoArtistInfo } from "@/components/no-artist-info";
import { fetchData } from "@/lib/api";
import type { ArtistProps } from "@/lib/types";

import { PaddingWrapper } from "../padding-wrapper";
import { PageHeader } from "../page-header";

// if we need shuffling the artists, so everyone in their respective category
// gets a somewhat even representation on our site
function shuffleArray<T>(array: T[]): T[] {
  return array
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
}

/** Splits an array into two arrays by applying the predicate to each item. */
export function partitionArray<T>(array: T[], predicate: (item: T) => boolean) {
  const truthy: T[] = [];
  const falsy: T[] = [];
  for (const item of array) {
    (predicate(item) ? truthy : falsy).push(item);
  }
  return [truthy, falsy];
}

async function ArtistList() {
  const response = await fetchData<{ data: ArtistProps[] }>(
    "items/artists?fields=*,events.*,events.events_id.*,events.events_id.location.*,events.events_id.day.*",
  );

  const rawArtists = response.data;

  const [popularArtists, unpopularArtists] = partitionArray(
    rawArtists,
    (artist) => artist.isPopular,
  );

  const shuffledPopularArtists = shuffleArray(popularArtists);
  const shuffledUnpopularArtists = shuffleArray(unpopularArtists);

  const artists = [...shuffledPopularArtists, ...shuffledUnpopularArtists];

  return (
    <div className="mt-48">
      <PageHeader>Tegoroczni artyści</PageHeader>
      {artists.length > 0 ? (
        <PaddingWrapper className="mt-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {artists.map((artist) => (
              <Artist key={artist.id} {...artist} />
            ))}
          </div>
        </PaddingWrapper>
      ) : (
        <div className="-mt-32">
          <NoArtistInfo errorMessage="Artyści nie są jeszcze dostępni. Wróć tutaj później!" />
        </div>
      )}
    </div>
  );
}

export { ArtistList };
