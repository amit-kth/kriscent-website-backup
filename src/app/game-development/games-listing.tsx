import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeading } from '@/app/ReusableComponents/section-heading';
import { Gamepad } from "lucide-react"
import { ASSETS_BASE_URL } from "@/lib/variables"

// Game data structure
interface Game {
    id: number
    title: string
    imageUrl: string
}

// Sample game data (replace with your actual games)
const games: Game[] = [
    { id: 1, title: "Ludo", imageUrl: `${ASSETS_BASE_URL}/tempAssets/games/game1.webp` },
    { id: 2, title: "Space Invaders", imageUrl: `${ASSETS_BASE_URL}/tempAssets/games/game2.webp` },
    { id: 3, title: "Sweet World", imageUrl: `${ASSETS_BASE_URL}/tempAssets/games/game3.webp` },
    { id: 4, title: "Green Chick Jump", imageUrl: `${ASSETS_BASE_URL}/tempAssets/games/game4.webp` },
    { id: 5, title: "Soldier Way", imageUrl: `${ASSETS_BASE_URL}/tempAssets/games/game5.webp` },
    { id: 6, title: "Duck Hunt", imageUrl: `${ASSETS_BASE_URL}/tempAssets/games/game6.webp` },
    { id: 7, title: "Alien Way", imageUrl: `${ASSETS_BASE_URL}/tempAssets/games/game7.webp` },
    { id: 8, title: "Zombies Night", imageUrl: `${ASSETS_BASE_URL}/tempAssets/games/game8.webp` },
    { id: 9, title: "City Hero", imageUrl: `${ASSETS_BASE_URL}/tempAssets/games/game9.webp` },
    { id: 10, title: "Super 8 Race", imageUrl: `${ASSETS_BASE_URL}/tempAssets/games/game10.webp` },
]

export default function GamesListing() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
            <div className="container px-4 md:px-6">

                <SectionHeading
                    primaryHeading="Our Game Portfolio"
                    secondaryHeading="Games"
                    highlightedString="Game"
                    isCentered
                    icon={Gamepad}
                    className="mb-4"
                />

                {/* <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
                    Discover our collection of expertly crafted games, each designed to deliver unique and engaging experiences.
                </p> */}


                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {games.map((game) => (
                        <Card key={game.id} className="group duration-200 border-none">
                            <CardContent className="p-4">
                                <div className="relative aspect-square mb-4 overflow-hidden rounded-full border-4 border-primary/20 group-hover:border-primary/40 transition-colors duration-200">
                                    <Image
                                        src={game.imageUrl || "/placeholder.svg"}
                                        alt={game.title}
                                        fill
                                        className="object-cover transform group-hover:scale-110 transition-transform duration-200"
                                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                                    />
                                </div>
                                <h3 className="text-center font-semibold text-lg text-gray-800 group-hover:text-primary transition-colors duration-200">
                                    {game.title}
                                </h3>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

