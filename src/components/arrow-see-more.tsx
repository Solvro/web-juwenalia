import { ArrowRight } from "lucide-react";

import { Button } from "@/components/button";

export function ArrowSeeMore({ text }: { text: string }) {
  return (
    <Button variant="ghost" className="group flex">
      <span className="text-lg font-light !normal-case md:text-xl lg:text-2xl">
        {text}
      </span>
      <ArrowRight className="ease-[cubic-bezier(0.85,0,0.15,1)] mb-1 ml-3 inline-flex -rotate-45 scale-[1.7] stroke-1 transition-transform group-hover:-translate-y-1/4 group-hover:translate-x-1/4 md:scale-[1.8] lg:mb-2 lg:ml-4 lg:scale-[2]" />
    </Button>
  );
}
