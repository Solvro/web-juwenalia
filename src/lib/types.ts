export interface ArtistProps {
    id: number,
    name: string,
    description: string,
    url: string,
    image: string,
}

interface EventArtists {
    id: number,
    events_id: number,
    artists_id: ArtistProps,
}

interface EventProps {
    id: number,
    start_time: string,
    end_time: string,
    location: string,
    day: number,
    artists: EventArtists[]
}

export interface DayProps {
    id: number,
    day: number,
    events: EventProps[],
    date: Date | string,
}
