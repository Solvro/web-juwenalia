import { AboutUs } from "@/components/about-us/about-us-section";
import { ArtistsCarousel } from "@/components/artists/artists-carousel";
import { Countdown } from "@/components/countdown";
import { LatestNews } from "@/components/latest-news/latest-news-section";
import { Schedule } from "@/components/schedule/schedule";
import { TicketsComingSoon } from "@/components/tickets-coming-soon";

export default function Home() {
  return (
    <>
      <Countdown />
      <Schedule />
      <ArtistsCarousel />
      <TicketsComingSoon />
      <LatestNews />
      <AboutUs />
    </>
  );
}
