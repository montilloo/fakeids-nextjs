"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverPortal,
} from "@/components/ui/popover";
import {
  HamburgerMenuIcon,
  Cross1Icon,
  BackpackIcon,
} from "@radix-ui/react-icons";
import { NavLinks } from "./NavLinks";

export function Header() {
  let [open, setOpen] = useState(false);

  const onPopoverOpenChange = () => {
    setOpen(!open);
  };
  return (
    <header>
      <nav>
        <div className="container relative z-50 flex justify-between py-2">
          <div className="relative z-10 flex items-center gap-16">
            <Link href="/" aria-label="Home">
              HOME
            </Link>
            <div className="hidden lg:flex lg:gap-10">
              <NavLinks />
            </div>
          </div>
          <div className="flex items-center gap-6 lg:hidden">
            <Popover onOpenChange={() => setOpen(!open)}>
              <PopoverTrigger asChild>
                <Button variant="link" size="icon">
                  {open ? <Cross1Icon /> : <HamburgerMenuIcon />}
                </Button>
              </PopoverTrigger>
              <AnimatePresence initial={false}>
                {open && (
                  <>
                    <PopoverPortal
                      static
                      as={motion.div}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="fixed inset-0 z-0 bg-gray-300/60 backdrop-blur"
                    />
                    <PopoverContent
                      as={motion.div}
                      initial={{ opacity: 0, y: -32 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{
                        opacity: 0,
                        y: -32,
                        transition: { duration: 0.2 },
                      }}
                      sideOffset={2}
                      align={"start"}
                      className="inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-gray-50 px-6 pb-6 shadow-2xl shadow-gray-900/20"
                    >
                      <div className="space-y-4">
                        <Button
                          asChild={true}
                          className="block text-base leading-7 tracking-tight text-gray-700"
                          variant={"link"}
                        >
                          <Link href={"/"}>Home</Link>
                        </Button>
                        <Button
                          className="block text-base leading-7 tracking-tight text-gray-700"
                          variant={"link"}
                        >
                          <Link href={"/price"}>PRICE/PIC</Link>
                        </Button>
                        <Button
                          className="block text-base leading-7 tracking-tight text-gray-700"
                          variant={"link"}
                        >
                          <Link href={"/order"}>ORDER</Link>
                        </Button>
                        <Button
                          className="block text-base leading-7 tracking-tight text-gray-700"
                          variant={"link"}
                        >
                          <Link href={"/faq"}>FAQ&apos;s</Link>
                        </Button>
                        <Button
                          variant={"link"}
                          className={
                            "block text-base leading-7 tracking-tight text-gray-700"
                          }
                        >
                          <Link href={"/about"}>ABOUT US</Link>
                        </Button>
                      </div>
                      <div className="mt-8 flex flex-col gap-4">
                        <Button>
                          CART(0)
                          <BackpackIcon className=" ml-2 " />
                        </Button>
                      </div>
                    </PopoverContent>
                  </>
                )}
              </AnimatePresence>
            </Popover>
          </div>
          <div className="hidden lg:block">
            <Button variant={"link"}>
              CART(0)
              <BackpackIcon className=" ml-2 " />
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}
