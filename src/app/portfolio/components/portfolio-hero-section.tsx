"use client";

import React from 'react'
import { DefaultButton } from '@/app/ReusableComponents/UI'
import { ArrowRight, Globe } from 'lucide-react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { IconBrandAppleFilled, IconBrandAndroid } from '@tabler/icons-react';
import Autoplay from 'embla-carousel-autoplay';
import Link from 'next/link';
import { cn } from "@/lib/utils"
import { caseStudies } from '@/app/Components/CaseStudies/case-studies-data';

export default function PortfolioHeroSection() {

    // function for rendering the icons according to the available platforms
    const renderPlatformIcons = (platforms: string[]) => {
        return (
            <div className="flex items-center gap-2 mb-4 md:mb-5">
                {platforms.map((platform, index) => {
                    let icon = null;
                    let colorClass = "";

                    if (platform === "Android") {
                        icon = <IconBrandAndroid size={16} className="text-emerald-400" />;
                        colorClass = "bg-emerald-500/10 border-emerald-500/20";
                    } else if (platform === "Web") {
                        icon = <Globe size={16} className="text-sky-400" />;
                        colorClass = "bg-sky-500/10 border-sky-500/20";
                    } else if (platform === "Ios") {
                        icon = <IconBrandAppleFilled size={16} className="text-zinc-200" />;
                        colorClass = "bg-zinc-500/15 border-zinc-500/20";
                    }

                    if (!icon) return null;

                    return (
                        <div
                            key={index}
                            className={cn(
                                "flex items-center justify-center p-2 rounded-xl border backdrop-blur-md shadow-inner transition-transform duration-300 hover:scale-105",
                                colorClass
                            )}
                        >
                            {icon}
                        </div>
                    );
                })}
            </div>
        );
    };

    return (
        <div className="relative w-full min-h-fit md:min-h-screen mt-[30px] flex items-center justify-center py-6">
            <Carousel
                plugins={[
                    Autoplay({ delay: 5000, stopOnInteraction: false }),
                ]}
                opts={{ loop: true }}
                className="group relative w-full h-fit overflow-hidden px-4 md:px-8"
            >
                <CarouselContent>
                    {caseStudies.map((slide, index) => (
                        <CarouselItem key={index}>
                            <div
                                style={{ backgroundColor: slide.color }}
                                className="group/slide relative w-full aspect-9/12 sm:aspect-16/10 md:aspect-19/8 rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-500 ring-1 ring-white/10"
                            >
                                {/* Slide Image */}
                                <img
                                    src={slide.image}
                                    alt={slide.title}
                                    className="absolute inset-0 w-full h-full object-cover rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] hidden md:block transition-transform duration-1000 ease-out group-hover/slide:scale-105"
                                />

                                {/* Fallback solid background pattern for mobile view when image is hidden */}
                                <div className="absolute inset-0 opacity-[0.03] pointer-events-none md:hidden bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

                                {/* Dark dramatic gradient mask for high text-readability */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/10 flex flex-col justify-end p-5 sm:p-8 md:p-12 lg:p-16 text-white" />

                                {/* Slide Content Area */}
                                <div className="absolute inset-0 z-10 flex flex-col justify-end p-5 sm:p-8 md:p-12 lg:p-16 text-white">
                                    {renderPlatformIcons(slide.platforms)}

                                    <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-2 md:mb-4 max-w-4xl leading-tight">
                                        {slide.title}
                                    </h2>

                                    <p className="text-xs sm:text-sm md:text-base lg:text-lg text-zinc-200/90 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/5 mb-6 md:mb-8 font-normal leading-relaxed line-clamp-3 sm:line-clamp-4 md:line-clamp-none">
                                        {slide.description}
                                    </p>

                                    <div className="flex">
                                        <Link href={slide.pageAddress} className="inline-block">
                                            <DefaultButton
                                                title="Read Case Study"
                                                icon={ArrowRight}
                                                customColor="bg-white text-black hover:bg-neutral-100 hover:shadow-xl hover:shadow-white/5 active:scale-95 font-semibold text-xs sm:text-sm tracking-wide shadow-lg transition-all duration-300 rounded-xl"
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                {/* Carousel Controls styled to match modern Shadcn components with premium glassmorphic effect */}
                <CarouselPrevious className="left-6 top-1/2 -translate-y-1/2 hidden md:flex h-12 w-12 items-center justify-center rounded-full bg-background/40 hover:bg-background/90 text-foreground border-border/30 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-xl hover:scale-105" />
                <CarouselNext className="right-6 top-1/2 -translate-y-1/2 hidden md:flex h-12 w-12 items-center justify-center rounded-full bg-background/40 hover:bg-background/90 text-foreground border-border/30 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-xl hover:scale-105" />
            </Carousel>
        </div>
    )
}