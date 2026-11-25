"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { SectionHeading } from "@/app/ReusableComponents/section-heading";
import {
  ArrowRight,
  BriefcaseBusinessIcon,
  Globe,
  Sparkles,
} from "lucide-react";
import { IconBrandAndroid, IconBrandAppleFilled } from "@tabler/icons-react";
import Link from "next/link";
import { caseStudies, CaseStudy } from "./case-studies-data";

/* ─── Hex → rgb helper for dynamic glows ─── */
function hexToRgb(hex: string) {
  const h = hex.replace("#", "");
  const bigint = parseInt(
    h.length === 3
      ? h
          .split("")
          .map((c) => c + c)
          .join("")
      : h,
    16,
  );
  return { r: (bigint >> 16) & 255, g: (bigint >> 8) & 255, b: bigint & 255 };
}

/* ─── Animated wrapper , one-time reveal per card (doesn't affect sticky) ─── */
function CardContentAnimator({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="relative flex flex-col md:flex-row">
      <motion.div
        className="relative w-full flex flex-col md:flex-row"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.4, delay: 0.05 }}
      >
        {children}
      </motion.div>
    </div>
  );
}

/* ─── Stagger variants ─── */
const metricStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.25 } },
};
const metricItem = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};
const platformStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } },
};
const platformPop = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 420, damping: 16 },
  },
};

export default function CaseStudies() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const headingY = useTransform(scrollYProgress, [0, 0.15], [0, -30]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 1]);

  const renderPlatformIcons = (platforms: string[]) => {
    return (
      <motion.div
        className="flex gap-1.5"
        variants={platformStagger}
        initial="hidden"
        animate="visible"
      >
        {platforms.map((platform, index) => {
          const p = platform.toLowerCase().trim();
          const chip =
            p === "android" ? (
              <div className="relative rounded-full bg-gradient-to-br from-green-400 to-green-600 p-1.5 shadow-[0_0_12px_-2px_rgba(34,197,94,0.6)] ring-1 ring-white/20">
                <IconBrandAndroid size={15} className="text-white" />
              </div>
            ) : p === "web" ? (
              <div className="relative rounded-full bg-gradient-to-br from-blue-400 to-blue-600 p-1.5 shadow-[0_0_12px_-2px_rgba(59,130,246,0.6)] ring-1 ring-white/20">
                <Globe size={15} className="text-white" />
              </div>
            ) : p === "ios" ? (
              <div className="relative rounded-full bg-gradient-to-br from-neutral-700 to-neutral-900 p-1.5 shadow-[0_0_12px_-2px_rgba(0,0,0,0.6)] ring-1 ring-white/20">
                <IconBrandAppleFilled size={15} className="text-white" />
              </div>
            ) : null;
          return (
            <motion.span
              key={index}
              variants={platformPop}
              whileHover={{ scale: 1.18, y: -2 }}
              whileTap={{ scale: 0.92 }}
              transition={{ type: "spring", stiffness: 350, damping: 14 }}
            >
              {chip}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div ref={containerRef} className="relative z-0 min-h-screen">
      {/* Sticky heading with subtle parallax */}
      <motion.div
        className="sticky top-0 z-10 pb-8 pt-10"
        style={{ y: headingY, opacity: headingOpacity }}
      >
        <SectionHeading
          primaryHeading="How We Drive Success for Our Clients"
          secondaryHeading="Case Studies"
          icon={BriefcaseBusinessIcon}
          isCentered
          highlightedString="Success"
        />
      </motion.div>

      <div className="container relative mx-auto flex flex-col items-center bg-transparent px-4 height-[580vh]">
        {caseStudies.map((study, index) => (
          <CaseStudyCard
            key={study.id}
            study={study}
            index={index}
            total={caseStudies.length}
            renderPlatformIcons={renderPlatformIcons}
          />
        ))}
      </div>
    </div>
  );
}

/* ─── Individual card , sticky/stack logic preserved exactly ─── */
function CaseStudyCard({
  study,
  index,
  total,
  renderPlatformIcons,
}: {
  study: CaseStudy;
  index: number;
  total: number;
  renderPlatformIcons: (platforms: string[]) => React.ReactNode;
}) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });

  // Spotlight cursor tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 150, damping: 20, mass: 0.3 });
  const smoothY = useSpring(mouseY, { stiffness: 150, damping: 20, mass: 0.3 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const rgb = hexToRgb(study.color);
  const isDark = (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000 < 100;

  return (
    <Link
      ref={cardRef}
      href={study.pageAddress}
      onMouseMove={handleMouseMove}
      className="group sticky top-40 md:mb-16 mb-5 block w-full overflow-hidden rounded-[32px] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.5),0_10px_30px_-15px_rgba(0,0,0,0.3)] ring-1 ring-white/10"
      style={{
        zIndex: index + 1,
        backgroundColor: study.color,
      }}
    >
      {/* Noise / grain texture overlay for premium feel */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Cursor spotlight */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: useTransform(
            [smoothX, smoothY],
            ([x, y]) =>
              `radial-gradient(360px circle at ${x}px ${y}px, rgba(255,255,255,0.12), transparent 55%)`,
          ),
        }}
      />

      {/* Gradient border glow on hover */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[32px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `linear-gradient(135deg, rgba(255,255,255,0.25), transparent 40%, transparent 60%, rgba(255,255,255,0.15))`,
          padding: "1px",
          WebkitMask:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />

      <CardContentAnimator>
        {/* ── Left: content ── */}
        <div className="relative z-10 flex w-full flex-col p-6 text-white md:w-[62%] md:p-9">
          {/* Oversized index number — now a design element, not a hidden watermark */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-2 -top-6 text-[7rem] font-black leading-none tracking-tighter text-white/[0.06] md:-right-4 md:-top-8 md:text-[9rem]"
            style={{
              WebkitTextStroke: "1px rgba(255,255,255,0.08)",
            }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>

          {/* Position indicator — subtle context */}
          <div className="relative mb-5 flex items-center gap-2.5">
            <span className="h-px w-8 bg-white/40" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/60">
              {String(index + 1).padStart(2, "0")} /{" "}
              {String(total).padStart(2, "0")}
            </span>
          </div>

          {/* ambient top-left glow (dynamic to card color) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background: `radial-gradient(90% 70% at 0% 0%, rgba(255,255,255,${isDark ? 0.14 : 0.18}), transparent 55%)`,
            }}
          />
          {/* ambient bottom-right counter-glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background: `radial-gradient(60% 50% at 100% 100%, rgba(0,0,0,0.25), transparent 60%)`,
            }}
          />

          <div className="relative flex flex-col">
            {/* header */}
            <div className="mb-3 flex items-start justify-between gap-3">
              <motion.h2
                className="text-balance text-xl font-bold leading-[1.1] tracking-[-0.025em] text-white md:text-[26px]"
                initial={{ opacity: 0, x: -18 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.08 }}
              >
                {study.title}
              </motion.h2>
              <span className="shrink-0">
                {renderPlatformIcons(study.platforms)}
              </span>
            </div>

            <motion.p
              className="max-w-[46ch] text-sm leading-relaxed text-white/75"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.14 }}
            >
              {study.description}
            </motion.p>

            {/* metrics — now a glass panel */}
            <motion.div
              className="relative mt-4 flex items-stretch overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur-sm"
              variants={metricStagger}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {/* tiny sparkle accent */}
              <div className="pointer-events-none absolute right-3 top-2 opacity-50">
                <Sparkles size={10} className="text-white/40" />
              </div>

              {study.metrics.map((metric, i) => (
                <motion.div
                  key={metric.label}
                  className={`flex-1 px-4 first:pl-2 last:pr-2 ${i !== 0 ? "border-l border-white/10" : ""}`}
                  variants={metricItem}
                >
                  <motion.div
                    className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-2xl font-black leading-none tracking-tight text-transparent md:text-[28px]"
                    whileHover={{ scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 350, damping: 15 }}
                  >
                    {metric.value}
                  </motion.div>
                  <div className="mt-1.5 text-[10.5px] font-medium leading-snug text-white/55">
                    {metric.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              className="mt-4 flex items-center justify-between"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.35 }}
            >
              <span className="relative text-sm font-semibold text-white/90">
                Read Case Study
                <span
                  aria-hidden="true"
                  className="absolute -bottom-0.5 left-0 h-px w-0 bg-white transition-all duration-500 ease-out group-hover:w-full"
                />
              </span>
              <motion.span
                className="relative flex h-9 w-9 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur-sm transition-all duration-300 group-hover:bg-white group-hover:ring-white/60"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 rounded-full bg-white/30 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100"
                />
                <motion.div
                  className="relative"
                  animate={{ x: [0, 3, 0] }}
                  transition={{
                    duration: 1.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <ArrowRight
                    size={15}
                    className="text-white transition-colors duration-300 group-hover:text-black"
                  />
                </motion.div>
              </motion.span>
            </motion.div>
          </div>
        </div>

        {/* ── Right: image ── */}
        <div className="absolute right-0 top-0 hidden h-full w-[38%] overflow-hidden md:block">
          <motion.img
            src={study.image}
            alt={study.description}
            className="h-full w-full object-contain transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
            loading="lazy"
            initial={{ scale: 1.1, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          />

          {/* Gradient fade from card color into image — removes hard seam */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 w-32"
            style={{
              background: `linear-gradient(to right, ${study.color} 0%, ${study.color}00 100%)`,
            }}
          />

          {/* Soft vignette darkening at edges for depth */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(120% 100% at 50% 50%, transparent 55%, rgba(0,0,0,0.35) 100%)",
            }}
          />

          {/* Subtle top sheen */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/10 to-transparent"
          />
        </div>
      </CardContentAnimator>
    </Link>
  );
}
