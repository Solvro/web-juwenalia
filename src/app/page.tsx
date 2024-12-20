import { AboutUs } from "@/components/about-us/about-us-section";
import { ArtistsCarousel } from "@/components/artists-carousel";
import { Countdown } from "@/components/countdown";
import { LatestNews } from "@/components/latest-news/latest-news-section";
import { Schedule } from "@/components/schedule/schedule";

export default function Home() {
  return (
    <>
      <div>This is the main page</div>

      <div className="relative top-[-50px] z-[-10] h-[744px] w-full flex-shrink-0 rounded-b-[40px] bg-[url('/images/background_homepage.png')] from-[rgba(0,0,0,0.20)] via-[rgba(0,0,0,0.40)] to-transparent bg-cover bg-center bg-no-repeat sm:h-[852px] sm:w-full sm:rounded-b-[60px] sm:bg-[url('/images/background_homepage_sm.png')] sm:from-[rgba(0,0,0,0.40)] sm:via-[rgba(0,0,0,0.20)] sm:to-transparent">
        <div className="absolute left-5 top-10 px-4 sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-[39%] sm:transform">
          <Countdown />
        </div>
      </div>
      <Schedule />
      <ArtistsCarousel />
      <LatestNews />
      <AboutUs />
    </>
  );
}
