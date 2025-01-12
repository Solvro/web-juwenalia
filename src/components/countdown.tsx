"use client";

import {
  compareAsc,
  differenceInDays,
  endOfMinute,
  intervalToDuration,
} from "date-fns";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const eventDate: Date = new Date(2025, 4, 21, 16); //It's the date from pwr calendar, but i have no idea what the actuall hour will be

function Countdown() {
  const [currentDate, setCurrentDate] = useState<Date>(endOfMinute(new Date()));
  useEffect(() => {
    if (compareAsc(eventDate, new Date()) !== 1) {
      return;
    }
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const forDuration = intervalToDuration({
    start: currentDate,
    end: eventDate,
  });

  const days = differenceInDays(eventDate, currentDate);
  const isOver: number = compareAsc(eventDate, currentDate);
  const duration = {
    days,
    hours: forDuration.hours ?? 0,
    minutes: forDuration.minutes ?? 0,
    seconds: forDuration.seconds ?? 0,
  };
  return isOver === 1 ? (
    <div className="text-[64px] font-extrabold leading-[60px] text-[#FFF] sm:text-[76px] sm:leading-[80px] lg:text-[112px] lg:leading-[96px] xl:text-[156px] xl:leading-[110px]">
      <div className="flex flex-col justify-start sm:flex-row sm:space-x-2 lg:space-x-3 xl:space-x-4">
        <div className="sm:mr-12 lg:mr-16 xl:mr-20">
          <div className="mb-[-20px] px-1 text-[16px] font-medium sm:text-[20px] lg:text-[24px] xl:text-[28px]">
            DNI
          </div>
          <div className="px-2 text-[90px] leading-[80px] sm:text-[76px] sm:leading-[80px] lg:text-[112px] lg:leading-[96px] xl:text-[156px] xl:leading-[110px]">
            {duration.days}
          </div>
        </div>
        <div>
          <div className="mb-[-20px] px-1 text-[14px] font-medium sm:text-[20px] lg:text-[24px] xl:text-[28px]">
            GODZIN
          </div>
          <div className="px-1">{duration.hours}</div>
        </div>
        <div className="hidden sm:mt-12 sm:block sm:px-2 lg:mt-16 xl:mt-20">
          :
        </div>
        <div>
          <div className="mb-[-20px] px-1 text-[14px] font-medium sm:text-[20px] lg:text-[24px] xl:text-[28px]">
            MINUT
          </div>
          <div className="px-1">{duration.minutes}</div>
        </div>
        <div className="hidden sm:mt-12 sm:block sm:px-2 lg:mt-16 xl:mt-20">
          :
        </div>
        <div>
          <div className="mb-[-20px] px-1 text-[14px] font-medium sm:text-[20px] lg:text-[24px] xl:text-[28px]">
            SEKUND
          </div>
          <div className="px-1">{duration.seconds}</div>
        </div>
      </div>
      <div className="flex max-w-[70%] items-start justify-center pt-28 text-left text-lg font-normal sm:max-w-full sm:items-center sm:py-8 sm:pt-12 sm:text-2xl lg:pt-16 lg:text-3xl xl:pt-20 xl:text-4xl">
        Juwenalia Wrocław 2025 już 21 i 22 maja
      </div>

      <div className="flex -translate-x-20 scale-[0.55] justify-start sm:translate-x-0 sm:scale-[0.75] sm:justify-center lg:scale-[0.85] xl:scale-100">
        <Image
          src="/wroclawrazem.svg"
          alt="Ikona logo juwenalia 2025"
          width={348}
          height={48}
        />
      </div>
    </div>
  ) : (
    <div>Wydarzenie już trwa!</div>
  );
}

export { Countdown };
