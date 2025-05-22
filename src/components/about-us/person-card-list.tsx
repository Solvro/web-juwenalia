import Image from "next/image";

import { API_URL } from "@/config/api";
import type { Person } from "@/lib/types";

const DEFAULT_IMAGE_MALE = "avatar-man.png";
const DEFAULT_IMAGE_FEMALE = "avatar-woman.png";

const getForename = (person: Person) =>
  person.name.split(" ")[0] ?? person.name;

function PersonCard({ person }: { person: Person }) {
  const defaultImage = getForename(person).endsWith("a")
    ? DEFAULT_IMAGE_FEMALE
    : DEFAULT_IMAGE_MALE;
  const src = person.image?.trim()
    ? `${API_URL}/assets/${person.image}`
    : `/${defaultImage}`;

  return (
    <div className="flex max-w-[200px] flex-col items-center text-center">
      <div className="relative h-[125px] w-[125px] overflow-hidden rounded-full">
        <Image
          src={src}
          alt={`${person.name}'s photo`}
          fill
          className="absolute inset-0 origin-top scale-125 transform object-cover object-center"
        />
      </div>

      <p className="mt-3 text-lg">{person.name}</p>
    </div>
  );
}

export function PersonCardList({ people }: { people: Person[] }) {
  return (
    <ul
      className={`mt-10 grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-x-2 gap-y-5 sm:gap-x-8 sm:gap-y-10 md:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] lg:gap-14`}
    >
      {people.map((person) => (
        <li
          key={`${person.role}-${person.name}`}
          className="flex justify-center"
        >
          <PersonCard person={person} />
        </li>
      ))}
    </ul>
  );
}
