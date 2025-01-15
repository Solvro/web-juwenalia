"use client";

import { format, isWithinInterval } from "date-fns";
import { pl } from "date-fns/locale";

import { HomepageHeader } from "@/components/homepage-header";
import { HorizontalRule } from "@/components/horizontal-rule";
import { NoDataInfo } from "@/components/no-data-info";
import { Day } from "@/components/schedule/day";
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
      {days.map((day) => (
        <div key={day.id} className="mt-24">
          <HomepageHeader>
            {format(day.date, "d MMMM (EEEE)", { locale: pl })}
          </HomepageHeader>
          {day.events.length > 0 ? (
            day.events.map((event) => {
              const eventStart = combineDateAndTime(day.date, event.start_time);
              const eventEnd = combineDateAndTime(day.date, event.end_time);
              const isOn = isNowOn(eventStart, eventEnd);
              return <Day isOn={isOn} event={event} key={event.id} />;
            })
          ) : (
            <div className="flex w-full items-center justify-center">
              <NoDataInfo
                errorTitle={"Brak wydarzeń"}
                errorMessage={
                  "Nie udało nam się znaleźć żadnych wydarzeń w tym dniu. Wróć tutaj później!"
                }
              />
            </div>
          )}
          <HorizontalRule />
        </div>
      ))}
    </div>
  );
}

export { DynamicSchedule };
