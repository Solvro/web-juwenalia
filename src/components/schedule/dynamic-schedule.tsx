"use client";

import { format, isWithinInterval, setDefaultOptions } from "date-fns";
import { pl } from "date-fns/locale";
import { useEffect, useState } from "react";

import { HorizontalRule } from "@/components/horizontal-rule";
import { Day } from "@/components/schedule/day";
import type { DayProps } from "@/lib/types";

setDefaultOptions({ locale: pl });

interface Props {
  daysList: DayProps[];
}

const combineDateAndTime = (date: Date, time: string): Date => {
  const [hours, minutes] = time.split(":").map(Number);
  const combinedDate = new Date(date);
  combinedDate.setHours(hours, minutes, 0, 0);
  return combinedDate;
};

function DynamicSchedule({ daysList }: Props): React.ReactElement {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const days = daysList.map((day) => ({
    ...day,
    date: new Date(day.date),
  }));

  return (
    <div className="mt-16 w-full space-y-14 text-white sm:mt-24 sm:w-auto sm:space-y-24">
      {days.map((day) => (
        <div key={day.id}>
          {day.events.length > 0 && (
            <>
              <div className="relative mx-4 h-16 sm:h-36">
                <div className="absolute text-nowrap text-4xl font-black text-white/50 sm:text-6xl md:text-7xl xl:text-8xl">
                  {format(day.date, "d MMMM")}
                </div>
                <div className="absolute top-5 text-right text-3xl font-black text-white sm:right-8 sm:top-[50px] sm:text-5xl md:text-6xl xl:text-7xl">
                  {format(day.date, "EEEE")}
                </div>
              </div>

              {day.events.map((event) => {
                const eventStart = combineDateAndTime(
                  day.date,
                  event.start_time,
                );
                const eventEnd = combineDateAndTime(day.date, event.end_time);
                const isOn = isWithinInterval(currentTime, {
                  start: eventStart,
                  end: eventEnd,
                });
                return <Day isOn={isOn} event={event} key={event.id} />;
              })}
              <HorizontalRule />
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export { DynamicSchedule };
