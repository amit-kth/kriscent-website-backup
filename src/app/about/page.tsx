import AboutMainLayout from './components/about-main-layout'
import { metadata } from '@/lib/variables';
import { SEO } from '@/lib/seo';

export default function Page() {
    return <SEO metadata={metadata.aboutPage} additionalSchema={[aboutSchema, milestonesSchema]}>
        <AboutMainLayout />
    </SEO>
}

const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Kriscent Techno Hub",
    "description": "Kriscent Techno Hub Pvt Ltd, founded in 2014 by Kapil Gautam, delivers IT consulting, web development, and technology solutions for businesses worldwide.",
    "url": "https://www.kriscent.in/about",
    "mainEntity": {
        "@type": "Organization",
        "name": "Kriscent Techno Hub Pvt. Ltd.",
        "numberOfEmployees": { "@type": "QuantitativeValue", "value": "100+" }
    }
};

const milestonesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Kriscent Techno Hub Company Milestones",
    "itemListElement": [
        { "@type": "Event", "name": "The Beginning", "startDate": "2012", "description": "Entrepreneurial journey began with a vision for a tech startup by Kapil Gautam." },
        { "@type": "Event", "name": "Official Establishment", "startDate": "2014", "description": "Kriscent Techno Hub Private Limited was officially established." },
        { "@type": "Event", "name": "Growing Strong", "startDate": "2016", "description": "Reached 100+ clients worldwide with a team of 25+ employees." },
        { "@type": "Event", "name": "Global Reach", "startDate": "2018", "description": "Expanded to 1 million networks worldwide." },
        { "@type": "Event", "name": "Startup Recognition", "startDate": "2020", "description": "Received Certificate of Recognition by Startup India." },
        { "@type": "Event", "name": "Global Excellence", "startDate": "2021", "description": "Awarded by Go Global Awards." },
        { "@type": "Event", "name": "International Expansion", "startDate": "2022", "description": "Established offices in UAE, UK, and Ireland." },
        { "@type": "Event", "name": "ISO Certified", "startDate": "2023", "description": "Became an ISO Certified Company." },
        { "@type": "Event", "name": "CMMI Level 3", "startDate": "2024", "description": "Recognized as a CMMI Level 3 Company." }
    ]
};