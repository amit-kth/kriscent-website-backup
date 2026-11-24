"use client";

import { SEO } from '@/lib/seo';
import { metadata } from '@/lib/variables';
import { AIShowcase } from './landing/showcase';
import { IntegrationsSection } from './landing/integrations';
import { AiCallingAgentsSection } from './landing/ai-calling-agents';
import GlobalReachSection from '../Components/GlobalReach';
import { aiFaqs, AiFAQSection } from './landing/ai-faq';
import { AiContactSection } from './landing/ai-contact-section';
import { CaseStudySection } from './landing/rag-chabi';
import { AIAgentFlowSection, flowSteps } from './landing/ai-agent-flow';
import HomeMarquee from '../Components/Clients/HomepageClientsMarquee/HomeMarquee';
import Testimonials from '../Components/Testimonials/Testimonials';
import { VoiceComplianceSection } from './ai-calling-agent/components/ai-calling-compilance';

const aiFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": aiFaqs.map((faq) => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer,
    },
  })),
};

const agentFlowSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How an AI Agent Thinks",
  "step": flowSteps.map((step, i) => ({
    "@type": "HowToStep",
    "position": i + 1,
    "name": step.title,
    "text": step.description,
  })),
};

const aiServicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": [
    "AI Voice & Calling", "AI Workflow Automation", "RAG-Based Chatbots",
    "WhatsApp AI Agent", "Email & Communication AI", "Appointment Scheduling",
    "AI Receptionist", "AI CRM & ERP", "Lead Qualification",
    "AI Report Generation", "Research & Documents AI", "Custom AI Solutions"
  ].map((name, i) => ({
    "@type": "Service",
    "position": i + 1,
    "name": name,
    "provider": { "@type": "Organization", "name": "Kriscent Techno Hub Pvt. Ltd." },
  })),
};


export default function AIMLPage() {

  return <>
    <SEO metadata={metadata.aiMlsolutionsPage} additionalSchema={[aiFaqSchema, agentFlowSchema, aiServicesSchema]}>
      <main className='overflow-x-hidden'>
        <AiCallingAgentsSection />
        <HomeMarquee />
        <AIShowcase />
        <CaseStudySection />
        <AIAgentFlowSection />
        <GlobalReachSection />
        <IntegrationsSection />
        <VoiceComplianceSection />
        <Testimonials />
        <AiFAQSection />
        <AiContactSection />
      </main>
    </SEO>
  </>
} 