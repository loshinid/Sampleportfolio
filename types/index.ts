// Project interface
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: 'frontend' | 'fullstack' | 'ui-ux' | 'mobile';
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
}

// Skill interface
export interface Skill {
  id: string;
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'ui-ux' | 'tools' | 'languages';
  icon?: string;
}

// Experience interface
export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  technologies: string[];
  type: 'internship' | 'freelance' | 'fulltime';
}

// Education interface
export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  description: string;
}

// Testimonial interface
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
  rating: number;
}

// Service interface
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

// Contact form interface
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Social link interface
export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;
}

// Stat interface
export interface Stat {
  id: string;
  label: string;
  value: number;
  suffix?: string;
}
