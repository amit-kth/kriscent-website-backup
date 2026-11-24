"use client";

import React from 'react'
import { AppWindowIcon, Briefcase, Earth } from 'lucide-react'
import {
  Code as CustomIcon, // Example icon for Custom Development
  ShoppingCart as EcommerceIcon, // Example icon for E-commerce
  Layout as WebDesignIcon, // Example icon for Web Design
  Smartphone as PWAIcon, // Example icon for Progressive Web Apps
  FileText as CMSIcon, // Example icon for Content Management Systems
  Wrench as MaintenanceIcon // Example icon for Website Maintenance
} from 'lucide-react';
import Testimonials from '@/app/Components/Testimonials/Testimonials';
import ContactSection from '@/app/contact/components/contact-section';
import { categories, ToolType } from '@/app/hire-talent/components/technologies-data';
import HomePortfolio from '@/app/Components/Portfolio/PortfolioHome/HomePortfolio';
import DynamicServiceHeroSection from '../services/components/services-hero-section';
import ServiceOverviewSection from '../services/components/service-overview-section';
import ServiceTechStack from '../services/components/service-tech-stack';
import WorkProcess from '../services/components/work-process';
import StartNewProjectCTA from '../services/components/start-new-project-cta';
import { SEO } from '@/lib/seo';
import { ASSETS_BASE_URL, metadata } from '@/lib/variables';
import RelatedServices from '../services/components/related-services';


const selectedCategories = ['Front-End', 'Back-End', 'DevOps', 'CMS / No Code', 'Database'];

const frameworks = categories
  .filter(category => selectedCategories.includes(category.name))
  .flatMap(category => category.tools);


export default function WebSolutionPage() {
  const services = [
    {
      serviceName: 'Custom Development',
      icon: CustomIcon, // Replace with the actual icon component
      description: 'Tailored software solutions to meet your unique business needs.'
    },
    {
      serviceName: 'E-commerce',
      icon: EcommerceIcon, // Replace with the actual icon component
      description: 'Build and manage your online store with our comprehensive e-commerce solutions.'
    },
    {
      serviceName: 'Web Design',
      icon: WebDesignIcon, // Replace with the actual icon component
      description: 'Create stunning and user-friendly websites that engage your audience.'
    },
    {
      serviceName: 'Progressive Web Apps',
      icon: PWAIcon, // Replace with the actual icon component
      description: 'Deliver a native app-like experience on the web with progressive web apps.'
    },
    {
      serviceName: 'API Development',
      icon: AppWindowIcon, // Replace with the actual icon component
      description: 'Design and develop robust APIs to enhance your applications functionality.'
    },
    {
      serviceName: 'Content Management Systems',
      icon: CMSIcon, // Replace with the actual icon component
      description: 'Manage your content effortlessly with our intuitive CMS solutions.'
    },
    {
      serviceName: 'Website Maintenance',
      icon: MaintenanceIcon, // Replace with the actual icon component
      description: 'Keep your website running smoothly with our reliable maintenance services.'
    },
    {
      serviceName: 'SEO Services', // New service added
      icon: Briefcase, // Replace with the actual icon component
      description: 'Optimize your website to rank higher in search engine results and attract more visitors.'
    }
  ];


  // // Or if you want to keep track of which tool belongs to which category:
  // const frameworksWithCategories = categories
  //     .filter(category => selectedCategories.includes(category.name))
  //     .flatMap(category => category.tools.map(tool => ({
  //         ...tool,
  //         category: category.name
  //     })));

  return <>
    {/* seo tag */}
    <SEO metadata={metadata.webSolutionsPage}>
      <main className='overflow-x-hidden'>
        <DynamicServiceHeroSection
          primaryHeading="Web Solutions For All your Needs"
          secondaryHeading="Web Solutions"
          highlightedString='Solutions'
          description="We offer tailored web solutions to meet your business goals. From custom web development to e-commerce and CMS integration, our expert team ensures your site is scalable, secure, and optimized for success. Let us build web experiences that drive growth and deliver results."
          icon={Earth}
          markPrimaryHeadingAsH1Tag={true}
          imageSrc={`${ASSETS_BASE_URL}/tempAssets/heroSections/web-service.webp`}
        />

        <ServiceOverviewSection
          services={services}
          primaryHeading="Our Expert Areas in Web Development"
          secondaryHeading="Service Overview"
          highlightedString='Expert'
          headingIcon={Earth}
          isCentered={true}
        />

        <ServiceTechStack
          frameworks={frameworks as ToolType[]}
          primaryHeading="Our Expertise Techstack"
          secondaryHeading="Service Overview"
          highlightedString='Expertise'
          headingIcon={Earth}
          isCentered={true}
        />
        <HomePortfolio />

        <WorkProcess />
        <StartNewProjectCTA />
        <RelatedServices currentService="WD" />

        <Testimonials />
        <div className='w-full h-full bg-[#f5f5f5] mt-10'>
          <ContactSection />
        </div>
      </main>
    </SEO>
  </>
}
