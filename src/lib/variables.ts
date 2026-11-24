export interface PageMetadata {
    title: string;
    description: string;
    keywords: string;

    ogUrl?: string;
    ogImage?: string
}

// Define a new interface for the overall metadata structure
// export interface SiteMetadata {
//     [key: string]: PageMetadata; // This allows for dynamic keys with PageMetadata type
// }

export interface SiteMetadata {
    indexPage: PageMetadata;
    aboutPage: PageMetadata;
    clientsPage: PageMetadata;
    careerPage: PageMetadata;
    ourCulturePage: PageMetadata;
    contactPage: PageMetadata;
    awardsPage: PageMetadata;
    servicesPage: PageMetadata;
    mediaDesignServicesPage: PageMetadata;
    webSolutionsPage: PageMetadata;
    mobileSolutionsPage: PageMetadata;
    digitalMarketingPage: PageMetadata;
    aiMlsolutionsPage: PageMetadata;
    consultancyPage: PageMetadata;
    hireTalentPage: PageMetadata;
    quotationPage: PageMetadata;
    termsAndConditionsPage: PageMetadata;
    agreementPage: PageMetadata;
    faqPage: PageMetadata;
    kirpPage: PageMetadata;
    portfolioPage: PageMetadata;
    technologiesPage: PageMetadata;
    testimonialsPage: PageMetadata;
    gameDevPage: PageMetadata;
    CaseStudyRgcsm: PageMetadata;
    CaseStudyAuraquestt: PageMetadata;
    CaseStudyGudz: PageMetadata;
    CaseStudyFlixmates: PageMetadata;
    CaseStudyGetMaxValue: PageMetadata;
    CaseStudyLurioxStones: PageMetadata;
    CaseStudyParasTravels: PageMetadata;
    CaseStudyChabi: PageMetadata;
    CaseStudyTSBOS: PageMetadata;
    CaseStudyMediSaver: PageMetadata;
    lmsLandingPage: PageMetadata;
    companyProfilePage: PageMetadata;
    aiCallingPage: PageMetadata;

    sitemap: PageMetadata;
}

//export const API_ENDPOINT = "https://kriscent.kriscenttechnohub.in/K_GOD";
export const API_ENDPOINT = "https://kriscent.in/K-GOD";
export const ASSETS_BASE_URL = "https://ik.imagekit.io/qk2ww553c"

// custom titles, desc and keywords for each page in the website.
export const metadata: SiteMetadata = {
    indexPage: {
        title: "Kriscent - Trusted One-Stop Destination for IT Solutions",
        description: "Kriscent is CMMI Level 3 approved, provides IT services like web development, software solutions, and digital marketing. Serving India, UK, Dubai & beyond.",
        keywords: "IT services, web development India, software development Dubai, digital marketing USA, IT solutions for business growth, CMMI Level 3 certified company, IT services in India, digital marketing Australia, web development for startups",
        ogImage: `${ASSETS_BASE_URL}/tempAssets/OgImages/demo/home.png?updatedAt=1737552601923`,
        ogUrl: "https://www.kriscent.in",

    },
    aboutPage: {
        title: "About Kriscent | Leading IT Solutions Provider",
        description: "Kriscent offers IT consulting, web development, and tech solutions for businesses in India, UAE, USA, and beyond.",
        keywords: "IT consulting services, business technology solutions, IT services in UAE, software solutions for businesses, expert IT services India, global IT solutions provider",
        ogImage: `${ASSETS_BASE_URL}/tempAssets/OgImages/demo/about.png?updatedAt=1737552602654`,
        ogUrl: "https://www.kriscent.in/about"
    },
    clientsPage: {
        title: "Our Clients | IT Solutions Across Industries",
        description: "We deliver scalable IT solutions for businesses in India, USA, UK, Dubai, and other international markets.",
        keywords: "IT support, software solutions, enterprise IT services, technology consulting, business growth, global IT services",
        ogImage: `${ASSETS_BASE_URL}/tempAssets/OgImages/demo/clients.png?updatedAt=1737552601590`,
        ogUrl: "https://www.kriscent.in/clients"
    },
    careerPage: {
        title: "Join Kriscent | Careers in IT & Software Development",
        description: "Explore IT consulting, software development, and tech careers in India, USA, and UK.",
        keywords: "IT jobs, software developer careers, IT consulting careers, tech jobs in India, careers in IT USA, tech jobs in UK",
        ogImage: `${ASSETS_BASE_URL}/tempAssets/OgImages/demo/clients.png?updatedAt=1737552601590`,
        ogUrl: "https://www.kriscent.in/career"
    },
    ourCulturePage: {
        title: "Work Culture At Kriscent Techno Hub",
        description: "Experience a supportive work culture at the best IT company in Kota, Rajasthan.",
        keywords: "IT company in Kota Rajasthan, best IT consultancy in Kota, technology solutions for startups",
        ogImage: "${ASSETS_BASE_URL}/tempAssets/OgImages/demo/life%20at%20kriscent.png?updatedAt=1737552601535",
        ogUrl: "https://www.kriscent.in/our-culture"
    },
    contactPage: {
        title: "Contact Kriscent | IT Solutions for Your Business",
        description: "Get web development, software solutions, and digital marketing services for businesses worldwide.",
        keywords: "contact IT company, web development consultation, IT service provider, business IT solutions, IT consulting Dubai, software development USA",
        ogImage: `${ASSETS_BASE_URL}/tempAssets/OgImages/demo/contact.png?updatedAt=1737552600516`,
        ogUrl: "https://www.kriscent.in/contact"
    },
    awardsPage: {
        title: "Awards & Recognitions | Kriscent Techno Hub",
        description: "Recognized for excellence in IT services and custom software development solutions.",
        keywords: "best IT company in Rajasthan, top IT services provider in India, affordable IT companies",
        ogImage: `${ASSETS_BASE_URL}/tempAssets/OgImages/demo/achievement.png?updatedAt=1737552602664`,
        ogUrl: "https://www.kriscent.in/awards"
    },
    servicesPage: {
        title: "IT Services & Software Development | Kriscent",
        description: "Kriscent offers IT consulting, software development, and digital marketing for businesses globally.",
        keywords: "software development services, IT consulting India, digital marketing solutions UK, business automation solutions, IT services in South Africa, web development USA",
        ogImage: `${ASSETS_BASE_URL}/tempAssets/OgImages/demo/services.png?updatedAt=1737552602669`,
        ogUrl: "https://www.kriscent.in/services"
    },
    mediaDesignServicesPage: {
        title: "Media Design Services | Kriscent Techno Hub",
        description: "Offering custom web design solutions and branding services to elevate your business.",
        keywords: "custom web design solutions, professional web design company in India, affordable website design for startups",
        ogImage: `${ASSETS_BASE_URL}/tempAssets/OgImages/demo/home.png?updatedAt=1737552601923`,
        ogUrl: "https://www.kriscent.in/design-services"
    },
    webSolutionsPage: {
        title: "Web Solutions | Kriscent Techno Hub",
        description: "Providing website development services in India tailored for e-commerce and startups.",
        keywords: "website development services India, IT services for e-commerce businesses, web design company in Kota",
        ogImage: `${ASSETS_BASE_URL}/tempAssets/OgImages/demo/home.png?updatedAt=1737552601923`,
        ogUrl: "https://www.kriscent.in/web-solutions"
    },
    mobileSolutionsPage: {
        title: "Mobile App Development | AI-Powered Solutions",
        description: "Kriscent offers AI-powered mobile app development for businesses in India, USA, Australia, and beyond.",
        keywords: "mobile app development, AI solutions India, app development USA, business automation mobile apps, custom mobile apps South Africa, mobile development New Zealand",
        ogImage: `${ASSETS_BASE_URL}/tempAssets/OgImages/demo/home.png?updatedAt=1737552601923`,
        ogUrl: "https://www.kriscent.in/app-solutions"
    },
    digitalMarketingPage: {
        title: "Digital Marketing Services | SEO, PPC, Social Media",
        description: "Boost your online presence with SEO, PPC, and social media marketing for businesses worldwide.",
        keywords: "SEO services India, PPC advertising USA, social media marketing Australia, online marketing services UK, SEO agency Dubai, digital branding services",
        ogImage: `${ASSETS_BASE_URL}/tempAssets/OgImages/demo/home.png?updatedAt=1737552601923`,
        ogUrl: "https://www.kriscent.in/digital-marketing"
    },
    aiMlsolutionsPage: {
        title: "AI & ML Solutions | Smart Business Innovations",
        description: "Leverage AI and machine learning for data-driven decision-making and business automation.",
        keywords: "AI consulting, machine learning solutions, business automation, AI-driven analytics, emerging technology, AI services India, ML solutions USA",
        ogImage: `${ASSETS_BASE_URL}/tempAssets/OgImages/demo/home.png?updatedAt=1737552601923`,
        ogUrl: "https://www.kriscent.in/ai-solutions"
    },
    aiCallingPage: {
        title: "AI Calling Agents for Banks & NBFCs | Kriscent",
        description:
            "Deploy intelligent AI calling agents for banks and NBFCs. Automate EMI reminders, loan lead qualification, customer support, payment follow-ups, renewals, and more with multilingual AI voice agents.",
        keywords:
            "AI calling agents, AI voice agents, BFSI AI agents, banking AI calling, NBFC voice agents, EMI reminder calls, loan lead qualification, AI customer support, payment follow-up automation, multilingual voice AI, automated collection calls, AI telecalling agents",
        ogImage: `${ASSETS_BASE_URL}/tempAssets/OgImages/demo/home.png?updatedAt=1737552601923`,
        ogUrl: "https://www.kriscent.in/ai-solutions/ai-calling-agents"
    },
    consultancyPage: {
        title: "Consultancy | Kriscent Techno Hub",
        description: "Providing technology consultancy services to help businesses navigate their challenges.",
        keywords: "business consultancy, leading IT consultancy in India, technology solutions for startups",
        ogImage: `${ASSETS_BASE_URL}/tempAssets/OgImages/demo/home.png?updatedAt=1737552601923`,
        ogUrl: "https://www.kriscent.in/consultancy"
    },
    hireTalentPage: {
        title: "Hire Talent | Kriscent Techno Hub",
        description: "Connect with top talent through our affordable hiring solutions for businesses.",
        keywords: "hire talent, affordable IT companies in India, IT firms near me",
        ogImage: `${ASSETS_BASE_URL}/tempAssets/OgImages/demo/home.png?updatedAt=1737552601923`,
        ogUrl: "https://www.kriscent.in/hire-talent"
    },
    quotationPage: {
        title: "Get a Free Quotation | Kriscent Techno Hub",
        description: "Request a free quotation and discover how we can help grow your business with IT solutions.",
        keywords: "free quotation, grow your business with IT solutions, online solutions for business expansion",
        ogImage: `${ASSETS_BASE_URL}/tempAssets/OgImages/demo/home.png?updatedAt=1737552601923`,
        ogUrl: "https://www.kriscent.in/quotation"
    },
    termsAndConditionsPage: {
        title: "Terms and Conditions | Kriscent Techno Hub",
        description: "Review our terms and conditions for using Kriscent Techno Hub's services effectively.",
        keywords: "terms and conditions, service policies, privacy policy, user responsibilities",
        ogImage: `${ASSETS_BASE_URL}/tempAssets/OgImages/demo/home.png?updatedAt=1737552601923`,
        ogUrl: "https://www.kriscent.in/terms-conditions"
    },
    agreementPage: {
        title: "Agreement | Kriscent Techno Hub",
        description: "Review the service agreement outlining the terms and responsibilities for our clients.",
        keywords: "service agreement, terms of service, client responsibilities, agreement policies",
        ogImage: `${ASSETS_BASE_URL}/tempAssets/OgImages/demo/home.png?updatedAt=1737552601923`,
        ogUrl: "https://www.kriscent.in/agreement"
    },
    faqPage: {
        title: "Frequently Asked Questions | Kriscent Techno Hub",
        description: "Find answers to common questions about our IT services and digital marketing solutions.",
        keywords: "FAQ, IT services, digital marketing, customer support, kriscent techno hub",
        ogImage: `${ASSETS_BASE_URL}/tempAssets/OgImages/demo/home.png?updatedAt=1737552601923`,
        ogUrl: "https://www.kriscent.in/faq"
    },
    kirpPage: {
        title: "Kriscent Innovative Research Program",
        description: "Leveraging data-driven insights to help businesses grow sustainably with technology.",
        keywords: "data-driven insights, innovative strategies, business growth with digital marketing",
        ogImage: `${ASSETS_BASE_URL}/tempAssets/OgImages/demo/home.png?updatedAt=1737552601923`,
        ogUrl: "https://www.kriscent.in/kirp"
    },
    portfolioPage: {
        title: "Portfolio | IT Projects & Case Studies",
        description: "Explore our success stories in software development, digital marketing, and IT solutions.",
        keywords: "IT portfolio, case studies, successful projects, software solutions, web development portfolio, IT services USA, digital solutions UK",
        ogImage: `${ASSETS_BASE_URL}/tempAssets/OgImages/demo/home.png?updatedAt=1737552601923`,
        ogUrl: "https://www.kriscent.in/portfolio"
    },
    technologiesPage: {
        title: "Technologies | Kriscent Techno Hub",
        description: "Discover cutting-edge technologies we use to deliver innovative IT solutions for businesses.",
        keywords: "technologies, IT solutions, software development, emerging tech solutions, technology stack",
        ogImage: `${ASSETS_BASE_URL}/tempAssets/OgImages/demo/home.png?updatedAt=1737552601923`,
        ogUrl: "https://www.kriscent.in/technologies"
    },
    testimonialsPage: {
        title: "Testimonials | Kriscent Techno Hub",
        description: "Read client testimonials to see how our IT solutions have positively impacted their businesses.",
        keywords: "testimonials, client feedback, reviews, customer satisfaction, success stories",
        ogImage: `${ASSETS_BASE_URL}/tempAssets/OgImages/demo/home.png?updatedAt=1737552601923`,
        ogUrl: "https://www.kriscent.in/testimonials"
    },
    gameDevPage: {
        title: "Game Development | Kriscent Techno Hub",
        description: "Explore our innovative game development services. We provides best game development services in Kota, Rajasthan",
        keywords: "game development, mobile games, game design, interactive entertainment, software development, gaming solutions",
        ogImage: `${ASSETS_BASE_URL}/tempAssets/OgImages/demo/home.png?updatedAt=1737552601923`,
        ogUrl: "https://www.kriscent.in/game-development"
    },
    sitemap: {
        title: "Sitemap | Kriscent Techno Hub",
        description: "Explore the sitemap of Kriscent Techno Hub to find all our services and pages easily.",
        keywords: "sitemap, Kriscent Techno Hub, services, pages, navigation",
        ogImage: `${ASSETS_BASE_URL}/tempAssets/OgImages/demo/home.png?updatedAt=1737552601923`,
        ogUrl: "https://www.kriscent.in/sitemap"
    },



    // title and other details for the case studies pages. 
    CaseStudyRgcsm: {
        title: "Case Study RGCSM | E-Learning Solutions",
        description: "Revolutionizing technical education in India with innovative e-learning solutions.",
        keywords: "education technology, franchise business, RGCSM, e-learning solutions, IT for education, affordable technical education, online learning",
        ogImage: `${ASSETS_BASE_URL}/tempAssets/OgImages/demo/home.png?updatedAt=1737552601923`,
        ogUrl: "https://www.kriscent.in/case-study-rgcsm"
    },
    CaseStudyAuraquestt: {
        title: "Case Study Auraquestt | Digital Astrology",
        description: "Transforming astrology consultancy with cutting-edge digital solutions.",
        keywords: "astrology services, digital consultancy, online astrology business, astrology technology, Auraquestt, astrology platform, business growth",
        ogImage: `${ASSETS_BASE_URL}/tempAssets/OgImages/demo/home.png?updatedAt=1737552601923`,
        ogUrl: "https://www.kriscent.in/case-study-auraquestt"
    },
    CaseStudyChabi: {
        title: "Case Study Chabi | Digital Gold & Silver Investment App",
        description: "Chabi is a fintech platform focused on helping daily earners and first-time investors build financial habits through digital gold savings",
        keywords: "digital savings, digital gold, chabi, digital silver, buy digital gold india, digital gold investment app india best digital gold app india, safe gold investment app, invest in gold online india",
        ogImage: `${ASSETS_BASE_URL}/tempAssets/OgImages/demo/home.png?updatedAt=1737552601923`,
        ogUrl: "https://www.kriscent.in/case-study-chabi"
    },
    CaseStudyGudz: {
        title: "Case Study Gudz | Fleet Management",
        description: "Enhancing fleet operations with AI-driven logistics solutions.",
        keywords: "fleet management, logistics technology, smart transport solutions, AI in logistics, fleet tracking, operational efficiency, Gudz",
        ogImage: `${ASSETS_BASE_URL}/tempAssets/OgImages/demo/home.png?updatedAt=1737552601923`,
        ogUrl: "https://www.kriscent.in/case-study-gudz"
    },
    CaseStudyFlixmates: {
        title: "Case Study Flixmates | Bollywood Networking",
        description: "Empowering Bollywood creatives with a dedicated networking platform.",
        keywords: "Bollywood networking, auditions platform, creative industry, film industry jobs, Flixmates, artist collaboration, entertainment industry",
        ogImage: `${ASSETS_BASE_URL}/tempAssets/OgImages/demo/home.png?updatedAt=1737552601923`,
        ogUrl: "https://www.kriscent.in/case-study-flixmates"
    },
    CaseStudyGetMaxValue: {
        title: "Case Study Get Max Value | Scrap Recycling",
        description: "Streamlining waste management with tech-driven recycling solutions.",
        keywords: "scrap management, waste recycling, business efficiency, sustainable solutions, technology in recycling, Get Max Value, eco-friendly business",
        ogImage: `${ASSETS_BASE_URL}/tempAssets/OgImages/demo/home.png?updatedAt=1737552601923`,
        ogUrl: "https://www.kriscent.in/case-study-gmv"
    },
    // CaseStudyAstroNri: {
    //     title: "Case Study Astro NRI - Astrology Portal",
    //     description: "Astro NRI is a platform that offers astrology services to NRIs.",
    //     keywords: "astrology, NRI, services",
    //     ogImage: `${ASSETS_BASE_URL}/tempAssets/OgImages/demo/home.png?updatedAt=1737552601923`,
    //  ogUrl: "https://www.kriscent.in/case-study-"
    // },
    CaseStudyLurioxStones: {
        title: "Case Study Luriox Stones | Jewellery Marketplace",
        description: "Online marketplace for healing crystals and unique gemstone designs.",
        keywords: "jewellery marketplace, healing crystals, gemstone jewelry, online jewellery shopping, Luriox Stones, unique designs, holistic healing",
        ogImage: `${ASSETS_BASE_URL}/tempAssets/OgImages/demo/home.png?updatedAt=1737552601923`,
        ogUrl: "https://www.kriscent.in/case-study-luriox-stones"
    },
    CaseStudyParasTravels: {
        title: "Case Study Paras Travels | Travel ERP",
        description: "Seamless travel management system with ERP solutions for efficiency.",
        keywords: "travel management, ERP solutions, business automation, travel technology, digital transformation, Paras Travels, travel ERP platform",
        ogImage: `${ASSETS_BASE_URL}/tempAssets/OgImages/demo/home.png?updatedAt=1737552601923`,
        ogUrl: "https://www.kriscent.in/case-study-paras-travels"
    },
    CaseStudyTSBOS: {
        title: "TSBOS Case Study | Life Transformation & Occult Sciences Platform",
        description: "Explore how we designed and developed TSBOS, a premium life transformation and occult sciences platform offering Face Reading, Graphology, Name Numerology, and Mobile Numerology services.",
        keywords: "TSBOS, Sommnath Bhattacharyaa, occult sciences website, numerology platform, face reading website, graphology services, mobile numerology, name numerology, spiritual consultation platform, life transformation website, mystical web design, spiritual branding, consultation booking platform",
        ogImage: `${ASSETS_BASE_URL}/tempAssets/OgImages/tsbos/home.png`,
        ogUrl: "https://www.kriscent.in/case-study-tsbos"
    },
    CaseStudyMediSaver: {
        title: "Medisaver Case Study | Smart Healthcare & Medicine Management Platform",
        description: "Explore how we designed and developed Medisaver, a smart healthcare platform for medicine management, price comparison, doctor consultations, prescription tracking, and affordable healthcare access.",
        keywords: "Medisaver, healthcare platform, medicine management app, prescription tracking platform, medicine reminder app, doctor consultation platform, healthcare case study, pharmacy comparison platform, lab test booking platform, digital healthcare solution, family healthcare management, medicine savings platform",
        ogImage: `${ASSETS_BASE_URL}/tempAssets/OgImages/medisaver/home.png`,
        ogUrl: "https://www.kriscent.in/case-study-medisaver"
    },
    companyProfilePage: {
        title: "Kriscent Techno Hub Pvt. Ltd. | Your One-Stop IT Solutions Partner",
        description: "Kriscent Techno Hub is a CMMI Level 3 certified IT company offering web development, software solutions, digital marketing, and talent services. Offices in Kota and Jaipur, India.",
        keywords: "Kriscent, IT solutions India, CMMI Level 3, web development Kota, software company Jaipur, hire talent India, digital marketing agency",
        ogImage: `${ASSETS_BASE_URL}/tempAssets/OgImages/demo/home.png?updatedAt=1737552601923`,
        ogUrl: "https://www.kriscent.in/connect",

    },


    lmsLandingPage: {
        title: "AI-Powered Learning Management System (LMS) | Custom LMS Solutions",
        description: "Launch your AI-powered learning platform in just 7 days. Deliver courses, live classes, assessments, certifications, and learner analytics with a fully customizable LMS solution.",
        keywords: "Corporate Training LMS,LMS for Training Institutes, Employee Onboarding Platform, Certification Management System, White Label LMS, Custom LMS Development",
        ogImage: `${ASSETS_BASE_URL}/tempAssets/OgImages/demo/home.png?updatedAt=1737552601923`,
        ogUrl: "https://www.kriscent.in/learning-management-system/",

    }


}
