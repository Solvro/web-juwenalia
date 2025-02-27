import { fetchData } from "./api";
import type {
  GeoJSONPoint,
  GeoJSONPolyline,
  WrItemPoint,
  WrItemPolyline,
} from "./types";

interface ResponseType {
  data: {
    id: number;
    name: string;
    description: string;
    color: string;
    point?: GeoJSONPoint;
    polyline?: GeoJSONPolyline;
    isPolyline: boolean;
  }[];
}

export async function fetchWrMapContent() {
  const response: ResponseType =
    await fetchData<ResponseType>("items/locations");

  const normalizedPoints: WrItemPoint[] = response.data
    .map((point) => {
      return (
        point.point !== undefined &&
        !point.isPolyline && {
          name: point.name,
          description: point.description,
          color: point.color,
          coordinates: point.point.coordinates.reverse(),
        }
      );
    })
    .filter((item): item is WrItemPoint => item !== false);

  const normalizedPolylines: WrItemPolyline[] = response.data
    .map((polyline) => {
      return (
        polyline.polyline !== undefined &&
        polyline.isPolyline && {
          name: polyline.name,
          description: polyline.description,
          color: polyline.color,
          coordinates: polyline.polyline.coordinates.map((point) =>
            point.reverse(),
          ),
        }
      );
    })
    .filter((item): item is WrItemPolyline => item !== false);

  return { mapPoints: normalizedPoints, mapPolylines: normalizedPolylines };
}
