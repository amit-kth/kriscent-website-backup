import CareerMainLayout from './components/career-main-layout';
import { SEO } from '@/lib/seo';
import { metadata } from '@/lib/variables';

export default function CareerPage() {
    return <SEO metadata={metadata.careerPage} additionalSchema={careerSchema}>
        <CareerMainLayout />
    </SEO>
}

const careerSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Careers at Kriscent Techno Hub",
    "description": "Join Kriscent Techno Hub. Explore job opportunities, company culture, and career growth in software development, design, and digital marketing.",
    "url": "https://www.kriscent.in/career",
    "mainEntity": {
        "@type": "Organization",
        "name": "Kriscent Techno Hub Pvt. Ltd.",
        "url": "https://www.kriscent.in",
        "hiringOrganization": {
            "@type": "Organization",
            "name": "Kriscent Techno Hub Pvt. Ltd."
        }
    }
};