import Image from "next/image";
import Link from "next/link";

function List({ text, children }: { text: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="mb-5 text-base font-medium uppercase">{text}</h2>
      <ul>{children}</ul>
    </div>
  );
}

function ListItem({
  url,
  target = "_blank",
  text,
}: {
  url: string;
  target?: string;
  text: string;
}) {
  return (
    <li className="mb-2 text-sm">
      <Link href={url} target={target}>
        {text}
      </Link>
    </li>
  );
}

function Footer() {
  return (
    <footer>
      <div className="grid place-items-center md:mb-16 md:mt-24">
        <Image
          src="/Juwe2025.png"
          alt="Description of the image"
          className="my-20 md:hidden"
          width={175}
          height={175}
        />
        <div className="grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-4 sm:justify-around md:flex md:w-11/12 md:flex-row md:justify-around">
          <List text="Kontakt">
            <ListItem url="mailto:example@gmail.com" text="Adres e-mail" />
            <ListItem url="mailto:example@gmail.com" text="Adres e-mail" />
          </List>
          <List text="Social media">
            <ListItem url="https://instagram.com/" text="Instagram" />
            <ListItem url="https://facebook.com/" text="Facebook" />
            <ListItem url="https://tiktok.com/" text="Instagram" />
          </List>
          <Image
            src="/Juwe2025.png"
            alt="Logo Juwenalia 2025 #WROCŁAWRAZEM"
            className="hidden md:-mt-8 md:block"
            width={250}
            height={150}
          />
          <List text="Linki">
            <ListItem url="/" text="Harmonogram" target="_self" />
            <ListItem url="/artists" text="Artyści" target="_self" />
            <ListItem url="/map" text="Mapa wydarzenia" target="_self" />
            <ListItem url="/postsFb" text="Aktualności" target="_self" />
          </List>
          <List text="Inne">
            <ListItem url="" text="Link 1" target="_self" />
            <ListItem url="" text="Link 2" target="_self" />
            <ListItem url="" text="Link 3" target="_self" />
          </List>
        </div>
      </div>
      <div className="mb-8 ml-5 mt-8 text-sm md:mb-16 md:flex md:justify-center">
        <div className="w-4/5 md:flex md:flex-row md:justify-between">
          <p className="mb-8 w-48 text-slate-400 md:w-full">
            © Juwenalia 2025. Wszelkie prawa zastrzeżone.
          </p>
          <p className="w-52 font-medium">Made with ❤️ by Solvro</p>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
