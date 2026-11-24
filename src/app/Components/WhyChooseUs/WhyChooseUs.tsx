"use client";

import React from "react";
import { whyChooseUs } from "./WhyChooseUsJson";
import { Info } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { TablerIcon } from "@tabler/icons-react";
import { SectionHeading } from "@/app/ReusableComponents/section-heading";
import { cn } from "@/lib/utils";

const containerClass =
  "mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8 xl:max-w-[1400px] 2xl:max-w-[1720px] 2xl:px-10";

/* Per-feature accent , restrained, on the icon only */
const accents = [
  { iconBg: "bg-primary", text: "text-primary" },
  { iconBg: "bg-[#7AB037]", text: "text-[#7AB037]" },
  { iconBg: "bg-sky-600", text: "text-sky-600" },
  { iconBg: "bg-amber-500", text: "text-amber-500" },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose" aria-labelledby="why-choose-title" className="flex w-full justify-center">
      <div className={containerClass}>
        <SectionHeading
          primaryHeading="Why Our Customers Trust Us"
          secondaryHeading="Why Choose us"
          highlightedString="Trust"
          highlightedColor="#7AB037"
          glowEffect={false}
          icon={Info}
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:gap-6">
          {whyChooseUs.map((feature, index) => (
            <Card
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              accent={accents[index % accents.length]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface CardProps {
  title: string;
  description: string;
  icon: LucideIcon | TablerIcon;
  accent: { iconBg: string; text: string };
}

const Card = ({ title, description, icon: Icon, accent }: CardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border bg-background p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:p-7">
      {/* subtle hover wash */}
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute -right-10 -top-10 size-28 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100",
          accent.iconBg
        )}
      />

      <div className="relative z-10">
        <span
          className={cn(
            "mb-5 flex size-12 items-center justify-center rounded-xl text-white shadow-lg transition duration-300 group-hover:-translate-y-0.5",
            accent.iconBg
          )}
        >
          <Icon size={24} strokeWidth={2} />
        </span>

        <h3 className="mb-2 text-lg font-bold tracking-tight text-foreground md:text-xl">
          {title}
        </h3>

        <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
          {description}
        </p>
      </div>
    </div>
  );
};
