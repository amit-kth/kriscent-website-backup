"use client";

import { useState, type ElementType } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  Megaphone,
  UsersRound,
} from "lucide-react";
import { SectionHeading } from '@/app/ReusableComponents/section-heading';
import { cn } from "@/lib/utils";
import { AiMlExperience } from "./ai-ml-tab";
import { SoftwareLayout } from "./software-tab";
import { MarketingLayout } from "./marketing-tab";
import { HireLayout } from "./hire-tab";

export type ServiceKey = "ai-ml" | "software" | "marketing" | "hire";

type TabItem = {
  id: ServiceKey;
  label: string;
  shortLabel: string;
  eyebrow: string;
  title: string;
  summary: string;
  href: string;
  icon: ElementType;
};

const SERVICES: TabItem[] = [
  {
    id: "ai-ml",
    label: "AI & ML Services",
    shortLabel: "AI & ML",
    eyebrow: "Applied intelligence",
    title: "AI systems for automation, support, and smarter operations.",
    summary:
      "Chatbots, GenAI products, LLM integrations, assistants, automation, and predictive systems.",
    href: "/services/ai-solutions",
    icon: BrainCircuit,
  },
  {
    id: "software",
    label: "Software Development",
    shortLabel: "Software",
    eyebrow: "Product engineering",
    title: "Web, mobile, and business platforms built for scale.",
    summary:
      "Websites, web apps, mobile apps, CRMs, LMS, eCommerce, dashboards, and industry platforms.",
    href: "/services/web-solutions/",
    icon: Code2,
  },
  {
    id: "marketing",
    label: "Digital Marketing",
    shortLabel: "Marketing",
    eyebrow: "Growth systems",
    title: "Marketing execution that improves visibility and conversion.",
    summary:
      "SEO, paid ads, social media marketing, and content campaigns designed to improve visibility and conversions.", // AEO: Clean, non-jargon, outcome-focused
    href: "/services/digital-marketing",
    icon: Megaphone,
  },
  {
    id: "hire",
    label: "Hire Resources",
    shortLabel: "Hire",
    eyebrow: "Dedicated teams",
    title: "Specialized resources for product, design, QA, AI, and marketing.",
    summary:
      "Hire developers, designers, QA, DevOps, AI engineers, marketers, or complete delivery teams.",
    href: "/hire-developer",
    icon: UsersRound,
  },
];

export default function ServicesShowcase() {
  const [activeService, setActiveService] = useState<ServiceKey>("ai-ml");
  const active = SERVICES.find((s) => s.id === activeService) ?? SERVICES[0];

  // AEO/GEO Validated Structured Schema
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "provider": {
      "@type": "Organization",
      "name": "Kriscent Techno Hub Pvt. Ltd.",
      "url": "https://kriscent.com"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Kriscent Professional Services Catalog",
      "itemListElement": SERVICES.map((service, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.label,
          "description": service.summary,
          "url": `https://kriscent.com${service.href}`
        },
        "position": index + 1
      }))
    }
  };

  return (
    <section
      id="services"
      aria-labelledby="services-heading" // FIXED: Links directly to the semantic page heading for robots and screen readers
      className="relative overflow-hidden bg-background py-12 md:py-16 2xl:py-20"
    >
      {/* ── GEO/SEO JSON-LD Schema (Initial HTML Rendered) ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />

      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8 2xl:max-w-[1680px] 2xl:px-10">

        {/* Hidden fallback header anchor to guarantee extraction of the query */}
        <h2 id="services-heading" className="sr-only">
          What IT services does Kriscent offer?
        </h2>

        <SectionHeading
          primaryHeading="What IT services does Kriscent offer?" // AEO: Direct question format
          secondaryHeading="What we do"
          description="Kriscent offers four core services: AI & ML development, software development, digital marketing, and dedicated hire-a-resource teams. Each is structured for measurable business outcomes." // AEO: Fact-first direct answer listing everything
          highlightedString="IT services"
          icon={BriefcaseBusiness}
          className="mb-0"
        />

        <div className="mt-3 md:mt-5">
          <ServiceTabs activeService={activeService} onChange={setActiveService} />
          <ServicePanel service={active} />
        </div>
      </div>
    </section>
  );
}

function ServiceTabs({
  activeService,
  onChange,
}: {
  activeService: ServiceKey;
  onChange: (value: ServiceKey) => void;
}) {
  return (
    <div
      role="tablist"
      aria-label="Service categories"
      className={cn(
        "no-scrollbar flex w-full gap-2 overflow-x-auto rounded-full bg-card p-1.5 ring-1 ring-border",
        "md:grid md:grid-cols-4"
      )}
    >
      {SERVICES.map((service) => {
        const Icon = service.icon;
        const isActive = activeService === service.id;

        return (
          <button
            key={service.id}
            id={`service-tab-${service.id}`}
            type="button"
            role="tab"
            aria-selected={isActive}
            aria-controls={`service-panel-${service.id}`}
            onClick={() => onChange(service.id)}
            className={cn(
              "group min-w-48 rounded-full px-4 py-3 text-left outline-none transition",
              "focus-visible:ring-2 focus-visible:ring-ring",
              "md:min-w-0 2xl:px-5",
              isActive
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-accent hover:text-foreground"
            )}
          >
            <span className="flex items-center gap-3">
              <span
                className={cn(
                  "flex size-9 shrink-0 items-center justify-center rounded-full ring-1 transition",
                  isActive
                    ? "bg-primary-foreground/10 ring-primary-foreground/15"
                    : "bg-background ring-border"
                )}
              >
                <Icon className="size-4" />
              </span>

              <span className="min-w-0">
                <span className="block truncate text-sm font-bold leading-tight">
                  {service.label}
                </span>

                <span
                  className={cn(
                    "mt-1 hidden text-xs font-medium leading-tight lg:block",
                    isActive
                      ? "text-primary-foreground/70"
                      : "text-muted-foreground"
                  )}
                >
                  {service.eyebrow}
                </span>
              </span>
            </span>
          </button>
        );
      })}
    </div>
  );
}

function ServicePanel({ service }: { service: TabItem }) {
  const isAiMl = service.id === "ai-ml";

  return (
    <article
      id={`service-panel-${service.id}`}
      role="tabpanel"
      aria-labelledby={`service-tab-${service.id}`}
      className={cn(
        "mt-4",
        !isAiMl && "grid gap-4 lg:grid-cols-12 2xl:gap-5"
      )}
    >
      {isAiMl ? (
        <AiMlExperience service={service} />
      ) : (
        <>
          <ServiceOverview service={service} />
          <div className="lg:col-span-8">
            {service.id === "software" && <SoftwareLayout />}
            {service.id === "marketing" && <MarketingLayout />}
            {service.id === "hire" && <HireLayout />}
          </div>
        </>
      )}
    </article>
  );
}

function ServiceOverview({ service }: { service: TabItem }) {
  const Icon = service.icon;

  return (
    <div className="lg:col-span-4">
      <Link
        href={service.href}
        aria-label={`Explore ${service.label}`}
        className={cn(
          "group relative flex h-full min-h-96 flex-col overflow-hidden rounded-3xl",
          "bg-foreground p-5 text-background outline-none",
          "transition duration-300 hover:-translate-y-0.5",
          "focus-visible:ring-2 focus-visible:ring-ring",
          "2xl:min-h-[420px] 2xl:p-6"
        )}
      >
        <div aria-hidden="true" className="absolute inset-0 bg-primary/20" />
        <div
          aria-hidden="true"
          className="absolute -right-16 -top-16 size-56 rounded-full bg-background/10 blur-3xl"
        />

        <div className="relative z-10 flex h-full flex-col">
          <div className="flex items-start justify-between gap-4">
            <span className="flex size-11 items-center justify-center rounded-2xl bg-background/10 text-background ring-1 ring-background/15 backdrop-blur-md">
              <Icon className="size-5" />
            </span>

            <span className="flex size-9 items-center justify-center rounded-2xl bg-background/10 text-background/80 ring-1 ring-background/15 backdrop-blur-md transition duration-300 group-hover:rotate-45 group-hover:bg-background group-hover:text-foreground">
              <ArrowUpRight className="size-4" />
            </span>
          </div>

          <div className="mt-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-background/60">
              {service.eyebrow}
            </p>

            <h3 className="mt-3 max-w-sm text-balance text-3xl font-bold leading-tight tracking-tight text-background md:text-4xl 2xl:text-[42px]">
              {service.title}
            </h3>

            <p className="mt-3 max-w-sm text-sm font-medium leading-relaxed text-background/70 2xl:text-base">
              {service.summary}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {["Plan", "Build", "Scale"].map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-background/10 px-3 py-1 text-xs font-semibold text-background/80 ring-1 ring-background/15 backdrop-blur-md"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 border-t border-background/15 pt-4">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-background/70 transition group-hover:text-background">
              Explore service
              <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}