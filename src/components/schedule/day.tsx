import { HorizontalRule } from "@/components/horizontal-rule";
import { PaddingWrapper } from "@/components/padding-wrapper";
import type { EventProps } from "@/lib/types";

export function Day({ event, isOn }: { event: EventProps; isOn: boolean }) {
  return (
    <div>
      <HorizontalRule />
      <PaddingWrapper className="flex flex-col justify-between sm:flex-row sm:items-center sm:space-x-20 sm:py-6 md:py-4">
        <div className="flex flex-col">
          {isOn ? (
            <div className="my-1 flex max-w-32 animate-moving-gradient items-center justify-center rounded-md bg-gradient-main bg-[length:200%_200%] py-[5px]">
              <div className="mx-1 h-1.5 w-1.5 animate-pulsating-circle rounded-full bg-white"></div>
              <p className="text-[10px] font-black text-white">WŁAŚNIE TRWA</p>
            </div>
          ) : null}
          {event.artists.length > 0 ? (
            <ul>
              {event.artists.map((artist) => (
                <li
                  key={artist.id}
                  className="text-l py-1 sm:text-xl md:text-2xl xl:text-3xl"
                >
                  {artist.artists_id.name}
                </li>
              ))}
            </ul>
          ) : (
            <div className="text-l md:text-2xl xl:text-3xl">{event.name}</div>
          )}
          <div className="md:text-l text-xs font-light sm:text-sm xl:text-xl">
            {event.location.name}
          </div>
        </div>
        <div className="text-l mt-4 flex-none text-left font-semibold sm:mr-32 sm:mt-0 sm:text-right sm:text-xl md:text-2xl xl:text-3xl">
          <h2>{`${event.start_time.split(":").slice(0, 2).join(":")}-${event.end_time.split(":").slice(0, 2).join(":")}`}</h2>
        </div>
      </PaddingWrapper>
    </div>
  );
}