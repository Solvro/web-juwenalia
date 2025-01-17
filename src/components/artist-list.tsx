// components/artist-list.tsx
import { Artist } from "@/components/artist";
import { getArtists } from "@/lib/artists";

import { HorizontalRule } from "./horizontal-rule";
import { NoDataInfo } from "./no-data-info";
import { PaddingWrapper } from "./padding-wrapper";

async function ArtistList() {
  const artists = await getArtists();

  return (
    <div>
      <PaddingWrapper className="">
        <h1 className="my-8 text-center text-2xl font-extrabold sm:text-left sm:text-5xl">
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
