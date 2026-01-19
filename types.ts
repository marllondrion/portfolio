
export type Language = 'en' | 'pt';

export interface Project {
    id: string;
    title: string;
    description: string;
    longDescription?: string;
    image: string;
    tags: string[];
    link?: string;
}

export interface Experience {
    company: string;
    role: string;
    period: string;
    location: string;
    description: string;
    bulletPoints: string[];
    techStack?: string[];
}

export interface Education {
    degree: string;
    institution: string;
    period: string;
    location: string;
}

export interface Contact {
    title: string;
    email: string;
    phone: string;
    linkedin: string;
    github: string;
}


export interface Skill {
    name: string;
    category: 'Language/Framework' | 'Database' | 'DevOps/Cloud' | 'Other';
}

export interface PortfolioData {
    profile: {
        name: string;
        role: string;
        headline: string;
        summary: string;
        email: string;
        location: string;
        phone: string;
        linkedin: string;
        avatar: string;
    };
    skills: Skill[];
    projects: Project[];
    experience: Experience[];
    education: Education[];
    contact: Contact;
}

export interface Content {
    en: PortfolioData;
    pt: PortfolioData;
}
