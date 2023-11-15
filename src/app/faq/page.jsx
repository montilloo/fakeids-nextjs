"use client";
import "wipe.css";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";

const faqs = [
  {
    trigger: "Are these IDs scannable?",
    content:
      "Yes they can be scanned and they will show all information that is on the card in the proper format.",
  },
  {
    trigger: "Can I purchase only 1 ID?",
    content:
      "We don’t sell only 1 id. The reason we provide two SAME IDs for each person is that if you lose one, you don’t have to pay for another.",
  },
  {
    trigger: "What state would you say is the “best” / or comes out the best?",
    content: "All IDs are top quality!",
  },
  {
    trigger: "How/when can I get an ID at less than 100$ for each person?",
    content: "There are running promotions daily and group rates are the best.",
  },
  {
    trigger: "Tracking?",
    content:
      "Our ids typically 4 days to make and then we ship them to you ONCE THEY ARE DONE! normal shipping the tracking is very slow and does not update. IF you want faster shipping that takes only 10-15 days to get to you from the TIME the ids are done then please purchase our priority service! IF YOU GET OUR SLOWEST SHIPPING OPTION AND THE ITEMS ARE TAKEN OR LOST THERE WILL BE A $50 REPRINT FEE FOR SINGLE ORDERS AND LARGER GROUP ORDERS UP TO $200 EXPRESS SERVICE OPTION ALWAYS FREE RESHIP!",
  },
  {
    trigger: "What are the payment methods?",
    content:
      "You can pay with Bitcoin, Card, gift card and other methods are added periodically. Check out our order page for a list of all supported payment methods.",
  },
  {
    trigger:
      "I am going to take a picture in front of a blue background, will you edit the background color to make it look more official?",
    content:
      "For further information regarding photos or signature, please read the order page and follow the instructions.",
  },
  {
    trigger:
      "Aside from the states you have listed on the site what other ids do you offer?",
    content: "We offer only the IDs that are presented on the website.",
  },
  {
    trigger: "Is it possible to choose a custom address for my ID?",
    content:
      "We will choose the Id's address for customers. It is a real address, but a random one. If you want your own ID address, you can mention it in the extra info box.",
  },
  {
    trigger: "Black light and UV?",
    content: "Please read website and watch video. If unclear contact us.",
  },
  {
    trigger: "How do you ship the IDs? Is it package or envelope?",
    content: "Express, and it is an envelope.",
  },
  {
    trigger: "Do you make under 21 IDs?",
    content: "No, we do not!",
  },
];
export default function Faq() {
  const handleOnclick = () => {
    console.log("hello");
  };

  return (
    <div className={"container flex min-h-screen flex-col"}>
      <h6 className={"my-8"}>Ready answers to your questions</h6>
      <Accordion type="single" collapsible>
        {faqs.map((item, index) => {
          return (
            <>
              <AccordionItem
                className={"my-3"}
                value={`item-${index + 1}`}
                key={index}
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
            </>
          );
        })}
      </Accordion>
    </div>
  );
}
