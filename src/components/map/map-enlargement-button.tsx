import { Maximize } from "lucide-react";
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
}: {
  currentView: MapLevel;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="default"
          className="hidden w-max items-center lg:flex [&_svg]:size-6"
        >
          <div className="flex flex-row gap-2">
            <Maximize />
            <span className="normal-case">Powiększ</span>
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent className="fixed left-[50vw] top-[50vh] h-fit max-w-fit">
        <DialogHeader className="">
          <DialogTitle className="mb-2 text-center">
            {currentView.description}
          </DialogTitle>
          <DialogDescription className="h-[85vh] w-max">
            <Image
              src={currentView.image.src}
              alt={currentView.image.alt}
              width={1000}
              height={800}
              className="mx-auto h-full rounded-3xl"
            />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
