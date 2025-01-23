import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface NavbarMobileProps {
  onButtonClick: () => void;
}

export function NavbarMobile({ onButtonClick }: NavbarMobileProps) {
  return (
    <Sheet>
      <SheetTrigger onClick={onButtonClick}>
        <Menu
          className="block sm:hidden"
          size={32}
          strokeWidth={2.5}
          tabIndex={0}
          role="button"
          aria-label="Ikona rozwijanego menu"
          onClick={onButtonClick}
          //color="white"
        />
      </SheetTrigger>
      <SheetTitle />
      <SheetContent
        closeIcon={
          <Image
            src="/buttons/close-button.svg"
            alt="Przycisk do zamkniecia menu"
            width={35}
            height={35}
            className="h-24"
            onClick={onButtonClick}
          />
        }
        onOverlayClick={onButtonClick}
      >
        <SheetHeader className="flex space-x-2">
          <Image
            src="/LOGO_juwenalia2025.svg"
            alt="Ikonka logo juwenalia 2025"
            width={100}
            height={83}
          />
        </SheetHeader>
        <div className="flex flex-1 flex-col items-center justify-end gap-2.5 px-8 py-7">
          <div className="flex h-20 w-64 shrink-0 items-center justify-between"></div>
          <div className="flex flex-col text-xl font-semibold leading-6">
            <div className="flex flex-col items-start gap-6 text-black">
              <Link href="/" aria-label="Przejdź do strony głównej">
                Strona Główna
              </Link>
              <Link href="/artists" aria-label="Przejdź do strony z artystami">
                Artyści
              </Link>
              <Link
                href="/map "
                aria-label="Przejdź do strony z mapą wydarzenia"
              >
                Mapa Wydarzenia
              </Link>
              <Link
                href="/news"
                aria-label="Przejdź do strony z aktualnościami"
              >
                Aktualności
              </Link>
            </div>
            <div className="absolute bottom-20 flex rounded-[30px] bg-gradient-main px-8 py-5 text-white">
              kup bilet {/*Placeholder */}
            </div>
          </div>
        </div>
        <SheetDescription></SheetDescription>
      </SheetContent>
    </Sheet>
  );
}
