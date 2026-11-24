"use client";

import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { FadeDownToUpAnimation } from "@/app/ReusableComponents/UI";
import { DefaultButton } from "@/app/ReusableComponents/UI";
import { LucideIcon } from "lucide-react";
import { TablerIcon } from "@tabler/icons-react";

interface SectionHeadingProps {
    primaryHeading?: string;
    secondaryHeading?: string;
    description?: ReactNode;
    icon?: LucideIcon | TablerIcon;
    customColor?: string;
    buttonLink?: string;
    buttonTitle?: string;
    highlightedString?: string;
    highlightedColor?: string;
    isCentered?: boolean;
    isDarkBg?: boolean;
    children?: ReactNode;
    className?: string;
    glowEffect?: boolean;
    markPrimaryHeadingAsH1Tag?: boolean;
}

/* ── Heading component for all sections ── */
export function SectionHeading({
    primaryHeading,
    secondaryHeading,
    description,
    icon: Icon,
    customColor,
    buttonLink,
    buttonTitle = "View All",
    highlightedString = "Kriscent",
    highlightedColor = "#1e4fd8",
    isCentered = false,
    isDarkBg = false,
    children,
    className,
    glowEffect = true,
    markPrimaryHeadingAsH1Tag = false,
}: SectionHeadingProps) {
    const HeadingTag = markPrimaryHeadingAsH1Tag ? "h1" : "h2";

    const headingColor = customColor || (isDarkBg ? "text-primary-foreground" : "text-foreground");
    const descriptionColor = isDarkBg ? "text-primary-foreground/70" : "text-muted-foreground";

    const eyebrowWrapper = cn(
        "mb-3 inline-flex max-w-full items-center gap-2 rounded-[10px] border px-3 py-1.5",
        isCentered ? "justify-center" : "justify-start",
        customColor
            ? customColor
            : isDarkBg
                ? "border-primary-foreground/15 bg-primary-foreground/10 text-primary-foreground backdrop-blur-xl"
                : "border-border bg-card/70 text-primary shadow-[0_8px_24px_rgba(15,23,42,0.035)]"
    );

    const renderHeadingText = () => {
        if (!primaryHeading || !highlightedString || !primaryHeading.includes(highlightedString)) {
            return primaryHeading;
        }

        const [beforeText, ...restParts] = primaryHeading.split(highlightedString);
        const afterText = restParts.join(highlightedString);

        return (
            <>
                {beforeText}
                <span className="relative inline-block whitespace-nowrap">
                    <span
                        className="relative z-10"
                        style={highlightedColor ? ({ color: highlightedColor } as CSSProperties) : undefined}
                    >
                        {highlightedString}
                    </span>

                    {glowEffect && (
                        <span
                            aria-hidden="true"
                            className={cn(
                                "pointer-events-none absolute left-1/2 top-1/2 -z-10 h-10 w-[115%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl",
                                isDarkBg ? "bg-primary/20" : "bg-primary/10"
                            )}
                        />
                    )}
                </span>
                {afterText}
            </>
        );
    };

    return (
        <FadeDownToUpAnimation className={className}>
            <div
                className={cn(
                    "group relative z-30 mb-7 flex w-full gap-4 md:mb-9",
                    isCentered ? "flex-col items-center text-center" : "flex-col items-start justify-between md:flex-row md:items-end"
                )}
            >
                <div
                    className={cn(
                        "min-w-0",
                        isCentered ? "mx-auto max-w-3xl text-center 2xl:max-w-4xl" : "w-full max-w-4xl 2xl:max-w-5xl"
                    )}
                >
                    {secondaryHeading && (
                        <div className={cn("flex items-center gap-2 rounded-[10px] border px-3 py-1.5", eyebrowWrapper)}>
                            {Icon && <Icon aria-hidden="true" className="size-3.5 shrink-0 md:size-4" />}
                            <p className="truncate text-[10px] font-bold uppercase leading-none tracking-[0.18em] md:text-[11px]">
                                {secondaryHeading}
                            </p>
                        </div>
                    )}

                    <HeadingTag
                        className={cn(
                            "text-balance font-bold tracking-[-0.035em]",
                            "text-[26px] leading-[1.12] sm:text-[31px] md:text-[38px] lg:text-[42px] 2xl:text-[48px] 2xl:leading-[1.08]",
                            headingColor
                        )}
                    >
                        {renderHeadingText()}
                    </HeadingTag>

                    {description && (
                        <p
                            className={cn(
                                "mt-3 max-w-2xl text-pretty text-[14px] font-medium leading-[1.55] md:mt-4 md:text-[16px] 2xl:max-w-3xl 2xl:text-[17px]",
                                isCentered ? "mx-auto" : "",
                                descriptionColor
                            )}
                        >
                            {description}
                        </p>
                    )}
                </div>

                {buttonLink && buttonTitle && (
                    <Link
                        href={buttonLink}
                        aria-label={buttonTitle}
                        className={cn("shrink-0", isCentered ? "mt-1" : "md:mb-1")}
                    >
                        <DefaultButton title={buttonTitle} />
                    </Link>
                )}
            </div>

            {children}
        </FadeDownToUpAnimation>
    );
}
