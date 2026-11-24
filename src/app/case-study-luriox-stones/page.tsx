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


export default function LurioxCaseStudy() {

    const projectRelatedData: ProjectData[] = TopProjects.filter((project) => project.id === "luriox-stones")
    const projectData = projectRelatedData[0]
    const isMobile = useMediaQuery({ maxWidth: 768 })

    return <>
        <SEO metadata={metadata.CaseStudyLurioxStones}>
            <div>
                <div style={{ backgroundColor: projectData.cardColor }}>
                    <HeroSectionGlobal
                        primaryHeading={projectData.tagline || "Gemstones & Jewellry E-Commerce"}
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
                <ProjectSummary client='Luriox Stones' duration='2 Months' businessType='Gemstones & Jewellry' platforms='Webapp' />

                <ProjectBrief description="Luriox Stones is a sophisticated e-commerce platform offering a curated collection of premium gemstones and exquisite jewelry. The platform features timeless classics and contemporary designs, catering to customers who value elegance and quality. With a focus on user experience, Luriox Stones aims to provide a seamless shopping journey, from browsing collections to purchasing high-end pieces, ensuring customer satisfaction at every touchpoint." />

                <ClientRequirements requirements={[
                    "A visually stunning and intuitive e-commerce website to showcase premium gemstones and jewelry collections.",
                    "Easy navigation for users to explore collections by categories such as gemstones, jewelry types, and designs.",
                    "Secure and streamlined checkout process to enhance customer trust and ease of transactions.",
                    "Integration of product filters (e.g., price range, type, material) for personalized shopping experiences.",
                    "A responsive design to ensure optimal usability across devices.",
                    "Backend tools for managing inventory, orders, and customer inquiries.",
                ]} />

                <Solutions solutions={[
                    {
                        title: "Website Design",
                        description: "Development of a visually captivating and user-friendly interface to highlight the luxury and elegance of Luriox Stones’ products.",
                    },
                    {
                        title: "Product Showcasing",
                        description: "High-quality imagery and detailed product descriptions to enhance customer confidence in their purchase decisions.",
                    },
                    {
                        title: "Advanced Filtering",
                        description: "Integration of dynamic filters such as price range, gemstone type, and style to provide a tailored shopping experience.",
                    },
                    {
                        title: "Secure Checkout",
                        description: "Implementation of secure payment gateways, ensuring safe and hassle-free transactions.",
                    },
                    {
                        title: "Mobile Optimization",
                        description: "Responsive design to deliver a seamless experience across desktops, tablets, and smartphones.",
                    },
                    {
                        title: "Admin Dashboard",
                        description: "Backend tools for managing product inventory, tracking orders, and analyzing sales trends to support business growth.",
                    },
                ]} />

                <ProjectChallenges challenges={[
                    {
                        challenge: "Aesthetic and Functional Balance",
                        description: "Creating a balance between aesthetics and functionality to showcase the luxury appeal while ensuring ease of navigation.",
                    },
                    {
                        challenge: "High-Resolution Product Displays",
                        description: "Implementing high-resolution product displays without compromising website performance.",
                    },
                    {
                        challenge: "Secure Checkout Process",
                        description: "Designing a secure checkout process to establish trust for high-value transactions.",
                    },
                    {
                        challenge: "Efficient Inventory Management",
                        description: "Enabling efficient inventory management for dynamic product collections.",
                    },
                    {
                        challenge: "Website Optimization",
                        description: "Optimizing the website for responsiveness and speed across various devices and connection speeds.",
                    },
                ]} />

                <CaseStudyTechnologies techs={Object.values(projectData.technologies) as TechnologyIconsType[]} />

                <CaseStudyFinalProduct project={projectData} content='The final product is a premium e-commerce website that reflects the elegance and sophistication of Luriox Stones. With its visually stunning design, user-friendly navigation, and advanced filtering options, customers can explore and purchase their desired pieces effortlessly. The secure checkout and mobile-optimized interface ensure a seamless and trustworthy shopping experience. Luriox Stones stands as a modern platform that celebrates luxury and craftsmanship, appealing to discerning customers worldwide.' />

                {/* prop for excluding this case study from the related case studies. */}
                <RelatedCases csID={projectData.id} />

            </div>
        </SEO>
    </>
}