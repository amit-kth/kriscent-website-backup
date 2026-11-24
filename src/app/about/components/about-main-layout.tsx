"use client";

import React from "react";
import { Gem, MapPin, MessageCircle, Presentation } from "lucide-react";
import { ASSETS_BASE_URL } from "@/lib/variables";
import { cn } from "@/lib/utils";
import {
    DefaultButton,
    FadeDownToUpAnimation,
    GradientBG,
} from "@/app/ReusableComponents/UI";
import { SectionHeading } from "@/app/ReusableComponents/section-heading";
import AboutKriscentHeroSection from "./about-kriscent-hero-section";
import BusinessesSlider from "@/app/Components/BusinessesSlider";
import WorkProcess from "./work-progress";
import HomeAwards from "@/app/Components/AwardsAndCertifications/HomeAwards/HomeAwards";
import Testimonials from "@/app/Components/Testimonials/Testimonials";
import WhyChooseUs from "@/app/Components/WhyChooseUs/WhyChooseUs";
import AboutMissionVision from "./about-mission-vision";
import CompanyProfileSection from "./about-profile-section";

export default function AboutMainLayout() {
    return (
        <div className="flex flex-col gap-10 overflow-hidden md:gap-20">
            <AboutKriscentHeroSection />
            <AboutMissionVision />
            <CompanyProfileSection />
            <BusinessesSlider />
            <WorkProcess />
            <WhyChooseUs />
            <HomeAwards />
            <Testimonials />
        </div>
    );
}
