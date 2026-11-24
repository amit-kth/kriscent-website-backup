import { AppWindow, ArrowRight, BookOpenIcon, BriefcaseBusiness, Briefcase, Building2, ClockIcon, CodeIcon, DollarSignIcon, Feather, FileText, Globe, Handshake, HeartIcon, HelpCircle, Image, Layout, LifeBuoy, Lightbulb, LocateIcon, Mail, Megaphone, Microchip, Palette, Phone, RefreshCw, Rss, Search, Share2, ShoppingCartIcon, Smartphone, Star, StarIcon, Trophy, Users, VideoIcon, FileTextIcon, Video, Code, ChartNoAxesGantt, SearchCheck, LayoutGrid, ShoppingCart, Store, UtensilsCrossed, Stethoscope, Rocket, Building, HeartHandshake, UserPlus, ClipboardList, CheckCircle, Shield, ChartLine, Server, Code2, Database, DatabaseBackup, FireExtinguisher, Cloud, Brain, Info, HandshakeIcon, InfoIcon, AppWindowMac, PackageSearch, FileImage, FolderCode, Headset, DatabaseZap, Users2 } from "lucide-react"
import { IconAnalyze, IconBrain, IconBrandAngular, IconBrandDocker, IconBrandFirebase, IconBrandMongodb, IconBrandPython, IconBrandVue, IconBrandWeibo, IconDatabase, IconRosetteDiscount } from '@tabler/icons-react';
import { IconBrandReact, IconBrandNextjs, IconGlobe, IconBrandLaravel, IconBrandPhp, IconBrandNodejs, IconBrandFlutter, IconBrandReactNative, IconPalette, IconBrandAndroid, IconBrandApple, IconSettings, IconCloud } from '@tabler/icons-react';
import { ASSETS_BASE_URL } from "@/lib/variables";


// types of the navbar links can be
const linkTypes = {
    link: {
        route: "route",
        url: "url"
    },
    linkGroup: 'groupLinks',
    multipleLinkGroups: 'groupsOfGroupLinks'
}

// different variants for navbar links & base 
export const navLinksVariants = {
    navbarBase: {
        onHome: 'w-screen 2xl:h-[70px] h-[54px] bg-transparent fixed top-0 left-0 flex justify-center items-center z-51',
        offHome: 'w-screen 2xl:h-[70px] h-[54px] bg-primary fixed top-0 left-0 flex justify-center items-center shadow-lg z-51'
    },
    navLinks: {
        onHome: "cursor-pointer text-white text-paragraphFontSizeMobile font-medium hover:text-primary uppercase px-4 py-4 relative",
        offHome: "cursor-pointer text-white text-paragraphFontSizeMobile font-medium hover:text-white/80 transition-all rounded-full uppercase px-4 py-4 relative"
    }
}



// all links for the why kriscent link menu
export const WhyKriscentLinks = {
    linkTitle: 'Why Kriscent',
    type: linkTypes.linkGroup,
    icon: <InfoIcon size={20} />,
    target: '/about',
    childrens: [
        {
            linkTitle: 'About Kriscent',
            //adding custom svg icon of kriscent "K" 
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1731_108)">
                    <path d="M9.46141 0L9.51051 0.0122745L9.58416 0.159568L9.73145 0.429607L9.89102 0.724195L10.0997 1.11698L10.1856 1.26427L10.2838 1.46067L10.382 1.63251L10.4679 1.80435L10.6152 2.07439L10.8116 2.44263L10.9589 2.71266L11.1062 2.99498L11.2535 3.26502L11.4254 3.58415L11.634 3.97694L11.7936 4.27153L11.855 4.382L11.8304 4.43109L11.6954 4.54156L11.5113 4.71341L11.4131 4.79933L11.3272 4.88525L11.229 4.97117L10.8484 5.35168L10.7625 5.44988L10.6398 5.57262L10.5539 5.67082L10.4434 5.79356L10.2961 5.96541L10.1365 6.14952L9.96467 6.35819L9.82965 6.53003L9.6578 6.75097L9.49823 6.95964L9.36321 7.14376L9.19137 7.37697L9.0318 7.61019L8.90905 7.78203L8.74948 8.01525L8.55309 8.30984L8.33214 8.65352L8.19712 8.86219L8.07437 9.05858L7.92708 9.2918L7.82888 9.45136L7.69386 9.67231L7.50974 9.96689L7.37472 10.1878L7.26425 10.372L7.36244 10.2983L7.48519 10.1878L7.64476 10.0651L7.84116 9.90552L8.00073 9.78278L8.22167 9.61093L8.43034 9.45136L8.68811 9.25497L8.90905 9.0954L9.05635 8.98493L9.49823 8.6658L9.7069 8.5185L9.86647 8.40803L10.0138 8.30984L10.2102 8.17482L10.3943 8.05207L10.7871 7.79431L11.2903 7.47517L11.5113 7.34015L11.7199 7.21741L11.8795 7.11921L12.1741 6.94737L12.7387 6.62823L13.4261 6.25999L14.089 5.92858L14.8254 5.5849L15.255 5.40078L15.6969 5.21666L16.2002 5.02027L16.458 4.92207L16.7771 4.8116L17.2804 4.63976L17.6363 4.52929L18.0537 4.40655L18.5937 4.25925L19.3793 4.07513H19.453L19.4284 4.13651L19.3793 4.19788L19.2566 4.36972L19.1461 4.52929L18.9865 4.75023L18.8392 4.9589L18.7042 5.14302L18.5569 5.35168L18.4342 5.52352L18.3483 5.64627L18.2132 5.83039L18.0659 6.03905L17.9064 6.25999L17.7959 6.41956L17.6609 6.60368L17.3417 7.04556L17.1944 7.25423L17.0349 7.47517L16.4211 8.33439L16.2616 8.55533L16.1143 8.76399L15.9915 8.93584L15.8565 9.11995L15.746 9.27952L15.6478 9.41454L15.3287 9.85642L15.1814 10.0651L15.0218 10.286L14.9236 10.4211L14.7641 10.6543L14.6168 10.8507L14.4817 10.9366L14.0276 11.2312L13.7575 11.403L13.5366 11.5503L12.9474 11.9308L12.6283 12.1395L12.3214 12.3359L12.1373 12.4586L11.8304 12.655L11.6463 12.7778L11.5113 12.8637L11.0939 13.1337L10.8116 13.3178L10.5048 13.5142L10.3206 13.637L10.0138 13.8334L9.55961 14.1279L9.43686 14.2139H9.40004L9.41231 14.1402L9.52278 13.7843L9.68235 13.2687L9.9033 12.5568L10.2715 11.3662L10.3943 10.9611L10.5048 10.6174L10.7134 9.94234L10.8484 9.51274L10.873 9.41454L10.7993 9.47591H10.7748V9.50046L10.6398 9.61093L10.4802 9.75823L10.3575 9.8687L10.2102 10.0037L10.026 10.1756L9.86647 10.3229L9.63325 10.5561L9.53506 10.642L9.48596 10.7034L9.38776 10.7893L9.28956 10.8998L9.21592 10.9611L9.12999 11.0593L8.87223 11.3171L8.7863 11.4153L8.70038 11.5012L8.61446 11.5994L8.52854 11.6853L8.44261 11.7835L8.28304 11.9554L8.19712 12.0536L8.08665 12.1763L7.97618 12.3113L7.84116 12.4586L7.73068 12.5936L7.62021 12.7164L7.50974 12.8514L7.37472 13.011L7.2397 13.1828L7.10468 13.3424L6.96966 13.5142L6.82236 13.6983L6.66279 13.907L6.52777 14.0789L6.33137 14.3366L6.23318 14.4716L6.06133 14.7049L5.90176 14.9258L5.77901 15.0976L5.61944 15.3186L5.48442 15.515L5.31258 15.7605L5.21438 15.9078L5.03026 16.1778L4.80932 16.5092L4.60065 16.8283L4.44108 17.0738L4.31833 17.2702L4.06056 17.6753L3.74142 18.1908L3.59413 18.4363L3.49593 18.5959L3.37318 18.8045L3.07859 19.2955L2.91902 19.5656L2.7349 19.8724L2.66125 19.9338V19.9092H2.58761V19.9338H2.55078V19.811L2.67353 18.8168L2.784 17.9821L2.91902 17.0738L3.05404 16.2514L3.16451 15.6254L3.31181 14.8521L3.45911 14.1279L3.58185 13.5633L3.79052 12.6796L3.98692 11.9063L4.12194 11.403L4.24468 10.9734L4.40425 10.4211L4.51473 10.0774L4.64975 9.64776L4.79704 9.1936L4.91979 8.83764L5.10391 8.32211L5.3003 7.79431L5.4967 7.29105L5.63172 6.95964L5.77901 6.60368L5.99996 6.08815L6.14725 5.75674L6.38047 5.25349L6.58914 4.82388L6.71189 4.56611L6.81008 4.36972L7.01875 3.96466L7.12923 3.76827L7.22742 3.57188L7.31335 3.42459L7.38699 3.27729L7.49747 3.0809L7.64476 2.82313L7.81661 2.52855L8.1112 2.03757L8.41806 1.54659L8.52854 1.37474L8.71266 1.09243L8.8354 0.908313L9.01952 0.638274L9.17909 0.405058L9.33866 0.184117L9.46141 0Z" fill="#ffffff" />
                    <path d="M13.0968 12.2583H13.1827L14.2628 12.5652L14.5574 12.6511L14.5943 12.7002L14.7661 13.1052L14.9502 13.5594L15.1098 13.9399L15.2939 14.3818L15.4658 14.7991L15.6499 15.241L15.8586 15.7443L16.2268 16.628L16.3741 16.984L16.5459 17.4013L16.7546 17.9046L16.9755 18.4324L17.1597 18.8865L17.2579 19.1075L17.2088 19.1197L16.9878 18.9847L16.8037 18.8743L16.5091 18.7024L15.7972 18.2851L15.6131 18.1746L15.3185 18.0028L14.6065 17.5854L14.2997 17.4013L13.9805 17.2172L13.6491 17.0208L12.9986 16.6403L12.4585 16.3212L12.1639 16.1493L11.1819 15.5724L10.9732 15.4497L10.4332 15.1305L10.1386 14.9587L9.59848 14.6396L9.53711 14.6027L9.56166 14.5536L9.67213 14.4923L10.0772 14.2222L10.4823 13.9645L10.8382 13.7312L11.3292 13.4121L11.4642 13.3262L11.8202 13.093L12.0289 12.9579L12.2007 12.8475L12.4462 12.6879L12.9004 12.3933L13.0354 12.3074L13.0968 12.2583Z" fill="#ffffff" />
                    <path d="M4.30655 8.8252H4.35565L4.34338 8.92339L4.14698 9.54939L3.99969 10.0158L3.87694 10.3963L3.66827 11.0469L3.53325 11.4765L3.42278 11.8079L3.39823 11.8693L3.11591 11.7465L2.75995 11.5992L1.79025 11.1942L1.26244 10.9732L0.881926 10.8137L0.611884 10.7032L0.599609 10.6541L0.832828 10.4945L0.992398 10.3718L1.23789 10.1999L1.52021 10.0158L1.77798 9.85625L2.04802 9.69668L2.36716 9.52484L2.71085 9.353L3.07909 9.19343L3.5087 9.03386L3.92604 8.91112L4.24518 8.83747L4.30655 8.8252Z" fill="#ffffff" />
                </g>
                <defs>
                    <clipPath id="clip0_1731_108">
                        <rect width="24" height="24" fill="white" />
                    </clipPath>
                </defs>
            </svg>,
            iconColor: "text-primary",
            type: linkTypes.link,
            target: '/about',
            shortDesc: "Kriscent Techno Hub Pvt Ltd founded in 2014 by visionary CEO Kapil Gautam, Kriscent is a leading provider of cutting-edge IT, design, and marketing solutions, propelling businesses to global success."
        },
        {
            linkTitle: 'Our Valuable Clients',
            type: linkTypes.link,
            target: '/clients',
            iconColor: "text-orange-600",
            icon: <Users2 size={20} />,
            shortDesc: "Explore the organizations we've partnered with and the success stories we've created together."
        },
        {
            linkTitle: 'Career @ Kriscent',
            type: linkTypes.link,
            target: '/career',
            icon: <BriefcaseBusiness size={20} />,
            iconColor: "text-indigo-600",
            shortDesc: "Join our team and build meaningful solutions while growing your career with us."
        },
        {
            linkTitle: 'Blog',
            type: linkTypes.link.url,
            target: 'https://kriscent.in/blog',
            icon: <Rss size={20} />,
            iconColor: "text-blue-600",
            shortDesc: "Explore expert insights, technology trends, and practical perspectives from our team."
        },
        {
            linkTitle: 'Life @ Kriscent',
            type: linkTypes.link,
            target: '/our-culture',
            icon: <HeartHandshake size={20} />,
            iconColor: "text-green-600",
            shortDesc: "Get a glimpse of our culture, collaborative environment, and the people behind our success."
        },
        {
            linkTitle: 'Our Recognitions',
            type: linkTypes.link,
            target: '/awards',
            icon: <Trophy size={20} />,
            iconColor: "text-orange-600",
            shortDesc: "Explore the awards and recognitions that reflect our commitment to innovation and excellence."
        },
    ]
};

const readyProducts = [
    {
        linkTitle: 'KAstrofy',
        desc: '',
        logo: 'url',
        icon: <Code size={13} />,
        target: 'https://kriscent.in/product/kastrofy/',
        type: linkTypes.link.url
    },
    {
        linkTitle: 'K-Smart',
        desc: '',
        logo: 'url',
        icon: <Code size={13} />,
        target: 'https://www.kriscent.in/product/ksmart/',
        type: linkTypes.link.url
    },
    {
        linkTitle: 'K-Exam',
        desc: '',
        logo: 'url',
        icon: <Code size={13} />,
        target: 'https://www.kriscent.in/product/kexam/',
        type: linkTypes.link.url
    },
    {
        linkTitle: 'K Foodies',
        desc: '',
        logo: 'url',
        icon: <Code size={13} />,
        target: 'https://www.kriscent.com/product/kfoodies/',
        type: linkTypes.link.url
    },
    {
        linkTitle: 'K-Restro',
        desc: '',
        logo: 'url',
        icon: <Code size={13} />,
        target: 'https://www.kriscent.com/product/krestro/',
        type: linkTypes.link.url
    },
    {
        linkTitle: 'K Bazaar-POS',
        desc: '',
        logo: 'url',
        icon: <Code size={13} />,
        target: 'https://www.kriscent.in/product/kbazaar/',
        type: linkTypes.link.url
    },
    {
        linkTitle: 'Kart Supermarket',
        desc: '',
        logo: 'url',
        icon: <Code size={13} />,
        target: 'https://www.kriscent.in/landing/free-ecommerce/',
        type: linkTypes.link.url
    },
    {
        linkTitle: 'Kart Multivendor',
        desc: '',
        logo: 'url',
        icon: <Code size={13} />,
        target: 'https://www.kriscent.com/product/kart-multivendormarket/',
        type: linkTypes.link.url
    },
    {
        linkTitle: 'Kart Multistore',
        desc: '',
        logo: 'url',
        icon: <Code size={13} />,
        target: 'https://kriscent.com/product/kart-multistore/',
        type: linkTypes.link.url
    },
    {
        linkTitle: 'K-Store',
        desc: '',
        logo: 'url',
        icon: <Code size={13} />,
        target: 'https://www.kriscent.in/product/kstore/',
        type: linkTypes.link.url
    },
    {
        linkTitle: 'K-Academics',
        desc: '',
        logo: 'url',
        icon: <Code size={13} />,
        target: 'https://www.kriscent.in/product/kacademics/',
        type: linkTypes.link.url
    },
    {
        linkTitle: 'K-Educity',
        desc: '',
        logo: 'url',
        icon: <Code size={13} />,
        target: 'https://www.kriscent.com/product/kedusity/',
        type: linkTypes.link.url
    },
    {
        linkTitle: 'K-Job',
        desc: '',
        logo: 'url',
        icon: <Code size={13} />,
        target: 'https://www.kriscent.in/product/kjob/',
        type: linkTypes.link.url
    },
    {
        linkTitle: 'Klassified',
        desc: 'Mobile App for Online Dating',
        logo: 'url',
        icon: <Code size={13} />,
        target: 'https://www.kriscent.com/product/klassified/',
        type: linkTypes.link.url
    },
    {
        linkTitle: 'K-Hostel',
        desc: '',
        logo: 'url',
        icon: <Code size={13} />,
        target: 'https://kriscent.com/product/khostel/',
        type: linkTypes.link.url
    },
    {
        linkTitle: 'Prabal Hospital ERP',
        desc: '',
        logo: 'url',
        icon: <Code size={13} />,
        target: 'https://kriscent.com/coming-soon.php',
        type: linkTypes.link.url
    },
    {
        linkTitle: 'Doctor Plus',
        desc: 'Platform for Sharing Short Videos',
        logo: 'url',
        icon: <Code size={13} />,
        target: 'https://www.kriscent.com/product/doctorplus/',
        type: linkTypes.link.url
    },
    {
        linkTitle: 'K-Appointment',
        desc: '',
        logo: 'url',
        icon: <Code size={13} />,
        target: 'https://www.kriscent.in/product/kappointment/',
        type: linkTypes.link.url
    },
    {
        linkTitle: 'K-Franchise ERP',
        desc: '',
        logo: 'url',
        icon: <Code size={13} />,
        target: 'https://kriscent.com/product/k-franchisee-erp/',
        type: linkTypes.link.url
    },
    {
        linkTitle: 'K-Billing',
        desc: '',
        logo: 'url',
        icon: <Code size={13} />,
        target: 'https://billing.enterprisesshree.com/',
        type: linkTypes.link.url
    },
    {
        linkTitle: 'K-HRM',
        desc: '',
        logo: 'url',
        icon: <Code size={13} />,
        target: 'https://www.kriscent.in/product/hrm/',
        type: linkTypes.link.url
    },
    {
        linkTitle: 'K-Matrimonial',
        desc: '',
        logo: 'url',
        icon: <Code size={13} />,
        target: 'https://www.kriscent.com/product/kmatrimonial/',
        type: linkTypes.link.url
    },
    {
        linkTitle: 'K-Matchmaker',
        desc: '',
        logo: 'url',
        icon: <Code size={13} />,
        target: 'https://kriscent.com/product/kmatchmaker/',
        type: linkTypes.link.url
    },
    {
        linkTitle: 'K-Community',
        desc: '',
        logo: 'url',
        icon: <Code size={13} />,
        target: 'https://kriscent.com/product/kcommunity/admin',
        type: linkTypes.link.url
    },
    {
        linkTitle: 'K-Loan',
        desc: '',
        logo: 'url',
        icon: <Code size={13} />,
        target: 'https://www.kriscent.com/product/kloan/',
        type: linkTypes.link.url
    },
    {
        linkTitle: 'K Samachar',
        desc: 'Connect and Manage All Social Media in One Platform',
        logo: 'url',
        icon: <Code size={13} />,
        target: 'https://www.kriscent.com/product/ksamachar/',
        type: linkTypes.link.url
    },
    {
        linkTitle: 'K Laundry',
        desc: '',
        logo: 'url',
        icon: <Code size={13} />,
        target: 'https://www.kriscent.com/product/klaundry/login.php',
        type: linkTypes.link.url
    },
    {
        linkTitle: 'K-Cab',
        desc: '',
        logo: 'url',
        icon: <Code size={13} />,
        target: 'https://kriscent.com/coming-soon.php',
        type: linkTypes.link.url
    },
    {
        linkTitle: 'Car Wash',
        desc: '',
        logo: 'url',
        icon: <Code size={13} />,
        target: 'https://www.kriscent.com/product/carwash/',
        type: linkTypes.link.url
    },
    {
        linkTitle: 'Car Wash Multivendor',
        desc: '',
        logo: 'url',
        icon: <Code size={13} />,
        target: 'https://kriscent.com/product/carwash-multivendor/',
        type: linkTypes.link.url
    },
    {
        linkTitle: 'K Parking',
        desc: '',
        logo: 'url',
        icon: <Code size={13} />,
        target: 'https://www.kriscent.com/product/kparking/',
        type: linkTypes.link.url
    },
    {
        linkTitle: 'K Real Estate',
        desc: '',
        logo: 'url',
        icon: <Code size={13} />,
        target: 'https://kriscent.com/product/krealestate/',
        type: linkTypes.link.url
    },
    {
        linkTitle: 'Kupon',
        desc: '',
        logo: 'url',
        icon: <Code size={13} />,
        target: 'https://kriscent.com/product/kupon/',
        type: linkTypes.link.url
    },
    {
        linkTitle: 'K Affiliation',
        desc: '',
        logo: 'url',
        icon: <Code size={13} />,
        target: 'https://kriscent.com/product/kaffiliate/',
        type: linkTypes.link.url
    },
    {
        linkTitle: 'K Cinema',
        desc: '',
        logo: 'url',
        icon: <Code size={13} />,
        target: 'https://kriscent.com/product/kcinema/',
        type: linkTypes.link.url
    },
    {
        linkTitle: 'K Social',
        desc: '',
        logo: 'url',
        icon: <Code size={13} />,
        target: 'https://www.kriscent.com/theme/k-social/',
        type: linkTypes.link.url
    },
    {
        linkTitle: 'K Travel',
        desc: '',
        logo: 'url',
        icon: <Code size={13} />,
        target: 'https://www.kriscent.com/theme/tours-n-travel/',
        type: linkTypes.link.url
    },
    {
        linkTitle: 'K Hotel',
        desc: '',
        logo: 'url',
        icon: <Code size={13} />,
        target: 'https://www.kriscent.com',
        type: linkTypes.link.url
    },
    {
        linkTitle: 'K-LMS (Lead Management System)',
        desc: '',
        logo: 'url',
        icon: <Code size={13} />,
        target: 'https://www.kriscent.com',
        type: linkTypes.link.url
    },
    {
        linkTitle: 'K Banking',
        desc: '',
        logo: 'url',
        icon: <Code size={13} />,
        target: 'https://www.kriscent.com',
        type: linkTypes.link.url
    },
    {
        linkTitle: 'K Services',
        desc: '',
        logo: 'url',
        icon: <Code size={13} />,
        target: 'https://www.kriscent.com',
        type: linkTypes.link.url
    },
];

export const SolutionsLinks = {
    linkTitle: 'Solutions',
    type: linkTypes.multipleLinkGroups,
    icon: <HandshakeIcon size={20} />,
    // links of all sections
    servicesLinks: {
        linkTitle: 'Services',
        type: linkTypes.multipleLinkGroups,
        icon: <LayoutGrid size={20} />,
        childrens: [
            {
                linkTitle: 'AI/ML Solutions',
                type: linkTypes.linkGroup,
                target: '/ai-solutions',
                icon: <Brain size={20} />,
                iconColor: "text-purple-600",
                sparkle: true,
                shortDesc: 'AI/ML solutions to automate tasks and improve efficiency.',
                childrens: []
            },
            {
                linkTitle: 'Software Development',
                type: linkTypes.linkGroup,
                target: '/web-solutions',
                icon: <Globe size={20} />,
                iconColor: "text-blue-700",
                shortDesc: 'Web design and development services for your needs.',
                childrens: []
            },
            {
                linkTitle: 'Digital Marketing',
                type: linkTypes.linkGroup,
                target: '/digital-marketing',
                icon: <Briefcase size={20} />,
                iconColor: "text-indigo-600",
                shortDesc: 'SEO, SMO, Influencer Marketing and Advertising services to boost your online presence.',
                childrens: []
            },
            {
                linkTitle: 'Hire Resources',
                type: linkTypes.linkGroup,
                target: '/hire-talent',
                icon: <FolderCode size={20} />,
                iconColor: "text-green-600",
                shortDesc: 'Dedicated developers to help you achieve your goals.',
                childrens: []
            }
        ]
    },
    businessLinks: {
        linkTitle: 'Businesses',
        type: linkTypes.linkGroup,
        target: '/',
        icon: <Users size={20} />,
        childrens: [
            { title: "Finance", img: `${ASSETS_BASE_URL}/tempAssets/image_45-removebg-preview%202.png?updatedAt=1727421991410`, cardColor: "#B48DAB" },
            { title: "Healthcare", img: `${ASSETS_BASE_URL}/tempAssets/image_10-removebg-preview%202.png?updatedAt=1727421990999`, cardColor: "#B85C6B" },
            { title: "Logistics", img: `${ASSETS_BASE_URL}/tempAssets/image_11-removebg-preview%202.png?updatedAt=1727421991349`, cardColor: "#3C447C" },
            { title: "Education", img: `${ASSETS_BASE_URL}/tempAssets/image_13-removebg-preview%202.png?updatedAt=1727421991346`, cardColor: "#746F75" },
            { title: "Travelling", img: `${ASSETS_BASE_URL}/tempAssets/image_12-removebg-preview%202.png?updatedAt=1727421991266`, cardColor: "#E5A427" },
            { title: "Fleet", img: `${ASSETS_BASE_URL}/tempAssets/image_14-removebg-preview%202.png?updatedAt=1727421991290`, cardColor: "#31313D" },
            { title: "Banking", img: `${ASSETS_BASE_URL}/tempAssets/162708-removebg-preview%201.webp?updatedAt=1727427337999`, cardColor: "#2E4AAE" },
            { title: "Food", img: `${ASSETS_BASE_URL}/tempAssets/image_15-removebg-preview%20(1)%201.webp?updatedAt=1727426525475`, cardColor: "#FF7324" },
            { title: "Jobs", img: `${ASSETS_BASE_URL}/tempAssets/8633_1-removebg-preview.webp?updatedAt=1727426975631`, cardColor: "#7E0000" },
        ]
    },
    technologiesLinks: {
        linkTitle: 'Technologies',
        type: linkTypes.multipleLinkGroups,
        icon: <Code size={20} />,
        childrens: [
            {
                linkTitle: 'Frontend Technologies',
                type: linkTypes.linkGroup,
                icon: <LayoutGrid size={20} />,
                childrens: [
                    {
                        linkTitle: 'Reactjs',
                        type: linkTypes.link,
                        target: '/technologies/react',
                        icon: <IconBrandReact size={13} />
                    },
                    {
                        linkTitle: 'Vuejs',
                        type: linkTypes.link,
                        target: '/technologies/vue',
                        icon: <IconBrandVue size={13} />
                    },
                    {
                        linkTitle: 'Nextjs',
                        type: linkTypes.link,
                        target: '/technologies/vue',
                        icon: <IconBrandNextjs size={13} />
                    },
                    {
                        linkTitle: 'Angular',
                        type: linkTypes.link,
                        target: '/technologies/angular',
                        icon: <IconBrandAngular size={13} />
                    },
                    {
                        linkTitle: 'HTML5/CSS3',
                        type: linkTypes.link,
                        target: '/technologies/html-css',
                        icon: <Globe size={13} />
                    },
                    {
                        linkTitle: 'Tailwind CSS',
                        type: linkTypes.link,
                        target: '/technologies/tailwind',
                        icon: <CodeIcon size={13} />
                    },
                    {
                        linkTitle: 'Bootstrap',
                        type: linkTypes.link,
                        target: '/technologies/bootstrap',
                        icon: <Layout size={13} />
                    }
                ]
            },
            {
                linkTitle: 'Backend Technologies',
                type: linkTypes.linkGroup,
                icon: <Server size={20} />,
                childrens: [
                    {
                        linkTitle: 'Node.js',
                        type: linkTypes.link,
                        target: '/technologies/nodejs',
                        icon: <IconBrandNodejs size={13} />
                    },
                    {
                        linkTitle: 'Express.js',
                        type: linkTypes.link,
                        target: '/technologies/express',
                        icon: <CodeIcon size={13} />
                    },
                    {
                        linkTitle: 'Django',
                        type: linkTypes.link,
                        target: '/technologies/django',
                        icon: <IconBrandPython size={13} />
                    },
                    {
                        linkTitle: 'Laravel',
                        type: linkTypes.link,
                        target: '/technologies/laravel',
                        icon: <IconBrandLaravel size={13} />
                    },
                    {
                        linkTitle: 'Ruby on Rails',
                        type: linkTypes.link,
                        target: '/technologies/rails',
                        icon: <Code2 size={13} />
                    },
                    {
                        linkTitle: 'PHP',
                        type: linkTypes.link,
                        target: '/technologies/php',
                        icon: <IconBrandPhp size={13} />
                    },
                    {
                        linkTitle: 'Other',
                        type: linkTypes.link,
                        target: '/technologies/php',
                        icon: <IconBrandPhp size={13} />
                    }
                ]
            },
            {
                linkTitle: 'Database Technologies',
                type: linkTypes.linkGroup,
                icon: <Database size={20} />,
                childrens: [
                    {
                        linkTitle: 'MySQL',
                        type: linkTypes.link,
                        target: '/technologies/mysql',
                        icon: <IconDatabase size={13} />
                    },
                    {
                        linkTitle: 'PostgreSQL',
                        type: linkTypes.link,
                        target: '/technologies/postgresql',
                        icon: <DatabaseBackup size={13} />
                    },
                    {
                        linkTitle: 'MongoDB',
                        type: linkTypes.link,
                        target: '/technologies/mongodb',
                        icon: <IconBrandMongodb size={13} />
                    },
                    {
                        linkTitle: 'Firebase',
                        type: linkTypes.link,
                        target: '/technologies/firebase',
                        icon: <IconBrandFirebase size={13} />
                    },
                    {
                        linkTitle: 'AWS',
                        type: linkTypes.link,
                        target: '/technologies/redis',
                        icon: <IconRosetteDiscount size={13} />
                    },
                    {
                        linkTitle: 'SQLite',
                        type: linkTypes.link,
                        target: '/technologies/sqlite',
                        icon: <IconDatabase size={13} />
                    },
                    {
                        linkTitle: 'Hosting',
                        type: linkTypes.link,
                        target: '/technologies/sqlite',
                        icon: <IconDatabase size={13} />
                    }
                ]
            },
            {
                linkTitle: 'AI & ML Technologies',
                type: linkTypes.linkGroup,
                icon: <Brain size={20} />, // Assuming you have an icon representing AI/ML
                childrens: [
                    {
                        linkTitle: 'TensorFlow',
                        type: linkTypes.link,
                        target: '/technologies/tensorflow',
                        icon: <IconBrain size={13} />
                    },
                    {
                        linkTitle: 'PyTorch',
                        type: linkTypes.link,
                        target: '/technologies/pytorch',
                        icon: <IconBrain size={13} />
                    },
                    {
                        linkTitle: 'Scikit-learn',
                        type: linkTypes.link,
                        target: '/technologies/scikit-learn',
                        icon: <IconBrain size={13} />
                    },
                    {
                        linkTitle: 'OpenCV',
                        type: linkTypes.link,
                        target: '/technologies/opencv',
                        icon: <IconBrain size={13} />
                    },
                    {
                        linkTitle: 'Keras',
                        type: linkTypes.link,
                        target: '/technologies/keras',
                        icon: <IconBrain size={13} />
                    },
                    {
                        linkTitle: 'Natural Language Processing (NLP)',
                        type: linkTypes.link,
                        target: '/technologies/nlp',
                        icon: <IconBrain size={13} />
                    }
                ]
            }
        ]
    },
    readyProductsLinks: {
        linkTitle: 'On Demand Solutions',
        type: linkTypes.linkGroup,
        icon: <UserPlus size={20} />,
        childrens: readyProducts
    },
    staffAugmentationLinks: {
        linkTitle: 'Staff Augmentations',
        type: linkTypes.multipleLinkGroups,
        icon: <SearchCheck size={20} />,
        childrens: [
            {
                linkTitle: 'React/Next Developers',
                type: linkTypes.link,
                target: '/hire-talent',
                icon: <IconBrandReact size={16} />
            },
            {
                linkTitle: 'Laravel Developers',
                type: linkTypes.link,
                target: '/hire-talent',
                icon: <IconBrandLaravel size={16} />
            },
            {
                linkTitle: 'Node.js Developers',
                type: linkTypes.link,
                target: '/hire-talent',
                icon: <IconBrandNodejs size={16} />
            },
            {
                linkTitle: 'Flutter Developers',
                type: linkTypes.link,
                target: '/hire-talent',
                icon: <IconBrandFlutter size={16} />
            },
            {
                linkTitle: 'React Native Developers',
                type: linkTypes.link,
                target: '/hire-talent',
                icon: <IconBrandReactNative size={16} />
            },
            {
                linkTitle: 'UI/UX Designers',
                type: linkTypes.link,
                target: '/hire-talent',
                icon: <IconPalette size={16} />
            },
            {
                linkTitle: 'DevOps Engineers',
                type: linkTypes.link,
                target: '/hire-talent',
                icon: <IconSettings size={16} />
            },
            {
                linkTitle: 'Digital Marketing Experts',
                type: linkTypes.link,
                target: '/hire-talent',
                icon: <IconAnalyze size={16} />
            },
            {
                linkTitle: 'SEO/SMO Experts',
                type: linkTypes.link,
                target: '/hire-talent',
                icon: <IconAnalyze size={16} />
            }
        ]
    },
    // Add other links groups here...
}

export const PortfolioLinksConfig = {
    linkTitle: 'Portfolio',
    type: linkTypes.link,
    target: '/portfolio',
    icon: <Briefcase size={20} />,
}