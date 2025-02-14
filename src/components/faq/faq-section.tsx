import { fetchData } from "@/lib/api";
import type { Faq } from "@/lib/types";

import { PaddingWrapper } from "../padding-wrapper";
import { FrequentlyAskedQuestion } from "./faq-card";

export async function FrequentlyAskedQuestions() {
  const faqs = await fetchData<{ data: Faq[] }>("items/faqs");
  return (
    <PaddingWrapper>
      <div className="mb-14 box-border grid grid-cols-12 justify-between gap-4 sm:gap-8 md:gap-12 xl:gap-16 xl:px-6">
        <div className="col-span-6 flex h-full w-full items-center justify-center text-4xl font-[900] sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
          <h2 className="w-min text-balance">Częste Pytania</h2>
        </div>
        {faqs.data.map((faq, index) => (
          <FrequentlyAskedQuestion key={faq.id} faq={faq} index={index} />
        ))}
      </div>
    </PaddingWrapper>
  );
}
