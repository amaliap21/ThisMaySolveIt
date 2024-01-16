"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import Image from "next/image";
import { Button } from "./ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { AddIdeas } from "./add-idea";

const formSchema = z.object({
    websiteUrl: z.string(),
});

const SearchIdeas = () => {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            websiteUrl: "",
        },
    });

    return (
        <Form {...form}>
            <form className="space-y-8 flex flex-col justify-center items-center w-full m-14">
                <h1 className="text-black text-center font-pt_sans lg:leading-[50px] text-[30px] lg:text-5xl font-bold">
                    Find or Create Ideas
                </h1>

                {/* Search Input */}
                <div className="flex flex-grow flex-row justify-center items-center gap-3 p-3 bg-[#D4D4D5] rounded-full w-5/6">
                    <FormField
                        control={form.control}
                        name="Search"
                        render={({ field }) => (
                            <FormItem className="flex flex-grow justify-center bg-white rounded-full w-full">
                                <FormControl className=" rounded-full">
                                    <Input placeholder="Search" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Image
                        src="/search.png"
                        alt="background atas"
                        width={40}
                        height={40}
                        className="w-[20px] h-[20px] lg:w-[40px] lg:h-[40px] z-[2] object-center object-contain hover:cursor-pointer"
                    ></Image>
                    <AddIdeas />
                </div>

                {/* Categories */}
                <div className="flex flex-row justify-around items-center lg:gap-28">
                    <Button
                        type="submit"
                        variant="outline"
                        className="text-black lg:text-lg bg-[#D4D4D5] lg:w-[180px] font-semibold rounded-full py-5"
                    >
                        Health
                    </Button>
                    <Button
                        type="submit"
                        variant="outline"
                        className="text-black lg:text-lg bg-[#D4D4D5] lg:w-[180px] font-semibold rounded-full py-5"
                    >
                        Environment
                    </Button>
                    <Button
                        type="submit"
                        variant="outline"
                        className="text-black lg:text-lg bg-[#D4D4D5] lg:w-[180px] font-semibold rounded-full py-5"
                    >
                        Social
                    </Button>
                    <Button
                        type="submit"
                        variant="outline"
                        className="text-black lg:text-lg bg-[#D4D4D5] lg:w-[180px] font-semibold rounded-full py-5"
                    >
                        Education
                    </Button>
                </div>
            </form>
        </Form>
    );
};

export default SearchIdeas;
