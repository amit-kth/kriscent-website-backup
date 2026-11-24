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

export default function FlixmatesCaseStudy() {
    const projectRelatedData: ProjectData[] = TopProjects.filter((project) => project.id === "flixmates")
    const projectData = projectRelatedData[0]
    const isMobile = useMediaQuery({ maxWidth: 768 })

    return <>

        <SEO metadata={metadata.CaseStudyFlixmates} >

            <div>
                <div style={{ backgroundColor: projectData.cardColor }}>
                    <HeroSectionGlobal
                        primaryHeading={projectData.tagline || "Bollywood ka linkedin"}
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

                <ProjectSummary client='Flixmates' duration='6 Months' businessType='Jobs & Auditions' platforms='Web & Mobile App' />

                <ProjectBrief description="Flixmates is a social media platform tailored for on-stage and backstage artists. It provides a space for users to post, like, comment, and engage with the artistic community. The platform includes functionalities for talents and recruiters, such as posting auditions and jobs and allowing talents to apply. Additionally, Flixmates supports online auditions, making it a versatile tool for the entertainment industry." />

                <ClientRequirements requirements={[
                    "A community - focused social media platform for artistic engagement.",
                    "Features for posting, liking, and commenting to foster interaction.",
                    "Talent-specific functionalities for showcasing skills and applying for opportunities.",
                    "Recruiter tools for posting auditions and jobs.",
                    "Support for online auditions to streamline the hiring process."

                ]} />

                <Solutions solutions={[
                    {
                        title: "Community Features",
                        description: "Development of a dynamic feed allowing users to post content, like, and comment.",
                    },
                    {
                        title: "Talent Profiles",
                        description: "Creation of customizable profiles showcasing portfolios, skills, and experience.",
                    },
                    {
                        title: "Recruiter Tools",
                        description: "A dedicated module for recruiters to post jobs and auditions, with search and filtering options.",
                    },
                    {
                        title: "Online Auditions",
                        description: "Integration of video and document submission features for virtual auditions.",
                    },
                    {
                        title: "Engagement Analytics",
                        description: "Tools to track user interactions and content performance.",
                    },
                ]} />

                <ProjectChallenges challenges={[
                    {
                        challenge: "Balancing User Needs",
                        description: "Balancing the needs of talents and recruiters in a single platform.",
                    },
                    {
                        challenge: "Video Streaming Optimization",
                        description: "Ensuring smooth video streaming and uploading for online auditions.",
                    },
                    {
                        challenge: "Data Protection",
                        description: "Protecting user data and content in a highly interactive environment.",
                    },
                    {
                        challenge: "Multimedia Content Management",
                        description: "Building features to handle high volumes of multimedia content.",
                    },
                ]} />

                <CaseStudyTechnologies techs={Object.values(projectData.technologies) as TechnologyIconsType[]} />

                <CaseStudyFinalProduct project={projectData} content='Flixmates bridges the gap between talent and recruiters in the entertainment industry. The platform’s interactive features foster a vibrant community, while specialized tools for talents and recruiters streamline the audition and hiring process. Its support for online auditions adds a modern touch, making it a vital resource for artists and industry professionals alike.' />

                {/* prop for excluding this case study from the related case studies. */}
                <RelatedCases csID={projectData.id} />
            </div>

        </SEO>
    </>
}
