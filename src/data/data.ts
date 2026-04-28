import { Code, Database, Smartphone, Settings, Globe, Layers, Cloud, Brain } from 'lucide-react';
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
  SiFigma, 
  SiFlutter, 
  SiAndroid
} from 'react-icons/si';

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
  screenshot?: string;
  screenshotBgClass?: string;
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
  icon: React.ComponentType<{ className?: string }>;
  features: string[];
  technologies: string[];
}

export interface SkillCategory {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  skills: {
    name: string;
    icon: React.ComponentType<{ className?: string }>;
    level: number;
  }[];
}

export const contactInfo = {
  phone: "+216 28372002",
  email: "helmi.hassine1@gmail.com",
  linkedin: "https://linkedin.com/in/helmi-hassine",
  github: "https://github.com/HassineHelmi",
  whatsapp: "https://wa.me/21628372002"
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getSkillCategories = (t: any): SkillCategory[] => [
  {
    title: t('Skills.categories.programming'),
    icon: Code,
    skills: [
      { name: 'Java', icon: Code, level: 90 },
      { name: 'JavaScript', icon: SiJavascript, level: 85 },
      { name: 'TypeScript', icon: SiTypescript, level: 80 },
      { name: 'Python', icon: SiPython, level: 75 },
    ]
  },
  {
    title: t('Skills.categories.frontend'),
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
    title: t('Skills.categories.backend'),
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
    title: t('Skills.categories.mobile'),
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getServices = (t: any): Service[] => {
  const items = t('Services.items');
  return [
    {
      title: items[0].title,
      description: items[0].description,
      icon: Globe,
      features: items[0].features,
      technologies: ["React", "Next.js", "Spring Boot", "NestJS", "PostgreSQL", "TypeScript"]
    },
    {
      title: items[1].title,
      description: items[1].description,
      icon: Layers,
      features: items[1].features,
      technologies: ["TailwindCSS", "Material UI", "Figma", "Storybook", "Sass"]
    },
    {
      title: items[2].title,
      description: items[2].description,
      icon: Smartphone,
      features: items[2].features,
      technologies: ["React Native", "Flutter", "Firebase", "Android", "iOS"]
    },
    {
      title: items[3].title,
      description: items[3].description,
      icon: Cloud,
      features: items[3].features,
      technologies: ["Docker", "AWS", "GitHub Actions", "Jenkins", "Kubernetes"]
    },
    {
      title: items[4].title,
      description: items[4].description,
      icon: Brain,
      features: items[4].features,
      technologies: ["Python", "TensorFlow", "OpenCV", "Machine Learning", "AI/ML"]
    }
  ];
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getExperiences = (t: any): Experience[] => {
  const items = t('Experience.items');
  return [
    {
      title: items[0].title,
      company: items[0].company,
      period: items[0].period,
      description: items[0].description,
      technologies: ['Next.js', 'Spring Boot', 'Java', 'TypeScript', 'AI/ML', 'PostgreSQL']
    },
    {
      title: items[1].title,
      company: items[1].company,
      period: items[1].period,
      description: items[1].description,
      technologies: ['React', 'TailwindCSS', 'NX Monorepo', 'TypeScript', 'Storybook']
    },
    {
      title: items[2].title,
      company: items[2].company,
      period: items[2].period,
      description: items[2].description,
      technologies: ['React', 'JavaScript', 'CSS3', 'Component Design', 'Git']
    },
    {
      title: items[3].title,
      company: items[3].company,
      period: items[3].period,
      description: items[3].description,
      technologies: ['IoT', 'Python', 'Computer Vision', 'Voice Recognition', 'Raspberry Pi']
    }
  ];
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getProjects = (t: any): Project[] => {
  const items = t('Projects.items');
  return [
    {
      title: items[0].title,
      description: items[0].description,
      technologies: ['Node.js', 'NestJS', 'PostgreSQL', 'Prisma', 'React', 'TypeScript', 'GitHub Actions', 'Firebase'],
      features: items[0].features,
      github: 'https://github.com/HassineHelmi',
      screenshot: '/ironERP.png',
      screenshotBgClass: 'bg-gradient-to-br from-blue-50 via-slate-100 to-blue-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-700'
    },
    {
      title: items[1].title,
      description: items[1].description,
      technologies: ['Next.js', 'Spring Boot', 'Keycloak', 'AWS', 'PostgreSQL', 'TypeScript'],
      features: items[1].features,
      github: 'https://github.com/HassineHelmi',
      screenshot: '/talent-cloud.png'
    },
    {
      title: items[2].title,
      description: items[2].description,
      technologies: ['React Native', 'Firebase', 'JavaScript', 'Stripe API'],
      features: items[2].features,
      github: 'https://github.com/HassineHelmi',
      screenshot: '/dealhub.png'
    },
    {
      title: items[3].title,
      description: items[3].description,
      technologies: ['React', 'TailwindCSS', 'Storybook', 'NX Monorepo', 'TypeScript'],
      features: items[3].features,
      github: 'https://github.com/HassineHelmi',
      screenshot: '/bankerize-ui-toolkit.png'
    }
  ];
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getEducation = (t: any) => {
  return t.raw('items');
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getCertifications = (t: any): Certification[] => {
  const items = t.raw('items');
  return [
    {
      title: items[0].title,
      issuer: items[0].issuer,
      date: items[0].date,
      credentialId: 'AZ-900'
    },
    {
      title: items[1].title,
      issuer: items[1].issuer,
      date: items[1].date,
      credentialId: 'CCNA-SRWE'
    }
  ];
};