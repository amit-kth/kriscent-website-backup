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


export default function RgcsmCaseStudy() {

    const projectRelatedData: ProjectData[] = TopProjects.filter((project) => project.id === "rgcsm")
    const projectData = projectRelatedData[0]
    const isMobile = useMediaQuery({ maxWidth: 768 })

    return <>

        <SEO metadata={metadata.CaseStudyRgcsm} >

            <div>
                <div style={{ backgroundColor: projectData.cardColor }}>
                    <HeroSectionGlobal
                        primaryHeading={projectData.tagline || "Astrology Consulting Portal"}
                        secondaryHeading={projectData.title}
                        icon={Waypoints}
                        highlightedString='Astrology'
                        isCentered={false}
                        customHeight={!isMobile ? '70vh' : '50vh'}
                        imageSrc={!isMobile ? projectData.webCoverImage : ''}
                        customColor='text-white'
                        description={projectData.desc}
                        markPrimaryHeadingAsH1Tag={true}
                    />
                </div>

                <ProjectSummary client='RGCSM' duration='12 Months' businessType='Education Franchise' platforms='Web & App & IOS App' />

                <ProjectBrief description="RGCSM (Rajeev Gandhi Computer Saksharta Mission) is a national-level platform focused on providing accessible and affordable technical education and skill development opportunities to urban and rural communities across India. The platform includes a franchise management system to support its vast network. RGCSM operates under government certifications and affiliations, such as the Society & Public Trust Act, ISO 9001:2015, and associations with entities like NSDC and NSDA, ensuring its credibility and compliance with national educational standards." />

                <ClientRequirements requirements={[
                    "A comprehensive online educational platform offering skill development courses for diverse groups in urban and rural areas.",
                    "A franchise management system to manage and monitor franchisee operations nationwide.",
                    "Integration of certifications and recognition from various government bodies to build trust and authenticity.",
                    "Tools to manage program enrollments, course progress tracking, and certification generation.",
                    "A user-friendly interface for students, franchisees, and administrators.",
                    "Reporting and analytics for monitoring the performance of franchise centers and student success metrics."
                ]} />

                <Solutions solutions={[
                    {
                        title: "Platform Design",
                        description: "Development of a scalable, user-centric platform to host a variety of courses with intuitive navigation for students and administrators.",
                    },
                    {
                        title: "Franchise Management",
                        description: "Implementation of a robust franchise management module to facilitate seamless communication, performance tracking, and compliance monitoring for all franchisees.",
                    },
                    {
                        title: "Educational Content Delivery",
                        description: "Integration of a Learning Management System (LMS) to deliver courses, track student progress, and automate certification generation upon completion.",
                    },
                    {
                        title: "Government Certification Integration",
                        description: "Inclusion of visible affiliations and certifications to enhance credibility and compliance with national standards.",
                    },
                    {
                        title: "Admin Dashboard",
                        description: "A centralized dashboard for administrators to manage course offerings, enrollments, franchise activities, and performance analytics.",
                    },
                    {
                        title: "Multi-language Support",
                        description: "Support for multiple regional languages to cater to diverse demographics across urban and rural areas.",
                    },
                ]} />

                <ProjectChallenges challenges={[
                    {
                        challenge: "Accessibility and Usability",
                        description: "Ensuring accessibility and usability for users with varying levels of digital literacy, especially in rural areas.",
                    },
                    {
                        challenge: "Scalability of Franchise Network",
                        description: "Managing the scalability of the franchise network across a large geographic area.",
                    },
                    {
                        challenge: "Government Certification Integration",
                        description: "Seamless integration of government certifications and compliance requirements into the system.",
                    },
                    {
                        challenge: "Effective Content Delivery",
                        description: "Delivering educational content effectively across regions with varying internet connectivity.",
                    },
                    {
                        challenge: "Performance Analytics",
                        description: "Developing analytics tools to measure the impact of courses and franchise performance.",
                    },
                ]} />

                <CaseStudyTechnologies techs={Object.values(projectData.technologies) as TechnologyIconsType[]} />

                <CaseStudyFinalProduct project={projectData} content='The final product is a comprehensive educational and skill development portal that bridges the digital divide in India. RGCSM empowers students from all socioeconomic backgrounds to gain technical and vocational skills at nominal costs. The platform’s franchise management system ensures efficient operation and expansion of its network nationwide. With its LMS, government-certified programs, and multilingual support, RGCSM is a transformative initiative contributing to India’s mission of achieving widespread computer literacy and skill development.
' />

                {/* prop for excluding this case study from the related case studies. */}
                <RelatedCases csID={projectData.id} />

            </div >

        </SEO>
    </>
}