"use client";


import { SectionHeading } from '@/app/ReusableComponents/section-heading';
import { CircuitBoard, Cloud, ShieldCheck, Code, PieChart, CheckSquare, DollarSign, TrendingUp, Users } from 'lucide-react'

export default function ServiceExplaination() {
    return (
        <div className="w-full mx-auto flex flex-col justify-center my-10 gap-10">

            <SectionHeading
                primaryHeading='Our Expert Areas in Consultancy'
                secondaryHeading='Service Overview'
                highlightedString='Expert'
                icon={Users}
                isCentered={true}
            />

            <div className="flex container flex-col md:flex-row bg-white rounded-lg overflow-hidden gap-4">
                {/* Tech Consultancy Section */}
                <div className="w-full md:w-1/2 p-6 border rounded-lg relative">
                    <div className="relative z-10">
                        <h2 className="text-2xl font-bold text-foreground mb-4">Tech Consultancy</h2>
                        <p className="text-muted-foreground mb-6">Our tech consultancy services are designed to help businesses navigate the complexities of the modern technology landscape. By providing strategic insights and expert guidance, we empower organizations to leverage technology to drive growth, improve efficiency, and make informed decisions that propel them forward. Whether you are looking to optimize your IT infrastructure, develop a competitive technology strategy, or navigate a period of digital transformation, our team of experienced consultants will work closely with you to understand your unique challenges and develop tailored solutions that meet your needs. With our support, you can overcome technology obstacles, capitalize on opportunities, and achieve your goals with confidence.</p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center text-primary">
                                <Code className="w-5 h-5 mr-2" />
                                <span>Software Development</span>
                            </div>
                            <div className="flex items-center text-primary">
                                <CircuitBoard className="w-5 h-5 mr-2" />
                                <span>System Architecture</span>
                            </div>
                            <div className="flex items-center text-primary">
                                <ShieldCheck className="w-5 h-5 mr-2" />
                                <span>Cybersecurity</span>
                            </div>
                            <div className="flex items-center text-primary">
                                <Cloud className="w-5 h-5 mr-2" />
                                <span>Cloud Solutions</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Business Consultancy Section */}
                <div className="w-full md:w-1/2 p-6 relative border rounded-lg">
                    <div className="relative z-10">
                        <h2 className="text-2xl font-bold text-foreground mb-4">Business Consultancy</h2>
                        <p className="text-muted-foreground mb-6">Our business consultancy services are designed to help organizations navigate the complexities of the modern business landscape. By providing strategic insights and expert guidance, we empower businesses to drive growth, improve efficiency, and make informed decisions that propel them forward. Whether you are looking to optimize operations, develop a competitive strategy, or navigate a period of change, our team of experienced consultants will work closely with you to understand your unique challenges and develop tailored solutions that meet your needs. With our support, you can overcome obstacles, capitalize on opportunities, and achieve your goals with confidence.</p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center text-primary">
                                <TrendingUp className="w-5 h-5 mr-2" />
                                <span>Business Strategy</span>
                            </div>
                            <div className="flex items-center text-primary">
                                <CheckSquare className="w-5 h-5 mr-2" />
                                <span>Operations Management</span>
                            </div>
                            <div className="flex items-center text-primary">
                                <PieChart className="w-5 h-5 mr-2" />
                                <span>Market Analysis</span>
                            </div>
                            <div className="flex items-center text-primary">
                                <DollarSign className="w-5 h-5 mr-2" />
                                <span>Financial Planning</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}