import type { ReactNode } from "react";

import type { ORGANISATION_ROLES } from "@/config/data";

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
  errorTitle?: string;
  errorMessage: string;
}

export interface SearchPhrase {
  uuid: string;
  word: string;
  startDate: string;
  intervalHours: number;
}

export interface NewsPost {
  id: string;
  date_created: string;
  date_updated: string | null;
  title: string;
  content: string;
}

// #region --- About Us Page ---
type ParseInt<T> = T extends `${infer N extends number}` ? N : never;
export type ArrayIndex<T extends readonly unknown[]> = ParseInt<
  Exclude<keyof T, keyof []>
>;

type OrganisationRole = keyof typeof ORGANISATION_ROLES;

export interface Organisation {
  name: string;
  url: string;
  logo: string;
  logoScale?: number;
  role: (typeof ORGANISATION_ROLES)[OrganisationRole];
}

export interface Person {
  name: string;
  title?: string;
  generalRole?: string;
  image?: string;
  role: string;
}
// #endregion

export interface Faq {
  id: number;
  question: string;
  answer: string;
}

// #region --- Map types ---
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

export interface GeoJSONPoint {
  name: string;
  coordinates: [number, number];
}

export interface GeoJSONPolyline {
  name: string;
  coordinates: [number, number][];
}
export interface WrItemPoint {
  name: string;
  description: string;
  color: string;
  coordinates: [number, number];
}

export interface WrItemPolyline {
  name: string;
  description: string;
  color: string;
  coordinates: [number, number][];
}

export interface LeafletElement extends Element {
  _leaflet_id?: string | null;
}
// #endregion
