import Image from "next/image";
import Link from "next/link";

import { API_URL } from "@/config/api";
import type { ArtistProps } from "@/lib/types";

function Artist({
  id,
  name,
  description,
  image,
  instagramUrl,
  spotifyUrl,
  events,
}: ArtistProps) {
  return (
    <div
      key={id}
      className="flex flex-col items-center rounded-lg border-2 border-gray-300 p-2 text-center text-xl"
    >
      <h2 className={"mb-2 p-2 text-3xl font-bold"}>{name}</h2>
      <div className="w-auto max-w-md">
        <Image
          className={"aspect-square rounded-lg object-cover"}
          src={`${API_URL}/assets/${image}`}
          alt="Picture of the artist"
          width={400}
          height={400}
          style={{ width: "100%", height: "auto" }}
        />
        {/* div for the IG and Spotify buttons */}
        <div className="flex flex-row items-center justify-center p-1">
          {/* instagram button */}
          {instagramUrl ? (
            <Link
              role="button"
              href={instagramUrl}
              target="_black"
              rel="noopener noreferrer"
            >
              <Image
                className={
                  "mx-4 rounded-xl bg-gradient-to-bl from-fuchsia-300 to-amber-200 p-1 hover:from-fuchsia-500 hover:to-amber-400 active:from-fuchsia-700 active:to-amber-600 md:mx-12"
                }
                src={`/buttons/instagram_icon.png`}
                alt="Link do IG artysty."
                width="64"
                height="64"
              />
            </Link>
          ) : null}
          {/* spotify button */}
          {spotifyUrl ? (
            <Link
              href={spotifyUrl}
              target="_black"
              rel="noopener noreferrer"
              role="button"
            >
              <Image
                className={
                  "mx-4 rounded-xl bg-green-200 p-1 hover:bg-green-400 active:bg-green-600 md:mx-8"
                }
                src={`/buttons/spotify_logo_full.png`}
                alt="Link do Spotify artysty."
                width="192"
                height="96"
              />
            </Link>
          ) : null}
        </div>
        {/* event summary for the artist */}
        <div className="m-2 rounded-xl bg-gray-200 p-1">
          <h1 className="font-semibold">Kiedy i gdzie:</h1>
          <div className="flex flex-col items-center">
            {events.map((event) => (
              <span key={event.id}>
                Dzień {event.events_id.day} |{" "}
                {event.events_id.start_time.slice(0, 5)} |{" "}
                {event.events_id.location.name}
              </span>
            ))}
          </div>

          {/* zobacz w harmonogramie, encapsulated in div because margin did not work for Link */}
          <div className="m-2">
            <Link
              href={`/schedule`}
              className="rounded-lg bg-stone-700 p-2 font-semibold text-white hover:bg-stone-950"
            >
              Zobacz w harmonogramie
            </Link>
          </div>
        </div>
        <p className="mt-2">{description}</p>
      </div>
    </div>
  );
}

export { Artist };
