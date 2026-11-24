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

    const projectRelatedData: ProjectData[] = TopProjects.filter((project) => project.id === "auraquestt")
    const projectData = projectRelatedData[0]
    const isMobile = useMediaQuery({ maxWidth: 768 })

    return <>

        <SEO metadata={metadata.CaseStudyAuraquestt}>

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

                <ProjectSummary client='Auraquestt' duration='12 Months' businessType='Astrology' platforms='Web & App & IOS App' />

                <ProjectBrief description="AuraQuestt is an all-encompassing astrology platform that delivers a wide range of services, including tarot readings, numerology, and various astrology solutions. The platform enables users to connect seamlessly with certified astrologers through chat, calls, and video sessions. Additional features include daily horoscopes, wallet recharge for streamlined transactions, and an e-commerce section offering spiritual products such as gemstones and ritual items." />

                <ClientRequirements requirements={[
                    "A centralized platform offering diverse astrology services like tarot, numerology, and horoscope readings.",
                    "Secure and efficient communication channels for users to interact with astrologers via chat, audio, and video sessions.",
                    "Integration of a digital wallet system for convenient transactions and service bookings.",
                    "An e-commerce module for selling spiritual products and services.",
                    "User-friendly daily horoscope updates for personalized astrological insights.",
                    "Comprehensive admin dashboard to manage astrologers, services, and transactions."
                ]} />

                <Solutions solutions={[
                    {
                        title: "Platform Design",
                        description: "Development of an intuitive and aesthetically pleasing platform with smooth navigation across astrology services, wallet recharge, and the e-commerce section.",
                    },
                    {
                        title: "Astrologer Connections",
                        description: "Integration of secure and scalable communication channels to support real-time chat, audio, and video sessions between users and astrologers.",
                    },
                    {
                        title: "Digital Wallet",
                        description: "Implementation of a robust wallet system to facilitate easy recharge, track spending, and manage bookings.",
                    },
                    {
                        title: "E-commerce Module",
                        description: "Design of a modern, user-friendly store for spiritual products, complete with search, filter, and secure payment options.",
                    },
                    {
                        title: "Daily Horoscopes",
                        description: "Automated daily horoscope generation based on user profiles and astrological data.",
                    },
                    {
                        title: "Admin Dashboard",
                        description: "A powerful backend dashboard for admins to monitor astrologer activities, manage customer interactions, oversee transactions, and generate detailed reports.",
                    },
                ]} />

                <ProjectChallenges challenges={[
                    {
                        challenge: "Seamless Communication",
                        description: "Ensuring seamless communication across multiple modes (chat, calls, video) with minimal latency.",
                    },
                    {
                        challenge: "Secure Wallet System",
                        description: "Designing a secure wallet system to handle high volumes of transactions.",
                    },
                    {
                        challenge: "User-Friendly Interface",
                        description: "Balancing the complexity of astrology services with a clean and user-friendly interface.",
                    },
                    {
                        challenge: "E-commerce Integration",
                        description: "Integrating an e-commerce module without overwhelming the primary astrology functionalities.",
                    },
                    {
                        challenge: "Performance Maintenance",
                        description: "Maintaining system performance during high traffic periods, especially during events like festivals or astrological significance days.",
                    },
                ]} />

                <CaseStudyTechnologies techs={Object.values(projectData.technologies) as TechnologyIconsType[]} />

                <CaseStudyFinalProduct project={projectData} content='The final product, AuraQuestt, is a holistic astrology platform designed for modern users seeking spiritual guidance and astrological insights. Its real-time astrologer interactions, secure wallet system, and engaging daily horoscopes offer unparalleled convenience. The integrated e-commerce section adds value by providing access to spiritual products. AuraQuestt serves as a one-stop solution for astrology enthusiasts, blending technology with traditional practices to create an immersive user experience.' />

                {/* prop for excluding this case study from the related case studies. */}
                <RelatedCases csID={projectData.id} />

            </div>

        </SEO>
    </>
}