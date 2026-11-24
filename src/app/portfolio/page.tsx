import { SEO } from "@/lib/seo";
import PortfolioMainLayout from "./components/portfolio-main-layout";
import { metadata } from "@/lib/variables";

export default function PortfolioPage() {
    return <SEO metadata={metadata.portfolioPage} additionalSchema={portfolioSchema}>
        <PortfolioMainLayout />
    </SEO>
}

const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Kriscent Portfolio | IT Projects & Case Studies",
    "description": "Explore Kriscent's success stories in software development, digital marketing, and IT solutions across industries.",
    "url": "https://www.kriscent.in/portfolio",
    "mainEntity": {
        "@type": "ItemList",
        "itemListElement": [
            {
                "@type": "CreativeWork",
                "position": 1,
                "name": "RGCSM - Education Franchise Portal",
                "description": "A national-level online educational and skill development portal with franchisee management, delivering affordable technical education across urban and rural India.",
                "url": "https://www.kriscent.in/case-study-rgcsm/"
            },
            {
                "@type": "CreativeWork",
                "position": 2,
                "name": "Chabi App",
                "description": "A fintech app that helps first-time investors in India build financial knowledge and confidence to make informed decisions.",
                "url": "https://www.kriscent.in/case-study-chabi/"
            },
            {
                "@type": "CreativeWork",
                "position": 3,
                "name": "The Sommnath Bhattacharyaa Occult Sciences",
                "description": "A digital platform making ancient astrological wisdom accessible to modern seekers worldwide.",
                "url": "https://www.kriscent.in/case-study-tsbos/"
            },
            {
                "@type": "CreativeWork",
                "position": 4,
                "name": "Medisaver",
                "description": "India's smart healthcare platform giving patients complete control over their medicines, refills, and pharmacy comparisons.",
                "url": "https://www.kriscent.in/case-study-medisaver/"
            },
            {
                "@type": "CreativeWork",
                "position": 5,
                "name": "Auraquestt - Astrology Consultancy Portal",
                "description": "A comprehensive astrology platform offering tarot readings, numerology, and consultations via chat, call, and video with certified astrologers.",
                "url": "https://www.kriscent.in/case-study-auraquestt/"
            },
            {
                "@type": "CreativeWork",
                "position": 6,
                "name": "Gudz - Fleet Management Portal",
                "description": "A SaaS-based delivery and fleet management system with route optimization, EV bike rentals, and performance tracking.",
                "url": "https://www.kriscent.in/case-study-gudz/"
            },
            {
                "@type": "CreativeWork",
                "position": 7,
                "name": "Flixmates - Bollywood ka LinkedIn",
                "description": "A networking platform for artists to connect, collaborate, and land roles through real-time auditions and chat.",
                "url": "https://www.kriscent.in/case-study-flixmates/"
            },
            {
                "@type": "CreativeWork",
                "position": 8,
                "name": "Paras Travels - ERP",
                "description": "A travel management ERP platform covering bookings, invoicing, vendor management, and live reporting.",
                "url": "https://www.kriscent.in/case-study-paras-travels/"
            },
            {
                "@type": "CreativeWork",
                "position": 9,
                "name": "Shop Ad",
                "description": "A platform helping local shop owners build digital catalogs, QR codes, and customer reward systems.",
                "url": "https://www.kriscent.in/case-study-shop-ad/"
            }
        ]
    }
};