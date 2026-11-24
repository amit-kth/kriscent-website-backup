import { Calendar, Building, Briefcase } from "lucide-react";
import { IconBrandAndroid } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

interface ProjectSummaryProps {
  client: string;
  duration: string;
  businessType: string;
  platforms: string;
}

/* ── Meta fields , data-driven, theme accents ── */
const fields = [
  { key: "client", label: "Client / Project", icon: Building, iconBg: "bg-primary/10 text-primary", tint: "bg-primary/5" },
  { key: "duration", label: "Duration", icon: Calendar, iconBg: "bg-[#1e4fd8]/10 text-[#1e4fd8]", tint: "bg-[#1e4fd8]/5" },
  { key: "businessType", label: "Business Type", icon: Briefcase, iconBg: "bg-emerald-500/10 text-emerald-600", tint: "bg-emerald-500/5" },
  { key: "platforms", label: "Platforms", icon: IconBrandAndroid, iconBg: "bg-amber-500/10 text-amber-600", tint: "bg-amber-500/5" },
] as const;

export default function ProjectSummary({
  client,
  duration,
  businessType,
  platforms,
}: ProjectSummaryProps) {
  const values = { client, duration, businessType, platforms };

  return (
    <section className="mx-auto w-full max-w-[1280px] px-4 pt-12 pb-4 sm:px-6 lg:px-8 2xl:max-w-[1720px] 2xl:px-10">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 2xl:gap-4">
        {fields.map((field) => {
          const Icon = field.icon;
          return (
            <div
              key={field.key}
              className={cn(
                "flex items-center gap-4 rounded-2xl p-5 transition duration-300 hover:-translate-y-0.5 hover:shadow-lg",
                field.tint
              )}
            >
              {/* icon chip */}
              <span className={cn("flex size-11 shrink-0 items-center justify-center rounded-xl", field.iconBg)}>
                <Icon className="size-5" strokeWidth={2} />
              </span>

              {/* text */}
              <div className="min-w-0">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {field.label}
                </p>
                <p className="mt-0.5 truncate text-sm font-bold text-foreground md:text-base">
                  {values[field.key]}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
