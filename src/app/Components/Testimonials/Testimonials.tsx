"use client";

import React, { useMemo } from "react";
import { MessageCircleDashed } from "lucide-react";
import { SectionHeading } from '@/app/ReusableComponents/section-heading';

import { clientReviews, RatingsContent } from "@/app/testimonials/ratings-data";
import { TestimonialColumnItem, TestimonialsColumn } from "@/app/testimonials/testimonials-section";

export default function Testimonials() {
    const testimonials = useMemo<TestimonialColumnItem[]>(() => {
        const ratings = RatingsContent.slice(0, 5).map((testimonial, index) => ({
            id: `rating-${index}`,
            name: testimonial.name,
            role: testimonial.name || "",
            text: testimonial.reviewtext,
            image: testimonial.avatar,
            imageType: "avatar" as const,
        }));

        const clients = clientReviews.slice(0, 5).map((testimonial, index) => ({
            id: `client-${index}`,
            name: testimonial.name,
            role: testimonial.role || testimonial.source || "",
            text: testimonial.reviewtext,
            image: testimonial.logo || testimonial.avatar,
            imageType: testimonial.logo ? ("logo" as const) : ("avatar" as const),
        }));

        return [...ratings, ...clients];
    }, []);

    const [firstColumn, secondColumn, thirdColumn] = useMemo(() => {
        const columns: TestimonialColumnItem[][] = [[], [], []];

        testimonials.forEach((testimonial, index) => {
            columns[index % 3].push(testimonial);
        });

        return columns;
    }, [testimonials]);

    return (
        <section className="w-full flex flex-col items-center">
            <div className="container w-full flex flex-col">
                <SectionHeading
                    primaryHeading="What People Say"
                    secondaryHeading="Our Testimonials"
                    icon={MessageCircleDashed}
                    highlightedString="People"
                    buttonTitle="View More"
                    buttonLink="/testimonials"
                />

                <div className="mt-10 flex justify-center gap-6 max-h-[740px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]">
                    <TestimonialsColumn
                        testimonials={firstColumn}
                        duration={18}
                    />
                    <TestimonialsColumn
                        testimonials={secondColumn}
                        className="hidden md:block"
                        duration={22}
                    />
                    <TestimonialsColumn
                        testimonials={thirdColumn}
                        className="hidden lg:block"
                        duration={20}
                    />
                </div>
            </div>
        </section>
    );
}