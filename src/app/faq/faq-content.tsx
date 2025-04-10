import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

import { fetchData } from "@/lib/api";
import type { Faq } from "@/lib/types";

export function QuestionContent({ faq, index }: { faq: Faq; index: number }) {
  return (
    <Accordion.Item className="AccordionItem" value={`item-${index}`}>
      <Accordion.Trigger
        className={
          index === 0
            ? "flexbox w-full py-5 text-left text-4xl font-semibold"
            : "flexbox w-full border-t border-gray-300 py-5 text-left text-4xl font-semibold"
        }
      >
        <div className="relative">
          {faq.question}
          <ChevronDown className="absolute inset-y-0 right-0 h-8 w-8" />
        </div>
      </Accordion.Trigger>
      <Accordion.Content className="text-left text-xl text-gray-500">
        {faq.answer}
      </Accordion.Content>
    </Accordion.Item>
  );
}

export async function FaqContent() {
  const faqs = await fetchData<{ data: Faq[] }>("items/faqs");
  if (faqs.data.length === 0) {
    return null;
  }

  return (
    <div>
      <Accordion.Root type="single" collapsible className="space-y-2">
        {faqs.data.map((localFaqs, index) => (
          <QuestionContent key={localFaqs.id} faq={localFaqs} index={index} />
        ))}
      </Accordion.Root>
    </div>
  );
}
