"use client";

import React from 'react'
import { ArrowDownNarrowWide, Earth, Image, Pencil } from 'lucide-react';
import { IconBrandAdobeAfterEffect, IconBrandAdobeIllustrator, IconBrandFigma, IconBrandInstagram, IconBrandSketch, IconSocial } from '@tabler/icons-react';
import Testimonials from '@/app/Components/Testimonials/Testimonials';
import ContactSection from '@/app/contact/components/contact-section';
import { categories, ToolType } from '@/app/hire-talent/components/technologies-data';
import DynamicServiceHeroSection from '../services/components/services-hero-section';
import ServiceOverviewSection from '../services/components/service-overview-section';
import ServiceTechStack from '../services/components/service-tech-stack';
import WorkProcess from '../services/components/work-process';
import StartNewProjectCTA from '../services/components/start-new-project-cta';
import { SEO } from '@/lib/seo';
import { ASSETS_BASE_URL, metadata } from '@/lib/variables';
import RelatedServices from '../services/components/related-services';
// Adjust the import path as necessary

export default function DesignServicePages() {

  const services = [
    {
      serviceName: 'Logo Design',
      icon: IconBrandFigma, // Replace with the actual icon component
      description: 'Create unique and memorable logos that represent your brand identity.'
    },
    {
      serviceName: 'VFX & Animations',
      icon: IconBrandAdobeAfterEffect, // Replace with the actual icon component
      description: 'Create high-quality videos that effectively showcase your brand and services.'
    },
    {
      serviceName: 'UI/UX Design',
      icon: IconBrandSketch, // Replace with the actual icon component
      description: 'Design intuitive and user-friendly interfaces for your applications.'
    },
    {
      serviceName: 'Posters Design',
      icon: Image, // Replace with the actual icon component
      description: 'Craft visually appealing posters for events, promotions, and more.'
    },
    {
      serviceName: 'Social Media Posts',
      icon: IconSocial, // Replace with the actual icon component
      description: 'Design eye-catching posts for your social media platforms.'
    },
    {
      serviceName: 'Visual Design',
      icon: IconBrandAdobeIllustrator, // Replace with the actual icon component
      description: 'Create stunning visual content that enhances user engagement and brand identity.'
    },
    {
      serviceName: 'Mascot Design',
      icon: Pencil, // Replace with the actual icon component
      description: 'Design unique mascots that represent your brand and resonate with your audience.'
    },
    {
      serviceName: 'Brand Deck Design',
      icon: IconBrandFigma, // Replace with the actual icon component
      description: 'Develop comprehensive brand decks that effectively communicate your brand story and values.'
    },
  ];

  // taking tools from ui uix and visual design
  const uiUxTools = categories.find(category => category.name === 'UI/UX Designing')?.tools || [];
  const visualDesignTools = categories.find(category => category.name === 'Visual Design')?.tools || [];
  const frameworks = [...uiUxTools, ...visualDesignTools];

  return <>
    {/* seo tag */}
    <SEO metadata={metadata.mediaDesignServicesPage}>
      <main className='overflow-x-hidden'>
        <DynamicServiceHeroSection
          primaryHeading="UI/UX, Graphics and Video Design services for your needs"
          secondaryHeading="Designing Services"
          highlightedString='Design services'
          description="We offer tailored web solutions to meet your business goals. From custom web development to e-commerce and CMS integration, our expert team ensures your site is scalable, secure, and optimized for success. Let us build web experiences that drive growth and deliver results."
          icon={ArrowDownNarrowWide}
          markPrimaryHeadingAsH1Tag={true}
          imageSrc={`${ASSETS_BASE_URL}/tempAssets/heroSections/design-services.webp`}
        />

        <ServiceOverviewSection
          services={services}
          primaryHeading="Our Expert Areas in Design Services"
          secondaryHeading="Service Overview"
          highlightedString='Design Services'
          headingIcon={Earth}
          isCentered={true}
        />

        <ServiceTechStack
          frameworks={frameworks as ToolType[]}
          primaryHeading="Our Expert Tech Stack"
          secondaryHeading="Tech Stack"
          highlightedString='Tech'
          headingIcon={Earth}
          isCentered={true}
        />

        <WorkProcess />

        <StartNewProjectCTA />

        <RelatedServices currentService="VD" />


        <Testimonials />
        <div className='w-full h-full bg-[#f5f5f5] mt-10'>
          <ContactSection />
        </div>
      </main>
    </SEO>
  </>
}
