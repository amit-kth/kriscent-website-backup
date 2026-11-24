import { metadata } from "@/lib/variables";
import { VoiceHeroSection } from "./components/ai-calling-hero";
import { SEO } from "@/lib/seo";
import { VoiceHowItWorksSection } from "./components/ai-calling-howitwork";
import { VoiceAgentsArchitectureSection } from "./components/ai-calling-architecture";
import { VoiceComplianceSection } from "./components/ai-calling-compilance";
import { AiFAQSection } from "../landing/ai-faq";
import { AiContactSection } from "../landing/ai-contact-section";
import { VoiceWorkforceSection } from "./components/ai-calling-workforce";
import { VoiceFeaturesSection } from "./components/ai-calling-features";
import { VoiceComparisonSection } from "./components/ai-calling-comparison";
import { AiClientsSection } from "./components/ai-calling-clients";

export default function AiCallingPage() {
    return <>
        <SEO metadata={metadata.aiMlsolutionsPage}>
            <VoiceHeroSection />
            <VoiceFeaturesSection />
            <VoiceWorkforceSection />
            <VoiceComparisonSection />
            <AiClientsSection />

            {/* <VoiceHowItWorksSection /> */}
            <VoiceAgentsArchitectureSection />
            <VoiceComplianceSection />
            <AiContactSection />
            <AiFAQSection />
        </SEO>
    </>
}