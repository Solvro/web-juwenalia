"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { ReactNode } from "react";

import { NavbarMobile } from "./navbar-mobile";

function ForLinks({
  children,
  link,
  label,
}: {
  children: ReactNode;
  link: string;
  label: string;
}) {
  return (
    <Link
      href={link}
      aria-label={label}
      className="rounded-full hover:bg-gradient-main sm:p-1 lg:p-2"
    >
      {children}
    </Link>
  );
}
export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const changeLogoState = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="relative mx-5 mt-6 flex w-11/12 justify-between sm:mx-1 sm:mt-8 sm:w-auto sm:bg-black sm:text-white lg:mx-8">
      {/* That black backgruond is just temporary for visibility, because it's hard to see anything without background image from countdown */}
      <Image
        className={`sm:opacity-100 ${
          isMenuOpen ? "opacity-0" : "opacity-100"
        } transition-opacity duration-500 ease-in-out`}
        src="/LOGO_juwenalia2025.svg"
        alt="Logo na juwenalia 2025"
        width={84}
        height={84}
      />
      <div className="hidden sm:absolute sm:inset-y-0 sm:right-1 sm:flex sm:gap-2 lg:gap-10 xl:gap-12">
        <div className="items-center font-normal leading-none sm:flex sm:flex-row sm:gap-4 sm:text-sm md:gap-6 md:text-base lg:gap-7 xl:gap-8 xl:text-lg">
          <ForLinks link="/" label="Przejdź do strony głównej">
            Strona Główna
          </ForLinks>

          <ForLinks link="/artists" label="Przejdź do strony z artystami">
            Artyści
          </ForLinks>

          <ForLinks link="/map" label="Przejdź do strony z mapą wydarzenia">
            Mapa Wydarzenia
          </ForLinks>

          <ForLinks link="/news" label="Przejdź do strony z aktualnościami">
            Aktualności
          </ForLinks>
        </div>

        <div className="flex flex-row items-center justify-center rounded-full border-2 border-solid border-white bg-black px-2 py-[11px] font-semibold hover:cursor-pointer hover:border-black hover:bg-gradient-main sm:w-24 sm:gap-2 sm:text-xs sm:leading-7 md:w-36 md:text-base lg:w-40 lg:gap-6 lg:px-5 lg:leading-6 xl:w-44">
          kup bilet{" "}
          <div className="flex h-[25px] shrink-0 items-center justify-center fill-none sm:w-2 lg:w-4 xl:w-[25px]">
            <Image
              className={`transition-opacity duration-500 ease-in-out`}
              src="/buttons/dot-for-button.svg"
              alt="Element dekoracyjny przycisku do kupowania biletu"
              width={6}
              height={6}
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-2 right-4 sm:hidden">
        <NavbarMobile onButtonClick={changeLogoState} />
      </div>
    </div>
  );
}
