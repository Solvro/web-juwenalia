// uncomment when the map is ready to ship
// "use client";

// import dynamic from "next/dynamic";
// import { Suspense, useState } from "react";

// import { Button } from "@/components/button";
// import { StaticMap } from "@/components/map/static-map";

// const DynamicInteractiveMap = dynamic(
//   async () =>
//     import("@/components/map/interactive-map").then(
//       (module_) => module_.InteractiveMap,
//     ),
//   {
//     ssr: false,
//   },
// );

// export default function Page() {
//   const [activeStaticMap, setActiveStaticMap] = useState(true);
//   const [activeInteractiveMap, setActiveInteractiveMap] = useState(false);

//   function switchMap() {
//     setActiveStaticMap(!activeStaticMap);
//     setActiveInteractiveMap(!activeInteractiveMap);
//   }

//   return (
//     <div className="mt-48">
//       <div className="mx-auto mt-10 grid w-4/5 grid-cols-2 gap-10">
//         <Button
//           disabled={activeStaticMap}
//           onClick={() => {
//             switchMap();
//           }}
//           className="text-wrap p-6 text-[3vw] sm:text-base"
//         >
//           Mapa Wydarzenia
//         </Button>
//         <Button
//           disabled={activeInteractiveMap}
//           onClick={() => {
//             switchMap();
//           }}
//           className="text-wrap p-6 text-[3vw] sm:text-base"
//         >
//           Imprezy Towarzyszące
//         </Button>
//       </div>
//       <div>
//         {activeStaticMap ? (
//           <StaticMap />
//         ) : (
//           <Suspense fallback={<div>Loading...</div>}>
//             <DynamicInteractiveMap />
//           </Suspense>
//         )}
//       </div>
//     </div>
//   );
// }

// delete once the map is ready to ship
"use client";

import { NoMapInfo } from "@/components/map/no-map-info";

// uncomment when the map is ready to ship
// "use client";

// import dynamic from "next/dynamic";
// import { Suspense, useState } from "react";

// import { Button } from "@/components/button";
// import { StaticMap } from "@/components/map/static-map";

// const DynamicInteractiveMap = dynamic(
//   async () =>
//     import("@/components/map/interactive-map").then(
//       (module_) => module_.InteractiveMap,
//     ),
//   {
//     ssr: false,
//   },
// );

// export default function Page() {
//   const [activeStaticMap, setActiveStaticMap] = useState(true);
//   const [activeInteractiveMap, setActiveInteractiveMap] = useState(false);

//   function switchMap() {
//     setActiveStaticMap(!activeStaticMap);
//     setActiveInteractiveMap(!activeInteractiveMap);
//   }

//   return (
//     <div className="mt-48">
//       <div className="mx-auto mt-10 grid w-4/5 grid-cols-2 gap-10">
//         <Button
//           disabled={activeStaticMap}
//           onClick={() => {
//             switchMap();
//           }}
//           className="text-wrap p-6 text-[3vw] sm:text-base"
//         >
//           Mapa Wydarzenia
//         </Button>
//         <Button
//           disabled={activeInteractiveMap}
//           onClick={() => {
//             switchMap();
//           }}
//           className="text-wrap p-6 text-[3vw] sm:text-base"
//         >
//           Imprezy Towarzyszące
//         </Button>
//       </div>
//       <div>
//         {activeStaticMap ? (
//           <StaticMap />
//         ) : (
//           <Suspense fallback={<div>Loading...</div>}>
//             <DynamicInteractiveMap />
//           </Suspense>
//         )}
//       </div>
//     </div>
//   );
// }

// delete once the map is ready to ship

export default function Page() {
  return (
    <div className="mt-48">
      <NoMapInfo />
    </div>
  );
}
