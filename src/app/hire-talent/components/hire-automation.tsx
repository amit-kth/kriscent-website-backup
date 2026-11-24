"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/app/ReusableComponents/section-heading";
import { Eye, GitCommit, FileCheck2, Activity } from "lucide-react";

/* ─── PROOF POINTS , with theme accent colors ─── */
const points = [
  { icon: Eye, title: "Track activity", desc: "Tasks, apps, and hours in real time.", color: "#1e4fd8" },
  { icon: GitCommit, title: "Capture output", desc: "Commits and deliverables, not clock time.", color: "#E53E3E" },
  { icon: FileCheck2, title: "Better delivery", desc: "Feedback loops that tighten timelines.", color: "#10B981" },
];

/* ─── STATS ─── */
const stats = [
  { value: "6h 42m", label: "Active today" },
  { value: "11/14", label: "Tasks done" },
  { value: "7", label: "Commits" },
];

/* ─── ACTIVITY ─── */
const activity = [
  { time: "10:42", text: "Deployed staging build", dot: "#1e4fd8" },
  { time: "09:18", text: "Resolved 2 support tickets", dot: "#E53E3E" },
  { time: "08:05", text: "Committed auth module", dot: "#10B981" },
];

/* ─── LIVE BARS ─── */
const bars = [40, 70, 55, 85, 50, 78, 45];

/* ─── MAIN ─── */
export default function Automation() {
  return (
    <section className="relative w-full overflow-hidden bg-muted/30 py-16 md:py-24 2xl:py-28">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8 2xl:max-w-[1720px] 2xl:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 2xl:gap-20">
          {/* ── LEFT ── */}
          <div>
            <SectionHeading
              primaryHeading="Full transparency, measurable output"
              secondaryHeading="Transparency by default"
              icon={Eye}
              highlightedString="measurable output"
            />

            {/* colored features */}
            <div className="mt-8 space-y-4">
              {points.map((p, i) => {
                const Icon = p.icon;
                return (
                  <motion.div
                    key={p.title}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex items-center gap-4"
                  >
                    <span
                      className="flex size-10 shrink-0 items-center justify-center rounded-xl text-white shadow-md"
                      style={{ backgroundColor: p.color }}
                    >
                      <Icon className="size-5" strokeWidth={2} />
                    </span>
                    <div>
                      <p className="text-base font-bold text-foreground">{p.title}</p>
                      <p className="text-sm text-muted-foreground">{p.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* stat band */}
            <div className="mt-9 grid grid-cols-3 divide-x divide-border border-t border-border pt-6">
              {stats.map((s) => (
                <div key={s.label} className="px-4 first:pl-0">
                  <p className="text-2xl font-bold leading-none tracking-tight text-foreground md:text-3xl">{s.value}</p>
                  <p className="mt-1.5 text-xs text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT , live activity panel ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* glow */}
            <div aria-hidden="true" className="pointer-events-none absolute -inset-4 rounded-[36px] bg-gradient-to-br from-[#1e4fd8]/15 via-transparent to-primary/10 blur-2xl" />

            <div className="relative rounded-[28px] border border-border bg-card p-6 shadow-lg md:p-8">
              {/* header */}
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-[#1e4fd8]/10 text-[#1e4fd8]">
                    <Activity className="size-5" strokeWidth={2} />
                  </span>
                  <div>
                    <p className="text-base font-bold text-foreground">Live activity</p>
                    <p className="text-xs text-muted-foreground">We360</p>
                  </div>
                </div>
                {/* pulsing live */}
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-600">
                  <span className="relative flex size-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500/70" />
                    <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
                  </span>
                  Live
                </span>
              </div>

              {/* activity rows */}
              <div className="divide-y divide-border">
                {activity.map((a) => (
                  <div key={a.time} className="flex items-center gap-4 py-3">
                    <span className="w-10 text-xs font-semibold text-muted-foreground tabular-nums">{a.time}</span>
                    <span className="flex-1 text-sm font-medium text-foreground">{a.text}</span>
                    <span className="size-2 rounded-full" style={{ backgroundColor: a.dot }} />
                  </div>
                ))}
              </div>

              {/* live bars */}
              <div className="mt-6 border-t border-border pt-5">
                <div className="flex h-16 items-end justify-center gap-1.5">
                  {bars.map((h, i) => (
                    <motion.span
                      key={i}
                      className="w-1.5 rounded-full bg-gradient-to-t from-[#1e4fd8] to-[#60A5FA]"
                      initial={{ height: 8 }}
                      animate={{ height: [`${8}%`, `${h}%`, `${8}%`] }}
                      transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.1, ease: "easeInOut" }}
                    />
                  ))}
                </div>
                <p className="mt-2 text-center text-[10px] text-muted-foreground">Live output trend</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
