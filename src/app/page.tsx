import { AboutUs } from "@/components/about-us/about-us-section";
import { Countdown } from "@/components/countdown";
import { LatestNews } from "@/components/latest-news/latest-news-section";
import { Schedule } from "@/components/schedule/schedule";

export default function Home() {
  return (
    <>
      <div>This is the main page</div>

      <div
        className="sm:h-[900px]sm:bg-gradient-to-b sm:bg-lightgray relative top-[-50px] z-[-10] flex h-[700px] w-[100vw] items-center justify-center rounded-bl-[40px] rounded-br-[40px] to-black/40 bg-cover bg-top bg-no-repeat sm:rounded-b-[60px] sm:from-black/20 sm:bg-[size:132.341%_151.122%] sm:bg-[position:-181.677px_-316.145px]"
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.40) 65.39%), url('images/background_homepage.png') lightgray 50% / cover no-repeat",
          borderRadius: "0px 0px 40px 40px",
        }}
      >
        <div className="absolute left-5 top-10 px-4 sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-[39%] sm:transform">
          <Countdown />
        </div>
      </div>
      <Schedule />
      <LatestNews />
      <AboutUs />
    </>
  );
}
