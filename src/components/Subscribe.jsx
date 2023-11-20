import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  email: z.string().email("Please enter the correct email address"),
});
const Subscribe = () => {
  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  // 2. Define a submit handler.
  const onSubmit = (values) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  };
  return (
    <div className="container py-16 flex flex-col gap-10 lg:gap-28 lg:flex-row lg:justify-between">
      <div className="flex flex-col">
        <h3 className={"uppercase font-semibold mb-2"}>
          Subscribe to get the latest offers!
        </h3>
        <p className={"text-sm text-[#666]"}>
          We have periodically sales and offers, don&apos;t miss out. You can
          unsubscribe at any time.
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
  );
};

export default Subscribe;
