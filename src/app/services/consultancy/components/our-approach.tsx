import { Briefcase, CheckCircle } from 'lucide-react'
import { SectionHeading } from '@/app/ReusableComponents/section-heading';

export default function OurApproach() {
    const steps = [
        {
            title: 'Discovery',
            description: 'Understanding your business challenges and goals.',
        },
        {
            title: 'Analysis',
            description: 'Evaluating current systems and processes.',
        },
        {
            title: 'Strategy',
            description: 'Creating tailored recommendations.',
        },
        {
            title: 'Implementation',
            description: 'Assisting with the practical execution of solutions.',
        },
        {
            title: 'Ongoing Support',
            description: 'Providing continuous guidance and improvements.',
        },
    ]

    return (
        <section className="py-12 bg-[#f5f5f5] mb-10">
            <div className="container mx-auto px-4">
                <SectionHeading
                    secondaryHeading='Our Approach'
                    primaryHeading='Our Structured Approach to Consultancy'
                    icon={Briefcase}
                    isCentered={true}
                    highlightedString='Structured'
                />
                <p className="text-center text-gray-600 mb-12 md:max-w-[70%] max-w-[90%] mx-auto">
                    We believe in a structured yet flexible approach to consultancy. Our process is designed to ensure we fully understand your needs, develop targeted solutions, and support you every step of the way.
                </p>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {steps.map((step, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex items-center mb-4">
                                <CheckCircle className="text-primary mr-2" />
                                <h3 className="text-xl font-semibold">{step.title}</h3>
                            </div>
                            <p className="text-gray-600">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}