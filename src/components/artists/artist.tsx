import Image from "next/image";
import Link from "next/link";

import { API_URL } from "@/config/api";
import type { ArtistProps } from "@/lib/types";

export function Artist({
  id,
  name,
  image,
  instagramUrl,
  spotifyUrl,
  events,
}: ArtistProps) {
  const weekDays = ["NIE", "PON", "WT", "ŚR", "CZW", "PT", "SOB"];

  const days: Date[] = events.map(
    (event) => new Date(event.events_id.day.date),
  );
  const firstValidDay: Date | undefined = days.find(
    (date) => !Number.isNaN(date.getTime()),
  );

  return (
    <div
      key={id}
      className="flex flex-col items-center rounded-lg p-2 text-center text-xl"
    >
      <Image
        className={
          "mb-4 aspect-square h-[400px] w-full rounded-xl object-cover sm:h-[621px]"
        }
        src={`${API_URL}/assets/${image}`}
        alt={`Zdjęcie artysty ${name}`}
        width={441}
        height={621}
      />

      <div className="flex w-full flex-row justify-between">
        <h2 className={"p-2 text-left text-2xl font-extrabold xl:text-3xl"}>
          {name.toUpperCase()}
        </h2>
        {/* div for the IG and Spotify buttons */}
        <div className="flex items-center justify-end justify-items-end p-1">
          {/* spotify button */}
          {Boolean(spotifyUrl) && (
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
                src={`/buttons/spotify-svgrepo-com.svg`}
                alt="Link do Spotify artysty."
                width="43"
                height="43"
              />
            </Link>
          )}
          {/* instagram button */}
          {Boolean(instagramUrl) && (
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
                src={`/buttons/ig.svg`}
                alt="Link do Instagrama artysty."
                width="43"
                height="43"
              />
            </Link>
          )}
        </div>
      </div>
      <div className="w-full pr-4 text-sm lg:text-xl">
        {events.length > 0 ? (
          events.slice(0, 1).map((event) => (
            <div
              key={event.id}
              className="mx-2 flex w-full justify-between text-sm lg:text-xl"
            >
              <div className="text-left">
                {event.events_id.location.name.toUpperCase()}
              </div>
              {firstValidDay instanceof Date && (
                <div className="text-right">
                  {weekDays[firstValidDay.getDay()]}
                  {` / `}
                  {firstValidDay.getDate()}
                  {`.`}
                  {firstValidDay.getMonth() + 1}
                  {` / `}
                  {event.events_id.start_time.slice(0, 5)}
                </div>
              )}
            </div>
          ))
        ) : (
          <span className="mx-2">Brak informacji o koncertach.</span>
        )}
      </div>
    </div>
  );
}
