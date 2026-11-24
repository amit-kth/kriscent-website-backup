"use client";

import React from 'react'
import { IconBrandGoogle, IconBrandGoogleAnalytics, IconBrandWhatsapp, IconClick, IconGrowth, IconSocial, IconZoomExclamationFilled } from '@tabler/icons-react'
import { Activity, AppWindow, BotMessageSquare, CalendarMinus, Earth, GitCompareArrows, LucideAlignEndVertical, LucideFileKey, Mail, MapPinHouse, SearchCheck } from 'lucide-react'
import Testimonials from '@/app/Components/Testimonials/Testimonials';
import ContactSection from '@/app/contact/components/contact-section';
import DynamicServiceHeroSection from '../services/components/services-hero-section';
import ServiceOverviewSection from '../services/components/service-overview-section';
import WorkProcess from '../services/components/work-process';
import StartNewProjectCTA from '../services/components/start-new-project-cta';
import { SEO } from '@/lib/seo';
import { ASSETS_BASE_URL, metadata } from '@/lib/variables';
import RelatedServices from '../services/components/related-services';

export default function DigitalMarketingPage() {

  const services = [
    {
      serviceName: 'Search Engine Optimization (SEO)',
      icon: SearchCheck, // Replace with the actual icon component
      description: 'Enhance your website visibility on search engines and attract organic traffic through effective SEO strategies.'
    },
    {
      serviceName: 'Social Media Optimization (SMO)',
      icon: IconSocial, // Replace with the actual icon component
      description: 'Boost your brand presence on social media platforms and engage with your audience effectively.'
    },
    {
      serviceName: 'WhatsApp Marketing',
      icon: IconBrandWhatsapp, // Replace with the actual icon component
      description: 'Leverage WhatsApp to connect with your customers directly and promote your products or services.'
    },
    {
      serviceName: 'Email Marketing',
      icon: Mail, // Replace with the actual icon component
      description: 'Create targeted email campaigns to nurture leads and convert them into customers.'
    },
    {
      serviceName: 'Pay-Per-Click Advertising (PPC)',
      icon: IconClick, // Replace with the actual icon component
      description: 'Drive traffic to your website through targeted ads on search engines and social media platforms.'
    },
    {
      serviceName: 'Digital Marketing Campaigns',
      icon: AppWindow, // Replace with the actual icon component
      description: 'Plan and execute comprehensive digital marketing campaigns to achieve your business goals.'
    },
    {
      serviceName: 'Content Marketing',
      icon: LucideFileKey, // Replace with the actual icon component
      description: 'Create and distribute valuable content to attract and engage your target audience.'
    },
    {
      serviceName: 'Google Business Profile',
      icon: IconBrandGoogle, // Replace with the actual icon component
      description: 'Optimize your Google Business Profile to enhance your local search visibility and attract more customers.'
    },
    {
      serviceName: 'Google Maps Marketing',
      icon: MapPinHouse, // Replace with the actual icon component
      description: 'Utilize Google Maps to improve your business visibility and drive foot traffic to your location.'
    },
    {
      serviceName: 'Meta Ads',
      icon: LucideAlignEndVertical, // Replace with the actual icon component
      description: 'Create targeted advertising campaigns on Meta platforms to reach your desired audience effectively.'
    },
    {
      serviceName: 'Google Ads',
      icon: IconBrandGoogleAnalytics, // Replace with the actual icon component
      description: 'Run effective Google Ads campaigns to drive traffic and conversions for your business.'
    },
    {
      serviceName: 'WhatsApp Verification',
      icon: IconBrandWhatsapp, // Replace with the actual icon component
      description: 'Get your business verified on WhatsApp to build trust and credibility with your customers.'
    },
    {
      serviceName: 'Bot Services',
      icon: BotMessageSquare, // Replace with the actual icon component
      description: 'Implement chatbots to enhance customer engagement and provide instant support.'
    },
    {
      serviceName: 'CRM Solutions',
      icon: CalendarMinus, // Replace with the actual icon component
      description: 'Utilize CRM solutions to manage customer relationships and improve your marketing strategies.'
    }
  ];


  return <>
    {/* seo tag */}
    <SEO metadata={metadata.digitalMarketingPage}>
      <main className='overflow-x-hidden'>

        <DynamicServiceHeroSection
          primaryHeading="Elevate Your Brand with Our Digital Marketing Solutions"
          secondaryHeading="Digital Marketing Solutions"
          highlightedString='Elevate'
          description="Our digital marketing services are designed to enhance your online presence. From SEO and content marketing to social media management and PPC advertising, our expert team will help you reach your target audience and achieve measurable results."
          icon={Activity}
          markPrimaryHeadingAsH1Tag={true}
          imageSrc={`${ASSETS_BASE_URL}/tempAssets/heroSections/digital-marketing.webp`}
        />

        <ServiceOverviewSection
          services={services}
          primaryHeading="Our Expert Areas in Digital Marketing"
          secondaryHeading="Service Overview"
          highlightedString='Expert'
          headingIcon={Earth}
          isCentered={true}
        />

        <WorkProcess />
        <StartNewProjectCTA />
        <RelatedServices currentService="DM" />

        <Testimonials />
        <div className='w-full h-full bg-[#f5f5f5] mt-10'>
          <ContactSection />
        </div>
      </main>
    </SEO>
  </>
}
