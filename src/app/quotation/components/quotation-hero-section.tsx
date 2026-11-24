"use client";

import { ImageBackground } from '@/app/Components/ImageBg'
import { FadeDownToUpAnimation } from '@/app/ReusableComponents/UI'
import { SectionHeading } from '@/app/ReusableComponents/section-heading';
import { ASSETS_BASE_URL } from '@/lib/variables';
import { Circle, MessageSquareQuote, Waypoints } from 'lucide-react'

export default function QuotationHeroSection() {

    const steps = [
        {
            number: 1,
            title: "First Contact",
            description: "Our team will contact you in no time.",
        },
        {
            number: 2,
            title: "Requirement Analysis",
            description: "Discuss your project requirements with experts.",
        },
        {
            number: 3,
            title: "Create a proposal",
            description: "Based on your requirements, we create a proposal.",
        },
    ]

    return <div className='w-full h-[90vh] bg-primary/10 relative'>
        <ImageBackground src={`${ASSETS_BASE_URL}/tempAssets/revamp/hero-bg.webp?updatedAt=1786711312921`} alt='quotation hero section image kriscent techno hub' />
        <div className='2xl:w-[1000px] md:w-[700px] w-[90%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center'>
            <SectionHeading
                primaryHeading='Start Your Project in 3 Simple Steps '
                secondaryHeading='Get a quotation'
                icon={MessageSquareQuote}
                isCentered
                highlightedString='Project'
                customColor='text-white'
                glowEffect={false}
                markPrimaryHeadingAsH1Tag={true}
            />
            {/* <FadeDownToUpAnimation>
                <p className='text-white text-center mb-4 text-sm md:text-lg'>
                    At Kriscent Techno Hub, we provide cutting-edge IT solutions, specializing in software, web, and mobile app development. Our goal is to empower businesses with innovative technology tailored to their unique needs, ensuring growth and success.</p>
            </FadeDownToUpAnimation> */}


            <div className="p-4 md:p-8 rounded-lg">
                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-row justify-between items-start gap-4">
                        {steps.map((step, index) => (
                            <FadeDownToUpAnimation key={step.number} className="flex flex-col items-center text-center" delay={index * 0.1}>
                                <div className="relative">
                                    <Circle className="w-10 h-10 md:w-16 md:h-16 text-primary fill-primary" />
                                    <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-lg md:text-xl">
                                        {step.number}
                                    </span>
                                </div>
                                <h3 className="mt-2 text-primary font-semibold leading-5 text-lg md:text-xl">{step.title}</h3>
                                <p className="mt-1 text-white text-sm md:text-base max-w-[200px]">{step.description}</p>

                            </FadeDownToUpAnimation>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
}