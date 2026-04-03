// import { AboutUs } from "@/components/about-us/about-us-section";
import Image from "next/image";

import { ArtistsCarousel } from "@/components/artists/artists-carousel";
import { Countdown } from "@/components/countdown";
import { FrequentlyAskedQuestions } from "@/components/faq/faq-section";
import { LatestNews } from "@/components/latest-news/latest-news-section";
import { Schedule } from "@/components/schedule/schedule";
import { TicketsComingSoon } from "@/components/tickets-coming-soon";

export default function Home() {
  return (
    <div className="relative">
      <Countdown />
      <Schedule />
      <ArtistsCarousel />
      <TicketsComingSoon />
      <FrequentlyAskedQuestions />
      <LatestNews />
      {/* <AboutUs /> */}
      <div className="relative h-0 overflow-visible">
        <Image
          src="/bushes/fire-3.svg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[-170px] left-0 w-[96px] select-none sm:w-[90px] md:w-[100px] lg:w-[110px]"
          width={196}
          height={196}
        />

        <Image
          src="/bushes/fire-4.svg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[-145px] right-0 w-[100px] select-none sm:w-[96px] md:bottom-[-149px] md:w-[122px] lg:bottom-[-153px] lg:w-[148px] xl:bottom-[-155px] xl:w-[164px]"
          width={164}
          height={164}
        />
      </div>
    </div>
  );
}
