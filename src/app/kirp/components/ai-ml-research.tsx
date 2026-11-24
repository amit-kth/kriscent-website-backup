import { SectionHeading } from '@/app/ReusableComponents/section-heading';
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ASSETS_BASE_URL } from "@/lib/variables"
import { Brain, Cpu, BotIcon as Robot } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function AIMLResearch() {
  return (
    <section className="relative w-full overflow-hidden  py-12 text-white">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='60'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container relative mx-auto px-4">
        <SectionHeading
          primaryHeading="Research in Future Technologies"
          secondaryHeading="Ai, ML, Robotics"
          highlightedString="Future"
          isCentered
          icon={Brain}
        />

        {/* Main Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Featured Research */}
          <Card className="relative overflow-hidden border-0 bg-white/5 p-6 backdrop-blur-xs">
            <div className="relative aspect-video w-full overflow-hidden rounded-lg">
              <video autoPlay loop playsInline muted className="absolute inset-0 w-full h-full object-cover">
                <source src={`${ASSETS_BASE_URL}/tempAssets/videos/ai.mp4`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="rounded-full bg-primary px-3 py-1 text-sm font-medium text-white">
                  Featured Research
                </span>
              </div>
            </div>
            <div className="mt-6 space-y-4">
              <h3 className="text-2xl font-bold text-foreground">The Robotic Process Automation</h3>
              <p className="text-muted-foreground">
                RPA is a technology that imitates a human worker to carry direct profitability and improve the accuracy of the work-flow across the industries and organizations. It helps to improve operational productivity and efficiency by completing boring, repetitive digital tasks by using a software agent called a “Robot” or “Bot”. Each robot performs the required series of tasks and operates at a lower cost and with greater speed and accuracy than a human.
              </p>
              <Button
                className="bg-primary text-white hover:bg-primary rounded-full"
                size="lg"
                asChild
              >
                <Link href="/contact">Connect Team</Link>
              </Button>
            </div>
          </Card>

          {/* Research Areas */}
          <div className="grid gap-8">
            {/* AI Research */}
            <Card className="group relative overflow-hidden border-0 bg-white p-6 backdrop-blur-xs transition-colors hover:bg-white/10">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-primary/10 p-3">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="text-xl font-bold  text-foreground">Artificial Intelligence</h3>
                  <p className="text-muted-foreground">
                    Developing next-generation AI systems capable of human-like reasoning and
                    problem-solving.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="h-1 w-1 rounded-full bg-primary" />
                      Natural Language Processing
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1 w-1 rounded-full bg-primary" />
                      Computer Vision
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1 w-1 rounded-full bg-primary" />
                      Cognitive Computing
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* ML Research */}
            <Card className="group relative overflow-hidden border-0 bg-white p-6 backdrop-blur-xs transition-colors hover:bg-white/10">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-primary/10 p-3">
                  <Cpu className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="text-xl font-bold text-foreground">Machine Learning</h3>
                  <p className="text-muted-foreground">
                    Advancing the field of machine learning through innovative algorithms and
                    methodologies.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="h-1 w-1 rounded-full bg-primary" />
                      Deep Learning
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1 w-1 rounded-full bg-primary" />
                      Reinforcement Learning
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1 w-1 rounded-full bg-primary" />
                      Predictive Analytics
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Robotics Research */}
            <Card className="group relative overflow-hidden border-0 bg-white p-6 backdrop-blur-xs transition-colors hover:bg-white/10">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-primary/10 p-3">
                  <Robot className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="text-xl font-bold text-foreground">Robotics</h3>
                  <p className="text-muted-foreground">
                    Creating intelligent robotic systems that can adapt and learn from their
                    environment.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="h-1 w-1 rounded-full bg-primary" />
                      Autonomous Systems
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1 w-1 rounded-full bg-primary" />
                      Human-Robot Interaction
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1 w-1 rounded-full bg-primary" />
                      Swarm Robotics
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

