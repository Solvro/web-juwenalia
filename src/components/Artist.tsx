import Image from "next/image";
import Link from "next/link";
import { API_URL } from "@/config/api";
import { ArtistProps } from "@/lib/types";

const Artist = async ({
  id,
  name,
  image,
  instagramUrl,
  spotifyUrl,
  events,
}: ArtistProps) => {
  const getDayInfo = (day: number): string => {
    const dayInfo: { [key: number]: string } = {
      1: "WT / 20.05",
      2: "ŚR / 21.05",
      3: "CZW / 22.05",
    };
    return dayInfo[day] || "N/A";
  };

  return (
    <div
      key={id}
      className="flex flex-col items-center rounded-lg p-2 text-center text-xl"
    >
      <Image
        className={"aspect-square rounded-xl mb-4 object-cover"}
        src={`${API_URL}/assets/${image}`}
        alt="Picture of the artist"
        width={441}
        height={621}
        style={{ width: "100%", height: "621px" }}
      />

      <div className="flex w-full flex-row justify-between">
        <h2 className={"p-2 text-2xl font-extrabold lg:text-3xl"}>
          {name.toUpperCase()}
        </h2>
        {/* div for the IG and Spotify buttons */}
        <div className="flex items-center justify-end justify-items-end p-1">
          {/* spotify button */}
          {spotifyUrl && (
            <Link
              href={spotifyUrl}
              target="_black"
              rel="noopener noreferrer"
              role="button"
            >
              <Image
                className={
                  "rounded-xl p-1 hover:bg-green-400 active:bg-green-600"
                }
                src={`/buttons/spotify_logo_short.png`}
                // src={`/buttons/spotify-svgrepo-com.svg`}
                alt="Link do Spotify artysty."
                width="43"
                height="43"
              />
            </Link>
          )}
          {/* instagram button */}
          {instagramUrl && (
            <Link
              role="button"
              href={instagramUrl}
              target="_black"
              rel="noopener noreferrer"
            >
              <Image
                className={
                  "rounded-xl bg-gradient-to-bl p-1 hover:from-fuchsia-500 hover:to-amber-400 active:from-fuchsia-700 active:to-amber-600"
                }
                // src={`/buttons/instagram_icon.png`}
                src={`/buttons/ig.svg`}
                alt="Link do IG artysty."
                width="43"
                height="43"
              />
            </Link>
          )}
        </div>
      </div>
        <div className="pr-4 text-sm lg:text-xl w-full">
          {events && events.length > 0 ? (
            events.slice(0, 1).map((event) => (
              <div key={event.id} className="mx-2 flex w-full justify-between text-sm lg:text-xl">
                <div>
                  {event.events_id.location.name.toUpperCase()}
                </div>

                <div>
                  {getDayInfo(event.events_id.day)} /{" "}
                  {event.events_id.start_time.slice(0, 5)}
                </div>
              </div>
            ))
          ) : (
            <span className="mx-2">Brak informacji o koncertach.</span>
          )}
        </div>
    </div>
  );
};

export { Artist };
