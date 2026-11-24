"use client"

import { ArrowRight, Calculator, NotebookPen } from 'lucide-react'
import Link from "next/link"
import { cn } from "@/lib/utils"

export default function StickySideMenu() {
    const actions = [
        {
            href: "/contact",
            label: "Quick Enquiry",
            icon: NotebookPen,
        },
        {
            href: "/quotation",
            label: "Get a Quotation",
            icon: Calculator,
        }
    ]

    return (
        <nav
            className="pointer-events-none fixed right-0 top-1/4 z-50 flex flex-col items-end justify-start gap-3"
            aria-label="Quick actions"
        >
            <div className="pointer-events-auto flex flex-col items-end justify-start gap-3">
                {actions.map((item, index) => {
                    const Icon = item.icon
                    return (
                        <Link
                            key={index}
                            href={item.href}
                            className={cn(
                                "group flex items-center transition-all duration-300 hover:shadow-xl hover:shadow-primary/5",
                                "translate-x-[calc(100%-2.5rem)] hover:translate-x-0",
                            )}
                        >
                            {/* Icon Container */}
                            <div
                                className={cn(
                                    "z-10 flex h-10 w-10 items-center justify-center rounded-l-lg border-y border-l border-primary/20 bg-primary text-primary-foreground",
                                    "transition-all duration-300 group-hover:scale-105",
                                    "group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary"
                                )}
                            >
                                <Icon className="h-4.5 w-4.5 transition-transform duration-300 group-hover:rotate-3" />
                            </div>

                            {/* Text Container */}
                            <div
                                className={cn(
                                    "flex h-10 w-44 items-center justify-between border-y border-border bg-popover pl-4 pr-3 text-popover-foreground",
                                    "text-sm font-medium tracking-wide opacity-0 transition-all duration-300 group-hover:opacity-100"
                                )}
                            >
                                <span>{item.label}</span>
                                <ArrowRight className="h-4 w-4 opacity-70 transition-transform duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
                            </div>
                        </Link>
                    )
                })}
            </div>
        </nav>
    )
}