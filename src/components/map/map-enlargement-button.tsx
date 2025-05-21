import { Maximize } from "lucide-react";
import type { StaticImageData } from "next/image";
import Image from "next/image";

import type { MapLevel } from "@/lib/types";

import { Button } from "../button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

export function MapEnlargementButton({
  currentView,
  image,
}: {
  currentView: MapLevel;
  image: StaticImageData;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="default"
          className="hidden w-max items-center rounded-lg lg:flex [&_svg]:size-6"
        >
          <div className="flex flex-row gap-2">
            <Maximize />
            <span className="normal-case">Powiększ</span>
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent className="left-1/2 top-1/2 max-w-[95vw] -translate-x-1/2 -translate-y-1/2">
        <DialogHeader className="">
          <DialogTitle className="mb-2 mt-8 text-center">
            {currentView.description}
          </DialogTitle>
          <DialogDescription className="relative h-[85vh] w-full">
            <Image
              src={image}
              alt={currentView.image.alt}
              fill
              className="rounded-3xl object-contain"
            />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
