"use client";
import {
  intervalToDuration,
  formatDuration,
  compareAsc,
  format,
} from "date-fns";
import React, { useState, useEffect } from "react";
import { pl } from "date-fns/locale";

const eventDate = new Date(2025, 4, 22, 16);

function Countdown() {
  const [currentDate, setCurrentDate] = useState(new Date());
  useEffect(() => {
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
      }
    );
    return isOver === 1
      ? `Wydarzenie rozpocznie się ${formattedEventDate}, zostało już tylko: ${duration}!!!`
      : "Wydarzenie juz sie rozpoczelo";
  }

  return (
    <div className="countdownBox">
      <div className="clock">
        <span>{formatTime()}</span>
      </div>
    </div>
  );
}

export default Countdown;
