import { HorizontalRule } from "@/components/horizontal-rule";
import type { EventProps } from "@/lib/types";

interface Props {
  event: EventProps;
  isOn: boolean;
}

export function Day({ event, isOn }: Props) {
  return (
    <div>
      <HorizontalRule />
      <div className="flex flex-col justify-between px-4 sm:flex-row sm:items-center sm:py-6 md:px-10 md:py-4">
        <div className="flex flex-col">
          {isOn ? (
            <div className="my-1 flex max-w-32 animate-moving-gradient items-center justify-center rounded-md bg-gradient-main bg-[length:200%_200%] py-[5px]">
              <div className="mx-1 h-1.5 w-1.5 animate-pulsating-circle rounded-full bg-white"></div>
              <div className="text-[10px] font-black text-white">
                WŁAŚNIE TRWA
              </div>
            </div>
          ) : null}
          {event.artists.length > 0 ? (
            <div>
              {event.artists.map((artist) => (
                <div
                  key={artist.id}
                  className="text-l py-1 text-gray-800 sm:text-xl md:text-2xl xl:text-3xl"
                >
                  {artist.artists_id.name}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-l text-gray-800 md:text-2xl xl:text-3xl">
              {event.name}
            </div>
          )}
          <div className="md:text-l text-xs font-light sm:text-sm xl:text-xl">
            {event.location.name}
          </div>
        </div>
        <div className="text-l mt-4 flex-none text-left font-semibold sm:mr-32 sm:mt-0 sm:text-right sm:text-xl md:text-2xl xl:text-3xl">
          <h2>{`${event.start_time.split(":").slice(0, 2).join(":")}-${event.end_time.split(":").slice(0, 2).join(":")}`}</h2>
        </div>
      </div>
    </div>
  );
}
