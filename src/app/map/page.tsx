import { fetchWrMapContent } from "@/lib/wr-map-content";

import { Map } from "./map";

export default async function Page() {
  const mapLocations = await fetchWrMapContent();
  return <Map dynamicMapLocations={mapLocations} />;
}
