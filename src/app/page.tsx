import { AboutUs } from "@/components/about-us/about-us-section";
import { ArtistsCarousel } from "@/components/artists-carousel";
import { Countdown } from "@/components/countdown";
import { LatestNews } from "@/components/latest-news/latest-news-section";
import { Schedule } from "@/components/schedule";

export default function Home() {
  return (
    <>
      <div>This is the main page</div>
      <Countdown />
      <Schedule />
      <ArtistsCarousel />
      <LatestNews />
      <AboutUs />
    </>
  );
}
