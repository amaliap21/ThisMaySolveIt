"use client";
import React, { useState, useEffect } from 'react';
import IconCard from "@/components/icon-card";
import { Button } from './ui/button';

const IdeasCard = ({
    subTitle,
    buttonDescription,
}) => {
    const [showAllEvents, setShowAllEvents] = useState(buttonDescription !== 'See More');

    const events = [
        {

            linkText: (
                <span>
                    Philosophiae Quidem
                    <br />
                    Philosoph
                </span>
            ),
            linkUrl: "/",
            imageAlt: "Recycle",
            imageUrl: "/ideas-1.png",
            width: 200,
            height: 200,
        },
        {
            linkText: (
                <span>
                    Philosophiae Quidem
                    <br />
                    Philosoph
                </span>
            ),
            linkUrl: "/",
            imageAlt: "Ayam",
            imageUrl: "/ideas-2.png",
            width: 200,
            height: 200,
        },
        {
            linkText: (
                <span>
                    Philosophiae Quidem
                    <br />
                    Philosoph
                </span>
            ),
            linkUrl: "/",
            imageAlt: "Basket",
            imageUrl: "/ideas-3.png",
            width: 200,
            height: 200,
        },
        {
            linkText: (
                <span>
                    Philosophiae Quidem
                    <br />
                    Philosoph
                </span>
            ),
            linkUrl: "/",
            imageAlt: "Tanaman",
            imageUrl: "/ideas-4.png",
            width: 200,
            height: 200,
        },
        {
            linkText: (
                <span>
                    Philosophiae Quidem
                    <br />
                    Philosoph
                </span>
            ),
            linkUrl: "/",
            imageAlt: "Arduino",
            imageUrl: "/ideas-5.png",
            width: 200,
            height: 200,
        },
        {
            linkText: (
                <span>
                    Philosophiae Quidem
                    <br />
                    Philosoph
                </span>
            ),
            linkUrl: "Ideas/Ideas-6",
            imageAlt: "Buku",
            imageUrl: "/ideas-6.png",
            width: 200,
            height: 200,
        },
        {

            linkText: (
                <span>
                    Philosophiae Quidem
                    <br />
                    Philosoph
                </span>
            ),
            linkUrl: "/",
            imageAlt: "Recycle",
            imageUrl: "/ideas-1.png",
            width: 200,
            height: 200,
        },
        {
            linkText: (
                <span>
                    Philosophiae Quidem
                    <br />
                    Philosoph
                </span>
            ),
            linkUrl: "/",
            imageAlt: "Ayam",
            imageUrl: "/ideas-2.png",
            width: 200,
            height: 200,
        },
        {
            linkText: (
                <span>
                    Philosophiae Quidem
                    <br />
                    Philosoph
                </span>
            ),
            linkUrl: "/",
            imageAlt: "Basket",
            imageUrl: "/ideas-3.png",
            width: 200,
            height: 200,
        },
    ];

    const displayedEvents = showAllEvents ? events : events.slice(0, 6);

    const handleButtonClick = () => {
        setShowAllEvents(!showAllEvents);
    };

    useEffect(() => {
        // Automatically show all events if buttonDescription is not 'See More'
        if (buttonDescription !== 'See More') {
            setShowAllEvents(true);
        }
    }, [buttonDescription]);

    const renderButton = () => {
        if (buttonDescription === 'See More' || buttonDescription === 'See Less') {
            return (
                <Button
                    type="submit"
                    variant="outline"
                    onClick={handleButtonClick}
                    className="mt-auto w-[180px] h-[30px] lg:w-[170px] lg:h-[60px] bg-[#262626] text-white duration-300 transition font-montserrat text-sm lg:text-[25px] font-semibold rounded-[5px] px-[20px]"
                >
                    {showAllEvents ? 'See Less' : buttonDescription}
                </Button>
            );
        }
        return null;
    };

    return (
        <div className="flex flex-col items-center justify-center">
            {events.length > 6 && (
                <div className="w-full flex flex-col items-between justify-between lg:items-between lg:flex-row lg:justify-between lg:gap-20 2xl:gap-[300px] mb-5 md:mb-8 lg:mb-10">
                    <h2 className="text-black font-pt_sans lg:leading-[70px] text-[30px] lg:text-5xl font-bold ">
                        {subTitle}
                    </h2>
                    {renderButton()}
                </div>
            )}

            <div className="flex flex-wrap items-center justify-center w-full gap-x-10 2xl:gap-x-24 gap-y-20 lg:gap-y-16">
                {/* Mapping and rendering each event */}
                {displayedEvents.map((event, index) => (
                    <IconCard
                        key={index}
                        linkText={event.linkText}
                        linkUrl={event.linkUrl}
                        imageAlt={event.imageAlt}
                        imageUrl={event.imageUrl}
                        width={event.width}
                        height={event.height}
                    />
                ))}
            </div>
        </div>
    );
};

export default IdeasCard;
