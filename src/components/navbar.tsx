"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { NavbarMobile } from "./navbar-mobile";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const changeLogoState = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="relative mx-5 mt-6 flex w-11/12 justify-between sm:mx-1 sm:mt-8 sm:w-auto sm:bg-black sm:text-white lg:mx-8">
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
      <div className="hidden sm:absolute sm:inset-y-0 sm:right-4 sm:flex sm:gap-2 lg:gap-10 xl:gap-12">
        <div className="items-center font-normal leading-none sm:flex sm:flex-row sm:gap-1 sm:text-sm md:text-base lg:gap-6 xl:gap-8 xl:text-lg">
          <Link
            href="/"
            aria-label="Przejdź do strony głównej"
            className="rounded-full hover:bg-gradient-main sm:p-1 lg:p-2"
          >
            Strona Główna
          </Link>
          <Link
            href="/artists"
            aria-label="Przejdź do strony z artystami"
            className="rounded-full hover:bg-gradient-main sm:p-1 lg:p-2"
          >
            Artyści
          </Link>
          <Link
            href="/map"
            aria-label="Przejdź do strony z mapą wydarzenia"
            className="rounded-full hover:bg-gradient-main sm:p-1 lg:p-2"
          >
            Mapa Wydarzenia
          </Link>
          <Link
            href="/news"
            aria-label="Przejdź do strony z aktualnościami"
            className="rounded-full hover:bg-gradient-main sm:p-1 lg:p-2"
          >
            Aktualności
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center rounded-full border-2 border-solid border-white bg-black px-5 py-[11px] hover:cursor-pointer hover:border-black hover:bg-gradient-main sm:w-28 lg:w-40 xl:w-44">
          <div className="flex font-semibold sm:gap-2 sm:text-sm sm:leading-7 lg:gap-6 lg:text-lg lg:leading-6">
            kup bilet{" "}
            <div className="flex h-[25px] w-[25px] shrink-0 items-center justify-center fill-none">
              <Image
                className={`fill-none transition-opacity duration-500 ease-in-out`}
                src="/buttons/dot-for-button.svg"
                alt="Element dekoracyjny przycisku do kupowania biletu"
                width={6}
                height={6}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-2 right-4">
        <NavbarMobile onButtonClick={changeLogoState} />
      </div>
    </div>
  );
}
