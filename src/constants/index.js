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
  iiest,
  national,
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
    id: "education",
    title: "Education",
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
      "Developing and maintaining web application using React.js.",
      "Collaborating with cross-functional teams including designers, and other developers to create high-quality products.",
      "Assisting in the optimization and performance tuning of application.",
      "Documenting code and processes for future reference.",
    ],
  },
  {
    title: "Software Tester",
    company_name: "SiteMaster",
    icon: sitemaster,
    iconBg: "#3b0054",
    date: "April 2024- May 2024",
    points: [
      "Delivered high quality solutions through meticulous manual testing methodologies.",
      "Designed over 50 test scenarios and test cases for the mobile application.",
    
      
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

const educations = [
  {
    title: "Bachelor of Technology(B.Tech)",
    company_name: "IIEST SHIBPUR",
    icon: iiest,
    iconBg: "#FFFFFF",
    date: "Dec 2021 - May 2025(expected)",
    points: [
      "CGPA(Till 5th semester): 8.89/10.0",
      "Relevant coursework: Data Structures, OOPs",
      "Subjects learned: Operating Systems, DBMS ",
    ],
  },
  {
    title: "Higher Secondary",
    company_name: "National English School,Kolkata (C.I.S.C.E)",
    icon: national,
    iconBg: "#FFFFFF",
    date: "2020",
    points: [
      "Score: 92.4% with 99 in Computer Science",
      
      
    ],
  },
  {
    title: "Secondary",
    company_name: "National English School,Kolkata (C.I.S.C.E)",
    icon: national,
    iconBg: "#FFFFFF",
    date: "2018",
    points: [
      "Score: 93% with 99 in Computer Science",
      
      
    ],
  },
  
];

export { services, technologies, experiences, testimonials, projects,educations };
