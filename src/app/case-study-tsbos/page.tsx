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

    const projectRelatedData: ProjectData[] = TopProjects.filter((project) => project.id === "tsbos")
    const projectData = projectRelatedData[0]
    const isMobile = useMediaQuery({ maxWidth: 768 })

    return <>

        <SEO metadata={metadata.CaseStudyTSBOS}>

            <div>
                <div style={{ backgroundColor: projectData.cardColor }}>
                    <HeroSectionGlobal
                        primaryHeading={projectData.tagline || "Life Transformation & Occult Sciences Platform"}
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
                    client='TSBOS'
                    duration='3 Months'
                    businessType='Occult Sciences & Life Transformation'
                    platforms='Web Platform'
                />

                <ProjectBrief
                    description="TSBOS is a modern life transformation and occult sciences platform built for Sommnath Bhattacharyaa to help users improve various aspects of life including success, wealth, health, relationships, and happiness through sciences like Face Reading, Graphology, Name Numerology, and Mobile Numerology. The platform was designed to create a premium, trustworthy, and highly engaging digital experience while simplifying complex occult science concepts for modern users."
                />

                <ClientRequirements requirements={[
                    "A premium and highly engaging website representing trust, transformation, and spiritual guidance.",
                    "A structured platform to showcase services like Face Reading, Graphology, Name Numerology, and Mobile Numerology.",
                    "A clear user journey for discovering services, understanding benefits, and booking consultations.",
                    "A modern and visually immersive interface aligned with mystical and transformational themes.",
                    "Optimized responsive experience across desktop, tablet, and mobile devices.",
                    "A scalable content structure for future courses, testimonials, and educational content."
                ]} />

                <Solutions solutions={[
                    {
                        title: "Premium Transformation Branding",
                        description: "Designed a visually immersive digital experience focused on trust, transformation, and premium spiritual consultation services.",
                    },
                    {
                        title: "Service-Focused User Experience",
                        description: "Structured the platform to clearly present all occult science services with simple explanations and strong conversion-focused layouts.",
                    },
                    {
                        title: "Modern Mystical UI Design",
                        description: "Created a futuristic and elegant interface blending modern web aesthetics with mystical and spiritual visual elements.",
                    },
                    {
                        title: "Responsive Web Platform",
                        description: "Developed a fully responsive platform ensuring smooth browsing and interaction across all devices and screen sizes.",
                    },
                    {
                        title: "Content & Consultation Structure",
                        description: "Built scalable sections for services, remedies, testimonials, transformation journeys, and future educational offerings.",
                    },
                    {
                        title: "Performance & SEO Optimization",
                        description: "Implemented optimized frontend architecture and SEO-friendly practices to improve visibility and user engagement.",
                    },
                ]} />

                <ProjectChallenges challenges={[
                    {
                        challenge: "Building Trust Digitally",
                        description: "Creating a trustworthy online presence for spiritual and occult science services through premium visuals and clear communication.",
                    },
                    {
                        challenge: "Simplifying Complex Concepts",
                        description: "Presenting sciences like numerology, graphology, and face reading in a simple and understandable manner for new users.",
                    },
                    {
                        challenge: "Balancing Mystical & Modern Design",
                        description: "Designing a visually mystical experience without compromising modern usability and clarity.",
                    },
                    {
                        challenge: "Conversion-Oriented User Journey",
                        description: "Structuring the website to effectively guide users from curiosity to consultation bookings.",
                    },
                    {
                        challenge: "Cross-Device Experience",
                        description: "Maintaining immersive visuals and smooth interactions consistently across mobile, tablet, and desktop devices.",
                    },
                ]} />

                <CaseStudyTechnologies
                    techs={Object.values(projectData.technologies) as TechnologyIconsType[]}
                />

                <CaseStudyFinalProduct
                    project={projectData}
                    content='The final product, TSBOS, is a premium life transformation and occult sciences platform designed to help users discover solutions for success, wealth, health, relationships, and overall well-being. By combining modern digital experiences with ancient sciences like Face Reading, Graphology, and Numerology, the platform delivers an engaging and trustworthy user experience. Its immersive design language, structured service presentation, and conversion-focused journey successfully establish a strong digital presence for Sommnath Bhattacharyaa and his transformational consultation services.'
                />

                {/* prop for excluding this case study from the related case studies. */}
                <RelatedCases csID={projectData.id} />

            </div>

        </SEO>
    </>
}