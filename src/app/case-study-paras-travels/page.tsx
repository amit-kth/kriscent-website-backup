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


export default function ParasCaseStudy() {

    const projectRelatedData: ProjectData[] = TopProjects.filter((project) => project.id === "paras-travels")
    const projectData = projectRelatedData[0]
    const isMobile = useMediaQuery({ maxWidth: 768 })

    return <>

        <SEO metadata={metadata.CaseStudyParasTravels}>

            <div>
                <div style={{ backgroundColor: projectData.cardColor }}>
                    <HeroSectionGlobal
                        primaryHeading={projectData.tagline || "Travel and fleet Management"}
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

                <ProjectSummary client='Paras Travels' duration='5 Months' businessType='Fleet Management' platforms='Web & App & IOS App' />

                <ProjectBrief description="Paras Travels is a travel agency specializing in providing vehicles for transportation needs. The platform offers a seamless booking experience for renting cars and buses for travel to various destinations. Catering to both individuals and groups, Paras Travels focuses on delivering reliable, comfortable, and customizable travel solutions." />

                <ClientRequirements requirements={[
                    "A user-friendly platform for booking vehicles, such as cars and buses, for travel to specific destinations.",
                    "Support for individual and group bookings with customizable options.",
                    "A vehicle management system to track availability and bookings in real-time.",
                    "Secure payment options for hassle-free transactions.",
                    "Tools for admins to manage bookings, schedules, and vehicle inventory efficiently.",
                    "Mobile responsiveness for easy access on different devices."
                ]} />

                <Solutions solutions={[
                    {
                        title: "Vehicle Booking System",
                        description: "A streamlined interface allowing customers to book cars or buses for single or group travel.",
                    },
                    {
                        title: "Real-Time Vehicle Availability",
                        description: "Integration of real-time tracking for vehicle availability, ensuring up-to-date booking options.",
                    },
                    {
                        title: "User Interface",
                        description: "A simple and intuitive design to make the booking process smooth and user-friendly.",
                    },
                    {
                        title: "Secure Payment Gateway",
                        description: "Implementation of safe and reliable payment methods to build customer trust.",
                    },
                    {
                        title: "Admin Dashboard",
                        description: "Tools for managing vehicle bookings, schedules, and maintaining operational efficiency.",
                    },
                    {
                        title: "Responsive Design",
                        description: "Mobile-friendly optimization to allow users to access the platform seamlessly from any device.",
                    },
                ]} />

                <ProjectChallenges challenges={[
                    {
                        challenge: "Individual and Group Booking Management",
                        description: "Building a system capable of handling both individual and group booking scenarios.",
                    },
                    {
                        challenge: "Real-Time Synchronization",
                        description: "Ensuring real-time synchronization between vehicle availability and booking data.",
                    },
                    {
                        challenge: "Intuitive Interface Design",
                        description: "Designing an intuitive interface that simplifies the booking process while maintaining platform aesthetics.",
                    },
                    {
                        challenge: "Performance and Responsiveness",
                        description: "Maintaining high performance and responsiveness across devices.",
                    },
                    {
                        challenge: "Secure Payment Process",
                        description: "Implementing a secure and efficient payment process for customers.",
                    },
                ]} />

                <CaseStudyTechnologies techs={Object.values(projectData.technologies) as TechnologyIconsType[]} />

                <CaseStudyFinalProduct project={projectData} content='The final product is a dedicated vehicle booking platform designed to meet the transportation needs of individuals and groups. With its straightforward booking system, real-time vehicle availability tracking, and secure payment options, Paras Travels ensures a hassle-free experience for travelers. The mobile-responsive design makes it easy for users to plan their journeys on the go, while the admin dashboard provides efficient tools for managing bookings and schedules. Paras Travels is a reliable and efficient solution for modern travel needs.' />

                {/* prop for excluding this case study from the related case studies. */}
                <RelatedCases csID={projectData.id} />

            </div >

        </SEO>
    </>
}