export interface ArtistProps {
  id: number;
  name: string;
  description: string;
  url: string;
  image: string;
}

interface EventArtists {
  id: number;
  events_id: number;
  artists_id: ArtistProps;
}

interface EventProps {
  id: number;
  start_time: string;
  end_time: string;
  location: string;
  day: number;
  artists: EventArtists[];
}

export interface DayProps {
  id: number;
  day: number;
  events: EventProps[];
  date: Date | string;
}

// #region --- Facebook API-related definitions ---

/** A Facebook post as returned by the Facebook API. */
export interface FacebookPost {
  id: string;
  title?: string;
  message?: string;
  full_picture?: string;
  permalink_url: string;
  created_time: string;
  updated_time: string;
}

/** Custom user details object which would be useful to store. */
export interface FacebookUser {
  id: string;
  accessToken: string;
  name: string;
  profilePicture: string;
}

// #endregion
