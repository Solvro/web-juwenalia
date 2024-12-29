"use client";

import { format, isWithinInterval } from "date-fns";
import { pl } from "date-fns/locale";

import { HomepageHeader } from "@/components/homepage-header";
import { HorizontalRule } from "@/components/horizontal-rule";
import type { DayProps } from "@/lib/types";

interface Props {
  daysList: DayProps[];
}

const combineDateAndTime = (date: Date, time: string): Date => {
  const [hours, minutes] = time.split(":").map(Number);
  const combinedDate = new Date(date);
  combinedDate.setHours(hours, minutes, 0, 0);
  return combinedDate;
};

const isNowOn = (start: Date, end: Date) => {
  const currentDate = new Date();
  return isWithinInterval(currentDate, { start, end });
};

function DynamicSchedule({ daysList }: Props): React.ReactElement {
  const days = daysList.map((day) => ({
    ...day,
    date: new Date(day.date),
  }));

  return (
    <div>
      {/*<h1 className={"text-xl font-extrabold mb-6"}>Schedule</h1>*/}
      {days.map((day) => (
        <div key={day.id} className="mt-[100px]">
          <HomepageHeader>
            {format(day.date, "d MMMM (EEEE)", { locale: pl })}
          </HomepageHeader>
          {/*<table>*/}
          {/*  <tbody>*/}
          {day.events.map((event) => {
            const eventStart = combineDateAndTime(day.date, event.start_time);
            const eventEnd = combineDateAndTime(day.date, event.end_time);
            const isOn = isNowOn(eventStart, eventEnd);
            return (
              <div key={event.id}>
                <HorizontalRule />
                {isOn ? (
                  <p className="text-white-600 bg-gradient-secondary">Is on</p>
                ) : null}
                <div className="flex flex-col justify-between px-4 sm:flex-row sm:items-center sm:py-[15px] md:px-10 md:py-[35px]">
                  <div className="flex flex-col">
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
          })}
          <HorizontalRule />
        </div>
      ))}
    </div>
  );
}

export { DynamicSchedule };
