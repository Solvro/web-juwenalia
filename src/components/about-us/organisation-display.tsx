import Link from "next/link";

import { LogoBox } from "@/components/ui/logo-box";
import { API_URL } from "@/config/api";
import type { Organisation } from "@/lib/types";

export function OrganisationDisplay({
  organisations,
  maxWidth = 200,
  maxHeight = 100,
}: {
  organisations: Organisation[];
  maxWidth?: number;
  maxHeight?: number;
}) {
  return (
    <ul className="grid grid-cols-2 items-center gap-x-4 gap-y-5 pt-8 sm:gap-x-8 md:grid-cols-3 md:gap-x-12 lg:grid-cols-4 lg:gap-x-16 xl:grid-cols-5 xl:gap-x-20 2xl:gap-x-24">
      {organisations.map((organisation) => (
        <li
          key={`organiser-${organisation.name}`}
          className="grid w-full place-items-center"
        >
          <Link
            href={organisation.url}
            className="group flex gap-2 lg:text-lg xl:text-xl 2xl:text-2xl"
            target="_blank"
          >
            <LogoBox
              src={`${API_URL}/assets/${organisation.logo}`}
              alt={organisation.name}
              maxWidth={maxWidth}
              maxHeight={maxHeight}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}
