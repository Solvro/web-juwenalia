"use client";

import {
  compareAsc,
  differenceInDays,
  endOfMinute,
  intervalToDuration,
} from "date-fns";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import type { ReactNode } from "react";

import { PaddingWrapper } from "./padding-wrapper";

const eventStartDate: Date = new Date(2025, 4, 21, 16); //It's the date from pwr calendar, but i have no idea what the actuall hour will be
const eventEndDate: Date = new Date(2025, 4, 23, 2);
function TextsForTimer({ children }: { children: ReactNode }) {
  return (
    <div className="mt-2.5 text-base font-medium sm:mt-0 sm:text-[20px] lg:text-[24px] xl:text-[28px]">
      {children}
    </div>
  );
}
function CountdownOverText({
  children,
  smTextClass = "sm:text-[7vw]",
}: {
  children: ReactNode;
  smTextClass?: string;
}) {
  return (
    <p
      className={`mt-[55vh] flex justify-start text-[4vh] leading-[4vh] sm:my-[5vh] sm:w-[80vw] sm:items-center sm:justify-center ${smTextClass}`}
    >
      {children}
    </p>
  );
}
function Colon() {
  return <p className="hidden sm:mt-14 sm:block lg:mt-16 xl:mt-20">:</p>;
}
function Countdown() {
  const [currentDate, setCurrentDate] = useState<Date>(endOfMinute(new Date()));
  useEffect(() => {
    if (compareAsc(eventStartDate, new Date()) !== 1) {
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
    end: eventStartDate,
  });

  const days = differenceInDays(eventStartDate, currentDate);
  const isToday: number = compareAsc(eventStartDate, currentDate);
  const isOver: number = compareAsc(eventEndDate, currentDate);

  const duration = {
    days,
    hours: forDuration.hours ?? 0,
    minutes: forDuration.minutes ?? 0,
    seconds: forDuration.seconds ?? 0,
  };
  return (
    <div className="relative top-[-80px] z-[-10] h-[77vh] w-full flex-shrink-0 rounded-b-[40px] bg-[url('/images/background_homepage.png')] bg-cover bg-center bg-no-repeat before:absolute before:inset-0 before:rounded-b-[40px] before:bg-black before:opacity-30 sm:top-[-50px] sm:h-[90vh] sm:w-full sm:rounded-b-[60px] sm:before:sm:rounded-b-[60px] lg:h-[90vh] xl:h-[95vh]">
      <div className="absolute left-5 top-10 mt-20 text-[8vh] font-extrabold leading-[7vh] text-[#FFF] sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-[50%] sm:transform sm:text-[76px] sm:leading-[80px] lg:text-[112px] lg:leading-[96px] xl:text-[156px] xl:leading-[110px]">
        <PaddingWrapper className="">
          {isToday === 1 ? (
            <div className="flex flex-col justify-start sm:flex-row sm:space-x-2 lg:space-x-3 xl:space-x-4">
              <div className="sm:mr-12 lg:mr-16 xl:mr-20">
                <TextsForTimer>DNI</TextsForTimer>
                <p className="">{duration.days}</p>
              </div>
              <div>
                <TextsForTimer>GODZIN</TextsForTimer>
                <p className="">{duration.hours}</p>
              </div>
              <Colon />{" "}
              <div>
                <TextsForTimer>MINUT</TextsForTimer>
                <p className="">{duration.minutes}</p>
              </div>
              <Colon />{" "}
              <div>
                <TextsForTimer>SEKUND</TextsForTimer>
                <p className="flex w-5">{duration.seconds}</p>
              </div>
            </div>
          ) : isOver === 1 ? (
            <CountdownOverText>Wydarzenie trwa!</CountdownOverText>
          ) : (
            <CountdownOverText smTextClass="sm:text-[5.5vw]">
              Do zobaczenia za rok!
            </CountdownOverText>
          )}

          <div className="pt-8 sm:pt-0">
            <p className="flex max-w-[70%] justify-start py-[1vh] text-left text-lg font-normal leading-[2.5vh] sm:max-w-full sm:items-center sm:justify-center sm:py-[3vh] sm:text-2xl lg:text-3xl xl:text-4xl">
              Juwenalia Wrocław 2025 już 21 i 22 maja
            </p>

            <div className="flex origin-left scale-[0.75] transform justify-start text-left sm:origin-center sm:translate-x-0 sm:scale-[0.75] sm:justify-center lg:scale-[0.85] xl:scale-100">
              <Image
                src="/wroclawrazem.svg"
                alt="Ikona logo juwenalia 2025"
                width={348}
                height={48}
              />
            </div>
          </div>
        </PaddingWrapper>
      </div>
    </div>
  );
}

export { Countdown };
