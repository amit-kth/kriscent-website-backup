"use client";

import { SectionHeading } from '@/app/ReusableComponents/section-heading'; 
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { FadeDownToUpAnimation } from '@/app/ReusableComponents/UI'
import React, { useEffect, useState } from 'react'
import ContactForm from './contact-form'
import { IconBrandSkype } from '@tabler/icons-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { WorldMapDemo } from './world-map';
import { ASSETS_BASE_URL } from '@/lib/variables';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


const ContactSection = () => {
    const pathname = usePathname();
    const [selectedOption, setSelectedOption] = useState<string>('');

    // calendly initialize 
    useEffect(() => {
        // Load Calendly script
        const script = document.createElement('script')
        script.type = 'text/javascript'
        script.src = 'https://assets.calendly.com/assets/external/widget.js'
        script.async = true
        document.body.appendChild(script)

        // Cleanup
        return () => {
            document.body.removeChild(script)
        }
    }, [])

    return <>
        {/* Change md: to lg: for container layout */}
        <div className='container flex flex-col lg:flex-row w-full items-center relative z-0 mt-[100px] lg:mt-0'>
            {/* Update left side breakpoints */}
            <div className='lg:w-1/2 w-full h-full lg:p-8 p-4 flex flex-col justify-center'>
                <SectionHeading
                    primaryHeading="Get in Touch With Us, We’re Here to Help"
                    secondaryHeading="Contact Us"
                    icon={MapPin}
                    isCentered={false}
                    highlightedString='Touch'
                />
                <p className='mt-0 text-gray-600 text-balance'>
                    We are here to assist you with any inquiries or support you may need.
                    Feel free to reach out to us, and we will get back to you as soon as possible.
                </p>
                {/* <p className='mt-2 text-gray-600'>
                        Your feedback is important to us, and we look forward to hearing from you!
                 </p> */}

                {/* Contact Info Cards - update breakpoints */}
                {pathname === "/contact" && <div className="rounded-lg mt-4 w-full">
                    <div className="flex flex-col lg:flex-row gap-3 mb-3">
                        {/* Update card widths for better tablet display */}
                        <div className={`flex flex-col justify-start py-5 px-5 items-center w-full lg:w-[calc(33%-0.5rem)] lg:min-w-[180px] lg:max-w-[250px] flex-1 h-[130px] rounded-lg hover:scale-105 transition-all duration-75 cursor-pointer`}
                            style={{ backgroundColor: `#28C6FF10` }}>
                            <div className={`rounded-full p-2 mb-2`} style={{ backgroundColor: `#28C6FF30` }}>
                                <IconBrandSkype className="w-5 h-5 md:w-4 md:h-4 text-white brightness-90" style={{ color: `#28C6FF` }} />
                            </div>
                            <div className='w-fit text-center brightness-90' style={{ color: `#28C6FF` }}>
                                <h3 className="font-sem ibold text-base md:text-sm">Skype Call</h3>
                                <div className="text-sm md:text-xs">
                                    <span
                                    //  href="skype:kriscent15?call"
                                    // onClick={() => handleSkypeClick("kriscent15")}
                                    // className="hover:underline"
                                    >kriscent15</span> <br />
                                    <span
                                    //  href="skype:kriscent?call" 
                                    // onClick={() => handleSkypeClick("kriscent")}
                                    // className="hover:underline"
                                    >kriscent</span>
                                </div>
                            </div>
                        </div>

                        {/* Email Card */}
                        <div className={`flex flex-col justify-start py-5 px-5 items-center w-full sm:w-[calc(33%-0.5rem)] lg:min-w-[180px] lg:max-w-[250px] flex-1 h-[130px] rounded-lg hover:scale-105 transition-all duration-75 cursor-pointer`}
                            style={{ backgroundColor: `#FF843F10` }}>
                            <div className={`rounded-full p-2 mb-2`} style={{ backgroundColor: `#FF843F30` }}>
                                <Mail className="w-5 h-5 md:w-4 md:h-4 text-white brightness-90" style={{ color: `#FF843F` }} />
                            </div>
                            <div className='w-fit text-center' style={{ color: `#FF843F` }}>
                                <h3 className="font-semibold text-base md:text-sm">Email</h3>
                                <div className="text-sm md:text-xs flex flex-col gap-1">
                                    <Link href="mailto:hello@kriscent.in" className="w-full relative">
                                        <img
                                            src={`${ASSETS_BASE_URL}/tempAssets/hello.webp`}
                                            alt="Email Icon"
                                            className='h-3 w-auto object-contain'
                                            style={{
                                                maxWidth: '100%',
                                                WebkitBackfaceVisibility: 'hidden',
                                                MozBackfaceVisibility: 'hidden',
                                                backfaceVisibility: 'hidden'
                                            }}
                                        />
                                    </Link>
                                    <Link href="mailto:support@kriscent.in" className="w-full relative hover:underline">
                                        <img
                                            src={`${ASSETS_BASE_URL}/tempAssets/support.webp`}
                                            alt="Support Icon"
                                            className='h-3 w-auto object-contain'
                                            style={{
                                                maxWidth: '100%',
                                                WebkitBackfaceVisibility: 'hidden',
                                                MozBackfaceVisibility: 'hidden',
                                                backfaceVisibility: 'hidden'
                                            }}
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Phone Card */}
                        <div className={`flex flex-col justify-start py-5 px-5 items-center w-full sm:w-[calc(33%-0.5rem)] lg:min-w-[180px] lg:max-w-[250px] flex-1 h-[130px] rounded-lg hover:scale-105 transition-all duration-75 cursor-pointer`}
                            style={{ backgroundColor: `#0CAA4110` }}>
                            <div className='flex flex-col items-center justify-center'>
                                <div className={`rounded-full p-2 mb-2`} style={{ backgroundColor: `#0CAA4130` }}>
                                    <Phone className="w-5 h-5 md:w-4 md:h-4 text-white brightness-90" style={{ color: `#0CAA41` }} />
                                </div>
                                <h3 className="font-semibold text-base md:text-sm text-[#0CAA41]">Phone</h3>
                            </div>
                            <div className="text-sm md:text-xs text-[#0CAA41] text-center">
                                <Link
                                    // onClick={() => handlePhoneClick("+91-8947027625")}
                                    href="/contact"
                                    className="hover:underline cursor-pointer"
                                >
                                    +91-8947027625
                                </Link> <br />

                                <Link
                                    // onClick={() => handlePhoneClick("+91-7240560001")} 
                                    href="/contact"
                                    className="hover:underline">
                                    +91-7240560001/2/3/4/5
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>}
                <WorldMapDemo />
            </div>

            {/* Update right side breakpoints */}
            <div className='lg:w-1/2 w-full lg:p-8 p-4 flex items-center z-0'>
                <div className='w-full h-fit bg-white shadow-lg p-4 lg:p-6 rounded-xl'>
                    <Tabs defaultValue="generalEnq" className="select-none" onValueChange={(value) => { setSelectedOption(value) }}>
                        <TabsList className='bg-primary/10 px-2 py-2 rounded-full scale-[70%] translate-x-[-15%] flex flex-nowrap w-fit'>
                            <TabsTrigger value='generalEnq'>
                                General Enquiry
                            </TabsTrigger>
                            <TabsTrigger value='scheduleMeeting'>
                                Schedule a Meeting
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="generalEnq"><ContactForm /></TabsContent>
                        <TabsContent value="scheduleMeeting" className='h-[500px]'>
                            <CalendlyEmbed url="https://calendly.com/kriscent/30min?text_color=333333&primary_color=ed3237" />
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
    </>
}

export default ContactSection;

const CalendlyEmbed = ({ url }: { url: string }) => {
    useEffect(() => {
        const head = document.querySelector("head");
        const script = document.createElement("script");
        script.setAttribute(
            "src",
            "https://assets.calendly.com/assets/external/widget.js"
        );
        head && head.appendChild(script);
    }, []);

    return (
        <div
            className="calendly-inline-widget w-full h-full"
            data-url={url}
        // style={{ minHeight: "650px", width: "100%" }}
        ></div>
    );
};