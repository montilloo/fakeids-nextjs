"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { BoxModelIcon } from "@radix-ui/react-icons";
import SectionHero2 from "@/components/SectionHero/SectionHero2";
import SectionSliderProductCard from "@/components/SectionSliderProductCard";
import Features from "@/components/Features";

const formSchema = z.object({
  email: z.string().email("Please enter the correct email address"),
});
export default function Home() {
  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <main className={"relative overflow-hidden"}>
      <SectionHero2 />
      <div className={" container w-full  py-16"}>
        <div className="bg-[#F8F8F8] flex items-center justify-center font-semibold p-4 mb-10">
          <BoxModelIcon />
          <h6 className={"ml-2"}>Why Choose FakeIDs</h6>
        </div>
        <p className="text-foreground">
          FakeIDs is your trusted fake store providing you with premium quality
          fake IDs. We pride ourselves in our work as we have two incredible
          teams available at your service. One group makes the IDs, and the
          other checks the quality control before shipping. As a result, our
          efficiency and speed are way faster. In addition, we have trained
          professionals with a streamlined process to cater for many fakes as
          possible.
        </p>
      </div>
      <div className={"w-full  py-16"}>
        <div className="container bg-[#F8F8F8] flex items-center justify-center font-semibold p-4 mb-10">
          <BoxModelIcon />
          <h6 className={"ml-2"}>What we offer</h6>
        </div>
        <SectionSliderProductCard className={"container"} />
        <Features className={""} />
        <div className="container py-16 flex flex-col gap-10 lg:gap-28 lg:flex-row lg:justify-between">
          <div className="flex flex-col">
            <h3 className={"uppercase font-semibold mb-2"}>
              Subscribe to get the latest offers!
            </h3>
            <p className={"text-sm text-[#666]"}>
              We have periodically sales and offers, don&apos;t miss out. You
              can unsubscribe at any time.
            </p>
          </div>
          <div className="flex-1 flex flex-row items-center">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col flex-1 lg:flex-row lg:items-center"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className={"flex-1"}>
                      <FormControl>
                        <Input
                          className={"rounded-none bg-[#F5F5F5]"}
                          placeholder="Enter your email address"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  className={"w-24 mt-4 rounded-none lg:ml-4 lg:mt-0"}
                  type="submit"
                >
                  Subscribe
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </main>
  );
}
