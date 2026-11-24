"use client";

import { ASSETS_BASE_URL } from "@/lib/variables";

export interface clientsType {
    name: string;
    logo: string;
    url?: string;
    tagline?: string;
    type: "level1" | "level2" | "level3"
}

export const premiumClients: clientsType[] = [
    {
        name: 'Mukundra Baaghraj Resort',
        logo: `${ASSETS_BASE_URL}/tempAssets/clientsImages/mukundra.webp`,
        url: 'https://mukundrabaaghrajretreat.com/',
        tagline: "Luxury Resort",
        type: "level1"
    },
    {
        name: 'Flixmates',
        logo: `${ASSETS_BASE_URL}/tempAssets/clientsImages/flixmates.png`,
        url: "https://flixmates.com/",
        tagline: "Bollywood ka linkedin",
        type: "level1"
    },
    {
        name: 'Divine Touch',
        logo: `${ASSETS_BASE_URL}/tempAssets/clientsImages/divinetouch.webp`,
        url: 'https://divinetouch.info/',
        tagline: "Divine touch ",
        type: "level1"
    },
    {
        name: 'Chabi Digital Solutions',
        logo: `${ASSETS_BASE_URL}/tempAssets/clientsImages/chabi-updated.webp`,
        url: 'https://mychabi.app/',
        tagline: "Fintech Application",
        type: "level1"
    },
    {
        name: 'Vjoy World',
        logo: `${ASSETS_BASE_URL}/tempAssets/clientsImages/vjoy.png`,
        url: "https://vjoyworld.com/index",
        tagline: "Travel booking portal",
        type: "level1"
    },
    {
        name: 'TSBOS',
        logo: `${ASSETS_BASE_URL}/tempAssets/clientsImages/tsbos.webp`,
        url: 'https://thesommnathbhattacharyaa.in/',
        tagline: "The Sommnath Bhattacharyaa Occult Sciences",
        type: "level1"
    },
    {
        name: 'RCIMS',
        logo: `${ASSETS_BASE_URL}/tempAssets/clientsImages/rcims-logo.webp`,
        // url: "https://auraquestt.world/",
        tagline: "Railway Contract Management System",
        type: "level1"
    },
    {
        name: 'RGCSM',
        logo: `${ASSETS_BASE_URL}/tempAssets/clientsImages/rgcsm.png`,
        url: "https://www.rgcsm.org/",
        tagline: "Education Franchise Portal",
        type: "level1"
    },
    {
        name: 'Orphin',
        logo: `${ASSETS_BASE_URL}/tempAssets/clientsImages/orphin.png`,
        url: 'https://orphin.in/',
        tagline: "Online Education Portal",
        type: "level1"
    },
    {
        name: 'Ferranza',
        logo: `${ASSETS_BASE_URL}/tempAssets/clientsImages/ferranza.webp`,
        url: 'https://ferranzaev.in/',
        tagline: "EV buying platform",
        type: "level1"
    },
    {
        name: 'Yelsa Tech',
        logo: `${ASSETS_BASE_URL}/tempAssets/clientsImages/yelsa.webp`,
        url: "https://yelsatech.in/",
        tagline: "Solar Services",
        type: "level1"
    },
    {
        name: 'ShopAd',
        logo: `${ASSETS_BASE_URL}/tempAssets/clientsImages/shopAd-Transparent.webp`,
        url: 'https://shopad.in/',
        tagline: "Ad Listing Platform",
        type: "level1"
    },
    {
        name: 'Shree Falodi Finance',
        logo: `${ASSETS_BASE_URL}/tempAssets/clientsImages/shree-falodi.png`,
        url: 'https://shreefalodifinpro.com/',
        tagline: "Finance Management",
        type: "level1"
    },
    {
        name: 'Shree Falodi Skill Academy',
        logo: `${ASSETS_BASE_URL}/tempAssets/clientsImages/shree-falodi-skill.png`,
        url: 'https://shreefalodiskillacademy.com/',
        type: "level1"
    },
    {
        name: 'RGCSM Publications',
        logo: `${ASSETS_BASE_URL}/tempAssets/clientsImages/rgcsm-publications.png`,
        url: 'https://www.rgcsm.org/rgcsm-publications.php',
        tagline: "Books & Publications",
        type: "level1"
    },
    {
        name: 'Shree Shree Micro serve Foundation',
        logo: `${ASSETS_BASE_URL}/tempAssets/clientsImages/msf.png`,
        url: "https://shreeshreemsf.com/",
        tagline: "Loan Management System",
        type: "level1"
    },
    {
        name: 'Paras',
        logo: `${ASSETS_BASE_URL}/tempAssets/clientsImages/paras.png`,
        url: "",
        tagline: "Travel Booking",
        type: "level1"
    },
    {
        name: 'Gurukul Engineering College',
        logo: `${ASSETS_BASE_URL}/tempAssets/clientsImages/gurukul-eng.png`,
        url: 'https://www.gurukulkota.com/',
        tagline: "Engineering College",
        type: "level1"
    },
    {
        name: 'Gurukul Pharmacy College',
        logo: `${ASSETS_BASE_URL}/tempAssets/clientsImages/gurukul-pharmacy.png`,
        // url: 'https://www.gurukulpharmacykota.com/',
        type: "level1"
    },
    {
        name: 'PMFME',
        logo: `${ASSETS_BASE_URL}/tempAssets/clientsImages/pmfme.webp`,
        url: '',
        tagline: "Pradhan Mantri Formalisation of Micro Food Processing Enterprises",
        type: "level1"
    },
    {
        name: 'Medisaver',
        logo: `${ASSETS_BASE_URL}/tempAssets/clientsImages/medisaver.webp`,
        url: 'https://medisaver.in/',
        tagline: "Healthcare",
        type: "level1"
    },
    {
        name: 'Kamal Fincap',
        logo: `${ASSETS_BASE_URL}/tempAssets/clientsImages/kamal.png`,
        url: "https://www.kamalfincap.com/",
        tagline: "Insurance Portal",
        type: "level1"
    },
    {
        name: 'Mapl Security',
        logo: `${ASSETS_BASE_URL}/tempAssets/clientsImages/mapl.png`,
        url: "https://maplbharat.com/",
        tagline: "Security Services",
        type: "level1"
    },
    {
        name: 'CADCAM Experts',
        logo: `${ASSETS_BASE_URL}/tempAssets/clientsImages/cadcam.png`,
        url: 'https://www.caddexperts.com/',
        type: "level1",
        tagline: "Education Franchise System"
    },
    {
        name: 'Auraquestt',
        logo: `${ASSETS_BASE_URL}/tempAssets/clientsImages/aq.png`,
        // url: "https://auraquestt.world/",
        tagline: "Astrology Consultancy Portal",
        type: "level1"
    },
    {
        name: 'IGCSM',
        logo: `${ASSETS_BASE_URL}/tempAssets/clientsImages/igcsm.png`,
        url: 'https://igcsm.com/',
        tagline: "Education Franchise Portal",
        type: "level1"
    },
    {
        name: 'SSI',
        logo: `${ASSETS_BASE_URL}/tempAssets/clientsImages/ssi.png`,
        url: 'https://ssikota.com/',
        type: "level1"
    },
    {
        name: 'AVIT Marketing',
        logo: `${ASSETS_BASE_URL}/tempAssets/clientsImages/avit.png`,
        url: 'https://www.avitmarketing.com/',
        type: "level1"
    },
    {
        name: 'Gudz',
        logo: `${ASSETS_BASE_URL}/tempAssets/clientsImages/gudz.png`,
        url: "https://gudz.in/",
        tagline: "Fleet Management Portal",
        type: "level1"
    },
    {
        name: 'Kashyap Export',
        logo: `${ASSETS_BASE_URL}/tempAssets/clientsImages/kexport.png`,
        url: "https://www.kashyapexport.com/",
        tagline: "Stones Export",
        type: "level1"
    },
    {
        name: 'Sudha Hospital',
        logo: `${ASSETS_BASE_URL}/tempAssets/clientsImages/sudha.png`,
        url: 'https://sudhahospitalkota.com/',
        tagline: "Hospital Management",
        type: "level1"
    },

    {
        name: 'RGCSM Online',
        logo: `${ASSETS_BASE_URL}/tempAssets/clientsImages/rgcsm-online.png`,
        url: 'https://www.rgcsm.org/online/course.php',
        type: "level1"
    },






















    // level 2 clients here
    {
        name: 'Inbrix',
        logo: `${ASSETS_BASE_URL}/tempAssets/clientsImages/inbrix.webp`,
        url: 'https://smib.in/',
        tagline: "Influencer Marketing Platform",
        type: "level2"
    },
    {
        name: 'HR Walla',
        logo: `${ASSETS_BASE_URL}/tempAssets/clientsImages/hr.png`,
        url: '',
        type: "level2"
    },
    {
        name: 'Get Max Value',
        logo: `${ASSETS_BASE_URL}/tempAssets/clientsImages/gmv.png`,
        url: "",
        tagline: "Scrap Management",
        type: "level2"
    },
    {
        name: 'Bhartiyastro',
        logo: `${ASSETS_BASE_URL}/tempAssets/clientsImages/bhartiya.png`,
        url: "https://bharatiyastro.com/",
        tagline: "Astrology Consultancy Portal",
        type: "level2"
    },
    {
        name: 'Ishvaa Life',
        logo: `${ASSETS_BASE_URL}/tempAssets/clientsImages/ishvaa.png`,
        url: "https://www.ishvaalife.com/",
        tagline: "Astrology Consultancy Portal",
        type: "level2"
    },
    {
        name: 'APTH',
        logo: `${ASSETS_BASE_URL}/tempAssets/clientsImages/apth.png`,
        url: 'https://apth.in/',
        tagline: "Healthcare",
        type: "level1"
    },

    {
        name: 'Luriox Stones',
        logo: `${ASSETS_BASE_URL}/tempAssets/clientsImages/luriox.png`,
        // url: 'https://lurioxstones.world/',
        tagline: "Jwellery Marketplace",
        type: "level2"
    },

    {
        name: 'Special Coverage News',
        logo: `${ASSETS_BASE_URL}/tempAssets/clientsImages/Special-covrage.png`,
        url: 'https://www.specialcoveragenews.in/',
        type: "level2"
    },
    {
        name: 'Khush Jeevan',
        logo: `${ASSETS_BASE_URL}/tempAssets/clientsImages/khush.png`,
        url: 'https://khushjeevan.com/',
        tagline: "Astrology Consultancy Portal",
        type: "level2"
    },
    {
        name: 'Shiv Shakti Hospital',
        logo: `${ASSETS_BASE_URL}/tempAssets/clientsImages/ssh.png`,
        url: 'https://shivshaktihospital.co.in/',
        type: "level2"
    },

    {
        name: 'Antrose',
        logo: `${ASSETS_BASE_URL}/tempAssets/clientsImages/antrose.png`,
        url: 'https://antrorse.org/',
        tagline: "Hosting Software",
        type: "level2"
    },

    {
        name: 'Indira International School',
        logo: `${ASSETS_BASE_URL}/tempAssets/clientsImages/indraLogo.png`,
        url: 'https://iiskota.com/',
        type: "level2"
    },
    {
        name: 'MudraCare',
        logo: `${ASSETS_BASE_URL}/tempAssets/clientsImages/mudracare.png`,
        // url: "https://mudracare.co.in/",
        tagline: "E-commerce",
        type: "level2"
    },
    {
        name: 'KOBAI',
        logo: `${ASSETS_BASE_URL}/tempAssets/clientsImages/kobai.png`,
        //url: 'https://kobai.in/',
        tagline: "E-commerce",
        type: "level2"
    },



]

export const allClients = [

    { name: 'RGCSM Skills', logo: `${ASSETS_BASE_URL}/tempAssets/clientsImages/rgcsm-skills.png`, url: 'https://www.rgcsmskills.org/', type: "level3" },
    { name: 'Shrinath Travels', logo: `${ASSETS_BASE_URL}/tempAssets/clientsImages/shrinath-travels.png`, url: '', type: "level3" },
    { name: 'Astromaya', logo: `${ASSETS_BASE_URL}/tempAssets/clientsImages/astromaya.png`, url: '', type: "level3" },
    { name: 'AICEE', logo: `${ASSETS_BASE_URL}/tempAssets/clientsImages/aicee.png`, url: '', type: "level3" },
    { name: 'CICA', logo: `${ASSETS_BASE_URL}/tempAssets/clientsImages/cica.png`, url: 'https://cica.in/', type: "level3" },
    { name: 'SGN Garden Kota', logo: `${ASSETS_BASE_URL}/tempAssets/clientsImages/SGN.png`, url: '', type: "level3" },
    { name: 'State Bank Naracas', logo: `${ASSETS_BASE_URL}/tempAssets/clientsImages/State-bank.png`, url: '', type: "level3" },
    { name: 'Amicis Hub', logo: `${ASSETS_BASE_URL}/tempAssets/clientsImages/amicis.png`, url: 'https://www.edtechsathi.com/index.php', tagline: "Education Portal", type: "level3" },
    { name: 'BSN School', logo: `${ASSETS_BASE_URL}/tempAssets/clientsImages/bsn.png`, url: 'https://bsnacademy.edu.in/home.php', type: "level3" },
    { name: 'Amicis Study Overseas', logo: `${ASSETS_BASE_URL}/tempAssets/clientsImages/ami.png`, url: 'https://amicisstudyoverseas.com/', type: "level3" },
    { name: 'Mnandi', logo: `${ASSETS_BASE_URL}/tempAssets/clientsImages/mnandi.png`, url: '', type: "level3" },
    { name: 'Bang A Job', logo: `${ASSETS_BASE_URL}/tempAssets/clientsImages/ajob.png`, url: 'https://bangajob.com/', type: "level3" },
    { name: 'SQube', logo: `${ASSETS_BASE_URL}/tempAssets/clientsImages/sqube.png`, url: 'https://sqube.org/', type: "level3" },
    { name: 'Elkithron', logo: `${ASSETS_BASE_URL}/tempAssets/clientsImages/elkithron.png`, url: 'https://www.elkithron.com/', type: "level3" },
    { name: 'DeliFresh', logo: `${ASSETS_BASE_URL}/tempAssets/clientsImages/deli.png`, url: '', type: "level3" },
    { name: 'Galingua Academy', logo: `${ASSETS_BASE_URL}/tempAssets/clientsImages/ga.png`, url: 'https://www.galingua.com', type: "level3" },
    { name: 'Odisa Consumer Products Distribution Federation', logo: `${ASSETS_BASE_URL}/tempAssets/clientsImages/odisa.png`, url: '', type: "level3" },
    { name: 'Wallskart', logo: `${ASSETS_BASE_URL}/tempAssets/clientsImages/Wallskart.png`, url: '', type: "level3" },
    { name: 'Black Buddha', logo: `${ASSETS_BASE_URL}/tempAssets/clientsImages/black.png`, url: '', type: "level3" },
    { name: 'Agrawal Stones ', logo: `${ASSETS_BASE_URL}/tempAssets/clientsImages/a.png`, url: '', type: "level3" },
    { name: 'Rumba Jobs', logo: `${ASSETS_BASE_URL}/tempAssets/clientsImages/rumba.png`, url: '', type: "level3" },
    { name: 'Kota Fresh', logo: `${ASSETS_BASE_URL}/tempAssets/clientsImages/kota.png`, url: 'https://kotafresh.com/', type: "level3" },
    { name: 'Aditya Housing', logo: `${ASSETS_BASE_URL}/tempAssets/clientsImages/aditya-housing.png`, url: '', type: "level3" },
    { name: 'IERO', logo: `${ASSETS_BASE_URL}/tempAssets/clientsImages/iero.png`, url: '', type: "level3" },
    { name: 'Deal Mart', logo: `${ASSETS_BASE_URL}/tempAssets/clientsImages/deal-mart.png`, url: '', type: "level3" },
    { name: 'DJ Sir Classes', logo: `${ASSETS_BASE_URL}/tempAssets/clientsImages/djsir.png`, url: '', type: "level3" },
    { name: 'JMD Post Control', logo: `${ASSETS_BASE_URL}/tempAssets/clientsImages/jmd.png`, url: '', type: "level3" },
    { name: 'Laureatte Public School', logo: `${ASSETS_BASE_URL}/tempAssets/clientsImages/laureatte.png`, url: '', type: "level3" },
    { name: 'MBA Packers', logo: `${ASSETS_BASE_URL}/tempAssets/clientsImages/mba-packers.png`, url: '', type: "level3" },
    { name: 'Shiksha Lo', logo: `${ASSETS_BASE_URL}/tempAssets/clientsImages/shiksha.png`, url: '', type: "level3" },
    { name: 'Suhana Stone', logo: `${ASSETS_BASE_URL}/tempAssets/clientsImages/suhana-stone.png`, url: '', type: "level3" },
    { name: 'The Stone Mill', logo: `${ASSETS_BASE_URL}/tempAssets/clientsImages/the-stone-mile.png`, url: '', type: "level3" },
    { name: 'TT Hospital', logo: `${ASSETS_BASE_URL}/tempAssets/clientsImages/tt-hospital.png`, url: '', type: "level3" },
    { name: 'Aiims Subsidiary', logo: `${ASSETS_BASE_URL}/tempAssets/clientsImages/Aiims-subsidiary.png`, url: '', type: "level3" },
    { name: 'AWO Mart', logo: `${ASSETS_BASE_URL}/tempAssets/clientsImages/Awo.png`, url: '', type: "level3" },
    { name: 'BSI', logo: `${ASSETS_BASE_URL}/tempAssets/clientsImages/BSI.png`, url: '', type: "level3" },
    { name: 'Fatehpuria', logo: `${ASSETS_BASE_URL}/tempAssets/clientsImages/fatehpuria.png`, url: '', type: "level3" },
    { name: 'Indian excelence awards', logo: `${ASSETS_BASE_URL}/tempAssets/clientsImages/indiam-excelence-awards.png`, url: '', type: "level3" },
    { name: 'Sabji Tarkaari', logo: `${ASSETS_BASE_URL}/tempAssets/clientsImages/Sabji-Tarkaari.png`, url: '', type: "level3" },

    // removed clients

    // { name: 'ARK', logo: 'tempAssets/clientsImages/ark.png', url: '' },
    // { name: 'AMICIS', logo: 'tempAssets/clientsImages/ami.png', url: 'https://amicisstudyoverseas.com/' },
    // { name: 'Academy Kota', logo: 'tempAssets/clientsImages/academy-kota.png', url: '' },
    // { name: 'Achiever', logo: 'tempAssets/clientsImages/achiever.png', url: 'https://g.co/kgs/ihHJrjh' },
    // { name: 'Bright', logo: 'tempAssets/clientsImages/bright.png', url: '' },
    // { name: 'Cilantro', logo: 'tempAssets/clientsImages/cilantro.png', url: '' },
    // { name: 'The fitness Mart', logo: 'tempAssets/clientsImages/fitness.png', url: '' },
    // { name: 'Pure', logo: 'tempAssets/clientsImages/pure.png', url: '' },
    // { name: 'Car Clean', logo: 'tempAssets/clientsImages/carclean.png', url: '' },
    // { name: 'Shiddhivinayak', logo: 'tempAssets/clientsImages/siddhivinayak.png', url: '' },
    // { name: 'Shiksha Lo', logo: 'tempAssets/clientsImages/shiksha.png', url: '' },
    // { name: 'Bloom kart', logo: 'tempAssets/clientsImages/BK.png', url: '' },
    // { name: 'Cute lady', logo: 'tempAssets/clientsImages/Cute-lady.png', url: '' },
    // { name: 'Escort', logo: 'tempAssets/clientsImages/Escort.png', url: '' },
    // { name: 'Jaya Food', logo: 'tempAssets/clientsImages/Jaya-Food.png', url: '' },
    // { name: 'Mera sham', logo: 'tempAssets/clientsImages/mera-sham.png', url: '' },
    // { name: 'Search Doctor', logo: 'tempAssets/clientsImages/search-doctor.png', url: '' },
    // { name: 'Shrgar Exhibition', logo: 'tempAssets/clientsImages/Shrgar-Exhibition.png', url: '' },
    // // { name: 'Bloom kart', logo: 'tempAssets/clientsImages/Special-covrage.png', url: '' },
    // { name: 'We Joy', logo: 'tempAssets/clientsImages/We-Joy.png', url: '' },
    // { name: 'Wonder Brain', logo: 'tempAssets/clientsImages/Wondor-Brain.png', url: '' },
]