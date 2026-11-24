import { SEO } from '@/lib/seo';
import { metadata } from '@/lib/variables';
import HireDevMainLayout from './components/hire-main-layout';

export default function HireDevelopersPage() {
    return <>
        {/* seo tag */}
        <SEO metadata={metadata.hireTalentPage}>
            <HireDevMainLayout />
        </SEO>
    </>
}
