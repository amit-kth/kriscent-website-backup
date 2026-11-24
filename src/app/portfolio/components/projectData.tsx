import { TECHNOLOGIES } from "@/lib/icons";
import { ASSETS_BASE_URL } from "@/lib/variables";
import { TablerIcon } from "@tabler/icons-react";
import { LucideIcon } from "lucide-react";

// ********** Types for different platforms **********

// Types for different platforms
interface WebsiteData {
    name: string;  // Optional name for multiple websites
    url: string;
    image?: string; // Image for this specific website
}

interface AppData {
    name: string;  // Optional name for multiple apps
    playStoreUrl: string;
    image?: string[]; // Image for this specific Android app
}

interface IosAppData {
    name?: string;
    appStoreUrl: string;
    image?: string[]; // Image for this specific iOS app
}

interface Technology {
    title: string;
    icon: TablerIcon | LucideIcon;
}


// ********** Read all the comments before making any changes to this data

// Main Project Interface
export interface ProjectData {
    // Required fields
    id: string;
    title: string; // this is title of the project
    desc: string; // this is a description of the project
    webCoverImage: string; // this is like a cover image of the project which is used in the popup of the project. for adding a new cover image, add it first in the assets/tempAssets/projectImages/banners folder presented on the imageKit dashboard. then add the cover image link here.
    logoUrl: string; // this is the logo of the project, client logo, for adding a new logo, add it first in the assets/tempAssets/clientsImages folder presented on the imageKit dashboard. then add the logo link here.

    // card details
    cardColor: string; // this color is used in many places in the website, like cards in the landing page, popup of the project, texts to give an live effect of a project in the website.
    cardHighlight: 'website' | 'appCarousel' | 'banner'; // this is a setting for the project, mainly checked in the portfolio page, to show the project in a different way. when website is selected then the photo of the first index of the websites array is used as the cover image of the project. So make sure if you  highlighting the website then the first index of the websites array should not be null and should have a good image.

    // second if you hightlight the appCarousel then the first index of the applications array is used as the cover image of the project. So make sure if you  highlighting the appCarousel then the first index of the applications array should not be null and should have a good image.

    // Optional platform-specific fields
    websites?: WebsiteData[];  // Single website or array of websites will be placed in this array
    applications?: AppData[];  // Single app or array of Android/Cross-platform apps will be placed in this array
    iosApplications?: IosAppData[];  // Single iOS app or array of iOS-only apps will be placed in this array

    //this will contain the fields or category from whcih this project is belongs to.
    category: string[];  // e.g., ["Education", "Mobile App"] , 
    // the technologies array will contain the technologies used in this project.

    technologies: Technology[];  // e.g., [{ title: "React Native", icon: IconBrandReactNative }, { title: "Node.js", icon: IconBrandNodejs }] //
    tagline?: string; // if there is any taglines of this project then it will be placed in this field
    achievements?: string[]; // if there is any achievements of this project then it will be placed in this field, like tractions, awards, etc.
}


// **********This is the structure of the projects displayed on the portfolio page. Every 4th project in this data will be show as a big tile, this data is arranged in such a way. One wrong postion of a project can break the pattern of complete page. Make changes accordingly. 


//structure the top projects here
export const StructuredProjectData = () => {
    // Make sure every 4th project will be shown as big tile.
    const structuredProjectArrangement = [
        "mukundra-baaghraaj",
        "flixmates",
        "divine-touch",
        "chabi", // Big tile
        "vjoy-world",
        "tsbos",
        "rcims",
        "rgcsm", // Big tile
        "orphin-chemistry",
        "ferranza-ev",
        "yelsa-tech",
        "shop-ad", // Big tile
        "shree-falodi",
        "shree-falodi-skill",
        "rgcsm-publications",
        "shree-smf", // Big tile
        "paras-travels",
        "gurukul-engineering",
        "gurukul-pharmacy",
        "medisaver", // Big tile
        "kamal",
        "mapl-security",
        "cad-cam-experts",
        "auraquestt", // Big tile
        "igcsm",
        "ssi",
        "avit",
        "gudz", // big tile
        "k-export",
        "sudha",
    ]

    const temp = structuredProjectArrangement.map((projectId) => {
        const project = TopProjects.find((project) => project.id === projectId);
        return project;
    })

    return temp as ProjectData[];
}

// Structure the additional projects here
export const StructuredAdditionalProjectData = () => {
    const structuredProjectArrangement = [
        "inbrix",
        "hr-walla",
        "get-max-value",
        "bhartiya-astro",
        "ishvaa-life",
        "luriox-stones",
        "kobai",
        "special-coverage-news",
        "apth",
        "khush-jeevan",
        "astromaya",
        "rgcsm-online",
        "shivshakti",
        "antrose",
    ]

    const temp = structuredProjectArrangement.map((projectId) => {
        const project = TopProjects.find((project) => project.id === projectId);
        return project;
    })

    return temp as ProjectData[];
}

export const TopProjects: ProjectData[] = [
    {
        id: "shree-falodi",
        title: "Shree Falodi Finance",
        desc: "The magical journey of SHREE FALODI FINPRO PVT LTD began in Year 2022 under the vision of Giriraj Gupta and Rachana Gupta and his team. The insightful theme of our story is about offering an amazing trading experience to the Customers where they unite with their needs for their particular Investment. ",
        webCoverImage: `${ASSETS_BASE_URL}/tempAssets/projectImages/banners/shree-falodi-finance.webp`,
        logoUrl: `${ASSETS_BASE_URL}/tempAssets/clientsImages/shree-falodi.png`,
        cardColor: "#f3a742",
        cardHighlight: 'website',
        websites: [{ url: "https://kriscenttechnohub.com/demo/leadcrm/", name: "Shree Falodi Finance", image: `${ASSETS_BASE_URL}/tempAssets/projectImages/portfolio/shree-falodi-finance.webp` }],
        category: ["Finance", "Loan Assistance"],
        technologies: [
            TECHNOLOGIES.HTML,
            TECHNOLOGIES.CSS,
            TECHNOLOGIES.JAVASCRIPT,
            TECHNOLOGIES.LARAVEL,
            TECHNOLOGIES.MYSQL,
            TECHNOLOGIES.FIGMA
        ],
        tagline: "Financial Services",
    },
    {
        id: "divine-touch",
        title: "Divine Touch",
        desc: "Unlock motivation, master your mindset, and experience inner peace with techniques like NLP, mindfulness, and holistic wellness.",
        webCoverImage: `${ASSETS_BASE_URL}/tempAssets/projectImages/banners/divine-touch-banner.webp`,
        logoUrl: `${ASSETS_BASE_URL}/tempAssets/clientsImages/divinetouch.webp`,
        cardColor: "#7A7A4A",
        cardHighlight: 'website',
        websites: [{ url: "https://divinetouch.info/", name: "Website", image: `${ASSETS_BASE_URL}/tempAssets/projectImages/portfolio/divine-touch-web.webp` }],
        category: ["Healing", "Life Improvement", "Money"],
        technologies: [
            TECHNOLOGIES.LARAVEL,
            TECHNOLOGIES.HTML,
            TECHNOLOGIES.MYSQL,
            TECHNOLOGIES.CSS,
            TECHNOLOGIES.JAVASCRIPT,
        ],
        tagline: "Empower Your Mind, Transform Your Life"
    },
    {
        id: "yelsa-tech",
        title: "Yelsa Tech",
        desc: "Elsa Tech is a leading company in the solar energy market, with business units focused on global equipment supply services and project development.",
        webCoverImage: `${ASSETS_BASE_URL}/tempAssets/projectImages/banners/yelsa-banner.webp`,
        logoUrl: `${ASSETS_BASE_URL}/tempAssets/clientsImages/yelsa.webp`,
        cardColor: "#fbb034",
        cardHighlight: 'website',
        websites: [{ url: "https://yelsatech.in/", name: "Website", image: `${ASSETS_BASE_URL}/tempAssets/projectImages/portfolio/yelsa-web.webp` }],
        category: ["Solar", "Battery", "Energy"],
        technologies: [
            TECHNOLOGIES.LARAVEL,
            TECHNOLOGIES.HTML,
            TECHNOLOGIES.MYSQL,
            TECHNOLOGIES.CSS,
            TECHNOLOGIES.JAVASCRIPT,
        ],
        tagline: "Infrastructure Sustainable Electrical"
    },
    {
        id: "tsbos",
        title: "The Sommnath Bhattacharyaa Occult Sciences",
        desc: "The Sommnath Bhattacharyaa Occult Sciences was founded with a singular vision: to make ancient wisdom accessible to modern seekers. For over two decades, we've been bridging the gap between timeless spiritual sciences and contemporary life challenges.",
        webCoverImage: `${ASSETS_BASE_URL}/tempAssets/projectImages/banners/tsbos-banner.webp`,
        logoUrl: `${ASSETS_BASE_URL}/tempAssets/clientsImages/tsbos.webp`,
        cardColor: "#02979D",
        cardHighlight: 'website',
        websites: [{ url: "https://thesommnathbhattacharyaa.in/", name: "Website", image: `${ASSETS_BASE_URL}/tempAssets/projectImages/portfolio/tsbos-web.webp` }],
        category: ["Healing", "Life Improvement", "Money"],
        technologies: [
            TECHNOLOGIES.LARAVEL,
            TECHNOLOGIES.HTML,
            TECHNOLOGIES.MYSQL,
            TECHNOLOGIES.CSS,
            TECHNOLOGIES.JAVASCRIPT,
        ],
        tagline: ""
    },
    {
        id: "mukundra-baaghraaj",
        title: "Mukundra Baaghraaj Resort",
        desc: "Nestled in the soul of the Mukundra hills, our resort offers a rare escape into the wild without compromising on the finest comforts of modern living.",
        webCoverImage: `${ASSETS_BASE_URL}/tempAssets/projectImages/banners/mukundra.webp`,
        logoUrl: `${ASSETS_BASE_URL}/tempAssets/clientsImages/mukundra.webp`,
        cardColor: "#0f2e00",
        cardHighlight: 'website',
        websites: [{ url: "https://mukundrabaaghrajretreat.com/", name: "Website", image: `${ASSETS_BASE_URL}/tempAssets/projectImages/portfolio/mukundra-web.webp` }],
        category: ["Resort", "Hospitality", "Tourism"],
        technologies: [
            TECHNOLOGIES.NEXTJS,
            TECHNOLOGIES.NODE,
            TECHNOLOGIES.FIGMA,
            TECHNOLOGIES.TAILWIND,
            TECHNOLOGIES.TYPESCRIPT
        ],
        tagline: "Resort Website"
    },
    {
        id: "rcims",
        title: "RCIMS",
        desc: "A contract management system for Indian Railways, streamlining contract creation, tracking, and compliance for efficient railway operations.",
        webCoverImage: `${ASSETS_BASE_URL}/tempAssets/projectImages/banners/rcims.webp`,
        logoUrl: `${ASSETS_BASE_URL}/tempAssets/clientsImages/rcims-logo.webp`,
        cardColor: "#034081",
        cardHighlight: 'appCarousel',
        websites: [{ url: "https://rcims.in/", name: "RCIMS Dashboard", image: `${ASSETS_BASE_URL}/tempAssets/projectImages/portfolio/rcims.webp` }],
        applications: [{
            name: "Inspection App",
            playStoreUrl: "https://play.google.com/store/apps/details?id=com.gudz.driver&hl=en_IN",
            image: [
                `${ASSETS_BASE_URL}/tempAssets/projectImages/app/rcims/1.webp`,
                `${ASSETS_BASE_URL}/tempAssets/projectImages/app/rcims/2.webp`,
                `${ASSETS_BASE_URL}/tempAssets/projectImages/app/rcims/3.webp`
            ]
        }],
        category: ["Contract Management", "Railway", "Operations", "Compliance"],
        technologies: [ 
            TECHNOLOGIES.NEXTJS,
            TECHNOLOGIES.REACT,
            TECHNOLOGIES.NODE,
            TECHNOLOGIES.FIGMA,
            TECHNOLOGIES.TAILWIND,
            TECHNOLOGIES.REACT_NATIVE,
            TECHNOLOGIES.TYPESCRIPT
        ],
        tagline: "Contract & Inspection Management Portal"
    },
    {
        id: "gudz",
        title: "Gudz",
        desc: "Gudz is a SaaS-based Delivery and Fleet Management System optimizing logistics for superadmins, admins, drivers, and customers. It supports all delivery stages (last-mile, middle-mile, first-mile) with route optimization and includes a bike rental system for EVs. Detailed vehicle reports ensure comprehensive performance tracking.",
        webCoverImage: `${ASSETS_BASE_URL}/tempAssets/projectImages/banners/Gudz.webp`,
        logoUrl: `${ASSETS_BASE_URL}/tempAssets/clientsImages/gudz.png`,
        cardColor: "#7878F3",
        cardHighlight: 'website',
        websites: [{ url: "https://gudz.in/", name: "Gudz Website", image: `${ASSETS_BASE_URL}/tempAssets/projectImages/portfolio/gudz-web.webp` }],
        applications: [{
            name: "Gudz Delivery",
            playStoreUrl: "https://play.google.com/store/apps/details?id=com.gudz.driver&hl=en_IN",
            image: [
                `${ASSETS_BASE_URL}/tempAssets/projectImages/app/gudz/1.webp`,
                `${ASSETS_BASE_URL}/tempAssets/projectImages/app/gudz/2.webp`,
                `${ASSETS_BASE_URL}/tempAssets/projectImages/app/gudz/3.webp`,
                `${ASSETS_BASE_URL}/tempAssets/projectImages/app/gudz/4.webp`
            ]
        }],
        category: ["Fleet", "Management", "Logistics", "Delivery"],
        technologies: [
            TECHNOLOGIES.NEXTJS,
            TECHNOLOGIES.REACT,
            TECHNOLOGIES.MONGODB,
            TECHNOLOGIES.NODE,
            TECHNOLOGIES.FIGMA,
            TECHNOLOGIES.EXPRESS,
            TECHNOLOGIES.FIREBASE,
            TECHNOLOGIES.TAILWIND,
            TECHNOLOGIES.FLUTTER,
            TECHNOLOGIES.TYPESCRIPT
        ],
        tagline: "Fleet Management Portal",
        achievements: ["12k+ Deliveries", "1k+ Drivers", "2+ Customers"]
    },
    {
        id: "flixmates",
        title: "Flixmates",
        desc: "Connect, collaborate, and create magic in the world of arts. Elevate your career with real-time auditions, seamless chat, and endless possibilities.",
        webCoverImage: `${ASSETS_BASE_URL}/tempAssets/projectImages/banners/Flixmates.webp`,
        logoUrl: `${ASSETS_BASE_URL}/tempAssets/clientsImages/flixmates.png`,
        cardColor: "#D42251",
        cardHighlight: 'website',
        websites: [
            { url: "https://flixmates.com/", name: "Flixmates", image: `${ASSETS_BASE_URL}/tempAssets/projectImages/portfolio/flixmates-web.webp` }
        ],
        applications: [
            {
                name: "Flixmates App",
                playStoreUrl: "https://play.google.com/store/apps/details?id=com.flixmates&hl=en",
                image: [
                    `${ASSETS_BASE_URL}/tempAssets/projectImages/app/flixmates/1.webp`,
                    `${ASSETS_BASE_URL}/tempAssets/projectImages/app/flixmates/2.webp`,
                    `${ASSETS_BASE_URL}/tempAssets/projectImages/app/flixmates/3.webp`,
                    `${ASSETS_BASE_URL}/tempAssets/projectImages/app/flixmates/4.webp`,
                    `${ASSETS_BASE_URL}/tempAssets/projectImages/app/flixmates/5.webp`
                ]
            }
        ],
        iosApplications: [
            {
                name: "Flixmates App",
                appStoreUrl: "",
                image: [
                    `${ASSETS_BASE_URL}/tempAssets/projectImages/app/flixmates/1.webp`,
                    `${ASSETS_BASE_URL}/tempAssets/projectImages/app/flixmates/2.webp`,
                    `${ASSETS_BASE_URL}/tempAssets/projectImages/app/flixmates/3.webp`,
                    `${ASSETS_BASE_URL}/tempAssets/projectImages/app/flixmates/4.webp`,
                    `${ASSETS_BASE_URL}/tempAssets/projectImages/app/flixmates/5.webp`
                ]
            }
        ],
        category: ["Auditions", "Find Talent", "Casting"],
        technologies: [
            TECHNOLOGIES.REACT,
            TECHNOLOGIES.MONGODB,
            TECHNOLOGIES.NODE,
            TECHNOLOGIES.FIGMA,
            TECHNOLOGIES.EXPRESS,
            TECHNOLOGIES.FIREBASE,
            TECHNOLOGIES.TAILWIND,
            TECHNOLOGIES.FLUTTER,
            TECHNOLOGIES.TYPESCRIPT
        ],
        tagline: "Bollywood ka linkedin",
        achievements: ["2k+ Downloads", "100+ Casting Directors", "100+ Auditions"]
    },
    {
        id: "ishvaa-life",
        title: "Ishvaa Life",
        desc: "Ishvaa means Ishvar, which is widely translated as God and is an anagram of Shivaa – the Hindu Trinity. Dr. Radhika being an avid worshipper of Shivaa, founded Ishvaa Life, inspired by his divine teachings to serve as a Guiding, Self Awareness and Coaching platform for her clients, students and followers worldwide.",
        webCoverImage: `${ASSETS_BASE_URL}/tempAssets/projectImages/banners/Ishvaa Life.webp`,
        logoUrl: `${ASSETS_BASE_URL}/tempAssets/clientsImages/ishvaa.png`,
        cardColor: "#845334",
        cardHighlight: 'website',
        websites: [{ url: "https://ishvaalife.com/", name: "Ishvaa Life", image: `${ASSETS_BASE_URL}/tempAssets/projectImages/portfolio/ishvaa-web-new.webp?updatedAt=1758197782083` }],
        category: ["Astrology", "Consultancy", "Gemology"],
        technologies: [
            TECHNOLOGIES.WORDPRESS,
            TECHNOLOGIES.FIGMA,
        ],
        tagline: "Astrology Consultancy Portal",
    },
    {
        id: "rgcsm",
        title: "RGCSM",
        desc: "National level online educational and skill development portal with franchisee management system. RGCSM is to provide higher technical education in nominal charges for every group of society of Urban & Rural areas all over India and get success in computer revolution which is the main dream of Indian Govt.",
        webCoverImage: `${ASSETS_BASE_URL}/tempAssets/projectImages/banners/RGCSM.webp`,
        logoUrl: `${ASSETS_BASE_URL}/tempAssets/clientsImages/rgcsm.png`,
        cardColor: '#0589F8',
        cardHighlight: 'website',
        websites: [
            { url: "https://www.rgcsm.org/", name: "RGCSM", image: `${ASSETS_BASE_URL}/tempAssets/projectImages/portfolio/rgcsm-web.webp` },
        ],
        applications: [
            {
                name: "RGCSM App",
                playStoreUrl: "https://play.google.com/store/apps/details?id=com.kriscent.rgcsm.rgcsm",
                image: [
                    `${ASSETS_BASE_URL}/tempAssets/projectImages/app/rgcsm/1.png?updatedAt=1741175030908`,
                    `${ASSETS_BASE_URL}/tempAssets/projectImages/app/rgcsm/2.png?updatedAt=1741175139582`,
                    `${ASSETS_BASE_URL}/tempAssets/projectImages/app/rgcsm/3.png?updatedAt=1741175215638`,
                    `${ASSETS_BASE_URL}/tempAssets/projectImages/app/rgcsm/4.png?updatedAt=1741175276375`
                ]
            }
        ],
        category: ["Education", "Institute", "Courses"],
        technologies: [
            TECHNOLOGIES.PHP,
            TECHNOLOGIES.KOTLIN,
            TECHNOLOGIES.LARAVEL,
            TECHNOLOGIES.HTML,
            TECHNOLOGIES.CSS,
            TECHNOLOGIES.JAVASCRIPT,
            TECHNOLOGIES.BOOTSTRAP,
            TECHNOLOGIES.CODE_IGNITOR
        ],
        tagline: "Education Franchise Portal",
        achievements: ["2k+ Study Centers", "100+ Courses", "6.7L+ Students"]
    },
    {
        id: "get-max-value",
        title: "Get Max Value",
        desc: "Get Max Value is a scrap management platform that helps you manage your scrap business efficiently.",
        webCoverImage: `${ASSETS_BASE_URL}/tempAssets/projectImages/banners/GMV.webp`,
        logoUrl: `${ASSETS_BASE_URL}/tempAssets/clientsImages/gmv.png`,
        cardColor: "#2A3FA0",
        cardHighlight: 'website',
        websites: [{ url: "https://getmaxvalue.in/", name: "Get Max Value", image: `${ASSETS_BASE_URL}/tempAssets/projectImages/portfolio/gmv-web.webp` }],
        category: ["E-commerce", "Retail"],
        technologies: [
            TECHNOLOGIES.REACT,
            TECHNOLOGIES.NODE,
            TECHNOLOGIES.BOOTSTRAP,
            TECHNOLOGIES.EXPRESS,
            TECHNOLOGIES.FIGMA,
            TECHNOLOGIES.MONGODB,
        ],
        tagline: "Scrap Management",
    },
    {
        id: "paras-travels",
        title: "Paras Travels",
        desc: "Paras Travels is a travel agency that offers a wide range of services including car rentals, hotel bookings, and travel planning.",
        webCoverImage: `${ASSETS_BASE_URL}/tempAssets/projectImages/banners/Paras Travels.webp`,
        logoUrl: `${ASSETS_BASE_URL}/tempAssets/clientsImages/paras.png`,
        cardColor: "#00cc37",
        cardHighlight: "appCarousel",
        websites: [{ url: "https://parastravels.co.in/", name: "Paras Travels", image: `${ASSETS_BASE_URL}/tempAssets/projectImages/portfolio/paras-web.webp` }],
        applications: [
            {
                name: "Paras Travels App",
                playStoreUrl: "https://play.google.com/store/apps/details?id=com.kriscent.paras&hl=en",
                image: [
                    `${ASSETS_BASE_URL}/tempAssets/projectImages/app/paras/1.webp?updatedAt=1737351280146`,
                    `${ASSETS_BASE_URL}/tempAssets/projectImages/app/paras/2.webp?updatedAt=1737351203572`,
                    `${ASSETS_BASE_URL}/tempAssets/projectImages/app/paras/3.webp?updatedAt=1737351117999`,
                ]
            }
        ],
        category: ["Travel", "Vehicle Management"],
        technologies: [
            TECHNOLOGIES.LARAVEL,
            TECHNOLOGIES.FLUTTER,
            TECHNOLOGIES.FIGMA,
            TECHNOLOGIES.HTML,
            TECHNOLOGIES.MYSQL,
            TECHNOLOGIES.CSS,
            TECHNOLOGIES.JAVASCRIPT,
        ],
        tagline: "Fleet Management & CRM",
    },
    {
        id: "vjoy-world",
        title: "VJoy World",
        desc: "VJoy World is a company that offers a wide range of services including car rentals, hotel bookings, and travel planning.",
        webCoverImage: `${ASSETS_BASE_URL}/tempAssets/projectImages/banners/VJoy World.webp`,
        logoUrl: `${ASSETS_BASE_URL}/tempAssets/clientsImages/vjoy.png`,
        cardColor: "#d81c5b",
        cardHighlight: 'website',
        websites: [{ url: "https://www.vjoyworld.com/", name: "VJoy World", image: `${ASSETS_BASE_URL}/tempAssets/projectImages/portfolio/vjoy-web.webp` }],
        category: ["Travel", "Tourism"],
        technologies: [
            TECHNOLOGIES.LARAVEL,
            TECHNOLOGIES.HTML,
            TECHNOLOGIES.CSS,
            TECHNOLOGIES.JAVASCRIPT,
            TECHNOLOGIES.BOOTSTRAP,
            TECHNOLOGIES.MYSQL
        ],
        tagline: "Tour & Travel Booking Portal",
    },
    {
        id: "chabi",
        title: "Chabi App",
        desc: "Chabi is a financial technology app designed to empower hardworking individuals in India by providing the knowledge, tools, and confidence to make informed financial decisions. Its goal is to help users, including first-time investors, achieve long-term prosperity.",
        webCoverImage: `${ASSETS_BASE_URL}/tempAssets/projectImages/banners/chabi.webp`,
        websites: [{ url: "https://mychabi.app", name: "Chabi Website", image: `${ASSETS_BASE_URL}/tempAssets/projectImages/portfolio/chabi-website.webp` }],
        applications: [{
            name: "Andriod App",
            playStoreUrl: "https://play.google.com/store/apps/details?id=com.chabi.app",
            image: [
                `${ASSETS_BASE_URL}/tempAssets/projectImages/app/chabi/1.webp`,
                `${ASSETS_BASE_URL}/tempAssets/projectImages/app/chabi/2.webp`,
                `${ASSETS_BASE_URL}/tempAssets/projectImages/app/chabi/3.webp`,
                `${ASSETS_BASE_URL}/tempAssets/projectImages/app/chabi/4.webp`,
            ]
        }],
        logoUrl: `${ASSETS_BASE_URL}/tempAssets/clientsImages/chabi-updated.webp`,
        cardColor: "#003169",
        cardHighlight: 'appCarousel',
        category: ["Investment, Gold", "SIP"],
        technologies: [
            TECHNOLOGIES.REACT_NATIVE,
            TECHNOLOGIES.NEXTJS,
            TECHNOLOGIES.TYPESCRIPT,
            TECHNOLOGIES.TAILWIND,
            TECHNOLOGIES.NODE,
            TECHNOLOGIES.FIGMA,
        ],
        tagline: "Aapke Nivesh aur Gyan ki Chabi",
    },
    {
        id: "orphin-chemistry",
        title: "Orphin Chemistry",
        desc: "Welcome to Orphin Learning – your trusted guide for IIT-JEE and NEET prep from Class 8, with expert faculty, personalized support, and a student-first approach to mastering science and math.",
        webCoverImage: `${ASSETS_BASE_URL}/tempAssets/projectImages/banners/orphin.webp`,
        logoUrl: `${ASSETS_BASE_URL}/tempAssets/clientsImages/orphin.png`,
        cardColor: "#c07f2a",
        cardHighlight: 'website',
        websites: [{ url: "https://orphin.in/", name: "Orphin Website", image: `${ASSETS_BASE_URL}/tempAssets/projectImages/portfolio/orphin-landing.webp` }],
        category: ["Education, JEE", "NEET"],
        technologies: [
            TECHNOLOGIES.REACT,
            TECHNOLOGIES.LARAVEL,
            TECHNOLOGIES.TAILWIND,
            TECHNOLOGIES.PHP
        ],
        tagline: "Learn what you need",
    },
    {
        id: "ferranza-ev",
        title: "EV E-commerce",
        desc: "India's leading electric Scooty company revolutionizing urban mobility. Founded with a vision to create a sustainable and eco-friendly future, we are committed to delivering innovative, high-performance electric Scootys that are not only good for the environment but also for your pocket.",
        webCoverImage: `${ASSETS_BASE_URL}/tempAssets/projectImages/banners/ferranzaev.webp`,
        logoUrl: `${ASSETS_BASE_URL}/tempAssets/clientsImages/ferranza.webp`,
        cardColor: "#45963e",
        cardHighlight: 'website',
        websites: [{ url: "https://ferranzaev.in/", name: "Ferranzaev Website", image: `${ASSETS_BASE_URL}/tempAssets/projectImages/portfolio/ferranzaev.webp` }],
        category: ["EV", "Scooty"],
        technologies: [
            TECHNOLOGIES.HTML,
            TECHNOLOGIES.CSS,
            TECHNOLOGIES.JAVASCRIPT,
            TECHNOLOGIES.LARAVEL,
            TECHNOLOGIES.PHP,
            TECHNOLOGIES.MYSQL,
        ],
        tagline: "India's leading electric Scooty company",
    },
    {
        id: "inbrix",
        title: "Inbrix",
        desc: "InBrix is a platform connecting brands with influencers for authentic, transparent, and result-driven collaborations.",
        webCoverImage: `${ASSETS_BASE_URL}/tempAssets/projectImages/banners/inbrix-banner.webp`,
        logoUrl: `${ASSETS_BASE_URL}/tempAssets/clientsImages/inbrix.webp`,
        cardColor: "#9126cc",
        cardHighlight: 'website',
        websites: [{ url: "https://smib.in/", name: "Inbrix Website", image: `${ASSETS_BASE_URL}/tempAssets/projectImages/portfolio/inbrix.webp` }],
        category: ["Influencer Marketing", "Collaboration", "Conversion"],
        technologies: [
            TECHNOLOGIES.HTML,
            TECHNOLOGIES.CSS,
            TECHNOLOGIES.JAVASCRIPT,
            TECHNOLOGIES.LARAVEL,
            TECHNOLOGIES.PHP,
            TECHNOLOGIES.MYSQL,
        ],
        tagline: "Connect Collaborate Convert",
    },
    {
        id: "shop-ad",
        title: "ShopAd",
        desc: "ShopAd helps local shop owners list their services, create digital catalogs, and reach more customers with unique QR codes and engaging rewards.",
        webCoverImage: `${ASSETS_BASE_URL}/tempAssets/projectImages/banners/shop-ad.webp`,
        logoUrl: `${ASSETS_BASE_URL}/tempAssets/clientsImages/shopAd-Transparent.webp`,
        cardColor: "#0073d5",
        cardHighlight: 'appCarousel',
        websites: [{ url: "https://shopad.in/", name: "ShopAd", image: `${ASSETS_BASE_URL}/tempAssets/projectImages/portfolio/shopad.webp` }],
        applications: [
            {
                name: "ShopAd App",
                playStoreUrl: "https://play.google.com/store/apps/details?id=com.kriscent.shopad&pcampaignid=web_share",
                image: [`${ASSETS_BASE_URL}/tempAssets/projectImages/app/shopad/1.webp`,
                `${ASSETS_BASE_URL}/tempAssets/projectImages/app/shopad/2.webp`,
                `${ASSETS_BASE_URL}/tempAssets/projectImages/app/shopad/3.webp`,
                ]
            }
        ],
        category: ["Ads, Promotions"],
        technologies: [
            TECHNOLOGIES.NEXTJS,
            TECHNOLOGIES.NODE,
            TECHNOLOGIES.TAILWIND,
            TECHNOLOGIES.REACT_NATIVE
        ],
        tagline: "Ads Listing Platform",
    },
    {
        id: "cad-cam-experts",
        title: "Cad Cam Expert",
        desc: "Educational Franchisee Management System for managing students and franchises.",
        webCoverImage: `${ASSETS_BASE_URL}/tempAssets/projectImages/banners/cad.webp`,
        logoUrl: `${ASSETS_BASE_URL}/tempAssets/clientsImages/cadcam.png`,
        cardColor: "#196e77",
        cardHighlight: 'website',
        websites: [{ url: "https://www.caddexperts.com/", name: "Cad Cam Expert", image: `${ASSETS_BASE_URL}/tempAssets/projectImages/portfolio/cadcam.webp` }],
        category: ["Education", "Management"],
        technologies: [
            TECHNOLOGIES.HTML,
            TECHNOLOGIES.CSS,
            TECHNOLOGIES.JAVASCRIPT,
            TECHNOLOGIES.PHP,
            TECHNOLOGIES.LARAVEL,
            TECHNOLOGIES.MYSQL,
        ],
    },
    {
        id: "kamal",
        title: "Kamal Fincap Pvt Ltd.",
        desc: "Insurance claim management system to manage customer loans and insurance claims.",
        webCoverImage: `${ASSETS_BASE_URL}/tempAssets/projectImages/banners/kamal.webp`,
        logoUrl: `${ASSETS_BASE_URL}/tempAssets/clientsImages/kamal.png`,
        cardColor: "#4A90E2",
        cardHighlight: 'website',
        websites: [{ url: "https://www.kamalfincap.com/", name: "Kamal Fincap Pvt Ltd.", image: `${ASSETS_BASE_URL}/tempAssets/projectImages/portfolio/kamal.webp` }],
        // applications: [{
        //     name: "Kamal App",
        //     playStoreUrl: "https://play.google.com/store/apps/details?id=com.kriscent.ensure",
        //     image: ["tempAssets/projectImages/kamal.png"]
        // }],
        category: ["Finance", "Insurance"],
        technologies: [
            TECHNOLOGIES.HTML,
            TECHNOLOGIES.CSS,
            TECHNOLOGIES.JAVASCRIPT,
            TECHNOLOGIES.PHP,
            TECHNOLOGIES.LARAVEL,
            TECHNOLOGIES.MYSQL,
        ],
    },
    {
        id: "rgcsm-publications",
        title: "RGCSM Publications",
        desc: "Astrology explores celestial influences on human affairs, guiding insights into personality, behavior, and life events.",
        webCoverImage: `${ASSETS_BASE_URL}/tempAssets/projectImages/banners/RGCSM Publication.webp`,
        logoUrl: `${ASSETS_BASE_URL}/tempAssets/clientsImages/rgcsm-publications.png`,
        cardColor: "#0C9CD5",
        cardHighlight: 'website',
        websites: [{ url: "https://rgcsmpublications.com/", name: "RGCSM Publications", image: `${ASSETS_BASE_URL}/tempAssets/projectImages/portfolio/rgcsm-publication-web.webp` }],
        category: ["Publications", "Books", "Education"],
        technologies: [
            TECHNOLOGIES.PHP,
            TECHNOLOGIES.KOTLIN,
            TECHNOLOGIES.LARAVEL,
            TECHNOLOGIES.HTML,
            TECHNOLOGIES.CSS,
            TECHNOLOGIES.JAVASCRIPT,
            TECHNOLOGIES.BOOTSTRAP
        ],
        tagline: "Books & Publications",
    },
    {
        id: "shree-smf",
        title: "Shree Shree Micro Serve Foundations",
        desc: "Loan management platform for managing borrowers and financial information, payments, and employee access.",
        webCoverImage: `${ASSETS_BASE_URL}/tempAssets/projectImages/banners/smf.png`,
        logoUrl: `${ASSETS_BASE_URL}/tempAssets/clientsImages/shree.png`,
        cardColor: "#FF6B6B",
        cardHighlight: 'website',
        websites: [{ url: "https://shreeshreemsf.com/", name: "SMF Website", image: `${ASSETS_BASE_URL}/tempAssets/projectImages/portfolio/smf.webp` }],
        category: ["Finance", "Loan Management"],
        technologies: [
            TECHNOLOGIES.HTML,
            TECHNOLOGIES.CSS,
            TECHNOLOGIES.JAVASCRIPT,
            TECHNOLOGIES.PHP,
            TECHNOLOGIES.MYSQL,
        ],
    },
    {
        id: "hr-walla",
        title: "HR WALA",
        desc: "HR walla is a recruitment portal providing end-to-end job search and hiring solutions.",
        webCoverImage: `${ASSETS_BASE_URL}/tempAssets/projectImages/banners/hrwalla.webp`,
        logoUrl: `${ASSETS_BASE_URL}/tempAssets/clientsImages/hr.png`,
        tagline: "Job Portal",
        cardColor: "#7878F3",
        cardHighlight: 'website',
        websites: [{ url: "", name: "HR WALA", image: `${ASSETS_BASE_URL}/tempAssets/projectImages/portfolio/hrwalla.webp` }],
        category: ["HR", "Consultancy"],
        technologies: [
            TECHNOLOGIES.LARAVEL,
            TECHNOLOGIES.HTML,
            TECHNOLOGIES.CSS,
            TECHNOLOGIES.JAVASCRIPT,
            TECHNOLOGIES.BOOTSTRAP
        ],
    },
    {
        id: "sudha",
        title: "Sudha Hospital",
        desc: "Sudha Hospital & Medical Research Centre is a multi-super specialty hospital offering personalized healthcare services through cutting-edge technology, medical intelligence, and unmatched quality standards. As the largest NABH Accredited Hospital in Kota, it features 5 operation theaters, 170 beds, and 55 critical care beds across 20 super specialties. The hospital aims to establish a world-class education and training centre for clinical care, education, and research.",
        webCoverImage: `${ASSETS_BASE_URL}/tempAssets/projectImages/banners/Sudha.webp`,
        logoUrl: `${ASSETS_BASE_URL}/tempAssets/clientsImages/sudha.png`,
        cardColor: "#ff0000",
        cardHighlight: 'website',
        websites: [{ url: "https://sudhahospitalkota.com/", name: "Sudha Hospital", image: `${ASSETS_BASE_URL}/tempAssets/projectImages/portfolio/sudha-web.webp` }],
        category: ["Healthcare", "Hospital"],
        technologies: [
            TECHNOLOGIES.LARAVEL,
            TECHNOLOGIES.HTML,
            TECHNOLOGIES.CSS,
            TECHNOLOGIES.JAVASCRIPT,
            TECHNOLOGIES.BOOTSTRAP,
            TECHNOLOGIES.MYSQL,
        ],
        tagline: "Hospital Management",
    },
    {
        id: "gurukul-engineering",
        title: 'Gurukul College of Engineering ',
        desc: "Gurukul College of Engineering is a college that offers a wide range of engineering courses.",
        webCoverImage: `${ASSETS_BASE_URL}/tempAssets/projectImages/banners/gurukul-eng.webp`,
        logoUrl: `${ASSETS_BASE_URL}/tempAssets/clientsImages/gurukul-eng.png`,
        cardColor: "#000000",
        cardHighlight: 'website',
        category: ["Engineering", "College"],
        websites: [{ url: "https://www.gurukulkota.com/", name: "Gurukul College of Engineering", image: `${ASSETS_BASE_URL}/tempAssets/projectImages/portfolio/gurukul-eng.webp?updatedAt=1741341907574` }],
        technologies: [
            TECHNOLOGIES.HTML,
            TECHNOLOGIES.CSS,
            TECHNOLOGIES.JAVASCRIPT,
            TECHNOLOGIES.PHP,
            TECHNOLOGIES.MYSQL,
            TECHNOLOGIES.LARAVEL,
        ],
    },
    {
        id: "medisaver",
        title: "Medisaver",
        desc: "Medisaver is India's most trusted and smart healthcare platform that gives you complete control over your medicines.",
        webCoverImage: `${ASSETS_BASE_URL}/tempAssets/projectImages/banners/medisaver.webp`,
        logoUrl: `${ASSETS_BASE_URL}/tempAssets/clientsImages/medisaver.webp`,
        cardColor: "#0151b5",
        cardHighlight: 'website',
        websites: [{ url: "https://medisaver.in/", name: "Medisaver", image: `${ASSETS_BASE_URL}/tempAssets/projectImages/portfolio/medisaver-landing.webp` }],
        category: ["Healthcare", "Healthcare"],
        technologies: [
            TECHNOLOGIES.PHP,
            TECHNOLOGIES.LARAVEL,
            TECHNOLOGIES.MYSQL,
            TECHNOLOGIES.TAILWIND
        ],
        tagline: "Healthcare Platform",
    },
    {
        id: "bhartiya-astro",
        title: "Bhartiya Astro",
        desc: "BharatiyAstro is dedicated to Vedic astrology, blending ancient wisdom with modern insights. Our astrologers offer personalized readings, guiding individuals on life's path, relationships, and self-discovery. Embrace the timeless wisdom of Vedic astrology with BharatiyAstro.",
        webCoverImage: `${ASSETS_BASE_URL}/tempAssets/projectImages/banners/Bhartiya.webp`,
        logoUrl: `${ASSETS_BASE_URL}/tempAssets/clientsImages/bhartiya.png`,
        cardColor: "#0E7831",
        cardHighlight: 'website',
        websites: [{ url: "https://bharatiyastro.com/", name: "Bhartiya Astro", image: `${ASSETS_BASE_URL}/tempAssets/projectImages/portfolio/bhartiastro-web.webp` }],
        applications: [
            {
                name: 'Astrologer App',
                playStoreUrl: "https://play.google.com/store/apps/details?id=com.bharatiyastro.astrologer",
                image: [`${ASSETS_BASE_URL}/tempAssets/projectImages/app/bhartiyastro/astrologer/1.webp`,
                `${ASSETS_BASE_URL}/tempAssets/projectImages/app/bhartiyastro/astrologer/2.webp`,
                `${ASSETS_BASE_URL}/tempAssets/projectImages/app/bhartiyastro/astrologer/3.webp`,
                `${ASSETS_BASE_URL}/tempAssets/projectImages/app/bhartiyastro/astrologer/4.webp`
                ]
            },
            {
                name: "User App",
                playStoreUrl: "https://play.google.com/store/apps/details?id=com.bharatiyastro.userapp",
                image: [`${ASSETS_BASE_URL}/tempAssets/projectImages/app/bhartiyastro/user/1.webp`,
                `${ASSETS_BASE_URL}/tempAssets/projectImages/app/bhartiyastro/user/2.webp`,
                `${ASSETS_BASE_URL}/tempAssets/projectImages/app/bhartiyastro/user/3.webp`,
                `${ASSETS_BASE_URL}/tempAssets/projectImages/app/bhartiyastro/user/4.webp`
                ]
            }
        ],
        iosApplications: [
            {
                name: "Astrologer App",
                appStoreUrl: "",
                image: [
                    `${ASSETS_BASE_URL}/tempAssets/projectImages/app/bhartiyastro/astrologer/1.webp`,
                    `${ASSETS_BASE_URL}/tempAssets/projectImages/app/bhartiyastro/astrologer/2.webp`,
                    `${ASSETS_BASE_URL}/tempAssets/projectImages/app/bhartiyastro/astrologer/3.webp`,
                    `${ASSETS_BASE_URL}/tempAssets/projectImages/app/bhartiyastro/astrologer/4.webp`,

                ]
            },
            {
                name: "User App",
                appStoreUrl: "",
                image: [
                    `${ASSETS_BASE_URL}/tempAssets/projectImages/app/bhartiyastro/user/1.webp`,
                    `${ASSETS_BASE_URL}/tempAssets/projectImages/app/bhartiyastro/user/2.webp`,
                    `${ASSETS_BASE_URL}/tempAssets/projectImages/app/bhartiyastro/user/3.webp`,
                    `${ASSETS_BASE_URL}/tempAssets/projectImages/app/bhartiyastro/user/4.webp`,
                ]
            }
        ],
        category: ["Tarot Cards", "Numerology", "Palmistry", "Kundali"],
        technologies: [
            TECHNOLOGIES.HTML,
            TECHNOLOGIES.CSS,
            TECHNOLOGIES.JAVASCRIPT,
            TECHNOLOGIES.MYSQL,
            TECHNOLOGIES.LARAVEL,
            TECHNOLOGIES.FLUTTER,
            TECHNOLOGIES.FIGMA
        ],
        tagline: "Astrology Consultancy Portal",
    },
    {
        id: "mapl-security",
        title: "MAPL",
        desc: "In India lot of companies, business units retail and educational institutions are either under guarded (less number of guards) or employ more than required numbers of guards. Sometimes some intuitions are even guarded by less experienced and trained guards. With MAPL excellent security audit and planning such security loopholes are completely removed PLUS the audit also makes sure that the company spends optimized security budget.",
        webCoverImage: `${ASSETS_BASE_URL}/tempAssets/projectImages/banners/mapl.webp`,
        logoUrl: `${ASSETS_BASE_URL}/tempAssets/clientsImages/mapl.png`,
        cardColor: '#A80B12',
        cardHighlight: 'website',
        websites: [
            { url: "https://maplbharat.com/", name: "MAPL", image: `${ASSETS_BASE_URL}/tempAssets/projectImages/portfolio/mapl-web.webp` }
        ],
        category: ["Security", "Audit", "Labour Supplies"],
        technologies: [
            TECHNOLOGIES.HTML,
            TECHNOLOGIES.CSS,
            TECHNOLOGIES.JAVASCRIPT,
            TECHNOLOGIES.PHP,
            TECHNOLOGIES.KOTLIN,
            TECHNOLOGIES.LARAVEL,
        ],
        tagline: "Security Services",
    },
    {
        id: "kobai",
        title: "Kobai Fashion",
        desc: "Kobai eCommerce platform India is a top online shopping site offering amazing deals across India and Asia, including countries like Singapore, Thailand, Indonesia, Vietnam, Philippines, and Taiwan. We provide a wide range of products at unbeatable prices, ensuring there's something for everyone,whether it's clothing, electronics, or home essentials.",
        cardHighlight: 'website',
        webCoverImage: `${ASSETS_BASE_URL}/tempAssets/projectImages/banners/Kobai.webp`,
        logoUrl: `${ASSETS_BASE_URL}/tempAssets/clientsImages/kobai.png`,
        cardColor: "#E62E04",
        websites: [{ url: "", name: "Kobai Fashion", image: `${ASSETS_BASE_URL}/tempAssets/projectImages/portfolio/kobai-web.webp` }],
        applications: [
            {
                name: "Kobai Fashion App",
                playStoreUrl: "https://play.google.com/store/apps/details?id=com.kriscent.kobaiuser",
                image: [`${ASSETS_BASE_URL}/tempAssets/projectImages/app/kobai/1.webp`,
                `${ASSETS_BASE_URL}/tempAssets/projectImages/app/kobai/2.webp`,
                `${ASSETS_BASE_URL}/tempAssets/projectImages/app/kobai/3.webp`,
                `${ASSETS_BASE_URL}/tempAssets/projectImages/app/kobai/4.webp`,
                ]
            }
        ],
        category: ["Fashion", "E-commerce"],
        technologies: [
            TECHNOLOGIES.HTML,
            TECHNOLOGIES.CSS,
            TECHNOLOGIES.JAVASCRIPT,
            TECHNOLOGIES.LARAVEL,
            TECHNOLOGIES.FLUTTER,
        ],
        tagline: "Fashion E-commerce",
    },
    // {
    //     id: "bottega-mqueen",
    //     title: "Bottega Mqueen",
    //     desc: "Bottega Mqueen is a luxury brand that offers a wide range of products, including clothing, accessories for womens.",
    //     webCoverImage: `${ASSETS_BASE_URL}/tempAssets/projectImages/banners/bottega.webp`,
    //     websites: [{ url: "https://bottegamqueen.com/", name: "Bottega Mqueen", image: `${ASSETS_BASE_URL}/tempAssets/projectImages/banners/bottega-banner.webp` }],
    //     logoUrl: `${ASSETS_BASE_URL}/tempAssets/clientsImages/bottega-mqueen.png`,
    //     cardColor: "#e96fc4",
    //     cardHighlight: "banner",
    //     category: ["Fashion", "E-commerce"],
    //     technologies: [
    //         TECHNOLOGIES.FIGMA,
    //     ],
    //     tagline: "Fashion E-commerce",
    // },
    {
        id: "auraquestt",
        title: "Auraquestt",
        desc: "A comprehensive astrology platform offering tarot readings, numerology, and various astrology services. Users can connect with certified astrologers via chat, calls, and video sessions. Features include daily horoscopes, wallet recharge, and an e-commerce section for spiritual products.",
        webCoverImage: `${ASSETS_BASE_URL}/tempAssets/projectImages/banners/Aura Quest.webp`,
        logoUrl: `${ASSETS_BASE_URL}/tempAssets/clientsImages/aq.png`,
        cardColor: "#3A3A3A",
        cardHighlight: "appCarousel",
        websites: [{ url: "", name: "Auraquest", image: `${ASSETS_BASE_URL}/tempAssets/projectImages/portfolio/auraquest-web.webp` }],
        applications: [
            {
                name: "User App",
                playStoreUrl: "https://play.google.com/store/apps/details?id=com.kriscent.auraquestt.expert",
                image: [
                    `${ASSETS_BASE_URL}/tempAssets/projectImages/app/auraquestt/user/1.webp`,
                    `${ASSETS_BASE_URL}/tempAssets/projectImages/app/auraquestt/user/2.webp`,
                    `${ASSETS_BASE_URL}/tempAssets/projectImages/app/auraquestt/user/3.webp`,
                    `${ASSETS_BASE_URL}/tempAssets/projectImages/app/auraquestt/user/4.webp`
                ]
            },
            {
                name: "Astrologer App",
                playStoreUrl: "https://play.google.com/store/apps/details?id=com.kriscent.auraquestt",
                image: [
                    `${ASSETS_BASE_URL}/tempAssets/projectImages/app/auraquestt/astrologer/1.webp`,
                    `${ASSETS_BASE_URL}/tempAssets/projectImages/app/auraquestt/astrologer/2.webp`,
                    `${ASSETS_BASE_URL}/tempAssets/projectImages/app/auraquestt/astrologer/3.webp`,
                    `${ASSETS_BASE_URL}/tempAssets/projectImages/app/auraquestt/astrologer/4.webp`
                ]
            }
        ],
        iosApplications: [
            {
                name: "Auraquestt App",
                appStoreUrl: "",
                image: [
                    `${ASSETS_BASE_URL}/tempAssets/projectImages/app/auraquestt/user/1.webp`,
                    `${ASSETS_BASE_URL}/tempAssets/projectImages/app/auraquestt/user/2.webp`,
                    `${ASSETS_BASE_URL}/tempAssets/projectImages/app/auraquestt/user/3.webp`
                ]
            },
        ],
        category: ["Astrology", "Numerology", "Vastu", "Chinese Astrology", "E-commerce"],
        technologies: [
            TECHNOLOGIES.HTML,
            TECHNOLOGIES.CSS,
            TECHNOLOGIES.JAVASCRIPT,
            TECHNOLOGIES.LARAVEL,
            TECHNOLOGIES.FLUTTER,
            TECHNOLOGIES.FIGMA,
        ],
        tagline: "Astrology Consultancy Portal",
    },
    {
        id: "apth",
        title: "APTH",
        desc: "Doctor at home, online appointment scheduling, lab at home, medicine, video appointment.",
        webCoverImage: `${ASSETS_BASE_URL}/tempAssets/projectImages/banners/APTH.webp`,
        logoUrl: `${ASSETS_BASE_URL}/tempAssets/clientsImages/apth.png`,
        cardColor: "#d9b371",
        cardHighlight: 'website',
        websites: [{ url: "https://apth.in/", name: "APTH", image: `${ASSETS_BASE_URL}/tempAssets/projectImages/portfolio/apth-web.webp` }],
        // applications: [{
        //     name: "APTH App",
        //     playStoreUrl: "https://play.google.com/store/apps/details?id=com.apth",
        //     image: [`${ASSETS_BASE_URL}/tempAssets/projectImages/app/apth.png`]
        // }],

        category: ["Healthcare", "Telemedicine"],
        technologies: [
            TECHNOLOGIES.HTML,
            TECHNOLOGIES.CSS,
            TECHNOLOGIES.JAVASCRIPT,
            TECHNOLOGIES.REACT_NATIVE,
            TECHNOLOGIES.NODE,
        ],
        tagline: "Healthcare Portal",
    },
    {
        id: "ssi",
        title: "SSI",
        desc: "SSI Kota is a community of small-scale industries and businesses promoting economic growth in the region.",
        webCoverImage: `${ASSETS_BASE_URL}/tempAssets/projectImages/banners/ssi.webp`,
        logoUrl: `${ASSETS_BASE_URL}/tempAssets/clientsImages/ssi.png`,
        cardColor: "#2B78E4",
        cardHighlight: 'website',
        websites: [{ url: "https://www.ssikota.com/index.php", name: "SSI Website", image: `${ASSETS_BASE_URL}/tempAssets/projectImages/portfolio/ssi.webp` }],
        applications: [{
            name: "Andriod App",
            playStoreUrl: "https://play.google.com/store/apps/details?id=com.kriscent.ssi   ",
            image: [
                `${ASSETS_BASE_URL}/tempAssets/projectImages/app/ssi/1.webp`,
                `${ASSETS_BASE_URL}/tempAssets/projectImages/app/ssi/2.webp`,
                `${ASSETS_BASE_URL}/tempAssets/projectImages/app/ssi/3.webp`,
            ]
        }],
        category: ["Business", "Directory"],
        technologies: [
            TECHNOLOGIES.HTML,
            TECHNOLOGIES.CSS,
            TECHNOLOGIES.JAVASCRIPT,
            TECHNOLOGIES.PHP,
            TECHNOLOGIES.MYSQL,
        ],
        tagline: "Business Directory and Association"
    },
    {
        id: "k-export",
        title: "Kashyap Export",
        desc: "Kashyap Export is a stones company that offers a wide range of services including car rentals, hotel bookings, and travel planning.",
        webCoverImage: `${ASSETS_BASE_URL}/tempAssets/projectImages/banners/Kashyap Export.webp`,
        logoUrl: `${ASSETS_BASE_URL}/tempAssets/clientsImages/kexport.png`,
        cardColor: "#a52a00",
        cardHighlight: 'website',
        websites: [{ url: "https://www.kashyapexport.com/", name: "Kashyap Export", image: `${ASSETS_BASE_URL}/tempAssets/projectImages/portfolio/kexport-web.webp` }],
        category: ["Stones"],
        technologies: [
            TECHNOLOGIES.HTML,
            TECHNOLOGIES.CSS,
            TECHNOLOGIES.JAVASCRIPT,
            TECHNOLOGIES.LARAVEL,
            TECHNOLOGIES.MYSQL
        ],
        tagline: "Stones Export",
    },
    // {
    //     id: "astro-nri",
    //     title: "Astro NRI",
    //     desc: "Astro NRI is a platform that offers astrology services to NRIs.",
    //     webCoverImage: "tempAssets/projectImages/banners/astroNRI.webp",
    //     logoUrl: "tempAssets/clientsImages/astroNRI.png",
    //     websites: [{ url: "", name: "Astro NRI", image: "tempAssets/projectImages/portfolio/astroNRI.webp" }],
    //     cardColor: "#936a44",
    //     cardHighlight: "banner",
    //     category: ["Astrology", "Tarot Cards", "Numerology", "Palmistry", "Kundali"],
    //     technologies: [
    //         TECHNOLOGIES.FIGMA,
    //     ],
    //     tagline: "Astrology Services",
    // },

    {
        id: "luriox-stones",
        title: "Luriox Stones",
        desc: "Luriox stones provides collection of premium gemstones and stunning jewelry. From timeless classics to contemporary designs, each piece is crafted to add a touch of elegance.",
        webCoverImage: `${ASSETS_BASE_URL}/tempAssets/projectImages/banners/luriox.webp`,
        logoUrl: `${ASSETS_BASE_URL}/tempAssets/clientsImages/luriox.png`,
        cardColor: "#518B99",
        cardHighlight: 'website',
        websites: [{ url: "", name: "Luriox Stones", image: `${ASSETS_BASE_URL}/tempAssets/projectImages/portfolio/luriox-web.webp` }],
        category: ["Jewelry", "Gemstones"],
        technologies: [
            TECHNOLOGIES.NEXTJS,
            TECHNOLOGIES.FIGMA,
            TECHNOLOGIES.LARAVEL,
            TECHNOLOGIES.MYSQL
        ],
        tagline: "Jwellery Marketplace",
    },
    {
        id: "shree-falodi-skill",
        title: "Shree Falodi Skill Academy",
        desc: "Shree Falodi Skill Academy recognize the ever-evolving landscape of the banking and finance sector, where knowledge and adaptability are paramount. In this era of digital transformation and economic complexities, we stand as a beacon of guidance and enlightenment.",
        webCoverImage: `${ASSETS_BASE_URL}/tempAssets/projectImages/banners/shree-falodi-skill.webp`,
        logoUrl: `${ASSETS_BASE_URL}/tempAssets/clientsImages/shree-falodi-skill.png`,
        cardColor: "#247d92",
        cardHighlight: 'website',
        websites: [{ url: "https://shreefalodiskillacademy.com/", name: "Shree Falodi Skill Academy", image: `${ASSETS_BASE_URL}/tempAssets/projectImages/portfolio/shree-falodi-skill.webp` }],
        category: ["Skill Development", "Academy"],
        technologies: [
            TECHNOLOGIES.HTML,
            TECHNOLOGIES.CSS,
            TECHNOLOGIES.JAVASCRIPT,
            TECHNOLOGIES.FIGMA
        ],
        tagline: "Skill Development Academy",
    },
    {
        id: "gurukul-pharmacy",
        title: 'Gurukul College of Pharmacy',
        desc: "Gurukul College of Pharmacy is a college that offers a wide range of pharmacy courses.",
        webCoverImage: `${ASSETS_BASE_URL}/tempAssets/projectImages/banners/gurukul-pharmacy.webp`,
        logoUrl: `${ASSETS_BASE_URL}/tempAssets/clientsImages/gurukul-pharmacy.png`,
        cardColor: "#553cde",
        cardHighlight: 'website',
        category: ["Pharmacy", "College"],
        websites: [{ url: "https://www.gurukulpharmacykota.com/", name: "Gurukul College of Pharmacy", image: `${ASSETS_BASE_URL}/tempAssets/projectImages/portfolio/gurukul-pharmacy.webp` }],
        technologies: [
            TECHNOLOGIES.HTML,
            TECHNOLOGIES.CSS,
            TECHNOLOGIES.JAVASCRIPT,
            TECHNOLOGIES.PHP,
            TECHNOLOGIES.MYSQL,
            TECHNOLOGIES.LARAVEL,
        ],
    },
    {
        id: "igcsm",
        title: "IGCSM",
        desc: "The Indira Gandhi Computer Saksharta Mission (IGCSM), founded in 2008, aims to Educate, Enable, and Empower. Operating across 21 states, IGCSM has impacted more than 3 Lakh lives by focusing on educating children, enhancing youth skills, and empowering girls and young women. Individual and governmental efforts are crucial in bridging this gap for India's successful transformation.",
        webCoverImage: `${ASSETS_BASE_URL}/tempAssets/projectImages/banners/IGCSM.webp`,
        logoUrl: `${ASSETS_BASE_URL}/tempAssets/clientsImages/igcsm.png`,
        cardColor: '#F07C00',
        cardHighlight: 'website',
        websites: [
            { url: "https://igcsm.com/", name: "IGCSM", image: `${ASSETS_BASE_URL}/tempAssets/projectImages/portfolio/igcsm-web.webp` }
        ],
        applications: [
            {
                name: "IGCSM App",
                playStoreUrl: "",
                image: [`${ASSETS_BASE_URL}/tempAssets/projectImages/app/igcsm/1.webp`,
                `${ASSETS_BASE_URL}/tempAssets/projectImages/app/igcsm/2.webp`,
                `${ASSETS_BASE_URL}/tempAssets/projectImages/app/igcsm/3.webp`,
                `${ASSETS_BASE_URL}/tempAssets/projectImages/app/igcsm/4.webp`,
                ]
            }
        ],
        category: ["Education", "Institute", "Courses"],
        technologies: [
            TECHNOLOGIES.HTML,
            TECHNOLOGIES.CSS,
            TECHNOLOGIES.JAVASCRIPT,
            TECHNOLOGIES.PHP,
            TECHNOLOGIES.KOTLIN,
            TECHNOLOGIES.LARAVEL,
        ],
        tagline: "Education Franchise Portal",
    },
    {
        id: "special-coverage-news",
        title: "Special Coverage News",
        desc: "Special Coverage News is a platform that offers news services to users.",
        webCoverImage: `${ASSETS_BASE_URL}/tempAssets/projectImages/portfolio/samachar-web.webp`,
        logoUrl: `${ASSETS_BASE_URL}/tempAssets/clientsImages/Special-covrage.png`,
        cardColor: "#cd1b14",
        cardHighlight: 'website',
        websites: [
            { url: "https://www.specialcoveragenews.in/", name: "Website", image: `${ASSETS_BASE_URL}/tempAssets/projectImages/portfolio/samachar-web.webp` }
        ],
        category: ["News", "Update", "Latest News"],
        technologies: [
            TECHNOLOGIES.HTML,
            TECHNOLOGIES.CSS,
            TECHNOLOGIES.JAVASCRIPT,
        ],
        tagline: "News Portal",
    },
    {
        id: "khush-jeevan",
        title: "Khush Jeevan",
        desc: "khushjeevan brings together astrologers and their boundless knowledge about the occult science of Astrology on one platform and lets you connect with them 24*7. Apart from the best future predictions that help you get through the difficult phase of life, khushjeevan also offers Free Live astrology sessions, Daily horoscope, Free kundli matching service, Spiritual store and much more.",
        webCoverImage: `${ASSETS_BASE_URL}/tempAssets/projectImages/banners/KhushJeevan.webp`,
        logoUrl: `${ASSETS_BASE_URL}/tempAssets/clientsImages/khush.png`,
        cardColor: "#975D9E",
        cardHighlight: 'website',
        websites: [{ url: "https://khushjeevan.com/", name: "Khush Jeevan", image: `${ASSETS_BASE_URL}/tempAssets/projectImages/portfolio/khush-web.webp` }],
        applications: [
            {
                name: "Astrologer App",
                playStoreUrl: "https://play.google.com/store/apps/details?id=com.kriscent.khushjeevan&pcampaignid=web_share",
                image: [`${ASSETS_BASE_URL}/tempAssets/projectImages/app/khushjeevan/astrologer/1.webp`,
                `${ASSETS_BASE_URL}/tempAssets/projectImages/app/khushjeevan/astrologer/2.webp`,
                `${ASSETS_BASE_URL}/tempAssets/projectImages/app/khushjeevan/astrologer/3.webp`,
                `${ASSETS_BASE_URL}/tempAssets/projectImages/app/khushjeevan/astrologer/4.webp`,
                ]
            },
            {
                name: "User App",
                playStoreUrl: "",
                image: [`${ASSETS_BASE_URL}/tempAssets/projectImages/app/khushjeevan/user/1.webp`,
                `${ASSETS_BASE_URL}/tempAssets/projectImages/app/khushjeevan/user/2.webp`,
                `${ASSETS_BASE_URL}/tempAssets/projectImages/app/khushjeevan/user/3.webp`,
                `${ASSETS_BASE_URL}/tempAssets/projectImages/app/khushjeevan/user/4.webp`,
                ]
            }
        ],
        iosApplications: [{
            name: "Khush Jeevan App",
            appStoreUrl: "",
            image: [`${ASSETS_BASE_URL}/tempAssets/projectImages/app/khushjeevan/user/1.webp`,
            `${ASSETS_BASE_URL}/tempAssets/projectImages/app/khushjeevan/user/2.webp`,
            `${ASSETS_BASE_URL}/tempAssets/projectImages/app/khushjeevan/user/3.webp`]
        }],
        category: ["Astrology", "Numerology", "Pooja", "Kundali", "Lal Kitaab"],
        technologies: [
            TECHNOLOGIES.HTML,
            TECHNOLOGIES.CSS,
            TECHNOLOGIES.JAVASCRIPT,
            TECHNOLOGIES.LARAVEL,
            TECHNOLOGIES.FLUTTER,
            TECHNOLOGIES.FIGMA
        ],
        tagline: "Astrology Consultancy Portal",
    },
    {
        id: "astromaya",
        title: "Astromaya",
        desc: "Explore the ancient wisdom of Vastu Shastra, guiding the alignment of spaces to foster harmony,balance, and positive energies. Elevate well-being.",
        webCoverImage: `${ASSETS_BASE_URL}/tempAssets/projectImages/banners/AstroMaya.webp`,
        logoUrl: `${ASSETS_BASE_URL}/tempAssets/clientsImages/astromaya.png`,
        cardColor: "#DCAD68",
        cardHighlight: 'website',
        websites: [{ url: "https://astromaya.in/", name: "Astromaya", image: `${ASSETS_BASE_URL}/tempAssets/projectImages/portfolio/astromaya-web.webp` }],
        //  applications: [
        //      { name: 'Astromaya App', playStoreUrl: "", image: ["tempAssets/projectImages/app/bharti.png"] },
        //  ],
        //   iosApplications: [
        //    { name: "Astromaya App", appStoreUrl: "", image: ["tempAssets/projectImages/app/bharti-ios.png"] }
        // ],
        category: ["Tarot Cards", "Numerology", "Palmistry", "Kundali"],
        technologies: [
            TECHNOLOGIES.HTML,
            TECHNOLOGIES.CSS,
            TECHNOLOGIES.REACT,
            TECHNOLOGIES.JAVASCRIPT,
            TECHNOLOGIES.FLUTTER,
            TECHNOLOGIES.LARAVEL,
        ],
        tagline: "Astrology Consultancy Portal",
    },
    {
        id: "rgcsm-online",
        title: "RGCSM-Online",
        desc: "National level online educational and skill development portal with franchisee management system.",
        webCoverImage: `${ASSETS_BASE_URL}/tempAssets/projectImages/banners/RGCSM.webp`,
        logoUrl: `${ASSETS_BASE_URL}/tempAssets/clientsImages/rgcsm-online.png`,
        cardColor: '#fa394a',
        cardHighlight: 'website',
        websites: [
            { url: "https://www.rgcsm.org/online/course.php", name: "RGCSM Online", image: `${ASSETS_BASE_URL}/tempAssets/projectImages/portfolio/rgcsm-online.webp` },
        ],
        applications: [
            {
                name: "Online Study",
                playStoreUrl: "https://play.google.com/store/apps/details?id=com.kriscent.rgcsm.online",
                image: [
                    `${ASSETS_BASE_URL}/tempAssets/projectImages/app/rgcsm/1.png`,
                    `${ASSETS_BASE_URL}/tempAssets/projectImages/app/rgcsm/2.png`,
                    `${ASSETS_BASE_URL}/tempAssets/projectImages/app/rgcsm/3.png`,
                    `${ASSETS_BASE_URL}/tempAssets/projectImages/app/rgcsm/4.png`
                ]
            }
        ],
        category: ["Education", "Institute", "Courses", "Online-Study"],
        technologies: [
            TECHNOLOGIES.HTML,
            TECHNOLOGIES.CSS,
            TECHNOLOGIES.JAVASCRIPT,
            TECHNOLOGIES.PHP,
            TECHNOLOGIES.KOTLIN,
            TECHNOLOGIES.LARAVEL,
        ],
        tagline: "Education Franchise Portal",
        achievements: ["2k+ Study Centers", "100+ Courses", "6.7L+ Students"]
    },
    {
        id: "shivshakti",
        title: "Shivshakti Hospital",
        desc: "A modern healthcare facility offering a wide range of medical services with personalized treatment plans.",
        webCoverImage: `${ASSETS_BASE_URL}/tempAssets/projectImages/banners/ssh.webp`,
        logoUrl: `${ASSETS_BASE_URL}/tempAssets/clientsImages/ssh.png`,
        cardColor: "#845334",
        cardHighlight: 'website',
        websites: [{ url: "https://shivshaktihospital.co.in/", name: "Shivshakti Hospital", image: `${ASSETS_BASE_URL}/tempAssets/projectImages/portfolio/ssh.webp` }],
        category: ["Healthcare", "Hospital"],
        technologies: [
            TECHNOLOGIES.HTML,
            TECHNOLOGIES.CSS,
            TECHNOLOGIES.LARAVEL,
            TECHNOLOGIES.MYSQL,
            TECHNOLOGIES.JAVASCRIPT
        ],
    },
    {
        id: "antrose",
        title: "Antrose",
        desc: "Antrose embodies the spirit of progress and growth, symbolized by its logo, which represents a bird taking flight. Since its inception in 2005, Antrose has evolved into a multifaceted organization, offering consultancy, trading, and infrastructure services across India.",
        webCoverImage: `${ASSETS_BASE_URL}/tempAssets/projectImages/banners/antrose.webp`,
        logoUrl: `${ASSETS_BASE_URL}/tempAssets/clientsImages/antrose.png`,
        cardColor: "#2B78E4",
        cardHighlight: 'website',
        websites: [{ url: "https://antrorse.org/index.php", name: "Antrose", image: `${ASSETS_BASE_URL}/tempAssets/projectImages/portfolio/antrose.webp` }],
        category: ["Hosting"],
        technologies: [
            TECHNOLOGIES.HTML,
            TECHNOLOGIES.CSS,
            TECHNOLOGIES.JAVASCRIPT,
            TECHNOLOGIES.LARAVEL,
            TECHNOLOGIES.PHP,
            TECHNOLOGIES.MYSQL,
        ],
    },
    {
        id: "avit",
        title: "AVIT Marketing",
        desc: "Dynamic CMS-built website for managing online orders for WhatsApp marketing.",
        webCoverImage: `${ASSETS_BASE_URL}/tempAssets/projectImages/banners/avit.webp`,
        logoUrl: `${ASSETS_BASE_URL}/tempAssets/clientsImages/avit-marketing.png`,
        cardColor: "#4CAF50",
        cardHighlight: 'website',
        websites: [{ url: "https://www.avitmarketing.com/", name: "AVIT Marketing", image: `${ASSETS_BASE_URL}/tempAssets/projectImages/portfolio/avit.webp` }],
        category: ["Marketing", "Digital Marketing"],
        technologies: [
            TECHNOLOGIES.HTML,
            TECHNOLOGIES.CSS,
            TECHNOLOGIES.JAVASCRIPT,
            TECHNOLOGIES.PHP,
            TECHNOLOGIES.MYSQL,
        ],
    },

];
