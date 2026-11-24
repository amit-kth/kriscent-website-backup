import { ImageBackground } from '@/app/Components/ImageBg'
import { SectionHeading } from '@/app/ReusableComponents/section-heading';
import { ASSETS_BASE_URL } from '@/lib/variables'
import { Waypoints } from 'lucide-react'

export default function OurCultureHeroSection() {
    return <div className='w-full h-[90vh] relative'>
        <ImageBackground
            src={`${ASSETS_BASE_URL}/tempAssets/heroSections/our-culture.webp?updatedAt=1740462696469`}
            className='brightness-40'
            alt='our culture hero section image kriscent techno hub'
        />
        <div className='2xl:w-[1000px] md:w-[700px] w-[90%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center'>
            <SectionHeading
                primaryHeading='Experience the Kriscent Culture'
                secondaryHeading='Our Culture'
                icon={Waypoints}
                isCentered
                markPrimaryHeadingAsH1Tag={true}
                highlightedString='Kriscent'
                customColor='text-white'
                glowEffect={false}
            />
            <p className='text-white text-center mb-4 xl:text-xl md:text-lg text-base'>
                Our culture is built on the foundation of happiness, where we celebrate every moment and embrace joy.
                We believe in the power of enjoyment and fun, as it brings people together and creates lasting memories.
            </p>
        </div>
    </div>
} 