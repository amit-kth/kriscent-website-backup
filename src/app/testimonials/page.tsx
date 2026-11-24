"use client";

import { Waypoints } from "lucide-react";
import TestimonialListings from "./testimonial-listings";
import { SEO } from "@/lib/seo";
import { ASSETS_BASE_URL, metadata } from "@/lib/variables";
import HeroSectionGlobal from "@/app/ReusableComponents/hero-section-global";

export default function Testimonials() {
    return (
        <>
            <SEO metadata={metadata.testimonialsPage}>
                <main>
                    {/* hero , via global hero component */}
                    <HeroSectionGlobal
                        primaryHeading="What People Say"
                        secondaryHeading="Testimonials"
                        icon={Waypoints}
                        isCentered
                        customColor="text-white"
                        markPrimaryHeadingAsH1Tag
                        imageSrc={`${ASSETS_BASE_URL}/tempAssets/revamp/hero-bg.webp`}
                        description="Our clients success stories are the heart of our work. Here are some testimonials from our satisfied customers."
                    />

                    <div className="py-10">
                        <TestimonialListings />
                    </div>
                </main>
            </SEO>
        </>
    )
}
