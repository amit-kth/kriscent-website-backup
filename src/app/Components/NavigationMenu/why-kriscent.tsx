'use client';

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { WhyKriscentLinks } from "./navbarConfigs";
import { awards } from "@/app/awards/components/awards-data";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { ASSETS_BASE_URL } from "@/lib/variables";

type Child = (typeof WhyKriscentLinks.childrens)[number];

/* Helpers -------------------------------------------------------------- */

const childrens = WhyKriscentLinks.childrens;
const getChild = (title: string) => childrens.find((c) => c.linkTitle === title);

/* Right-side 2x2 cards (title → accent color) */
const grid = [
  { title: "Our Valuable Clients", color: "#0EA5E9" }, // cyan
  { title: "Career @ Kriscent", color: "#7C3AED" }, // violet
  { title: "Life @ Kriscent", color: "#F43F5E" }, // rose
  { title: "Blog", color: "#F59E0B" }, // amber
];

/* Main ---------------------------------------------------------------- */

export default function WhyKriscent() {
  const about = getChild("About Kriscent")!;
  const recognitions = getChild("Our Recognitions");

  return (
    <TooltipProvider delayDuration={60}>
      <div className="grid gap-2 rounded-4xl bg-background p-2 text-sm lg:grid-cols-[2fr_3fr]">
        <AboutCard child={about} recognitions={recognitions} />

        <div className="grid grid-cols-2 gap-2">
          {grid.map((item, i) => {
            const child = getChild(item.title);
            if (!child) return null;
            return <TintCard key={child.linkTitle} child={child} color={item.color} />;
          })}
        </div>
      </div>
    </TooltipProvider>
  );
}

/* About card (left, dark) ---------------------------------------------- */

function AboutCard({ child, recognitions }: { child: Child; recognitions?: Child }) {
  const awardsHref = recognitions?.target ?? "/awards";

  return (
    <article className="group relative flex min-h-full flex-col overflow-hidden rounded-3xl bg-[#0B0F1A] p-6 text-background">
      {/* background image + dark overlay */}
      <img
        src={`${ASSETS_BASE_URL}/tempAssets/revamp/hero-bg.webp`}
        alt=""
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* top */}
      <Link className="relative" href={child.target}>
        <div className="flex items-start justify-between">
          <span className="flex size-11 items-center justify-center rounded-2xl bg-[#7C5CFF]/30 [&_svg]:size-5">
            {child.icon}
          </span>

          <div
            className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-background/50 hover:text-background"
          >
            About us <ArrowUpRight className="size-3.5" />
          </div>
        </div>

        <div className="mt-6 block">
          <h4 className="text-[18px] font-bold tracking-[-0.02em]">{child.linkTitle}</h4>
          <p className="mt-2 text-[12.5px] leading-relaxed text-background/80">{child.shortDesc}</p>
        </div>
      </Link>

      {/* awards strip */}
      <div className="relative mt-auto pt-5">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-xs uppercase tracking-[0.2em] text-background/40">Recognitions</span>
          {recognitions && (
            <Link
              href={recognitions.target}
              className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-background/50 hover:text-background"
            >
              View all <ArrowUpRight className="size-3" />
            </Link>
          )}
        </div>

        <div className="flex items-center gap-2">
          {awards.slice(0, 3).map((a, i) => (
            <Tooltip key={i}>
              <TooltipTrigger asChild>
                <Link
                  href={awardsHref}
                  className="flex p-2 items-center justify-center rounded-lg bg-white/10 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)] transition hover:bg-white/15"
                >
                  <img src={a.imgUrlDark} alt={a.title ?? "Award"} loading="lazy" className="h-12 w-12 object-contain" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p className="max-w-[180px] text-center text-xs">{a.title}</p>
              </TooltipContent>
            </Tooltip>
          ))}
          <span className="ml-1 text-[10px] uppercase tracking-[0.15em] text-background/40">
            +{awards.length - 3} more
          </span>
        </div>
      </div>
    </article>
  );
}

/* Tinted card (right) --------------------------------------------------- */

function TintCard({ child, color }: { child: Child; color: string }) {
  return (
    <Link
      href={child.target}
      style={{ "--card": color } as React.CSSProperties}
      className={cn(
        "group flex min-h-[168px] flex-col rounded-3xl p-5",
        "bg-[color-mix(in_srgb,var(--card)_10%,transparent)] transition hover:bg-[color-mix(in_srgb,var(--card)_14%,transparent)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      )}
    >
      <span className="mb-6 flex size-10 items-center justify-center rounded-xl bg-[color-mix(in_srgb,var(--card)_18%,transparent)] text-[var(--card)] transition group-hover:scale-105 [&_svg]:size-5">
        {child.icon}
      </span>

      <div className="mt-auto">
        <h4 className="text-md font-bold uppercase">{child.linkTitle}</h4>
        <p className="mt-1.5 line-clamp-2 text-[12px] leading-relaxed text-muted-foreground">{child.shortDesc}</p>
      </div>
    </Link>
  );
}
