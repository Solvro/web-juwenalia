"use client";

import Image from "next/image";
import React from "react";

import { LeafComponent } from "@/components/leaf-component";
import { DynamicSchedule } from "@/components/schedule/dynamic-schedule";
import type { DayProps } from "@/lib/types";

interface Props {
  daysList: DayProps[];
}

function ScheduleClient({ daysList }: Props): React.ReactElement {
  return (
    <div className="relative z-[-1] mb-4 mt-[-60px] flex justify-start overflow-hidden bg-primary pb-24 pt-24 md:justify-evenly">
      <LeafComponent className="absolute left-0 top-0 z-0">
        <Image
          className="w-[200px] lg:w-[300px] xl:w-[400px]"
          src="/schedule-waves/wave-2.svg"
          alt="liscie"
          width={300}
          height={30}
        />
      </LeafComponent>

      <LeafComponent className="top-100 absolute right-0 z-0 block">
        <Image
          src="/schedule-waves/wave-1.svg"
          className="w-[100px] sm:w-[140px] md:w-[200px] lg:w-[300px] xl:w-[340px]"
          alt="liscie"
          width={230}
          height={30}
        />
      </LeafComponent>

      <LeafComponent className="absolute bottom-0 left-0 z-0">
        <Image
          src="/schedule-waves/wave-3.svg"
          className="w-[100px] md:w-[180px] lg:w-[200px] xl:w-[240px]"
          alt="liscie"
          width={400}
          height={30}
        />
      </LeafComponent>

      <LeafComponent className="absolute bottom-0 right-0 z-0">
        <Image
          src="/schedule-waves/wave-4.svg"
          className="w-[180px] md:w-[180px] lg:w-[200px] xl:w-[240px]"
          alt="liscie"
          width={400}
          height={30}
        />
      </LeafComponent>

      <div className="hidden max-w-80 flex-col items-start justify-start px-16 pt-24 md:flex xl:px-0">
        <Image
          src="/lineup.svg"
          alt="line-up"
          loading="eager"
          width={300}
          height={48}
        />
      </div>

      <DynamicSchedule daysList={daysList} />
    </div>
  );
}

export { ScheduleClient };
