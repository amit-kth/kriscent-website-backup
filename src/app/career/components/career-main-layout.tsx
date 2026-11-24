"use client";

import Testimonials from '@/app/Components/Testimonials/Testimonials';
import JobListings from './jobs-listing';
import HiringProcess from './hiring-process';
import BenefitsSection from './benefits';
import HeroSectionGlobal from '@/app/ReusableComponents/hero-section-global';
import { Briefcase } from 'lucide-react';
import { ASSETS_BASE_URL } from '@/lib/variables';
export default function CareerMainLayout() {
    return <div className='overflow-x-hidden'>
        <HeroSectionGlobal
            primaryHeading="Join Our Team, Build Your Career at Kriscent Techno Hub"
            secondaryHeading="Join Our Team"
            icon={Briefcase}
            isCentered
            highlightedString="Career"
            customColor="text-white"
            imageSrc={`${ASSETS_BASE_URL}/tempAssets/heroSections/hire.webp`}
            description="Join our dynamic team and be part of an innovative company driving technological advancements. We offer exciting career opportunities across various roles and locations, empowering you to grow and make a real impact."
            markPrimaryHeadingAsH1Tag
        />
        <BenefitsSection />
        <HiringProcess />

        <div className='w-full flex justify-center h-fit items-center relative overflow-hidden'>
            <div className='container flex flex-col gap-10 z-10'>
                <JobListings />
            </div>
        </div>

        <Testimonials />
    </div>
}
