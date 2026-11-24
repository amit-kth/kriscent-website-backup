"use client";

import { SEO } from "@/lib/seo";
import { ASSETS_BASE_URL, metadata } from "@/lib/variables";
import { Database, BarChart2, Search, LineChart, Users, Settings, Target, FileText, User, DatabaseBackup } from "lucide-react";
import { SectionHeading } from '@/app/ReusableComponents/section-heading';
import HowWeWorkSection from "./HowWeWorkSection";
import WhyChooseKriscentSection from "./WhyChooseKriscentSection";
import DynamicServiceHeroSection from "../services/components/services-hero-section";
import StartNewProjectCTA from "../services/components/start-new-project-cta";
import RelatedServices from "../services/components/related-services";
import ContactSection from "../contact/components/contact-section";
import Testimonials from "../Components/Testimonials/Testimonials";
import ServiceTechStack from "../services/components/service-tech-stack";
import { categories, ToolType } from "../hire-talent/components/technologies-data";

const selectedCategories = ['Data Analysis'];

const frameworks = categories
  .filter(category => selectedCategories.includes(category.name))
  .flatMap(category => category.tools);

const services = [
  {
    icon: Database,
    title: "Data Cleaning & Structuring",
    desc: "We organize messy, inconsistent data into structured formats ready for deep analysis.",
  },
  {
    icon: BarChart2,
    title: "Descriptive Analytics",
    desc: "Summarize past trends and understand what really happened in your business data.",
  },
  {
    icon: Search,
    title: "Diagnostic Analytics",
    desc: "Go beyond “what” to “why” with root-cause exploration and correlation analysis.",
  },
  {
    icon: LineChart,
    title: "Predictive Analytics",
    desc: "Use statistical models to forecast trends like churn, demand, or revenue.",
  },
  {
    icon: Users,
    title: "Customer & User Analytics",
    desc: "Understand customer behavior, preferences, and patterns to drive engagement.",
  },
  {
    icon: Target,
    title: "KPI & Metric Development",
    desc: "Design and monitor custom performance indicators tailored to your business.",
  },
  {
    icon: FileText,
    title: "Reporting & Insights Delivery",
    desc: "Structured reports highlighting key insights and data-driven recommendations.",
  },
  {
    icon: Settings,
    title: "Data Visualization",
    desc: "Clear and intuitive visual representations of data to support interpretation and informed decision-making.",
  },
];

export default function DataAnalysisServicesSection() {
  return (
    <SEO metadata={metadata.contactPage}>

      <DynamicServiceHeroSection
        primaryHeading="Empower Your Business with Data Analytics"
        secondaryHeading="Data Analytics Solutions"
        description="Unlock actionable insights and drive smarter decisions with our end-to-end data analytics services. From data cleaning to advanced modeling, we help you turn raw data into business value."
        icon={User}
        markPrimaryHeadingAsH1Tag={true}
        imageSrc={`${ASSETS_BASE_URL}/tempAssets/heroSections/data-home-hero.png`}
        highlightedString="Data Analytics"
      />

      <section className="relative py-16 px-2 sm:px-6 bg-gray-50 overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto">
          <SectionHeading
            primaryHeading="Our Core Analytics Services"
            secondaryHeading="What We Offer"
            isCentered={true}
            highlightedColor=""
            className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl shadow-xs flex flex-col items-center text-center px-7 py-10 transition-all duration-200 hover:shadow-xl hover:-translate-y-1 group"
                >
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                    <Icon className="text-primary w-8 h-8" />
                  </div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-3 leading-tight">{service.title}</h3>
                  <p className="text-gray-600 text-base leading-relaxed">{service.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ServiceTechStack
        frameworks={frameworks as ToolType[]}
        primaryHeading="Our Expertise Techstack"
        secondaryHeading="Service Overview"
        highlightedString='Expertise'
        headingIcon={DatabaseBackup}
        isCentered={true}
      />


      <HowWeWorkSection />
      <WhyChooseKriscentSection />

      <Testimonials />
      <StartNewProjectCTA />
      <RelatedServices currentService="DA" />
      <div className='w-full h-full bg-[#f5f5f5] mt-10'>
        <ContactSection />
      </div>
    </SEO>
  );
}