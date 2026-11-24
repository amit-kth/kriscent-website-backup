"use client";

import { cn } from "@/lib/utils";
import { SectionHeading } from "@/app/ReusableComponents/section-heading";
import { Code2, Users2, ArrowRight, CheckCircle2 } from "lucide-react";

/* ─── BULLETS , editorial numbered list ─── */
const bullets = [
  {
    title: "Proof-of-work timesheets",
    sub: "via We360, so you always see real progress",
    icon: "clock",
  },
  {
    title: "IP rights & NDA protection",
    sub: "your ideas stay yours, always",
    icon: "shield",
  },
  {
    title: "Flexible contracts, transparent pricing",
    sub: "no hidden fees, no lock-in",
    icon: "file",
  },
  {
    title: "Scale your team up or down",
    sub: "anytime, in under 48 hours",
    icon: "trend",
  },
  {
    title: "Experienced, vetted programmers",
    sub: "4-stage technical screening",
    icon: "check",
  },
];

const bulletIcons: Record<string, React.ReactNode> = {
  clock: <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 2" /></svg>,
  shield: <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3l8 4v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V7l8-4z" /><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" /></svg>,
  file: <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 2h6l4 4v14a2 2 0 01-2 2H7a2 2 0 01-2-2V4a2 2 0 012-2z" /></svg>,
  star: <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="6" /><path strokeLinecap="round" strokeLinejoin="round" d="M8.5 13.5L7 22l5-3 5 3-1.5-8.5" /></svg>,
  trend: <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 17l6-6 4 4 8-8M15 7h6v6" /></svg>,
  check: <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" /></svg>,
};


/* ─── MAIN ─── */
export default function WhatYoullGet() {
  return (
    <section
      id="offerings"
      className="relative w-full overflow-hidden border-y border-border bg-background"
    >
      {/* editorial big ghost label */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-6 right-0 select-none text-[120px] font-black leading-none tracking-tighter text-foreground/[0.03] md:text-[220px] 2xl:text-[300px]"
      >
        Perks
      </span>

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-4 py-16 sm:px-6 md:py-24 lg:px-8 2xl:max-w-[1720px] 2xl:px-10">
        {/* ── HEADING , full width at top ── */}
        <SectionHeading
          primaryHeading="Everything you need, nothing you don't"
          secondaryHeading="What you'll get"
          icon={CheckCircle2}
          highlightedString="nothing you don't"
          description="Every engagement comes with our commitment to quality, transparency, and speed."
        />

        {/* ── BELOW: left bullets / right cards ── */}
        <div className="mt-4 grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-16 2xl:gap-20">
          {/* LEFT , numbered feature list */}
          <div>
            <div className="border-t border-border">
              {bullets.map((b, i) => (
                <div
                  key={b.title}
                  className="group flex items-center gap-4 border-b border-border py-4 transition-colors duration-300 hover:bg-muted/40"
                >
                  {/* number */}
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-border bg-card text-xs font-bold text-[#1e4fd8]">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* text */}
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-bold text-foreground md:text-base">{b.title}</p>
                    <p className="text-xs text-muted-foreground md:text-sm">{b.sub}</p>
                  </div>

                  {/* icon */}
                  <span className="shrink-0 text-[#1e4fd8]/60 transition group-hover:text-[#1e4fd8]">
                    {bulletIcons[b.icon]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT , bold offering cards */}
          <div className="flex flex-col gap-5 2xl:gap-6">
            {/* featured card , full, dark, strong */}
            <div className="group relative overflow-hidden rounded-[28px] bg-foreground p-8 text-background shadow-2xl md:p-10 2xl:p-12">
              {/* glows */}
              <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#1e4fd8]/40 blur-3xl" />
              <div aria-hidden="true" className="pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-primary/30 blur-3xl" />

              {/* icon + title */}
              <div className="relative z-10 mb-5 flex items-center gap-4">
                <span className="flex size-14 items-center justify-center rounded-2xl bg-background/10 text-background ring-1 ring-background/15 backdrop-blur-md">
                  <Code2 className="size-6" strokeWidth={2} />
                </span>
                <h3 className="text-2xl font-bold tracking-tight text-background md:text-3xl">
                  Hire a developer
                </h3>
              </div>

              <p className="relative z-10 max-w-lg text-sm leading-relaxed text-background/70 md:text-base">
                One dedicated expert matched to your exact stack. Integrated with
                your tools from day one.
              </p>

              <a
                href="/quotation?service=hire-resources"
                className="relative z-10 mt-8 inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-bold text-foreground transition hover:bg-background/90"
              >
                Hire now
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
              </a>
            </div>

            {/* secondary card , light, compact */}
            <div className="group flex items-center justify-between gap-6 rounded-[24px] border border-border bg-card p-7 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-lg 2xl:p-8">
              <div className="flex items-start gap-4">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#1e4fd8]/10 text-[#1e4fd8]">
                  <Users2 className="size-5" strokeWidth={2} />
                </span>
                <div>
                  <h3 className="text-lg font-bold tracking-tight text-foreground md:text-xl">
                    Hire a dedicated team
                  </h3>
                  <p className="mt-1.5 max-w-md text-sm leading-relaxed text-muted-foreground">
                    A ready-made squad of developers, designers, and QA working as
                    one unit inside your workflow.
                  </p>
                </div>
              </div>

              <a
                href="/quotation?service=hire-resources"
                className="group/cta hidden shrink-0 items-center gap-1.5 text-sm font-semibold text-[#1e4fd8] sm:inline-flex"
              >
                Talk to our team
                <ArrowRight className="size-4 transition-transform group-hover/cta:translate-x-1" strokeWidth={2.5} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
