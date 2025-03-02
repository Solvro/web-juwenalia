import Image from "next/image";

import { Button } from "../button";

export function NoMapInfo() {
  return (
    <div className="relative mt-16 flex w-full flex-col items-center text-center">
      <hr className="top-0 w-full" />
      {/* vectors */}
      <div className="absolute z-0 flex h-full w-full flex-col">
        <Image
          className="absolute left-[calc(100%/3.5)] top-0 hidden w-[calc(100%/4)] md:block"
          src="no-map-info/leaf_top.svg"
          alt="leaf deco"
          width={322}
          height={160}
        ></Image>
        <Image
          className="absolute bottom-0 right-[calc(100%/3.5)] hidden w-[calc(100%/4)] md:block"
          src="no-map-info/leaf_bottom.svg"
          alt="leaf deco"
          width={322}
          height={160}
        ></Image>
        <Image
          className="absolute bottom-[calc(100%/5)] left-[calc(100%/11)] w-[calc(100%/11)]"
          src="no-map-info/pin1.svg"
          alt="floating pin deco"
          width={133}
          height={182}
        ></Image>
        <Image
          className="absolute bottom-[calc(100%/6)] left-[calc(100%/5)] w-[calc(100%/15)]"
          src="no-map-info/pin2.svg"
          alt="floating pin deco"
          width={87}
          height={115}
        ></Image>
        <Image
          className="absolute left-0 top-0 w-[calc(100%/4)]"
          src="no-map-info/branch_tl.svg"
          alt="leafy branch deco"
          width={444}
          height={292}
        ></Image>
        <Image
          className="absolute bottom-0 right-[calc(100%/20)] w-[calc(100%/4)]"
          src="no-map-info/branch_br.svg"
          alt="leafy branch deco"
          width={434}
          height={278}
        ></Image>
      </div>

      {/* text and buttons */}
      <div className="z-10">
        <div className="mb-10 mt-72 font-extrabold leading-[95.625%]">
          <span className="bg-gradient-to-r from-[#049BAD] to-[#58C473] bg-clip-text text-[96px] text-transparent">
            MAPA POJAWI SIĘ
          </span>
          <br />
          <br />
          <span className="bg-gradient-to-r from-[#049BAD] to-[#58C473] bg-clip-text text-[115px] leading-[95.625%] text-transparent">
            JUŻ WKRÓTCE!
          </span>
        </div>

        <h1 className="mb-6 text-2xl">
          Mapa nie jest jeszcze dostępna. Wróć tutaj później!
        </h1>

        <Button
          className="mb-52 mt-2"
          onClick={() => {
            window.location.reload();
          }}
        >
          Odśwież
        </Button>
      </div>
      <hr className="bottom-0 w-full" />
    </div>
  );
}
