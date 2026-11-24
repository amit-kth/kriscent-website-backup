"use client";

import { SectionHeading } from "@/app/ReusableComponents/section-heading";
import { Wrench } from "lucide-react";

type TechnologyIconsType = {
  icon: React.ElementType;
  title: string;
  iconColor?: string;
};

interface CaseStudyTechnologiesProps {
  techs: TechnologyIconsType[];
}

/* ── Icon color tone map , literal Tailwind classes (JIT-safe) ──
   These are static strings so Tailwind can generate them, unlike the
   original dynamic `bg-${color}10` / `text-${color}` which never worked. */
const colorMap: Record<string, { chip: string; icon: string }> = {
  primary: { chip: "bg-primary/10 text-primary", icon: "text-primary" },
  blue: { chip: "bg-[#1e4fd8]/10 text-[#1e4fd8]", icon: "text-[#1e4fd8]" },
  sky: { chip: "bg-sky-500/10 text-sky-600", icon: "text-sky-600" },
  emerald: { chip: "bg-emerald-500/10 text-emerald-600", icon: "text-emerald-600" },
  teal: { chip: "bg-teal-500/10 text-teal-600", icon: "text-teal-600" },
  amber: { chip: "bg-amber-500/10 text-amber-600", icon: "text-amber-600" },
  violet: { chip: "bg-violet-500/10 text-violet-600", icon: "text-violet-600" },
};

const defaultTone = colorMap.primary;

const CaseStudyTechnologies: React.FC<CaseStudyTechnologiesProps> = ({ techs }) => {
  return (
    <section className="mx-auto w-full max-w-[1280px] px-4 py-12 sm:px-6 lg:px-8 2xl:max-w-[1720px] 2xl:px-10">
      <SectionHeading
        primaryHeading="Technologies Used"
        secondaryHeading="The stack"
        icon={Wrench}
        highlightedString="Technologies"
        description="Built on a battle-tested technology stack, chosen for reliability and scale."
      />

      <div className="grid grid-cols-4 gap-3 sm:grid-cols-6 md:grid-cols-8 2xl:gap-4">
        {techs.map((tech, index) => {
          const Icon = tech.icon;
          const tone = colorMap[tech.iconColor || "primary"] || defaultTone;
          return (
            <div
              key={index}
              className="group flex aspect-video flex-col items-center justify-center gap-3 rounded-2xl p-4 transition duration-300 hover:-translate-y-0.5"
            >
              {/* icon chip */}
              <span className={tone.chip + " flex size-12 items-center justify-center rounded-xl transition duration-300 group-hover:scale-110 md:size-14 2xl:size-16"}>
                <Icon className={tone.icon + " size-6 md:size-7 2xl:size-8"} strokeWidth={1.8} />
              </span>
              {/* title */}
              <p className="text-center text-sm font-medium text-foreground md:text-base">{tech.title}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CaseStudyTechnologies;
