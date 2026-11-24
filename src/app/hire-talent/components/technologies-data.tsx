import { Code, Database, Cloud, Package, Terminal, Figma, Code2Icon, User2, Flame, Cuboid, ImageIcon, Brain, ShoppingBag, ShoppingCart } from 'lucide-react'; // Import necessary icons
import { IconBorderStyle, IconBrandAdobe, IconBrandAdobeAfterEffect, IconBrandAdobeIllustrator, IconBrandAdobePhotoshop, IconBrandAdobePremier, IconBrandAdobeXd, IconBrandAngular, IconBrandAws, IconBrandAzure, IconBrandBootstrap, IconBrandCSharp, IconBrandCss3, IconBrandDeviantart, IconBrandDjango, IconBrandDocker, IconBrandFigma, IconBrandFirebase, IconBrandFlutter, IconBrandFramer, IconBrandGithub, IconBrandGoogle, IconBrandHtml5, IconBrandJavascript, IconBrandLaravel, IconBrandMongodb, IconBrandMysql, IconBrandNextjs, IconBrandNodejs, IconBrandOpenai, IconBrandPhp, IconBrandPython, IconBrandReact, IconBrandReactNative, IconBrandRedux, IconBrandSketch, IconBrandSwift, IconBrandTailwind, IconBrandTypescript, IconBrandVercel, IconBrandVue, IconBrandWebflow, IconBrandWordpress, IconCat, IconExplicit, IconFileAnalytics, IconGrowth, IconJacket, IconWorldWww } from '@tabler/icons-react';
import { ReactNode } from 'react';
import { TECHNOLOGIES } from '@/lib/icons';
import { ASSETS_BASE_URL } from '@/lib/variables';

// Add these type definitions
type ComponentIconType = {
    type: 'component';
    icon: ReactNode;

}

type ImageIconType = {
    type: 'image';
    url: string;
}

export type ToolIconType = ComponentIconType | ImageIconType;

export type ToolType = {
    name: string;
    icon: ToolIconType;
    color: string;
}


export const categories = [
    {
        name: "Front-End",
        tools: [
            {
                name: "HTML",
                icon: { type: 'component', icon: <IconBrandHtml5 /> },
                color: "#E44D26"
            },
            {
                name: "CSS",
                icon: { type: 'component', icon: <IconBrandCss3 /> },
                color: "#1572B6"
            },
            {
                name: "Bootstrap",
                icon: { type: 'component', icon: <IconBrandBootstrap /> },
                color: "#563D7C"
            },
            {
                name: "React",
                icon: { type: 'component', icon: <IconBrandReact /> },
                color: "#61DAFB"
            },
            {
                name: "JavaScript",
                icon: { type: 'component', icon: <IconBrandJavascript /> },
                color: "#F7DF1E"
            },
            {
                name: "Vue",
                icon: { type: 'component', icon: <IconBrandVue /> },
                color: "#42B883"
            },
            {
                name: "ElectronJs",
                icon: { type: 'image', url: `${ASSETS_BASE_URL}/tempAssets/techIcons/electron.png` },
                color: "#47848F"
            },
            {
                name: "Angular",
                icon: { type: 'component', icon: <IconBrandAngular /> },
                color: "#DD0031"
            },
            {
                name: "Tailwind",
                icon: { type: 'component', icon: <IconBrandTailwind /> },
                color: "#38B2AC"
            },
            {
                name: "Next.js",
                icon: { type: 'component', icon: <IconBrandNextjs /> },
                color: "#000000"
            }
        ]
    },
    {
        name: "DevOps",
        tools: [
            {
                name: "AWS",
                icon: { type: 'component', icon: <IconBrandAws /> },
                color: "#FF9900"
            },
            {
                name: "GCP",
                icon: { type: 'component', icon: <IconBrandGoogle /> },
                color: "#4285F4"
            },
            {
                name: "Azure",
                icon: { type: 'component', icon: <IconBrandAzure /> },
                color: "#0078D4"
            },
            {
                name: "Docker",
                icon: { type: 'component', icon: <IconBrandDocker /> },
                color: "#2496ED"
            },
            {
                name: "Github",
                icon: { type: 'component', icon: <IconBrandGithub /> },
                color: "#181717"
            },
            {
                name: "Netlify",
                icon: { type: 'image', url: `${ASSETS_BASE_URL}/tempAssets/techIcons/netlify.png` },
                color: "#00C7B7"
            },
            {
                name: "cPanel",
                icon: { type: 'image', url: `${ASSETS_BASE_URL}/tempAssets/techIcons/cpanel.png` },
                color: "#FF6C2C"
            },
            {
                name: "AA Panel",
                icon: { type: 'image', url: `${ASSETS_BASE_URL}/tempAssets/techIcons/aapanel.png` },
                color: "#000000"
            },
            {
                name: "Vercel",
                icon: { type: 'component', icon: <IconBrandVercel /> },
                color: "#000000"
            }
        ]
    },
    {
        name: "AI / ML",
        tools: [
            {
                name: "Open AI",
                icon: { type: 'component', icon: <IconBrandOpenai /> },
                color: "#412991"
            },
            {
                name: "Tensorflow",
                icon: { type: 'image', url: `${ASSETS_BASE_URL}/tempAssets/techIcons/tensor.png` },
                color: "#FF6F00"
            },
            {
                name: "PyTorch",
                icon: { type: 'image', url: `${ASSETS_BASE_URL}/tempAssets/techIcons/pytorch.png` },
                color: "#EE4C2C"
            },
            {
                name: "Scikit-learn",
                icon: { type: 'image', url: `${ASSETS_BASE_URL}/tempAssets/techIcons/scikit.png` },
                color: "#F7931E"
            },
            {
                name: "Keras",
                icon: { type: 'image', url: `${ASSETS_BASE_URL}/tempAssets/techIcons/keras.png` },
                color: "#D00000"
            },
            {
                name: "Midjourney",
                icon: { type: 'image', url: `${ASSETS_BASE_URL}/tempAssets/techIcons/mid.png` },
                color: "#000000"
            },
            {
                name: "Gemini",
                icon: { type: 'component', icon: <IconBrandGoogle /> },
                color: "#8E75B2"
            },
            {
                name: "Lama AI",
                icon: { type: 'image', url: `${ASSETS_BASE_URL}/tempAssets/techIcons/lama.png` },
                color: "#4285F4"
            }
        ]
    },
    {
        name: "UI/UX Designing",
        tools: [
            {
                name: "Photoshop",
                icon: { type: 'component', icon: <IconBrandAdobePhotoshop /> },
                color: "#26A6D9"
            },
            {
                name: "Figma",
                icon: { type: 'component', icon: <IconBrandFigma /> },
                color: "#F24E1E"
            },
            {
                name: "Adobe XD",
                icon: { type: 'component', icon: <IconBrandAdobeXd /> },
                color: "#FF61F6"
            },
            {
                name: "Miro",
                icon: { type: 'image', url: `${ASSETS_BASE_URL}/tempAssets/techIcons/miro.png` },
                color: "#F2C94C"
            },
            {
                name: "Sketch",
                icon: { type: 'component', icon: <IconBrandSketch /> },
                color: "#000000"
            }
        ]
    },
    {
        name: "CMS",
        tools: [
            {
                name: "Webflow",
                icon: { type: 'component', icon: <IconBrandWebflow /> },
                color: "#4353FF"
            },
            {
                name: "Framer",
                icon: { type: 'component', icon: <IconBrandFramer /> },
                color: "#0055FF"
            },
            {
                name: "Wordpress",
                icon: { type: 'component', icon: <IconBrandWordpress /> },
                color: "#21759B"
            },
            {
                name: "Joomla",
                icon: { type: 'image', url: `${ASSETS_BASE_URL}/tempAssets/techIcons/joomla.png` },
                color: "#FF6600"
            },
            {
                name: "Magento",
                icon: { type: 'image', url: `${ASSETS_BASE_URL}/tempAssets/techIcons/magento.png` },
                color: "#FF6600"
            },
            {
                name: "Drupal",
                icon: { type: 'image', url: `${ASSETS_BASE_URL}/tempAssets/techIcons/drupal.png` },
                color: "#0678BE"
            },
            {
                name: "Shopify",
                icon: { type: 'image', url: `${ASSETS_BASE_URL}/tempAssets/techIcons/shopify.png` },
                color: "#7AB55C"
            },
            {
                name: "Big Commerce",
                icon: { type: 'image', url: `${ASSETS_BASE_URL}/tempAssets/techIcons/big.png` },
                color: "#121118"
            },
            {
                name: "Adobe Commerce",
                icon: { type: 'component', icon: <IconBrandAdobe /> },
                color: "#FF6600"
            }
        ]
    },
    {
        name: "Mobile Technologies",
        tools: [
            {
                name: "Flutter",
                icon: { type: 'component', icon: <IconBrandFlutter /> },
                color: "#02569B"
            },
            {
                name: "React Native",
                icon: { type: 'component', icon: <IconBrandReactNative /> },
                color: "#61DAFB"
            },
            {
                name: "Swift",
                icon: { type: 'component', icon: <IconBrandSwift /> },
                color: "#FF6C2C"
            },
            {
                name: "Kotlin",
                icon: { type: 'image', url: `${ASSETS_BASE_URL}/tempAssets/techIcons/kotlin.png` },
                color: "#7F52FF"
            },
            {
                name: "Java",
                icon: { type: 'image', url: `${ASSETS_BASE_URL}/tempAssets/techIcons/java.png` },
                color: "#007396"
            },
            {
                name: "Dart",
                icon: { type: 'image', url: `${ASSETS_BASE_URL}/tempAssets/techIcons/dart.png` },
                color: "#0175C2"
            },
        ]
    },
    {
        name: "Back-End",
        tools: [
            {
                name: "Django",
                icon: { type: "component", icon: <IconBrandDjango /> },
                color: "#092E20"
            },
            {
                name: "PHP",
                icon: { type: 'image', url: `${ASSETS_BASE_URL}/tempAssets/techIcons/PHP.png` },
                color: "#8993BE"
            },
            {
                name: "Node.js",
                icon: { type: 'component', icon: <IconBrandNodejs /> },
                color: "#69bc48"
            },
            {
                name: "Laravel",
                icon: { type: 'component', icon: <IconBrandLaravel /> },
                color: "#CC342D"
            },
            {
                name: "CakePHP",
                icon: { type: 'image', url: `${ASSETS_BASE_URL}/tempAssets/techIcons/cake-php.png` },
                color: "#CC342D"
            },
            {
                name: "CodeIgnitor",
                icon: { type: 'image', url: `${ASSETS_BASE_URL}/tempAssets/techIcons/codeIgnitor.png` },
                color: "#CC0000"
            },
            {
                name: "Nestjs",
                icon: { type: 'image', url: `${ASSETS_BASE_URL}/tempAssets/techIcons/nest.png` },
                color: "#E0234E"
            },
            {
                name: "Golang",
                icon: { type: 'image', url: `${ASSETS_BASE_URL}/tempAssets/techIcons/go.png` },
                color: "#00ADD8"
            },
            {
                name: "Python",
                icon: { type: 'component', icon: <IconBrandPython /> },
                color: "#3776AB"
            },
            {
                name: "TypeScript",
                icon: { type: 'component', icon: <IconBrandTypescript /> },
                color: "#007ACC"
            },
        ]
    },
    {
        name: "Database",
        tools: [
            {
                name: "MySQL",
                icon: { type: 'component', icon: <IconBrandMysql /> },
                color: "#00758F"
            },
            {
                name: "PostgreSQL",
                icon: { type: 'image', url: `${ASSETS_BASE_URL}/tempAssets/techIcons/prosql.png` },
                color: "#336791"
            },
            {
                name: "SQLite",
                icon: { type: 'image', url: `${ASSETS_BASE_URL}/tempAssets/techIcons/sqllite.png` },
                color: "#07648C"
            },
            {
                name: "MongoDB",
                icon: { type: 'component', icon: <IconBrandMongodb /> },
                color: "#47A248"
            },
            {
                name: "Firebase",
                icon: { type: 'component', icon: <IconBrandFirebase /> },
                color: "#FFCA28"
            }
        ]
    },
    {
        name: "CRM",
        tools: [
            {
                name: "Sales Force",
                icon: { type: 'image', url: `${ASSETS_BASE_URL}/tempAssets/techIcons/salesforce.png` },
                color: "#00A1E0"
            },
            {
                name: "Zoho",
                icon: { type: 'image', url: `${ASSETS_BASE_URL}/tempAssets/techIcons/zoho.png` },
                color: "#FF9400"
            },
            {
                name: "Hubspot",
                icon: { type: 'image', url: `${ASSETS_BASE_URL}/tempAssets/techIcons/hubspot.png` },
                color: "#FF7A59"
            },
            {
                name: "Odoo",
                icon: { type: 'image', url: `${ASSETS_BASE_URL}/tempAssets/techIcons/odoo.png` },
                color: "#a24589"
            }
        ]
    },
    {
        name: "Visual Design",
        tools: [
            {
                name: "Illustration",
                icon: { type: 'component', icon: <IconBrandAdobeIllustrator /> },
                color: "#FF9A00"
            },
            {
                name: "Canva",
                icon: { type: 'image', url: `${ASSETS_BASE_URL}/tempAssets/techIcons/canva.png` },
                color: "#4864d6"
            },
            {
                name: "Corel Draw",
                icon: { type: 'image', url: `${ASSETS_BASE_URL}/tempAssets/techIcons/corel.png` },
                color: "#000000"
            },
            {
                name: "Adobe",
                icon: { type: 'component', icon: <IconBrandAdobe /> },
                color: "#f70000"
            },
            {
                name: "Premier Pro",
                icon: { type: 'component', icon: <IconBrandAdobePremier /> },
                color: "#8787f7"
            },
            {
                name: "After Effects",
                icon: { type: 'component', icon: <IconBrandAdobeAfterEffect /> },
                color: "#cb8cf7"
            },
        ]
    },
    {
        name: "Data Analysis",
        tools: [

            {
                name: "Excel",
                icon: { type: 'image', url: `${ASSETS_BASE_URL}/tempAssets/techIcons/excel.png` },
                color: "#217346"
            },
            {
                name: "Sheets",
                icon: { type: 'image', url: `${ASSETS_BASE_URL}/tempAssets/techIcons/sheets.png` },
                color: "#0F9D58"
            },
            {
                name: "MySQL",
                icon: { type: 'component', icon: <IconBrandMysql /> },
                color: "#00758F"
            },
            {
                name: "PostgreSQL",
                icon: { type: 'image', url: `${ASSETS_BASE_URL}/tempAssets/techIcons/prosql.png` },
                color: "#336791"
            },
            {
                name: "Alteryx",
                icon: { type: 'image', url: `${ASSETS_BASE_URL}/tempAssets/techIcons/alteryx.png` },
                color: "#4864d6"
            },
            {
                name: "Python",
                icon: { type: 'component', icon: <IconBrandPython /> },
                color: "#3776AB"
            },
            {
                name: "Numpy",
                icon: { type: 'image', url: `${ASSETS_BASE_URL}/tempAssets/techIcons/numpy.png` },
                color: "#4dabcf"
            },
            {
                name: "Pandas",
                icon: { type: 'image', url: `${ASSETS_BASE_URL}/tempAssets/techIcons/pandas.png` },
                color: "#150458"
            },
            {
                name: "Scipy",
                icon: { type: 'image', url: `${ASSETS_BASE_URL}/tempAssets/techIcons/scipy.png` },
                color: "#3572A5"
            },
            {
                name: "Matplotlib",
                icon: { type: 'image', url: `${ASSETS_BASE_URL}/tempAssets/techIcons/matplotlib.png` },
                color: "#11557c"
            },
            {
                name: "Seaborn",
                icon: { type: 'image', url: `${ASSETS_BASE_URL}/tempAssets/techIcons/seaborn.png` },
                color: "#5A7D9A"
            },
            {
                name: "Plotly",
                icon: { type: 'image', url: `${ASSETS_BASE_URL}/tempAssets/techIcons/plotly.png` },
                color: "#3f4f75"
            },
            {
                name: "PowerBI",
                icon: { type: 'image', url: `${ASSETS_BASE_URL}/tempAssets/techIcons/powerbi.png` },
                color: "#f2c811"
            },
            {
                name: "Tableau",
                icon: { type: 'image', url: `${ASSETS_BASE_URL}/tempAssets/techIcons/tableau.png` },
                color: "#E97627"
            },
            {
                name: "Qlik Sense",
                icon: { type: 'image', url: `${ASSETS_BASE_URL}/tempAssets/techIcons/qlik-sense.png` },
                color: "#3ab54a"
            },
            {
                name: "Google Big Query",
                icon: { type: 'image', url: `${ASSETS_BASE_URL}/tempAssets/techIcons/google-big-query.png` },
                color: "#4285F4"
            },
            {
                name: "Snowflake",
                icon: { type: 'image', url: `${ASSETS_BASE_URL}/tempAssets/techIcons/snowflake.png` },
                color: "#56B9E9"
            },
            {
                name: "Azure",
                icon: { type: 'image', url: `${ASSETS_BASE_URL}/tempAssets/techIcons/azure.png` },
                color: "#0078D4"
            },
        ]
    }
];

// reordering the technologies for showing in the main page
export const techOrderMainPage = [
    "UI/UX Designing",
    "Visual Design",
    "Mobile Technologies",
    "Back-End",
    "Database",
    "CMS",
    "DevOps",
    "AI / ML",
    "Data Analysis",
    "Front-End",
    "CRM"
].map((name, index) => [name, index]) satisfies [string, number][];