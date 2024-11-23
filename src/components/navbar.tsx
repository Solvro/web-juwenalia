import Link from "next/link";

const Navbar = () => {
    return (
        <div className="flex-col space-x-1.5 text-blue-800">
            <Link href="/">Home</Link>
            <Link href="/schedule">About</Link>
            <Link href="/map">Map</Link>
            <Link href="/postsFb">Fb</Link>
            <Link href="/postsIg">Ig</Link>
            <Link href="/artists">Artists</Link>
        </div>
    )
}

export { Navbar }