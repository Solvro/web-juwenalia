export interface ArtistProps {
  id: number;
  name: string;
  description: string;
  image: string;
  instagramUrl: string;
  spotifyUrl: string;
  isPopular: boolean;
  events: ArtistEvents[];
}

interface ArtistEvents {
  id: number;
  artists_id: number;
  events_id: EventProps;
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
  location: { id: number; name: string };
  day: number;
  artists: EventArtists[];
}

export interface DayProps {
  id: number;
  day: number;
  events: EventProps[];
  date: Date | string;
}

export interface NoDataInfoProps {
  errorTitle: string;
  errorMessage: string;
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

/** A Facebook user as returned by the Facebook API. */
export interface FacebookUser {
  id: string;
  name: string;
  link: string;
  picture: {
    data: {
      height: number;
      width: number;
      url: string;
      is_silhouette: boolean;
    };
  };
}

/** A generated long-lived access token as returned by the Facebook API. */
export interface FacebookAccessToken {
  access_token: string;
  token_type: string;
}

// #endregion
