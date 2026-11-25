'use client';

import Link from "next/link";
import { ArrowUpRight, BriefcaseBusiness, Rss } from "lucide-react";
import { cn } from "@/lib/utils";

interface InsightCard {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  color: string; // hex accent color
}

/* Data ---------------------------------------------------------------- */

const insightCards: InsightCard[] = [
  {
    title: "Case Studies",
    description:
      "Explore our client success stories and the projects we have delivered across industries.",
    href: "/case-studies",
    icon: <BriefcaseBusiness size={20} />,
    color: "#1e4fd8",
  },
  {
    title: "Blog",
    description:
      "Read the latest insights, trends, and practical guides from our team of experts.",
    href: "https://kriscent.in/blog",
    icon: <Rss size={20} />,
    color: "#F59E0B",
  },
];

/* Main ---------------------------------------------------------------- */

export default function InsightsContent() {
  return (
    <div className="grid gap-2 rounded-4xl bg-background p-2 text-sm lg:grid-cols-2">
      {insightCards.map((card) => (
        <InsightCardItem key={card.title} card={card} />
      ))}
    </div>
  );
}

/* Card ---------------------------------------------------------------- */

function InsightCardItem({ card }: { card: InsightCard }) {
  const isExternal = card.href.startsWith("http");

  return (
    <Link
      href={card.href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      style={{ "--card": card.color } as React.CSSProperties}
      className={cn(
        "group flex min-h-[150px] flex-col rounded-3xl p-5",
        "bg-[color-mix(in_srgb,var(--card)_10%,transparent)] transition hover:bg-[color-mix(in_srgb,var(--card)_14%,transparent)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      )}
    >
      <span className="mb-5 flex size-10 items-center justify-center rounded-xl bg-[color-mix(in_srgb,var(--card)_18%,transparent)] text-[var(--card)] transition group-hover:scale-105 [&_svg]:size-5">
        {card.icon}
      </span>

      <div className="mt-auto">
        <div className="flex items-center justify-between gap-2">
          <h4 className="text-md font-bold uppercase">{card.title}</h4>
          <ArrowUpRight
            className="size-4 shrink-0 text-[var(--card)] opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
            strokeWidth={2.2}
          />
        </div>
        <p className="mt-1.5 line-clamp-2 text-[12px] leading-relaxed text-muted-foreground">
          {card.description}
        </p>
      </div>
    </Link>
  );
}
