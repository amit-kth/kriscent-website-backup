"use client"

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

export default function CaseStudyGmv() {
    const projectRelatedData: ProjectData[] = TopProjects.filter((project) => project.id === "get-max-value")
    const projectData = projectRelatedData[0]
    const isMobile = useMediaQuery({ maxWidth: 768 })

    return <>
        <SEO metadata={metadata.CaseStudyGetMaxValue}>
            <div>
                <div style={{ backgroundColor: projectData.cardColor }}>
                    <HeroSectionGlobal
                        primaryHeading={projectData.tagline || ""}
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

                <ProjectSummary client='Get Max Value' duration='4 Months' businessType='Scrap Management' platforms='Webapp' />

                <ProjectBrief description="GMV (Get Max Value) is a multi-vendor e-auction platform for scrap materials. It enables sellers and buyers to manage scrap listings and participate in live e-auctions. The platform’s goal is to maximize value for all parties by providing a transparent and competitive bidding environment." />

                <ClientRequirements requirements={[
                    "A platform for managing scrap listings by sellers and buyers.",
                    "Functionality for live e-auctions with real-time bidding.",
                    "User roles for sellers, buyers, and platform administrators.",
                    "Detailed reporting on auction outcomes and transactions.",
                    "A scalable architecture to support high concurrent usage."


                ]} />

                <Solutions solutions={[
                    {
                        title: "Auction Management",
                        description: "Development of tools for creating, managing, and monitoring e-auctions.",
                    },
                    {
                        title: "Real-Time Bidding",
                        description: "Integration of WebSocket technology to enable live updates during auctions.",
                    },
                    {
                        title: "User Roles",
                        description: "Creation of distinct workflows and interfaces for sellers, buyers, and administrators.",
                    },
                    {
                        title: "Data Analytics",
                        description: "Tools for analyzing auction trends and providing actionable insights.",
                    },
                    {
                        title: "Secure Transactions",
                        description: "Implementation of secure payment gateways and transaction tracking.",
                    },
                ]} />

                <ProjectChallenges challenges={[
                    {
                        challenge: "Real-Time Communication",
                        description: "Ensuring seamless real-time communication during live e-auctions.",
                    },
                    {
                        challenge: "User Interface Design",
                        description: "Designing an intuitive interface for first-time users.",
                    },
                    {
                        challenge: "Performance Maintenance",
                        description: "Maintaining platform performance during high-traffic auctions.",
                    },
                    {
                        challenge: "Trust and Security",
                        description: "Building trust through transparent and secure processes.",
                    },
                ]} />

                <CaseStudyTechnologies techs={Object.values(projectData.technologies) as TechnologyIconsType[]} />

                <CaseStudyFinalProduct project={projectData} content='GMV delivers a sophisticated e-auction experience for the scrap industry. The platform’s real-time bidding and user-friendly design empower sellers to get the best value for their materials while giving buyers a transparent and competitive space. With robust analytics and secure transactions, GMV redefines the scrap management process.' />

                {/* prop for excluding this case study from the related case studies. */}
                <RelatedCases csID={projectData.id} />
            </div>
        </SEO>
    </>
}
