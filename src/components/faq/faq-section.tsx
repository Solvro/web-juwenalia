import { fetchData } from "@/lib/api";
import type { Faq } from "@/lib/types";

import { PaddingWrapper } from "../padding-wrapper";
import { FrequentlyAskedQuestion } from "./faq-card";

export async function FrequentlyAskedQuestions() {
  const faqs = await fetchData<{ data: Faq[] }>("items/faqs");
  return (
    <PaddingWrapper>
      <div className="mb-14 box-border grid grid-cols-12 justify-between gap-2 sm:gap-4 md:gap-6">
        <div className="col-span-12 mb-8 flex h-full w-full font-[900] sm:col-span-6 sm:mb-0">
          <h2 className="text-balance text-3xl sm:w-min sm:text-6xl md:text-7xl lg:text-8xl">
            Częste Pytania
          </h2>
        </div>
        {faqs.data.map((faq, index) => (
          <FrequentlyAskedQuestion
            key={faq.id}
            faqs={faqs.data}
            index={index}
          />
        ))}
      </div>
    </PaddingWrapper>
  );
}
