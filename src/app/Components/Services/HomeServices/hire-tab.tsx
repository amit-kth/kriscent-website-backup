"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  ArrowUpRight,
  BrainCircuit,
  Code2,
  PenTool,
  ShieldCheck,
  Smartphone,
  Target,
  UsersRound,
} from "lucide-react";
import { cn } from "@/lib/utils";

const easeOut = [0.16, 1, 0.3, 1] as const;

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: (index: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.42,
      delay: index * 0.04,
      ease: easeOut,
    },
  }),
};

const HIRING_MODELS = [
  "Dedicated resource",
  "Managed team",
  "Monthly engagement",
];

const ROLES = [
  {
    title: "Developers",
    icon: Code2,
    tags: ["Frontend", "Backend", "Full-stack"],
    description: "Frontend, backend, and full-stack developers on demand.",
  },
  {
    title: "Mobile engineers",
    icon: Smartphone,
    tags: ["iOS", "Android", "Flutter"],
    description: "iOS, Android, and Flutter app developers.",
  },
  {
    title: "AI engineers",
    icon: BrainCircuit,
    tags: ["LLM", "RAG", "Automation"],
    description: "LLM, RAG, and automation specialists.",
  },
  {
    title: "UI/UX designers",
    icon: PenTool,
    tags: ["Figma", "Product UI", "Systems"],
    description: "Figma-based product and design system experts.",
  },
  {
    title: "QA and DevOps",
    icon: ShieldCheck,
    tags: ["Testing", "CI/CD", "Cloud"],
    description: "Testing, CI/CD, and cloud infrastructure specialists.",
  },
  {
    title: "Marketing teams",
    icon: Target,
    tags: ["SEO", "Ads", "Content"],
    description: "SEO, ads, and content marketing professionals.",
  },
];

export function HireLayout() {
  return (
    <motion.div
      variants={revealVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className="h-full"
    >
      <div className="relative flex min-h-96 flex-col overflow-hidden rounded-3xl bg-card p-5 ring-1 ring-border 2xl:min-h-[420px] 2xl:p-6">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-primary/10 blur-3xl"
        />

        <div className="relative z-10 flex items-start justify-between gap-4 border-b border-border pb-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-primary">
              Talent bench
            </p>

            <h3 className="mt-2 max-w-xl text-balance text-2xl font-bold leading-tight tracking-tight text-foreground 2xl:text-3xl">
              Build a focused team without increasing management load.
            </h3>
          </div>

          <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
            <UsersRound className="size-5" />
          </span>
        </div>

        <div className="relative z-10 mt-4 grid gap-3 sm:grid-cols-2">
          {ROLES.map((role, index) => (
            <RoleCard key={role.title} role={role} index={index} />
          ))}
        </div>

        <div className="relative z-10 mt-5 flex flex-col gap-4 border-t border-border pt-4 lg:flex-row lg:items-center lg:justify-between">
          {/* AEO: Described as a coherent phrase for crawler evaluation */}
          <div
            className="flex flex-wrap gap-2"
            aria-label="Hiring models: Dedicated resource, Managed team, Monthly engagement"
          >
            {HIRING_MODELS.map((model) => (
              <span
                key={model}
                className="rounded-full bg-primary/10 px-3 py-1.5 text-xs font-bold text-primary"
              >
                {model}
              </span>
            ))}
          </div>

          <Link
            href="/hire-developer"
            className="inline-flex w-fit items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground transition hover:text-primary"
          >
            Discuss hiring
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

function RoleCard({
  role,
  index,
}: {
  role: typeof ROLES[number];
  index: number;
}) {
  const Icon = role.icon;

  return (
    <motion.div
      custom={index}
      variants={revealVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
    >
      <Link
        href="/hire-developer"
        aria-label={`${role.title}: ${role.description}`} // AEO: Non-visual factual details exposed to crawlers
        className={cn(
          "group flex h-full items-start gap-3 rounded-2xl bg-background p-4 ring-1 ring-border",
          "transition duration-300 hover:-translate-y-0.5 hover:bg-accent/50",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        )}
      >
        <span className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
          <Icon className="size-5" aria-hidden="true" />
        </span>

        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-3">
            <h4 className="text-base font-bold leading-tight tracking-tight text-foreground">
              {role.title}
            </h4>

            <ArrowUpRight className="size-4 shrink-0 text-muted-foreground opacity-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
          </div>

          <div className="mt-3 flex flex-wrap gap-1.5">
            {role.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-muted px-2.5 py-1 text-xs font-semibold text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}