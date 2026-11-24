"use client"

import React from 'react'
import HeroSectionGlobal from '../ReusableComponents/hero-section-global'
import { LampDesk } from 'lucide-react'
import Testimonials from '../Components/Testimonials/Testimonials'
import QuickEnquiryForm from '../Components/QuickEnquiry/quick-enquiry-form'
import { useRouter } from 'next/navigation'
import AIMLResearch from './components/ai-ml-research'
import InfluencerTeaser from './components/influencer-research'
import PartnerProgramSection from './components/partner-program'
import KIRPSection from './components/kirp-details'
import ContactSection from '../contact/components/contact-section'
import HandshakeProgram from './components/handshake-program'
import { SEO } from '@/lib/seo'
import { ASSETS_BASE_URL, metadata } from '@/lib/variables'

export default function KIRP() {
    const router = useRouter();
    return <>
        <SEO metadata={metadata.kirpPage}>
            <div className='flex flex-col'>
                <HeroSectionGlobal
                    primaryHeading='Kriscent Research Programs'
                    secondaryHeading='KIRP'
                    markPrimaryHeadingAsH1Tag={true}
                    icon={LampDesk}
                    highlightedString='Kriscent'
                    customColor='text-white'
                    imageSrc={`${ASSETS_BASE_URL}/tempAssets/heroSections/kirp-hero.jpg`}
                    description='Identifying the patterns that help businesses grow by leveraging data-driven insights, innovative strategies, and comprehensive research methodologies to enhance decision-making and drive sustainable growth.'
                    btnText='Contact Us'
                    btnTarget={() => { router.push('/contact') }}
                />

                <AIMLResearch />
                <InfluencerTeaser />

                <KIRPSection />
                <PartnerProgramSection />
                {/* <HandshakeProgram /> */}

                <Testimonials />
                <ContactSection />
            </div>
        </SEO>
    </>
}
