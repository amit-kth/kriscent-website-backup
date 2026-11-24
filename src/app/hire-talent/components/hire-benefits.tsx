"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ShieldCheck, Eye, Wallet, Clock, TrendingUp, Headset, Users, ArrowRight } from "lucide-react";

/* ─── BENEFITS ─── */
const benefits: {
  title: string;
  desc: string;
  stat: string;
  statLabel: string;
  featured?: boolean;
  variant: "default" | "brand" | "accent";
  icon: React.ElementType;
}[] = [
  {
    title: "Rigorously vetted",
    desc: "Every developer passes a 4-stage technical screening before joining our network.",
    stat: "3%",
    statLabel: "acceptance rate",
    featured: true,
    variant: "accent",
    icon: ShieldCheck,
  },
  {
    title: "Transparent by default",
    desc: "Real-time reporting and direct access to your team.",
    stat: "100%",
    statLabel: "visibility",
    variant: "default",
    icon: Eye,
  },
  {
    title: "Honest pricing",
    desc: "Fixed rates, no hidden fees, no surprise invoices.",
    stat: "$0",
    statLabel: "setup cost",
    variant: "default",
    icon: Wallet,
  },
  {
    title: "On time, on scope",
    desc: "Realistic timelines with clear milestones , and we hit them.",
    stat: "97%",
    statLabel: "on-time delivery",
    variant: "brand",
    icon: Clock,
  },
  {
    title: "Scale in a click",
    desc: "Add or remove team members anytime, no long-term lock-in.",
    stat: "48h",
    statLabel: "to scale up",
    variant: "default",
    icon: TrendingUp,
  },
  {
    title: "Dedicated support",
    desc: "A single point of contact who owns your project end-to-end.",
    stat: "24/7",
    statLabel: "account manager",
    variant: "default",
    icon: Headset,
  },
];

/* ─── MAIN ─── */
export default function BenefitsBand() {
  return (
    <section className="relative w-full overflow-hidden bg-foreground text-white">
      {/* top hairline */}
      <div aria-hidden="true" className="absolute left-0 right-0 top-0 h-px bg-white/10" />

      {/* brand glows */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(229,62,62,0.14),transparent_55%)]" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-40 h-125 w-125 rounded-full bg-[#1e4fd8]/10 blur-[100px]" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-40 -left-40 h-125 w-125 rounded-full bg-primary/8 blur-[100px]" />
      <div aria-hidden="true" className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
        className="relative z-10 mx-auto w-full max-w-[1280px] px-6 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36 2xl:max-w-[1720px] 2xl:px-10"
      >
        {/* header */}
        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="mb-16 max-w-2xl">
          <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
            <span className="h-px w-6 bg-primary/60" />
            Why Kriscent
          </p>
          <h2 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Built for teams
            <br />
            <span className="text-white/40">that move fast</span>
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-300/80 sm:text-lg">
            Six reasons companies choose us over traditional agencies and
            freelance platforms.
          </p>
        </motion.div>

        {/* benefits grid , 6 cards + CTA card fills the last slot */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <BenefitCard key={b.title} benefit={b} index={i} />
          ))}

          {/* inline CTA card , spans 2 cols */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group relative overflow-hidden rounded-3xl sm:col-span-2"
          >
            <div className="absolute inset-0 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10" />
            <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_100%_100%,rgba(229,62,62,0.25),transparent_60%)]" />
            <div className="absolute -bottom-24 -right-16 h-64 w-64 rounded-full bg-primary/25 opacity-60 blur-3xl group-hover:opacity-80 transition-all duration-700" />
            <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-[#1e4fd8]/20 opacity-50 blur-3xl group-hover:opacity-70 transition-all duration-700" />
            <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

            <div className="relative z-10 flex h-full flex-col items-start justify-between gap-6 p-7 sm:p-9 sm:flex-row sm:items-center">
              {/* text */}
              <div className="max-w-sm">
                <p className="mb-3 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                  <span className="relative flex size-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/70" />
                    <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
                  </span>
                  Ready when you are
                </p>
                <h3 className="text-xl font-bold leading-tight text-white sm:text-2xl">
                  Get your first shortlist
                  <br />
                  <span className="text-white/50">in under 24 hours.</span>
                </h3>
              </div>

              {/* CTAs */}
              <div className="flex w-full flex-col gap-2.5 sm:w-auto sm:shrink-0">
                <motion.a
                  href="/quotation?service=hire-resources"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-white shadow-[0_10px_30px_-8px_rgba(229,62,62,0.6),inset_0_1px_0_rgba(255,255,255,0.15)]"
                  whileHover={{ scale: 1.03, boxShadow: "0 16px 40px -8px rgba(229,62,62,0.7)" }}
                  whileTap={{ scale: 0.97 }}
                >
                  Get started
                  <ArrowRight className="size-4" strokeWidth={2.5} />
                </motion.a>
                <motion.a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/6 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md"
                  whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.12)" }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Users className="size-4" strokeWidth={2} />
                  Talk to sales
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

/* ─── SINGLE BENEFIT CARD ─── */
function BenefitCard({
  benefit,
  index,
}: {
  benefit: (typeof benefits)[number];
  index: number;
}) {
  const isFeatured = benefit.featured;
  const isBrand = benefit.variant === "brand";
  const isAccent = benefit.variant === "accent";

  const statColor = isBrand ? "text-primary" : isAccent ? "text-[#1e4fd8]" : "text-white";
  const iconBg = isBrand
    ? "bg-primary/15 border-primary/25 text-primary"
    : isAccent
      ? "bg-[#1e4fd8]/15 border-[#1e4fd8]/25 text-[#60A5FA]"
      : "bg-white/10 border-white/15 text-white/90";

  return (
    <motion.div
      variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn("group relative overflow-hidden rounded-3xl", isFeatured && "lg:col-span-2")}
    >
      <div className="absolute inset-0 rounded-3xl bg-white/[0.04] backdrop-blur-xl border border-white/[0.08]" />

      {/* tinted wash on accent + brand cards */}
      {(isBrand || isAccent) && (
        <div
          className="absolute inset-0 rounded-3xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at 100% 0%, ${isBrand ? "rgba(229,62,62,0.25)" : "rgba(29,79,216,0.25)"} 0%, transparent 60%)`,
          }}
        />
      )}

      {/* glow blob */}
      <div
        className="absolute -bottom-24 -right-16 h-56 w-56 rounded-full opacity-40 blur-3xl group-hover:opacity-60 transition-all duration-700"
        style={{ backgroundColor: isBrand ? "#0e12ff40" : isAccent ? "rgba(29,79,216,0.25)" : "rgba(255,255,255,0.06)" }}
      />

      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* content */}
      <div className={cn("relative z-10 flex h-full flex-col p-7", isFeatured && "sm:p-9")}>
        <div className="mb-8 flex items-start justify-between">
          <div className={cn("flex size-11 items-center justify-center rounded-xl border shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]", iconBg)}>
            <benefit.icon className="size-5" strokeWidth={2} />
          </div>

          <div className="text-right">
            <p className={cn("font-bold leading-none tabular-nums tracking-tight", statColor, isFeatured ? "text-4xl sm:text-5xl" : "text-3xl")}>
              {benefit.stat}
            </p>
            <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-wider text-white/40">
              {benefit.statLabel}
            </p>
          </div>
        </div>

        <div className="mt-auto">
          <h3 className={cn("font-bold leading-tight text-white", isFeatured ? "text-2xl" : "text-lg")}>{benefit.title}</h3>
          <p className={cn("leading-relaxed text-white/60", isFeatured ? "mt-2 max-w-md text-base" : "mt-2 text-sm")}>{benefit.desc}</p>
        </div>
      </div>
    </motion.div>
  );
}
