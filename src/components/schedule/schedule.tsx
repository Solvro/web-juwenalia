import { DynamicSchedule } from "@/components/schedule/dynamic-schedule";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { fetchData } from "@/lib/api";
import type { DayProps } from "@/lib/types";

async function Schedule() {
  let days = null;
  try {
    const response = await fetchData<{ data: DayProps[] }>(
      "items/days?fields=*,events.*,events.location.*,events.artists.*,events.artists.artists_id.*",
    );
    days = response.data;
  } catch (error) {
    console.error(error);
    return (
      <Alert className="w-1/2" variant="destructive">
        <AlertTitle>Błąd Sieciowy</AlertTitle>
        <AlertDescription>
          Nie udało się pobrać harmonogramu. Spróbuj ponownie później.
        </AlertDescription>
      </Alert>
    );
  }

  // const days = response.data.map((day) => ({
  //   ...day,
  //   date: new Date(day.date),
  // }));
  //
  // const weekDays = [
  //   'Niedziela',
  //   'Poniedzialek',
  //   'Wtorek',
  //   'Środa',
  //   'Czwartek',
  //   'Piątek',
  //   'Sobota',
  // ];

  return <DynamicSchedule daysList={days} />;
  //   <div className='p-4'>
  //     <h1 className={'text-xl font-extrabold mb-6'}>Schedule</h1>
  //     {days.map((day) => (
  //       <div key={day.id} className={'border-b-2 border-gray-300 pb-4 mb-6'}>
  //         <h2 className={'font-bold text-lg'}>{weekDays[day.date.getDay()]}</h2>
  //         <h3 className={'text-gray-600'}>{day.date.toLocaleDateString()}</h3>
  //         <h2 className={'mt-4 text-md font-semibold'}>Events:</h2>
  //         {day.events.map((event) => (
  //           <div key={event.id} className={'ml-4 mt-2'}>
  //             <h2>{`${event.start_time}-${event.end_time}`}</h2>
  //             <h3>{event.location.name}</h3>
  //             <div className={'ml-4'}>
  //               {event.artists.map((artist) => (
  //                 <div key={artist.id} className={'text-sm text-gray-800'}>
  //                   {artist.artists_id.name}
  //                 </div>
  //               ))}
  //             </div>
  //           </div>
  //         ))}
  //       </div>
  //     ))}
  //   </div>
  // );
}

export { Schedule };
