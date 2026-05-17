"use client";

import { format, isWithinInterval, setDefaultOptions } from "date-fns";
import { pl } from "date-fns/locale";
import { SmartphoneIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

import { Day } from "@/components/schedule/day";
import type { DayProps } from "@/lib/types";

import { HorizontalRule } from "../horizontal-rule";
import { PaddingWrapper } from "../padding-wrapper";

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

  const scheduleRef = useRef<HTMLDivElement>(null);

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
    <div
      ref={scheduleRef}
      className="mt-8 w-full space-y-14 text-white sm:mt-24 sm:space-y-24 md:w-auto"
    >
      <PaddingWrapper className="relative -mt-4 mb-6 md:hidden">
        <Link
          href="/app"
          className="flex items-center justify-between gap-4 rounded-2xl bg-gradient-alt-5 p-4 text-white shadow-md transition-transform active:scale-[0.98]"
        >
          <div className="flex items-center gap-3">
            <SmartphoneIcon className="h-6 w-6 shrink-0" />
            <div className="flex flex-col">
              <span className="text-sm font-bold uppercase tracking-wider">
                Pobierz aplikację
              </span>
              <span className="text-xs text-white/90">
                Program, mapa i gra terenowa w&nbsp;Twojej kieszeni
              </span>
            </div>
          </div>
          <span aria-hidden="true" className="text-xl font-bold">
            →
          </span>
        </Link>
      </PaddingWrapper>

      {days.map((day, index) => (
        <div key={day.id}>
          {day.events.length > 0 && (
            <>
              <div className="relative mx-4 h-16 sm:h-36">
                {index === 1 && (
                  <div className="absolute -top-10 right-[-228px] z-0 sm:right-6">
                    <Image
                      src="/schedule-waves/wave-5.svg"
                      className="w-[56px] sm:w-[100px] lg:w-[146px] xl:w-[176px]"
                      alt="fala"
                      width={72}
                      height={24}
                    />
                  </div>
                )}
                <div className="absolute text-nowrap text-4xl font-black text-white/50 sm:text-6xl md:text-7xl xl:text-8xl">
                  {format(day.date, "d MMMM")}
                </div>
                <div className="absolute top-5 text-right text-3xl font-black text-white sm:top-[50px] sm:text-5xl md:right-8 md:text-6xl xl:text-7xl">
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
              <HorizontalRule className="opacity-40" />
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export { DynamicSchedule };
