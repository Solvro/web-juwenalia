import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { fetchData } from "@/lib/api";
import { hasEdition } from "@/lib/edition";
import type { Faq } from "@/lib/types";

export function QuestionContent({
  faq,
  index,
  isLast,
}: {
  faq: Faq;
  index: number;
  isLast: boolean;
}) {
  return (
    <AccordionItem
      className={isLast ? "border-none" : ""}
      value={`item-${String(index)}`}
    >
      <AccordionTrigger className="py-5 text-left text-xl font-bold hover:no-underline sm:text-2xl sm:font-semibold lg:text-3xl xl:text-4xl [&>svg]:h-8 [&>svg]:w-8">
        <div className="relative">{faq.question}</div>
      </AccordionTrigger>
      <AccordionContent className="text-sm font-medium text-muted-foreground sm:text-base lg:text-lg xl:text-xl">
        {faq.answer}
      </AccordionContent>
    </AccordionItem>
  );
}

export async function FaqContent() {
  const faqs = await fetchData<{ data: Faq[] }>("items/faqs");
  const filteredFaqs = faqs.data.filter((faq) => hasEdition(faq.edition));

  if (filteredFaqs.length === 0) {
    return null;
  }

  return (
    <div>
      <Accordion type="single" collapsible className="space-y-2">
        {filteredFaqs.map((singleSet, index) => (
          <QuestionContent
            key={singleSet.id}
            faq={singleSet}
            index={index}
            isLast={index === filteredFaqs.length - 1}
          />
        ))}
      </Accordion>
    </div>
  );
}
