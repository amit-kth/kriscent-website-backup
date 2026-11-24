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
    const projectRelatedData: ProjectData[] = TopProjects.filter((project) => project.id === "shop-ad")
    const projectData = projectRelatedData[0]

    const isMobile = useMediaQuery({ maxWidth: 768 })

    return <>
        <SEO metadata={metadata.CaseStudyGudz}>

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

                <ProjectSummary client='Gudz' duration='6 Months' businessType='Fleet Management' platforms='Web & Mobile App' />

                <ProjectBrief description="ShopAd is a community-first platform built to empower local shop owners by digitizing their services and extending their reach. It enables businesses to create digital catalogs, post ads, and connect with potential customers through QR codes and promotional tools. ShopAd also integrates a localized job posting system to help shop owners find relevant talent easily. The platform focuses on strengthening local commerce by blending technology with community needs." />

                <ClientRequirements requirements={[
                    "A platform where local shop owners can list their services and products digitally.",
                    "QR code generation for catalogs to simplify product/service access for customers.",
                    "Ability for shop owners to create promotional ads targeting local audiences.",
                    "A module for posting job opportunities to hire sales staff.",
                    "Features to offer discounts, time-sensitive deals, and rewards to customers.",
                    "A system for connecting nearby buyers and sellers using geo-based mapping.",
                ]} />

                <Solutions solutions={[
                    {
                        title: "Digital Catalog with QR Integration",
                        description: "Designed a module allowing shop owners to create digital catalogs linked with unique, scannable QR codes for offline-to-online customer engagement.",
                    },
                    {
                        title: "Local Ad Listings",
                        description: "Developed tools for businesses to run promotional ads and product showcases targeting users based on location.",
                    },
                    {
                        title: "Special Offers & Deal Engine",
                        description: "Implemented a feature where shop owners can roll out limited-time offers, last-minute deals, and loyalty rewards to boost sales.",
                    },
                    {
                        title: "Community Mapping Engine",
                        description: "Created a map-based UI that lets buyers discover nearby shops and offerings efficiently, saving time and enhancing discovery.",
                    },
                ]} />

                <ProjectChallenges challenges={[
                    {
                        challenge: "Engagement Across Varied Digital Literacy Levels",
                        description: "Ensuring the platform remained intuitive and accessible to shop owners unfamiliar with digital tools.",
                    },
                    {
                        challenge: "Dynamic QR Code System",
                        description: "Building a reliable QR generation and linking system that updates dynamically with catalog changes.",
                    },
                    {
                        challenge: "Local Discovery Optimization",
                        description: "Designing a location-aware recommendation engine for matching buyers with nearby relevant shops.",
                    },
                    {
                        challenge: "Scalable Promotion Framework",
                        description: "Creating an ad module capable of handling multiple concurrent promotions without performance bottlenecks.",
                    },
                    {
                        challenge: "Integrating Diverse Functionalities Seamlessly",
                        description: "Unifying catalog creation, job posting, promotion management, and map-based discovery in one smooth user experience.",
                    },
                ]} />

                <CaseStudyTechnologies techs={Object.values(projectData.technologies) as TechnologyIconsType[]} />

                <CaseStudyFinalProduct project={projectData} content='The final product is an intuitive, mobile-friendly platform tailored for local businesses. ShopAd empowers shop owners to build their digital presence, attract nearby customers through QR codes and location-based promotions, and manage workforce needs seamlessly. It successfully bridges offline and online experiences while promoting community commerce. The toolset enables thousands of shops to digitize with minimal effort and reach a broader customer base without needing advanced tech skills.' />

                {/* prop for excluding this case study from the related case studies. */}
                <RelatedCases csID={projectData.id} />
            </div>

        </SEO>
    </>
}
