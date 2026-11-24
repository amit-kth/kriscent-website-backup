"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ShaderBackground } from "./shader";

/* ─── ANIMATION HELPERS ─── */
const stagger = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.1 },
    },
};

const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
};

/* ─── NOISE OVERLAY (reusable) ─── */
function NoiseOverlay({ opacity = 0.03 }: { opacity?: number }) {
    return (
        <div
            className="absolute inset-0 pointer-events-none"
            style={{
                opacity,
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            }}
        />
    );
}

/* ═══════════════════════════════════════
   HERO , Dark theme, refined for shader BG
═══════════════════════════════════════ */
export default function HireHero() {
    return (
        <section className="relative flex min-h-[90dvh] items-center overflow-hidden">
            {/* Shader canvas */}
            <ShaderBackground className="absolute inset-0 z-0" />

            {/* Depth vignette , darkens edges */}
            <div className="absolute inset-0 z-1 bg-[radial-gradient(ellipse_at_50%_40%,transparent_30%,rgba(0,0,0,0.4)_100%)]" />

            {/* Noise overlay */}
            <NoiseOverlay opacity={0.04} />

            <motion.div
                className="relative z-10 mx-auto w-full max-w-5xl px-6 pt-28 pb-32 text-center sm:px-8 sm:pt-36 sm:pb-48 lg:px-12 lg:pt-32"
                variants={stagger}
                initial="hidden"
                animate="visible"
            >
                {/* Badge , refined glass style */}
                <motion.div
                    variants={fadeUp}
                    className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/12 bg-white/6 px-4 py-2 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.08)]"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/70" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-primary shadow-[0_0_8px_rgba(229,62,62,0.6)]" />
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/90">
                        13 Years of Expertise
                    </span>
                </motion.div>

                {/* Heading */}
                <motion.h1
                    variants={fadeUp}
                    className="text-4xl font-bold leading-[1.05] tracking-tight text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.3)] sm:text-6xl lg:text-7xl"
                >
                    Hire Top-Tier Talent,
                    <br />
                    <span className="bg-linear-to-b from-white/80 to-white/40 bg-clip-text text-transparent">
                        Scale your team in days
                    </span>
                </motion.h1>

                {/* Description */}
                <motion.p
                    variants={fadeUp}
                    className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-slate-300/80 sm:text-lg"
                >
                    A pool of 50,000+ skilled professionals worldwide. Skip the sourcing,
                    vetting, and waiting, build elite engineering teams instantly.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    variants={fadeUp}
                    className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
                >
                    <motion.a
                        href="/quotation?service=hire-resources"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white shadow-[0_10px_40px_-8px_rgba(229,62,62,0.6),inset_0_1px_0_rgba(255,255,255,0.15)] sm:w-auto"
                        whileHover={{
                            scale: 1.03,
                            boxShadow: "0 20px 50px -8px rgba(229,62,62,0.7), inset 0 1px 0 rgba(255,255,255,0.2)",
                        }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                        Hire Now
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2.5"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </motion.a>
                    <motion.a
                        href="#offerings"
                        className="inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-white/6 px-8 py-3.5 text-center text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl sm:w-auto"
                        whileHover={{
                            scale: 1.03,
                            backgroundColor: "rgba(255,255,255,0.12)",
                            borderColor: "rgba(255,255,255,0.25)",
                        }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                        Explore Offerings
                    </motion.a>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                    className="absolute bottom-32 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
                >
                    <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/40">
                        Scroll
                    </span>
                    <motion.div
                        className="h-8 w-px bg-linear-to-b from-white/40 to-transparent"
                        animate={{ scaleY: [0.3, 1, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        style={{ transformOrigin: "top" }}
                    />
                </motion.div>
            </motion.div>
        </section>
    );
}
