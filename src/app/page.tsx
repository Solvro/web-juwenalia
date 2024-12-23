import { AboutUs } from "@/components/about-us/about-us-section";
import { ArtistsCarousel } from "@/components/artists-carousel";
import { BuyTicketCta } from "@/components/buy-ticket-cta";
import { Countdown } from "@/components/countdown";
import { Carousel } from "@/components/generic-carousel-component";
import { LatestNews } from "@/components/latest-news/latest-news-section";
import { Schedule } from "@/components/schedule/schedule";

export default function Home() {
  return (
    <>
      <Countdown />
      <Schedule />
      <ArtistsCarousel />
      <BuyTicketCta />
      <LatestNews />
      <AboutUs />
    </>
  );
}
