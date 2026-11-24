'use client';

import React from 'react'
import { AppWindowIcon, Earth } from 'lucide-react'
import {
  Code as CustomIcon, // Example icon for Custom Development
  ShoppingCart as EcommerceIcon, // Example icon for E-commerce
  Layout as WebDesignIcon, // Example icon for Web Design
  Smartphone as PWAIcon, // Example icon for Progressive Web Apps
  FileText as CMSIcon, // Example icon for Content Management Systems
  Wrench as MaintenanceIcon // Example icon for Website Maintenance
} from 'lucide-react';
import Testimonials from '@/app/Components/Testimonials/Testimonials';
import HomeMarquee from '@/app/Components/Clients/HomepageClientsMarquee/HomeMarquee';
import ContactSection from '@/app/contact/components/contact-section';
import { categories, ToolType } from '@/app/hire-talent/components/technologies-data';
import HomePortfolio from '@/app/Components/Portfolio/PortfolioHome/HomePortfolio';
import DynamicServiceHeroSection from '../services/components/services-hero-section';
import ServiceTechStack from '../services/components/service-tech-stack';
import ServiceOverviewSection from '../services/components/service-overview-section';
import WorkProcess from '../services/components/work-process';
import StartNewProjectCTA from '../services/components/start-new-project-cta';
import { SEO } from '@/lib/seo';
import { ASSETS_BASE_URL, metadata } from '@/lib/variables';
import RelatedServices from '../services/components/related-services';


const selectedCategories = ['DevOps', 'Programming', 'Mobile Technologies', 'Database'];

const frameworks = categories
  .filter(category => selectedCategories.includes(category.name))
  .flatMap(category => category.tools);

export default function AppSolutionsPage() {

  // data for this page
  const services = [
    {
      serviceName: 'Mobile App Design',
      icon: WebDesignIcon, // Replace with the actual icon component
      description: 'Create stunning and user-friendly mobile applications that engage your audience.'
    },
    {
      serviceName: 'Mobile App Development',
      icon: CustomIcon, // Replace with the actual icon component
      description: 'Develop robust mobile applications tailored to your business needs.'
    },
    {
      serviceName: 'iOS App Development',
      icon: EcommerceIcon, // Replace with the actual icon component
      description: 'Build high-quality iOS applications that provide a seamless user experience.'
    },
    {
      serviceName: 'Android App Development',
      icon: PWAIcon, // Replace with the actual icon component
      description: 'Create feature-rich Android applications that meet your business goals.'
    },
    {
      serviceName: 'Cross-Platform App Development',
      icon: AppWindowIcon, // Replace with the actual icon component
      description: 'Develop applications that work on both iOS and Android platforms with a single codebase.'
    },
    {
      serviceName: 'Content Management Systems',
      icon: CMSIcon, // Replace with the actual icon component
      description: 'Manage your app content effortlessly with our intuitive CMS solutions.'
    },
    {
      serviceName: 'App Maintenance',
      icon: MaintenanceIcon, // Replace with the actual icon component
      description: 'Keep your applications running smoothly with our reliable maintenance services.'
    }
  ];

  return <>
    <SEO metadata={metadata.mobileSolutionsPage} >
      <main className='overflow-x-hidden'>
        <DynamicServiceHeroSection
          primaryHeading="Transform Your Business with Our App Solutions"
          secondaryHeading="App Solutions"
          highlightedString='Transform'
          description="We offer tailored app solutions to meet your business goals. From custom app development to e-commerce and CMS integration, our expert team ensures your applications are scalable, secure, and optimized for success. Let us build app experiences that drive growth and deliver results."
          icon={Earth}
          markPrimaryHeadingAsH1Tag={true}
          imageSrc={`${ASSETS_BASE_URL}/tempAssets/heroSections/hire.webp`}
        />

        <ServiceOverviewSection
          services={services}
          primaryHeading="Our Expert Areas in App Development"
          secondaryHeading="Service Overview"
          highlightedString='Expert'
          headingIcon={Earth}
          isCentered={true}
        />

        <HomeMarquee />

        <ServiceTechStack
          frameworks={frameworks as ToolType[]}
          primaryHeading="Our Expertise Techstack"
          secondaryHeading="Tech Stack"
          highlightedString='Tech'
          headingIcon={Earth}
          isCentered={true}
        />

        <HomePortfolio />
        <WorkProcess />
        <StartNewProjectCTA />
        <RelatedServices currentService="MA" />

        <Testimonials />
        <div className='w-full h-full bg-[#f5f5f5] mt-10'>
          <ContactSection />
        </div>
      </main>
    </SEO>
  </>
}
