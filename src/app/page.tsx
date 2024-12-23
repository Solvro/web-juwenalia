import { AboutUs } from "@/components/about-us/about-us-section";
import { Countdown } from "@/components/countdown";
import { Carousel } from "@/components/generic-carousel-component";
import { LatestNews } from "@/components/latest-news/latest-news-section";
import { Schedule } from "@/components/schedule";

export default function Home() {
  return (
    <>
      <div>This is the main page</div>
      <Countdown />
      <Schedule />
      <Carousel />
      <LatestNews />
      <AboutUs />
    </>
  );
}
