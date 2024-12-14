import { Countdown } from "@/components/Countdown";
import { LatestNews } from "@/components/latest-news/latest-news-section";
import { Schedule } from "@/components/Schedule";

export default function Home() {
  return (
    <>
      <div>This is the main page</div>
      <Countdown />
      <Schedule />
      <LatestNews />
    </>
  );
}
