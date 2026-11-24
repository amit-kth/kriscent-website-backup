import { SectionHeading } from '@/app/ReusableComponents/section-heading';
import { Card } from "@/components/ui/card"
import { HandshakeIcon, Users, Users2 } from 'lucide-react'

export default function PartnerProgramSection() {
    return (
        <section className="relative bg-linear-to-b from-white to-gray-50 py-10 mb-10">
            <div className="container mx-auto px-4">

                {/* header */}
                <SectionHeading
                    primaryHeading="Kriscent Partner Programs"
                    secondaryHeading="Partners"
                    highlightedString="Kriscent"
                    isCentered
                    icon={Users2}
                />
                <p className="text-lg leading-relaxed text-muted-foreground w-full text-center text-balance">
                    We are going to launch our Affiliate and Reseller programs soon for our partners. In this reseller program we will provide many benefits, involvement, attractive commission to our partners.
                </p>

                {/* Program Types */}
                <div className="mx-auto mt-16 grid max-w-5xl gap-8 lg:grid-cols-2">
                    {/* Affiliate Program */}
                    <Card className="group relative overflow-hidden border-0 bg-white p-8 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl">
                        <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/10 transition-transform group-hover:scale-110" />
                        <div className="relative">
                            <Users className="mb-6 h-10 w-10 text-primary" />
                            <h4 className="mb-4 text-2xl font-semibold text-foreground">Affiliate Program</h4>
                            <ul className="space-y-3 text-muted-foreground">
                                <li className="flex items-center gap-2">
                                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                                    Attractive commission structure
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                                    Marketing resources and support
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                                    Performance tracking dashboard
                                </li>
                            </ul>
                        </div>
                    </Card>

                    {/* handshake Program */}
                    <Card className="group relative overflow-hidden border-0 bg-white p-8 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl">
                        <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/10 transition-transform group-hover:scale-110" />
                        <div className="relative">
                            <HandshakeIcon className="mb-6 h-10 w-10 text-primary" />
                            <h4 className="mb-4 text-2xl font-semibold text-foreground">Handshake Program</h4>
                            <ul className="space-y-3 text-muted-foreground">
                                <li className="flex items-center gap-2">
                                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                                    Innovative Ideas Welcome
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                                    Young talent development
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                                    Expert Collaboration
                                </li>
                            </ul>
                        </div>
                    </Card>
                </div>

                <p className="text-lg leading-relaxed text-muted-foreground w-full md:3/4 text-center text-balance my-10">
                    Kriscent Handshake Program is a subsidiary initiative of Kriscent Innovative Research Program (KIRP) fostering
                    collaboration and innovation on a win-win basis. We promote new ideas and concepts that are mutually beneficial, appreciating valuable
                    contributions that stimulate technological innovation. We encourage young talents to participate, helping transform professional learning into groundbreaking new services and products.
                </p>
            </div>
        </section>
    )
}

