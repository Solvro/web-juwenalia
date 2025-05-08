import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NAV_LINKS } from "@/config/data";

interface NavbarMobileProps {
  onOpenChange: (open: boolean) => void;
  isOpened: boolean;
}

export function NavbarMobile({ isOpened, onOpenChange }: NavbarMobileProps) {
  const currentPath = usePathname();
  return (
    <Sheet open={isOpened} onOpenChange={onOpenChange} defaultOpen={false}>
      <SheetTrigger
        onClick={() => {
          onOpenChange(false);
        }}
      >
        <Menu
          className="block"
          size={32}
          strokeWidth={2.5}
          tabIndex={0}
          role="button"
          aria-label="Ikona rozwijanego menu"
          onClick={() => {
            onOpenChange(false);
          }}
          color={currentPath === "/" ? "white" : "black"}
        />
      </SheetTrigger>
      <SheetTitle />
      <SheetContent
        className="max-h-screen"
        closeIcon={
          <div className="grid place-items-center">
            <Image
              src="/buttons/close-button.svg"
              alt="Przycisk do zamkniecia menu"
              width={35}
              height={35}
              onClick={() => {
                onOpenChange(false);
              }}
            />
          </div>
        }
        onOverlayClick={() => {
          onOpenChange(false);
        }}
        aria-describedby={undefined}
      >
        <SheetHeader className="flex space-x-2">
          <Image
            src="/LOGO_juwenalia2025.svg"
            alt="Ikonka logo juwenalia 2025"
            width={100}
            height={83}
          />
        </SheetHeader>
        <div className="flex h-full flex-col justify-between pb-32">
          <div className="mt-20 flex flex-col items-start gap-5 text-2xl font-semibold text-black">
            {NAV_LINKS.map(({ name, url, label }, index) => (
              <Link
                href={url}
                aria-label={label}
                className="nav-link link-item"
                key={`key${index.toString()}`}
                onClick={() => {
                  onOpenChange(false);
                }}
              >
                {name}
              </Link>
            ))}
          </div>

          <Button
            as={Link}
            href="https://docs.google.com/forms/d/e/1FAIpQLSepW2oQ1f1lAmfYBfDi_zP-vB-i7bfVFkXpHE7IaA72jq55SA/viewform?usp=header"
            className="!w-full !bg-gradient-main !py-4 before:!bg-black/10 [&_*]:hover:!text-white"
            variant="default"
            variantColor="white"
          >
            Akredytacja Medialna
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
