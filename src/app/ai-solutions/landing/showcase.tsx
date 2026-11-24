// components/sections/voice-agents/ai-showcase.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import {
  MessageSquareText,
  PhoneCall,
  LayoutDashboard,
  FileBarChart2,
  Workflow,
  Blocks,
  Bot,
  Calendar,
  MessageCircle,
  Users,
  Mail,
  Search,
} from "lucide-react";

/* ══════════════════════════════════════════════
   BENTO GRID PRIMITIVES , refined, borderless, real shadows
   ══════════════════════════════════════════════ */
function BentoGrid({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 auto-rows-[15rem] lg:auto-rows-[17rem] 2xl:auto-rows-[19rem]",
        className
      )}
    >
      {children}
    </div>
  );
}

function BentoGridItem({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string;
  description?: string;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "group/bento row-span-1 flex flex-col justify-between rounded-2xl bg-card p-4 cursor-pointer overflow-hidden",
        // Realistic layered shadow , like a floating card
        "shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_20px_-8px_rgba(0,0,0,0.06),0_20px_50px_-20px_rgba(0,0,0,0.08)]",
        // Smooth hover lift with deeper shadow
        "transition-all duration-500 ease-out",
        "hover:-translate-y-1 hover:shadow-[0_2px_4px_rgba(0,0,0,0.05),0_12px_28px_-8px_rgba(0,0,0,0.1),0_30px_60px_-20px_rgba(0,0,0,0.12)]",
        className
      )}
    >
      {header}
      <div className="transition-transform duration-500 group-hover/bento:translate-x-0.5 mt-4">
        <div className="flex items-center gap-2 mb-1.5">
          {icon}
          <h3 className="text-base lg:text-[17px] 2xl:text-lg font-bold text-foreground leading-tight tracking-tight">
            {title}
          </h3>
        </div>
        <p className="text-xs lg:text-[13px] text-muted-foreground leading-relaxed line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════
   ANIMATED SKELETONS , refined & borderless
   ══════════════════════════════════════════════ */

const smoothEase = [0.25, 0.1, 0.25, 1] as const;

/* Common inner surface shadow , soft, physical */
const innerShadow =
  "shadow-[0_1px_2px_rgba(0,0,0,0.03),0_4px_12px_-4px_rgba(0,0,0,0.05)]";

/* 1. RAG Chatbots , chat bubbles */
const SkeletonChat = () => {
  const bubbleLeft = {
    initial: { x: 0 },
    animate: {
      x: 6,
      rotate: 2,
      transition: { duration: 0.6, ease: smoothEase },
    },
  };
  const bubbleRight = {
    initial: { x: 0 },
    animate: {
      x: -6,
      rotate: -2,
      transition: { duration: 0.6, ease: smoothEase },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[5rem] flex-col justify-center gap-1.5 rounded-xl bg-gradient-to-br from-primary/[0.05] to-transparent p-4"
    >
      <motion.div
        variants={bubbleLeft}
        className={cn(
          "flex items-center gap-2 rounded-2xl rounded-tl-md bg-background p-2 w-3/5",
          innerShadow
        )}
      >
        <div className="w-5 h-5 rounded-full bg-muted-foreground/15 shrink-0" />
        <div className="flex-1 space-y-1">
          <div className="h-1 rounded-full bg-muted-foreground/15 w-full" />
          <div className="h-1 rounded-full bg-muted-foreground/15 w-3/4" />
        </div>
      </motion.div>

      <motion.div
        variants={bubbleRight}
        className={cn(
          "flex items-center gap-2 rounded-2xl rounded-tr-md bg-primary p-2 w-1/2 ml-auto",
          "shadow-[0_2px_8px_-2px_hsl(var(--primary)/0.35)]"
        )}
      >
        <div className="flex-1 space-y-1">
          <div className="h-1 rounded-full bg-primary-foreground/60 w-full" />
          <div className="h-1 rounded-full bg-primary-foreground/60 w-2/3" />
        </div>
      </motion.div>

      <motion.div
        variants={bubbleLeft}
        className={cn(
          "flex items-center gap-2 rounded-2xl rounded-tl-md bg-background p-2 w-3/5",
          innerShadow
        )}
      >
        <div className="w-5 h-5 rounded-full bg-muted-foreground/15 shrink-0" />
        <div className="flex-1 space-y-1">
          <div className="h-1 rounded-full bg-muted-foreground/15 w-full" />
        </div>
      </motion.div>
    </motion.div>
  );
};

/* 2. Voice , waveform (orange accent) */
const SkeletonWave = () => {
  const bars = new Array(16).fill(0);
  return (
    <div className="flex flex-1 w-full h-full min-h-[5rem] rounded-xl bg-gradient-to-br from-orange-50 to-transparent items-center justify-center p-4 gap-1">
      {bars.map((_, i) => (
        <motion.div
          key={i}
          className="w-1 rounded-full bg-orange-400 shadow-[0_0_6px_rgba(251,146,60,0.4)]"
          initial={{ height: 8 }}
          animate={{
            height: [8, 18 + Math.random() * 30, 8],
          }}
          transition={{
            duration: 1.2 + Math.random() * 0.4,
            repeat: Infinity,
            delay: i * 0.08,
            ease: smoothEase,
          }}
        />
      ))}
    </div>
  );
};

/* 3. CRM & ERP , dashboard tiles */
const SkeletonDashboard = () => {
  const tileVariant = {
    initial: { y: 0, opacity: 0.75 },
    animate: (i: number) => ({
      y: [0, -3, 0],
      opacity: 1,
      transition: {
        duration: 1,
        delay: i * 0.12,
        ease: smoothEase,
      },
    }),
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[5rem] rounded-xl bg-gradient-to-br from-primary/[0.05] to-transparent p-3 grid grid-cols-4 gap-1.5"
    >
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
        const isFeatured = i === 5;
        return (
          <motion.div
            key={i}
            custom={i}
            variants={tileVariant}
            className={cn(
              "rounded-md bg-background p-1.5 flex flex-col justify-between",
              innerShadow
            )}
          >
            <div
              className={cn(
                "w-3 h-3 rounded-sm",
                isFeatured ? "bg-emerald-400" : "bg-primary/25"
              )}
            />
            <div className="space-y-0.5">
              <div
                className={cn(
                  "h-0.5 rounded-full w-full",
                  isFeatured ? "bg-emerald-300" : "bg-muted-foreground/20"
                )}
              />
              <div
                className={cn(
                  "h-0.5 rounded-full w-2/3",
                  isFeatured ? "bg-emerald-300" : "bg-muted-foreground/15"
                )}
              />
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

/* 4. Report Chart , bars */
const SkeletonChart = () => {
  const bars = [35, 55, 45, 70, 55, 80, 70, 95];

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[5rem] rounded-xl bg-gradient-to-br from-primary/[0.05] to-transparent p-4 items-end gap-1"
    >
      {bars.map((h, i) => {
        const isPeak = i === bars.length - 1;
        return (
          <motion.div
            key={i}
            initial={{ height: "20%" }}
            animate={{ height: `${h}%` }}
            transition={{
              duration: 2,
              delay: i * 0.15,
              ease: smoothEase,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 1.5,
            }}
            className={cn(
              "flex-1 rounded-t-sm bg-gradient-to-t",
              isPeak
                ? "from-emerald-500 to-emerald-300 shadow-[0_-2px_8px_-2px_rgba(16,185,129,0.4)]"
                : "from-primary/60 to-primary/20"
            )}
          />
        );
      })}
    </motion.div>
  );
};

/* 5. Workflow , nodes + flowing dots */
const SkeletonFlow = () => {
  return (
    <div className="flex flex-1 w-full h-full min-h-[5rem] rounded-xl bg-gradient-to-br from-primary/[0.05] to-transparent p-4 items-center justify-center relative">
      <svg viewBox="0 0 200 80" className="w-full h-full">
        <line
          x1="20"
          y1="40"
          x2="80"
          y2="40"
          stroke="hsl(var(--primary))"
          strokeWidth="1.5"
          strokeDasharray="3 3"
          opacity="0.4"
        />
        <line
          x1="80"
          y1="40"
          x2="130"
          y2="20"
          stroke="hsl(var(--primary))"
          strokeWidth="1.5"
          strokeDasharray="3 3"
          opacity="0.4"
        />
        <line
          x1="80"
          y1="40"
          x2="130"
          y2="60"
          stroke="hsl(var(--primary))"
          strokeWidth="1.5"
          strokeDasharray="3 3"
          opacity="0.4"
        />
        <line
          x1="130"
          y1="20"
          x2="180"
          y2="40"
          stroke="#10B981"
          strokeWidth="1.5"
          strokeDasharray="3 3"
          opacity="0.5"
        />
        <line
          x1="130"
          y1="60"
          x2="180"
          y2="40"
          stroke="#10B981"
          strokeWidth="1.5"
          strokeDasharray="3 3"
          opacity="0.5"
        />

        <circle
          cx="20"
          cy="40"
          r="6"
          fill="hsl(var(--background))"
          stroke="hsl(var(--primary))"
          strokeWidth="1.5"
          filter="drop-shadow(0 1px 2px rgba(0,0,0,0.08))"
        />
        <circle
          cx="80"
          cy="40"
          r="8"
          fill="hsl(var(--primary))"
          filter="drop-shadow(0 2px 6px hsl(var(--primary) / 0.35))"
        />
        <circle
          cx="130"
          cy="20"
          r="6"
          fill="hsl(var(--background))"
          stroke="hsl(var(--primary))"
          strokeWidth="1.5"
          filter="drop-shadow(0 1px 2px rgba(0,0,0,0.08))"
        />
        <circle
          cx="130"
          cy="60"
          r="6"
          fill="hsl(var(--background))"
          stroke="hsl(var(--primary))"
          strokeWidth="1.5"
          filter="drop-shadow(0 1px 2px rgba(0,0,0,0.08))"
        />
        <circle
          cx="180"
          cy="40"
          r="7"
          fill="#D1FAE5"
          stroke="#10B981"
          strokeWidth="1.5"
          filter="drop-shadow(0 2px 4px rgba(16,185,129,0.3))"
        />

        <circle r="2" fill="hsl(var(--primary))">
          <animateMotion
            dur="3s"
            repeatCount="indefinite"
            path="M 20 40 L 80 40"
            calcMode="spline"
            keySplines="0.25 0.1 0.25 1"
          />
        </circle>
        <circle r="2" fill="hsl(var(--primary))">
          <animateMotion
            dur="3.5s"
            repeatCount="indefinite"
            path="M 80 40 L 130 20"
            calcMode="spline"
            keySplines="0.25 0.1 0.25 1"
          />
        </circle>
        <circle r="2" fill="#10B981">
          <animateMotion
            dur="3.2s"
            repeatCount="indefinite"
            path="M 130 60 L 180 40"
            calcMode="spline"
            keySplines="0.25 0.1 0.25 1"
          />
        </circle>
      </svg>
    </div>
  );
};

/* 6. Custom Blocks */
const SkeletonBlocks = () => {
  const block = {
    initial: { scale: 0.85, opacity: 0.4 },
    animate: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6, delay: i * 0.08, ease: smoothEase },
    }),
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[5rem] rounded-xl bg-gradient-to-br from-primary/[0.05] to-transparent p-4 items-center justify-center"
    >
      <div className="grid grid-cols-3 gap-1.5">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => {
          const isCustom = i === 4;
          return (
            <motion.div
              key={i}
              custom={i}
              variants={block}
              className={cn(
                "w-5 h-5 rounded-md",
                isCustom
                  ? "bg-orange-400 shadow-[0_2px_6px_rgba(251,146,60,0.35)]"
                  : i % 2 === 0
                    ? "bg-primary/40 shadow-[0_1px_3px_hsl(var(--primary)/0.2)]"
                    : "bg-primary/20"
              )}
            />
          );
        })}
      </div>
    </motion.div>
  );
};

/* 7. Receptionist , ringing phone */
const SkeletonReceptionist = () => {
  return (
    <div className="flex flex-1 w-full h-full min-h-[5rem] rounded-xl bg-gradient-to-br from-primary/[0.05] to-transparent p-4 items-center justify-center relative">
      <div className="relative flex items-center justify-center w-16 h-16">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute inset-0 rounded-full border-2 border-primary/40"
            initial={{ scale: 0.6, opacity: 0.8 }}
            animate={{ scale: 1.8, opacity: 0 }}
            transition={{
              duration: 2.5,
              delay: i * 0.8,
              repeat: Infinity,
              ease: smoothEase,
            }}
          />
        ))}
        <div className="relative w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-[0_8px_20px_-4px_hsl(var(--primary)/0.5),0_2px_6px_hsl(var(--primary)/0.25)]">
          <PhoneCall
            className="w-5 h-5 text-primary-foreground"
            strokeWidth={2}
          />
        </div>
      </div>
    </div>
  );
};

/* 8. Appointment , calendar highlighting */
const SkeletonAppointment = () => {
  const [highlighted, setHighlighted] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlighted((prev) => (prev + 1) % 12);
    }, 900);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-1 w-full h-full min-h-[5rem] rounded-xl bg-gradient-to-br from-primary/[0.05] to-transparent p-4 items-center justify-center">
      <div className="grid grid-cols-4 gap-1">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className={cn(
              "w-5 h-5 rounded-sm flex items-center justify-center text-[8px] font-semibold transition-all",
              highlighted === i
                ? "bg-emerald-400 text-white shadow-[0_4px_12px_-2px_rgba(16,185,129,0.5)]"
                : "bg-background text-muted-foreground/60 shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
            )}
            animate={{
              scale: highlighted === i ? 1.15 : 1,
            }}
            transition={{ duration: 0.4, ease: smoothEase }}
          >
            {i + 1}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

/* 9. WhatsApp */
const SkeletonWhatsApp = () => {
  return (
    <div className="flex flex-1 w-full h-full min-h-[5rem] rounded-xl bg-gradient-to-br from-emerald-50/50 to-transparent p-4 items-center justify-center">
      <div className="relative flex items-center justify-center">
        <motion.div
          className="w-14 h-14 rounded-2xl bg-emerald-500 flex items-center justify-center shadow-[0_10px_25px_-5px_rgba(16,185,129,0.5),0_4px_10px_rgba(16,185,129,0.25)]"
          animate={{
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: smoothEase,
          }}
        >
          <MessageCircle
            className="w-6 h-6 text-white"
            strokeWidth={2}
            fill="white"
          />
        </motion.div>
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(16,185,129,0.5)]"
            style={{
              left: `${25 + i * 12}px`,
              top: `-${8 + i * 4}px`,
            }}
            animate={{
              y: [0, -10, -20],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              delay: i * 0.4,
              repeat: Infinity,
              ease: smoothEase,
            }}
          />
        ))}
      </div>
    </div>
  );
};

/* 10. Lead Qualification */
const SkeletonLeads = () => {
  return (
    <div className="flex flex-1 w-full h-full min-h-[5rem] rounded-xl bg-gradient-to-br from-primary/[0.05] to-transparent p-4 items-center justify-center">
      <div className="flex flex-col gap-1 w-full max-w-[100px]">
        {[100, 75, 50, 30].map((width, i) => (
          <motion.div
            key={i}
            className={cn(
              "h-2.5 rounded-full",
              i === 3
                ? "bg-emerald-400 shadow-[0_2px_6px_-1px_rgba(16,185,129,0.4)]"
                : "bg-primary/40 shadow-[0_1px_3px_hsl(var(--primary)/0.2)]"
            )}
            initial={{ width: "0%" }}
            animate={{ width: `${width}%` }}
            transition={{
              duration: 1.2,
              delay: i * 0.2,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 1.5,
              ease: smoothEase,
            }}
            style={{ maxWidth: `${width}%`, alignSelf: "center" }}
          />
        ))}
      </div>
    </div>
  );
};

/* 11. Email , envelopes */
const SkeletonEmail = () => {
  return (
    <div className="flex flex-1 w-full h-full min-h-[5rem] rounded-xl bg-gradient-to-br from-primary/[0.05] to-transparent p-4 items-center justify-center">
      <div className="relative w-16 h-14">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className={cn(
              "absolute w-14 h-9 rounded-md bg-background flex items-center justify-center",
              innerShadow
            )}
            style={{ top: i * 4, left: i * 3 }}
            animate={{
              y: [0, -3, 0],
              rotate: [0, i === 2 ? 3 : -2, 0],
            }}
            transition={{
              duration: 2.5,
              delay: i * 0.3,
              repeat: Infinity,
              ease: smoothEase,
            }}
          >
            <Mail
              className={cn(
                "w-4 h-4",
                i === 2 ? "text-emerald-500" : "text-primary/60"
              )}
              strokeWidth={2}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

/* 12. Research , pages */
const SkeletonResearch = () => {
  return (
    <div className="flex flex-1 w-full h-full min-h-[5rem] rounded-xl bg-gradient-to-br from-primary/[0.05] to-transparent p-4 items-center justify-center">
      <div className="relative">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className={cn(
              "absolute w-10 h-12 rounded bg-background p-1",
              innerShadow
            )}
            style={{ left: i * 6 - 6, top: i * 2 - 2 }}
            animate={{
              rotate: [0, -8, 0],
            }}
            transition={{
              duration: 3,
              delay: i * 0.4,
              repeat: Infinity,
              ease: smoothEase,
            }}
          >
            <div className="space-y-0.5">
              <div className="h-0.5 rounded bg-muted-foreground/25 w-full" />
              <div className="h-0.5 rounded bg-muted-foreground/25 w-3/4" />
              <div className="h-0.5 rounded bg-muted-foreground/25 w-full" />
              <div className="h-0.5 rounded bg-muted-foreground/25 w-2/3" />
            </div>
          </motion.div>
        ))}
        <div className="w-10 h-12" />
      </div>
    </div>
  );
};

/* ══════════════════════════════════════════════
   BENTO ITEMS
   ══════════════════════════════════════════════ */
const bentoItems = [
  {
    title: "AI Voice & Calling",
    description: "Human-like voice agents handling calls at scale.",
    header: <SkeletonWave />,
    icon: <PhoneCall className="w-4 h-4 text-primary" strokeWidth={2} />,
    span: "sm:col-span-1",
  },
  {
    title: "AI Workflow Automation",
    description:
      "Automates tasks, approvals, and processes across departments.",
    header: <SkeletonFlow />,
    icon: <Workflow className="w-4 h-4 text-primary" strokeWidth={2} />,
    span: "sm:col-span-2",
  },
  {
    title: "RAG-Based Chatbots",
    description:
      "Context-aware assistants for accurate, business-specific responses.",
    header: <SkeletonChat />,
    icon: <MessageSquareText className="w-4 h-4 text-primary" strokeWidth={2} />,
    span: "sm:col-span-1",
  },






  {
    title: "WhatsApp AI Agent",
    description: "Conversational agents on WhatsApp for sales and support.",
    header: <SkeletonWhatsApp />,
    icon: <MessageCircle className="w-4 h-4 text-primary" strokeWidth={2} />,
    span: "sm:col-span-1",
  },
  {
    title: "Email & Communication",
    description: "AI-powered email agents that draft, respond, and follow up.",
    header: <SkeletonEmail />,
    icon: <Mail className="w-4 h-4 text-primary" strokeWidth={2} />,
    span: "sm:col-span-1",
  },
  {
    title: "Appointment Scheduling",
    description: "Manages bookings, reminders, and calendar sync.",
    header: <SkeletonAppointment />,
    icon: <Calendar className="w-4 h-4 text-primary" strokeWidth={2} />,
    span: "sm:col-span-2",
  },



  
  {
    title: "AI Receptionist",
    description: "Virtual receptionist that greets and routes 24/7.",
    header: <SkeletonReceptionist />,
    icon: <Bot className="w-4 h-4 text-primary" strokeWidth={2} />,
    span: "sm:col-span-2",
  },
  {
    title: "AI CRM & ERP",
    description:
      "Business platforms with embedded AI for smarter operations.",
    header: <SkeletonDashboard />,
    icon: <LayoutDashboard className="w-4 h-4 text-primary" strokeWidth={2} />,
    span: "sm:col-span-1",
  },
  {
    title: "Lead Qualification",
    description: "Engages, qualifies, and routes leads to the right team.",
    header: <SkeletonLeads />,
    icon: <Users className="w-4 h-4 text-primary" strokeWidth={2} />,
    span: "sm:col-span-1",
  },
  {
    title: "AI Report Generation",
    description: "Detailed reports instantly via AI-powered data analysis.",
    header: <SkeletonChart />,
    icon: <FileBarChart2 className="w-4 h-4 text-primary" strokeWidth={2} />,
    span: "sm:col-span-2",
  },
  {
    title: "Research & Documents",
    description: "Gathers intel, summarizes reports, extracts insights.",
    header: <SkeletonResearch />,
    icon: <Search className="w-4 h-4 text-primary" strokeWidth={2} />,
    span: "sm:col-span-1",
  },
  {
    title: "Custom AI Solutions",
    description: "Tailored AI apps built around your unique workflows.",
    header: <SkeletonBlocks />,
    icon: <Blocks className="w-4 h-4 text-primary" strokeWidth={2} />,
    span: "sm:col-span-1",
  },
];

/* ══════════════════════════════════════════════
   MAIN COMPONENT
   ══════════════════════════════════════════════ */
export function AIShowcase() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="studio"
      ref={sectionRef}
      className="relative py-14 sm:py-16 lg:py-20 2xl:py-24 bg-muted/30"
    >
      <div className="container">
        {/* ─── Header ─── */}
        <div
          className={`flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 lg:gap-8 mb-8 lg:mb-10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
        >
          {/* Left: label + heading in one tight column */}
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2.5 text-[11px] sm:text-xs font-mono uppercase tracking-[0.15em] text-muted-foreground mb-3">
              <span className="w-6 h-px bg-primary" />
              AI Capability Showcase
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-[40px] 2xl:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
              AI solutions built for{" "}
              <span className="text-primary">modern enterprises.</span>
            </h2>
          </div>

          {/* Right: short inline description , sits beside heading on desktop */}
          <p className="text-sm text-muted-foreground leading-relaxed max-w-sm lg:text-right shrink-0">
            Real business challenges solved with intelligent, scalable, and secure AI systems.
          </p>
        </div>

        {/* ─── Bento grid ─── */}
        <BentoGrid
          className={`w-full transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
        >
          {bentoItems.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={item.span}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}