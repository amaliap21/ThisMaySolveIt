import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  websiteUrl: z.string(),
});

const ContactUs = React.forwardRef((props, ref) => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      websiteUrl: "",
    },
  });

  return (
    <Form {...form}>
      <form className="space-y-4 bg-[#D4D4D5] py-24">
        <div className="flex flex-row justify-between items-stretch px-52 gap-40">
          {/* Contact Us */}
          <div className="flex flex-col justify-start px-25 gap-4 lg:w-[500px]">
            <div>
              <h1 className="text-black font-pt_sans lg:leading-[50px] text-[30px] lg:text-3xl font-bold ">
                Contact Us
              </h1>
              <p className="text-slate-500 italic flex break-normal text-justify font-pt_sans text-[16px] lg:text-xl font-[400]  leading-[140%]">
                Send us a message
              </p>
            </div>
            <FormField
              control={form.control}
              name="Name"
              render={({ field }) => (
                <FormItem>
                  <FormControl className="bg-white rounded-none lg: py-6">
                    <Input placeholder="Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="Email"
              render={({ field }) => (
                <FormItem>
                  <FormControl className="bg-white rounded-none lg: py-6">
                    <Input placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="Message"
              render={({ field }) => (
                <FormItem>
                  <FormControl className="bg-white rounded-none lg: py-14">
                    <Input placeholder="Message" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              variant="outline"
              className="text-white bg-[#262626] font-semibold rounded-none px-5 lg:mt-10"
            >
              Submit
            </Button>
          </div>

          {/* Social Media */}
          <div className="flex flex-col text-black gap-5 lg:w-[500px]">
            <div>
              <h1 className="text-black font-pt_sans lg:leading-[50px] text-[30px] lg:text-3xl font-bold ">
                Social Media
              </h1>
              <p className="text-slate-500 italic flex break-normal text-justify font-pt_sans text-[16px] lg:text-xl font-[400]  leading-[140%]">
                Reach us on here
              </p>
            </div>

            <div className="flex flex-wrap gap-5">
              <Image
                src="/git.png"
                alt="background atas"
                width={100}
                height={100}
                className="w-[50px] h-[50px] lg:w-[80px] lg:h-[80px] z-[2] object-center object-contain"
              ></Image>
              <Image
                src="/instagram.png"
                alt="background atas"
                width={100}
                height={100}
                className="w-[50px] h-[50px] lg:w-[80px] lg:h-[80px] z-[2] object-center object-contain"
              ></Image>
              <Image
                src="/twitter-1.png"
                alt="background atas"
                width={100}
                height={100}
                className="w-[50px] h-[50px] lg:w-[80px] lg:h-[80px] z-[2] object-center object-contain"
              ></Image>
            </div>
            <div className="flex">
              <Image
                src="/tmsi-1.png"
                alt="background atas"
                width={200}
                height={100}
                className="w-[100px] h-[50px] lg:w-[200px] lg:h-[100px] z-[2] object-center object-contain"
              ></Image>
            </div>
            <div className="flex flex-col justify-center gap-5">
              <div className="flex flex-row items-center gap-5">
                <Image
                  src="/phone-alt.png"
                  alt="background atas"
                  width={50}
                  height={50}
                  className="w-[25px] h-[25px] lg:w-[50px] lg:h-[50px] z-[2] object-center object-contain"
                ></Image>
                <p className="text-[#666666] underline">+6281293992929</p>
              </div>
              <div className="flex flex-row items-center gap-5">
                <Image
                  src="/envelope.png"
                  alt="background atas"
                  width={50}
                  height={50}
                  className="w-[25px] h-[25px] lg:w-[50px] lg:h-[50px] z-[2] object-center object-contain"
                ></Image>
                <p className="text-[#666666] underline">rpd@gmail.com</p>
              </div>
            </div>

          </div>
        </div>
      </form>
    </Form>
  );
});

ContactUs.displayName = 'ContactUs';
export default ContactUs;