export const FRONTEND_SKILLS = [
  { name: 'JavaScript', color: '#F7DF1E', letter: 'JS', icon: 'SiJavascript' },
  { name: 'React', color: '#61DAFB', letter: 'R', icon: 'SiReact' },
  { name: 'Flutter', color: '#47C5FB', letter: 'F', icon: 'SiFlutter' },
  { name: 'Tailwind CSS', color: '#38BDF8', letter: 'TW', icon: 'SiTailwindcss' },
  { name: 'HTML5', color: '#E34F26', letter: 'H5', icon: 'SiHtml5' },
  { name: 'CSS3', color: '#1572B6', letter: 'C3', icon: 'SiCss' },
  { name: 'Vite', color: '#646CFF', letter: 'V', icon: 'SiVite' },
];

export const BACKEND_SKILLS = [
  { name: 'Node.js', color: '#339933', letter: 'N', icon: 'SiNodedotjs' },
  { name: 'Express', color: 'var(--foreground)', letter: 'E', icon: 'SiExpress' },
  { name: 'MongoDB', color: '#47A248', letter: 'M', icon: 'SiMongodb' },
  { name: 'PostgreSQL', color: '#4169E1', letter: 'PS', icon: 'SiPostgresql' },
  { name: 'FastAPI', color: '#009688', letter: 'FA', icon: 'SiFastapi' },
  { name: 'Python', color: '#3776AB', letter: 'Py', icon: 'SiPython' },
  { name: 'Firebase', color: '#FFCA28', letter: 'FB', icon: 'SiFirebase' },
  { name: 'SQL', color: '#3399ff', letter: 'SQL', icon: 'DiMsqlServer' },
  { name: 'REST APIs', color: '#F97316', letter: 'API', icon: 'SiPostman' },
  { name: 'Mongoose', color: '#880000', letter: 'MG', icon: 'SiMongodb' },
];

export const TOOLING_SKILLS = [
  { name: 'Git', color: '#F05032', letter: 'G', icon: 'SiGit' },
  { name: 'GitHub', color: 'var(--foreground)', letter: 'GH', icon: 'SiGithub' },
  { name: 'Android Studio', color: '#3DDC84', letter: 'AS', icon: 'SiAndroidstudio' },
  { name: 'Postman', color: '#FF6C37', letter: 'P', icon: 'SiPostman' },
  { name: 'Figma', color: '#F24E1E', letter: 'F', icon: 'SiFigma' },
];


export const portfolioData = {
  profile: {
    name: 'Muhammad Usman Safdar',
    title: 'Full Stack Developer',
    role: 'Full Stack Developer',
    availability: 'Open for new opportunities',
    location: 'Remote / Global',
    email: 'usmansafdar2025@gmail.com',
    cvUrl: '/Muhammad_Usman_CV.pdf',
    socials: {
      github: 'https://github.com/usmansHUB',
      linkedin: 'https://www.linkedin.com/in/usmansafdar2025',
      twitter: 'https://x.com/oiiUsman',
      instagram: 'https://www.instagram.com/oiiusmann',
      facebook: 'https://www.facebook.com/usman.safdar.14289',
      discord: 'https://discord.com/oiiUsman',
    },
    formspreeEndpoint: 'https://formspree.io/f/xgoqzgza',
  },
  projects: [
    {
      id: 'hrm',
      title: 'HR Management App',
      description:
        'A full-stack HR management platform designed to simplify employee management and organizational workflows, featuring interactive dashboards and structured database handling.',
      modules: ['mongodb', 'express', 'react', 'nodejs'],
      image: '/projects/hrm.png',
      link: 'https://hr-managementapp.vercel.app/',
      featured: true,
    },
    {
      id: 'salon',
      title: 'Luxe Grooming',
      description:
        'A salon booking and management solution using React JS, Tailwind CSS, Express JS, and MongoDB, featuring appointment booking and a secure admin dashboard.',
      modules: ['mongodb', 'express', 'react', 'nodejs'],
      image: '/projects/salon.png',
      link: 'https://hairsaloon-lovat.vercel.app/',
      featured: true,
    },
  ],
  roles: [
    {
      id: 'fullstack',
      title: 'FULL STACK ENGINEERING',
      description:
        'Architecting robust MERN applications — React on the front, Express + Node on the back, MongoDB at the core.',
    },
    {
      id: 'frontend',
      title: 'FRONTEND & MOBILE',
      description:
        'Building responsive React web apps and cross-platform mobile applications with Flutter & Dart.',
    },
    {
      id: 'backend',
      title: 'APIS & DATA',
      description:
        'Designing secure REST APIs with Express and Node.js, with MongoDB schemas tuned for performance.',
    },
  ],
  skillCategories: [
    {
      title: 'Frontend',
      skills: FRONTEND_SKILLS,
    },
    {
      title: 'Backend & Database',
      skills: BACKEND_SKILLS,
    },
    {
      title: 'Tools',
      skills: TOOLING_SKILLS,
    },
  ],
};
