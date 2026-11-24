"use client";

import Image from "next/image";
import Link from "next/link";
import type { ElementType } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  Bot,
  FileText,
  Headphones,
  PhoneCall,
  Workflow,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ASSETS_BASE_URL } from "@/lib/variables";

const easeOut = [0.16, 1, 0.3, 1] as const;

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: (index = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      delay: index * 0.045,
      ease: easeOut,
    },
  }),
};

const AI_HERO_VIDEO = `${ASSETS_BASE_URL}/tempAssets/videos/data-science.mp4`;
const AI_HERO_IMAGE = `${ASSETS_BASE_URL}/tempAssets/heroSections/ai-home.webp`;

type AiService = {
  label: string;
  eyebrow: string;
  icon: ElementType;
};

/* Sub-card tones , resolves a card's background + text + chip styling -------- */

const tones = {
  image: {
    container: "bg-foreground text-background",
    eyebrow: "text-background/62",
    title: "text-background",
    icon: "bg-background/12 text-background ring-1 ring-background/15",
    chip: "bg-background/12 text-background/82 ring-1 ring-background/12",
    arrow: "text-background",
  },
  primary: {
    container: "bg-primary text-primary-foreground",
    eyebrow: "text-primary-foreground/62",
    title: "text-primary-foreground",
    icon: "bg-primary-foreground/12 text-primary-foreground ring-1 ring-primary-foreground/15",
    chip: "bg-primary-foreground/12 text-primary-foreground/82 ring-1 ring-primary-foreground/12",
    arrow: "text-primary-foreground",
  },
  tint: {
    container: "bg-primary/10 text-foreground",
    eyebrow: "text-primary",
    title: "text-foreground",
    icon: "bg-primary text-primary-foreground",
    chip: "bg-background text-muted-foreground ring-1 ring-border",
    arrow: "text-primary",
  },
  destructive: {
    container: "bg-destructive text-background",
    eyebrow: "text-background/62",
    title: "text-background",
    icon: "bg-background/12 text-background ring-1 ring-background/15",
    chip: "bg-background/12 text-background/82 ring-1 ring-background/12",
    arrow: "text-background",
  },
} as const;

type SubCard = {
  label: string;
  icon: ElementType;
  eyebrow: string;
  title: string;
  description: string; // Factual short description
  chips: string[];
  tone: keyof typeof tones;
  image?: string;
  imageAlt?: string;
  className?: string;
  href?: string;
};

const AI_BASE = "/ai-solutions";

const SUB_CARDS: SubCard[] = [
  {
    label: "Explore RAG-Based Chatbots",
    icon: Bot,
    eyebrow: "Knowledge retrieval",
    title: "RAG-Based Chatbots",
    description: "Chatbots answering questions using secure vector databases.",
    chips: ["Docs", "FAQs", "Vector search"],
    tone: "image",
    image: `${ASSETS_BASE_URL}/tempAssets/heroSections/ai-home.webp`,
    imageAlt: "RAG document extraction engine interface mapping",
    className: "lg:col-span-5",
    href: AI_BASE,
  },
  {
    label: "Explore AI Calling Agents",
    icon: PhoneCall,
    eyebrow: "Voice automation",
    title: "AI Calling Agents",
    description: "Voice agents handling outbound calls and live bookings.",
    chips: ["Leads", "Bookings", "Follow-ups"],
    tone: "primary",
    className: "lg:col-span-3",
    href: "/ai-solutions/ai-calling-agent",
  },
  {
    label: "Explore Astrology Report AI",
    icon: FileText,
    eyebrow: "Report generation",
    title: "Astrology Report AI",
    description: "Automated generation of detailed planetary PDF reports.",
    chips: ["Kundli", "PDF", "Insights"],
    tone: "image",
    image: `${ASSETS_BASE_URL}/tempAssets/5697.webp`,
    imageAlt: "Automated astrology chart generation module",
    className: "lg:col-span-3",
    href: AI_BASE,
  },
  {
    label: "Explore Support Desk AI",
    icon: Headphones,
    eyebrow: "Customer support",
    title: "Support Desk AI",
    description: "Automating ticket classification and customer routing.",
    chips: ["Tickets", "Handoff"],
    tone: "tint",
    className: "lg:col-span-3",
    href: AI_BASE,
  },
  {
    label: "Explore AI Workflows",
    icon: Workflow,
    eyebrow: "Internal copilots",
    title: "AI Workflows",
    description: "Internal copilots automating manual business tasks.",
    chips: ["Sales", "HR", "Ops"],
    tone: "destructive",
    className: "lg:col-span-2",
    href: AI_BASE,
  },
];

export function AiMlExperience({ service }: { service: AiService }) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="grid gap-3 lg:grid-cols-12 lg:grid-rows-2 2xl:gap-4">
      {/* Main AI hero card */}
      <motion.article
        custom={0}
        variants={itemVariants}
        initial={reduceMotion ? false : "hidden"}
        whileInView={reduceMotion ? undefined : "visible"}
        viewport={{ once: true, margin: "-80px" }}
        className="lg:col-span-4 lg:row-span-2"
      >
        <Link
          href="/ai-solutions"
          aria-label="Explore AI and ML services"
          className="group relative flex h-full min-h-96 flex-col overflow-hidden rounded-3xl bg-foreground p-5 text-background outline-none transition duration-300 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-ring 2xl:min-h-[420px] 2xl:p-6"
        >
          <Image
            src={AI_HERO_IMAGE}
            alt="Artificial neural network representing Kriscent AI capabilities"
            fill
            sizes="(max-width: 1024px) 100vw, 34vw"
            className="pointer-events-none absolute inset-0 object-cover opacity-25 transition duration-700 group-hover:scale-105"
          />

          {!reduceMotion && (
            <video
              aria-hidden="true"
              src={AI_HERO_VIDEO}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-105"
            />
          )}

          <div className="absolute inset-0 bg-foreground/45" />
          <div className="absolute inset-0 bg-primary/10" />
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-foreground via-foreground/70 to-transparent" />

          <div className="relative z-10 flex h-full flex-col">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="hidden text-xs font-bold uppercase tracking-widest text-background/65 sm:block">
                  {service.eyebrow}
                </span>
              </div>
            </div>

            <div className="mt-auto">
              <h3 className="max-w-sm text-balance text-3xl font-bold leading-tight tracking-tight text-background md:text-4xl 2xl:text-[42px]">
                AI systems for business workflows.
              </h3>

              {/* Factual, compact prose detailing offerings and LLMs without em-dashes */}
              <p className="mt-2.5 max-w-sm text-xs font-medium leading-relaxed text-background/75 2xl:text-sm text-pretty">
                Kriscent develops calling agents, RAG chatbots, automated reports, and internal copilots using GPT-4o, Claude, and Gemini.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {["GPT-4o", "Claude", "Gemini", "RAG"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-background/10 px-3 py-1 text-xs font-semibold text-background/82 ring-1 ring-background/15 backdrop-blur-md"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 border-t border-background/15 pt-4">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-background/75 transition group-hover:text-background">
                Explore AI services
              </span>
            </div>
          </div>
        </Link>
      </motion.article>

      {/* Sub-cards */}
      {SUB_CARDS.map((card, index) => (
        <motion.article
          key={card.title}
          custom={index + 1}
          variants={itemVariants}
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={{ once: true, margin: "-60px" }}
          className={cn("flex", card.className)}
        >
          <SubCard card={card} />
        </motion.article>
      ))}
    </div>
  );
}

/* Reusable sub-card ------------------------------------------------------------ */

function SubCard({ card }: { card: SubCard }) {
  const t = tones[card.tone];
  const hasImage = !!card.image;

  return (
    <Link
      href={card.href ?? AI_BASE}
      aria-label={card.label}
      className={cn(
        "group relative flex min-h-48 w-full flex-col overflow-hidden rounded-3xl p-5 text-left outline-none transition duration-300 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-ring",
        t.container,
        !hasImage && "lg:min-h-[13rem]"
      )}
    >
      {hasImage && (
        <>
          <Image
            src={card.image!}
            alt={card.imageAlt || `${card.title} dashboard visualization`}
            fill
            sizes="(max-width: 1024px) 100vw, 25vw"
            className="pointer-events-none absolute inset-0 object-cover transition duration-700 group-hover:scale-105"
          />
          {card.tone === "image" && (
            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-foreground to-transparent" />
          )}
        </>
      )}

      {/* animated illustration for non-image cards */}
      {!hasImage && <Illustration tone={card.tone} />}

      {(card.tone === "primary" || card.tone === "tint") && (
        <div className="absolute -right-12 -top-12 size-40 rounded-full bg-white/15 blur-3xl" />
      )}

      <div className="relative z-10 flex h-full flex-col">
        <div className="mt-auto">
          <p className={cn("text-[9px] font-bold uppercase tracking-[0.18em]", t.eyebrow)}>{card.eyebrow}</p>

          <h4 className={cn("mt-1.5 text-balance text-lg font-bold leading-none tracking-tight 2xl:text-xl", t.title)}>
            {card.title}
          </h4>

          {/* Factual, highly compact descriptive sentence */}
          <p
            className={cn(
              "mt-1.5 text-[11px] leading-relaxed text-pretty font-medium opacity-85",
              card.tone === "image" || card.tone === "primary" || card.tone === "destructive"
                ? "text-background/80"
                : "text-muted-foreground/90"
            )}
          >
            {card.description}
          </p>

          <div className="mt-3 flex flex-wrap gap-1.5">
            {card.chips.map((chip) => (
              <span key={chip} className={cn("rounded-full px-2.5 py-0.5 text-[9px] font-semibold", t.chip)}>
                {chip}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

/* Animated skeleton mockups for image-less cards ------------------------------ */

const smoothEase = [0.25, 0.1, 0.25, 1] as const;

function Illustration({ tone }: { tone: keyof typeof tones }) {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-1/2 overflow-hidden">
      {tone === "primary" && <Waveform />}
      {tone === "tint" && <ChatBubbles />}
      {tone === "destructive" && <FlowNodes />}
    </div>
  );
}

/* Calling Agents , live voice waveform */
function Waveform() {
  const bars = new Array(18).fill(0);
  return (
    <div className="flex h-full items-center justify-end gap-1 pr-6 pt-4 opacity-70">
      {bars.map((_, i) => (
        <motion.span
          key={i}
          className="w-1 rounded-full bg-primary-foreground"
          animate={{ height: [6, 14 + ((i * 7) % 22), 6] }}
          transition={{
            duration: 1.1 + (i % 5) * 0.15,
            repeat: Infinity,
            delay: i * 0.06,
            ease: smoothEase,
          }}
        />
      ))}
    </div>
  );
}

/* Support Desk , chat conversation bubbles */
function ChatBubbles() {
  const left = {
    animate: { x: [0, 5, 0], rotate: [0, 1.5, 0] },
    transition: { duration: 0.8, ease: smoothEase, repeat: Infinity, repeatType: "mirror" as const },
  };
  const right = {
    animate: { x: [0, -5, 0], rotate: [0, -1.5, 0] },
    transition: { duration: 0.8, ease: smoothEase, repeat: Infinity, repeatType: "mirror" as const, delay: 0.4 },
  };

  return (
    <div className="flex h-full flex-col justify-center gap-1.5 pl-6 pt-2 opacity-80">
      <motion.div
        variants={left}
        className="w-3/5 rounded-xl rounded-bl-sm bg-primary px-2.5 py-1.5"
      >
        <div className="h-1 rounded-full bg-primary-foreground/50 w-3/4" />
        <div className="mt-1 h-1 rounded-full bg-primary-foreground/50 w-1/2" />
      </motion.div>

      <motion.div
        variants={right}
        className="ml-auto w-2/5 rounded-xl rounded-br-sm bg-background px-2.5 py-2 shadow-[0_2px_8px_-2px_hsl(var(--primary)/0.3)]"
      >
        <div className="h-1 rounded-full bg-muted-foreground/25 w-full" />
      </motion.div>

      <motion.div
        variants={left}
        className="w-1/2 rounded-xl rounded-bl-sm bg-primary px-2.5 py-1.5"
      >
        <div className="h-1 rounded-full bg-primary-foreground/50 w-2/3" />
      </motion.div>
    </div>
  );
}

/* AI Workflows , nodes with flowing dots */
function FlowNodes() {
  return (
    <div className="flex h-full items-center justify-end pr-5 pt-3 opacity-80">
      <svg viewBox="0 0 200 70" className="h-full w-48">
        <line x1="10" y1="35" x2="70" y2="35" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeDasharray="3 3" />
        <line x1="70" y1="35" x2="120" y2="18" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeDasharray="3 3" />
        <line x1="70" y1="35" x2="120" y2="52" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeDasharray="3 3" />
        <line x1="120" y1="18" x2="178" y2="35" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeDasharray="3 3" />
        <line x1="120" y1="52" x2="178" y2="35" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeDasharray="3 3" />

        <circle cx="10" cy="35" r="5" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
        <circle cx="70" cy="35" r="7" fill="rgba(255,255,255,0.9)" />
        <circle cx="120" cy="18" r="5" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
        <circle cx="120" cy="52" r="5" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
        <circle cx="178" cy="35" r="6" fill="rgba(255,255,255,0.85)" />

        <circle r="2.5" fill="rgba(255,255,255,0.95)">
          <animateMotion dur="2.6s" repeatCount="indefinite" path="M 10 35 L 70 35" />
        </circle>
        <circle r="2.5" fill="rgba(255,255,255,0.95)">
          <animateMotion dur="3s" repeatCount="indefinite" path="M 70 35 L 120 18" />
        </circle>
        <circle r="2.5" fill="rgba(255,255,255,0.95)">
          <animateMotion dur="2.8s" repeatCount="indefinite" path="M 120 52 L 178 35" />
        </circle>
      </svg>
    </div>
  );
}