
"use client";

import { DayProps } from "@/lib/types";
import { format, isWithinInterval } from "date-fns";
import { pl } from "date-fns/locale";

interface Props {
  daysList: DayProps[];
}

const DynamicSchedule: React.FunctionComponent<Props> = ({ daysList }) => {

  const days = daysList.map((day) => ({
    ...day,
    date: new Date(day.date)
  }));

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

  const weekDays = [
    "Niedziela",
    "Poniedzialek",
    "Wtorek",
    "Środa",
    "Czwartek",
    "Piątek",
    "Sobota"
  ];
  return (
    <div>
      {/*<h1 className={"text-xl font-extrabold mb-6"}>Schedule</h1>*/}
      {days.map((day) => (
        <div key={day.id}>
          <div
            className="pl-[10px] pr-[30px] py-3 md:pl-[65.10px] md:pr-[75px] md:py-[40px] bg-gradient-main rounded-tr-[100px] rounded-br-[100px] justify-end items-center inline-flex">
            <div
              className="text-white text-xl md:text-[52px] font-extrabold font-['Montserrat']">{format(day.date, "d MMMM (EEEE)", { locale: pl })}</div>
          </div>
          <table>
            <thead>

            </thead>
            <tbody>

            </tbody>
          </table>
        </div>

        // <div key={day.id} className={"border-b-2 border-gray-300 pb-4 mb-6"}>
        //   <h2 className={"font-bold text-lg"}>{weekDays[day.date.getDay()]}</h2>
        //   <h3 className={"text-gray-600"}>{format(day.date, "dd.MM.yyyy")}</h3>
        //   <h2 className={"mt-4 text-md font-semibold"}>Events:</h2>
        //   {day.events.map((event) => {
        //     const eventStart = combineDateAndTime(day.date, event.start_time);
        //     const eventEnd = combineDateAndTime(day.date, event.end_time);
        //     const isOn = isNowOn(eventStart, eventEnd);
        //     return (
        //       <div key={event.id} className={"ml-4 mt-2"}>
        //         {isOn &&
        //           <p className={"text-white-600 bg-gradient-secondary"}>Is on</p>
        //         }
        //         <h2>{`${event.start_time}-${event.end_time}`}</h2>
        //         <h3>{event.location.name}</h3>
        //         {event.artists.length !== 0 ? (
        //           <div className={"ml-4"}>
        //             {event.artists.map((artist) => (
        //               <div key={artist.id} className={"text-sm text-gray-800"}>
        //                 {artist.artists_id.name}
        //               </div>
        //             ))}
        //           </div>
        //         ):(
        //           <div className={"ml-4"}>{event.name}</div>
        //         )}
        //
        //       </div>);
        //   })}
        // </div>
      ))}
    </div>
  );
};

export { DynamicSchedule };