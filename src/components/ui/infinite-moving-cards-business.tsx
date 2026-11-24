"use client";

import { cn } from "@/lib/utils";
import React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { GlassPanel } from "@/app/Components/glass-panel";

type IndustryItem = {
    img: string;
    title: string;
    description: string;
};

type InfiniteMovingCardsBusinessProps = {
    items: IndustryItem[];
    className?: string;
};

export const InfiniteMovingCardsBusiness = ({
    items,
    className,
}: InfiniteMovingCardsBusinessProps) => {
    const autoplay = React.useRef(
        Autoplay({
            delay: 2500,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
        })
    );

    return (
        <div className={cn("relative z-0 w-full pt-5 md:pt-7 2xl:pt-9", className)}>
            <Carousel
                opts={{
                    // loop: true,
                    align: "start",
                }}
                plugins={[autoplay.current]}
                className="w-full"
            >
                <CarouselContent className="-ml-4 md:-ml-5 2xl:-ml-6">
                    {items.map((item, idx) => (
                        <CarouselItem
                            key={`${item.title}-${idx}`}
                            className={cn(
                                "pl-4 md:pl-5 2xl:pl-6",
                                "basis-[40%]",
                                "xs:basis-[68%]",
                                "sm:basis-[250px]",
                                "md:basis-[250px]",
                                "lg:basis-[245px]",
                                "xl:basis-[245px]",
                                "2xl:basis-[285px]"
                            )}
                        >
                            <IndustryCard item={item} />
                        </CarouselItem>
                    ))}
                </CarouselContent>

                <div className="pointer-events-none absolute -top-32 right-0 hidden items-center gap-2 md:flex">
                    <CarouselPrevious className="pointer-events-auto static size-9 translate-y-0 border-primary-foreground/15 bg-primary-foreground/10 text-primary-foreground backdrop-blur-xl hover:bg-primary-foreground/15 hover:text-primary-foreground" />
                    <CarouselNext className="pointer-events-auto static size-9 translate-y-0 border-primary-foreground/15 bg-primary-foreground/10 text-primary-foreground backdrop-blur-xl hover:bg-primary-foreground/15 hover:text-primary-foreground" />
                </div>
            </Carousel>
        </div>
    );
};

function IndustryCard({ item }: { item: IndustryItem }) {
    return (
        <article className="group h-[290px] w-full md:h-[315px] lg:h-[330px] 2xl:h-[380px]">
            <GlassPanel
                radius={30}
                intensity="soft"
                className={cn(
                    "relative flex h-full w-full flex-col justify-start overflow-hidden rounded-[28px]",
                    "border-primary-foreground/18 p-4 text-primary-foreground",
                    "transition-all duration-300 ease-out",
                    "md:rounded-[30px] md:p-5",
                    "2xl:rounded-[34px] 2xl:p-6"
                )}
            >
                {/* Image tag kept for future use, but hidden for now */}
                <img
                    src={item.img}
                    alt=""
                    className="absolute -right-10 -bottom-10"
                    loading="lazy"
                    draggable={false}
                    aria-hidden="true"
                />

                {/* Frosted blue surface */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-primary/18"
                />

                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 top-0 h-2/3 bg-gradient-to-b from-foreground/45 to-transparent"
                />

                <div className="relative z-10">
                    <h3 className="text-[18px] font-bold leading-tight tracking-[-0.02em] text-primary-foreground md:text-[20px] 2xl:text-[24px]">
                        {item.title}
                    </h3>

                    <p className="mt-1.5 max-w-[210px] text-[12px] font-medium leading-[1.35] text-primary-foreground/78 md:text-[13px] 2xl:mt-2 2xl:max-w-[260px] 2xl:text-[15px]">
                        {item.description}
                    </p>
                </div>
            </GlassPanel>
        </article>
    );
}