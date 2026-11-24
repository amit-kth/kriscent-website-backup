"use client"

import { clientsType, premiumClients } from '@/app/clients/components/clientsData'
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards-clients'

export default function HomeMarquee({ data = premiumClients }: { data?: clientsType[] }) { // giving data optional and default value as premiumClients
    return (
        <div className="rounded-md flex flex-col items-center justify-center relative overflow-hidden">
            <div className='container w-full flex flex-col'>
                <InfiniteMovingCards
                    items={data.splice(0, 10)}
                    direction="left"
                    speed="slow"
                    className='saturate-0 opacity-50 hover:saturate-100 hover:opacity-100 transition-all'
                />
            </div>
        </div>
    )
}
