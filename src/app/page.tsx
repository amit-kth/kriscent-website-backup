import AboutGrid from "./Components/AboutGrid/AboutGrid";
import HomeMarquee from "./Components/Clients/HomepageClientsMarquee/HomeMarquee";
import HomeAwards from "./Components/AwardsAndCertifications/HomeAwards/HomeAwards";
import BusinessesSlider from "./Components/BusinessesSlider";
import Testimonials from "./Components/Testimonials/Testimonials";
import CaseStudies from "./Components/CaseStudies/CaseStudiesHome";
import QuickEnquiryForm from "./Components/QuickEnquiry/quick-enquiry-form";
import { SEO } from "@/lib/seo";
import { metadata } from "@/lib/variables";
import Hero from "./Components/HeroNew";
import ServicesShowcase from "./Components/Services/HomeServices/home-services-new";
import GlobalReachSection from "./Components/GlobalReach";
import { AiCallingAgentsCard } from "./Components/AiCallingSection";
import FAQSection from "./Components/FaqSection";

export default function Home() {
  return <>
    {/* seo data here */}
    <SEO metadata={metadata.indexPage}>

      <Hero />
      <div className="flex flex-col bg-white">
        <HomeMarquee />
        <AboutGrid />
        <BusinessesSlider />
        <ServicesShowcase />
        <AiCallingAgentsCard />
        <CaseStudies />
        <HomeAwards />
        <GlobalReachSection />
        <Testimonials />
        <FAQSection />
        <QuickEnquiryForm />
      </div>

    </SEO>
  </>
}
