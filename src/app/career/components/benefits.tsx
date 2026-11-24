import {
    Heart,
    Award,
    TrendingUp,
    DollarSign,
    Gift,
    Trophy,
    Plane,
    Package,
    Briefcase,
    Calendar,
    Coffee,
    Leaf,
    Shield,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionHeading } from "@/app/ReusableComponents/section-heading";
import { cn } from "@/lib/utils";

/* ── Benefit accents , literal Tailwind classes (no inline CSS vars) ── */
const tones = {
    coral: { iconBg: "bg-[#FF5733]/10", iconText: "text-[#FF5733]" },
    teal: { iconBg: "bg-[#1ABC9C]/10", iconText: "text-[#1ABC9C]" },
    green: { iconBg: "bg-[#33FF57]/10", iconText: "text-[#33FF57]" },
    blue: { iconBg: "bg-[#3357FF]/10", iconText: "text-[#3357FF]" },
    yellow: { iconBg: "bg-[#F1C40F]/10", iconText: "text-[#F1C40F]" },
    purple: { iconBg: "bg-[#8E44AD]/10", iconText: "text-[#8E44AD]" },
    orange: { iconBg: "bg-[#E67E22]/10", iconText: "text-[#E67E22]" },
    emerald: { iconBg: "bg-[#2ECC71]/10", iconText: "text-[#2ECC71]" },
    sky: { iconBg: "bg-[#3498DB]/10", iconText: "text-[#3498DB]" },
    violet: { iconBg: "bg-[#9B59B6]/10", iconText: "text-[#9B59B6]" },
    red: { iconBg: "bg-[#E74C3C]/10", iconText: "text-[#E74C3C]" },
    amber: { iconBg: "bg-[#F39C12]/10", iconText: "text-[#F39C12]" },
} as const;

type Tone = keyof typeof tones;

const benefits: {
    icon: LucideIcon;
    tone: Tone;
    title: string;
    description: string;
}[] = [
        {
            icon: Heart,
            tone: "coral",
            title: "Comprehensive Medical and Health Insurance Coverage",
            description:
                "Enjoy peace of mind with our extensive medical and health insurance plans, covering you and your family.",
        },
        {
            icon: Shield,
            tone: "teal",
            title: "Accident Insurance for Added Security",
            description:
                "Stay protected with our accident insurance coverage, ensuring you and your family are secure in unforeseen circumstances.",
        },
        {
            icon: Award,
            tone: "green",
            title: "Incentives for Exceptional Employee Performance",
            description:
                "Your hard work does not go unnoticed. Receive attractive incentives for your exceptional performance.",
        },
        {
            icon: TrendingUp,
            tone: "blue",
            title: "Opportunities for Career Promotion and Growth",
            description:
                "We believe in nurturing talent. Benefit from numerous opportunities to advance your career within the company.",
        },
        {
            icon: DollarSign,
            tone: "yellow",
            title: "Annual Salary Increment",
            description:
                "Your growth is our priority. Enjoy annual salary increments as a testament to your continued value.",
        },
        {
            icon: Gift,
            tone: "purple",
            title: "Yearly Bonus for Outstanding Contributions",
            description:
                "Be rewarded for your outstanding contributions with our yearly bonus program.",
        },
        {
            icon: Trophy,
            tone: "orange",
            title: "Recognition Through Awards and Rewards Program",
            description:
                "Stand out and be recognized through our comprehensive awards and rewards program.",
        },
        {
            icon: Plane,
            tone: "emerald",
            title: "Target-Based Trip Incentives for Achievements",
            description:
                "Meet your targets and enjoy exciting trip incentives as a reward for your achievements.",
        },
        {
            icon: Package,
            tone: "sky",
            title: "Gifts and Recognition for Performance Excellence",
            description:
                "Receive special gifts and recognition for your excellent performance and dedication.",
        },
        {
            icon: Briefcase,
            tone: "violet",
            title: "Employee Kit Including Diary and ID Card",
            description:
                "Get started with our welcome Kit including a company Diary, Pen, ID Card, Personalized Business Email",
        },
        {
            icon: Calendar,
            tone: "red",
            title: "Casual Leave, Paid Leave, and Medical Leave",
            description:
                "Maintain a healthy work-life balance with our comprehensive leave policy, including casual, paid, and medical leave.",
        },
        {
            icon: Coffee,
            tone: "amber",
            title: "Saturday Off for Work-Life Balance",
            description:
                "Enjoy your weekends fully with our Saturdays off policy, promoting a better work-life balance.",
        },
    ];

export default function BenefitsSection() {
    return (
        <section className="w-full px-4 py-16 text-foreground sm:px-6 lg:px-8">
            <div className="mx-auto max-w-[1400px] 2xl:max-w-[1720px]">
                <SectionHeading
                    primaryHeading="Attractive Benefits for Our Valued Employees"
                    secondaryHeading="Benefits"
                    icon={Leaf}
                    isCentered
                    highlightedString="Benefits"
                />
                <p className="mx-auto mb-14 max-w-4xl text-center text-sm leading-relaxed md:text-lg">
                    There is a lot more to Awign and it is employees than just working,
                    growing and getting paid. Satisfaction, wellbeing, security, overall
                    development are some of the things we love to extend to our Awign
                    family.
                </p>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {benefits.map((benefit) => {
                        const Icon = benefit.icon;
                        const t = tones[benefit.tone];
                        return (
                            <div
                                key={benefit.title}
                                className="group flex h-full flex-col items-start rounded-2xl bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl md:p-8 bg-white"
                            >
                                {/* icon , soft tinted circle */}
                                <span
                                    className={cn(
                                        "mb-5 flex size-14 items-center justify-center rounded-full transition duration-300 group-hover:scale-105 md:size-16",
                                        t.iconBg
                                    )}
                                >
                                    <Icon className={cn("size-6 md:size-8", t.iconText)} strokeWidth={2} />
                                </span>

                                <h3 className="mb-2 text-lg font-bold leading-snug text-foreground md:mb-3 md:text-xl">
                                    {benefit.title}
                                </h3>
                                <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                                    {benefit.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
