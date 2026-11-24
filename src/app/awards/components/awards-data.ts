// Sample awards data with large image URLs

import { ASSETS_BASE_URL } from "@/lib/variables";

// Define the interface for the award
export interface Award {
    title: string;
    imgUrl: string;
    imgUrlDark: string;
    largeImgUrl: string;
}

// Use the interface in the awards array
export const awards: Award[] = [
    {
        title: "CMMI Level 3",
        imgUrl: `${ASSETS_BASE_URL}/tempAssets/cmmi.png?updatedAt=1724492726579`,
        imgUrlDark: `${ASSETS_BASE_URL}/tempAssets/awards/cmmi.webp`,
        largeImgUrl: `${ASSETS_BASE_URL}/tempAssets/Group%20248.png?updatedAt=1736922965434`,
    },
    {
        title: "ISO 9001:2015",
        imgUrl: `${ASSETS_BASE_URL}/tempAssets/awards/2015.webp`,
        imgUrlDark: `${ASSETS_BASE_URL}/tempAssets/awards/2015.webp`,
        largeImgUrl: "",
    },
    {
        title: "ISO 27001",
        imgUrl: `${ASSETS_BASE_URL}/tempAssets/awards/27001.webp`,
        imgUrlDark: `${ASSETS_BASE_URL}/tempAssets/awards/27001.webp`,
        largeImgUrl: "",
    },
    {
        title: "Go Global Awards 2023",
        imgUrl: `${ASSETS_BASE_URL}/tempAssets/awards/goGlobal.webp`,
        imgUrlDark: `${ASSETS_BASE_URL}/tempAssets/awards/goGlobal.webp`,
        largeImgUrl: `${ASSETS_BASE_URL}/tempAssets/Screenshot%20(247).jpeg?updatedAt=1732187107561`,
    },
    {
        title: "Startup India",
        imgUrl: `${ASSETS_BASE_URL}/tempAssets/awards/startupIndia.webp`,
        imgUrlDark: `${ASSETS_BASE_URL}/tempAssets/awards/startupIndia.webp`,
        largeImgUrl: `${ASSETS_BASE_URL}/tempAssets/DIPP70707_KRISCENT_TECHNO_HUB_PRIVATE_LIMITED_RECOGNITION_3972206454372547862_page-0001.jpg?updatedAt=1732187023682`,
    },
];
