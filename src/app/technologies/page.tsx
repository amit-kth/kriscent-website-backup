"use client";

import React from 'react'
import { ImageBackground } from '../Components/ImageBg';
import { SectionHeading } from '@/app/ReusableComponents/section-heading';
import { FadeDownToUpAnimation } from '../ReusableComponents/UI';
import { Briefcase, Cpu, Link } from 'lucide-react';
import TechShowcase from './testshowcase';
import BusinessesSlider from '../Components/BusinessesSlider';
import { SEO } from '@/lib/seo';
import { ASSETS_BASE_URL, metadata } from '@/lib/variables';

export default function Technologies() {
    return <>
        <SEO metadata={metadata.technologiesPage}>
            <main>
                <div className='w-full h-[40vh] md:h-[80vh] min-h-[400px] bg-[#eb7e6f] relative'>
                    <ImageBackground src={`${ASSETS_BASE_URL}/tempAssets/heroSections/tech-hero.webp`} className='hidden md:block' alt='technologies hero section image kriscent techno hub' />
                    <div className='2xl:w-[800px] md:w-[700px] w-[90%] absolute top-1/2 -translate-y-1/2 md:left-[100px] left-[20px] flex flex-col items-center justify-center'>
                        <SectionHeading
                            primaryHeading='Technologies That Power Possibilities'
                            secondaryHeading='Technologies'
                            markPrimaryHeadingAsH1Tag={true}
                            icon={Cpu}
                            highlightedString='Technologies'
                            highlightedColor='white'
                            customColor='text-white'
                            glowEffect={false}
                        />
                    </div>
                </div>

                <div className='h-10 mb-10'></div>
                <BusinessesSlider />

                <div className='h-10 mb-10'></div>
                <TechShowcase />
            </main>
        </SEO>
    </>

}
