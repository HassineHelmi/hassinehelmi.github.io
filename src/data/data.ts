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
  screenshot?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export interface Service {
  title: string;
  description: string;
  features: string[];
  technologies: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

type Translate = (key: string) => unknown;

export const contactInfo = {
  phone: '+216 28372002',
  email: 'helmi.hassine1@gmail.com',
  linkedin: 'https://linkedin.com/in/helmi-hassine',
  github: 'https://github.com/HassineHelmi',
  whatsapp: 'https://wa.me/21628372002',
};

const CREDENTIALS = ['AZ-900', 'CCNA-SRWE'];

export const getSkillCategories = (t: Translate): SkillCategory[] => [
  {
    title: String(t('Skills.categories.programming')),
    skills: ['Java', 'JavaScript', 'TypeScript', 'Python'],
  },
  {
    title: String(t('Skills.categories.frontend')),
    skills: ['React.js', 'Next.js', 'Tailwind CSS', 'Material UI', 'Figma'],
  },
  {
    title: String(t('Skills.categories.backend')),
    skills: ['Spring Boot', 'NestJS', 'Node.js', 'PostgreSQL', 'MySQL', 'Firebase'],
  },
  {
    title: String(t('Skills.categories.mobile')),
    skills: ['React Native', 'Flutter', 'Android', 'Docker', 'Git'],
  },
];

export const getServices = (t: Translate): Service[] => {
  const items = t('Services.items') as Array<{
    title: string;
    description: string;
    features: string[];
  }>;

  const technologies = [
    ['React', 'Next.js', 'Spring Boot', 'NestJS', 'PostgreSQL', 'TypeScript'],
    ['Tailwind CSS', 'Material UI', 'Figma', 'Storybook', 'Sass'],
    ['React Native', 'Flutter', 'Firebase', 'Android', 'iOS'],
    ['Docker', 'AWS', 'GitHub Actions', 'Jenkins', 'Kubernetes'],
    ['Python', 'TensorFlow', 'OpenCV', 'Machine Learning'],
  ];

  return items.map((item, index) => ({
    title: item.title,
    description: item.description,
    features: item.features,
    technologies: technologies[index] ?? [],
  }));
};

export const getExperiences = (t: Translate): Experience[] => {
  const items = t('Experience.items') as Array<{
    title: string;
    company: string;
    period: string;
    description: string;
  }>;

  const technologies = [
    ['Next.js', 'Spring Boot', 'Java', 'TypeScript', 'PostgreSQL'],
    ['React', 'Tailwind CSS', 'NX', 'TypeScript', 'Storybook'],
    ['React', 'JavaScript', 'CSS', 'Design systems', 'Git'],
    ['IoT', 'Python', 'Computer vision', 'Raspberry Pi'],
  ];

  return items.map((item, index) => ({
    ...item,
    technologies: technologies[index] ?? [],
  }));
};

export const getProjects = (t: Translate): Project[] => {
  const items = t('Projects.items') as Array<{
    title: string;
    description: string;
    features: string[];
  }>;

  const details: Array<Pick<Project, 'technologies' | 'github' | 'screenshot'>> = [
    {
      technologies: ['Node.js', 'NestJS', 'PostgreSQL', 'Prisma', 'React', 'TypeScript'],
      github: contactInfo.github,
      screenshot: '/ironERP.png',
    },
    {
      technologies: ['Next.js', 'Spring Boot', 'Keycloak', 'AWS', 'PostgreSQL', 'TypeScript'],
      github: contactInfo.github,
      screenshot: '/talent-cloud.png',
    },
    {
      technologies: ['React Native', 'Firebase', 'JavaScript', 'Stripe'],
      github: contactInfo.github,
      screenshot: '/dealhub.png',
    },
    {
      technologies: ['React', 'Tailwind CSS', 'Storybook', 'NX', 'TypeScript'],
      github: contactInfo.github,
      screenshot: '/bankerize-ui-toolkit.png',
    },
  ];

  return items.map((item, index) => ({
    title: item.title,
    description: item.description,
    features: item.features,
    ...details[index],
  }));
};

export const getEducation = (t: Translate): EducationItem[] =>
  t('Education.items') as EducationItem[];

export const getCertifications = (t: Translate): Certification[] => {
  const items = t('Certifications.items') as Array<{
    title: string;
    issuer: string;
    date: string;
  }>;

  return items.map((item, index) => ({
    ...item,
    credentialId: CREDENTIALS[index],
  }));
};
