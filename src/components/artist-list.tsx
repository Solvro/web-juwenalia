import Link from "next/link";

import { Artist } from "@/components/artist";
import { fetchData } from "@/lib/api";
import type { ArtistProps } from "@/lib/types";

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
      <div className="mx-8 px-12">
        <h1
          className={
            "my-8 text-center text-2xl font-extrabold md:text-left md:text-5xl"
          }
        >
          Tegoroczni artyści
        </h1>
      </div>
      <hr className="my-2 border-t border-gray-400" />
      <div className="mx-auto mt-8 px-8">
        {artists.length > 0 ? (
          // Calculate rows for the grid
          Array.from({ length: Math.ceil(artists.length / 3) }).map(
            (_, rowIndex) => (
              <div key={rowIndex}>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {artists
                    .slice(rowIndex * 3, rowIndex * 3 + 3) // Grab 3 artists per row
                    .map((artist) => (
                      <Artist key={artist.id} {...artist} />
                    ))}
                </div>
                <hr className="-mx-8 my-2 w-screen border-t border-gray-400" />{" "}
                {/* Repeating HR (the reason why i ain't using normal grid*/}
              </div>
            ),
          )
        ) : (
          <div className="flex flex-col items-center text-center">
            <h1 className="text-2xl font-bold">Brak Artystów</h1>
            <p className="p-3 text-xl">
              Nie udało nam się znaleźć podanych artystów. Wróć tutaj później!
            </p>
            <Link href="." className={"rounded-2xl border-2 border-black p-3"}>
              Odśwież
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export { ArtistList };
