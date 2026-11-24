"use client"
import { DefaultButton, GradientBG } from '@/app/ReusableComponents/UI'
import { SectionHeading } from '@/app/ReusableComponents/section-heading';
import { Award, AwardIcon } from 'lucide-react'
import React from 'react'
import FlipCard from '@/app/Components/FlipCard'
import { InfiniteMovingCardsPlatformRatings } from '@/components/ui/infinte-moving-cards-platform-ratings'
import { usePathname, useRouter } from 'next/navigation'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { awards } from '@/app/awards/components/awards-data'
import { ASSETS_BASE_URL } from '@/lib/variables'


export default function HomeAwards() {
    const pathname = usePathname();
    const router = useRouter()
    return (
        <div className='w-full h-fit flex justify-center relative overflow-hidden py-8'>
            <div className='container w-full h-[600px] flex flex-col gap-6 relative overflow-x-hidden overflow-y-clip z-10'>
                <SectionHeading primaryHeading='Our Recognized Achievements' isCentered className='relative mb-10' customColor='text-[#ED9C00]' secondaryHeading='Awards & Certifications' icon={Award} />
                <img
                    src={`${ASSETS_BASE_URL}/tempAssets/awards.png?updatedAt=1738648577604`}
                    alt='kriscent awards'
                    className='absolute top-0 right-[24%] z-[-1] hidden md:block md:w-[100px] w-[60px] md:h-[100px] h-[60px]'
                    loading='lazy'
                />


                <div className='flex flex-wrap justify-center gap-5 md:mb-10 mb-0'>
                    {
                        awards.map((_, index) => {
                            return (
                                <TooltipProvider key={index}>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <div className='relative w-[120px] h-[120px] md:w-[150px] md:h-[150px]' key={index}>
                                                <FlipCard flipDirection='horizontal' className='relative'>
                                                    <img
                                                        src={`${ASSETS_BASE_URL}/tempAssets/1ApjuJ-award-amazing-image-download%201.webp?updatedAt=1724763918507`}
                                                        alt='kriscent awards'
                                                        className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full object-contain'
                                                        loading='lazy'
                                                    />
                                                    <img src={_.imgUrl} alt={_.title || "Award"} className='w-[60px] h-[60px] md:w-[80px] md:h-[80px] absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-[-55%] object-contain' loading='lazy' />
                                                </FlipCard>
                                            </div>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p className="text-center text-sm md:text-base">{_.title}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            );
                        })
                    }
                </div>

                <InfiniteMovingCardsPlatformRatings />

                {
                    pathname !== '/awards' && <div className='w-full flex justify-center'>
                        <DefaultButton title='View All Awards' customColor='bg-[#FFE6B6] text-black hover:bg-[#FFE6B6]/80 border border-[#FFD27B]' icon={AwardIcon} onClick={() => { router.push('/awards') }} />
                    </div>
                }
            </div>
            <GradientBG />
        </div >
    )
}
