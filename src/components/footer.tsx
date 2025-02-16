import type { ClassValue } from "clsx";
import { Space_Grotesk } from "next/font/google";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import Link from "next/link";

import Logo from "@/../public/Juwe2025.svg";
import { HorizontalRule } from "@/components/horizontal-rule";
import { PaddingWrapper } from "@/components/padding-wrapper";
import { FOOTER_LINKS, NAV_LINKS } from "@/config/data";
import { cn } from "@/lib/utils";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: "400" });

function List({
  text,
  children,
  className,
}: {
  text: string;
  children: React.ReactNode;
  className?: ClassValue;
}) {
  return (
    <div className={cn("flex w-fit flex-col gap-4", className)}>
      <h2 className="text-base font-medium uppercase">{text}</h2>
      <ul className="w-fit">{children}</ul>
    </div>
  );
}

function ListItem({
  url,
  target = "_blank",
  text,
  label,
}: {
  url: string;
  target?: string;
  label?: string;
  text: string;
}) {
  return (
    <li className="mb-2 w-full whitespace-nowrap text-sm font-light md:text-base">
      <Link
        href={url}
        target={target}
        className="underline-animation"
        aria-label={label}
      >
        {text}
      </Link>
    </li>
  );
}

function Footer() {
  return (
    <footer className="mt-32 w-full border-t border-gray-300">
      <PaddingWrapper>
        <div className="grid h-full w-full grid-cols-2 gap-5 py-5 lg:grid-cols-6 lg:gap-10 lg:py-16 xl:grid-cols-7">
          <List text="Kontakt" className="pt-6">
            <ListItem
              text={FOOTER_LINKS.contact.mail}
              url={`mailto:${FOOTER_LINKS.contact.mail}`}
            />
            <ListItem
              text={FOOTER_LINKS.contact.phone}
              url={`tel:${FOOTER_LINKS.contact.phone}`}
            />
          </List>

          <List text="Social media" className="pt-6">
            <ListItem text="Instagram" url={FOOTER_LINKS.socials.ig} />
            <ListItem text="Facebook" url={FOOTER_LINKS.socials.fb} />
            <ListItem text="Tiktok" url={FOOTER_LINKS.socials.tt} />
          </List>

          <div className="relative col-span-2 row-start-1 row-end-1 h-full min-h-52 w-full sm:min-h-60 lg:col-start-3 lg:min-h-full xl:col-span-3 xl:col-start-3">
            <Image
              src={Logo as StaticImageData}
              alt="Logo Juwenalia 2025 #WROCŁAWRAZEM"
              className="relative"
              loading="lazy"
              fill
            />
          </div>

          <List text="Linki" className="pt-6">
            {NAV_LINKS.map(({ name, url, label }, index) => (
              <ListItem
                text={name}
                url={url}
                label={label}
                key={`key${index.toString()}`}
              />
            ))}
          </List>

          <List text="Inne" className="pt-6">
            <ListItem
              text="Polityka prywatności"
              url={FOOTER_LINKS.privacyPolicy}
            />
            <ListItem text="Zgłoś błąd" url={FOOTER_LINKS.bugReport} />
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

        <p className={cn("text-sm font-medium", spaceGrotesk.className)}>
          Made with ❤️ by Solvro
        </p>
      </PaddingWrapper>
    </footer>
  );
}

export { Footer };
