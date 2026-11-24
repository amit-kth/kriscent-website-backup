import PortfolioHeroSection from './portfolio-hero-section'
import HomeMarquee from '@/app/Components/Clients/HomepageClientsMarquee/HomeMarquee'
import ProjectListings from './projects-listings'
import { allClients, clientsType } from '@/app/clients/components/clientsData'
import { SectionHeading } from '@/app/ReusableComponents/section-heading';

export default function PortfolioMainLayout() {
    return <main className='overflow-x-hidden'>
        <PortfolioHeroSection />
        {/* <br /> */}

        <SectionHeading
            primaryHeading={"Explore our Portfolio featuring top projects"}
            secondaryHeading={"Our Works"}
            // icon={Briefcase}
            markPrimaryHeadingAsH1Tag={true}
            isCentered={true}
            highlightedString={"Portfolio"}
        />
        <br />

        <HomeMarquee />
        <ProjectListings />
        <div className='w-full my-10'>
            <HomeMarquee data={allClients as clientsType[]} />
        </div>
    </main>
}