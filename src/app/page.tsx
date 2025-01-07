import { AboutUs } from "@/components/about-us/about-us-section";
import { BuyTicketCta } from "@/components/buy-ticket-cta";
import { Countdown } from "@/components/countdown";
import { LatestNews } from "@/components/latest-news/latest-news-section";
import { Schedule } from "@/components/schedule/schedule";

export default function Home() {
  return (
    <>
      <Countdown />
      <Schedule />
      <BuyTicketCta />
      <LatestNews />
      <AboutUs />
    </>
  );
}
