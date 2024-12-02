import Image from "next/image";
import Link from "next/link";
import { API_URL } from "@/config/api";
import { ArtistProps } from "@/lib/types";

const Artist = async ({
  id,
  name,
  description,
  image,
  instagramUrl,
  spotifyUrl,
  events,
}: ArtistProps) => {
  return (
    <div
      key={id}
      className="border-2 p-2 border-gray-300 rounded-lg text-xl flex flex-col items-center text-center"
    >
      <h2 className={"font-bold text-3xl p-2 mb-2"}>{name}</h2>
      <div className="w-auto max-w-md">
        <Image
          className={"aspect-square object-cover rounded-lg"}
          src={`${API_URL}/assets/${image}`}
          alt="Picture of the artist"
          width={400}
          height={400}
          style={{ width: "100%", height: "auto" }}
        />
        <div className="flex flex-row justify-center items-center p-1">
          {instagramUrl && (
            <Link
              role="button"
              href={instagramUrl}
              target="_black"
              rel="noopener noreferrer"
            >
              <Image
                className={
                  "mx-4 md:mx-12 rounded-xl p-1  bg-gradient-to-bl from-fuchsia-300 to-amber-200 hover:from-fuchsia-500 hover:to-amber-400 active:from-fuchsia-700 active:to-amber-600"
                }
                src={`/buttons/instagram_icon.png`}
                alt="Link do IG artysty."
                width="64"
                height="64"
              />
            </Link>
          )}
          {spotifyUrl && (
            <Link
              href={spotifyUrl}
              target="_black"
              rel="noopener noreferrer"
              role="button"
            >
              <Image
                className={
                  "mx-4 md:mx-8 rounded-xl p-1 bg-green-200 hover:bg-green-400 active:bg-green-600"
                }
                src={`/buttons/spotify_logo_full.png`}
                alt="Link do Spotify artysty."
                width="192"
                height="96"
              />
            </Link>
          )}
        </div>
        <div className="bg-gray-200 rounded-xl p-1 m-2">
          <h1 className="font-semibold">Kiedy i gdzie:</h1>
          <div className="flex flex-col items-center">
            {events.map((event) => (
              <span key={event.id}>
                Dzień {event.events_id.day} |{" "}
                {event.events_id.start_time.slice(0, 5)} |{" "}
                {event.events_id.location}
              </span>
            ))}
          </div>
        </div>
        <Link
          href={`/schedule`}
          className="font-semibold text-white bg-stone-700 py-1 px-2 rounded-lg hover:bg-stone-950"
        >
          Zobacz w harmonogramie
        </Link>
        <p className="mt-2">{description}</p>
      </div>
    </div>
  );
};

export { Artist };
