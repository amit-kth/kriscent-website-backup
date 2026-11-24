import { SectionHeading } from '@/app/ReusableComponents/section-heading'; import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ASSETS_BASE_URL } from "@/lib/variables"
import { Sparkles, Star, Rocket, ArrowRight, UsersRound, Link } from 'lucide-react'
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function InfluencerTeaser() {
    const router = useRouter()
    return (
        <section className="relative w-full overflow-hidden py-12">
            {/* Background Pattern */}
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='60'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
            />

            <div className="container relative mx-auto px-4">
                {/* Coming Soon Badge */}
                <div className="mb-8 flex justify-center">
                    <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                        <Sparkles className="h-4 w-4" />
                        Coming Soon
                    </div>
                </div>

                {/* Header */}
                <SectionHeading
                    primaryHeading="Something Big is Coming"
                    // secondaryHeading="Coming Soon"
                    highlightedString="Big"
                    isCentered
                // icon={UsersRound}
                />

                {/* Main Content */}
                <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

                    {/* Left Side - Image */}
                    <div className="relative aspect-square lg:aspect-auto">
                        {/* <div className="absolute -inset-4 animate-pulse rounded-full bg-primary/20 blur-3xl" /> */}
                        <Card className="relative h-full overflow-hidden border-0 bg-white/5 backdrop-blur-xs">
                            <div className="relative aspect-square w-full">
                                <Image
                                    src={`${ASSETS_BASE_URL}/tempAssets/influencer.webp`}
                                    alt="Platform Preview"
                                    width={600}
                                    height={600}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-transparent" />

                                {/* Floating Elements */}
                                <div className="absolute left-4 top-4 rounded-lg bg-white/75 p-4 backdrop-blur-md">
                                    <Star className="h-6 w-6 text-primary" />
                                </div>
                                <div className="absolute bottom-4 right-4 rounded-lg bg-white/75 p-4 backdrop-blur-md">
                                    <Rocket className="h-6 w-6 text-primary" />
                                </div>
                            </div>
                        </Card>
                    </div>

                    {/* Right Side - Content */}
                    <div className="space-y-8">

                        <Card className="border-0 bg-white/10 p-6 backdrop-blur-xs">
                            <h3 className="mb-4 text-xl font-semibold text-foreground">A platform for Influencers</h3>
                            <p className="mt-2 text-sm text-muted-foreground">
                                Be among the first to experience the future of digital influence.
                            </p>
                        </Card>

                        <div className="grid gap-6">
                            {/* Feature Teasers */}
                            <Card className="border-0 bg-white/5 p-6 backdrop-blur-xs">
                                <h3 className="mb-2 text-xl font-semibold text-foreground">For Influencers</h3>
                                <p className="text-muted-foreground">
                                    Take your influence to the next level with our comprehensive suite of tools and
                                    analytics designed specifically for content creators.
                                </p>
                            </Card>

                            <Card className="border-0 bg-white/5 p-6 backdrop-blur-xs">
                                <h3 className="mb-2 text-xl font-semibold text-foreground">For Coaches</h3>
                                <p className="text-muted-foreground">
                                    Transform your coaching business with our innovative platform that streamlines client
                                    management and scales your impact.
                                </p>
                            </Card>
                        </div>



                        {/* Stats Teaser */}
                        <div className="bg-white p-4 rounded-md">
                            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-primary">10x</div>
                                    <div className="mt-1 text-sm text-muted-foreground">Growth Potential</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-primary">100+</div>
                                    <div className="mt-1 text-sm text-muted-foreground">Features</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-primary">24/7</div>
                                    <div className="mt-1 text-sm text-muted-foreground">Support</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-primary">1</div>
                                    <div className="mt-1 text-sm text-muted-foreground">Platform</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-20 text-center">
                    <Card className="mx-auto max-w-2xl border-0 bg-white p-8 backdrop-blur-xs">
                        <h3 className="mb-4 text-2xl font-bold">Ready to Transform Your Digital Presence? Contact our team now.</h3>

                        <Button
                            className="bg-primary text-white hover:bg-primary rounded-full"
                            size="lg"
                            onClick={() => { router.push("/contact") }}
                        >
                            <span>Contact</span>
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>

                    </Card>
                </div>
            </div>
        </section>
    )
}

