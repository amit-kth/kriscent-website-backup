"use client"

import React from 'react'
import { ProjectData, TopProjects } from '../portfolio/components/projectData'
import { Waypoints } from 'lucide-react'
import HeroSectionGlobal from '../ReusableComponents/hero-section-global'
import { TechnologyIconsType } from '@/lib/icons'
import CaseStudyTechnologies from '../case-study/components/technologies'
import CaseStudyFinalProduct from '../case-study/components/final-product'
import ProjectSummary from '../case-study/components/project-summary'
import ProjectBrief from '../case-study/components/project-brief'
import ClientRequirements from '../case-study/components/client-requirements'
import ProjectChallenges from '../case-study/components/project-challenges'
import Solutions from '../case-study/components/solutions'
import RelatedCases from '../case-study/components/related-cases'
import { SEO } from '@/lib/seo'
import { metadata } from '@/lib/variables'
import { useMediaQuery } from 'react-responsive'

export default function GudzCaseStudy() {
    const projectRelatedData: ProjectData[] = TopProjects.filter((project) => project.id === "gudz")
    const projectData = projectRelatedData[0]

    const isMobile = useMediaQuery({ maxWidth: 768 })

    return <>
        <SEO metadata={metadata.CaseStudyGudz}>

            <div>
                <div style={{ backgroundColor: projectData.cardColor }}>
                    <HeroSectionGlobal
                        primaryHeading={projectData.tagline || "Fleet Management Portal"}
                        secondaryHeading={projectData.title}
                        icon={Waypoints}
                        highlightedString=''
                        isCentered={false}
                        customHeight={!isMobile ? '70vh' : '50vh'}
                        imageSrc={!isMobile ? projectData.webCoverImage : ''}
                        customColor='text-white'
                        description={projectData.desc}
                        markPrimaryHeadingAsH1Tag={true}
                    />
                </div>

                <ProjectSummary client='Gudz' duration='6 Months' businessType='Fleet Management' platforms='Web & Mobile App' />

                <ProjectBrief description="Gudz is a SaaS-based Delivery and Fleet Management System designed to streamline logistics operations. The system encompasses functionalities for superadmins, admins, drivers, and customers. It supports last-mile, middle-mile, and first-mile deliveries with advanced route optimization capabilities. Additionally, Gudz features a bike rental system tailored for drivers, focusing primarily on electric vehicles (bikes, vans, and trucks). Comprehensive vehicle reports covering end-to-end metrics are integral to the platform." />

                <ClientRequirements requirements={[
                    "A centralized system for managing delivery operations across various stages.",
                    "Route optimization to minimize delivery times and fuel consumption.",
                    "A subscription-based bike rental system for drivers.",
                    "Comprehensive fleet management with a focus on electric vehicles.",
                    "End-to-end vehicle reporting for performance and maintenance tracking.",
                    "User roles and apps for superadmins, admins, drivers, and customers."
                ]} />

                <Solutions solutions={[
                    {
                        title: "Platform Design",
                        description: "Development of a robust, scalable SaaS platform with distinct user interfaces for all roles.z",
                    },
                    {
                        title: "Route Optimization",
                        description: "Integration of advanced algorithms to compute optimal delivery routes based on distance, traffic, and delivery priority.",
                    },
                    {
                        title: "Bike Rental System",
                        description: "Implementation of a subscription-based vehicle rental module, allowing drivers to rent and manage electric vehicles.",
                    },
                    {
                        title: "Fleet Management",
                        description: "Tools for admins to track and manage vehicles, including geofencing, maintenance alerts, and usage analytics.",
                    },
                    {
                        title: "Vehicle Reporting",
                        description: "Automated reporting systems providing insights into vehicle performance, fuel efficiency, and maintenance needs.",
                    },
                    {
                        title: "Mobile Apps",
                        description: "Development of user-friendly apps for drivers and customers to manage deliveries and track shipments.",
                    },
                ]} />

                < ProjectChallenges challenges={[
                    {
                        challenge: "Integrating Legacy Systems",
                        description: "Implementing precise route optimization for complex delivery networks.",
                    },
                    {
                        challenge: "Seamless Data Migration",
                        description: "Ensuring seamless integration of the bike rental module with the fleet management system.",
                    },
                    {
                        challenge: "Encouraging User Adoption",
                        description: "Handling high volumes of real-time data from GPS and other telematics sources.",
                    },
                    {
                        challenge: "Scalable Performance Optimization",
                        description: "Designing a scalable architecture to accommodate growing user demand.",
                    },
                    {
                        challenge: "Maintaining System Performance",
                        description: "Incorporating detailed reporting features while maintaining system performance.",
                    },
                ]} />

                <CaseStudyTechnologies techs={Object.values(projectData.technologies) as TechnologyIconsType[]} />

                <CaseStudyFinalProduct project={projectData} content='The final product is an end-to-end delivery and fleet management platform offering unparalleled efficiency in logistics. With its user-friendly interface, real-time tracking, and advanced optimization tools, Gudz empowers businesses to manage their fleets and deliveries effectively. The integrated bike rental system and focus on electric vehicles align with sustainability goals, making it a forward-thinking solution for modern logistics.' />

                {/* prop for excluding this case study from the related case studies. */}
                <RelatedCases csID={projectData.id} />
            </div>

        </SEO>
    </>
}
