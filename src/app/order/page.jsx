"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
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

const eyesEnum = z.enum([
  "Black",
  "Brown",
  "Blue",
  "Gray",
  "Green",
  "Hazel",
  "Maroon",
  "Pink",
  "Multicolor",
]);
const hairEnum = z.enum([
  "Bald",
  "Black",
  "Blonde",
  "Brown",
  "Gray",
  "Red",
  "Sandy",
  "White",
]);
const formSchema = z.object({
  state: z.string({
    required_error: "Please select a state",
  }),
  firstname: z
    .string({
      required_error: "Please enter firstname",
      invalid_type_error: "invalid value",
    })
    .min(2)
    .max(50),
  lastname: z
    .string({
      required_error: "Please enter lastname",
      invalid_type_error: "invalid value",
    })
    .min(2)
    .max(50),
  dateOfBirth: z.date({
    required_error: "Please select a date and time",
    invalid_type_error: "That's not a date!",
  }),
  heightFeet: z.string({
    required_error: "Please enter height feet",
    invalid_type_error: "invalid value",
  }),
  heightInches: z.string({
    required_error: "Please enter heightInches",
    invalid_type_error: "invalid value",
  }),
  weight: z.string({
    required_error: "Please enter weight",
    invalid_type_error: "invalid value",
  }),
  eyes: eyesEnum,
  hair: hairEnum,
  gender: z.enum(["Male", "Female"]),
  dln: z.string({
    required_error: "Please enter dln.",
    invalid_type_error: "invalid value",
  }),
  city: z.string({
    required_error: "Please enter city.",
    invalid_type_error: "invalid value",
  }),
});
const Order = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      state: "",
      firstname: "",
      middlename: "",
      lastname: "",
      heightFeet: "",
      heightInches: "",
      weight: "",
      dln: "",
      city: "",
      zip: "",
    },
  });

  const router = useRouter();

  const handleAddAnother = () => {
    const { data, success } = formSchema.safeParse(form.getValues());
    if (!success) {
      return;
    }
    // TODO: 提交一下当前已经填写的
    form.reset();
  };

  const onSubmit = (values) => {
    // console.log(form.getValues(), "getValues onSubmit");
    console.log(values, "onSubmit values");
    router.push("/order/checkout");
  };

  return (
    <div className={"container flex justify-center min-h-screen"}>
      <div className="mx-auto">
        <div className={"font-bold space-y-2 my-10"}>
          <h3>
            <span className="text-red-600">DO NOT USE</span>@OUTLOOK.COM
            @ICLOUD.COM OR APPLE EMAILS WE CAN NOT EMAIL THAT MAKE A NEW GMAIL
            OR PROTONMAIL PLEASE!
          </h3>
          <h3 className={""}>NO PASSPORT PHOTO</h3>
          <h3>NO SELFIES PHOTO</h3>
          <h3>NO SHADOWS ON FACE</h3>
          <h3>HIGH-RESOLUTION PHOTO</h3>
          <h3>WHITE OR LIGHT COLORED BACKGROUND</h3>
          <h3>LOOKING DIRECTLY AT THE CAMERA</h3>
        </div>
        <Form {...form}>
          <form className={"space-y-4"} onSubmit={form.handleSubmit(onSubmit)}>
            {/* === state ===*/}
            <FormField
              control={form.control}
              name="state"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>State</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder={"Please select a state"} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Alabama">Alabama</SelectItem>
                      <SelectItem value="Arizona">Arizona</SelectItem>
                      <SelectItem value="California">California</SelectItem>
                      <SelectItem value="Colorado">Colorado</SelectItem>
                      <SelectItem value="Connecticut">Connecticut</SelectItem>
                      <SelectItem value="Delaware">Delaware</SelectItem>
                      <SelectItem value="Florida">Florida</SelectItem>
                      <SelectItem value="Georgia">Georgia</SelectItem>
                      <SelectItem value="Hawaii">Hawaii</SelectItem>
                      <SelectItem value="Illinois">Illinois</SelectItem>
                      <SelectItem value="Iowa">Iowa</SelectItem>
                      <SelectItem value="Maine">Maine</SelectItem>
                      <SelectItem value="Maryland">Maryland</SelectItem>
                      <SelectItem value="Michigan">Michigan</SelectItem>
                      <SelectItem value="Minnesota">Minnesota</SelectItem>
                      <SelectItem value="Mississippi">Mississippi</SelectItem>
                      <SelectItem value="Missouri">Missouri</SelectItem>
                      <SelectItem value="Montana">Montana</SelectItem>
                      <SelectItem value="Nebraska">Nebraska</SelectItem>
                      <SelectItem value="Nevada">Nevada</SelectItem>
                      <SelectItem value="New Jersey">New Jersey</SelectItem>
                      <SelectItem value="New York">New York</SelectItem>
                      <SelectItem value="North Carolina">
                        North Carolina
                      </SelectItem>
                      <SelectItem value="Ohio">Ohio</SelectItem>
                      <SelectItem value="Pennsylvania">Pennsylvania</SelectItem>
                      <SelectItem value="Rhode Island">Rhode Island</SelectItem>
                      <SelectItem value="South Carolina">
                        South Carolina
                      </SelectItem>
                      <SelectItem value="Tennessee">Tennessee</SelectItem>
                      <SelectItem value="Texas">Texas</SelectItem>
                      <SelectItem value="Utah">Utah</SelectItem>
                      <SelectItem value="Virginia">Virginia</SelectItem>
                      <SelectItem value="Wisconsin">Wisconsin</SelectItem>
                      <SelectItem value="Wyoming">Wyoming</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/*=== firstname ===*/}
            <FormField
              control={form.control}
              name="firstname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First name</FormLabel>
                  <FormControl>
                    <Input placeholder="Please enter first name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/*=== middlename ===*/}
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

            {/*===lastname===*/}
            <FormField
              control={form.control}
              name="lastname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last name</FormLabel>
                  <FormControl>
                    <Input placeholder="Please enter lastname." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/*===dateOfBirth===*/}
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
                            "w-full pl-3 text-left font-normal",
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

            {/*===heightFeet===*/}
            <FormField
              control={form.control}
              name="heightFeet"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Height feet</FormLabel>
                  <FormControl>
                    <Input placeholder="Please enter height feet." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/*===heightInches===*/}
            <FormField
              control={form.control}
              name="heightInches"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Height inches</FormLabel>
                  <FormControl>
                    <Input placeholder="Please enter heightInches" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/*===weight===*/}
            <FormField
              control={form.control}
              name="weight"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Weight</FormLabel>
                  <FormControl>
                    <Input placeholder="Please enter weight" {...field} />
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
                        <SelectValue placeholder="Please select eyes color." />
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
                        <SelectValue placeholder="Please select hair color." />
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
                    <Input placeholder="Please enter DLN." {...field} />
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
                  <FormLabel>City</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={"Please enter city."}
                      {...field}
                    ></Input>
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
                    <Input placeholder={"Optional"} {...field}></Input>
                  </FormControl>
                </FormItem>
              )}
            />

            {/*===Picture===*/}
            {/*<FormField
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
            />*/}

            {/*===Signature===*/}
            {/*<FormField
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
            />*/}
            <div className={"space-x-2"}>
              <Button variant={"secondary"} onClick={handleAddAnother}>
                ADD and add another
              </Button>
              <Button type="submit">ADD and checkout</Button>
              <p className={"text-sm text-neutral-500 mt-4"}>
                Please contact us for help if you have any questions in taking
                your order: order@usafakeid.com
              </p>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Order;
