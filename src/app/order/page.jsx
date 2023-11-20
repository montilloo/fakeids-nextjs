"use client";
import React from "react";
import { format } from "date-fns";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Calendar as CalendarIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  username: z.string().min(2).max(50),
});
const Order = () => {
  const [date, setDate] = React.useState();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(values) {
    console.log(values);
  }
  return (
    <div className={"container min-h-screen "}>
      <div className="max-w-2xl">
        <Form {...form}>
          <form className={"space-y-4"} onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="firstname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Please enter your first name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="middlename"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Middle name</FormLabel>
                  <FormControl>
                    <Input placeholder="Optional" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Please enter your last name."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="dateOfBirth"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Date of birth</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-[240px] pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground",
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="heightFeet"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Height feet</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="heightInches"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Height inches</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="weight"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Weight</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* ===	Eyes === */}
            <FormField
              control={form.control}
              name="eyes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Eyes</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Black">Black</SelectItem>
                      <SelectItem value="Brown">Brown</SelectItem>
                      <SelectItem value="Blue">Blue</SelectItem>
                      <SelectItem value="Gray">Gray</SelectItem>
                      <SelectItem value="Green">Green</SelectItem>
                      <SelectItem value="Hazel">Hazel</SelectItem>
                      <SelectItem value="Maroon">Maroon</SelectItem>
                      <SelectItem value="Pink">Pink</SelectItem>
                      <SelectItem value="Multicolor">Multicolor</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* ===	Hair === */}
            <FormField
              control={form.control}
              name="hair"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Hair</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Bald">Bald</SelectItem>
                      <SelectItem value="Black">Black</SelectItem>
                      <SelectItem value="Blonde">Blonde</SelectItem>
                      <SelectItem value="Brown">Brown</SelectItem>
                      <SelectItem value="Gray">Gray</SelectItem>
                      <SelectItem value="Red">Red</SelectItem>
                      <SelectItem value="Sandy">Sandy</SelectItem>
                      <SelectItem value="White">White</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/*	=== Gender === */}
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Gender</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Male">Male</SelectItem>
                      <SelectItem value="Female">Female</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* ===	DLN ===*/}
            <FormField
              control={form.control}
              name="dln"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>DLN</FormLabel>
                  <FormControl>
                    <Input placeholder="Optional" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/*	=== Address === */}
            <FormField
              control={form.control}
              name={"address"}
              render={({ fields }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={
                        "(This is address you want on ID if you leave it blank we will make one up for you.)"
                      }
                    ></Input>
                  </FormControl>
                </FormItem>
              )}
            />

            {/*	===City===*/}
            <FormField
              control={form.control}
              name={"city"}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input placeholder={""} {...field}></Input>
                  </FormControl>
                </FormItem>
              )}
            />

            {/*	===Zip===*/}
            <FormField
              control={form.control}
              name={"zip"}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Zip</FormLabel>
                  <FormControl>
                    <Input placeholder={""} {...field}></Input>
                  </FormControl>
                </FormItem>
              )}
            />

            {/*===Picture===*/}
            <FormField
              control={form.control}
              name={"picture"}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select Picture</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={"Image size <= 3MB"}
                      type={"file"}
                      {...field}
                    ></Input>
                  </FormControl>
                </FormItem>
              )}
            />

            {/*===Signature===*/}
            <FormField
              control={form.control}
              name={"signature"}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select Signature</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={"Image size <= 3MB"}
                      type={"file"}
                      {...field}
                    ></Input>
                  </FormControl>
                </FormItem>
              )}
            />
            <div className={"space-x-2"}>
              <Button type="submit" variant={"secondary"}>
                ADD and add another
              </Button>
              <Button type="submit">ADD and checkout</Button>
              <p className={"text-sm text-neutral-400 mt-4"}>
                {" "}
                Please contact us for help if you have any questions in taking
                your order: order@idtop.ph
              </p>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Order;
