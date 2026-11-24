"use client";

import { ImageBackground } from '@/app/Components/ImageBg';
import { DefaultButton, FadeDownToUpAnimation } from '@/app/ReusableComponents/UI';
import { SectionHeading } from '@/app/ReusableComponents/section-heading';
import React from 'react';
import { ArrowRight, LucideIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface DynamicHeroSectionProps {
    primaryHeading: string;
    secondaryHeading: string;
    description: string;
    icon: LucideIcon;
    imageSrc: string;
    markPrimaryHeadingAsH1Tag?: boolean;
    highlightedString?: string
}

const DynamicServiceHeroSection: React.FC<DynamicHeroSectionProps> = ({
    primaryHeading,
    secondaryHeading,
    description,
    highlightedString,
    icon,
    imageSrc,
    markPrimaryHeadingAsH1Tag = false

}) => {
    const router = useRouter()
    return (
        <div className='w-full h-[98vh] bg-primary/10 relative'>
            <ImageBackground src={imageSrc} alt='best design service agency, kriscent design services' />
            <div className='2xl:w-[1000px] md:w-[700px] w-[90%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center'>
                <SectionHeading
                    primaryHeading={primaryHeading}
                    secondaryHeading={secondaryHeading}
                    icon={icon}
                    isCentered
                    markPrimaryHeadingAsH1Tag={markPrimaryHeadingAsH1Tag}
                    highlightedString={highlightedString} // You can make this dynamic as well if needed
                    customColor='text-white'
                    glowEffect={false}
                />
                <FadeDownToUpAnimation>
                    <p className='text-white text-center mb-4 backdrop-blur-xs'>
                        {description}
                    </p>
                </FadeDownToUpAnimation>
                <Link href='/quotation'>
                    <DefaultButton
                        title='Get a quote'
                        icon={ArrowRight}
                    />
                </Link>
            </div>
        </div>
    );
};

export default DynamicServiceHeroSection;
