"use client";

import React, { useState } from "react";
import { DialogContent, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Globe, ExternalLink, X, Inbox } from "lucide-react";
import Link from "next/link";
import { IconBrandAndroid, IconBrandApple } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import { ProjectData } from "./projectData";
import { ASSETS_BASE_URL } from "@/lib/variables";
import { cn } from "@/lib/utils";

type Platform = "website" | "android" | "ios";

const platformTabs = [
    { id: "website" as Platform, label: "Website", icon: Globe, inactiveBg: "bg-[#1e4fd8]" },
    { id: "android" as Platform, label: "Android", icon: IconBrandAndroid, inactiveBg: "bg-emerald-500" },
    { id: "ios" as Platform, label: "iOS", icon: IconBrandApple, inactiveBg: "bg-slate-800" },
];

/* ── Browser-window website preview (Visit button in chrome bar) ── */
function BrowserPreview({ project, index }: { project: ProjectData; index: number }) {
    const website = project.websites?.[index];

    return (
        <div className="w-full max-w-3xl overflow-hidden rounded-2xl border border-border bg-card shadow-xl">
            <div className="flex items-center justify-between gap-2 border-b border-border bg-muted/50 px-4 py-2.5">
                <div className="flex items-center gap-1.5">
                    <span className="size-2.5 rounded-full bg-primary" />
                    <span className="size-2.5 rounded-full bg-amber-400" />
                    <span className="size-2.5 rounded-full bg-emerald-400" />
                </div>
                <span className="hidden flex-1 justify-center sm:flex">
                    <span className="max-w-[60%] truncate rounded-md bg-background px-3 py-1 text-xs text-muted-foreground">
                        {website?.url?.replace(/^https?:\/\//, "")}
                    </span>
                </span>
                {website?.url ? (
                    <a
                        href={website.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground transition hover:opacity-90"
                    >
                        <ExternalLink className="size-3" />
                        Visit Website
                    </a>
                ) : (
                    <span className="rounded-full bg-muted px-3 py-1.5 text-xs text-muted-foreground">No link</span>
                )}
            </div>
            <div className="relative aspect-[16/9] overflow-hidden bg-muted">
                <img
                    src={website?.image ?? "/placeholder.svg"}
                    alt={website?.name ?? "Website"}
                    loading="lazy"
                    className="h-[210%] w-full object-cover object-top transition-transform duration-[1200ms] ease-out hover:-translate-y-[52%]"
                />
            </div>
        </div>
    );
}

/* ── Phone screens + store badge beside them ── */
function PhoneSection({
    images,
    alt,
    storeHref,
    storeImage,
    storeAlt,
}: {
    images: string[];
    alt: string;
    storeHref: string;
    storeImage: string;
    storeAlt: string;
}) {
    return (
        <div className="flex w-full flex-wrap items-center justify-center gap-6">
            <div className="flex flex-wrap justify-center gap-4">
                {images.map((img, i) => (
                    <div
                        key={i}
                        className="aspect-[9/19] w-40 overflow-hidden rounded-[18px] border-4 border-slate-900 bg-muted shadow-lg sm:w-44 2xl:w-48"
                    >
                        <img src={img} alt={alt} className="h-full w-full object-cover" loading="lazy" />
                    </div>
                ))}
            </div>
            {storeHref !== "#" && (
                <Link
                    href={storeHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 transition hover:scale-105"
                >
                    <img src={storeImage} alt={storeAlt} className="h-14 w-auto" loading="lazy" />
                </Link>
            )}
        </div>
    );
}

/* ── Empty-state fallback (no screenshots for the selected platform) ── */
function EmptyPreview({ label }: { label: string }) {
    return (
        <div className="flex w-full max-w-3xl flex-col items-center gap-3 rounded-2xl border border-dashed border-border bg-muted/40 py-14 text-center">
            <Inbox className="size-8 text-muted-foreground/50" />
            <p className="text-sm text-muted-foreground">No {label} screenshots available.</p>
        </div>
    );
}

export const ProjectDialog = ({ project }: { project: ProjectData }) => {
    /* ── Available tabs , computed BEFORE state so the default is valid ── */
    const availableTabs = platformTabs.filter((tab) => {
        if (tab.id === "website") return project?.websites?.length;
        if (tab.id === "android") return project?.applications?.length;
        return project?.iosApplications?.length;
    });

    /* default to the first available platform , fixes the "nothing shows" bug */
    const [selectedPlatform, setSelectedPlatform] = useState<Platform>(
        () => availableTabs[0]?.id ?? "website"
    );
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <DialogContent className="max-w-5xl w-[92vw] h-[88vh] overflow-hidden rounded-3xl border-none bg-background p-0">
            <DialogTitle className="sr-only">{project?.title}</DialogTitle>

            {/* explicit close button , critical on mobile (no outside-click space) */}
            <DialogClose className="absolute right-4 top-4 z-30 flex size-9 items-center justify-center rounded-full bg-black/50 text-white shadow-lg backdrop-blur-md transition hover:bg-black/70">
                <X className="size-5" />
            </DialogClose>

            {!project ? (
                <div className="p-6 text-center text-muted-foreground">No project data available.</div>
            ) : (
                <div className="h-full overflow-y-auto">
                    {/* Hero , min-height (grows with content), no fixed height */}
                    <div className="relative min-h-[28vh] overflow-hidden md:min-h-[32vh] 2xl:min-h-[36vh]">
                        <img
                            src={project.webCoverImage}
                            alt={project.title ?? "Project Cover"}
                            className="absolute inset-0 h-full w-full object-cover"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />

                        <div className="relative z-10 flex min-h-[28vh] flex-col justify-end px-5 py-6 sm:px-8 md:min-h-[32vh] md:px-9 2xl:min-h-[36vh] 2xl:px-12">
                            {/* logo + title */}
                            <div className="flex items-center gap-3">
                                <span className="flex h-10 w-fit min-w-10 items-center justify-center rounded-xl bg-white p-1.5 md:h-12 md:min-w-12">
                                    <img src={project.logoUrl} alt={project.title} className="max-h-full w-auto object-contain" loading="lazy" />
                                </span>
                                <h2 className="text-xl font-bold tracking-tight text-white md:text-2xl 2xl:text-3xl">
                                    {project.title}
                                </h2>
                            </div>

                            {/* description , no clamp so full content shows; hero grows */}
                            <p className="mt-2 max-w-[90%] text-xs leading-relaxed text-gray-200 md:max-w-[70%] md:text-sm">
                                {project.desc}
                            </p>

                            {/* tech chips , wrapping, fit many */}
                            <div className="mt-3 flex flex-wrap gap-1.5">
                                {project.technologies?.map((tech, i) => (
                                    <motion.span
                                        key={tech.title}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 + i * 0.04 }}
                                        className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 text-xs text-white backdrop-blur-md"
                                    >
                                        <tech.icon className="size-3.5" />
                                        {tech.title}
                                    </motion.span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Body */}
                    <div className="space-y-7 p-5 sm:px-8 md:p-8 2xl:p-10">
                        {/* Platform tabs , only if at least one exists */}
                        {availableTabs.length > 0 && (
                            <div className="flex flex-wrap items-center justify-center gap-2">
                                {availableTabs.map((tab) => {
                                    const Icon = tab.icon;
                                    const isActive = selectedPlatform === tab.id;
                                    return (
                                        <button
                                            key={tab.id}
                                            type="button"
                                            onClick={() => {
                                                setSelectedPlatform(tab.id);
                                                setSelectedIndex(0);
                                            }}
                                            className={cn(
                                                "flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300",
                                                isActive
                                                    ? "bg-foreground text-background shadow-lg"
                                                    : "border border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
                                            )}
                                        >
                                            <span
                                                className={cn(
                                                    "flex size-7 items-center justify-center rounded-full text-white transition-transform duration-300",
                                                    isActive ? "scale-110 bg-primary" : tab.inactiveBg
                                                )}
                                            >
                                                <Icon className="size-4" strokeWidth={2} />
                                            </span>
                                            {tab.label}
                                        </button>
                                    );
                                })}
                            </div>
                        )}

                        {/* Platform content , with empty-state fallback */}
                        <AnimatePresence mode="wait">
                            {selectedPlatform === "website" && (
                                <motion.div
                                    key="website-content"
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -12 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex justify-center"
                                >
                                    {project.websites?.[selectedIndex] ? (
                                        <BrowserPreview project={project} index={selectedIndex} />
                                    ) : (
                                        <EmptyPreview label="website" />
                                    )}
                                </motion.div>
                            )}

                            {selectedPlatform === "android" && (
                                <motion.div
                                    key="android-content"
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -12 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex justify-center"
                                >
                                    {project.applications?.[selectedIndex] ? (
                                        <PhoneSection
                                            images={project.applications[selectedIndex].image ?? []}
                                            alt={project.applications[selectedIndex].name ?? "Android App"}
                                            storeHref={project.applications[selectedIndex].playStoreUrl || "#"}
                                            storeImage={`${ASSETS_BASE_URL}/tempAssets/google-play-badge_jpg.png?updatedAt=1739424175132`}
                                            storeAlt="Get it on Google Play"
                                        />
                                    ) : (
                                        <EmptyPreview label="Android app" />
                                    )}
                                </motion.div>
                            )}

                            {selectedPlatform === "ios" && (
                                <motion.div
                                    key="ios-content"
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -12 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex justify-center"
                                >
                                    {project.iosApplications?.[selectedIndex] ? (
                                        <PhoneSection
                                            images={project.iosApplications[selectedIndex].image ?? []}
                                            alt={project.iosApplications[selectedIndex].name ?? "iOS App"}
                                            storeHref={project.iosApplications[selectedIndex].appStoreUrl || "#"}
                                            storeImage={`${ASSETS_BASE_URL}/tempAssets/app-store-badge.png`}
                                            storeAlt="Download on the App Store"
                                        />
                                    ) : (
                                        <EmptyPreview label="iOS app" />
                                    )}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            )}
        </DialogContent>
    );
};
