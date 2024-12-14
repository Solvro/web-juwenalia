import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="grid place-items-center md:mb-16 md:mt-24">
        <Image
          src="/Juwe2025.png"
          alt="Description of the image"
          className="my-20 md:hidden"
          width={175}
          height={175}
        />
        <div className="grid grid-cols-2 gap-x-5 sm:grid-cols-4 sm:justify-around md:flex md:w-11/12 md:flex-row md:justify-around">
          <div>
            <h2 className="mb-5 text-base font-medium">KONTAKT</h2>
            <ul>
              <li className="mb-2 text-sm">
                <Link href="mailto:example@gmail.com">Adres e-mail</Link>
              </li>
              <li className="mb-2 text-sm">
                <Link href="mailto:example@gmail.com">Adres e-mail</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-5 text-base font-medium">SOCIAL MEDIA</h2>
            <ul>
              <li className="mb-2 text-sm">
                <Link href="https://instagram.com/" target="_blank">
                  Instagram
                </Link>
              </li>
              <li className="mb-2 text-sm">
                <Link href="https://facebook.com/" target="_blank">
                  Facebook
                </Link>
              </li>
              <li className="mb-10 text-sm">
                <Link href="https://tiktok.com/" target="_blank">
                  TikTok
                </Link>
              </li>
            </ul>
          </div>
          <Image
            src="/Juwe2025.png"
            alt="Description of the image"
            className="hidden md:-mt-8 md:block"
            width={250}
            height={150}
          />
          <div>
            <h2 className="mb-5 text-base font-medium">LINKI</h2>
            <ul>
              <li className="mb-2 text-sm">
                <Link href="">Harmonogram</Link>
              </li>
              <li className="mb-2 text-sm">
                <Link href="/artists">Artyści</Link>
              </li>
              <li className="mb-2 text-sm">
                <Link href="/map">Mapa wydarzenia</Link>
              </li>
              <li className="mb-10 text-sm">
                <Link href="/postsFb">Aktualności</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-5 text-base font-medium">INNE</h2>
            <ul>
              <li className="mb-2 text-sm">
                <Link href="">Link 1</Link>
              </li>
              <li className="mb-2 text-sm">
                <Link href="">Link 2</Link>
              </li>
              <li className="mb-2 text-sm">
                <Link href="">Link 3</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mb-8 ml-5 text-sm md:mb-16 md:flex md:justify-center">
        <div className="w-4/5 md:flex md:flex-row md:justify-between">
          <p className="mb-8 w-48 text-slate-400 md:w-full">
            © Juwenalia 2025. Wszelkie prawa zastrzeżone.
          </p>
          <p className="w-52 font-medium">Made with ❤️ by Solvro</p>
        </div>
      </div>
    </>
  );
};

export { Footer };
