"use client";

import React from 'react'
import DynamicServiceHeroSection from '../services/components/services-hero-section';
import { ASSETS_BASE_URL, metadata } from '@/lib/variables';
import { Gamepad, Gamepad2 } from 'lucide-react';
import Image from 'next/image';
import StartNewProjectCTA from '../services/components/start-new-project-cta';
import ContactSection from '../contact/components/contact-section';
import Testimonials from '../Components/Testimonials/Testimonials';
import GamesListing from './games-listing';
import FantasyGamingSection from './fantasy-games';
import { SEO } from '@/lib/seo';

export default function GameDev() {
    return <>

        <SEO metadata={metadata.gameDevPage}>
            <main className='overflow-x-hidden flex flex-col gap-10'>

                <DynamicServiceHeroSection
                    primaryHeading="Game Development Company in India"
                    secondaryHeading="Game Development"
                    highlightedString='Game Development'
                    description=" Our software developers provide professional game application development services to our clients. From custom game and intranet experiences developed with the most recent and validated Game technology to game creation solutions."
                    icon={Gamepad}
                    markPrimaryHeadingAsH1Tag={true}
                    imageSrc={`${ASSETS_BASE_URL}/tempAssets/heroSections/game-hero.webp`}

                />

                <section className="w-full bg-white">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                            {/* Content Column */}
                            <div className="">
                                <h3 className="text-2xl font-semibold text-primary mb-4">We develop every game with passion</h3>
                                <div className="space-y-4 text-gray-700">
                                    <p>
                                        Our software developers provide professional game application development services to our clients. From custom game and intranet experiences developed with the most recent and validated Game technology to game creation solutions.
                                    </p>
                                    <p>
                                        {`Most consumers visit a company's or service provider's game before making a purchase, and a growing
                                    number of customers base their decisions on their game experience: the game's look, accessibility, and
                                    user-friendliness are more critical than ever, particularly in an increasingly competitive market.`}
                                    </p>
                                    <p>
                                        {`We have extensive experience designing games that are 100 percent accurate and perfectly meet your
                                    requirements. To help our clients achieve their full potential, we have expertise in all phases of game
                                    production. Users will benefit from our team's visually spectacular and animated game solutions.`}
                                    </p>
                                    <p>
                                        {`The goal of the leading mobile game development company is to transform our customers' ideas into
                                    reality and to provide them with a game application that meets all of the demands of consumers, clients,
                                    and players in terms of modernity and advanced functionality, while still remaining competitive in the
                                    market.`}
                                    </p>
                                </div>
                            </div>

                            {/* Image Column */}
                            <div className="relative h-[600px] overflow-hidden rounded-xl">
                                <Image
                                    src={`${ASSETS_BASE_URL}/tempAssets/game.webp`}
                                    alt="Game Development Services"
                                    className="object-cover"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <GamesListing />

                <FantasyGamingSection />

                <StartNewProjectCTA />

                <Testimonials />
                <div className='w-full h-full bg-[#f5f5f5] mt-10'>
                    <ContactSection />
                </div>

            </main>
        </SEO>

    </>
}
