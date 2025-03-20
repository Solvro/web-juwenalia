import type { ClassValue } from "clsx";
import { Space_Grotesk } from "next/font/google";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import Link from "next/link";
import type { ReactElement, ReactNode } from "react";

import Logo from "@/../public/Juwe2025.svg";
import Solvro from "@/../public/logo-solvro.svg";
import { HorizontalRule } from "@/components/horizontal-rule";
import { PaddingWrapper } from "@/components/padding-wrapper";
import { FOOTER_LINKS, NAV_LINKS } from "@/config/data";
import { cn } from "@/lib/utils";

import { OpenBugReportFormButton } from "./bug-report-form/open-form-button";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: "400" });

function List({
  text,
  children,
  className,
}: {
  text: string;
  children: ReactNode;
  className?: ClassValue;
}) {
  return (
    <div className={cn("flex w-full flex-col gap-4", className)}>
      <h2 className="text-base font-medium uppercase">{text}</h2>
      <ul className="flex w-full flex-col">{children}</ul>
    </div>
  );
}

function ListItem({
  url,
  as,
  target = "_blank",
  text,
  label,
}: {
  target?: string;
  label?: string;
  text: string;
} & ({ as: ReactElement; url?: never } | { as?: never; url: string })) {
  return (
    <li className="mb-2 w-full text-sm font-light md:text-base">
      {url == null ? (
        as
      ) : (
        <Link
          href={url}
          target={target}
          className="underline-animation"
          aria-label={label}
        >
          {text}
        </Link>
      )}
    </li>
  );
}

function Footer() {
  return (
    <footer className="mt-32 w-full border-t border-gray-300">
      <PaddingWrapper>
        <div className="grid h-full w-full grid-cols-2 gap-5 py-5 lg:grid-cols-4 lg:gap-20 lg:py-16 xl:grid-cols-6">
          <List text="Kontakt" className="pt-6 lg:row-start-2 xl:row-start-1">
            <ListItem
              text={FOOTER_LINKS.contact.mail}
              url={`mailto:${FOOTER_LINKS.contact.mail}`}
            />
          </List>

          <List
            text="Social media"
            className="pt-6 lg:row-start-2 xl:row-start-1"
          >
            <ListItem text="Instagram" url={FOOTER_LINKS.socials.ig} />
            <ListItem text="Facebook" url={FOOTER_LINKS.socials.fb} />
            <ListItem text="Tiktok" url={FOOTER_LINKS.socials.tt} />
          </List>

          <div className="relative col-span-2 row-start-1 row-end-1 h-full min-h-52 w-full sm:min-h-60 lg:col-start-2 lg:col-end-4 lg:row-start-1 lg:row-end-1 xl:col-span-2 xl:col-start-3 xl:min-h-full">
            <Image
              src={Logo as StaticImageData}
              alt="Logo Juwenalia 2025 #WROCŁAWRAZEM"
              className="relative"
              loading="lazy"
              fill
            />
          </div>

          <List text="Linki" className="pt-6 lg:row-start-2 xl:row-start-1">
            {NAV_LINKS.map(({ name, url, label }, index) => (
              <ListItem
                text={name}
                url={url}
                label={label}
                key={`key${index.toString()}`}
              />
            ))}
          </List>
          <List text="Inne" className="pt-6 lg:row-start-2 xl:row-start-1">
            <ListItem
              text="Polityka prywatności"
              url={FOOTER_LINKS.privacyPolicy}
            />
            <ListItem text="Zgłoś błąd" as={<OpenBugReportFormButton />} />
          </List>
        </div>
      </PaddingWrapper>
      <HorizontalRule />
      <PaddingWrapper className="flex flex-row justify-between gap-3 py-5 pt-2 sm:items-center sm:gap-5 md:py-8 md:pt-3">
        <span className="text-sm font-light text-gray-500">
          ©{" "}
          <span className="font-regular">
            Juwenalia Wrocław {new Date().getFullYear()}
          </span>
        </span>

        <Link
          href="https://solvro.pl/"
          target="_blank"
          className={cn(
            "flex items-center text-sm font-medium",
            spaceGrotesk.className,
          )}
        >
          Made with ❤️ by&nbsp;
          <span className="inline-flex">
            <Image
              src={Solvro as StaticImageData}
              alt="logo solvro"
              className="size-5"
            />
            &nbsp;Solvro
          </span>
        </Link>
      </PaddingWrapper>
    </footer>
  );
}

export { Footer };
