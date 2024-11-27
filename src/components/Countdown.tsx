"use client";
import {
  intervalToDuration,
  formatDuration,
  compareAsc,
  format,
} from "date-fns";
import React, { useState, useEffect } from "react";
import { pl } from "date-fns/locale";

const eventDate: Date = new Date(2025, 4, 15, 16); //It's the date from pwr calendar, but i have no idea what the actuall hour will be

function Countdown() {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    setIsLoading(false);
    if (compareAsc(eventDate, new Date()) !== 1) return;
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  //All of that with loading is mostly for avoiding the dehydration issue
  if (isLoading) {
    return <div>Ładowanie odliczania...</div>;
  }
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
      }
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

export default Countdown;
