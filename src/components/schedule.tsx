import { fetchData } from "@/lib/api";
import type { DayProps } from "@/lib/types";

export async function Schedule() {
  const response = await fetchData<{ data: DayProps[] }>(
    "items/days?fields=*,events.*,events.location.*,events.artists.*,events.artists.artists_id.*",
  );
  const days = response.data.map((day) => ({
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
    <div className="p-4">
      <h1 className={"mb-6 text-xl font-extrabold"}>Schedule</h1>
      {days.map((day) => (
        <div key={day.id} className={"mb-6 border-b-2 border-gray-300 pb-4"}>
          <h2 className={"text-lg font-bold"}>{weekDays[day.date.getDay()]}</h2>
          <h3 className={"text-gray-600"}>{day.date.toLocaleDateString()}</h3>
          <h2 className={"text-md mt-4 font-semibold"}>Events:</h2>
          {day.events.map((event) => (
            <div key={event.id} className={"ml-4 mt-2"}>
              <h2>{`${event.start_time}-${event.end_time}`}</h2>
              <h3>{event.location.name}</h3>
              <div className={"ml-4"}>
                {event.artists.map((artist) => (
                  <div key={artist.id} className={"text-sm text-gray-800"}>
                    {artist.artists_id.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
