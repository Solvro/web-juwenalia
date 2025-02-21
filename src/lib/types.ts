import type { ReactNode } from "react";

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

export interface EventProps {
  id: number;
  start_time: string;
  end_time: string;
  location: { id: number; name: string };
  day: DayProps;
  artists: EventArtists[];
  name: string | null;
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

export interface SearchPhrase {
  uuid: string;
  word: string;
  startDate: string;
  intervalHours: number;
}

// #region --- Facebook API-related definitions ---

interface FacebookAttachments {
  data?: FacebookAttachment[];
}

export interface FacebookAttachment {
  /** URL to the Facebook image post, not the image itself. */
  // url: string;
  /** Known values: `"photo"` */
  // type: string;
  media: {
    image: {
      height: number;
      width: number;
      src: string;
    };
  };
  subattachments?: FacebookAttachments;
}

/** A Facebook post as returned by the Facebook API. */
export interface FacebookPost {
  id: string;
  title?: string;
  message?: string;
  permalink_url: string;
  created_time: string;
  updated_time: string;
  attachments?: FacebookAttachments;
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

// #region --- About Us Page ---
type ParseInt<T> = T extends `${infer N extends number}` ? N : never;
export type ArrayIndex<T extends readonly unknown[]> = ParseInt<
  Exclude<keyof T, keyof []>
>;

export interface Organisation {
  name: string;
  url: string;
  logo: string;
  logoScale?: number;
}

export interface Person {
  name: string;
  role: string;
  generalRole?: string;
  image?: string;
}
// #endregion

export interface Faq {
  id: number;
  question: string;
  answer: string;
}

export interface MapLevel {
  name: "Outside" | "Ground Floor" | "Floor 1" | "Floor -1";
  description: string;
  icon: ReactNode;
  image: {
    src: string;
    alt: string;
  };
  nodes: {
    name: string;
    color: string;
  }[];
}

export interface MapFloorsButtonProps {
  level: MapLevel;
  active: boolean;
  onClick: () => void;
}

export interface NavLink {
  url: string;
  name: string;
  label: string;
}
