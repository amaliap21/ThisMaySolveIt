import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"

export function AddIdeas() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Image
                    src="/plus-circle.png"
                    alt="background atas"
                    width={40}
                    height={40}
                    className="w-[20px] h-[20px] lg:w-[40px] lg:h-[40px] z-[2] object-center object-contain hover:cursor-pointer"
                ></Image>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                    <DialogTitle>Propose your idea</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-row justify-between gap-5">
                        {/* Email */}
                        <div className="flex flex-col justify-start items-start w-full gap-2">
                            <Label htmlFor="email" className="text-right">
                                Email
                            </Label>
                            <Input
                                id="email"
                                className="col-span-3"
                            />
                        </div>
                        {/* Category */}
                        <div className="flex flex-col justify-start items-start w-full gap-2">
                            <Label htmlFor="category" className="text-right">
                                Category
                            </Label>
                            <Input
                                id="category"
                                className="col-span-3"
                            />
                        </div>
                    </div>
                    {/* Idea Title */}
                    <div className="flex flex-col justify-start items-start w-full gap-2">
                        <Label htmlFor="idea-title" className="text-right">
                            Idea Title
                        </Label>
                        <Input
                            id="idea-title"
                            className="col-span-3"
                        />
                    </div>
                    {/* Problem Statement */}
                    <div className="flex flex-col justify-start items-start w-full gap-2">
                        <Label htmlFor="problem-statement" className="text-right">
                            Problem Statement
                        </Label>
                        <Input
                            id="problem-statement"
                            className="col-span-3"
                        />
                    </div>
                    {/* Idea Illustration (jpg, jpeg, png, svg) */}
                    <div className="flex flex-col justify-start items-start w-full gap-2">
                        <Label htmlFor="idea-llustration" className="text-right">
                            Idea Illustration (jpg, jpeg, png, svg)
                        </Label>
                        <div className="flex flex-row w-full gap-1">

                            <Input
                                id="idea-llustration"
                                className="col-span-3"
                            />
                            <Button
                                type="submit"
                                variant="outline"
                                className="text-white lg:text-xs bg-[#262626]"
                            >
                                Browse Files
                            </Button>
                        </div>
                    </div>
                    {/* Idea Description (Explain your solution here) */}
                    <div className="flex flex-col justify-start items-start w-full gap-2">
                        <Label htmlFor="idea-description" className="text-right">
                            Idea Description (Explain your solution here)
                        </Label>
                        <Input
                            id="idea-description"
                            className="col-span-3 pb-24 pt-5"
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit" className="w-full">Submit</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
