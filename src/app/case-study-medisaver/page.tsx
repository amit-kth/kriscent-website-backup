"use client";

import React from 'react'
import HeroSectionGlobal from '../ReusableComponents/hero-section-global';
import { Waypoints } from 'lucide-react';
import { ProjectData, TopProjects } from '../portfolio/components/projectData';
import CaseStudyTechnologies from '../case-study/components/technologies';
import { TechnologyIconsType } from '@/lib/icons';
import CaseStudyFinalProduct from '../case-study/components/final-product';
import ProjectSummary from '../case-study/components/project-summary';
import ProjectBrief from '../case-study/components/project-brief';
import ClientRequirements from '../case-study/components/client-requirements';
import Solutions from '../case-study/components/solutions';
import ProjectChallenges from '../case-study/components/project-challenges';
import RelatedCases from '../case-study/components/related-cases';
import { SEO } from '@/lib/seo';
import { metadata } from '@/lib/variables';
import { useMediaQuery } from 'react-responsive';


export default function Page() {

    const projectRelatedData: ProjectData[] = TopProjects.filter((project) => project.id === "medisaver")
    const projectData = projectRelatedData[0]
    const isMobile = useMediaQuery({ maxWidth: 768 })

    return <>

        <SEO metadata={metadata.CaseStudyMediSaver}>

            <div>
                <div style={{ backgroundColor: projectData.cardColor }}>
                    <HeroSectionGlobal
                        primaryHeading={projectData.tagline || "Smart Healthcare & Medicine Management Platform"}
                        secondaryHeading={projectData.title}
                        icon={Waypoints}
                        isCentered={false}
                        customHeight={!isMobile ? '70vh' : '50vh'}
                        imageSrc={!isMobile ? projectData.webCoverImage : ''}
                        customColor='text-white'
                        description={projectData.desc}
                        markPrimaryHeadingAsH1Tag={true}
                    />
                </div>

                <ProjectSummary
                    client='Medisaver'
                    duration='2 Month'
                    businessType='Healthcare & Medicine Management'
                    platforms='Web Platform'
                />

                <ProjectBrief
                    description="Medisaver is a smart healthcare and medicine management platform designed to help Indian families manage medicines, compare pharmacy prices, connect with doctors and labs, and reduce unnecessary healthcare expenses. The platform focuses on affordability, medicine tracking, prescription management, and healthcare accessibility while creating a seamless and trustworthy digital healthcare experience."
                />

                <ClientRequirements requirements={[
                    "A centralized healthcare platform for medicine management.",
                    "A medicine reminder and tracking system to help users take medicines on time and reduce wastage.",
                    "Price comparison functionality across multiple trusted pharmacies for affordable medicine purchasing.",
                    "A secure prescription management system for individuals and family members.",
                    "Simple and accessible healthcare flows suitable for users across different age groups.",
                    "A scalable and secure platform architecture capable of handling healthcare-related user data."
                ]} />

                <Solutions solutions={[
                    {
                        title: "Smart Medicine Management",
                        description: "Developed an intuitive medicine management system allowing users to track medicines, manage prescriptions, and set timely reminders.",
                    },
                    {
                        title: "Healthcare Price Comparison",
                        description: "Built a comparison engine enabling users to compare medicine prices, doctor consultations, and lab tests across trusted providers.",
                    },
                    {
                        title: "Family Healthcare Dashboard",
                        description: "Created a centralized dashboard where users can manage medicines and healthcare activities for multiple family members in one place.",
                    },
                    {
                        title: "Affordable Healthcare Experience",
                        description: "Designed user journeys focused on affordability, cashback savings, and accessible healthcare support for Indian families.",
                    },
                    {
                        title: "Modern Healthcare UI/UX",
                        description: "Implemented a clean and trustworthy healthcare-focused interface optimized for clarity, simplicity, and ease of use.",
                    },
                    {
                        title: "Scalable Healthcare Infrastructure",
                        description: "Developed a scalable platform architecture ensuring secure healthcare data handling and smooth platform performance.",
                    },
                ]} />

                <ProjectChallenges challenges={[
                    {
                        challenge: "Simplifying Healthcare Management",
                        description: "Designing a platform capable of managing medicines, prescriptions, consultations, and lab services within a simple user experience.",
                    },
                    {
                        challenge: "Building User Trust",
                        description: "Creating a trustworthy healthcare environment where users feel confident managing important medical information digitally.",
                    },
                    {
                        challenge: "Handling Complex Healthcare Data",
                        description: "Structuring prescriptions, medicine schedules, family member records, and healthcare services efficiently within the platform.",
                    },
                    {
                        challenge: "Accessibility Across Age Groups",
                        description: "Ensuring the interface remains simple and understandable for users ranging from young adults to senior citizens.",
                    },
                    {
                        challenge: "Scalable & Secure Architecture",
                        description: "Maintaining secure healthcare data management and smooth performance as platform usage scales.",
                    },
                ]} />

                <CaseStudyTechnologies
                    techs={Object.values(projectData.technologies) as TechnologyIconsType[]}
                />

                <CaseStudyFinalProduct
                    project={projectData}
                    content='The final product, Medisaver, is a modern healthcare management platform designed to simplify medicine tracking, healthcare accessibility, and affordability for Indian families. By combining medicine reminders, prescription management, pharmacy price comparison, doctor consultations, and lab services into a single platform, Medisaver delivers a seamless and trustworthy healthcare experience. Its clean interface, family-focused management system, and affordability-driven features successfully position it as a smart digital healthcare companion for modern users.'
                />

                {/* prop for excluding this case study from the related case studies. */}
                <RelatedCases csID={projectData.id} />

            </div>

        </SEO>
    </>
}