"use client";

import { ImageBackground } from '@/app/Components/ImageBg';
import { FadeDownToUpAnimation } from '@/app/ReusableComponents/UI';
import { SectionHeading } from '@/app/ReusableComponents/section-heading';
import React from 'react';
import { UsersRound } from 'lucide-react';
import NumberTicker from '@/components/ui/number-ticker';
import { ASSETS_BASE_URL } from '@/lib/variables';

const ClientsHeroSection = () => {
    return (
        <div className='w-full h-[80vh] bg-primary/10 relative'>
            <ImageBackground src={`${ASSETS_BASE_URL}/tempAssets/heroSections/client-hero.webp`} className='brightness-90' alt='clients hero section image kriscent techno hub' />
            <div className='2xl:w-[1000px] md:w-[700px] w-[90%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center'>
                <SectionHeading
                    secondaryHeading={"Our Valued Clients"}
                    primaryHeading={"Partners in Growth and Innovation"}
                    icon={UsersRound}
                    isCentered
                    markPrimaryHeadingAsH1Tag={true}
                    highlightedString={"Growth"} // You can make this dynamic as well if needed
                    customColor='text-white'
                    glowEffect={false}
                />
                <FadeDownToUpAnimation>
                    <p className='text-white text-center'>
                        We are proud to partner with a diverse range of clients, from startups to established enterprises, to deliver innovative solutions that drive growth and success.
                    </p>
                </FadeDownToUpAnimation>


                <FadeDownToUpAnimation className="flex items-center justify-center">
                    <RatingDisplay />
                </FadeDownToUpAnimation>

                {/* {buttonAction && <DefaultButton
                    onClick={buttonAction}
                    title='Explore Now'
                />} */}
            </div>
        </div>
    );
};

export default ClientsHeroSection;

interface RatingItemProps {
    score: number
    total?: number
    label: string
    iconUrl?: string
}


function RatingDisplay() {
    function RatingItem({
        score,
        total = 5,
        label,
        iconUrl
    }: RatingItemProps) {
        return (
            <div className="flex flex-col items-center gap-2">
                <img src={iconUrl} alt={label} className="md:w-6 md:h-6 w-4 h-4" />
                <div className="md:text-xl text-sm font-bold text-nowrap">
                    <NumberTicker value={score} decimalPlaces={1} className='md:text-xl text-sm font-bold text-foreground' />/{total}

                </div>
                <div className="md:text-sm text-xs text-foreground text-center">
                    {label}
                </div>
            </div>
        )
    }
    return <div className="p-4 rounded-lg md:mt-10 mt-5 backdrop-blur-xs bg-white/80">
        <div className="flex justify-between items-start md:gap-14 gap-5">
            <RatingItem
                score={5}
                label="Clutch"
                iconUrl={`${ASSETS_BASE_URL}/tempAssets/clutch.png?updatedAt=1724492726508`}
            />
            <RatingItem
                score={4.3}
                label="Google"
                iconUrl={`${ASSETS_BASE_URL}/tempAssets/google.png`}
            />
            <RatingItem
                score={4.6}
                label="Ambition Box"
                iconUrl={`${ASSETS_BASE_URL}/tempAssets/ambition.png?updatedAt=1737024385678`}
            />

            <RatingItem
                score={4.4}
                label="Just Dial"
                iconUrl={`${ASSETS_BASE_URL}/tempAssets/justdial.webp`}
            />
            <RatingItem
                score={4.9}
                label="Meta"
                iconUrl={`${ASSETS_BASE_URL}/tempAssets/meta-icon.webp`}
            />
        </div>
    </div>
}