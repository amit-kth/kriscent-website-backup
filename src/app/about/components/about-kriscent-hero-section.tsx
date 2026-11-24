"use client";

import HeroSectionGlobal from '@/app/ReusableComponents/hero-section-global';
import { ASSETS_BASE_URL } from '@/lib/variables';
import { Waypoints } from 'lucide-react'

export default function AboutKriscentHeroSection() {
    return <HeroSectionGlobal
        primaryHeading='Delivering Complete Tech Solutions Worldwide'
        secondaryHeading='About us'
        icon={Waypoints}
        highlightedString='Solutions'
        isCentered
        markPrimaryHeadingAsH1Tag={true}
        customColor='text-white'
        imageSrc={`${ASSETS_BASE_URL}/tempAssets/About/aboutHero.webp`}
        description='At Kriscent Techno Hub, we provide cutting-edge IT solutions, specializing in software, web, and mobile app development. Our goal is to empower businesses with innovative technology tailored to their unique needs, ensuring growth and success.'
    />
}