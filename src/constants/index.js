import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  xmovies,
  tripguide,
  threejs,
  sitemaster,
  csforall,
  inkyy,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Development",
    icon: web,
  },
  {
    title: "React Native Development",
    icon: mobile,
  },
  {
    title: "Backend Development",
    icon: backend,
  },
  {
    title: "Problem Solving",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  /*
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },*/
];

const experiences = [
  {
    title: "Frontend Developer Intern",
    company_name: "SiteMaster",
    icon: sitemaster,
    iconBg: "#3b0054",
    date: "May 2024 - present",
    points: [
      "Developing and maintaining web and mobile applications using React.js and React Native.",
      "Collaborating with cross-functional teams including designers, and other developers to create high-quality products.",
      "Assisting in the optimization and performance tuning of mobile applications.",
      "Documenting code and processes for future reference.",
    ],
  },
  {
    title: "Teaching Assistant(DSA)",
    company_name: "CS For All",
    icon: csforall,
    iconBg: "#FFFFFF",
    date: "Feb 2024- May 2024",
    points: [
      "Provided 60+ optimized solutions to Data Structures and Algorithms problems in C++..",
      "Resolved contest problems and clarified doubts regarding CS fundamentals.",
      "Explained Object-oriented programming language concepts comprehensively.",
      
    ],
  },
  
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Inkyy",
    description:
      "A Real-Time Whiteboard Sharing App allowing user to collaborate in teams by sharing a canvas.Ideal for free-hand drawing and logic models.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJS",
        color: "green-text-gradient",
      },
      {
        name: "Socket.IO",
        color: "pink-text-gradient",
      },
    ],
    image: inkyy,
    source_code_link: "https://github.com/tulika1508/Inkyy",
  },
  {
    name: "XMovies",
    description:
      "A Movies and TV shows platform created to entertain the users according to their choice of genre.It empowers users to explore shows accoring to their choice.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "TMDB-API",
        color: "green-text-gradient",
      },
      {
        name: "Redux-toolkit",
        color: "pink-text-gradient",
      },
    ],
    image: xmovies,
    source_code_link: "https://github.com/tulika1508/XMovies-frontend",
  },
  
];

export { services, technologies, experiences, testimonials, projects };
