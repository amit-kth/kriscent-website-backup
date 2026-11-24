import React from "react";
import { ImageBackground } from "@/app/Components/ImageBg";
import { DefaultButton, FadeDownToUpAnimation } from "@/app/ReusableComponents/UI";
import type { LucideIcon } from "lucide-react";
import type { TablerIcon } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/app/ReusableComponents/section-heading";

interface HeroSectionProps {
  primaryHeading: string;
  secondaryHeading: string;
  icon: LucideIcon | TablerIcon;
  highlightedString?: string;
  customColor: string;
  imageSrc: string;
  description?: string;
  customHeight?: string;
  btnText?: string;
  btnTarget?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isCentered?: boolean;
  markPrimaryHeadingAsH1Tag?: boolean;
}

const HeroSectionGlobal: React.FC<HeroSectionProps> = ({
  primaryHeading,
  secondaryHeading,
  icon: Icon,
  highlightedString,
  customColor,
  imageSrc,
  description,
  customHeight = "80vh",
  btnText,
  btnTarget,
  isCentered = true,
  markPrimaryHeadingAsH1Tag = false,
}) => {
  return (
    <div
      style={{ height: customHeight }}
      className={cn("relative flex w-full items-center overflow-hidden", isCentered ? "justify-center" : "justify-start")}
    >
      {/* background image */}
      <ImageBackground
        src={imageSrc}
        className=""
        alt="Hero , Kriscent Techno-Hub solutions"
      />

      {/* soft gradient overlay for text legibility + depth */}
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0",
          isCentered
            ? "bg-gradient-to-b from-black/50 via-black/25 to-black/60"
            : "bg-gradient-to-r from-black/70 via-black/40 to-transparent"
        )}
      />

      {/* ambient brand glow */}
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute -top-24 h-72 w-72 rounded-full blur-3xl",
          isCentered ? "left-1/2 -translate-x-1/2" : "left-16",
          "bg-white/10"
        )}
      />

      {/* content */}
      <div
        className={cn(
          "relative z-10 w-full px-4 sm:px-6 lg:px-8",
          isCentered ? "text-center" : "text-left"
        )}
      >
        <div
          className={cn(
            "mx-auto flex container 2xl:max-w-[1700px] flex-col",
            isCentered ? "items-center" : "items-start",
            isCentered && "text-center"
          )}
        >
          <SectionHeading
            primaryHeading={primaryHeading}
            secondaryHeading={secondaryHeading}
            icon={Icon}
            markPrimaryHeadingAsH1Tag={markPrimaryHeadingAsH1Tag}
            isCentered={isCentered}
            highlightedString={highlightedString}
            customColor={customColor}
            glowEffect={false}
          />

          {description && (
            <FadeDownToUpAnimation>
              <p className="mb-4 max-w-2xl text-sm leading-relaxed text-white/85 md:text-lg">
                {description}
              </p>
            </FadeDownToUpAnimation>
          )}

          {btnText && btnTarget && (
            <DefaultButton title={btnText} onClick={btnTarget} />
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSectionGlobal;
