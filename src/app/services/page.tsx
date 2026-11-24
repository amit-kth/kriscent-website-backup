"use client";

import React from "react";
import Link from "next/link";
import { Waypoints, ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import HeroSectionGlobal from "../ReusableComponents/hero-section-global";
import { ASSETS_BASE_URL, metadata } from "@/lib/variables";
import ContactSection from "../contact/components/contact-section";
import { SEO } from "@/lib/seo";
import { services } from "./components/services-data";
import { SectionHeading } from "@/app/ReusableComponents/section-heading";
import { AiCallingAgentsCard } from "../Components/AiCallingSection";

const containerClass =
  "mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8 xl:max-w-[1400px] 2xl:max-w-[1720px] 2xl:px-10";

/* AI service ids (the 5 broken-out AI cards) */
const AI_IDS = ["AC", "RC", "AS", "AR", "AW"];

const servicesPageSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": [
    { name: "AI & ML Development", desc: "Chatbots, GenAI products, LLM integrations, automation." },
    { name: "Software Development", desc: "Web, mobile, and business platforms." },
    { name: "Digital Marketing", desc: "SEO, paid ads, social media, content campaigns." },
    { name: "Hire Resources", desc: "Dedicated developers, designers, QA, AI engineers." },
  ].map((s, i) => ({
    "@type": "Service",
    "position": i + 1,
    "name": s.name,
    "description": s.desc,
    "provider": { "@type": "Organization", "name": "Kriscent Techno Hub Pvt. Ltd." },
  })),
};

/* ── Service card , AI style vs core style ── */
function ServiceCard({
  service,
  index,
  ai = false,
}: {
  service: (typeof services)[number];
  index: number;
  ai?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      className={
        ai
          ? // ── AI style ──
          "group relative flex flex-col overflow-hidden rounded-3xl bg-primary/5 p-7 transition duration-300 hover:-translate-y-1 hover:bg-primary/10"
          : // ── Core style , light, with border + shadow for distinction ──
          "group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
      }
    >
      {/* icon + tag */}
      <div className="mb-6 flex items-center justify-between">
        <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary shadow-sm transition duration-300 group-hover:-translate-y-0.5">
          {React.createElement(service.icon as React.FC<{ className?: string }>, {
            className: "size-6",
          })}
        </span>

        {/* offer tag (Voxa) */}
        {service.offer && (
          <span className="inline-flex items-center gap-1 rounded-full bg-primary px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-white">
            <Sparkles className="size-3" />
            {service.offer}
          </span>
        )}
      </div>

      {/* title + desc */}
      <h3 className="text-xl font-bold leading-tight tracking-tight text-foreground">
        {service.serviceTitle}
      </h3>
      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
        {service.serviceDesc}
      </p>

      {/* tags */}
      <div className="mt-4 flex flex-wrap gap-2">
        {service.serviceTags?.slice(0, 4).map((tag) => (
          <span
            key={tag.title}
            className={
              ai
                ? "rounded-full bg-[#1e4fd8]/10 px-2.5 py-1 text-xs font-medium text-[#1e4fd8]"
                : "rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground"
            }
          >
            {tag.title}
          </span>
        ))}
        {service.serviceTags && service.serviceTags.length > 4 && (
          <span className="text-xs text-muted-foreground">+{service.serviceTags.length - 4}</span>
        )}
      </div>

      {/* cta */}
      <Link
        href={service.pageLink}
        className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-primary"
      >
        Learn More
        <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </Link>
    </motion.div>
  );
}

export default function ServicesPage() {
  const aiServices = services.filter((s) => AI_IDS.includes(s.id));
  const coreServices = services.filter((s) => !AI_IDS.includes(s.id));

  return (
    <>
      <SEO metadata={metadata.servicesPage} additionalSchema={servicesPageSchema}>
        <div className="min-h-screen bg-background">
          <HeroSectionGlobal
            primaryHeading="Comprehensive Tech Solutions for Your Business"
            markPrimaryHeadingAsH1Tag
            secondaryHeading="Solutions"
            highlightedString="Solutions"
            icon={Waypoints}
            imageSrc={`${ASSETS_BASE_URL}/tempAssets/heroSections/services-hero.webp?updatedAt=1737449596757`}
            customColor="text-white"
            customHeight="98vh"
            description="From web development to digital marketing, we provide the tools and strategies to enhance your visibility and engagement online"
          />

          {/* ── AI services section ── */}
          <section className="flex w-full justify-center py-16 md:py-20 2xl:py-24">
            <div className={containerClass}>
              <SectionHeading
                primaryHeading="AI solutions that work for you"
                secondaryHeading="AI Services"
                icon={Sparkles}
                isCentered
                highlightedString="AI solutions"
                description="Intelligent agents, voice, and automation to reduce cost and scale operations."
              />

              <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:gap-6">
                {aiServices.map((service, index) => (
                  <ServiceCard key={service.id} service={service} index={index} ai />
                ))}
              </div>
            </div>
          </section>

          {/* ── Voxa AI calling feature ── */}
          <section className="flex w-full justify-center pb-16 md:pb-20 2xl:pb-24">
            <div className={containerClass}>
              <AiCallingAgentsCard />
            </div>
          </section>

          {/* ── Core services section ── */}
          <section className="flex w-full justify-center border-t border-border py-16 md:py-20 2xl:py-24">
            <div className={containerClass}>
              <SectionHeading
                primaryHeading="Everything else your business needs"
                secondaryHeading="Our Services"
                icon={Waypoints}
                isCentered
                highlightedString="business needs"
                description="Web, mobile, design, marketing, and talent , built with the same obsession for quality."
              />

              <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:gap-6">
                {coreServices.map((service, index) => (
                  <ServiceCard key={service.id} service={service} index={index} />
                ))}
              </div>
            </div>
          </section>

          <div className="mt-10 w-full">
            <ContactSection />
          </div>
        </div>
      </SEO>
    </>
  );
}
