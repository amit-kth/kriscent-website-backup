import React, { ReactNode } from "react";
import { categories, techOrderMainPage, ToolIconType } from "../hire-talent/components/technologies-data";
import { Code } from "lucide-react";
import { SectionHeading } from "@/app/ReusableComponents/section-heading";

/* sorted categories for showing the technologies in the different order according to this page */
const sortedCategories = techOrderMainPage.map(
  ([name, index]) => categories.find((c) => c.name === name)
);

export const renderToolIcon = (tool: any) => {
  if (tool.icon?.type === "component") {
    const IconComponent = tool.icon?.icon;
    if (React.isValidElement(IconComponent)) {
      return (
        <span style={{ color: tool.color }}>
          {React.cloneElement(IconComponent as React.ReactElement<{ className?: string }>, { className: "size-8" })}
        </span>
      );
    }
    return null;
  }
  return (
    <span>
      <img
        src={tool.icon?.url}
        alt={`${tool.name} icon`}
        className="size-8 object-contain"
        style={{ filter: `saturate(100%) ${tool.color !== "#000000" ? `color(${tool.color})` : ""}` }}
      />
    </span>
  );
};

export default function TechShowcase() {
  return (
    <section className="relative flex w-full justify-center overflow-hidden">
      <div className="mx-auto w-full max-w-[1280px] px-4 py-12 sm:px-6 md:py-16 lg:px-8 2xl:max-w-[1720px] 2xl:px-10">
        <SectionHeading
          primaryHeading="Technologies We Use to Build Your Success"
          secondaryHeading="Technologies"
          icon={Code}
          highlightedString="Technologies"
          isCentered
        />

        <div className="mt-8 flex flex-col gap-12">
          {sortedCategories.map((category) => (
            <div key={category?.name}>
              {/* category label */}
              <h2 className="mb-4 text-lg font-bold tracking-tight text-foreground md:text-xl">
                {category?.name}
              </h2>

              {/* tools grid */}
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 2xl:gap-4">
                {category?.tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="group flex aspect-square flex-col items-center justify-center rounded-2xl bg-primary/5 p-3 transition duration-300 hover:-translate-y-0.5 hover:bg-primary/10"
                  >
                    <div className="mb-2 flex size-14 items-center justify-center transition duration-300 group-hover:scale-110">
                      {renderToolIcon(tool)}
                    </div>
                    <p className="text-center text-xs font-medium text-foreground md:text-sm">
                      {tool.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
