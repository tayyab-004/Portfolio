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
  skillshaks,
  tesla,
  shopify,
  carrent,
  doctorhub,
  eshop,
  gamepedia,
  jobit,
  tripguide,
  threejs,
  express,
  canva,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "MERN Stack Developer",
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
    name: "Express JS",
    icon: express,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "canva",
    icon: canva,
  },
];

const experiences = [
  {
    title: "Backend Developer",
    company_name: "Skillshaks",
    icon: skillshaks,
    iconBg: "#383E56",
    date: "April 2024 - July 2024",
    points: [
      "Developing and maintaining web applications using node.js and other related technologies.",
      "Collaborating with cross-functional teams including performance, product managers, and other developers to create high-quality products.",
      "Implementing API integration and ensuring server compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "Skillshaks",
    icon: skillshaks,
    iconBg: "#E6DEDD",
    date: "April 2024 - July 2024",
    points: [
      "Developing and maintaining web applications using node.js and other related technologies.",
      "Collaborating with cross-functional teams including performance, product managers, and other developers to create high-quality products.",
      "Implementing API integration and ensuring server compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "Skillshaks",
    icon: skillshaks,
    iconBg: "#383E56",
    date: "April 2024 - July 2024",
    points: [
      "Developing and maintaining web applications using node.js and other related technologies.",
      "Collaborating with cross-functional teams including performance, product managers, and other developers to create high-quality products.",
      "Implementing API integration and ensuring server compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "Skillshaks",
    icon: skillshaks,
    iconBg: "#E6DEDD",
    date: "April 2024 - July 2024",
    points: [
      "Developing and maintaining web applications using node.js and other related technologies.",
      "Collaborating with cross-functional teams including performance, product managers, and other developers to create high-quality products.",
      "Implementing API integration and ensuring server compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Tayyab proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Tayyab does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Tayyab optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Doctor Hub",
    description:
      "Web-based platform that enabling patients to book appointments, doctors to manage schedules and earnings, and admins to oversee operations, with features like profile management and Razorpay payments.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: doctorhub,
    source_code_link: "https://github.com/tayyab-004/Doctor-Hub",
  },
  {
    name: "E Shop",
    description:
      "ECommerce application that enabling seamless product browsing, user authentication, and secure PayPal payments. Features include an admin dashboard, responsive UI with Tailwind CSS and cart management.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux-toolkit",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: eshop,
    source_code_link: "https://github.com/tayyab-004/e-shop",
  },
  {
    name: "Game Pedia",
    description:
      "GamePedia is a dynamic react web app using RAWG API, offering comprehensive game details, trailers, and screenshots. Features include dark/light mode toggle, personalized wishlists, favoriting and search filters.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "chakra-ui",
        color: "pink-text-gradient",
      },
    ],
    image: gamepedia,
    source_code_link: "https://gamepedia-tayyab.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
