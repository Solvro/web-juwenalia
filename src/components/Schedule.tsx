import {DayProps} from "@/lib/types";
import {fetchData} from "@/lib/api";

const Schedule = async () => {
    const days = await fetchDays()
    const weekDays = ['Niedziela', 'Poniedzialek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota']
    console.log(days)
    return (
        <div className="p-4">
            <h1 className={'text-xl font-extrabold mb-6'}>Schedule</h1>
            {days.map(day => (
                <div
                    key={day.id}
                    className={'border-b-2 border-gray-300 pb-4 mb-6'}
                >
                    <h2 className={'font-bold text-lg'}>{weekDays[day.date.getDay()]}</h2>
                    <h3 className={'text-gray-600'}>{day.date.toLocaleDateString()}</h3>
                    <h2 className={'mt-4 text-md font-semibold'}>Events:</h2>
                    {day.events.map(event => (
                        <div key={event.id} className={'ml-4 mt-2'}>
                            <h2>{`${event.start_time}-${event.end_time}`}</h2>
                            <h3>{event.location}</h3>
                            <div className={'ml-4'}>
                                {event.artists.map(artist => (
                                    <div key={artist.id} className={'text-sm text-gray-800'}>
                                        {artist.artists_id.name}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ))}

        </div>
    )
}

async function fetchDays (): Promise<DayProps[]> {
    const response = await fetchData<{ data: DayProps[] }>("items/days?fields=*,events.*,events.artists.*,events.artists.artists_id.*")
    console.log(response)
     return response.data.map(day => ({
         ...day,
         date: new Date(day.date),
     }))

}

export { Schedule };