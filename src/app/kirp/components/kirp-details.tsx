import { SectionHeading } from '@/app/ReusableComponents/section-heading'; import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { IconDesk } from "@tabler/icons-react"
import { Beaker, Users, Globe, Target, ArrowRight, FileIcon as FilePresentation } from 'lucide-react'

export default function KIRPSection() {
    return (
        <section className="relative overflow-hidden bg-white py-10">


            <div className="container mx-auto px-4">

                <SectionHeading
                    primaryHeading="Kriscent Innovative Research Program"
                    secondaryHeading="KIRP"
                    highlightedString="Kriscent"
                    isCentered
                    icon={IconDesk}
                />

                <div className="w-full flex justify-center">
                    <p className="text-muted-foreground my-10 text-center md:w-3/4 w-full">
                        KIRP stands out with innovative offerings to clients, young talents, or researchers to strategically succeed in investing in the right technologies. We are working with alliance partners to provide competitive compensation, better marketing solutions, and comprehensive training to expand your business across the globe. KIRP is meant to develop a unique and incredibly interactive environment to flourish research opportunities. We work in transforming research communities and innovation services. Here you can know more about our programs & partnerships. We focus on addressing challenges and achieving valuable research outcomes for businesses and organizations.
                    </p>
                </div>


                {/* Features Grid */}
                <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-3">
                    <Card className="border-2 border-transparent bg-linear-to-br from-primary/10 to-primary/20 p-6 transition-all hover:border-primary/20">
                        <Users className="mb-4 h-8 w-8 text-primary" />
                        <h4 className="mb-2 font-semibold text-foreground">Interactive Environment</h4>
                        <p className="text-sm text-muted-foreground">
                            Developing a unique and incredibly interactive environment to flourish research
                            opportunities and foster innovation.
                        </p>
                    </Card>

                    <Card className="border-2 border-transparent bg-linear-to-br from-primary/10 to-primary/20 p-6 transition-all hover:border-primary/20">
                        <Globe className="mb-4 h-8 w-8 text-primary" />
                        <h4 className="mb-2 font-semibold text-foreground">Global Solutions</h4>
                        <p className="text-sm text-muted-foreground">
                            Providing comprehensive training and better marketing solutions to expand your business
                            across the globe.
                        </p>
                    </Card>

                    <Card className="border-2 border-transparent bg-linear-to-br from-primary/10 to-primary/20 p-6 transition-all hover:border-primary/20">
                        <Target className="mb-4 h-8 w-8 text-primary" />
                        <h4 className="mb-2 font-semibold text-foreground">Research Excellence</h4>
                        <p className="text-sm text-muted-foreground">
                            Focusing on addressing challenges and achieving valuable research outcomes for businesses
                            and organizations.
                        </p>
                    </Card>
                </div>

                {/* Presentation Section */}
                <div className="mx-auto mt-20 max-w-5xl">
                    <Card className="overflow-hidden border-0 bg-linear-to-r from-primary/10 to-primary/20">
                        <div className="border-b border-gray-200 bg-white/50 p-6">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <FilePresentation className="h-6 w-6 text-primary" />
                                    <h4 className="font-semibold text-gray-900">
                                        Kriscent Innovative Research Program Detailed Presentation
                                    </h4>
                                </div>
                                {/* <Button variant="outline" className="gap-2 rounded-full bg-primary text-white hover:bg-primary/80">
                                    <span>Download</span>
                                    <ArrowRight className="h-4 w-4" />
                                </Button> */}
                            </div>
                        </div>
                        <div className="relative w-full bg-white">
                            <iframe
                                src="https://docs.google.com/presentation/d/e/2PACX-1vQ9W_PLVjS7OMKiTXxeCsRkHV5yueEMpB9zu2CqX_DjhUfocvCQQ_CC_4IWRhUEQEXh3MFNZC9vR-AL/embed?start=false&loop=true&delayms=3000"
                                style={{ border: 'none', width: '100%', height: '70vh' }}
                                className="aspect-4/3 w-full"
                            // allowFullScreen={true}
                            // mozallowfullscreen={true}
                            // webkitallowfullscreen={true}
                            ></iframe>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    )
}