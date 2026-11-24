import { ASSETS_BASE_URL } from "../../../lib/variables";
import {
    PhoneCall,
    Bot,
    Headset,
    FileText,
    Workflow,
    Gamepad,
    Globe,
    MonitorSmartphone,
    IndentIncrease,
    BriefcaseIcon,
    Settings,
    Users,
} from "lucide-react";
import { IconBrandFigma, IconSocial } from "@tabler/icons-react";

/* ── Small AI tag helpers (no existing TECHNOLOGIES constant for AI) ── */
const T = (title: string) => ({ title });

export const services = [
    /* ══════════════════ AI SERVICES (new, broken out) ══════════════════ */
    {
        id: "AC",
        serviceTitle: "AI Calling Agents",
        serviceDesc:
            "Voxa voice agents that call, qualify leads, take payments, and follow up in up to 12 languages , live in days, under ₹1/min.",
        icon: PhoneCall,
        serviceTags: [
            T("Voice AI"),
            T("NLP"),
            T("Multilingual"),
            T("Lead Qualification"),
            T("Follow-ups"),
        ],
        serviceBanner: `${ASSETS_BASE_URL}/tempAssets/heroSections/ai-calling.webp`,
        homeBanner: `${ASSETS_BASE_URL}/tempAssets/heroSections/ai-calling.webp`,
        offer: "Voxa · AI Voice Workforce",
        pageLink: "/ai-solutions/ai-calling-agent",
    },
    {
        id: "RC",
        serviceTitle: "RAG-Based Chatbots",
        serviceDesc:
            "Context-aware AI chatbots trained on your business data for accurate, on-brand answers across docs, FAQs, and knowledge bases.",
        icon: Bot,
        serviceTags: [
            T("RAG"),
            T("LLM"),
            T("Vector Search"),
            T("Knowledge Base"),
        ],
        serviceBanner: `${ASSETS_BASE_URL}/tempAssets/heroSections/ai-chatbot.webp`,
        homeBanner: `${ASSETS_BASE_URL}/tempAssets/heroSections/ai-chatbot.webp`,
        offer: "",
        pageLink: "/ai-solutions",
    },
    {
        id: "AS",
        serviceTitle: "AI Customer Support",
        serviceDesc:
            "24/7 AI support desk that answers tier-1 queries, resolves tickets, and hands off to your team when it matters.",
        icon: Headset,
        serviceTags: [
            T("Support"),
            T("Automation"),
            T("Ticket Resolution"),
            T("Human Handoff"),
        ],
        serviceBanner: `${ASSETS_BASE_URL}/tempAssets/heroSections/ai-support.webp`,
        homeBanner: `${ASSETS_BASE_URL}/tempAssets/heroSections/ai-support.webp`,
        offer: "",
        pageLink: "/ai-solutions",
    },
    {
        id: "AR",
        serviceTitle: "AI Report Generation",
        serviceDesc:
            "Automated AI reports , kundli, analytics, and data summaries , generated instantly from structured and unstructured data.",
        icon: FileText,
        serviceTags: [
            T("Automation"),
            T("Data Analysis"),
            T("PDF Reports"),
            T("Insights"),
        ],
        serviceBanner: `${ASSETS_BASE_URL}/tempAssets/heroSections/ai-reports.webp`,
        homeBanner: `${ASSETS_BASE_URL}/tempAssets/heroSections/ai-reports.webp`,
        offer: "",
        pageLink: "/ai-solutions",
    },
    {
        id: "AW",
        serviceTitle: "AI Workflow Automation",
        serviceDesc:
            "Internal AI copilots that automate repetitive tasks, approvals, and processes across sales, HR, and operations.",
        icon: Workflow,
        serviceTags: [
            T("Automation"),
            T("Copilots"),
            T("Sales"),
            T("HR"),
            T("Ops"),
        ],
        serviceBanner: `${ASSETS_BASE_URL}/tempAssets/heroSections/ai-workflow.webp`,
        homeBanner: `${ASSETS_BASE_URL}/tempAssets/heroSections/ai-workflow.webp`,
        offer: "",
        pageLink: "/ai-solutions",
    },

    /* ══════════════════ EXISTING SERVICES (unchanged) ══════════════════ */
    {
        id: "VD",
        serviceTitle: "Visual Design",
        serviceDesc:
            "Our visual design services focus on creating stunning graphics and engaging visuals that enhance user experience across digital platforms. We combine creativity with strategic thinking to deliver designs that not only captivate but also communicate your brand message effectively. Our team ensures that every visual element is crafted to resonate with your audience and elevate your brand identity.",
        icon: IconBrandFigma,
        serviceTags: [
            T("Figma"),
            T("Adobe XD"),
            T("Sketch"),
            T("InVision"),
            T("After Effects"),
            T("Photoshop"),
            T("Illustrator"),
            T("Canva"),
        ],
        serviceBanner: `${ASSETS_BASE_URL}/tempAssets/hireStep1.webp`,
        homeBanner: `${ASSETS_BASE_URL}/tempAssets/designBanner.webp`,
        offer: "",
        pageLink: "/design-services",
    },
    {
        id: "DM",
        serviceTitle: "Digital Marketing",
        serviceDesc:
            "Our digital marketing services are tailored to help your business thrive in the online world. We specialize in search engine optimization (SEO), pay-per-click (PPC) advertising, social media marketing, and content marketing.",
        icon: IndentIncrease,
        serviceTags: [
            T("SEO"),
            T("SMO"),
            T("SMM"),
            T("PPC"),
            T("Content Marketing"),
            T("Email Marketing"),
        ],
        serviceBanner: `${ASSETS_BASE_URL}/tempAssets/heroSections/digital-marketing.webp`,
        homeBanner: `${ASSETS_BASE_URL}/tempAssets/marketingBanner.webp`,
        offer: "",
        pageLink: "/digital-marketing",
    },
    {
        id: "IM",
        serviceTitle: "Influencer Marketing",
        serviceDesc:
            "We specialize in empowering influencers and content creators by providing tailored solutions for content creation, marketing strategies, and social media management.",
        icon: IconSocial,
        serviceTags: [
            T("Content Creation"),
            T("Social Media"),
            T("Brand Strategy"),
        ],
        homeBanner: `${ASSETS_BASE_URL}/tempAssets/marketingBanner.webp`,
        serviceBanner: `${ASSETS_BASE_URL}/tempAssets/marketingBanner.webp`,
        offer: "",
        pageLink: "/digital-marketing",
    },
    {
        id: "UX",
        serviceTitle: "UI/UX Design",
        serviceDesc:
            "We specialize in delivering cutting-edge designs and animations for both web and mobile applications, with a strong focus on user experience (UX) and user interface (UI).",
        icon: IconBrandFigma,
        serviceTags: [T("Figma"), T("Adobe XD"), T("Sketch")],
        serviceBanner: `${ASSETS_BASE_URL}/tempAssets/heroSections/design-services.webp`,
        homeBanner: `${ASSETS_BASE_URL}/tempAssets/designBanner.webp`,
        offer: "",
        pageLink: "/design-services",
    },
    {
        id: "WD",
        serviceTitle: "Web Solutions",
        serviceDesc:
            "We specialize in creating highly responsive, visually appealing, and dynamic websites that are tailored to meet the unique needs of your business.",
        icon: Globe,
        serviceTags: [
            T("React"),
            T("Next.js"),
            T("Laravel"),
            T("PHP"),
            T("MongoDB"),
            T("Node"),
            T("Tailwind"),
        ],
        serviceBanner: `${ASSETS_BASE_URL}/tempAssets/heroSections/web-service.webp`,
        homeBanner: `${ASSETS_BASE_URL}/tempAssets/webBanner.webp`,
        offer: "",
        pageLink: "/web-solutions",
    },
    {
        id: "MA",
        serviceTitle: "Mobile Solutions",
        serviceDesc:
            "Our team excels in developing high-performance mobile applications that deliver exceptional user experiences on both Android and iOS platforms.",
        icon: MonitorSmartphone,
        serviceTags: [
            T("Kotlin"),
            T("Swift"),
            T("React Native"),
            T("Flutter"),
            T("Firebase"),
        ],
        serviceBanner: `${ASSETS_BASE_URL}/tempAssets/heroSections/hire.webp`,
        homeBanner: `${ASSETS_BASE_URL}/tempAssets/appBanner.webp`,
        offer: "",
        pageLink: "/app-solutions",
    },
    {
        id: "GD",
        serviceTitle: "Game Development",
        serviceDesc:
            "Professional game application development services , from custom game and intranet experiences to full game creation solutions.",
        icon: Gamepad,
        serviceTags: [T("2D/3D"), T("Unity"), T("Game Design")],
        homeBanner: `${ASSETS_BASE_URL}/tempAssets/heroSections/game-hero.webp`,
        serviceBanner: `${ASSETS_BASE_URL}/tempAssets/heroSections/game-hero.webp`,
        offer: "",
        pageLink: "/game-development",
    },
    {
        id: "HD",
        serviceTitle: "Hire Talent",
        serviceDesc:
            "Connect with top-tier developers ready to bring your projects to life , full-time, part-time, or freelance.",
        icon: Users,
        serviceTags: [
            T("Full-time"),
            T("Part-time"),
            T("Remote"),
            T("Contract"),
            T("On-site"),
        ],
        serviceBanner: `${ASSETS_BASE_URL}/tempAssets/heroSections/hire-talent-hero.webp`,
        homeBanner: `${ASSETS_BASE_URL}/tempAssets/pwaBanner.webp`,
        offer: "",
        pageLink: "/hire-talent",
    },
    {
        id: "CN",
        serviceTitle: "Consultancy",
        serviceDesc:
            "Expert guidance to help your business overcome challenges and capitalize on opportunities , strategic planning, operational efficiency, and market analysis.",
        icon: BriefcaseIcon,
        serviceTags: [
            T("Strategic Planning"),
            T("Operational Efficiency"),
            T("Market Analysis"),
            T("Risk Management"),
        ],
        serviceBanner: `${ASSETS_BASE_URL}/tempAssets/hireStep2.webp`,
        homeBanner: `${ASSETS_BASE_URL}/tempAssets/consultancyBanner.webp`,
        offer: "",
        pageLink: "/consultancy",
    },
    {
        id: "DA",
        serviceTitle: "Data Analysis",
        serviceDesc:
            "Unlock actionable insights and drive smarter decisions , transforming raw data into clear, meaningful intelligence.",
        icon: Settings,
        serviceBanner: `${ASSETS_BASE_URL}/tempAssets/heroSections/web-service.webp`,
        homeBanner: `${ASSETS_BASE_URL}/tempAssets/consultancyBanner.webp`,
        offer: "",
        pageLink: "/data-analysis",
    },
];
