import { meta, shopify, starbucks, tesla, quadb } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    outfit,
    SprayFoam

} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "BlockChain Developer",
        company_name: "QuadB technologies",
        icon: quadb,
        iconBg: "#87C4FF",
        date: "January 2024 - May2024",
        points: [
            "Developing and maintaining smart Contracts written in sophia language on aeternity BlockChain",
            "Collaborating with various colleges to organize hackathons on their campuses and educating students about the DeFi platform.",
            "Implementing responsive front-end design and ensuring cross-browser compatibility for deployed smart contracts.",
            "Participating in smart contract code  reviews and providing constructive feedback to other developers.",
        ],
    }
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: outfit,
        theme: 'btn-back-blue',
        name: 'Gen Ai powered Outfit Generator',
        description: 'In Collaboration with team members developed Outfit Generator which enhance the user shopping experience by offering personalized, trendy, and cohesive outfit ideas.',
        link: 'https://github.com/ByteWiizard/Gen-AI-powered-fashion-outfit',
    },
    {
        iconUrl: SprayFoam,
        theme: 'btn-back-red',
        name: 'Spray Foam Construction Website',
        description: `developed Metro Vancouver Spray  Foam's website. This project enhances the user experience by providing clear, compelling information on spray foam insulation, driving engagement, and conversions with a sleek, intuitive design.`,
        link: 'https://metrovancouversprayfoam.com/',
    }
];