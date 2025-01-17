import { Artist } from "@/components/artist";
import { fetchData } from "@/lib/api";
import type { ArtistProps } from "@/lib/types";

import { HorizontalRule } from "./horizontal-rule";
import { NoDataInfo } from "./no-data-info";
import { PaddingWrapper } from "./padding-wrapper";

// if we need shuffling the artists, so everyone in their respective P/NP category
// gets somewhat even representation on our site
function shuffleArray<T>(array: T[]): T[] {
  return array
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
}
///

async function ArtistList() {
  const response = await fetchData<{ data: ArtistProps[] }>(
    "items/artists?fields=*,events.*,events.events_id.*,events.events_id.location.*,events.events_id.day.*",
  );

  const artists_raw = response.data;

  // divide artists into popular and non-popular
  const popularArtists = artists_raw.filter((artist) => artist.isPopular);
  const nonPopularArtists = artists_raw.filter((artist) => !artist.isPopular);

  // same as with she shuffleArray function
  const shuffledNonPopularArtists = shuffleArray(nonPopularArtists);
  const shuffledPopularArtists = shuffleArray(popularArtists);
  ///

  const artists = [...shuffledPopularArtists, ...shuffledNonPopularArtists];

  return (
    <div className="">
      <PaddingWrapper className="">
        <h1
          className={
            "my-8 text-center text-2xl font-extrabold sm:text-left sm:text-5xl"
          }
        >
          Tegoroczni artyści
        </h1>
      </PaddingWrapper>
      <HorizontalRule />
      <PaddingWrapper className="mt-8">
        {artists.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {artists.map((artist) => (
              <Artist key={artist.id} {...artist} />
            ))}
          </div>
        ) : (
          <NoDataInfo
            errorTitle="Brak artystów"
            errorMessage="Nie udało nam się znaleźć listy artystów. Wróć tutaj później!"
          />
        )}
      </PaddingWrapper>
    </div>
  );
}

export { ArtistList };
