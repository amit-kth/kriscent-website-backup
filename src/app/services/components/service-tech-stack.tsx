import { ToolType } from "@/app/hire-talent/components/technologies-data";
import { SectionHeading } from "@/app/ReusableComponents/section-heading";
import { renderToolIcon } from "@/app/technologies/testshowcase";
import { TablerIcon } from "@tabler/icons-react";
import { Cpu, LucideIcon } from "lucide-react";

export default function ServiceTechStack({
  frameworks,
  primaryHeading,
  secondaryHeading,
  highlightedString,
  headingIcon,
  isCentered,
}: {
  frameworks: ToolType[];
  primaryHeading: string;
  secondaryHeading: string;
  highlightedString: string;
  headingIcon: LucideIcon | TablerIcon;
  isCentered: boolean;
}) {
  return (
    <section className="flex w-full justify-center py-12 md:py-16">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8 2xl:max-w-[1720px] 2xl:px-10">
        <SectionHeading
          primaryHeading={primaryHeading}
          secondaryHeading={secondaryHeading}
          icon={headingIcon}
          highlightedString={highlightedString}
          isCentered={isCentered}
        />

        <div className="mt-8 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-8 2xl:gap-4">
          {frameworks.map((framework, index) => (
            <div
              key={framework.name}
              className="group flex aspect-square flex-col items-center justify-center rounded-2xl bg-primary/5 p-3 transition duration-300 hover:-translate-y-0.5 hover:bg-primary/10"
            >
              {/* icon */}
              <div className="mb-2 flex size-12 items-center justify-center transition duration-300 group-hover:scale-110 sm:size-14 2xl:size-16">
                {renderToolIcon(framework)}
              </div>
              {/* name */}
              <p className="text-center text-xs font-medium text-foreground sm:text-sm">
                {framework.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
