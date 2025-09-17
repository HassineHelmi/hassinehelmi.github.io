import { 
  Code, 
  Database, 
  Smartphone, 
  Settings,
  Globe,
  Layers,
  Cloud,
  Brain
} from 'lucide-react';
import { 
  SiJavascript, 
  SiTypescript, 
  SiPython, 
  SiReact, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiNestjs, 
  SiSpringboot, 
  SiPostgresql, 
  SiMysql, 
  SiFirebase, 
  SiDocker, 
  SiGit, 
  SiGithub, 
  SiFigma, 
  SiFlutter, 
  SiAndroid,
  SiAmazon
} from 'react-icons/si';

// Types
export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  github?: string;
  demo?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
}

export interface Service {
  title: string;
  description: string;
  icon: any;
  features: string[];
  technologies: string[];
}

export interface SkillCategory {
  title: string;
  icon: any;
  skills: {
    name: string;
    icon: any;
    level: number;
  }[];
}

// Personal Information
export const personalInfo = {
  name: "Helmi Hassine",
  title: "Full-Stack Developer",
  tagline: "Hi, I'm Helmi Hassine – a passionate Full-Stack Developer dedicated to building robust, scalable, and innovative solutions.",
  location: "Monastir, Tunisia",
  bio: "I am a software engineer from Monastir, Tunisia, with a Software Engineering degree from EPI Digital School. I have experience building full-stack applications, architecting scalable solutions, and collaborating with teams using Agile/Scrum methodologies. I enjoy creating elegant UI components and solving complex problems with efficient code.",
  contact: {
    phone: "+216 28372002",
    email: "helmi.hassine1@gmail.com",
    linkedin: "https://linkedin.com/in/helmi-hassine",
    github: "https://github.com/HassineHelmi",
    whatsapp: "https://wa.me/21628372002"
  }
};

// Skills Data
export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    icon: Code,
    skills: [
      { name: 'Java', icon: Code, level: 90 },
      { name: 'JavaScript', icon: SiJavascript, level: 85 },
      { name: 'TypeScript', icon: SiTypescript, level: 80 },
      { name: 'Python', icon: SiPython, level: 75 },
    ]
  },
  {
    title: 'Frontend',
    icon: Smartphone,
    skills: [
      { name: 'React.js', icon: SiReact, level: 90 },
      { name: 'Next.js', icon: SiNextdotjs, level: 85 },
      { name: 'TailwindCSS', icon: SiTailwindcss, level: 90 },
      { name: 'Material UI', icon: SiReact, level: 80 },
      { name: 'Figma', icon: SiFigma, level: 70 },
    ]
  },
  {
    title: 'Backend & Databases',
    icon: Database,
    skills: [
      { name: 'Spring Boot', icon: SiSpringboot, level: 85 },
      { name: 'NestJS', icon: SiNestjs, level: 80 },
      { name: 'Node.js', icon: SiNodedotjs, level: 75 },
      { name: 'PostgreSQL', icon: SiPostgresql, level: 80 },
      { name: 'MySQL', icon: SiMysql, level: 75 },
      { name: 'Firebase', icon: SiFirebase, level: 80 },
    ]
  },
  {
    title: 'Mobile & Tools',
    icon: Settings,
    skills: [
      { name: 'React Native', icon: SiReact, level: 80 },
      { name: 'Flutter', icon: SiFlutter, level: 75 },
      { name: 'Android', icon: SiAndroid, level: 70 },
      { name: 'Docker', icon: SiDocker, level: 75 },
      { name: 'Git', icon: SiGit, level: 85 },
    ]
  }
];

// Services Data
export const services: Service[] = [
  {
    title: "Full-Stack Web Development",
    description: "End-to-end web application development using modern frameworks and best practices.",
    icon: Globe,
    features: [
      "React.js & Next.js Applications",
      "Spring Boot & NestJS APIs",
      "Database Design & Integration",
      "Authentication & Authorization"
    ],
    technologies: ["React", "Next.js", "Spring Boot", "NestJS", "PostgreSQL", "TypeScript"]
  },
  {
    title: "UI/UX Development",
    description: "Creating beautiful, responsive user interfaces with modern design principles.",
    icon: Layers,
    features: [
      "Reusable UI Component Libraries",
      "Responsive Design Implementation",
      "Design System Development",
      "Figma to Code Conversion"
    ],
    technologies: ["TailwindCSS", "Material UI", "Figma", "Storybook", "Sass"]
  },
  {
    title: "Mobile App Development",
    description: "Cross-platform mobile applications with native performance and user experience.",
    icon: Smartphone,
    features: [
      "React Native Development",
      "Flutter Applications",
      "Cross-Platform Solutions",
      "App Store Deployment"
    ],
    technologies: ["React Native", "Flutter", "Firebase", "Android", "iOS"]
  },
  {
    title: "Cloud & DevOps",
    description: "Scalable cloud infrastructure and deployment solutions for modern applications.",
    icon: Cloud,
    features: [
      "Docker Containerization",
      "AWS Lambda Functions",
      "CI/CD Pipeline Setup",
      "Cloud Architecture Design"
    ],
    technologies: ["Docker", "AWS", "GitHub Actions", "Jenkins", "Kubernetes"]
  },
  {
    title: "AI-Powered Solutions",
    description: "Intelligent applications with machine learning and AI integration capabilities.",
    icon: Brain,
    features: [
      "Resume Parsing Systems",
      "Recommendation Engines",
      "Computer Vision Applications",
      "Natural Language Processing"
    ],
    technologies: ["Python", "TensorFlow", "OpenCV", "Machine Learning", "AI/ML"]
  }
];

// Experience Data
export const experiences: Experience[] = [
  {
    title: 'End of Studies Internship',
    company: 'Tekboot Solutions',
    period: 'Feb 2025 - July 2025',
    description: 'Developed a comprehensive recruitment platform using Next.js and Spring Boot with AI-powered resume parsing and intelligent job recommendation engine.',
    technologies: ['Next.js', 'Spring Boot', 'Java', 'TypeScript', 'AI/ML', 'PostgreSQL']
  },
  {
    title: 'Frontend Developer Intern',
    company: 'Proxym IT',
    period: 'June 2024 - July 2024',
    description: 'Built a comprehensive UI toolkit library using NX monorepo architecture with React and TailwindCSS for enhanced development workflow.',
    technologies: ['React', 'TailwindCSS', 'NX Monorepo', 'TypeScript', 'Storybook']
  },
  {
    title: 'Software Developer Intern',
    company: 'Iron Tech',
    period: 'June 2023 - Aug 2023',
    description: 'Developed UI toolkit and reusable components, focusing on component architecture and design system implementation.',
    technologies: ['React', 'JavaScript', 'CSS3', 'Component Design', 'Git']
  },
  {
    title: 'Smart Mirror Project',
    company: 'Personal Project',
    period: '2023',
    description: 'Created an innovative IoT solution featuring face recognition, voice recognition, and health monitoring capabilities.',
    technologies: ['IoT', 'Python', 'Computer Vision', 'Voice Recognition', 'Raspberry Pi']
  }
];

// Projects Data
export const projects: Project[] = [
  {
    title: 'Talent Cloud',
    description: 'A comprehensive full-stack recruitment platform featuring advanced candidate matching, real-time communication, and integrated authentication systems.',
    technologies: ['Next.js', 'Spring Boot', 'Keycloak', 'AWS', 'PostgreSQL', 'TypeScript'],
    features: ['AI-powered matching', 'Real-time messaging', 'Advanced filtering', 'Cloud deployment'],
    github: 'https://github.com/HassineHelmi',
    demo: 'https://talent-cloud-demo.com'
  },
  {
    title: 'Deal Hub',
    description: 'Cross-platform marketplace application enabling seamless buying and selling experiences with real-time notifications and secure payment integration.',
    technologies: ['React Native', 'Firebase', 'JavaScript', 'Stripe API'],
    features: ['Cross-platform compatibility', 'Real-time notifications', 'Secure payments', 'User authentication'],
    github: 'https://github.com/HassineHelmi',
    demo: 'https://deal-hub-demo.com'
  },
  {
    title: 'Smart Mirror',
    description: 'Innovative IoT solution featuring facial recognition, voice commands, and health monitoring capabilities for modern smart homes.',
    technologies: ['Python', 'OpenCV', 'Raspberry Pi', 'IoT', 'Machine Learning'],
    features: ['Face recognition', 'Voice control', 'Health monitoring', 'Weather updates'],
    github: 'https://github.com/HassineHelmi'
  },
  {
    title: 'Bankerize UI Toolkit',
    description: 'Comprehensive component library built with modern development practices, featuring reusable components and design system guidelines.',
    technologies: ['React', 'TailwindCSS', 'Storybook', 'NX Monorepo', 'TypeScript'],
    features: ['Reusable components', 'Design system', 'Documentation', 'Testing suite'],
    github: 'https://github.com/HassineHelmi'
  }
];

// Education Data
export const education = [
  {
    degree: 'Software Engineering Degree',
    institution: 'EPI Digital School',
    period: '2022-2025',
    description: 'Comprehensive curriculum covering software architecture, modern development practices, and emerging technologies.'
  },
  {
    degree: 'Bachelor\'s in Electronics, Electrical, Automation',
    institution: 'ISSAT Sousse',
    period: '2019-2022',
    description: 'Strong foundation in electronics and automation systems with practical experience in hardware-software integration.'
  }
];

// Certifications Data
export const certifications: Certification[] = [
  {
    title: 'Microsoft Certified: Azure Fundamentals',
    issuer: 'Microsoft',
    date: '2024',
    credentialId: 'AZ-900'
  },
  {
    title: 'CCNA: Switching, Routing, and Wireless Essentials',
    issuer: 'Cisco',
    date: '2023',
    credentialId: 'CCNA-SRWE'
  }
];