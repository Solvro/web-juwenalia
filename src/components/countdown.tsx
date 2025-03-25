"use client";

import {
  compareAsc,
  differenceInDays,
  endOfMinute,
  intervalToDuration,
} from "date-fns";
import { AnimatePresence, motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import type { ReactNode } from "react";

import BgImage from "@/../public/images/background_homepage.webp";
import { HERO_BG_BLUR_HASH } from "@/config/data";

import { PaddingWrapper } from "./padding-wrapper";

const eventStartDate: Date = new Date(2025, 5, 21, 16); //It's the date from pwr calendar
const eventEndDate: Date = new Date(2025, 5, 23, 2);
function TextsForTimer({ children }: { children: ReactNode }) {
  return (
    <div className="mt-2.5 text-base font-medium sm:mt-0 sm:text-[18px] lg:text-[20px] xl:pb-1.5">
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
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="hidden sm:block"
    >
      :
    </motion.span>
  );
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

  const isBeforeEvent = compareAsc(currentDate, eventStartDate) === -1;
  const isToday =
    compareAsc(currentDate, eventStartDate) >= 0 &&
    compareAsc(currentDate, eventEndDate) === -1;

  const days = isBeforeEvent
    ? differenceInDays(eventStartDate, currentDate)
    : 0;

  const forDuration = isBeforeEvent
    ? intervalToDuration({
        start: currentDate,
        end: eventStartDate,
      })
    : { days: 0, hours: 0, minutes: 0 };

  const duration = {
    days,
    hours: forDuration.hours ?? 0,
    minutes: forDuration.minutes ?? 0,
    seconds: forDuration.seconds ?? 0,
  };

  return (
    <div className="relative z-[1] h-[90vh] w-full flex-shrink-0 rounded-b-[40px] before:absolute before:inset-0 before:rounded-b-[40px] before:bg-gradient-to-b before:from-black/40 before:to-black/30 sm:h-[90vh] sm:w-full sm:rounded-b-[60px] sm:before:sm:rounded-b-[60px] lg:h-[90vh] xl:h-[95vh]">
      <div className="absolute inset-0 -z-[1]">
        <Image
          src={BgImage}
          alt="zdjęcie w tle"
          className="relative h-full w-full rounded-b-[40px] object-cover"
          fill
          loading="eager"
          placeholder="blur"
          blurDataURL={HERO_BG_BLUR_HASH}
        />
      </div>
      <div className="absolute left-5 top-20 mt-16 text-[8vh] font-extrabold leading-[7vh] text-[#FFF] sm:left-1/2 sm:top-1/2 sm:mt-10 sm:-translate-x-1/2 sm:-translate-y-[50%] sm:transform sm:text-[76px] sm:leading-[80px] lg:text-[112px] lg:leading-[96px] xl:text-[156px] xl:leading-[110px]">
        <PaddingWrapper>
          {isBeforeEvent ? (
            <div className="flex w-full flex-col justify-start sm:flex-row sm:items-center sm:gap-3 md:gap-5">
              <div className="sm:mr-12 lg:mr-16 xl:mr-20">
                <TextsForTimer>DNI</TextsForTimer>
                <AnimatedCount value={duration.days} />
              </div>
              <div>
                <TextsForTimer>GODZIN</TextsForTimer>
                <AnimatedCount value={duration.hours} />
              </div>
              <Colon />{" "}
              <div>
                <TextsForTimer>MINUT</TextsForTimer>
                <AnimatedCount value={duration.minutes} />
              </div>
              <Colon />{" "}
              <div>
                <TextsForTimer>SEKUND</TextsForTimer>
                <AnimatedCount value={duration.seconds} />
              </div>
            </div>
          ) : isToday ? (
            <CountdownOverText>Wydarzenie trwa!</CountdownOverText>
          ) : (
            <CountdownOverText smTextClass="sm:text-[5.5vw]">
              Do zobaczenia za rok!
            </CountdownOverText>
          )}

          <div className="pt-8 sm:pt-0">
            <h1 className="flex flex-col py-[1vh] text-left text-lg font-normal leading-tight sm:max-w-full sm:py-[3vh] sm:text-center sm:text-2xl lg:text-3xl xl:text-4xl">
              Juwenalia #WrocławRazem
              <span className="font-black">już 21 i 22 maja</span>
            </h1>
          </div>
        </PaddingWrapper>
      </div>

      <div className="absolute bottom-5 flex scale-[.8] justify-start text-left sm:bottom-10 sm:left-1/2 sm:-translate-x-1/2 sm:justify-center lg:scale-[0.85] xl:scale-100">
        <Image
          src="/wroclawrazem.svg"
          alt="Ikona logo juwenalia 2025"
          loading="eager"
          width={348}
          height={48}
        />
      </div>
    </div>
  );
}

function AnimatedCount({ value }: { value: number }) {
  const CountVariants: Variants = {
    initial: {
      y: "110%",
    },
    animate: {
      y: "0%",
    },
    exit: {
      y: "-110%",
    },
  };

  // eslint-disable-next-line @typescript-eslint/no-misused-spread
  const displayValues = [...String(value).padStart(2, "0")];

  return (
    <div className="relative flex overflow-hidden py-1">
      <AnimatePresence mode="popLayout">
        {displayValues.map((n, index) => (
          <motion.span
            className="relative tabular-nums"
            variants={CountVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            key={n + index.toString()}
            transition={{
              type: "spring",
              bounce: 0.1,
              duration: 0.8,
            }}
          >
            {n}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
}

export { Countdown };
