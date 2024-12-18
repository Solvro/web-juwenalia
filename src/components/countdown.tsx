"use client";

import {
  compareAsc,
  endOfMinute,
  format,
  formatDuration,
  intervalToDuration,
} from "date-fns";
import { pl } from "date-fns/locale";
import React, { useEffect, useState } from "react";

const eventDate: Date = new Date(2025, 4, 15, 16); //It's the date from pwr calendar, but i have no idea what the actuall hour will be

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

  function formatTime(): string {
    const forDuration = intervalToDuration({
      start: currentDate,
      end: eventDate,
    });

    const duration: string = formatDuration(forDuration, { locale: pl });
    const isOver: number = compareAsc(eventDate, currentDate);
    const formattedEventDate: string = format(
      eventDate,
      " do MMMM y 'o godzinie' p",
      {
        locale: pl,
      },
    );
    return isOver === 1
      ? `Wydarzenie rozpocznie się ${formattedEventDate}, zostało już tylko: ${duration}!!!`
      : "Wydarzenie juz sie rozpoczelo";
  }

  return (
    <div className="countdown-box">
      <span>{formatTime()}</span>
    </div>
  );
}

export { Countdown };
