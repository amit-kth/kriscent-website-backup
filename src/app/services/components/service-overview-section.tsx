import { TablerIcon } from "@tabler/icons-react";
import { LucideIcon, Sparkles } from "lucide-react";
import { SectionHeading } from "@/app/ReusableComponents/section-heading";

interface Service {
  icon: LucideIcon | TablerIcon;
  serviceName: string;
  description: string;
}

interface ServiceOverviewSectionProps {
  services: Service[];
  primaryHeading?: string;
  secondaryHeading?: string;
  headingIcon?: LucideIcon | TablerIcon;
  isCentered?: boolean;
  highlightedString?: string;
}

/* ── Subtle accent rotation , theme hues, not random rainbow ── */
const accents = [
  { chip: "bg-primary/10 text-primary" },
  { chip: "bg-emerald-500/10 text-emerald-600" },
  { chip: "bg-amber-500/10 text-amber-600" },
  { chip: "bg-sky-500/10 text-sky-600" },
];

export default function ServiceOverviewSection({
  services,
  primaryHeading,
  secondaryHeading,
  headingIcon,
  isCentered,
  highlightedString,
}: ServiceOverviewSectionProps) {
  return (
    <section className="w-full bg-muted/30 py-16 text-foreground md:py-20 2xl:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8 2xl:max-w-[1720px] 2xl:px-10">
        <SectionHeading
          primaryHeading={primaryHeading}
          secondaryHeading={secondaryHeading}
          icon={headingIcon}
          isCentered={isCentered}
          highlightedString={highlightedString}
        />

        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 2xl:gap-4">
          {services.map((service, index) => {
            const accent = accents[index % accents.length];
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group flex h-full flex-col items-start rounded-2xl bg-primary/5 p-5 transition duration-300 hover:-translate-y-0.5 hover:bg-primary/10 md:p-6"
              >
                {/* icon chip */}
                <span className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition duration-300 group-hover:-translate-y-0.5 md:size-14">
                  <Icon className="size-6 md:size-7" strokeWidth={2} />
                </span>

                {/* name + description */}
                <p className="text-base font-bold leading-tight text-foreground md:text-xl">
                  {service.serviceName}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
