'use client';

import React from 'react';
import Link from 'next/link';
import { SectionHeading } from '@/app/ReusableComponents/section-heading';
import { ImageBackground } from '../Components/ImageBg';
import { Map } from 'lucide-react';
import { ASSETS_BASE_URL, metadata } from '@/lib/variables';
import { SEO } from '@/lib/seo';

const SitemapPage = () => {
    return (
        <SEO metadata={metadata.sitemap}>
            <div className='w-full h-[50vh] bg-primary/10 relative'>
                <ImageBackground src={`${ASSETS_BASE_URL}/tempAssets/About/aboutHero.webp`} className='' alt='sitemap hero section image kriscent techno hub' />
                <div className='2xl:w-[1000px] md:w-[700px] w-[90%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center'>
                    <SectionHeading
                        primaryHeading='Go through the Sitemap'
                        secondaryHeading='Sitemap'
                        icon={Map}
                        isCentered
                        highlightedString='Sitemap'
                        customColor='text-white'
                        glowEffect={false}
                        markPrimaryHeadingAsH1Tag={true}
                    />
                </div>
            </div>

            <div className="container mx-auto py-20 px-4">
                <div className="grid md:grid-cols-5 grid-cols-2 gap-8">
                    {/* Home & Company Section */}
                    <div className="space-y-4">
                        <h2 className="text-4xl font-bold text-gray-400 mb-6">01</h2>
                        <h3 className="text-xl mb-4 text-primary font-bold">Home &amp; Company</h3>
                        <div className="space-y-2">
                            <Link href="/" className="block text-gray-600 hover:text-primary">Home</Link>
                            <Link href="/about" className="block text-gray-600 hover:text-primary">About Kriscent</Link>
                            <Link href="/clients" className="block text-gray-600 hover:text-primary">Our Valuable Clients</Link>
                            <Link href="/our-culture" className="block text-gray-600 hover:text-primary">Life at Kriscent</Link>
                            <Link href="/career" className="block text-gray-600 hover:text-primary">Career at Kriscent</Link>
                            <Link href="/awards" className="block text-gray-600 hover:text-primary">Our Recognitions</Link>
                            <Link href="/connect" className="block text-gray-600 hover:text-primary">Company Profile</Link>
                        </div>
                    </div>

                    {/* Services Section */}
                    <div className="space-y-4">
                        <h2 className="text-4xl font-bold text-gray-400 mb-6">02</h2>
                        <h3 className="text-xl text-primary font-bold mb-4">Services</h3>
                        <div className="space-y-2">
                            <Link href="/services" className="block text-gray-600 hover:text-primary">Services</Link>
                            <Link href="/design-services" className="block text-gray-600 hover:text-primary">Media Design</Link>
                            <Link href="/web-solutions" className="block text-gray-600 hover:text-primary">Website Design &amp; Development</Link>
                            <Link href="/app-solutions" className="block text-gray-600 hover:text-primary">App Design &amp; Development</Link>
                            <Link href="/digital-marketing" className="block text-gray-600 hover:text-primary">Digital Marketing</Link>
                            <Link href="/ai-solutions" className="block text-gray-600 hover:text-primary">AI/ML Solutions</Link>
                            <Link href="/ai-solutions/ai-calling-agent" className="block text-gray-600 hover:text-primary">AI Calling Agents</Link>
                            <Link href="/consultancy" className="block text-gray-600 hover:text-primary">Consultancy</Link>
                            <Link href="/hire-talent" className="block text-gray-600 hover:text-primary">Hire Talent</Link>
                            <Link href="/data-analysis" className="block text-gray-600 hover:text-primary">Data Analysis</Link>
                            <Link href="/game-development" className="block text-gray-600 hover:text-primary">Game Development</Link>
                            <Link href="/technologies" className="block text-gray-600 hover:text-primary">Technologies</Link>
                        </div>
                    </div>

                    {/* Portfolio Section */}
                    <div className="space-y-4">
                        <h2 className="text-4xl font-bold text-gray-400 mb-6">03</h2>
                        <h3 className="text-xl text-primary font-bold mb-4">Portfolio</h3>
                        <div className="space-y-2">
                            <Link href="/portfolio" className="block text-gray-600 hover:text-primary">Projects</Link>
                            <Link href="/case-studies" className="block text-gray-600 hover:text-primary">Case Studies</Link>
                            <Link href="https://kriscent.com/#product" className="block text-gray-600 hover:text-primary">Ready Products</Link>
                        </div>
                    </div>

                    {/* Case Studies Section */}
                    <div className="space-y-4">
                        <h2 className="text-4xl font-bold text-gray-400 mb-6">04</h2>
                        <h3 className="text-xl text-primary font-bold mb-4">Case Studies</h3>
                        <div className="space-y-2">
                            <Link href="/case-study-rgcsm" className="block text-gray-600 hover:text-primary">RGCSM</Link>
                            <Link href="/case-study-auraquestt" className="block text-gray-600 hover:text-primary">Auraquestt</Link>
                            <Link href="/case-study-chabi" className="block text-gray-600 hover:text-primary">Chabi</Link>
                            <Link href="/case-study-flixmates" className="block text-gray-600 hover:text-primary">Flixmates</Link>
                            <Link href="/case-study-gmv" className="block text-gray-600 hover:text-primary">GMV</Link>
                            <Link href="/case-study-gudz" className="block text-gray-600 hover:text-primary">Gudz</Link>
                            <Link href="/case-study-luriox-stones" className="block text-gray-600 hover:text-primary">Luriox Stones</Link>
                            <Link href="/case-study-medisaver" className="block text-gray-600 hover:text-primary">Medisaver</Link>
                            <Link href="/case-study-paras-travels" className="block text-gray-600 hover:text-primary">Paras Travels</Link>
                            <Link href="/case-study-shop-ad" className="block text-gray-600 hover:text-primary">Shop Ad</Link>
                            <Link href="/case-study-tsbos" className="block text-gray-600 hover:text-primary">TSBOS</Link>
                        </div>
                    </div>

                    {/* Other Pages Section */}
                    <div className="space-y-4">
                        <h2 className="text-4xl font-bold text-gray-400 mb-6">05</h2>
                        <h3 className="text-xl text-primary font-bold mb-4">Other Pages</h3>
                        <div className="space-y-2">
                            <Link href="/contact" className="block text-gray-600 hover:text-primary">Contact</Link>
                            <Link href="/quotation" className="block text-gray-600 hover:text-primary">Quotation</Link>
                            <Link href="/faq" className="block text-gray-600 hover:text-primary">FAQ</Link>
                            <Link href="/testimonials" className="block text-gray-600 hover:text-primary">Testimonials</Link>
                            <Link href="/kirp" className="block text-gray-600 hover:text-primary">Kriscent Research Program</Link>
                            <Link href="/terms-conditions" className="block text-gray-600 hover:text-primary">Terms and Conditions</Link>
                            <Link href="/agreement" className="block text-gray-600 hover:text-primary">Agreements</Link>
                            <Link href="/sitemap" className="block text-gray-600 hover:text-primary">Sitemap</Link>
                            <Link href="https://kriscent.in/blog" className="block text-gray-600 hover:text-primary">Our Blogs</Link>
                        </div>
                    </div>
                </div>
            </div>
        </SEO>
    );
};

export default SitemapPage;
