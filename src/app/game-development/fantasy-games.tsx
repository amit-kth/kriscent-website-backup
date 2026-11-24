import Image from "next/image"
import { ArrowRight, Trophy, Users, GamepadIcon as GameController } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { IconBuildingCommunity } from "@tabler/icons-react"
import { SectionHeading } from '@/app/ReusableComponents/section-heading';
import { ASSETS_BASE_URL } from "@/lib/variables"

export default function FantasyGamingSection() {
    const features = [
        {
            icon: <Trophy className="h-6 w-6 text-primary" />,
            title: "Competitive Leagues",
            description: "Join various contests and leagues to compete with other sports enthusiasts",
        },
        {
            icon: <Users className="h-6 w-6 text-primary" />,
            title: "Win Real Money",
            description: "Participate in contests for a chance to win real money by showcasing your strategic skills.",
        },
        {
            icon: <GameController className="h-6 w-6 text-primary" />,
            title: "Live Match Thrills",
            description: "Experience the excitement of live matches and make strategic decisions in real-time.",
        },
        {
            icon: <IconBuildingCommunity className="h-6 w-6 text-primary" />,
            title: "Engaging Community",
            description: "Connect with fellow players and share strategies in a vibrant community.",
        },
    ]

    return (
        <section className="w-full bg-white">
            <div className="container px-4 md:px-6">

                <SectionHeading
                    primaryHeading="Fantasy Gaming Platform"
                    secondaryHeading="Gaming"
                    icon={GameController}
                    isCentered
                    highlightedString="Fantasy"
                    className="mb-4"
                />

                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                    <div className="space-y-8">
                        <div className="space-y-4">

                            <p className="text-xl text-gray-700 max-w-[600px]">
                                A Fantasy Game is a virtual game in which sports fans have the opportunity to get close to their
                                favourite game by participating in various contests and leagues.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <p className="text-gray-700">
                                A user is expected to create a team of players from an actual match from the allocated points and
                                compete with other users. This interactive platform brings fans closer to the sport they love while
                                competing with fellow enthusiasts.
                            </p>

                            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                                {features.map((feature, index) => (
                                    <Card
                                        key={index}
                                        className="border-2 border-primary/20 hover:border-primary/40 transition-colors duration-200"
                                    >
                                        <CardContent className="p-6 space-y-2">
                                            <div className="flex items-center space-x-3">
                                                {feature.icon}
                                                <h3 className="font-semibold text-lg text-gray-800">{feature.title}</h3>
                                            </div>
                                            <p className="text-gray-600">{feature.description}</p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Image Column */}
                    <div className="relative aspect-square rounded-2xl overflow-hidden">
                        <Image
                            src={`${ASSETS_BASE_URL}/tempAssets/fantasy.webp`}
                            alt="Fantasy Gaming Platform"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority
                        />
                        {/* Overlay Pattern */}
                        <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-transparent" />
                    </div>
                </div>
            </div>
        </section>
    )
}

