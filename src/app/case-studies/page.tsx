import { SEO } from "@/lib/seo";
import { metadata } from "@/lib/variables";
import CaseStudiesMainLayout from "./components/case-studies-main-layout";
import { caseStudies } from "@/app/Components/CaseStudies/case-studies-data";

export default function CaseStudiesPage() {
  return (
    <SEO metadata={metadata.caseStudiesPage} additionalSchema={caseStudiesSchema}>
      <CaseStudiesMainLayout />
    </SEO>
  );
}

const caseStudiesSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Kriscent Case Studies | IT Projects & Success Stories",
  "description":
    "Explore Kriscent's case studies — success stories across web, mobile, software, and digital marketing for clients worldwide.",
  "url": "https://www.kriscent.in/case-studies",
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": caseStudies.map((study, index) => ({
      "@type": "CreativeWork",
      "position": index + 1,
      "name": study.title,
      "description": study.description,
      "url": `https://www.kriscent.in${study.pageAddress}/`,
    })),
  },
};
