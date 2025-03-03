"use client";

import { format, isWithinInterval, setDefaultOptions } from "date-fns";
import { pl } from "date-fns/locale";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

import { HorizontalRule } from "@/components/horizontal-rule";
import { LeafComponent } from "@/components/leaf-component";
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
  const [scheduleHeight, setScheduleHeight] = useState<number>(0);
  const scheduleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (scheduleRef.current != null) {
      setScheduleHeight(scheduleRef.current.clientHeight);
    }
  }, [daysList]);

  const days = daysList.map((day) => ({
    ...day,
    date: new Date(day.date),
  }));

  const HEIGHT_SECOND_LEAF = 1000;
  const HEIGHT_THIRD_LEAF = 2100;

  return (
    <div
      ref={scheduleRef}
      className="mt-16 w-full space-y-14 text-white sm:mt-24 sm:w-auto sm:space-y-24"
    >
      <LeafComponent className="z-0 mt-[-150px] md:ml-40">
        <Image
          className="lg:w-[400px]"
          src="/schedule-leaves/leaves-with-vines.svg"
          alt="liscie"
          width={300}
          height={30}
        />
      </LeafComponent>
      {scheduleHeight > HEIGHT_SECOND_LEAF && (
        <LeafComponent className="top-100 absolute right-0 z-[1] hidden lg:block">
          <Image
            src="/schedule-leaves/leaves-1.svg"
            alt="liscie"
            width={230}
            height={30}
          />
        </LeafComponent>
      )}
      {scheduleHeight > HEIGHT_THIRD_LEAF && (
        <LeafComponent className="mt-1000 absolute left-0 hidden md:top-[2100px] md:block xl:top-[2500px]">
          <Image
            src="/schedule-leaves/leaves-3.svg"
            className="xl:w-[240px]"
            alt="liscie"
            width={400}
            height={30}
          />
        </LeafComponent>
      )}
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
