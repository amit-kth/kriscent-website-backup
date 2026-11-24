"use client";

import React from 'react';
import AgreementHeroSection from './agreement-hero-section';
import { SEO } from '@/lib/seo';
import { metadata } from '@/lib/variables';
import Link from 'next/link';
import { SectionHeading } from '@/app/ReusableComponents/section-heading';

/* ═══════════════════════════════════════════════
   AGREEMENT , PREMIUM EDITORIAL LAYOUT
═══════════════════════════════════════════════ */
export default function Agreement() {
    return (
        <>
            <SEO metadata={metadata.agreementPage}>
                <main className="relative w-full overflow-hidden bg-background">
                    <div aria-hidden="true" className="pointer-events-none absolute -top-32 right-0 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-primary/5 to-transparent opacity-60 blur-3xl" />

                    <section className="relative mx-auto w-full max-w-[1280px] px-6 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-32 2xl:max-w-[1720px] 2xl:px-10">
                        <SectionHeading
                            primaryHeading="Agreement"
                            secondaryHeading="Legal"
                            description="Terms governing the use of our software, services, and digital properties."
                            isCentered={false}
                            isDarkBg={false}
                            glowEffect={false}
                            markPrimaryHeadingAsH1Tag={true}
                        />

                        <AgreementHeroSection />

                        <div className="mt-14 rounded-3xl bg-card border border-border/20 shadow-sm overflow-hidden">
                            <div className="p-8 sm:p-12">
                                <p className="text-[15px] leading-[1.7] text-muted-foreground italic mb-10">
                                    You may not use any service or software unless you agree to these provisions. By using the software, you agree to all of these provisions.
                                </p>

                                <div className="space-y-10">
                                    {/* Introduction */}
                                    <section>
                                        <h2 className="text-xl font-bold tracking-tight text-foreground mb-4">Introduction</h2>
                                        <p className="text-[15px] leading-[1.7] text-muted-foreground">
                                            This EULA presents that who is eligible to use any software, service or both of KRISCENT TECHNO HUB PVT. LTD. If anyone want to use, then he has to accept the agreement of KRISCENT TECHNO HUB PVT. LTD. This agreement governs your use of our website, service or software such as SubBuilder, Kart and other software that we include as part of the Services, including any applications, scripts, instruction sets, and any related documentation (collectively "Software"). By using the Services or Software, you agree to these terms.
                                        </p>
                                    </section>

                                    {/* How this Agreement Works */}
                                    <section className="border-t border-border/20 pt-8">
                                        <h2 className="text-xl font-bold tracking-tight text-foreground mb-4">How this Agreement Works</h2>
                                        <p className="text-[15px] leading-[1.7] text-muted-foreground">
                                            This EULA presents that who is eligible to use any software, service or both of KRISCENT TECHNO HUB PVT. LTD. If anyone want to use, then he has to accept the agreement of KRISCENT TECHNO HUB PVT. LTD. This agreement governs your use of our website, service or software such as SubBuilder, Kart and other software that we include as part of the Services, including any applications, scripts, instruction sets, and any related documentation (collectively "Software"). By using the Services or Software, you agree to these terms.
                                        </p>
                                    </section>

                                    {/* Eligibility & Privacy */}
                                    <section className="border-t border-border/20 pt-8">
                                        <h2 className="text-xl font-bold tracking-tight text-foreground mb-6">Eligibility & Privacy</h2>
                                        <div className="space-y-6">
                                            <div>
                                                <h3 className="font-bold text-foreground mb-2">Kriscent Techno Hub Pvt. Ltd.</h3>
                                                <p className="text-[15px] leading-[1.7] text-muted-foreground">Kriscent Techno Hub is an authorized company of these Software, Mobile Applications and Web Applications.</p>
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-foreground mb-2">Eligibility</h3>
                                                <p className="text-[15px] leading-[1.7] text-muted-foreground">You may only use the Services if you are (a) over 12 years old and (b) allowed by law to enter into a binding contract.</p>
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-foreground mb-2">Privacy Policy</h3>
                                                <p className="text-[15px] leading-[1.7] text-muted-foreground">The Privacy Policy at this link describes how we collect and use information you provide to us. By using the Services or Software you agree to the terms of the Privacy Policy.</p>
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-foreground mb-2">Desktop Applications and Mobile Application Usage Data</h3>
                                                <p className="text-[15px] leading-[1.7] text-muted-foreground">You have the option to share information with Kriscent about how you use our desktop applications and/or our specialized analytic bundle (which is turned on by default). This information is associated with your Kriscent account and allows us to provide you with a more personalized experience and helps us improve quality and features.</p>
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-foreground mb-2">Modification</h3>
                                                <p className="text-[15px] leading-[1.7] text-muted-foreground">We may modify, update, or discontinue the Services, Software (including any of their portions or features) at any time without liability to you or anyone else. However, we will make reasonable, and to where you a reasonable time to download data. If we discontinue a Service in its entirety.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* License of Use */}
                                    <section className="border-t border-border/20 pt-8">
                                        <h2 className="text-xl font-bold tracking-tight text-foreground mb-6">License of Use</h2>
                                        <div className="space-y-6">
                                            <p className="text-[15px] leading-[1.7] text-muted-foreground">This EULA presents that who is eligible to use any software, service or both of KRISCENT TECHNO HUB PVT. LTD. If anyone want to use, then he has to accept the agreement of KRISCENT TECHNO HUB PVT. LTD. This agreement governs your use of our website, service or software such as SubBuilder, Kart and other software that we include as part of the Services, including any applications, scripts, instruction sets, and any related documentation (collectively "Software"). By using the Services or Software, you agree to these terms.</p>
                                            <div>
                                                <h3 className="font-bold text-foreground mb-2">License</h3>
                                                <p className="text-[15px] leading-[1.7] text-muted-foreground">Subject to your compliance with these terms and the law, you may access and use the Services.</p>
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-foreground mb-2">Kriscent Intellectual Property</h3>
                                                <p className="text-[15px] leading-[1.7] text-muted-foreground">We (and our licensors) remain the sole owner of all right, title, and interest in the Services and Software. We reserve all rights not granted under these terms.</p>
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-foreground mb-2">Licensor</h3>
                                                <p className="text-[15px] leading-[1.7] text-muted-foreground">Kriscent Techno Hub Pvt. Ltd. is Licensor of this Service and/or Product and/or Mobile Application and/or Web Application and/or Desktop Software or Application.</p>
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-foreground mb-2">License Grant</h3>
                                                <p className="text-[15px] leading-[1.7] text-muted-foreground">Company grants you a revocable, non-exclusive, non-transferable application (online and/or offline) in accordance with the terms and conditions mentioned in this license.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* Other License Types */}
                                    <section className="border-t border-border/20 pt-8">
                                        <h2 className="text-xl font-bold tracking-tight text-foreground mb-6">Other License Types</h2>
                                        <div className="space-y-6">
                                            <div>
                                                <h3 className="font-bold text-foreground mb-2">NFR Version</h3>
                                                <p className="text-[15px] leading-[1.7] text-muted-foreground">We may designate the Software or Services as "trial," "evaluation," "not for resale," or other similar designation ("NFR Version"). You may install and use the NFR Version only during the period and only for the purposes that we have authorized under the NFR Version. You must not use any materials you produce with the NFR Version for anything other than non-commercial purposes. We may terminate your use of NFR versions after the given time.</p>
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-foreground mb-2">Pre-Release Version</h3>
                                                <p className="text-[15px] leading-[1.7] text-muted-foreground">We may designate the Software or Services as a pre-release or beta version ("Pre-release Version"). Pre-release Versions do not represent the final product and may contain bugs that may cause system or other failures. We may choose not to release a commercial version of the Pre-release Version. We can request that you stop using and destroy all copies of the Pre-release Version if we request you to do so, or if we release a commercial version of the Pre-release Version. Any separate agreement governing the Pre-release Version will supersede the provisions on Pre-Release Version set out in this section.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* Your Content */}
                                    <section className="border-t border-border/20 pt-8">
                                        <h2 className="text-xl font-bold tracking-tight text-foreground mb-6">Your Content</h2>
                                        <div className="space-y-6">
                                            <div>
                                                <h3 className="font-bold text-foreground mb-2">Ownership</h3>
                                                <p className="text-[15px] leading-[1.7] text-muted-foreground">You retain all rights and ownership of your content. We do not claim any ownership rights to your content.</p>
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-foreground mb-2">License to Your Content in Order to Operate the Services</h3>
                                                <p className="text-[15px] leading-[1.7] text-muted-foreground">We require certain licenses from you to your content to operate and enable the Services. When you upload content to the Services, you grant us a non-exclusive, worldwide, royalty-free, sub-licensable, and transferable license to use, reproduce, publicly display, distribute, modify (so as to better showcase your content, for example), publicly perform, and translate the content as needed in response to user-driven actions (such as when you choose to store privately or share your content with others).</p>
                                                <p className="text-[15px] leading-[1.7] text-muted-foreground italic mt-2">This license is only for the purpose of operating or improving the Services.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* Account Information */}
                                    <section className="border-t border-border/20 pt-8">
                                        <h2 className="text-xl font-bold tracking-tight text-foreground mb-4">Account Information</h2>
                                        <p className="text-[15px] leading-[1.7] text-muted-foreground">You are responsible for all activity that occurs via your account. Please notify Customer Support immediately if you become aware of any unauthorized use of your account. You may not (a) share your account information (except with an authorized account administrator) or (b) use another person&apos;s account. Your account administrator may use your account information to manage your use and access to the Services.</p>
                                    </section>

                                    {/* Restrictions of Use */}
                                    <section className="border-t border-border/20 pt-8">
                                        <h2 className="text-xl font-bold tracking-tight text-foreground mb-4">Restrictions of Use</h2>
                                        <p className="text-[15px] leading-[1.7] text-muted-foreground">You shall use the Application(s) strictly in accordance with the terms of the Related Agreements and shall not: (a) decompile, reverse engineer, disassemble, attempt to derive the source code of, or decrypt the Application(s); (b) make any modification, adaptation, improvement, enhancement, translation, or derivative work from the Application; (c) violate any applicable laws, rules or regulations in connection with your Access or use of the Application(s); (d) remove, alter or obscure any proprietary notice (including any notice of copyright or trademark) of Company or its affiliated partners, suppliers or the licensors of the Application/s.</p>
                                    </section>

                                    {/* User Conduct */}
                                    <section className="border-t border-border/20 pt-8">
                                        <h2 className="text-xl font-bold tracking-tight text-foreground mb-6">User Conduct</h2>
                                        <div className="space-y-6">
                                            <div>
                                                <h3 className="font-bold text-foreground mb-2">Misuse</h3>
                                                <p className="text-[15px] leading-[1.7] text-muted-foreground">You must not misuse the Services, Software, or content that we provide to you as part of the Services. For example, you must not:</p>
                                                <ul className="list-disc list-inside text-[15px] leading-[1.7] text-muted-foreground mt-3 space-y-1.5">
                                                    <li>Copy, modify, host, stream, sublicense, or resell the Services, Software, or content;</li>
                                                    <li>Enable or allow others to use the Service, Software, or content using your account information;</li>
                                                    <li>Use the content or Software to create a database or dataset or train an AI model of database;</li>
                                                    <li>Access or attempt to access the Services by any means other than the interface we provided or authorized;</li>
                                                    <li>Circumvent any access or use restrictions put in place to prevent certain uses of the Services;</li>
                                                    <li>Share any content or feature in a way that violates anyone&apos;s Intellectual Property Right or violate the rights of any other person;</li>
                                                    <li>Use the Services or Software to promote any false, libelous, hateful, obscene, vulgar, invasive of another&apos;s privacy, or hateful content;</li>
                                                    <li>Impersonate any person or entity;</li>
                                                    <li>Use the Services to send spam or distribute malware;</li>
                                                    <li>Defame, harass, threaten, abuse, or destroy the Services, software, or hardware;</li>
                                                    <li>Circumvent, interfere with, or inhibit any other user from using the Services;</li>
                                                    <li>Promote illegal activities;</li>
                                                    <li>Spam links in emails, groups, or other channels with unpermitted promotions or campaigns.</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-foreground mb-2">Intellectual Property Rights</h3>
                                                <p className="text-[15px] leading-[1.7] text-muted-foreground">&quot;Intellectual Property Rights&quot; means copyright, moral rights, trademark rights, patent, trade secret, rights of publicity, right of privacy, right of publicity, and any other intellectual property rights.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* Maintenance, Support and Improvements */}
                                    <section className="border-t border-border/20 pt-8">
                                        <h2 className="text-xl font-bold tracking-tight text-foreground mb-4">Maintenance, Support and Improvements</h2>
                                        <p className="text-[15px] leading-[1.7] text-muted-foreground">Kriscent Techno Hub Pvt. Ltd. makes maintenance according to requirement of software and if any issue or bug is found. The support provides during hours only. Any improvements or bug fixing made by Licensor to the Software shall be promptly provided to Licensee and shall be automatically included in this Agreement.</p>
                                    </section>

                                    {/* Termination */}
                                    <section className="border-t border-border/20 pt-8">
                                        <h2 className="text-xl font-bold tracking-tight text-foreground mb-6">Termination</h2>
                                        <div className="space-y-6">
                                            <div>
                                                <h3 className="font-bold text-foreground mb-2">Termination by You</h3>
                                                <p className="text-[15px] leading-[1.7] text-muted-foreground">You may stop using the Services at any time.</p>
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-foreground mb-2">Termination by Us</h3>
                                                <p className="text-[15px] leading-[1.7] text-muted-foreground">If we terminate these terms for reasons other than for cause, then we will make reasonable effort to notify you at least 10 days prior to termination via the email address you provide to us with instructions on how to retrieve your content. Unless stated in Additional Terms, we are not required to provide a termination right to use and access the Services or Software if:</p>
                                                <ul className="list-disc list-inside text-[15px] leading-[1.7] text-muted-foreground mt-3 space-y-1.5">
                                                    <li>You breach any provision of these terms,</li>
                                                    <li>You fail to make the timely payment for the fees for the Software or Services,</li>
                                                    <li>We are required to do so by law or by a court,</li>
                                                    <li>The provision of the Services or Software to you is, by us, unlawfully,</li>
                                                    <li>We elect to discontinue the Services or Software, in whole or in part, (such as if it becomes impractical for us to continue offering Services in your region due to change of law),</li>
                                                    <li>There has been an extended period of inactivity in your free account.</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-foreground mb-2">Termination by Group Administrator</h3>
                                                <p className="text-[15px] leading-[1.7] text-muted-foreground">Group administrators for a Service may terminate a user&apos;s access to a Service at any time. If your group administrator terminates your access, then you may no longer be able to access content that you or other users of the group have shared on a shared workspace within that Service.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* User Conduct (duplicate from original , preserved exactly) */}
                                    <section className="border-t border-border/20 pt-8">
                                        <h2 className="text-xl font-bold tracking-tight text-foreground mb-6">User Conduct</h2>
                                        <div className="space-y-6">
                                            <div>
                                                <h3 className="font-bold text-foreground mb-2">Misuse</h3>
                                                <p className="text-[15px] leading-[1.7] text-muted-foreground">You must not misuse the Services, Software, or content that we provide to you as part of the Services. For example, you must not:</p>
                                                <ul className="list-disc list-inside text-[15px] leading-[1.7] text-muted-foreground mt-3 space-y-1.5">
                                                    <li>Copy, modify, host, stream, sublicense, or resell the Services, Software, or content;</li>
                                                    <li>Enable or allow others to use the Service, Software, or content using your account information;</li>
                                                    <li>Use the content or Software to create a database or dataset or train an AI model of database;</li>
                                                    <li>Access or attempt to access the Services by any means other than the interface we provided or authorized;</li>
                                                    <li>Circumvent any access or use restrictions put in place to prevent certain uses of the Services;</li>
                                                    <li>Share any content or feature in a way that violates anyone&apos;s Intellectual Property Right or violate the rights of any other person;</li>
                                                    <li>Use the Services or Software to promote any false, libelous, hateful, obscene, vulgar, invasive of another&apos;s privacy, or hateful content;</li>
                                                    <li>Impersonate any person or entity;</li>
                                                    <li>Use the Services to send spam or distribute malware;</li>
                                                    <li>Defame, harass, threaten, abuse, or destroy the Services, software, or hardware;</li>
                                                    <li>Circumvent, interfere with, or inhibit any other user from using the Services;</li>
                                                    <li>Promote illegal activities;</li>
                                                    <li>Spam links in emails, groups, or other channels with unpermitted promotions or campaigns.</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-foreground mb-2">Intellectual Property Rights</h3>
                                                <p className="text-[15px] leading-[1.7] text-muted-foreground">&quot;Intellectual Property Rights&quot; means copyright, moral rights, trademark rights, patent, trade secret, rights of publicity, right of privacy, right of publicity, and any other intellectual property rights.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* Payment and Fee */}
                                    <section className="border-t border-border/20 pt-8">
                                        <h2 className="text-xl font-bold tracking-tight text-foreground mb-6">Payment and Fee</h2>
                                        <div className="space-y-6">
                                            <div>
                                                <h3 className="font-bold text-foreground mb-2">Taxes and Third-Party Fees</h3>
                                                <p className="text-[15px] leading-[1.7] text-muted-foreground">You must pay any applicable taxes, and any applicable third-party fee (including, for example telephone toll charges, mobile carrier fees, ISP charges, data plan charges, credit card fees, foreign exchange fees). We are not responsible for these fees. We may take steps to collect the fees you owe us. You are responsible for all related collection costs and expenses.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* Limitation of Liability */}
                                    <section className="border-t border-border/20 pt-8">
                                        <h2 className="text-xl font-bold tracking-tight text-foreground mb-4">Limitation of Liability</h2>
                                        <p className="text-[15px] leading-[1.7] text-muted-foreground uppercase">
                                            UNDER NO CIRCUMSTANCES SHALL COMPANY OR ITS AFFILIATES, PARTNERS, SUPPLIERS OR LICENSORS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL OR EXEMPLARY DAMAGES ARISING OUT OF OR IN CONNECTION WITH YOUR ACCESS OR USE OF OR INABILITY TO ACCESS OR USE THE APPLICATION AND ANY THIRD-PARTY CONTENT AND SERVICES, WHETHER OR NOT THE DAMAGES WERE FORESEEABLE AND WHETHER OR NOT COMPANY WAS ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                                        </p>
                                    </section>

                                    {/* Disclaimer of Warranty */}
                                    <section className="border-t border-border/20 pt-8">
                                        <h2 className="text-xl font-bold tracking-tight text-foreground mb-4">Disclaimer of Warranty</h2>
                                        <p className="text-[15px] leading-[1.7] text-muted-foreground">We specifically disclaim any liability for any actions resulting from your use of any Services or Software. You may use and access the Services or Software at your own discretion and risk, and you are solely responsible for any damage to your computer system or loss of data that results from the use and access of any Service or Software.</p>
                                    </section>

                                    {/* Contact Information */}
                                    <section className="bg-foreground rounded-2xl p-8 sm:p-10 shadow-md">
                                        <h2 className="text-xl font-bold tracking-tight text-white mb-6">Contact Information</h2>
                                        <div className="space-y-3 text-[15px] leading-[1.7] text-white/70">
                                            <p>
                                                <span className="text-white font-semibold">Website:</span>{" "}
                                                <Link href="https://www.kriscent.in" className="text-white underline underline-offset-2 hover:text-white/90 transition-colors focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:outline-none">https://www.kriscent.in</Link>
                                            </p>
                                            <p>
                                                <span className="text-white font-semibold">Email:</span>{" "}
                                                <Link href="mailto:support@kriscent.in" className="text-white underline underline-offset-2 hover:text-white/90 transition-colors focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:outline-none">support@kriscent.in</Link>
                                            </p>
                                            <p>
                                                <span className="text-white font-semibold">Address:</span> TBE, First Floor, Agrawal Bhawan, Shopping Center, Kota 324007 (Rajasthan), INDIA
                                            </p>
                                        </div>
                                    </section>

                                    {/* Jurisdiction */}
                                    <section className="border-t border-border/20 pt-8">
                                        <h2 className="text-xl font-bold tracking-tight text-foreground mb-4">Jurisdiction and Disputes</h2>
                                        <p className="text-[15px] leading-[1.7] text-muted-foreground">All disputes here under shall be resolved in the court of Kota (Rajasthan, India).</p>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </SEO>
        </>
    );
}
