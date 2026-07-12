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
  { name: 'SQL', color: '#3399ff', letter: 'SQL', icon: 'DiMsqlServer' },
  { name: 'REST APIs', color: '#F97316', letter: 'API', icon: 'SiPostman' },
  { name: 'Mongoose', color: '#880000', letter: 'MG', icon: 'SiMongodb' },
];

export const TOOLING_SKILLS = [
  { name: 'Git', color: '#F05032', letter: 'G', icon: 'SiGit' },
  { name: 'GitHub', color: 'var(--foreground)', letter: 'GH', icon: 'SiGithub' },
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
    email: 'usmansafdar12535@gmail.com',
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
      title: 'Vercel HR Management App',
      description:
        'A comprehensive HR management platform featuring payroll calculations, attendance tracking with clock heatmaps, applicant tracking system, and performance evaluations on a unified dashboard.',
      modules: ['mongodb', 'express', 'VueJS', 'nodejs'],
      image: '/projects/hrm.png',
      link: 'https://hr-managementapp.vercel.app/',
      featured: true,
    },
    {
      id: 'salon',
      title: 'Luxe Hair Saloon Web App',
      description:
        'A modern web application for a salon, featuring service booking, secure admin dashboard, and a fully responsive design.',
      modules: ['mongodb', 'express', 'react', 'nodejs'],
      image: '/projects/salon.png',
      link: 'https://hairsaloon-lovat.vercel.app/',
      featured: true,
    },
    {
      id: 'mentairo',
      title: 'Mentairo',
      description:
        'Mental health platform with secure real-time video consultations and patient–therapist matching.',
      modules: ['mongodb', 'express', 'react', 'nodejs'],
      image: '/projects/mentairo.png',
      status: 'Web version coming soon',
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
      title: 'FRONTEND INTERFACES',
      description:
        'Building fast, accessible React frontends wired to Express APIs and MongoDB-backed data.',
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
