import { TECHNOLOGIES, TechnologyIconsType } from "@/lib/icons";
import { ASSETS_BASE_URL } from "@/lib/variables";

interface CaseStudyMetric {
    label: string;
    value: string;
}

export interface CaseStudy {
    id: string;
    title: string;
    description: string;
    challenge: string;
    solution: string;
    metrics: CaseStudyMetric[];
    technologies: TechnologyIconsType[];
    image: string;
    color: string;
    pageAddress: string;
    platforms: string[];
}

export const caseStudies: CaseStudy[] = [
    {
        id: "rgcsm",
        title: "RGCSM - Education Franchise Portal",
        description: "A franchise network bringing affordable technical education to India's cities and villages alike.",
        challenge: "Franchise onboarding, fees, and student records were all managed manually across scattered centers.",
        solution: "A unified portal with role-based dashboards, automated fee tracking, and a mobile app for center staff.",
        metrics: [
            { label: "Franchise Centers Onboarded", value: "150+" },
            { label: "Reduction in Admin Time", value: "40%" },
            { label: "Students Managed", value: "10K+" },
        ],
        technologies: [TECHNOLOGIES.PHP, TECHNOLOGIES.KOTLIN, TECHNOLOGIES.LARAVEL, TECHNOLOGIES.HTML, TECHNOLOGIES.CSS, TECHNOLOGIES.JAVASCRIPT],
        image: `${ASSETS_BASE_URL}/tempAssets/projectImages/banners/RGCSM.webp`,
        color: "#008BDA",
        pageAddress: "/case-study-rgcsm",
        platforms: ["Android", "Web"],
    },
    {
        id: "chabi",
        title: "Chabi App",
        description: "A fintech app helping everyday Indians build the confidence to invest and grow their money.",
        challenge: "First-time investors found existing apps intimidating, and jargon-heavy UX kept them from engaging.",
        solution: "A guided, education-first onboarding flow with bite-sized lessons woven into the investing journey.",
        metrics: [
            { label: "App Downloads", value: "50K+" },
            { label: "User Retention (90-day)", value: "62%" },
            { label: "Avg. Session Time", value: "+35%" },
        ],
        technologies: [TECHNOLOGIES.REACT_NATIVE, TECHNOLOGIES.NEXTJS, TECHNOLOGIES.TYPESCRIPT, TECHNOLOGIES.NODE, TECHNOLOGIES.FIGMA],
        image: `${ASSETS_BASE_URL}/tempAssets/projectImages/banners/chabi.webp`,
        color: "#002B5B",
        pageAddress: "/case-study-chabi",
        platforms: ["Android", "Web", "Ios"],
    },
    {
        id: "tsbos",
        title: "The Sommnath Bhattacharyaa Occult Sciences",
        description: "A practice making ancient astrological wisdom accessible to modern seekers worldwide.",
        challenge: "No digital presence to reach a global audience, and no reliable way to manage bookings.",
        solution: "A content-rich platform with integrated booking, consultations, and a hub that built credibility.",
        metrics: [
            { label: "Monthly Consultations", value: "300+" },
            { label: "Organic Traffic Growth", value: "4x" },
            { label: "Countries Reached", value: "20+" },
        ],
        technologies: [TECHNOLOGIES.LARAVEL, TECHNOLOGIES.HTML, TECHNOLOGIES.MYSQL, TECHNOLOGIES.CSS, TECHNOLOGIES.JAVASCRIPT],
        image: `${ASSETS_BASE_URL}/tempAssets/projectImages/banners/tsbos-banner.webp`,
        color: "#154E6A",
        pageAddress: "/case-study-tsbos",
        platforms: ["Android", "Web"],
    },
    {
        id: "medisaver",
        title: "Medisaver",
        description: "India's smart healthcare platform putting complete control of medicines in patients' hands.",
        challenge: "Patients struggled to track prescriptions, refill schedules, and compare prices across pharmacies.",
        solution: "A smart tracker with refill reminders, price comparison, and a verified pharmacy network.",
        metrics: [
            { label: "Active Users", value: "25K+" },
            { label: "Avg. Savings per Order", value: "18%" },
            { label: "Pharmacy Partners", value: "500+" },
        ],
        technologies: [TECHNOLOGIES.PHP, TECHNOLOGIES.LARAVEL, TECHNOLOGIES.MYSQL, TECHNOLOGIES.TAILWIND],
        image: `${ASSETS_BASE_URL}/tempAssets/projectImages/banners/medisaver.webp`,
        color: "#0251B6",
        pageAddress: "/case-study-medisaver",
        platforms: ["Android", "Web"],
    },
    {
        id: "auraquestt",
        title: "Auraquestt - Astrology Consultancy Portal",
        description: "A consultancy bringing the transformative power of astrology to seekers everywhere.",
        challenge: "Scheduling was fragmented, with no reliable way for astrologers to manage recurring clients.",
        solution: "A consultancy portal with astrologer profiles, live scheduling, and automated follow-ups.",
        metrics: [
            { label: "Consultations Booked", value: "5K+" },
            { label: "Astrologers Onboarded", value: "80+" },
            { label: "Repeat Client Rate", value: "55%" },
        ],
        technologies: [TECHNOLOGIES.HTML, TECHNOLOGIES.CSS, TECHNOLOGIES.JAVASCRIPT, TECHNOLOGIES.LARAVEL, TECHNOLOGIES.FLUTTER],
        image: `${ASSETS_BASE_URL}/tempAssets/projectImages/banners/Aura Quest.webp`,
        color: "#191716",
        pageAddress: "/case-study-auraquestt",
        platforms: ["Android", "Web"],
    },
    {
        id: "gudz",
        title: "Gudz - Fleet Management Portal",
        description: "A logistics platform bringing modern fleet management to growing businesses.",
        challenge: "Fleet owners had no real-time visibility into vehicle location, maintenance, or driver performance.",
        solution: "A live fleet dashboard with GPS tracking, maintenance alerts, and driver performance analytics.",
        metrics: [
            { label: "Vehicles Tracked", value: "1,200+" },
            { label: "Fuel Cost Reduction", value: "22%" },
            { label: "Fleet Downtime Cut", value: "30%" },
        ],
        technologies: [TECHNOLOGIES.NEXTJS, TECHNOLOGIES.REACT, TECHNOLOGIES.MONGODB, TECHNOLOGIES.NODE, TECHNOLOGIES.FLUTTER],
        image: `${ASSETS_BASE_URL}/tempAssets/projectImages/banners/Gudz.webp`,
        color: "#7878F3",
        pageAddress: "/case-study-gudz",
        platforms: ["Android", "Web"],
    },
    {
        id: "flixmates",
        title: "Flixmates - Bollywood ka linkedin",
        description: "A networking platform helping artists connect, collaborate, and land their next role.",
        challenge: "Artists and casting directors had no professional network built for real-time collaboration.",
        solution: "A networking platform with live chat, audition listings, and industry-tailored discovery.",
        metrics: [
            { label: "Registered Artists", value: "15K+" },
            { label: "Auditions Posted Monthly", value: "400+" },
            { label: "Chat Response Rate", value: "78%" },
        ],
        technologies: [TECHNOLOGIES.NEXTJS, TECHNOLOGIES.REACT, TECHNOLOGIES.MONGODB, TECHNOLOGIES.NODE, TECHNOLOGIES.FLUTTER],
        image: `${ASSETS_BASE_URL}/tempAssets/projectImages/banners/Flixmates.webp`,
        color: "#D42251",
        pageAddress: "/case-study-flixmates",
        platforms: ["Android", "Web"],
    },
    {
        id: "shop-ad",
        title: "Shop Ad",
        description: "A platform helping local shops go digital with catalogs, QR codes, and rewards.",
        challenge: "Local shop owners had no low-cost way to build a digital catalog or reward repeat buyers.",
        solution: "A QR-driven catalog platform with built-in rewards and referral mechanics for retailers.",
        metrics: [
            { label: "Shops Onboarded", value: "800+" },
            { label: "QR Scans Monthly", value: "20K+" },
            { label: "Repeat Customer Lift", value: "28%" },
        ],
        technologies: [TECHNOLOGIES.REACT, TECHNOLOGIES.REACT_NATIVE, TECHNOLOGIES.NEXTJS, TECHNOLOGIES.MONGODB, TECHNOLOGIES.TAILWIND, TECHNOLOGIES.JAVASCRIPT],
        image: `${ASSETS_BASE_URL}/tempAssets/projectImages/banners/shop-ad.webp`,
        color: "#e69f00",
        pageAddress: "/case-study-shop-ad",
        platforms: ["Web", "Android"],
    },
    {
        id: "paras-travels",
        title: "Paras Travels - ERP",
        description: "A travel management platform built to run operations efficiently, end to end.",
        challenge: "Manual booking, invoicing, and vendor coordination caused delays and errors across teams.",
        solution: "An end-to-end ERP covering bookings, invoicing, vendor management, and live reporting.",
        metrics: [
            { label: "Bookings Processed Monthly", value: "2K+" },
            { label: "Invoicing Time Reduced", value: "50%" },
            { label: "Operational Errors Cut", value: "35%" },
        ],
        technologies: [TECHNOLOGIES.LARAVEL, TECHNOLOGIES.FLUTTER, TECHNOLOGIES.HTML, TECHNOLOGIES.MYSQL, TECHNOLOGIES.CSS, TECHNOLOGIES.JAVASCRIPT],
        image: `${ASSETS_BASE_URL}/tempAssets/projectImages/banners/Paras Travels.webp`,
        color: "#898989",
        pageAddress: "/case-study-paras-travels",
        platforms: ["Web"],
    },
];