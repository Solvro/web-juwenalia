"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <div className="font-monsterrat mx-[23px] mt-[25px] flex w-11/12 items-center justify-between sm:mx-16 sm:mt-8 sm:w-11/12 sm:bg-black sm:text-white">
      {/* That black backgruond is just temporary for visibility, because it's har dto see anything otherwise without background image from countdown */}
      <Image
        className={`sm:opacity-100 ${
          isMenuOpen ? "opacity-0" : "opacity-100"
        } transition-opacity duration-500 ease-in-out`}
        src="/LOGO_juwenalia2025.svg"
        alt="Logo na juwenalia 2025"
        width={84}
        height={84}
      />
      <div className="hidden sm:flex sm:items-center sm:gap-[51px]">
        <div className="font-mosterrat items-center text-lg font-normal leading-none sm:flex sm:flex-row sm:gap-8">
          <Link
            href="/"
            aria-label="Przejdź do strony głównej"
            className="rounded-full p-2 hover:bg-gradient-main"
          >
            Strona Główna
          </Link>
          <Link
            href="/artists"
            aria-label="Przejdź do strony z artystami"
            className="rounded-full p-2 hover:bg-gradient-main"
          >
            Artyści
          </Link>
          <Link
            href="/map"
            aria-label="Przejdź do strony z mapą wydarzenia"
            className="rounded-full p-2 hover:bg-gradient-main"
          >
            Mapa Wydarzenia
          </Link>
          <Link
            href="/news"
            aria-label="Przejdź do strony z aktualnościami"
            className="rounded-full p-2 hover:bg-gradient-main"
          >
            Aktualności
          </Link>
        </div>
        <div className="flex w-[177px] flex-col items-center justify-center gap-[10px] rounded-full border-2 border-solid border-white bg-black px-5 py-[11px] hover:cursor-pointer hover:border-black hover:bg-gradient-main">
          <div className="flex gap-[25px] text-lg font-semibold lowercase leading-6">
            kup bilet
            <div className="flex h-[25px] w-[25px] shrink-0 items-center justify-center">
              <svg
                width="6"
                height="6"
                viewBox="0 0 6 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="3.17004"
                  cy="3.35086"
                  r="2.5"
                  fill="url(#paint0_radial_1115_1970)"
                />
                <defs>
                  <radialGradient
                    id="paint0_radial_1115_1970"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(5.17004 4.35086) rotate(-161.565) scale(4.74342)"
                  >
                    <stop stopColor="#049BAD" />
                    <stop offset="1" stopColor="#58C473" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <svg
        tabIndex={0}
        role="button"
        aria-label="Ikona rozwijanego menu"
        className="block sm:hidden"
        width="25"
        height="26"
        viewBox="0 0 25 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
        }}
        onKeyDown={(g) => {
          g.key === "Enter" && setIsMenuOpen(!isMenuOpen);
        }}
      >
        {" "}
        {/* fill should be white, but it would't be visible without any background, it needs to be changed to white later  */}
        <rect y="5.7659" width="25" height="3" rx="1.5" fill="black" />
        <rect y="12.06" width="25" height="3" rx="1.5" fill="black" />
        <rect y="17.7659" width="25" height="3" rx="1.5" fill="black" />
      </svg>
      <div
        className={`absolute right-0 top-0 flex h-full w-4/6 transform flex-col items-end gap-2 bg-white transition-transform sm:hidden ${isMenuOpen ? "opacity-100" : "hidden opacity-0"}`}
        style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
      >
        <div className="flex flex-1 flex-col items-center justify-end gap-2.5 self-stretch px-8 py-7">
          <div className="flex h-[84px] w-[252px] shrink-0 items-center justify-between">
            <Image
              src="/LOGO_juwenalia2025.svg"
              alt="Logo na juwenalia 2025"
              width={84}
              height={84}
            />
            <svg
              tabIndex={0}
              role="button"
              aria-label="Przycisk do zamknięcia rozwijanego menu"
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="26"
              viewBox="0 0 25 26"
              fill="none"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
              onKeyDown={(g) => {
                g.key === "Enter" && setIsMenuOpen(!isMenuOpen);
              }}
            >
              <rect
                x="20.278"
                y="22.8995"
                width="25"
                height="3"
                rx="1.5"
                transform="rotate(-135 20.278 22.8995)"
                fill="#58C473"
              />
              <rect
                x="2.60019"
                y="20.7782"
                width="25"
                height="3"
                rx="1.5"
                transform="rotate(-45 2.60019 20.7782)"
                fill="#049BAD"
              />
            </svg>
          </div>
          <div className="font-monsterrat flex h-[640px] flex-col items-start justify-between self-stretch pb-12 text-xl font-semibold leading-6">
            <div className="flex flex-col items-start gap-5 text-black">
              <Link href="/" aria-label="Przejdź do strony głównej">
                Strona Główna
              </Link>
              <Link href="/artists" aria-label="Przejdź do strony z artystami">
                Artyści
              </Link>
              <Link
                href="/map "
                aria-label="Przejdź do strony z mapą wydarzenia"
              >
                Mapa Wydarzenia
              </Link>
              <Link
                href="/news"
                aria-label="Przejdź do strony z aktualnościami"
              >
                Aktualności
              </Link>
            </div>
            <div className="flex-start flex self-stretch rounded-[30px] bg-gradient-main px-8 py-5 text-white">
              kup bilet {/*Placeholder */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
