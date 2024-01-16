import Image from "next/image";
import React from 'react';
import IdeasCard from "./ideas";

const Hero = () => {
    const ideas = [
        {
            subTitle: "Ideas",
            buttonDescription: "See More",
        },
    ]

    return (
        <div className="flex flex-col gap-5 xl:px-20">
            <div className="w-full flex flex-col-reverse items-center justify-center lg:items-start lg:flex-row lg:justify-start lg:gap-5 2xl:gap-[275px]">
                <div className="flex-1 flex flex-col justify-start px-25 my-auto">
                    <h1 className="text-black font-pt_sans lg:leading-[70px] text-[30px] lg:text-6xl font-bold ">
                        Solve It Now
                    </h1>
                    <p className="text-slate-500 italic mt-[15px] flex break-normal text-left font-pt_sans text-[16px] lg:text-3xl font-[400]  leading-[140%]">
                        There are thousands problems in your country, your idea may solve one of them!
                    </p>
                </div>
                <Image
                    src="/Idea.png"
                    alt="background atas"
                    width={661}
                    height={626}
                    className="w-[225px] h-[225px] lg:w-[400px] drop-shadow-[2px_5px_4px_12px_#FFFFFF] lg:h-[400px] z-[2] object-center object-contain"
                ></Image>
            </div>

            {ideas.map((idea, index) => (
                <IdeasCard
                    key={index}
                    subTitle={idea.subTitle}
                    buttonDescription={idea.buttonDescription}
                />
            ))}
        </div>
    );
};

export default Hero;