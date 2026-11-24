"use client";

import Image from "next/image";
import { SectionHeading } from '@/app/ReusableComponents/section-heading';
import { BriefcaseBusiness } from "lucide-react";
import { InfiniteMovingCardsBusiness } from "@/components/ui/infinite-moving-cards-business";
import { ASSETS_BASE_URL } from "@/lib/variables";

export default function BusinessesSlider() {
    // Standardized key order and added meaningful image alt text for AEO/SEO
    const sectorsData = [
        {
            title: "Healthcare",
            description: "Accelerating diagnosis and patient care with intelligent digital systems.",
            img: `${ASSETS_BASE_URL}/tempAssets/revamp/business/healthcare.png`,
            alt: "Healthcare software systems for digital patient care and diagnosis",
        },
        {
            title: "Agrotech",
            description: "Technology solutions for farm operations, supply chains, and marketplaces.",
            img: `${ASSETS_BASE_URL}/tempAssets/revamp/business/agriculture.png`,
            alt: "Agrotech software platforms for supply chain and farm management",
        },
        {
            title: "Fintech",
            description: "Secure finance products for payments, lending, dashboards, and automation.",
            img: `${ASSETS_BASE_URL}/tempAssets/revamp/business/finance.png`,
            alt: "Fintech secure payment systems and transaction dashboards",
        },
        {
            title: "Logistics",
            description: "Shipment tracking, route planning, warehouse workflows, and delivery visibility.",
            img: `${ASSETS_BASE_URL}/tempAssets/revamp/business/logistics.png`,
            alt: "Logistics platforms for route planning and delivery shipment tracking",
        },
        {
            title: "ED-Tech",
            description: "Learning platforms, assessments, dashboards, and student engagement systems.",
            img: `${ASSETS_BASE_URL}/tempAssets/revamp/business/edtech.png`,
            alt: "EdTech student portals and interactive learning management software",
        },
        {
            title: "Manufacturing",
            description: "Custom software for internal teams, sales, operations, and reporting.",
            img: `${ASSETS_BASE_URL}/tempAssets/revamp/business/manufacturing.png`,
            alt: "Manufacturing operational ERP systems for sales and workflow reporting",
        },
        {
            title: "Astrology",
            description: "Booking, consultation, and report platforms for astrology practices.", // Factual rewrite matching case studies
            img: `${ASSETS_BASE_URL}/tempAssets/revamp/business/astrology.png`,
            alt: "Astrology practice management platforms for consultation bookings",
        },
        {
            title: "Travel",
            description: "Booking engines, itinerary tools, customer portals, and travel operations.",
            img: `${ASSETS_BASE_URL}/tempAssets/revamp/business/travel.png`,
            alt: "Travel booking software with itinerary planning tools",
        },
    ];

    return (
        <section
            id="industries-served" // FIXED: Changed from irrelevant triggerForm to semantic id
            aria-labelledby="industries-heading"
            className="relative isolate w-full overflow-hidden bg-foreground py-12 text-primary-foreground md:py-16 2xl:py-20"
        >
            {/* Section background image */}
            <Image
                src={`${ASSETS_BASE_URL}/tempAssets/revamp/hero-bg.webp`}
                alt=""
                fill
                sizes="100vw"
                className="pointer-events-none absolute inset-0 -z-30 object-cover"
                priority={false}
            />

            <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-col overflow-hidden px-4 sm:px-6 lg:px-8 2xl:max-w-[1680px] 2xl:px-10">
                <SectionHeading
                    primaryHeading="Which industries does Kriscent Techno Hub serve?" // AEO: Real question phrasing for bots
                    secondaryHeading="Industries"
                    description="Kriscent serves 8 industries including Healthcare, Fintech, Agrotech, Logistics, ED-Tech, Manufacturing, Astrology, and Travel, building custom digital solutions for each sector's specific workflows." // AEO: Fact-based list in first sentence
                    highlightedString="Industries"
                    icon={BriefcaseBusiness}
                    isDarkBg
                />
                <InfiniteMovingCardsBusiness items={sectorsData} />
            </div>
        </section>
    );
}