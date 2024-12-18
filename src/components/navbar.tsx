import Link from "next/link";

export function Navbar() {
  return (
    <div className="flex-col space-x-4 text-blue-800">
      <Link href="/">Strona Główna</Link>
      <Link href="/artists">Artyści</Link>
      <Link href="/map">Mapa Wydarzenia</Link>
      <Link href="/postsFb">Aktualności</Link>
    </div>
  );
}
