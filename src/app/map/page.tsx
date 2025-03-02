import { fetchWrMapContent } from "@/lib/wr-map-content";

import { Map } from "./map";

import { Button } from "@/components/button";
import { NoMapInfo } from "@/components/map/no-map-info";
import { StaticMap } from "@/components/map/static-map";

const DynamicInteractiveMap = dynamic(
  async () =>
    import("@/components/map/interactive-map").then(
      (module_) => module_.InteractiveMap,
    ),
  {
    ssr: false,
  },
);

export default function Page() {
  const [activeStaticMap, setActiveStaticMap] = useState(true);
  const [activeInteractiveMap, setActiveInteractiveMap] = useState(false);

  function switchMap() {
    setActiveStaticMap(!activeStaticMap);
    setActiveInteractiveMap(!activeInteractiveMap);
  }

  return (
    <div className="mt-48">
      <div className="mx-auto mt-10 grid w-4/5 grid-cols-2 gap-10">
        <Button
          disabled={activeStaticMap}
          onClick={() => {
            switchMap();
          }}
          className="text-wrap p-6 text-[3vw] sm:text-base"
        >
          Mapa Wydarzenia
        </Button>
        <Button
          disabled={activeInteractiveMap}
          onClick={() => {
            switchMap();
          }}
          className="text-wrap p-6 text-[3vw] sm:text-base"
        >
          Imprezy Towarzyszące
        </Button>
      </div>
      <div>
        <NoMapInfo />
        {/* {activeStaticMap ? (
          <StaticMap />
        ) : (
          <Suspense fallback={<div>Loading...</div>}>
            <DynamicInteractiveMap />
          </Suspense>
        )} */}
      </div>
    </div>
  );
}
