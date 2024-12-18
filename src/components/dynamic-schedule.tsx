"use client";

import { format, isWithinInterval } from "date-fns";
import { pl } from "date-fns/locale";

import type { DayProps } from "@/lib/types";

interface Props {
  daysList: DayProps[];
}

const combineDateAndTime = (date: Date, time: string): Date => {
  const [hours, minutes] = time.split(":").map(Number);
  const combinedDate = new Date(date);
  combinedDate.setHours(hours, minutes, 0, 0);
  return combinedDate;
};

const isNowOn = (start: Date, end: Date) => {
  const currentDate = new Date();
  return isWithinInterval(currentDate, { start, end });
};

function DynamicSchedule({ daysList }: Props): React.ReactElement {
  const days = daysList.map((day) => ({
    ...day,
    date: new Date(day.date),
  }));

  const weekDays = [
    "Niedziela",
    "Poniedzialek",
    "Wtorek",
    "Środa",
    "Czwartek",
    "Piątek",
    "Sobota",
  ];

  return (
    <div>
      {/*<h1 className={"text-xl font-extrabold mb-6"}>Schedule</h1>*/}
      {days.map((day) => (
        <div key={day.id}>
          <div className="inline-flex items-center justify-end rounded-br-[100px] rounded-tr-[100px] bg-gradient-main py-3 pl-[10px] pr-[30px] md:py-[40px] md:pl-[65.10px] md:pr-[75px]">
            <div className="font-['Montserrat'] text-xl font-extrabold text-white md:text-[52px]">
              {format(day.date, "d MMMM (EEEE)", { locale: pl })}
            </div>
          </div>
          {/*<table>*/}
          {/*  <tbody>*/}
          {day.events.map((event) => {
            const eventStart = combineDateAndTime(day.date, event.start_time);
            const eventEnd = combineDateAndTime(day.date, event.end_time);
            const isOn = isNowOn(eventStart, eventEnd);
            return (
              <div key={event.id} className={"ml-4 mt-2"}>
                {isOn && (
                  <p className={"text-white-600 bg-gradient-secondary"}>
                    Is on
                  </p>
                )}
                <h2>{`${event.start_time}-${event.end_time}`}</h2>
                <h3>{event.location.name}</h3>
                {event.artists.length > 0 ? (
                  <div className={"ml-4"}>
                    {event.artists.map((artist) => (
                      <div key={artist.id} className={"text-sm text-gray-800"}>
                        {artist.artists_id.name}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className={"ml-4"}>{event.name}</div>
                )}
              </div>
            );
          })}
        </div>
      ))}
    </div>

    //         </tbody>
    //       </table>
    //     </div>
    //
    //     // <div key={day.id} className={"border-b-2 border-gray-300 pb-4 mb-6"}>
    //     //   <h2 className={"font-bold text-lg"}>{weekDays[day.date.getDay()]}</h2>
    //     //   <h3 className={"text-gray-600"}>{format(day.date, "dd.MM.yyyy")}</h3>
    //     //   <h2 className={"mt-4 text-md font-semibold"}>Events:</h2>
    //       {day.events.map((event) => {
    //         const eventStart = combineDateAndTime(day.date, event.start_time);
    //         const eventEnd = combineDateAndTime(day.date, event.end_time);
    //         const isOn = isNowOn(eventStart, eventEnd);
    //         return (
    //           <div key={event.id} className={"ml-4 mt-2"}>
    //             {isOn &&
    //               <p className={"text-white-600 bg-gradient-secondary"}>Is on</p>
    //             }
    //             <h2>{`${event.start_time}-${event.end_time}`}</h2>
    //             <h3>{event.location.name}</h3>
    //             {event.artists.length !== 0 ? (
    //               <div className={"ml-4"}>
    //                 {event.artists.map((artist) => (
    //                   <div key={artist.id} className={"text-sm text-gray-800"}>
    //                     {artist.artists_id.name}
    //                   </div>
    //                 ))}
    //               </div>
    //             ):(
    //               <div className={"ml-4"}>{event.name}</div>
    //             )}
    //
    //           </div>);
    //       })}
    //     </div>
    //   ))}
    // </div>
  );
}

export { DynamicSchedule };
