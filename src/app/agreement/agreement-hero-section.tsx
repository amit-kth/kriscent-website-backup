"use client";

import React from 'react'
import { ImageBackground } from '../Components/ImageBg'
import { SectionHeading } from '@/app/ReusableComponents/section-heading';
import { Briefcase } from 'lucide-react'
import { ASSETS_BASE_URL } from '@/lib/variables';

export default function AgreementHeroSection() {
    return <div className='w-full h-[70vh] bg-primary/10 relative'>
        <ImageBackground src={`${ASSETS_BASE_URL}/tempAssets/heroSections/hire.webp`} alt='agreement hero section image kriscent techno hub'/>
        <div className='2xl:w-[1000px] md:w-[700px] w-[90%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center'>
            <SectionHeading
                primaryHeading='END-USER LICENSE AGREEMENT'
                secondaryHeading='AGREEMENT'
                icon={Briefcase}
                isCentered
                highlightedString='AGREEMENT'
                customColor='text-white'
                glowEffect={false}
                markPrimaryHeadingAsH1Tag={true}
            />
        </div>
    </div>
}
