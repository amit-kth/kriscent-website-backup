'use client'

import { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { FadeDownToUpAnimation } from '@/app/ReusableComponents/UI'
import { SectionHeading } from '@/app/ReusableComponents/section-heading';
import { BriefcaseIcon, Forward, X } from 'lucide-react'
import { API_ENDPOINT } from '@/lib/variables'
import JobApplicationFormUpdated from './application-form-updated'

interface JobResponse {
    message: string
    recordlist: JobType[]
}

export interface JobType {
    id: number
    title: string
    description: string
    responsibilities: string
    requirements?: string
    skills: string
    no_of_vacancies: number
    min_experience: string
    max_experience?: string
    salary: string
    job_type: string
    job_location: string
    job_Id: string
    status: number
    gender: string
    created_at: string
    updated_at: string
}

const Skeleton = () => (
    <div className="animate-pulse flex space-x-4">
        <div className="flex-1 space-y-2">
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        </div>
    </div>
);

export default function JobListings() {
    const [isDetailsOpen, setIsDetailsOpen] = useState(false)
    const [isApplicationOpen, setIsApplicationOpen] = useState(false)
    const [selectedJob, setSelectedJob] = useState<JobType | null>(null)
    const [jobs, setJobs] = useState<JobType[]>([])
    const [isLoading, setIsLoading] = useState(true)


    const openApplicationForm = (job: JobType) => {
        setIsDetailsOpen(false)
        setSelectedJob(job)
        setIsApplicationOpen(true)
    }

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await fetch(`${API_ENDPOINT}/job`)
                const data: JobResponse = await response.json()
                setJobs(data.recordlist)
            } catch (error) {
                console.error('Error fetching jobs:', error)
            } finally {
                setIsLoading(false)
            }
        }

        fetchJobs()
    }, [])


    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-0 md:px-6">
                <SectionHeading
                    primaryHeading='Current Openings – Check Out Available Positions'
                    secondaryHeading='Job Openings'
                    isCentered
                    highlightedString='Openings'
                    icon={BriefcaseIcon}
                />

                {/* all the jobs lisiting here */}
                <div className="space-y-6">
                    {isLoading ? (
                        // Show skeletons while loading
                        Array.from({ length: 3 }).map((_, index) => <Skeleton key={index} />)
                    ) : (
                        jobs.map((job, index) => {
                            return <FadeDownToUpAnimation key={job.id} delay={0.1}>
                                <Card className="flex flex-col md:flex-row md:items-center justify-between hover:shadow-lg transition-all duration-300">
                                    <CardHeader>
                                        <CardTitle className='text-foreground text-lg md:text-xl'>{job.title}</CardTitle>
                                        <CardDescription className="line-clamp-2 text-muted-foreground text-sm md:text-base" dangerouslySetInnerHTML={{ __html: job.description }}></CardDescription>
                                        <br />
                                        <p className='flex flex-wrap md:gap-3 gap-2 text-xs md:text-sm font-medium text-muted-foreground'>
                                            <span className='bg-blue-500 text-white px-3 text-nowrap py-1 rounded-full uppercase'>{job.min_experience}-{job.max_experience} Exp</span>
                                            <span className='bg-green-500 text-white px-3 py-1 text-nowrap rounded-full uppercase'>{job.salary}</span>
                                            <span className='bg-orange-500 text-white px-3 text-nowrap py-1 rounded-full uppercase'>{job.job_type}</span>
                                        </p>
                                    </CardHeader>
                                    <CardContent className="pt-0 md:pt-6 flex gap-2">
                                        <Button
                                            className='bg-[#f5f5f5] hover:bg-gray-200 text-muted-foreground rounded-full w-1/2 md:w-fit text-sm'
                                            onClick={() => {
                                                setSelectedJob(job)
                                                setIsDetailsOpen(true)
                                            }}
                                        >  View Details </Button>
                                        <Button
                                            className='bg-primary hover:bg-primary/90 text-white rounded-full w-1/2 md:w-fit text-sm'
                                            onClick={() => openApplicationForm(job)}
                                        > Apply Now </Button>
                                    </CardContent>
                                </Card>
                            </FadeDownToUpAnimation>
                        })
                    )}
                </div>
            </div>

            {/* Job Details Dialog */}
            <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
                <DialogContent className="md:w-[50%] w-[90%] md:h-[90%] p-2 md:p-6 h-[70%] flex flex-col gap-6 justify-start z-52 overflow-y-auto bg-white rounded-lg shadow-lg">
                    {/* Header Section */}
                    <div className='flex flex-col bg-[#f5f5f5] p-6 rounded-lg'>
                        <div className='flex justify-between items-center'>
                            <DialogTitle className='text-lg md:text-xl font-bold text-primary'>
                                {selectedJob?.title} ({selectedJob?.job_type})
                            </DialogTitle>
                            <Button
                                onClick={() => openApplicationForm(selectedJob!)}
                                className='bg-white hover:bg-white/90 hover:text-primary text-black rounded-full flex gap-2 items-center'
                            >
                                Apply Now
                                <Forward size={18} />
                            </Button>
                        </div>
                        <div className='flex flex-wrap gap-2 mt-2 w-[70%]'>
                            {/* {selectedJob?.skills?.map((skill, index) => (
                                <span key={index} className='text-muted-foreground px-2 py-1 rounded-full text-xs md:text-sm'>
                                    {skill}
                                </span>
                            ))} */}
                        </div>
                    </div>

                    {/* Cards Section */}
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                        <div className='border p-4 rounded-lg'>
                            <h3 className='text-sm md:text-md font-bold text-primary'>
                                Salary Range
                            </h3>
                            <p className='text-muted-foreground text-xs md:text-sm'>{selectedJob?.salary} </p>
                        </div>
                        <div className='border p-4 rounded-lg'>
                            <h3 className='text-sm md:text-md font-bold text-primary'>
                                Experience
                            </h3>
                            <p className='text-muted-foreground text-xs md:text-sm'>{selectedJob?.min_experience}-{selectedJob?.max_experience} Exp</p>
                        </div>
                        <div className='border p-4 rounded-lg'>
                            <h3 className='text-sm md:text-md font-bold text-primary'>
                                Location
                            </h3>
                            <p className='text-muted-foreground text-xs md:text-sm'>
                                {selectedJob?.job_location ? selectedJob.job_location.charAt(0).toUpperCase() + selectedJob.job_location.slice(1) : 'N/A'}
                            </p>
                        </div>
                    </div>

                    {/* Job Description Section */}
                    <div className="border-t border-gray-300 pt-4">
                        <h3 className='text-sm md:text-md font-bold text-primary'>
                            Job Description
                        </h3>
                        <p className='text-muted-foreground text-xs md:text-sm' dangerouslySetInnerHTML={{ __html: selectedJob?.description || '' }}></p>
                    </div>

                    {/* Job requirements Section */}
                    <div className="border-t border-gray-300 pt-4">
                        <h3 className='text-sm md:text-md font-bold text-primary mb-3'>
                            Job Requirements
                        </h3>
                        <p className='text-muted-foreground text-xs md:text-sm' dangerouslySetInnerHTML={{ __html: selectedJob?.requirements || '' }}></p>
                    </div>

                    {/* Job Responsibilities Section */}
                    <div className="border-t border-gray-300 pt-4">
                        <h3 className='text-sm md:text-md font-bold text-primary mb-3'>
                            Job Responsibilities
                        </h3>
                        <p className='text-muted-foreground text-xs md:text-sm' dangerouslySetInnerHTML={{ __html: selectedJob?.responsibilities || '' }}></p>
                    </div>

                </DialogContent>
            </Dialog>

            {/* Application Form Dialog */}
            <Dialog open={isApplicationOpen}>
                <DialogContent className="md:w-[50%] w-[90%] max-h-[80vh] p-4 md:p-6 flex flex-col rounded-lg gap-10 justify-start z-100 overflow-y-scroll transition-all duration-300">
                    <div className='flex flex-col gap-4'>
                        <div className='w-full'>
                            <JobApplicationFormUpdated jobTitle={selectedJob?.title || ''} closeDialog={() => { setIsApplicationOpen(false) }} />
                        </div>
                    </div>
                    {/* Close Button */}
                    <button
                        onClick={() => setIsApplicationOpen(false)}
                        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                    >
                        <X size={24} />
                    </button>
                </DialogContent>
            </Dialog>
        </section>
    )
}
