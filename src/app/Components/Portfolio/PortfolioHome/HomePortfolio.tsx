"use client"
import { TopProjects } from '@/app/portfolio/components/projectData';
import { DefaultButton } from '@/app/ReusableComponents/UI';
import { SectionHeading } from '@/app/ReusableComponents/section-heading';
import { VerticalInfiniteMovingCards } from '@/components/ui/infinite-moving-cards-vertical';
import { Carousel, CarouselMainContainer, CarouselNext, CarouselPrevious, CarouselThumbsContainer, SliderMainItem, SliderThumbItem } from '@/components/ui/shad-carousel';
import { Tabs } from '@/components/ui/tabs';
import { ArrowRight, Briefcase } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react'


export default function HomePortfolio() {
    const router = useRouter()
    return (
        <div className="w-full flex justify-center h-[840px] max-h-[1000px] bg-[#f5f5f5] overflow-hidden z-0">
            <div className='container w-full flex flex-col h-full'>
                <div className="flex lg:flex-row flex-col w-full h-full">
                    <div className="lg:w-1/2 w-full p-4 sm:p-6 h-full flex flex-col justify-center">
                        <SectionHeading
                            primaryHeading='Showcasing Our Best Work'
                            secondaryHeading='Our Portfolio'
                            icon={Briefcase}
                            highlightedString='Best Work'
                        />
                        <DefaultButton title='Explore More' icon={ArrowRight} onClick={() => { router.push('portfolio') }} />
                    </div>

                    {/* vertical alignment for desktop devices */}
                    <div className="lg:w-1/2 w-full p-4 sm:p-6 h-full lg:flex hidden justify-between">
                        <VerticalInfiniteMovingCards
                            items={TopProjects.slice(0, TopProjects.length / 2)}
                            direction="up"
                            speed="slow"
                            className="w-[48%]"
                        />
                        <VerticalInfiniteMovingCards
                            items={TopProjects.slice(TopProjects.length / 2)}
                            direction="down"
                            speed="slow"
                            className="w-[48%]"
                        />
                    </div>

                    {/* horizontal alignment for mobile and tablet devices */}
                    <div className="lg:w-1/2 w-full p-4 sm:p-6 h-full lg:hidden flex justify-between">
                        <VerticalInfiniteMovingCards
                            items={TopProjects}
                            direction="up"
                            speed="slow"
                            className="w-full sm:w-[80%] mx-auto"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}