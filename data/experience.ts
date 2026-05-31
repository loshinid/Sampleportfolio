import { Experience, Education } from '@/types';

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Frontend Developer Intern',
    company: 'Tech Innovations Inc.',
    location: 'San Francisco, CA',
    startDate: 'Jan 2024',
    endDate: 'Present',
    description: 'Developing responsive web applications using React and Next.js. Collaborating with design team to implement pixel-perfect UI components. Optimizing application performance and implementing accessibility features.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    type: 'internship',
  },
  {
    id: '2',
    title: 'UI/UX Design Intern',
    company: 'Creative Digital Agency',
    location: 'New York, NY',
    startDate: 'Jun 2023',
    endDate: 'Dec 2023',
    description: 'Designed user interfaces for web and mobile applications. Conducted user research and usability testing. Created wireframes, prototypes, and design systems. Collaborated with developers to ensure design implementation.',
    technologies: ['Figma', 'Adobe XD', 'User Research', 'Prototyping'],
    type: 'internship',
  },
  {
    id: '3',
    title: 'Freelance Web Developer',
    company: 'Self-Employed',
    location: 'Remote',
    startDate: 'Jan 2023',
    endDate: 'May 2023',
    description: 'Built custom websites for small businesses and startups. Developed responsive designs and implemented modern web technologies. Managed client relationships and delivered projects on time.',
    technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Stripe'],
    type: 'freelance',
  },
];

export const education: Education[] = [
  {
    id: '1',
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University of Technology',
    location: 'Boston, MA',
    startDate: 'Sep 2021',
    endDate: 'May 2025',
    gpa: '3.8/4.0',
    description: 'Specializing in Software Engineering and Human-Computer Interaction. Relevant coursework: Data Structures, Algorithms, Web Development, Database Systems, UI/UX Design.',
  },
  {
    id: '2',
    degree: 'Full Stack Web Development Bootcamp',
    institution: 'Code Academy',
    location: 'Online',
    startDate: 'Jun 2022',
    endDate: 'Aug 2022',
    description: 'Intensive 12-week program covering modern web development technologies. Built multiple full-stack applications and learned industry best practices.',
  },
];
