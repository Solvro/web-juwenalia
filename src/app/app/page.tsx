import {
  BellIcon,
  CalendarDaysIcon,
  Gamepad2Icon,
  MapPinIcon,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { PaddingWrapper } from "@/components/padding-wrapper";

const APP_STORE_URL =
  "https://apps.apple.com/pl/app/juwenalia-wroc%C5%82awrazem/id6763130512";
const GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=pl.solvro.juwenalia";

export const metadata: Metadata = {
  title: "Aplikacja Juwenalia 2026 #WrocławRazem",
  description:
    "Pobierz oficjalną aplikację Juwenaliów Wrocław Razem 2026 - program, line-up, mapa wydarzenia, gra terenowa i powiadomienia w jednym miejscu.",
  openGraph: {
    title: "Aplikacja Juwenalia 2026 #WrocławRazem",
    description:
      "Pobierz oficjalną aplikację Juwenaliów Wrocław Razem 2026 z App Store lub Google Play.",
    type: "website",
    locale: "pl_PL",
  },
};

const features = [
  {
    icon: CalendarDaysIcon,
    title: "Program i line-up",
    description: "Cały rozkład koncertów i wydarzeń pod ręką.",
  },
  {
    icon: MapPinIcon,
    title: "Mapa wydarzenia",
    description:
      "Plan lub mapka - znajdź sceny, strefy i punkty informacyjne w sekundę.",
  },
  {
    icon: Gamepad2Icon,
    title: "Gra terenowa",
    description:
      "Skanuj kody QR w strefach festiwalu, zbieraj pieczątki i odbierz nagrodę.",
  },
  {
    icon: BellIcon,
    title: "Aktualności",
    description: "Najważniejsze ogłoszenia organizatorów i przypomnienia.",
  },
] as const;

export default function AppPage() {
  return (
    <div className="mt-32 md:mt-40">
      <PaddingWrapper className="relative z-[1] grid w-full place-items-center bg-gradient-alt-1 py-16 md:py-20 lg:py-24">
        <div className="relative z-[3] flex w-full flex-col items-center gap-10 text-center text-white lg:flex-row lg:items-center lg:justify-between lg:text-left">
          <div className="flex max-w-2xl flex-col gap-4">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/80 sm:text-base">
              Aplikacja
            </p>
            <h1 className="text-balance text-5xl font-black uppercase leading-[0.95] sm:text-6xl md:text-7xl lg:text-[5rem] xl:text-[6rem]">
              Juwenalia w&nbsp;Twojej kieszeni
            </h1>
            <p className="text-balance text-base text-white/90 sm:text-lg md:text-xl">
              Pobierz oficjalną aplikację Juwenaliów&nbsp;#WrocławRazem&nbsp;-
              program, mapka, gra terenowa i&nbsp;wszystko co musisz wiedzieć.
              Działa też offline.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-5 lg:flex-col lg:items-stretch">
            <Link
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pobierz w App Store"
              className="block transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              <Image
                src="/store-badges/app-store-pl.svg"
                alt="Pobierz w App Store"
                width={196}
                height={60}
                unoptimized
                priority
              />
            </Link>
            <Link
              href={GOOGLE_PLAY_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pobierz z Google Play"
              className="block transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              <Image
                src="/store-badges/google-play-pl.svg"
                alt="Pobierz z Google Play"
                width={210}
                height={60}
                unoptimized
                priority
              />
            </Link>
          </div>
        </div>
      </PaddingWrapper>

      <PaddingWrapper className="my-16 md:my-24 lg:my-32">
        <div className="mx-auto max-w-6xl">
          <h3 className="mb-8 text-center text-3xl font-extrabold sm:text-4xl md:mb-12 md:text-left md:text-5xl">
            Wszystko, czego potrzebujesz na festiwalu
          </h3>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="flex gap-5 rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8"
                >
                  <div
                    aria-hidden="true"
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-alt-1 text-white"
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h4 className="text-lg font-extrabold sm:text-xl">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground sm:text-base">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </PaddingWrapper>
    </div>
  );
}
