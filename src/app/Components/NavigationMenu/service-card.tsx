"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Brain,
  Globe,
  Briefcase,
  FolderCode,
  Bot,
  BookOpen,
  Smartphone,
  Palette,
  Server,
  Search,
  Share2,
  MessageCircle,
  TrendingUp,
  Users,
  Code2,
  Cpu,
  Megaphone,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import SparklesText from "@/components/ui/sparkles-text";
import { ASSETS_BASE_URL } from "@/lib/variables";

type ServiceLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

type ServiceCard = {
  title: string;
  target: string;
  icon: LucideIcon;
  sparkle?: boolean;
  shortDesc: string;
  links: ServiceLink[];
  color: string; // hex brand color
};

/* Data ---------------------------------------------------------------- */

const AI_CARD: ServiceCard = {
  title: "AI Services",
  target: "/ai-solutions",
  icon: Brain,
  sparkle: true,
  shortDesc:
    "AI-powered agents, RAG systems, and automation built to transform how your business operates.",
  links: [
    { label: "AI Chatbots", href: "/ai-solutions", icon: Bot },
    { label: "RAG-Based AI", href: "/ai-solutions", icon: BookOpen },
    { label: "AI Customer Support", href: "/ai-solutions/ai-calling-agent", icon: MessageCircle },
    { label: "AI Report Generation", href: "/ai-solutions", icon: Cpu },
  ],
  color: "#7C5CFF",
};

const OTHER_CARDS: ServiceCard[] = [
  {
    title: "Software Development",
    target: "/web-solutions",
    icon: Globe,
    shortDesc: "Web, mobile, and business platforms built for scale.",
    links: [
      { label: "Web Development", href: "/web-solutions", icon: Globe },
      { label: "Mobile Apps", href: "/app-solutions", icon: Smartphone },
      { label: "UI/UX Design", href: "/design-services", icon: Palette },
      { label: "Backend & APIs", href: "/web-solutions", icon: Server },
    ],
    color: "#159BD8",
  },
  {
    title: "Digital Marketing",
    target: "/digital-marketing",
    icon: Briefcase,
    shortDesc: "SEO, ads, social, and content to grow your brand.",
    links: [
      { label: "SEO", href: "/digital-marketing", icon: Search },
      { label: "Social Media (SMO)", href: "/digital-marketing", icon: Share2 },
      { label: "WhatsApp Marketing", href: "/digital-marketing", icon: MessageCircle },
      { label: "Google Ads & PPC", href: "/digital-marketing", icon: TrendingUp },
    ],
    color: "#21B97A",
  },
  {
    title: "Hire Resources",
    target: "/hire-talent",
    icon: FolderCode,
    shortDesc: "Dedicated developers and specialists to scale your team.",
    links: [
      { label: "Hire a Team", href: "/hire-talent", icon: Users },
      { label: "Hire Developers", href: "/hire-talent", icon: Code2 },
      { label: "Hire AI Engineers", href: "/hire-talent", icon: Cpu },
      { label: "Hire Marketers", href: "/hire-talent", icon: Megaphone },
    ],
    color: "#F05A78",
  },
];

/* Main ---------------------------------------------------------------- */

export default function ServicesContent() {
  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
      <AIHeroCard card={AI_CARD} />
      {OTHER_CARDS.map((card) => (
        <ServiceCardItem key={card.title} card={card} />
      ))}
    </div>
  );
}

/* AI Hero Card (40% , image background) --------------------------------- */

function AIHeroCard({ card }: { card: ServiceCard }) {
  const Icon = card.icon;

  return (
    <article className="group relative flex min-h-[320px] cursor-pointer flex-col overflow-hidden rounded-3xl bg-[#0B0F1A] text-white">
      {/* Background image + dark overlay */}
      <Image
        src={`${ASSETS_BASE_URL}/tempAssets/heroSections/ai-home.webp?updatedAt=1754038567538`}
        alt=""
        fill
        priority
        sizes="(max-width: 1024px) 100vw, 40vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F1A]/50 via-[#0B0F1A]/80 to-[#0B0F1A]" />

      {/* Brand ambient glow */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#7C5CFF]/25 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 flex flex-1 flex-col justify-between p-6 lg:p-7">
        {/* Top , icon + tag */}
        <div className="flex items-start justify-between">
          <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[#7C5CFF]/30 [&_svg]:size-5">
            <Icon strokeWidth={2.2} />
          </span>

          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#7C5CFF]/20 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-white">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            Flagship
          </span>
        </div>

        {/* Bottom , title, description, links */}
        <div>
          <Link
            href={card.target}
            className="block rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            {card.sparkle ? (
              <SparklesText
                text={card.title}
                className="text-[26px] font-bold leading-[1.05] tracking-[-0.03em] text-white lg:text-[30px]"
              />
            ) : (
              <h3 className="text-[26px] font-bold leading-[1.05] tracking-[-0.03em] text-white lg:text-[30px]">
                {card.title}
              </h3>
            )}

            <p className="mt-3 max-w-[380px] text-[13px] leading-[1.55] text-white/70 lg:text-sm">
              {card.shortDesc}
            </p>
          </Link>

          {/* Sub-links , chip row */}
          <div className="mt-5 flex flex-wrap gap-1.5">
            {card.links.map((link) => {
              const LinkIcon = link.icon;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className="group/link inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1.5 text-[11px] font-medium text-white/85 transition-colors duration-200 hover:bg-[#7C5CFF]/30 hover:text-white"
                >
                  <LinkIcon className="size-3 shrink-0" strokeWidth={2.2} />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <Link
            href={card.target}
            className="group/cta mt-5 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-white/70 transition-colors hover:text-white"
          >
            <span>Explore all AI services</span>
            <ArrowUpRight className="size-3.5 transition-transform group-hover/cta:-translate-y-0.5 group-hover/cta:translate-x-0.5" strokeWidth={2.2} />
          </Link>
        </div>
      </div>
    </article>
  );
}

/* Standard Service Card (clean, no image) -------------------------------- */

function ServiceCardItem({ card }: { card: ServiceCard }) {
  const Icon = card.icon;

  return (
    <article
      style={{ "--card": card.color } as React.CSSProperties}
      className="group relative flex min-h-[320px] cursor-pointer flex-col overflow-hidden rounded-3xl bg-[color-mix(in_srgb,var(--card)_10%,transparent)] transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-[color-mix(in_srgb,var(--card)_14%,transparent)]"
    >
      {/* Content */}
      <div className="relative z-10 flex flex-1 flex-col p-5">
        {/* Icon */}
        <span className="mb-6 flex size-11 items-center justify-center rounded-xl bg-[color-mix(in_srgb,var(--card)_18%,transparent)] text-[var(--card)] transition group-hover:scale-105 [&_svg]:size-5">
          <Icon strokeWidth={2.2} />
        </span>

        {/* Title + description */}
        <Link
          href={card.target}
          className="mb-4 block rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-label={`Explore ${card.title}`}
        >
          <h3 className="mb-1 text-base font-semibold leading-tight tracking-[-0.02em] uppercase text-foreground">
            {card.title}
          </h3>
          <p className="text-[12px] leading-[1.5] text-muted-foreground">{card.shortDesc}</p>
        </Link>

        {/* Divider */}
        <div className="mb-2 h-px bg-border" />

        {/* Links */}
        <nav aria-label={`${card.title} links`} className="flex flex-1 flex-col gap-0.5">
          {card.links.map((link) => {
            const LinkIcon = link.icon;
            return (
              <Link
                key={link.label}
                href={link.href}
                className="group/link flex items-center gap-2 rounded-lg px-2 py-1.5 text-[12px] font-medium text-foreground/70 transition-all duration-200 hover:translate-x-0.5 hover:bg-[color-mix(in_srgb,var(--card)_12%,transparent)] hover:text-[var(--card)]"
              >
                <LinkIcon className="size-3 shrink-0 transition-transform duration-200 group-hover/link:scale-110" strokeWidth={2.2} />
                <span className="flex-1 truncate">{link.label}</span>
                <ArrowUpRight
                  className="size-3 shrink-0 opacity-0 transition-all duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 group-hover/link:opacity-100"
                  strokeWidth={2.2}
                />
              </Link>
            );
          })}
        </nav>
      </div>
    </article>
  );
}
