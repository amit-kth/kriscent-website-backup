"use client"

import React, { useEffect } from "react"
import { useCallback, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import { useMediaQuery } from "react-responsive"
import { ChevronLeft, ChevronRight, X, ImageIcon, PartyPopper, Play, Calendar } from "lucide-react"
import { API_ENDPOINT, ASSETS_BASE_URL } from "@/lib/variables"
import type { CategoryItem, KeyValue, RecordList } from "../page"
import { Separator } from "@/components/ui/separator"

interface MemoryCollageProps {
    imageUrls: KeyValue
    categoryID: number | null
    imagesNotFound?: boolean
    yearID: number
    categories: CategoryItem[]  // Add this prop
}

interface FlattenedImage {
    image: {
        picture: string
    }
    subcategory: string
    title: string | null
}

// Add this interface for video items
interface VideoItem {
    picture: string;
    title: string | null;
    subcategory: string;
    categoryId: string;
}

const isYouTubeUrl = (url: string): boolean => {
    return url.includes('youtube.com/embed/') ||
        url.includes('youtu.be/') ||
        url.includes('youtube.com/watch');
};
// Update the getYouTubeEmbedUrl function
const getYouTubeEmbedUrl = (url: string): string => {
    let baseUrl = '';
    
    if (url.includes('youtube.com/embed/')) {
        baseUrl = url;
    } else if (url.includes('youtu.be/')) {
        const videoId = url.split('youtu.be/')[1].split('?')[0];
        baseUrl = `https://www.youtube.com/embed/${videoId}`;
    } else if (url.includes('youtube.com/watch')) {
        const videoId = new URL(url).searchParams.get('v');
        baseUrl = `https://www.youtube.com/embed/${videoId}`;
    }
    // Add quality parameters
    const params = new URLSearchParams({
        vq: 'hd720',
        quality: 'hd720',
        hd: '1',
        modestbranding: '1',
        rel: '0',
        playsinline: '1'
    });

    return baseUrl + (baseUrl.includes('?') ? '&' : '?') + params.toString();
};

export function MemoryCollage({ imageUrls, categoryID, imagesNotFound = false, yearID, categories }: MemoryCollageProps) {
    const [selectedImage, setSelectedImage] = useState<{
        categoryId: string
        imageIndex: number
        flattenedImages: FlattenedImage[]
    } | null>(null)


    const coverImage = [
        { id: 11, img: `${ASSETS_BASE_URL}/tempAssets/other.webp`, name: 'Other', bannerTitle: "Some Other Events", icon: <ImageIcon /> },
        { id: 8, img: `${ASSETS_BASE_URL}/tempAssets/celebration.webp`, name: 'Celebrations', bannerTitle: "Celebrations at Kriscent", icon: <PartyPopper /> },
        { id: 7, img: `${ASSETS_BASE_URL}/tempAssets/Activity.webp?updatedAt=1739614901634`, name: 'Activities', bannerTitle: "Activities at Kriscent", icon: <Play /> },
        { id: 5, img: `${ASSETS_BASE_URL}/tempAssets/Annual%20day.webp?updatedAt=1739614901380`, name: 'Annual Day', bannerTitle: "Kriscent Anniversary", icon: <Calendar /> }
    ]

    // New state to store videos separately
    const [videos, setVideos] = useState<VideoItem[]>([]);



    // function for getting the cover image by category id
    const getCoverImage = (categoryId: number) => {
        return coverImage.find(item => item.id === categoryId)?.img || coverImageFallback
    }

    const coverImageFallback = `${ASSETS_BASE_URL}/tempAssets/other.webp?updatedAt=1739614902266`

    const [isLoaded, setIsLoaded] = useState(false)

    const relevantData = categoryID ? { [categoryID]: imageUrls[categoryID] } : imageUrls

    // function for filtering the images acco
    const groupedImages = Object.entries(relevantData).reduce(
        (acc, [categoryId, items]) => {
            if (items) {
                items.forEach((item: RecordList) => {
                    const subcategoryKey = item.subcategory || "Uncategorized"
                    if (!acc[categoryId]) {
                        acc[categoryId] = {}
                    }
                    if (!acc[categoryId][subcategoryKey]) {
                        acc[categoryId][subcategoryKey] = []
                    }
                    acc[categoryId][subcategoryKey].push(item)
                })
            }
            return acc
        },
        {} as Record<string, Record<string, RecordList[]>>,
    )

    // Modified groupedImages to also collect videos
    useEffect(() => {
        // Collect videos from all categories
        const videoCollection: VideoItem[] = [];

        Object.entries(relevantData).forEach(([categoryId, items]) => {
            if (items) {
                items.forEach((item: RecordList) => {
                    const subcategoryKey = item.subcategory || "Uncategorized";

                    // Check each image to see if it's a video
                    item.images.forEach(image => {
                        if (isYouTubeUrl(image.picture.trim())) {
                            videoCollection.push({
                                picture: image.picture,
                                title: item.title,
                                subcategory: subcategoryKey,
                                categoryId: categoryId
                            });
                        }
                    });
                });
            }
        });

        setVideos(videoCollection);
    }, [relevantData]);

    // Function to flatten all images in a category
    const getFlattenedImages = (categoryId: string): FlattenedImage[] => {
        const category = groupedImages[categoryId]
        if (!category) return []

        const flattened: FlattenedImage[] = []
        Object.entries(category).forEach(([subcategory, items]) => {
            items[0].images.forEach(image => {
                flattened.push({
                    image,
                    subcategory,
                    title: items[0].title
                })
            })
        })
        return flattened
    }

    const closeLightbox = (e?: React.MouseEvent) => {
        if (e) {
            const target = e.target as HTMLElement
            if (target.classList.contains('lightbox-overlay')) {
                setSelectedImage(null)
            }
        } else {
            setSelectedImage(null)
        }
    }

    // navigating the images in the image carousel 
    const navigateImage = useCallback(
        (direction: "next" | "prev") => {
            if (!selectedImage) return

            const totalImages = selectedImage.flattenedImages.length
            let newImageIndex

            if (direction === "next") {
                newImageIndex = (selectedImage.imageIndex + 1) % totalImages
            } else {
                newImageIndex = (selectedImage.imageIndex - 1 + totalImages) % totalImages
            }

            setSelectedImage({
                ...selectedImage,
                imageIndex: newImageIndex,
            })
        },
        [selectedImage],
    )


    const getCategoryHeader = (categoryId: string) => {
        const category = categories.find(cat => cat.id.toString() === categoryId)
        const categoryName = category ? category.name : "Uncategorized"
        const icon = coverImage.find(item => item.id === categoryID)?.icon;
        // console.log(categoryId);
        if (!categoryID) {
            return (
                <h3 className="text-2xl font-bold text-foreground px-4 py-3 bg-primary/10 rounded-xl">
                    <div className="flex items-center gap-2 text-primary">
                        {/* Directly render an icon for testing */}
                        <ImageIcon className="text-primary" /> {/* Test with a specific icon */}
                        {categoryName}
                    </div>
                </h3 >
            )
        }

    }


    // image not found check 
    if (imagesNotFound || Object.entries(groupedImages).length === 0) {
        return <ImageNotFoundIllustration />
    }

    return (
        <div className="space-y-8">

            {/* header image */}
            <div className="relative h-[150px] md:h-[180px] rounded-2xl overflow-hidden">
                <img src={categoryID ? getCoverImage(categoryID) : coverImageFallback} alt={"gallery Image cover "} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 to-black/20" />
                <motion.div
                    className="absolute bottom-0 w-full p-6 md:p-8 space-y-2"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        {categoryID ? coverImage.find(item => item.id === categoryID)?.name : "Events"}
                    </h2>
                    {/* <p className="text-sm md:text-base text-white/80 max-w-2xl">Experience the culture at Kriscent</p> */}
                </motion.div>
            </div>


            {/* Videos Section - New addition */}
            {videos.length > 0 && (
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6"
                >
                    <div className="flex items-center gap-2">
                        <Play className="text-primary" />
                        <h2 className="text-2xl font-bold text-foreground">Videos</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {videos.map((video, index) => (
                            <motion.div
                                key={`video-${index}`}
                                className="aspect-video group relative overflow-hidden bg-muted cursor-pointer rounded-lg"
                                onClick={() => {
                                    // Find the category and image index for this video
                                    const flattenedImages = getFlattenedImages(video.categoryId);
                                    const globalIndex = flattenedImages.findIndex(
                                        img => img.image.picture === video.picture
                                    );

                                    if (globalIndex !== -1) {
                                        setSelectedImage({
                                            categoryId: video.categoryId,
                                            imageIndex: globalIndex,
                                            flattenedImages
                                        });
                                    }
                                }}
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.2 }}
                            >
                                <iframe
                                    src={getYouTubeEmbedUrl(video.picture.trim())}
                                    title={video.title || "YouTube video"}
                                    className="absolute inset-0 w-full h-full"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                                    <div className="text-white text-sm font-medium truncate">
                                        {video.title || video.subcategory}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>
            )}


            {/* images heading */}
            <Separator />
            {/* <div className="flex items-center gap-2">
                <ImageIcon className="text-primary" />
                <h2 className="text-2xl font-bold text-foreground">Images</h2>
            </div> */}

            {/* Images Section - Existing code */}
            <div className="grid gap-8">
                {Object.entries(groupedImages).map(([categoryId, subcategories]) => (
                    <motion.section
                        key={categoryId}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <div className="flex flex-wrap gap-2">
                            {Object.entries(subcategories).map(([subcategory, items], subCategoryIndex) => (
                                <React.Fragment key={`${categoryId}-${subcategory}`}>
                                    {items[0].images.map((image, imageIndex) => {
                                        // Skip videos as they're shown in the videos section
                                        if (isYouTubeUrl(image.picture.trim())) {
                                            return null;
                                        }

                                        return (
                                            <div key={`${categoryId}-${subcategory}-${imageIndex}`} className="flex flex-col items-start">
                                                <div className="flex gap-4">
                                                    <motion.div
                                                        className="group relative aspect-square w-fit h-[200px] overflow-hidden bg-muted cursor-pointer"
                                                        onClick={() => {
                                                            const flattenedImages = getFlattenedImages(categoryId);
                                                            const globalIndex = flattenedImages.findIndex(
                                                                img => img.image.picture === image.picture
                                                            );
                                                            setSelectedImage({
                                                                categoryId,
                                                                imageIndex: globalIndex,
                                                                flattenedImages
                                                            });
                                                        }}
                                                        whileHover={{ scale: 1.02 }}
                                                        transition={{ duration: 0.2 }}
                                                    >
                                                        <Image
                                                            alt={items[0].title || "Gallery image"}
                                                            src={`${API_ENDPOINT}/${image.picture.trim()}`}
                                                            fill
                                                            className="object-cover transition-transform group-hover:scale-110"
                                                        />
                                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                    </motion.div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </React.Fragment>
                            ))}
                        </div>
                    </motion.section>
                ))}
            </div>

            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className="fixed inset-0 bg-black/90 backdrop-blur-lg flex items-center justify-center z-51 lightbox-overlay h-screen -translate-y-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeLightbox}
                    >
                        <motion.div
                            className="relative w-[95%] md:w-1/2 aspect-square mx-auto rounded-lg p-2 md:p-4 overflow-hidden flex items-center justify-center"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 15, stiffness: 100 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* close button */}
                            <button className="absolute top-0 right-0 md:-top-2 md:-right-2 text-white/90 hover:text-white bg-black/50 hover:bg-black/70 p-2 rounded-full transition-colors z-10"
                                onClick={() => closeLightbox()}
                            >
                                <X className="h-4 w-4 md:h-5 md:w-5" />
                            </button>

                            {/* decorative image */}
                            <img src={`${API_ENDPOINT}/${selectedImage.flattenedImages[selectedImage.imageIndex].image.picture.trim()}`}
                                alt={selectedImage.flattenedImages[selectedImage.imageIndex].title || "Enlarged view"}
                                className="w-full h-full object-cover absolute top-0 left-0 blur-2xl brightness-40"
                            />

                            {(() => {
                                const currentImage = selectedImage.flattenedImages[selectedImage.imageIndex]

                                if (!currentImage) return null

                                return (
                                    <div className="relative w-full flex justify-center">
                                        <div className="relative aspect-square w-[90%] md:w-[80%] overflow-hidden rounded-lg">
                                            {isYouTubeUrl(currentImage.image.picture.trim()) ? (
                                                <iframe
                                                    src={getYouTubeEmbedUrl(currentImage.image.picture.trim())}
                                                    title="YouTube video"
                                                    className="w-full h-full"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen

                                                />
                                            ) : (
                                                <Image
                                                    src={`${API_ENDPOINT}/${currentImage.image.picture.trim()}`}
                                                    alt={currentImage.title || "Enlarged view"}
                                                    fill
                                                    className="object-contain"
                                                    priority
                                                    sizes="(max-width: 768px) 95vw, (max-width: 1200px) 80vw, 1200px"
                                                />
                                            )}
                                        </div>

                                        {/* arrow buttons */}
                                        <div className="absolute left-0 right-0 md:left-4 md:right-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none px-1 md:px-0">
                                            <button
                                                className="pointer-events-auto bg-black/50 hover:bg-black/70 text-white/90 hover:text-white p-2 md:p-3 rounded-full transition-colors transform hover:scale-105"
                                                onClick={(e) => {
                                                    e.stopPropagation()
                                                    navigateImage("prev")
                                                }}
                                            >
                                                <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
                                            </button>
                                            <button
                                                className="pointer-events-auto bg-black/50 hover:bg-black/70 text-white/90 hover:text-white p-2 md:p-3 rounded-full transition-colors transform hover:scale-105"
                                                onClick={(e) => {
                                                    e.stopPropagation()
                                                    navigateImage("next")
                                                }}
                                            >
                                                <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
                                            </button>
                                        </div>

                                        <div className="absolute left-1/2 -translate-x-1/2 -bottom-8 md:-bottom-12 flex gap-2 px-2 md:px-4 w-fit flex-wrap justify-center select-none">
                                            <div className="bg-black/50 text-white px-2 md:px-3 py-1 rounded-full text-xs md:text-sm">
                                                {currentImage.subcategory}
                                            </div>
                                            <div className="bg-black/50 text-white px-2 md:px-3 py-1 rounded-full text-xs md:text-sm">
                                                {selectedImage.imageIndex + 1} / {selectedImage.flattenedImages.length}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })()}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div >
    )
}


function ImageNotFoundIllustration() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[400px] text-center space-y-4 bg-muted/30 rounded-2xl p-8">
            <img src={`${ASSETS_BASE_URL}/tempAssets/notfound.png?updatedAt=1740467957382`} alt="Image not found" className="h-36" />
            <p className="text-sm text-muted-foreground/80">Try selecting a different category or year</p>
        </div>
    )
}