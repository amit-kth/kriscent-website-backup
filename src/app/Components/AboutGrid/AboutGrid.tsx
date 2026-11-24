"use client";

import FlipCard from "@/app/Components/FlipCard";
import { FadeDownToUpAnimation } from "@/app/ReusableComponents/UI";
import Link from "next/link";
import Image from "next/image"; // ADDED: Next.js Image for LCP/Core Web Vitals
import React, { useEffect, useRef, useState } from "react";
import { Sparkle } from "../QuickEnquiry/quick-enquiry-form";
import NumberTicker from "@/components/ui/number-ticker";
import { useMediaQuery } from "react-responsive";
import { ASSETS_BASE_URL } from "@/lib/variables";
import {
  BriefcaseBusiness,
  Cpu,
  MoveRight,
  Trophy,
  UsersRound,
} from "lucide-react";
import { motion, useInView, Variants } from "framer-motion";

type SparkleItem = {
  id: string;
  x: string;
  y: string;
  color: string;
  delay: number;
  scale: number;
};

const cardBase =
  "relative h-full w-full overflow-hidden rounded-[34px] border border-border transition-all duration-300 ease-out";

const lightCard =
  "bg-card text-card-foreground shadow-[0_12px_34px_rgba(15,23,42,0.035)] hover:-translate-y-0.5 hover:shadow-[0_16px_44px_rgba(15,23,42,0.055)]";

const primaryCard =
  "bg-primary text-primary-foreground shadow-[0_14px_38px_rgba(15,23,42,0.08)] hover:-translate-y-0.5";

const darkCard =
  "bg-foreground text-background shadow-[0_14px_38px_rgba(15,23,42,0.09)] hover:-translate-y-0.5";

// ─── Shared animation variants (unchanged) ────────────────────────────────

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay,
    },
  }),
};

const fadeIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: "easeOut",
      delay,
    },
  }),
};

const slideLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay,
    },
  }),
};

const slideRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay,
    },
  }),
};

// ─── Reusable in-view wrapper (unchanged) ─────────────────────────────────

function InViewMotion({
  children,
  variants,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  variants: Variants;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className={className ?? "h-full w-full"}
      variants={variants}
      custom={delay}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────

export default function AboutGrid() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <section
      aria-labelledby="about-grid-title"
      className="relative flex w-full flex-col justify-center overflow-hidden"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-col items-center overflow-hidden px-4 py-10 sm:px-6 md:py-20 lg:px-8 2xl:max-w-[1680px] 2xl:px-10 2xl:py-24">
        {/* UPDATED: sr-only heading is now a real question for AEO extraction */}
        <h2 id="about-grid-title" className="sr-only">
          What does Kriscent Techno Hub do?
        </h2>

        {/* ── Desktop grid ── */}
        {!isMobile ? (
          <div className="hidden h-[750px] w-full grid-cols-10 grid-rows-7 gap-4 md:grid md:h-[650px] xl:h-[680px] 2xl:h-[740px] 2xl:gap-5">

            <div className="col-span-5 row-span-3">
              <InViewMotion variants={slideLeft} delay={0}>
                <KriscentDetailCard />
              </InViewMotion>
            </div>

            <div className="col-span-3 col-start-6 row-span-4 cursor-pointer rounded-[20px]">
              <InViewMotion variants={fadeUp} delay={0.08}>
                <FlipCard flipDirection="vertical">
                  <ProjectsCard />
                </FlipCard>
              </InViewMotion>
            </div>

            <div className="col-span-2 col-start-9 row-span-2 cursor-pointer rounded-[20px]">
              <InViewMotion variants={slideRight} delay={0.14}>
                <FlipCard flipDirection="horizontal">
                  <ExperienceCard />
                </FlipCard>
              </InViewMotion>
            </div>

            <div className="col-span-2 col-start-9 row-span-2 row-start-3 cursor-pointer rounded-[20px]">
              <InViewMotion variants={slideRight} delay={0.2}>
                <HappyClientsCard />
              </InViewMotion>
            </div>

            <div className="col-span-3 row-span-4 row-start-4 cursor-pointer rounded-[20px]">
              <InViewMotion variants={fadeUp} delay={0.1}>
                <TechnologiesCard />
              </InViewMotion>
            </div>

            <div className="col-start-4 row-start-4 cursor-pointer rounded-[20px]">
              <InViewMotion variants={fadeIn} delay={0.18}>
                <FlipCard flipDirection="horizontal">
                  <CMMICard />
                </FlipCard>
              </InViewMotion>
            </div>

            <div className="col-start-5 row-start-4 cursor-pointer rounded-[20px]">
              <InViewMotion variants={fadeIn} delay={0.22}>
                <FlipCard flipDirection="vertical">
                  <ClutchCard />
                </FlipCard>
              </InViewMotion>
            </div>

            <div className="col-span-7 col-start-4 row-span-3 row-start-5 cursor-pointer rounded-[20px]">
              <InViewMotion variants={fadeUp} delay={0.26}>
                <BestITPartnerCard />
              </InViewMotion>
            </div>
          </div>

        ) : (
          /* ── Mobile grid ── */
          <div className="grid h-[900px] w-full grid-cols-5 grid-rows-12 gap-3 md:hidden">

            <div className="col-span-5 row-span-3">
              <InViewMotion variants={fadeUp} delay={0}>
                <KriscentDetailCard />
              </InViewMotion>
            </div>

            <div className="col-span-3 row-span-4 row-start-4">
              <InViewMotion variants={slideLeft} delay={0.08}>
                <FlipCard flipDirection="vertical">
                  <ProjectsCard />
                </FlipCard>
              </InViewMotion>
            </div>

            <div className="col-span-2 col-start-4 row-span-2 row-start-4">
              <InViewMotion variants={slideRight} delay={0.12}>
                <FlipCard flipDirection="horizontal">
                  <ExperienceCard />
                </FlipCard>
              </InViewMotion>
            </div>

            <div className="col-span-2 col-start-4 row-span-2 row-start-6">
              <InViewMotion variants={slideRight} delay={0.16}>
                <HappyClientsCard />
              </InViewMotion>
            </div>

            <div className="col-span-2 row-start-8">
              <InViewMotion variants={fadeIn} delay={0.1}>
                <CMMICard />
              </InViewMotion>
            </div>

            <div className="col-span-2 col-start-1 row-start-9">
              <InViewMotion variants={fadeIn} delay={0.14}>
                <ClutchCard />
              </InViewMotion>
            </div>

            <div className="col-span-3 col-start-3 row-span-2 row-start-8">
              <InViewMotion variants={slideRight} delay={0.18}>
                <TechnologiesCard />
              </InViewMotion>
            </div>

            <div className="col-span-5 row-span-3 row-start-10">
              <InViewMotion variants={fadeUp} delay={0.22}>
                <BestITPartnerCard />
              </InViewMotion>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

// ─── Cards ────────────────────────────────────────────────────────────────

function KriscentDetailCard() {
  return (
    <article
      className={`${cardBase} ${lightCard} group flex items-center justify-center p-4 md:p-6 lg:p-9 2xl:p-11`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-accent/30"
      />

      <div className="relative z-10 flex min-w-0 flex-col">
        <div className="mb-4 flex min-w-0 items-center gap-4 md:gap-5">

          <motion.div
            className="flex size-10 shrink-0 items-center justify-center rounded-[12px] border border-border bg-background md:size-11 2xl:size-12"
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* UPDATED: <img> → <Image> for LCP optimization */}
            <Image
              src={`${ASSETS_BASE_URL}/tempAssets/k-blue.webp`}
              alt="Kriscent Techno Hub logo mark"
              width={36}
              height={36}
              className="transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          </motion.div>

          <div className="min-w-0">
            <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary md:text-[11px] 2xl:text-[12px]">
              IT services company
            </p>
            <h3 className="text-balance text-[18px] font-bold leading-[1.18] tracking-[-0.02em] text-foreground md:text-[24px] 2xl:text-[28px]">
              Kriscent Techno Hub Pvt. Ltd.
            </h3>
          </div>
        </div>

        {/* UPDATED: Answer-first , leads with concrete facts (what + where + since + team size) */}
        <p className="mb-3 hidden text-[15px] leading-[1.58] text-muted-foreground md:block lg:text-[16px] 2xl:text-[17px] 2xl:leading-[1.68]">
          Kriscent Techno Hub is an IT services company based in Kota, Rajasthan,
          delivering custom software, web, and mobile app development since 2014.
          Our 100+ member team has completed 1,500+ projects across 7+ countries,
          backed by CMMI Level 3 and ISO 9001:2015 certifications.
        </p>

        {/* UPDATED: Mobile , same answer-first style, shortened */}
        <p className="mb-[6px] block text-[14px] leading-[1.5] text-muted-foreground md:hidden">
          Kriscent Techno Hub builds custom software, web, and mobile apps from
          Kota, Rajasthan. 1,500+ projects delivered since 2014 , CMMI Level 3
          and ISO 9001:2015 certified.
        </p>

        <div className="hidden flex-wrap gap-2 md:flex">
          {["Consulting", "Design", "Development"].map((item, i) => (
            <motion.span
              key={item}
              className="rounded-full border border-border bg-background px-2 pt-0.5 pb-1 text-xs font-medium text-muted-foreground 2xl:px-4 2xl:text-[12px]"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.35 + i * 0.08,
                duration: 0.35,
                type: "spring",
                stiffness: 350,
                damping: 18,
              }}
              whileHover={{ scale: 1.07, y: -1 }}
            >
              {item}
            </motion.span>
          ))}
        </div>
      </div>
    </article>
  );
}

function ExperienceCard() {
  return (
    <article
      className={`${cardBase} ${primaryCard} group flex items-center justify-center`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-white/10"
      />

      <div className="relative z-10 flex flex-col items-center gap-2 px-3 leading-[110%] lg:flex-row lg:gap-4 lg:px-8 2xl:gap-5 2xl:px-10">
        <div className="flex items-center gap-1 lg:gap-2">
          <NumberTicker
            value={13}
            className="text-[32px] font-extrabold tracking-tight text-primary-foreground lg:text-[56px] 2xl:text-[68px]"
          />
          <motion.span
            className="text-[32px] font-extrabold text-primary-foreground lg:text-[56px] 2xl:text-[68px]"
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.6, type: "spring", stiffness: 400, damping: 14 }}
          >
            +
          </motion.span>
        </div>

        <p className="text-balance text-center text-[13px] font-semibold leading-tight text-primary-foreground lg:text-left lg:text-[16px] 2xl:text-[18px]">
          Years of Industry experience
        </p>
      </div>
    </article>
  );
}

function ProjectsCard() {
  return (
    <article
      className={`${cardBase} ${darkCard} group flex items-center justify-center`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-primary/20"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-white/5"
      />

      <div className="relative z-10 flex min-w-0 flex-col items-center px-4 leading-[140%] md:px-10 lg:px-16 2xl:px-20">

        <motion.div
          className="mb-5 flex size-10 items-center justify-center rounded-[12px] border border-background/15 bg-background/10 md:mb-8 md:size-12 2xl:mb-10 2xl:size-14"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <BriefcaseBusiness className="size-5 text-background transition-transform duration-300 group-hover:-translate-y-1 md:size-6 2xl:size-7" />
        </motion.div>

        <div className="flex w-full justify-center gap-2 md:items-center">
          <NumberTicker
            value={1549}
            className="mb-4 text-[36px] font-extrabold tracking-tight text-background md:mb-7 md:text-[56px] lg:text-[62px] 2xl:text-[76px]"
          />
          <motion.span
            className="text-[36px] font-extrabold text-background md:-translate-y-4 md:text-[56px] lg:text-[62px] 2xl:text-[76px]"
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.55, type: "spring", stiffness: 380, damping: 14 }}
          >
            +
          </motion.span>
        </div>

        <p className="mb-5 max-w-[280px] text-balance text-center text-[14px] leading-[1.45] text-background/85 md:mb-10 md:text-[16px] 2xl:max-w-[340px] 2xl:text-[18px]">
          Projects Delivered Successfully, Showcasing Our Proven Expertise
        </p>

        <Link
          href="/portfolio"
          aria-label="View Kriscent portfolio"
          className="group/link hidden items-center gap-3 text-[14px] font-semibold text-background/75 transition-all hover:text-background md:flex 2xl:text-[16px]"
        >
          Portfolio
          <motion.span
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <MoveRight
              size={14}
              className="translate-y-[1px] 2xl:size-5"
            />
          </motion.span>
        </Link>
      </div>
    </article>
  );
}

function HappyClientsCard() {
  return (
    <article
      className={`${cardBase} ${lightCard} group flex items-center justify-center overflow-visible`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-accent/30"
      />

      <div className="relative z-10 flex min-w-0 flex-col items-start justify-center gap-3 px-4 leading-[130%] lg:gap-4 lg:px-5 2xl:px-7">
        <div className="flex items-center gap-1 lg:gap-2">
          <NumberTicker
            value={1245}
            className="text-[34px] font-extrabold tracking-tight text-primary lg:text-[54px] 2xl:text-[66px]"
          />
          <motion.span
            className="text-[24px] font-extrabold text-primary lg:text-[34px] 2xl:text-[42px]"
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 380, damping: 14 }}
          >
            +
          </motion.span>
        </div>

        {/* FIXED: className typo , added space between text-[18px] and mt-2 */}
        <p className="mt-2 text-center text-[12px] font-semibold leading-5 text-foreground lg:text-left lg:text-[16px] 2xl:mt-5 2xl:text-[18px]">
          Happy Clients and Counting
        </p>
      </div>

      {/* UPDATED: <img> → <Image>, and improved alt for accessibility */}
      <motion.div
        className="absolute -right-1 -top-1 hidden opacity-75 lg:block 2xl:right-2 2xl:top-2"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src={`${ASSETS_BASE_URL}/tempAssets/Frame.png?updatedAt=1739424174550`}
          alt="Group of happy Kriscent client avatars"
          width={44}
          height={44}
          loading="lazy"
          className="2xl:h-12 2xl:w-12"
        />
      </motion.div>
    </article>
  );
}

function CMMICard() {
  const [sparkles, setSparkles] = useState<SparkleItem[]>([]);

  useEffect(() => {
    const generateStar = (): SparkleItem => {
      const starX = `${Math.random() * 100}%`;
      const starY = `${Math.random() * 100}%`;
      const color = Math.random() > 0.5 ? "var(--primary)" : "var(--chart-3)";
      const delay = Math.random() * 2;
      const scale = Math.random() * 0.5 + 0.2;
      const id = `${starX}-${starY}-${Date.now()}`;
      return { id, x: starX, y: starY, color, delay, scale };
    };

    setSparkles(Array.from({ length: 8 }, generateStar));
  }, []);

  return (
    <article
      className={`${cardBase} ${lightCard} group flex items-center justify-center p-2`}
    >
      {/* UPDATED: <motion.img> → motion wrapper around <Image> for LCP; improved alt */}
      <motion.div
        className="relative z-10"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        whileHover={{ scale: 1.1, rotate: [0, -4, 4, 0] }}
      >
        <Image
          src={`${ASSETS_BASE_URL}/tempAssets/cmmi.png?updatedAt=1724492726579`}
          alt="CMMI Level 3 certification badge"
          width={78}
          height={70}
          className="max-h-[62px] w-auto 2xl:max-h-[74px]"
          loading="lazy"
        />
      </motion.div>

      {sparkles.map((sparkle) => (
        <Sparkle key={sparkle.id} {...sparkle} />
      ))}
    </article>
  );
}

function ClutchCard() {
  return (
    <Link
      target="_blank"
      rel="noopener noreferrer"
      href="https://clutch.co/profile/kriscent-techno-hub#highlights"
      aria-label="View Kriscent Techno Hub on Clutch"
      className="block h-full w-full"
    >
      <article
        className={`${cardBase} group flex items-center justify-center bg-accent p-2 text-accent-foreground shadow-[0_12px_34px_rgba(15,23,42,0.035)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_44px_rgba(15,23,42,0.055)]`}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-card/25"
        />

        {/* UPDATED: <motion.img> → motion wrapper around <Image>; alt clarified */}
        <motion.div
          className="relative z-10"
          initial={{ scale: 0.75, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.4, ease: "easeOut" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Image
            src={`${ASSETS_BASE_URL}/tempAssets/clutch.png?updatedAt=1724492726508`}
            alt="Clutch verified agency badge for Kriscent Techno Hub"
            width={62}
            height={62}
            className="max-h-[54px] w-auto 2xl:max-h-[64px]"
            loading="lazy"
          />
        </motion.div>
      </article>
    </Link>
  );
}

function TechnologiesCard() {
  return (
    <article
      className={`${cardBase} ${primaryCard} group flex items-center justify-center`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-white/10"
      />

      <div className="relative z-10 flex min-w-0 flex-col items-center px-4 leading-[140%] md:-translate-y-20 md:px-10 lg:px-14 2xl:-translate-y-24 2xl:px-16">

        <motion.div
          className="mb-3 flex size-10 items-center justify-center rounded-[12px] border border-primary-foreground/15 bg-primary-foreground/10 md:size-12 2xl:size-14"
          animate={{ rotate: [0, 8, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Cpu className="size-5 text-primary-foreground md:size-6 2xl:size-7" />
        </motion.div>

        <p className="text-balance text-center text-[15px] font-semibold leading-[1.35] text-primary-foreground md:text-[18px] 2xl:text-[21px]">
          Expertise in Latest Technologies
        </p>
      </div>

      {/* UPDATED: <motion.img> → motion wrapper around <Image>; alt describes the visual */}
      <motion.div
        className="absolute left-1/2 hidden -translate-x-1/2 md:bottom-0 md:block 2xl:-bottom-4"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src={`${ASSETS_BASE_URL}/tempAssets/Frame%20188.png?updatedAt=1724652902235`}
          alt="Technology stack logos used by Kriscent , React, Node.js, Python, and more"
          width={220}
          height={220}
          className="max-h-[190px] w-auto 2xl:max-h-[235px]"
          loading="lazy"
        />
      </motion.div>
    </article>
  );
}

function BestITPartnerCard() {
  return (
    <article
      className={`${cardBase} ${lightCard} group flex items-center justify-center p-5 md:p-8 lg:p-9 2xl:p-11`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-accent/30"
      />

      <FadeDownToUpAnimation>
        <div className="relative z-10 flex min-w-0 flex-col">
          <h3 className="mb-2 text-balance text-[20px] font-bold leading-[1.18] tracking-[-0.02em] text-foreground md:text-[24px] 2xl:text-[30px]">
            Most Trustworthy IT Partner
          </h3>

          {/* UPDATED: Concrete trust proof (certifications, years, project count) instead of adjectives */}
          <p className="mb-3 hidden text-[15px] leading-[1.58] text-muted-foreground md:block lg:text-[16px] 2xl:text-[17px] 2xl:leading-[1.68]">
            Kriscent Techno Hub holds CMMI Level 3 and ISO 9001:2015 certifications,
            with 13+ years in operation and 1,500+ projects delivered across 7+ countries.
            Every build passes structured QA cycles, code reviews, and vulnerability
            checks before production release.
          </p>

          {/* UPDATED: Mobile , same fact-led style, shortened */}
          <p className="mb-3 block text-[14px] leading-[1.5] text-muted-foreground md:hidden">
            CMMI Level 3 and ISO 9001:2015 certified. 13+ years, 1,500+ projects
            delivered across 7+ countries with structured QA on every release.
          </p>

          <Link
            href="/about"
            aria-label="Read more about Kriscent Techno Hub"
            className="group/link inline-flex w-fit items-center gap-3 text-[14px] font-semibold text-primary transition-colors md:text-[15px] 2xl:text-[16px]"
          >
            Read More
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <MoveRight
                size={14}
                className="translate-y-[1px] 2xl:size-5"
              />
            </motion.span>
          </Link>
        </div>
      </FadeDownToUpAnimation>
    </article>
  );
}