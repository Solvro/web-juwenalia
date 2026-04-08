"use client";

import Image from "next/image";

import { LeafComponent } from "@/components/leaf-component";
import { DynamicSchedule } from "@/components/schedule/dynamic-schedule";
import type { DayProps } from "@/lib/types";

interface Props {
  daysList: DayProps[];
}

function ScheduleClient({ daysList }: Props) {
  return (
    <div className="relative z-[-1] mb-4 mt-[-60px] flex justify-start overflow-hidden bg-primary pb-24 pt-24 md:justify-evenly">
      <LeafComponent className="absolute left-0 top-5 z-0 lg:top-0">
        <Image
          className="w-[150px] md:w-[200px] lg:w-[300px] xl:w-[350px]"
          src="/schedule-waves/wave-2.svg"
          alt=""
          width={300}
          height={30}
        />
      </LeafComponent>

      <LeafComponent className="top-100 absolute right-0 z-0 block">
        <Image
          src="/schedule-waves/wave-1.svg"
          className="w-[100px] sm:w-[120px] md:w-[140px] lg:w-[160px] xl:w-[200px]"
          alt=""
          width={230}
          height={30}
        />
      </LeafComponent>

      <LeafComponent className="absolute bottom-0 left-0 z-0">
        <Image
          src="/schedule-waves/wave-3.svg"
          className="w-[100px] md:w-[180px] lg:w-[200px] xl:w-[240px]"
          alt=""
          width={400}
          height={30}
        />
      </LeafComponent>

      <LeafComponent className="absolute bottom-0 right-0 z-0">
        <Image
          src="/schedule-waves/wave-4.svg"
          className="w-[180px] md:w-[180px] lg:w-[200px] xl:w-[240px]"
          alt=""
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
