"use client";

import { SectionHeading } from "@/app/ReusableComponents/section-heading";
import { Earth, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { services } from "./services-data";

export default function RelatedServices({ currentService }: { currentService: string }) {
    const filteredServices = services.filter((service) => service.id !== currentService);

    return (
        <section className="flex w-full justify-center py-16 md:py-20 2xl:py-24">
            <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8 2xl:max-w-[1720px] 2xl:px-10">
                <SectionHeading
                    primaryHeading="Explore Other Services"
                    secondaryHeading="Our Services"
                    icon={Earth}
                    isCentered
                    highlightedString="Services"
                />

                <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 2xl:gap-5">
                    {filteredServices.map((service, index) => {
                        const Icon = service.icon as React.ElementType;
                        return (
                            <Link
                                href={service.pageLink}
                                key={service.id}
                                className="group relative flex flex-col overflow-hidden rounded-3xl bg-primary/5 p-6 transition duration-300 hover:-translate-y-1 hover:bg-primary/10"
                            >
                                {/* icon chip */}
                                <div className="mb-5 flex items-center justify-between">
                                    <span className="flex size-12 items-center justify-center rounded-2xl bg-primary text-white shadow-md transition duration-300 group-hover:-translate-y-0.5">
                                        <Icon className="size-6" strokeWidth={2} />
                                    </span>
                                    <span className="text-4xl font-black leading-none tracking-tighter text-foreground/[0.05]">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                </div>

                                {/* title + desc */}
                                <h3 className="text-lg font-bold leading-tight tracking-tight text-foreground">
                                    {service.serviceTitle}
                                </h3>
                                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                                    {service.serviceDesc}
                                </p>

                                {/* cta */}
                                <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-primary">
                                    Learn more
                                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                </span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
