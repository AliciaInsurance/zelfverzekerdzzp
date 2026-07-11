import type { FAQItem } from "@/content/insurance";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FAQProps = {
  items: FAQItem[];
  title?: string;
};

export function FAQ({ items, title = "Veelgestelde vragen" }: FAQProps) {
  return (
    <div>
      <h2 className="mb-6 text-2xl font-semibold tracking-tight text-navy md:text-3xl">
        {title}
      </h2>
      <Accordion type="single" collapsible className="w-full">
        {items.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
