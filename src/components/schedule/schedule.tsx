import Image from "next/image";
import React from "react";

import { DynamicSchedule } from "@/components/schedule/dynamic-schedule";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { fetchData } from "@/lib/api";
import type { DayProps } from "@/lib/types";

export async function Schedule() {
  let days = null;
  try {
    const response = await fetchData<{ data: DayProps[] }>(
      "items/days?fields=*,events.*,events.location.*,events.artists.*,events.artists.artists_id.*",
    );
    days = response.data;
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

  return (
    <div className="z-[-1] mb-4 mt-[-60px] flex justify-start bg-primary pb-24 pt-24 md:justify-evenly">
      <div className="hidden max-w-80 flex-col items-start justify-start px-16 pt-24 md:flex xl:px-0">
        <Image
          src="/lineup.svg"
          alt="line-up"
          loading="eager"
          width={300}
          height={48}
        />
      </div>
      <DynamicSchedule daysList={days} />
    </div>
  );
}
