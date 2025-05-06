"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { ReactNode } from "react";

import { Button } from "@/components/button";
import { PaddingWrapper } from "@/components/padding-wrapper";
import { NAV_LINKS } from "@/config/data";
import { cn } from "@/lib/utils";

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
  const currentPath = usePathname();

  return (
    <Link
      href={link}
      aria-label={label}
      className={cn("nav-link link-item underline-animation", {
        "after:bg-white": currentPath === "/",
      })}
    >
      {children}
    </Link>
  );
}
export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const currentPath = usePathname();

  const changeLogoState = (open: boolean) => {
    setIsMenuOpen(open);
  };

  return (
    <PaddingWrapper
      className={cn(
        // Later on need to be modified in order to react to user scroll behaviour,
        // scroll down: nav hides,
        // scroll up: nav shows
        "absolute top-0 z-10 flex w-full items-center justify-between py-3",
        {
          "sm:text-white": currentPath === "/",
        },
      )}
    >
      <Link href="/" className="relative aspect-square w-[100px] lg:w-[130px]">
        <Image
          className={cn(
            "h-full w-full opacity-100 transition-opacity duration-500 ease-in-out",
            {
              "opacity-0": isMenuOpen,
            },
          )}
          src="/LOGO_juwenalia2025.svg"
          alt="Logo na juwenalia 2025"
          fill
        />
      </Link>
      <div className="hidden items-center gap-4 lg:flex lg:gap-10 xl:gap-12">
        <div className="items-center font-normal leading-none sm:flex sm:flex-row sm:gap-4 sm:text-sm md:gap-6 md:text-base lg:gap-7 xl:gap-8 xl:text-lg">
          {NAV_LINKS.map(({ name, url, label }, index) => (
            <ForLinks link={url} label={label} key={`key${index.toString()}`}>
              {name}
            </ForLinks>
          ))}
        </div>

        <Button
          as={Link}
          href="https://docs.google.com/forms/d/e/1FAIpQLSepW2oQ1f1lAmfYBfDi_zP-vB-i7bfVFkXpHE7IaA72jq55SA/viewform?usp=header"
          variant="gradient"
          variantColor={currentPath === "/" ? "white" : "black"}
          className="h-14"
        >
          Akredytacja Medialna
        </Button>
      </div>
      <div className="flex lg:hidden">
        <NavbarMobile isOpened={isMenuOpen} onOpenChange={changeLogoState} />
      </div>
    </PaddingWrapper>
  );
}
