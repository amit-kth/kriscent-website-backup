"use client";

import { Presentation } from "lucide-react";
import { ASSETS_BASE_URL } from "@/lib/variables";
import { DefaultButton } from "@/app/ReusableComponents/UI";
import { SectionHeading } from "@/app/ReusableComponents/section-heading";

export default function CompanyProfileSection() {
    return (
        <section aria-labelledby="company-profile" className="mt-10 flex w-full justify-center px-4 md:mt-20 md:px-0">
            {/* overflow-visible so the image can rise above the panel top */}
            <div className="container relative flex w-full flex-col overflow-visible bg-primary/20 pt-16 pb-10 md:flex-row md:pt-24 md:pb-14">
                {/* content */}
                <div className="flex-1 px-4 md:px-8">
                    <SectionHeading
                        primaryHeading="Know Our Company"
                        secondaryHeading="Our Profile"
                        icon={Presentation}
                        highlightedString="Company"
                    />

                    <p className="w-full text-balance text-sm leading-relaxed text-muted-foreground md:w-3/4 md:text-lg">
                        Kriscent Techno Hub Pvt Ltd, based in Kota, Rajasthan, specializes in
                        delivering innovative IT solutions, including software development,
                        digital marketing, and emerging technologies. Since our establishment
                        in 2014, we have empowered businesses globally with high-quality,
                        scalable solutions tailored to meet their unique needs.
                    </p>

                    <div className="mt-6">
                        <DefaultButton
                            title="View Company Profile"
                            icon={Presentation}
                            onClick={() => {
                                window.open(
                                    `${ASSETS_BASE_URL}/tempAssets/Kriscent-Profile.pdf?updatedAt=1734525256743`,
                                    "_blank"
                                );
                            }}
                        />
                    </div>
                </div>

                {/* image , sticks to bottom, overflows above the panel top */}
                <img
                    src={`${ASSETS_BASE_URL}/tempAssets/About/prof.png`}
                    className="absolute bottom-0 right-10 hidden h-[440px] md:block"
                    alt="Kriscent IT solution provider"
                    loading="lazy"
                />
            </div>
        </section>
    );
}
