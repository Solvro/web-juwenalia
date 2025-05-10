import Image from "next/image";
import Link from "next/link";

import { API_URL } from "@/config/api";
import type { Organisation } from "@/lib/types";

export function OrganisationDisplay({
  organisations,
}: {
  organisations: Organisation[];
}) {
  return (
    <ul className="grid grid-cols-2 items-center gap-x-4 gap-y-5 sm:gap-x-8 md:grid-cols-3 md:gap-x-12 lg:grid-cols-4 lg:gap-x-16 xl:grid-cols-5 xl:gap-x-20 2xl:gap-x-24">
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
            <Image
              src={`${API_URL}/assets/${organisation.logo}`}
              alt={organisation.name}
              width={150}
              height={0}
              style={{
                transform: `scale(${organisation.logoScale?.toString() ?? "1"})`,
              }}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}
