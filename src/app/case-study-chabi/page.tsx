"use client";

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

    const projectRelatedData: ProjectData[] = TopProjects.filter((project) => project.id === "chabi")
    const projectData = projectRelatedData[0]
    const isMobile = useMediaQuery({ maxWidth: 768 })

    return <>

        <SEO metadata={metadata.CaseStudyChabi}>


            <div style={{ backgroundColor: projectData.cardColor }}>
                <HeroSectionGlobal
                    primaryHeading={projectData.tagline || "Digital Gold & Financial Learning Platform"}
                    secondaryHeading={projectData.title}
                    icon={Waypoints}
                    highlightedString='Investment'
                    isCentered={false}
                    customHeight={!isMobile ? '70vh' : '50vh'}
                    imageSrc={!isMobile ? projectData.webCoverImage : ''}
                    customColor='text-white'
                    description={projectData.desc}
                    markPrimaryHeadingAsH1Tag={true}
                />
            </div>

            <ProjectSummary client='Chabi' duration='8 Months' businessType='Fintech' platforms='Web & Mobile App' />

            <ProjectBrief description="Chabi is a fintech platform focused on helping daily earners and first-time investors build financial habits through digital gold savings, SIP-based investments, and financial education. The platform simplifies investing with an easy-to-understand user experience, allowing users to save small amounts regularly, track their growth, and learn investing concepts through engaging educational content and reward-based learning modules." />

            <ClientRequirements requirements={[
                "A simple and trustworthy investment platform tailored for daily wage workers, delivery partners, auto drivers, and first-time investors.",
                "A digital gold savings system allowing users to invest small amounts conveniently and consistently.",
                "An intuitive SIP investment experience designed for users with limited financial literacy.",
                "A Learn & Earn module where users can watch educational videos and earn rewards.",
                "A clean dashboard to help users track savings growth, investment value, and rewards progress.",
                "A secure and scalable admin panel to manage users, transactions, educational content, and engagement activities."
            ]} />

            <Solutions solutions={[
                {
                    title: "Simplified Investment Experience",
                    description: "Designed a highly intuitive investment flow focused on reducing complexity and making financial products accessible to first-time investors.",
                },
                {
                    title: "Digital Gold Savings",
                    description: "Integrated a seamless digital gold investment system enabling users to start saving with small daily amounts while tracking real-time value growth.",
                },
                {
                    title: "Learn & Earn System",
                    description: "Built an engaging financial education module where users can watch short learning videos and earn reward credits for completing lessons.",
                },
                {
                    title: "Gamified User Engagement",
                    description: "Introduced progress tracking, reward systems, streaks, and milestone-based interactions to encourage consistent saving and learning behavior.",
                },
                {
                    title: "Clean Financial Dashboard",
                    description: "Created a modern dashboard experience displaying savings progress, gold value growth, earned credits, and learning activity in a visually simple format.",
                },
                {
                    title: "Admin & Content Management",
                    description: "Developed a scalable admin dashboard to manage users, educational videos, transactions, rewards, and platform analytics efficiently.",
                },
            ]} />

            <ProjectChallenges challenges={[
                {
                    challenge: "Designing for First-Time Investors",
                    description: "Creating an investment experience simple enough for users with limited financial knowledge while still maintaining trust and clarity.",
                },
                {
                    challenge: "Low Cognitive Load UX",
                    description: "Balancing financial data presentation with a clean and approachable interface suitable for non-technical users.",
                },
                {
                    challenge: "Building Trust in Digital Investments",
                    description: "Designing transparent flows and visual systems that help users feel confident while investing their money digitally.",
                },
                {
                    challenge: "User Engagement & Retention",
                    description: "Keeping users consistently engaged through educational content, rewards, and progress-based interactions.",
                },
                {
                    challenge: "Scalable Financial Infrastructure",
                    description: "Ensuring platform stability, secure transactions, and smooth performance as user activity and investment data scale over time.",
                },
            ]} />

            <CaseStudyTechnologies techs={Object.values(projectData.technologies) as TechnologyIconsType[]} />

            <CaseStudyFinalProduct project={projectData} content='The final product, Chabi, is a modern fintech platform built to make investing accessible for India’s emerging and underserved investors. By combining digital gold savings, SIP-based investing, and reward-driven financial education, Chabi creates a simple and trustworthy experience for users beginning their financial journey. The platform focuses on encouraging disciplined saving habits, improving financial literacy, and helping users gradually build long-term wealth through an intuitive and engaging digital experience.' />

            {/* prop for excluding this case study from the related case studies. */}
            <RelatedCases csID={projectData.id} />



        </SEO>
    </>
}