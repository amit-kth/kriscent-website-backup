import { SectionHeading } from "@/app/ReusableComponents/section-heading";
import { ASSETS_BASE_URL } from "@/lib/variables";
import { BriefcaseIcon } from "lucide-react";

export default function HiringProcess() {
    const steps = [
        {
            title: "Interview",
            description:
                "Our team conducts an initial interview to understand your qualifications and fit for the role.",
            imageUrl: `${ASSETS_BASE_URL}/tempAssets/step2.png`,
        },
        {
            title: "Skill Assessment",
            description:
                "Candidates undergo a skill assessment to evaluate their expertise and problem-solving abilities.",
            imageUrl: `${ASSETS_BASE_URL}/tempAssets/step1.png`,
        },
        {
            title: "Final Round",
            description:
                "We make our hiring decision based on all gathered information and feedback from the previous rounds.",
            imageUrl: `${ASSETS_BASE_URL}/tempAssets/hiring.webp`,
        },
        {
            title: "Joining",
            description:
                "Successful candidates receive an offer and complete the joining formalities.",
            imageUrl: `${ASSETS_BASE_URL}/tempAssets/step3.png`,
        },
    ];

    return (
        <section className="w-full bg-background py-12 md:py-20 2xl:py-24">
            <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8 2xl:max-w-[1720px] 2xl:px-10">
                <SectionHeading
                    primaryHeading="Our Simple 4 Steps Hiring Process"
                    secondaryHeading="Hiring Process"
                    isCentered
                    highlightedString="4 Steps"
                    icon={BriefcaseIcon}
                />

                <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
                    {steps.map((step, index) => (
                        <div
                            key={step.title}
                            className="group flex flex-col items-center text-center"
                        >
                            {/* illustration */}
                            <div className="relative mb-5">
                                <img
                                    src={step.imageUrl}
                                    alt={`Illustration for ${step.title}`}
                                    loading="lazy"
                                    className="h-40 w-40 object-contain transition duration-300 group-hover:scale-105 sm:h-44 sm:w-44"
                                />

                                {/* step number badge */}
                                <span className="absolute -right-2 -top-2 flex size-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground shadow-md">
                                    {index + 1}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold tracking-tight text-foreground">
                                {step.title}
                            </h3>
                            <p className="mt-2 max-w-[260px] text-sm leading-relaxed text-muted-foreground">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
