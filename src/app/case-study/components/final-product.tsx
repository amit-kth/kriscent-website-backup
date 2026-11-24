"use client";

import { ProjectData } from "@/app/portfolio/components/projectData";
import { ASSETS_BASE_URL } from "@/lib/variables";
import { IconBrandAndroid, IconBrandApple } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import { Globe, MonitorSmartphone } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { SectionHeading } from "@/app/ReusableComponents/section-heading";

type Platform = "website" | "android" | "ios";

export default function CaseStudyFinalProduct({
  project,
  content,
}: {
  project: ProjectData;
  content?: string;
}) {
  const [selectedPlatform, setSelectedPlatform] = useState<Platform>("website");
  const [selectedIndex, setSelectedIndex] = useState(0);

  /* ── Tabs , only include platforms that exist in the project ── */
  const tabs: {
    id: Platform;
    label: string;
    icon: React.ElementType;
    inactiveBg: string;
    available: boolean;
  }[] = [
      { id: "website", label: "Websites", icon: Globe, inactiveBg: "bg-[#1e4fd8]", available: !!project.websites?.length },
      { id: "android", label: "Android", icon: IconBrandAndroid, inactiveBg: "bg-emerald-500", available: !!project.applications?.length },
      { id: "ios", label: "iOS", icon: IconBrandApple, inactiveBg: "bg-slate-800", available: !!project.iosApplications?.length },
    ];

  const activeTab = tabs.find((t) => t.id === selectedPlatform);

  return (
    <section className="mx-auto w-full max-w-[1280px] px-4 py-12 sm:px-6 lg:px-8 2xl:max-w-[1720px] 2xl:px-10">
      <SectionHeading
        primaryHeading="Final Product"
        secondaryHeading="What we delivered"
        icon={MonitorSmartphone}
        isCentered
        highlightedString="Product"
        description={content}
      />

      {/* ── Platform tabs ── */}
      {activeTab && tabs.some((t) => t.available) && (
        <div className="mb-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {tabs
            .filter((t) => t.available)
            .map((tab) => {
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
                  className={
                    "flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 " +
                    (isActive
                      ? "bg-foreground text-background shadow-md"
                      : "border border-border bg-card text-muted-foreground hover:border-primary/30")
                  }
                >
                  <span
                    className={
                      "flex size-7 items-center justify-center rounded-full text-white " +
                      (isActive ? "bg-primary" : tab.inactiveBg)
                    }
                  >
                    <Icon className="size-4" strokeWidth={2} />
                  </span>
                  {tab.label}
                </button>
              );
            })}
        </div>
      )}

      {/* ── Content ── */}
      <div className="flex justify-center">
        <AnimatePresence mode="wait">
          {/* WEBSITES */}
          {selectedPlatform === "website" && project.websites?.[selectedIndex] && (
            <motion.a
              key="website-content"
              href={project.websites[selectedIndex].url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="group block w-full"
            >
              {/* full-width tall screenshot , scrolls down on hover */}
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-border bg-muted shadow-lg sm:aspect-[16/8]">
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={project.websites[selectedIndex].image ?? "/placeholder.svg"}
                    alt={project.websites[selectedIndex].name ?? "Website"}
                    loading="lazy"
                    className="h-[210%] w-full object-cover object-top transition-transform duration-[1200ms] ease-out group-hover:-translate-y-[52%]"
                  />
                </div>
                {/* overlay */}
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-6">
                  <div className="text-white">
                    <p className="text-lg font-semibold">{project.websites[selectedIndex].name}</p>
                    <p className="text-sm opacity-80">Visit Website →</p>
                  </div>
                </div>
              </div>
            </motion.a>
          )}

          {/* ANDROID */}
          {selectedPlatform === "android" && project.applications?.[selectedIndex] && (
            <motion.div
              key="android-content"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="flex w-full flex-col items-center"
            >
              {/* screenshots */}
              <div className="flex flex-wrap justify-center gap-4">
                {project.applications[selectedIndex].image?.map((img, imgIndex) => (
                  <div
                    key={imgIndex}
                    className="aspect-[9/19] w-44 overflow-hidden rounded-2xl border-8 border-slate-900 bg-muted sm:w-52 2xl:w-56"
                  >
                    <img
                      src={img}
                      alt={project.applications?.[selectedIndex]?.name ?? "Android App"}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>

              {/* play store badge */}
              <Link
                href={project.applications[selectedIndex].playStoreUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6"
              >
                <img
                  src={`${ASSETS_BASE_URL}/tempAssets/google-play-badge_jpg.png?updatedAt=1739424175132`}
                  alt="Get it on Google Play"
                  className="h-14 w-auto"
                  loading="lazy"
                />
              </Link>
            </motion.div>
          )}

          {/* iOS */}
          {selectedPlatform === "ios" && project.iosApplications?.[selectedIndex] && (
            <motion.div
              key="ios-content"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="flex w-full flex-col items-center"
            >
              {/* screenshots */}
              <div className="flex flex-wrap justify-center gap-4">
                {project.iosApplications[selectedIndex].image?.map((img, imgIndex) => (
                  <div
                    key={imgIndex}
                    className="aspect-[9/19] w-44 overflow-hidden rounded-2xl border-8 border-slate-900 bg-muted sm:w-52 2xl:w-56"
                  >
                    <img
                      src={img ?? "/placeholder.svg"}
                      alt={project.iosApplications?.[selectedIndex]?.name ?? "iOS App"}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>

              {/* app store badge */}
              <Link
                href={project.iosApplications[selectedIndex].appStoreUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6"
              >
                <img
                  src={`${ASSETS_BASE_URL}/tempAssets/app-store-badge.png`}
                  alt="Download on the App Store"
                  className="h-14 w-auto"
                  loading="lazy"
                />
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
