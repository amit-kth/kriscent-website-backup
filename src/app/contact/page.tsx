"use client";

import React from 'react'
import { SectionHeading } from '@/app/ReusableComponents/section-heading';
import { Globe2, Phone } from 'lucide-react'
import { ImageBackground } from '../Components/ImageBg';
import Expandable from '../Components/AnimataUI/expandable';
import ContactSection from './components/contact-section';
import { SEO } from '@/lib/seo';
import { ASSETS_BASE_URL, metadata } from '@/lib/variables';

export default function ContactPage() {
    return <>

        {/* seo tag */}
        <SEO metadata={metadata.contactPage} additionalSchema={contactSchema}>

            {/* main layout of the pge */}
            <div className='w-full h-[70vh] bg-primary/10 relative'>
                <ImageBackground src={`${ASSETS_BASE_URL}/tempAssets/heroSections/contact-hero.webp`} className='' alt='contact hero section image kriscent techno hub' />
                <div className='2xl:w-[1000px] md:w-[700px] w-[90%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center'>
                    <SectionHeading
                        primaryHeading={`Contact Kriscent – Let’s Build Something Great Together`}
                        secondaryHeading='Contact Us'
                        icon={Phone}
                        markPrimaryHeadingAsH1Tag={true}
                        isCentered
                        highlightedString='Kriscent'
                        customColor='text-white'
                        glowEffect={false}
                    />
                    <p className='text-white text-center text-lg'>
                        We are here to assist you with any inquiries or support you may need.
                        Feel free to reach out to us, and we will get back to you as soon as possible.
                    </p>
                </div>
            </div>

            <div className='w-full flex justify-center items-center relative overflow-hidden'>
                {/* <ImageBackground src='tempAssets/map.png' className='opacity-20 absolute inset-0' /> */}
                <ContactSection />
            </div>

            <div className='w-full h-fit flex justify-center my-10'>
                <div className='container'>
                    <SectionHeading
                        primaryHeading='Serving Clients Across the Globe'
                        secondaryHeading='Our Offices'
                        icon={Globe2}
                        highlightedString='Clients'
                        isCentered
                        className=''
                    />
                    <p className='text-gray-600 text-center text-lg mb-10 text-balance'>
                        We are proudly serving clients across the globe with our offices in the following locations. Feel free to reach out to us, and we will get back to you as soon as possible.
                    </p>
                    <Expandable className="w-full min-w-72 storybook-fix" />
                </div>
            </div>
        </SEO>
    </>
}



// schema for the page
const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Kriscent Techno Hub",
    "description": "Get in touch with Kriscent for web development, software solutions, and digital marketing services for businesses worldwide.",
    "url": "https://www.kriscent.in/contact",
    "mainEntity": {
        "@type": "Organization",
        "name": "Kriscent Techno Hub Pvt. Ltd.",
        "telephone": "+91-894-702-7625",
        "email": "info@kriscent.in",
        "contactPoint": [
            {
                "@type": "ContactPoint",
                "telephone": "+91-894-702-7625",
                "email": "info@kriscent.in",
                "contactType": "customer service",
                "areaServed": ["IN", "US", "GB", "AE", "IE", "CA", "AU"],
                "availableLanguage": ["English", "Hindi"]
            }
        ],
        "location": [
            {
                "@type": "Place",
                "name": "Kota Office (HQ)",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "186, Agrawal Bhawan, 1st Floor Shopping Center, nearby Chaupati",
                    "addressLocality": "Kota",
                    "addressRegion": "Rajasthan",
                    "postalCode": "324007",
                    "addressCountry": "IN"
                }
            },
            {
                "@type": "Place",
                "name": "Jaipur Office",
                "address": { "@type": "PostalAddress", "addressLocality": "Jaipur", "addressRegion": "Rajasthan", "addressCountry": "IN" }
            },
            {
                "@type": "Place",
                "name": "UAE Office",
                "address": { "@type": "PostalAddress", "addressCountry": "AE" }
            },
            {
                "@type": "Place",
                "name": "UK Office",
                "address": { "@type": "PostalAddress", "addressCountry": "GB" }
            },
            {
                "@type": "Place",
                "name": "Ireland Office",
                "address": { "@type": "PostalAddress", "addressCountry": "IE" }
            }
        ]
    }
};