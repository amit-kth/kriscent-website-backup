"use client";

import React from 'react'
import { User } from 'lucide-react'
import Testimonials from '@/app/Components/Testimonials/Testimonials';
import ContactSection from '@/app/contact/components/contact-section';
import DynamicServiceHeroSection from '../services/components/services-hero-section';
import ServiceExplaination from '../services/consultancy/components/service-explaination';
import OurApproach from '../services/consultancy/components/our-approach';
import StartNewProjectCTA from '../services/components/start-new-project-cta';
import { SEO } from '@/lib/seo';
import { ASSETS_BASE_URL, metadata } from '@/lib/variables';
import RelatedServices from '../services/components/related-services';

export default function ConsultancyPage() {
  return <>
    {/* seo tag */}
    <SEO metadata={metadata.consultancyPage}>
      <main className='overflow-x-hidden'>

        <DynamicServiceHeroSection
          primaryHeading="Empower Your Business with Our Consultancy Services"
          secondaryHeading="Consultancy Solutions"
          description="Our consultancy services are designed to help businesses navigate challenges and seize opportunities. From strategic planning to operational efficiency, our expert consultants provide tailored solutions that drive growth and enhance performance. Let us partner with you to achieve your business goals."
          icon={User}
          markPrimaryHeadingAsH1Tag={true}
          imageSrc={`${ASSETS_BASE_URL}/tempAssets/hireStep2.webp`} // Update the image source if necessary
        />

        <ServiceExplaination />

        <OurApproach />

        <Testimonials />

        <StartNewProjectCTA />

        <RelatedServices currentService="CN" />

        <div className='w-full h-full bg-[#f5f5f5] mt-10'>
          <ContactSection />
        </div>
      </main>
    </SEO>
  </>

}
