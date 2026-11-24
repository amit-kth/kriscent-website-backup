"use client";

import { SectionHeading } from '@/app/ReusableComponents/section-heading';
import { Workflow, Globe } from 'lucide-react'
import React, { useMemo, useState } from 'react'
import { StructuredAdditionalProjectData, StructuredProjectData, TopProjects } from './projectData';
import { ProjectData } from './projectData';
import {
    Dialog
} from "@/components/ui/dialog"
import { IconBrandAndroid, IconBrandAppleFilled } from '@tabler/icons-react';
import { ProjectDialog } from './project-details-dialog';
import {
    Carousel,
    CarouselContent,
    CarouselItem
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";



export default function ProjectListings() {
    const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const ProjectsList = useMemo(() => StructuredProjectData(), []);
    const AdditionalProjectsList = useMemo(() => StructuredAdditionalProjectData(), []);

    const handleProjectClick = (project: ProjectData) => {
        setSelectedProject(project);
        setIsDialogOpen(true);
    };

    return (
        <div className='w-full px-0 md:px-8 py-8 md:mt-10 mt-5'>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                {selectedProject && <ProjectDialog project={selectedProject} />}
            </Dialog>

            <div className='container flex flex-col gap-32'>

                {/* Top Projects Section */}
                <div className='w-full mx-auto'>
                    {/* <SectionHeading
                        primaryHeading={`Explore Kriscent's Best Projects`}
                        secondaryHeading='Our Top Projects'
                        markPrimaryHeadingAsH1Tag={true}
                        icon={Workflow}
                        isCentered
                        highlightedString='Best'
                    /> */}

                    {/* mapping top projects here ------------------------------------------------------------------------------------ */}
                    <div className='grid md:grid-cols-3 grid-cols-1 md:gap-8 gap-4'>
                        {ProjectsList.map((project: ProjectData, index: number) => {

                            // dynamically showing some cards big, like every 4th card will be big one
                            const isFullWidthCard = index % 4 === 3;
                            return (
                                <div key={index} className={isFullWidthCard ? 'col-span-full md:h-[450px] h-[350px]' : ''}>
                                    <div
                                        onClick={() => project.cardHighlight !== 'banner' ? handleProjectClick(project) : null}
                                        className={`md:rounded-[30px] rounded-[15px] border cursor-pointer shadow-xs hover:shadow-xl relative overflow-hidden group ${isFullWidthCard ? 'h-full flex md:flex-row flex-col' : 'aspect-square transition-all duration-300'}`}
                                        style={{
                                            backgroundColor: `${project.cardColor}30`
                                        }}
                                    >
                                        <div className={`${isFullWidthCard
                                            ? 'absolute inset-0 pt-8 px-8 flex md:flex-row flex-col items-center gap-8'
                                            : 'absolute inset-0 pt-8 px-8 flex flex-col'
                                            }`}>
                                            <div className={`${isFullWidthCard ? 'md:w-1/2 w-full' : 'w-full'}`}>
                                                <div className={`flex w-full justify-between gap-2 ${isFullWidthCard ? 'flex-col' : 'flex-row'}`}>
                                                    <div className='z-10 mb-6'>

                                                        {/* Logo only on full width card */}
                                                        {isFullWidthCard && <div className="min-w-8 w-fit h-8 md:min-w-10 md:h-12 2xl:min-w-12 2xl:h-16 rounded-xl md:rounded-xl p-1 md:p-1 mb-2" style={{ border: `1px solid ${project.cardColor}` }}>
                                                            <img src={project.logoUrl} alt={project.title || "Project logo"} className="w-full h-full object-contain rounded-md" loading='lazy' />
                                                        </div>}

                                                        {/* details of the project */}
                                                        <h3 className={`font-bold mb-1 ${isFullWidthCard
                                                            ? 'md:text-5xl text-2xl'
                                                            : '2xl:text-4xl md:text-3xl text-xl'
                                                            }`}
                                                            style={{ color: project.cardColor }}>
                                                            {project.title}
                                                        </h3>
                                                        <p className={`text-paragraphsColor ${isFullWidthCard
                                                            ? 'text-base max-w-[90%] line-clamp-4'
                                                            : 'text-sm max-w-[70%] text-nowrap'
                                                            }`}>
                                                            {!isFullWidthCard ? project.tagline : project.desc}
                                                        </p>
                                                    </div>

                                                    {/* platforms icons  */}
                                                    <div className="flex gap-2 items-start">
                                                        {project.websites && project.websites.length > 0 && (
                                                            <div className='p-2 rounded-full' style={{ backgroundColor: project.cardColor }}>
                                                                <Globe size={18} className='text-white' />
                                                            </div>
                                                        )}
                                                        {project.applications && project.applications.length > 0 && (
                                                            <div className='p-2 rounded-full' style={{ backgroundColor: project.cardColor }}>
                                                                <IconBrandAndroid size={18} className='text-white' />
                                                            </div>
                                                        )}
                                                        {project.iosApplications && project.iosApplications.length > 0 && (
                                                            <div className='p-2 rounded-full' style={{ backgroundColor: project.cardColor }}>
                                                                <IconBrandAppleFilled size={18} className='text-white' />
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* image or banner or slider for each card according to the type of the card */}
                                            <div className={`rounded-t-xl ${isFullWidthCard ? 'w-1/2 h-full' : 'relative flex-1 w-full'} overflow-hidden`}>
                                                {
                                                    project.cardHighlight === "appCarousel" ? (
                                                        <div className="relative w-full hidden md:flex justify-center h-0" style={{ paddingBottom: '210%' }}>
                                                            <div className={`absolute ${isFullWidthCard ? 'right-0' : 'right-1/2 translate-x-1/2'} top-0 rounded-2xl w-[260px] overflow-hidden border-10 border-black`}>
                                                                <Carousel opts={{ loop: true }} plugins={[Autoplay({ delay: 1500, })]} className="relative ">
                                                                    <CarouselContent>
                                                                        {project.applications && project.applications[0]?.image?.map((image: string, index: number) => {
                                                                            if (!project) { return null }
                                                                            return (
                                                                                <CarouselItem key={index} className='h-full flex items-center justify-center'>
                                                                                    <div style={{ backgroundColor: `${project.cardColor}30`, borderRadius: '30px', height: '100%', width: '100%' }}>
                                                                                        <img
                                                                                            src={image}
                                                                                            alt={project.title}
                                                                                            className={`w-full h-full object-cover rounded-lg `}
                                                                                            loading='lazy'
                                                                                        />
                                                                                    </div>
                                                                                </CarouselItem>
                                                                            )
                                                                        })}
                                                                    </CarouselContent>
                                                                </Carousel>
                                                            </div>
                                                        </div>
                                                    ) : <div className={`w-full h-fit transition-transform duration-2000 ease-in-out ${isFullWidthCard ? 'group-hover:-translate-y-1/2 md:block hidden' : 'group-hover:-translate-y-1/2'}`}>
                                                        <img
                                                            src={project.websites?.[0]?.image || ''}
                                                            alt={project.title}
                                                            className={`w-full h-full object-cover ${isFullWidthCard ? 'rounded-xl' : 'rounded-t-xl'} opacity-85 group-hover:opacity-100 transition-opacity duration-100`}
                                                            loading='lazy'
                                                        />
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>



                {/* All Projects Section --------------------------------------------------------------------------------------- */}
                <div className='w-full mx-auto'>
                    <SectionHeading
                        primaryHeading='Our Additional Projects'
                        secondaryHeading='Our Projects'
                        icon={Workflow}
                        isCentered
                        highlightedString='Projects'
                    />

                    <div className='grid md:grid-cols-3 grid-cols-1 md:gap-6 gap-4'>
                        {AdditionalProjectsList.map((project: ProjectData, index: number) => {
                            if (!project) { return null }
                            return (
                                <div
                                    key={index}
                                    className='aspect-square md:rounded-[30px] rounded-[15px] transition-all duration-300 cursor-pointer shadow-xs hover:shadow-xl relative overflow-hidden group' style={{ backgroundColor: `${project.cardColor}30` }}
                                    onClick={() => handleProjectClick(project)}
                                >
                                    <div className='absolute inset-0 px-8 pt-8 flex flex-col'>
                                        <div className='flex w-full justify-between gap-2'>
                                            <div className='z-10 mb-2'>
                                                <h3 className='font-bold text-2xl' style={{ color: project.cardColor }}>
                                                    {project.title}
                                                </h3>
                                                <p className='text-sm max-w-[70%] text-nowrap'>
                                                    {project.tagline}
                                                </p>
                                            </div>
                                            <div className="flex gap-2 items-start">
                                                {project.websites && project.websites.length > 0 && (
                                                    <div className='p-2 rounded-full' style={{ backgroundColor: project.cardColor }}>
                                                        <Globe size={18} className='text-white' />
                                                    </div>
                                                )}
                                                {project.applications && project.applications.length > 0 && (
                                                    <div className='p-2 rounded-full' style={{ backgroundColor: project.cardColor }}>
                                                        <IconBrandAndroid size={18} className='text-white' />
                                                    </div>
                                                )}
                                                {project.iosApplications && project.iosApplications.length > 0 && (
                                                    <div className='p-2 rounded-full' style={{ backgroundColor: project.cardColor }}>
                                                        <IconBrandAppleFilled size={18} className='text-white' />
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div className='rounded-t-xl relative flex-1 w-full overflow-hidden mt-4'>
                                            <div className={`w-full h-fit transition-transform duration-1000 ease-in-out group-hover:-translate-y-1/2`}>
                                                <img
                                                    src={project.websites?.[0]?.image || ''}
                                                    alt={project.title}
                                                    className={`w-full h-full object-cover rounded-t-xl opacity-85 group-hover:opacity-100 transition-opacity duration-100`}
                                                    loading='lazy'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div >
    )
}
