"use client";

import {
  Trophy,
  Building2,
  Users2,
  Globe2,
  Award,
  BadgeCheck,
  Rocket,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionHeading } from "@/app/ReusableComponents/section-heading";
import { cn } from "@/lib/utils";

const milestones: {
  year: string;
  title: string;
  description: string;
  icon: LucideIcon;
  text: string; // accent text color
  bg: string; // accent bg class
  ring: string; // node ring/glow
}[] = [
    {
      year: "2012",
      title: "The Beginning",
      description: "A tech startup vision by Kapil Gautam.",
      icon: Rocket,
      text: "text-violet-300",
      bg: "bg-violet-500",
      ring: "shadow-[0_0_20px_rgba(139,92,246,0.4)]",
    },
    {
      year: "2014",
      title: "Official Establishment",
      description: "Kriscent Techno Hub Pvt Ltd incorporated.",
      icon: Building2,
      text: "text-sky-300",
      bg: "bg-sky-500",
      ring: "shadow-[0_0_20px_rgba(14,165,233,0.4)]",
    },
    {
      year: "2016",
      title: "Growing Strong",
      description: "100+ clients, 25+ employees worldwide.",
      icon: Users2,
      text: "text-emerald-300",
      bg: "bg-emerald-500",
      ring: "shadow-[0_0_20px_rgba(16,185,129,0.4)]",
    },
    {
      year: "2018",
      title: "Global Reach",
      description: "Expanded across a million networks globally.",
      icon: Globe2,
      text: "text-amber-300",
      bg: "bg-amber-500",
      ring: "shadow-[0_0_20px_rgba(245,158,11,0.4)]",
    },
    {
      year: "2020",
      title: "Startup Recognition",
      description: "Recognized by Startup India.",
      icon: Award,
      text: "text-primary",
      bg: "bg-primary",
      ring: "shadow-[0_0_20px_hsl(var(--primary)/0.5)]",
    },
    {
      year: "2021",
      title: "Global Excellence",
      description: "Awarded by Go Global Awards.",
      icon: Trophy,
      text: "text-amber-300",
      bg: "bg-amber-500",
      ring: "shadow-[0_0_20px_rgba(245,158,11,0.4)]",
    },
    {
      year: "2022",
      title: "International Expansion",
      description: "Offices in UAE, UK, and Ireland.",
      icon: Globe2,
      text: "text-sky-300",
      bg: "bg-sky-500",
      ring: "shadow-[0_0_20px_rgba(14,165,233,0.4)]",
    },
    {
      year: "2023",
      title: "ISO Certified",
      description: "Achieved ISO certification.",
      icon: Trophy,
      text: "text-emerald-300",
      bg: "bg-emerald-500",
      ring: "shadow-[0_0_20px_rgba(16,185,129,0.4)]",
    },
    {
      year: "2024",
      title: "CMMI Level 3",
      description: "Recognized as a CMMI Level 3 company.",
      icon: BadgeCheck,
      text: "text-primary",
      bg: "bg-primary",
      ring: "shadow-[0_0_20px_hsl(var(--primary)/0.5)]",
    },
  ];

export default function CompanyJourney() {
  return (
    <div className="flex flex-col overflow-hidden">
      {/* ── 01 · Intro + video ── */}
      <section aria-labelledby="journey-intro" className="flex w-full justify-center py-16 md:py-24 2xl:py-32">
        <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8 2xl:max-w-[1720px] 2xl:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
            <div>
              <span className="mb-4 inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                <span className="h-px w-6 bg-primary" />
                Our Story
              </span>
              <h2
                id="journey-intro"
                className="text-[32px] font-bold leading-[1.05] tracking-[-0.03em] text-foreground sm:text-4xl lg:text-[46px] 2xl:text-[54px]"
              >
                A decade of <span className="text-primary">Kriscent</span> in Kota.
              </h2>
              <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
                For over 10 years we have proudly called Kota home, growing from a
                small team of developers into 100+ tech professionals.
              </p>
              <div className="mt-8 flex gap-10 md:gap-14">
                {[
                  { value: "10+", label: "Years" },
                  { value: "100+", label: "Tech pros" },
                  { value: "15+", label: "Countries" },
                ].map((f, i) => (
                  <div key={f.label} className={cn("border-l border-border pl-4", i === 0 && "border-l-0 pl-0")}>
                    <p className="text-3xl font-bold leading-none tracking-tight text-foreground md:text-4xl">{f.value}</p>
                    <p className="mt-1.5 text-xs text-muted-foreground md:text-sm">{f.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div aria-hidden="true" className="pointer-events-none absolute -right-6 -top-6 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
              <div className="relative overflow-hidden rounded-[24px] shadow-xl lg:rounded-[28px]">
                <iframe
                  width="100%"
                  height="320"
                  src="https://www.youtube.com/embed/XZzXDNqtIDs?rel=0&modestbranding=1&vq=hd720"
                  title="Kriscent-Kota Introduction"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  className="block aspect-video w-full"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 02 · Premium dark timeline ── */}
      <section aria-labelledby="journey-timeline" className="flex w-full justify-center">
        <div className="w-full bg-foreground py-16 text-background md:py-24 2xl:py-28">
          <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8 2xl:max-w-[1720px] 2xl:px-10">
            <div className="mb-14 text-center md:mb-20">
              <span className="mb-4 inline-flex items-center justify-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-background/50">
                <span className="h-px w-6 bg-primary" />
                Milestones & Achievements
                <span className="h-px w-6 bg-primary" />
              </span>
              <h2
                id="journey-timeline"
                className="text-3xl font-bold tracking-[-0.03em] text-background sm:text-4xl lg:text-5xl 2xl:text-6xl"
              >
                Our journey <span className="text-primary">through time.</span>
              </h2>
            </div>

            {/* central rail timeline */}
            <div className="relative mx-auto max-w-4xl">
              {/* vertical rail */}
              <div aria-hidden="true" className="absolute left-4 top-0 h-full w-px bg-background/15 md:left-1/2 md:-translate-x-1/2" />

              <div className="flex flex-col gap-10 md:gap-12">
                {milestones.map((m, i) => {
                  const left = i % 2 === 0;
                  return (
                    <div key={m.year} className="relative md:grid md:grid-cols-2 md:gap-10">
                      {/* node on rail */}
                      <div
                        className={cn(
                          "absolute left-4 top-0 z-10 -translate-x-1/2 md:left-1/2",
                          "flex size-10 items-center justify-center rounded-full text-white",
                          m.bg,
                          m.ring
                        )}
                      >
                        <m.icon className="size-4" strokeWidth={2.2} />
                      </div>

                      {/* content card , alternating sides */}
                      <div className={cn("pl-12 md:pl-0", left ? "md:col-start-1 md:pr-12 md:text-right" : "md:col-start-2 md:pl-12")}>
                        <div className="group rounded-2xl bg-background/5 p-5 backdrop-blur transition duration-300 hover:bg-background/10 md:p-6">
                          <p className={cn("text-3xl font-black leading-none tracking-tight md:text-4xl", m.text)}>{m.year}</p>
                          <h3 className="mt-2 text-lg font-bold tracking-tight text-background">{m.title}</h3>
                          <p className="mt-1.5 text-sm leading-relaxed text-background/60">{m.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 03 · Journey video ── */}
      <section aria-labelledby="journey-video" className="flex w-full justify-center py-16 md:py-24">
        <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8 2xl:max-w-[1720px] 2xl:px-10">
          <div className="mb-8 text-center md:mb-12">
            <span className="mb-3 inline-flex items-center justify-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              <span className="h-px w-6 bg-primary" />
              In Their Words
              <span className="h-px w-6 bg-primary" />
            </span>
            <h2 id="journey-video" className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
              Our complete <span className="text-primary">journey.</span>
            </h2>
          </div>
          <div className="mx-auto max-w-4xl overflow-hidden rounded-[24px] shadow-xl lg:rounded-[28px]">
            <iframe
              width="100%"
              height="360"
              src="https://www.youtube.com/embed/fX6W6nHPhfY?rel=0&vq=hd720"
              title="Kriscent Journey"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              className="block aspect-video w-full"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </div>
  );
}
