import { Person } from "@/lib/types";
import Image from "next/image";

const DEFAULT_IMAGE = "default.jpg";

function PersonCard({ person }: { person: Person }) {
  return (
    <div className="flex max-w-[200px] flex-col items-center text-center">
      <div className="rounded-full bg-neutral-300">
        <Image
          src={`/${person.image || DEFAULT_IMAGE}`}
          alt={`${person.name}'s photo`}
          width={125}
          height={125}
          className="flex items-center"
        />
      </div>
      <p className="mt-3 text-lg">{person.name}</p>
      <small className="text-xs uppercase">{person.role}</small>
    </div>
  );
}

export function PersonCardList({ people }: { people: Person[] }) {
  return (
    <ul
      className={`mt-10 grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-2 gap-y-5`}
    >
      {people.map((person, idx) => (
        <li key={idx}>
          <PersonCard person={person} />
        </li>
      ))}
    </ul>
  );
}
