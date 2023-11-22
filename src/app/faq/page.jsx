"use client";
import "wipe.css";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS } from "@/data/data";
export default function Faq() {
  return (
    <div className={"container flex min-h-screen flex-col"}>
      <h6 className={"my-8"}>Ready answers to your questions</h6>
      <Accordion type="single" collapsible>
        {FAQS.map((item, index) => {
          return (
            <AccordionItem
              className={"my-3"}
              value={`item-${index + 1}`}
              key={item.id}
            >
              <AccordionTrigger
                className={
                  "w-full text-white leading-normal bg-[#45484A] p-4 rounded-lg text-left data-[state=open]:rounded-b-none data-[state=open]:border-solid data-[state=open]:border-b-2 data-[state=open]:border-red-600"
                }
              >
                {item.trigger}
              </AccordionTrigger>
              <AccordionContent
                className={
                  "w-full bg-gray-100 leading-normal p-4 rounded-lg data-[state=open]:rounded-t-none"
                }
              >
                {item.content}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}
