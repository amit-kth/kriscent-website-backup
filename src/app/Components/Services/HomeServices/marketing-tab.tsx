"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  FileSearch,
  Megaphone,
  MousePointerClick,
  PenTool,
  SearchCheck,
  Share2,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const easeOut = [0.16, 1, 0.3, 1] as const;

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: (index: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      delay: index * 0.045,
      ease: easeOut,
    },
  }),
};

type MarketingTone = "primary" | "soft" | "dark";

type MarketingService = {
  icon: LucideIcon;
  title: string;
  eyebrow: string;
  text: string;
  tags: string[];
  tone: MarketingTone;
};

const MARKETING_LINK = "/digital-marketing/";

const MARKETING_SERVICES: MarketingService[] = [
  {
    icon: SearchCheck,
    title: "SEO Growth Engine",
    eyebrow: "Search visibility",
    text: "Technical, local, and on-page search optimization.",
    tags: ["Technical SEO", "Local SEO", "Content"],
    tone: "primary",
  },
  {
    icon: Share2,
    title: "Social Media Systems",
    eyebrow: "Social growth",
    text: "Audience growth and active community management.",
    tags: ["SMO", "SMM", "Community"],
    tone: "dark",
  },
  {
    icon: MousePointerClick,
    title: "Paid Acquisition",
    eyebrow: "Performance",
    text: "Performance ad campaigns across Google and Meta.",
    tags: ["Google Ads", "Meta Ads", "Retargeting"],
    tone: "soft",
  },
  {
    icon: PenTool,
    title: "Creative Production",
    eyebrow: "Brand content",
    text: "Brand videos, photography, and ad creatives.",
    tags: ["Videos", "Photos", "Ad creatives"],
    tone: "dark",
  },
  {
    icon: FileSearch,
    title: "Content Marketing",
    eyebrow: "Organic demand",
    text: "Organic blogs, copywriting, and landing pages.",
    tags: ["Blogs", "Landing pages", "Copywriting"],
    tone: "soft",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    eyebrow: "Measurement",
    text: "Lead tracking and performance analytics dashboards.",
    tags: ["Dashboards", "Lead tracking", "Reports"],
    tone: "primary",
  },
];

export function MarketingLayout() {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 2xl:gap-4">
      {MARKETING_SERVICES.map((service, index) => (
        <MarketingTile key={service.title} service={service} index={index} />
      ))}
    </div>
  );
}

function MarketingTile({
  service,
  index,
}: {
  service: MarketingService;
  index: number;
}) {
  const Icon = service.icon;
  const isDark = service.tone === "dark";
  const isPrimary = service.tone === "primary";
  const isSoft = service.tone === "soft";

  return (
    <motion.div
      custom={index}
      variants={revealVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      className="flex"
    >
      <Link
        href={MARKETING_LINK}
        aria-label={`Explore ${service.title}`}
        className={cn(
          "group relative flex w-full flex-col overflow-hidden rounded-3xl p-4",
          "shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_20px_-8px_rgba(0,0,0,0.06),0_20px_50px_-20px_rgba(0,0,0,0.08)]",
          "transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_2px_4px_rgba(0,0,0,0.05),0_12px_28px_-8px_rgba(0,0,0,0.1),0_30px_60px_-20px_rgba(0,0,0,0.12)]",
          "min-h-44 2xl:min-h-52",
          isPrimary && "bg-primary text-primary-foreground",
          isDark && "bg-foreground text-background",
          isSoft && "bg-primary/10 text-foreground"
        )}
      >
        <div
          aria-hidden="true"
          className={cn(
            "absolute -right-10 -top-10 size-32 rounded-full blur-3xl",
            isPrimary || isDark ? "bg-background/15" : "bg-primary/15"
          )}
        />

        <div className="relative z-10 flex h-full flex-col">
          <div className="flex items-start justify-between">
            <span
              aria-hidden="true"
              className={cn(
                "flex size-7 items-center mb-2 justify-center rounded-2xl ring-1 backdrop-blur-md transition group-hover:-translate-y-0.5",
                isPrimary
                  ? "bg-primary-foreground/12 text-primary-foreground ring-primary-foreground/15"
                  : isDark
                    ? "bg-background/12 text-background ring-background/15"
                    : "bg-primary text-primary-foreground ring-primary/20"
              )}
            >
              <Icon className="size-5" />
            </span>

            <span
              aria-hidden="true"
              className="text-[10px] font-semibold tabular-nums opacity-50"
            >
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          <div className="mt-auto">
            <p
              className={cn(
                "text-[9px] font-bold uppercase tracking-[0.18em]",
                isPrimary || isDark ? "text-background/62" : "text-primary"
              )}
            >
              {service.eyebrow}
            </p>

            <h4
              className={cn(
                "mt-1.5 text-balance text-base font-bold leading-tight tracking-tight 2xl:text-lg",
                isPrimary || isDark ? "text-background" : "text-foreground"
              )}
            >
              {service.title}
            </h4>

            {/* Ultra-short description line */}
            <p
              className={cn(
                "mt-1 line-clamp-2 text-[11px] font-medium leading-relaxed 2xl:text-xs",
                isPrimary || isDark ? "text-background/70" : "text-muted-foreground"
              )}
            >
              {service.text}
            </p>

            <div className="mt-3 flex flex-wrap gap-1.5">
              {service.tags.map((tag) => (
                <span
                  key={tag}
                  className={cn(
                    "rounded-full px-2 py-0.5 text-[9px] font-semibold",
                    isPrimary || isDark
                      ? "bg-background/12 text-background/82 ring-1 ring-background/12"
                      : "bg-background text-muted-foreground ring-1 ring-border"
                  )}
                >
                  {tag}
                </span>
              ))}
            </div>

            <span
              className={cn(
                "mt-3.5 inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest transition",
                isPrimary || isDark ? "text-background/55 group-hover:text-background" : "text-primary"
              )}
            >
              Explore
              <ArrowRight
                aria-hidden="true"
                className="size-3.5 transition-transform group-hover:translate-x-0.5"
              />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}