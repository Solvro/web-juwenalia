import React from "react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { fetchData } from "@/lib/api";
import { CURRENT_EDITION } from "@/lib/edition";
import type { DayProps } from "@/lib/types";

import { ScheduleClient } from "./schedule-client";

const getDateTimestamp = (date: DayProps["date"]): number => {
  const timestamp = new Date(date).getTime();
  return Number.isNaN(timestamp) ? Number.POSITIVE_INFINITY : timestamp;
};

const getTimeInMinutes = (time: string): number => {
  const [hours, minutes] = time.split(":").map(Number);

  if (Number.isNaN(hours) || Number.isNaN(minutes)) {
    return Number.POSITIVE_INFINITY;
  }

  return hours * 60 + minutes;
};

const sortDaysAndEvents = (days: DayProps[]): DayProps[] =>
  days
    .map((day) => ({
      ...day,
      events: day.events.toSorted(
        (a, b) =>
          getTimeInMinutes(a.start_time) - getTimeInMinutes(b.start_time),
      ),
    }))
    .toSorted((a, b) => getDateTimestamp(a.date) - getDateTimestamp(b.date));

export async function Schedule() {
  let days = null;
  try {
    const response = await fetchData<{ data: DayProps[] }>(
      `items/days?fields=*,events.*,events.location.*,events.artists.*,events.artists.artists_id.*&filter[edition][_contains]=${CURRENT_EDITION}`,
    );
    days = sortDaysAndEvents(response.data);
  } catch (error) {
    console.error(error);
    return (
      <div className="flex w-full justify-center p-4">
        <Alert className="w-1/2" variant="destructive">
          <AlertTitle>Błąd Sieciowy</AlertTitle>
          <AlertDescription>
            Nie udało się pobrać harmonogramu. Proszę spróbować ponownie
            później.
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  if (days.length === 0) {
    return null;
  }

  return <ScheduleClient daysList={days} />;
}
