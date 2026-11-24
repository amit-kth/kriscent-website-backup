"use client";

import React from 'react';
import { Handshake, Lightbulb, Users, Target, ArrowRight, GraduationCap, Globe, HandshakeIcon } from 'lucide-react'
import Image from "next/image"
import { Button } from '@/components/ui/button';
import { SectionHeading } from '@/app/ReusableComponents/section-heading'; 
import { ASSETS_BASE_URL } from '@/lib/variables';

export default function HandshakeProgram() {
    return (
        <section className="relative overflow-hidden py-10">
            <div className="container mx-auto px-4">

                <SectionHeading
                    primaryHeading="Handshake Program"
                    secondaryHeading="KIRP Initiative"
                    highlightedString="Handshake"
                    isCentered
                    icon={HandshakeIcon}
                />
                <p className="text-lg leading-relaxed text-muted-foreground w-full text-center text-balance">
                    A subsidiary initiative of Kriscent Innovative Research Program (KIRP) fostering
                    collaboration and innovation on a win-win basis.
                </p>


                {/* Main Content */}
                <div className="mx-auto mt-16 grid max-w-6xl gap-8 lg:grid-cols-2">
                    {/* Left Side - Image and Stats */}
                    <div className="relative">
                        <div className="overflow-hidden">
                            <div className="relative aspect-square overflow-hidden rounded-lg lg:aspect-auto lg:h-full">
                                <Image
                                    src={`${ASSETS_BASE_URL}/tempAssets/handshake.webp`}
                                    alt="Collaboration and Innovation"
                                    width={600}
                                    height={600}
                                    className="h-full w-full object-cover"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-gray-900/60 via-transparent to-transparent" />

                                {/* Overlay Content */}
                                <div className="absolute inset-x-0 flex flex-wrap gap-2 bottom-0 p-4">

                                    <div className="rounded-full bg-white/10 p-4 backdrop-blur-xs">
                                        <h5 className="font-semibold text-white">Win-Win Collaboration</h5>
                                    </div>
                                    <div className="rounded-full bg-white/10 p-4 backdrop-blur-xs">
                                        <h5 className="font-semibold text-white">Analytical Approach</h5>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Features */}
                    <div className="grid gap-6">
                        <div className="border-0 bg-linear-to-br from-primary/10 to-primary/20 p-6">
                            <Lightbulb className="mb-4 h-8 w-8 text-primary" />
                            <h4 className="mb-2 text-xl font-semibold text-foreground">Innovative Ideas Welcome</h4>
                            <p className="text-muted-foreground">
                                We promote new ideas and concepts that are mutually beneficial, appreciating valuable
                                contributions that stimulate technological innovation.
                            </p>
                        </div>

                        <div className="border-0 bg-linear-to-br from-primary/10 to-primary/20 p-6">
                            <GraduationCap className="mb-4 h-8 w-8 text-primary" />
                            <h4 className="mb-2 text-xl font-semibold text-foreground">Young Talent Development</h4>
                            <p className="text-muted-foreground">
                                We encourage young talents to participate, helping transform professional learning into
                                groundbreaking new services and products.
                            </p>
                        </div>

                        <div className="border-0 bg-linear-to-br from-primary/10 to-primary/20 p-6">
                            <Globe className="mb-4 h-8 w-8 text-primary" />
                            <h4 className="mb-2 text-xl font-semibold text-foreground">Expert Collaboration</h4>
                            <p className="text-muted-foreground">
                                We maintain partnerships with leading global experts to identify and address relevant
                                industry challenges.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

