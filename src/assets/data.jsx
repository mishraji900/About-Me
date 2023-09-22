import {
  AiFillHome,
  AiFillFolderOpen,
} from "react-icons/ai";
import {
  BiSolidUser,
  BiSolidEnvelopeOpen,
  BiSolidBriefcase,
  BiSolidGraduation
} from 'react-icons/bi'
import {
  GPT_3,
  vchat,
  blog,
  rental,
  expense,
  hotel,
  Vitejs,
  Html,
  Css,
  Js,
  React,
  NextJs,
  Php,
  TailCss,
  Material,
  java,
  c
} from "./assets";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <AiFillHome className="nav__icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "About",
    icon: <BiSolidUser className="nav__icon" />,
    path: "/about",
  },

  {
    id: 3,
    name: "Portfolio",
    icon: <AiFillFolderOpen className="nav__icon" />,
    path: "/portfolio",
  },

  {
    id: 4,
    name: "Contact",
    icon: <BiSolidEnvelopeOpen className="nav__icon" />,
    path: "/contact",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "First Name : ",
    description: "Mayank",
  },

  {
    id: 2,
    title: "Last Name : ",
    description: "Mishra",
  },

  {
    id: 3,
    title: "Age : ",
    description: "21 Years",
  },

  {
    id: 4,
    title: "Nationality : ",
    description: "Indian",
  },

  {
    id: 5,
    title: "Freelance : ",
    description: "Available",
  },

  {
    id: 6,
    title: "Address : ",
    description: "Prayagraj",
  },

  {
    id: 7,
    title: "Phone : ",
    description: "+91 7524004100",
  },

  {
    id: 8,
    title: "Email : ",
    description: "mayank2021mishra@gmail.com",
  },

  {
    id: 10,
    title: "Langages : ",
    description: "Hindi, English",
  },
];

export const stats = [
  {
    id: 1,
    no: "3+",
    title: "Years of",
    description: "Experience",
  },

  {
    id: 2,
    no: "12+",
    title: "Completed",
    description: "Projects",
  },
];

export const resume = [
  {
    id: 1,
    category: "experience",
    icon: <BiSolidBriefcase />,
    year: "July 2023 - PRESENT",
    job: "Web Developer",
    title: "Marketonic India",
    desc: "My time as a Trainee at Marktonic India was a transformative experience. I closely shadowed and assisted professionals, gaining hands-on industry knowledge. Engaging training programs and workshops enhanced my skills. The mentorship and support from senior professionals fueled my personal and professional growth.",
  },

  {
    id: 2,
    category: "experience",
    icon: <BiSolidBriefcase />,
    year: "May/2023-June/2023",
    title: "JP Morgan & Chase",
    job: "Agile (Trainee)",
    desc: `JP Morgan and Chase's Agile training was an invaluable experience, providing a deep understanding of Agile methodologies and their application in corporate settings. Through interactive sessions and practical exercises, I gained skills in adaptability, collaboration, and iterative development. The training emphasized cross-functional teamwork and continuous improvement. It has equipped me with a competitive edge in project management.`,
  },

  {
    id: 3,
    category: "education",
    icon: <BiSolidGraduation />,
    year: "2021-2023 present",
    job: "3rd Year in Engeneering",
    title: "KIIT University",
    desc: "During my two years in CSE engineering, I focused on web development, specifically React, Vite, and Next.js. I honed my skills in these frameworks, gaining expertise in modern web development technologies. Additionally, I actively participated in the robotics society, enhancing my problem-solving and teamwork abilities. I achieved a commendable CGPA of 8.43, reflecting my commitment to academic excellence. Overall, these two years were transformative, allowing me to excel in both technical skills and extracurricular pursuits.",
  },

  {
    id: 4,
    category: "education",
    icon: <BiSolidGraduation />,
    year: "2019-2020",
    job: "12th",
    title: "Maharshi Patanjali Vidya Mandir",
    desc: "In my Class 12 experience, I learned leadership and teamwork through playing volleyball and competing at the state level. It taught me the value of collaboration, communication, and perseverance. Alongside my sports achievements, I secured an impressive 83% in PCM subjects, including physical education. Balancing academics and sports improved my time management skills. Overall, this transformative period shaped me into a well-rounded individual ready to excel in various areas of life.",
  },
  {
    id: 5,
    category: "experience",
    icon: <BiSolidBriefcase />,
    year: "July/2023-August/2023",
    title: "BharatIntern",
    job: "BharatIntern (Internship)",
    desc: `During internship, I focused on web development, specifically React-Js. I honed my skills in these frameworks, gaining expertise in modern web development technologies.`,
  },
  {
    id: 2,
    category: "experience",
    icon: <BiSolidBriefcase />,
    year: "August/2023-September/2023",
    title: "CodeClause",
    job: "CodeClause (Internship)",
    desc: `During internship, I focused on web development, specifically React-Js. I honed my skills in these frameworks, gaining expertise in modern web development technologies.`,
  },
];

export const skills = [
  {
    id: 1,
    title: "C++",
    percentage: "60",
    img: c,
  },
  {
    id: 2,
    title: "Java",
    percentage: "80",
    img: java,
  },
  {
    id: 3,
    title: "Html",
    percentage: "89",
    img: Html,
  },
  {
    id: 4,
    title: "Javascript",
    percentage: "89",
    img: Js,
  },
  {
    id: 5,
    title: "Css",
    percentage: "85",
    img: Css,
  },
  {
    id: 6,
    title: "React-Js",
    percentage: "80",
    img: React,
  },
  {
    id: 7,
    title: "Next-Js",
    percentage: "70",
    img: NextJs,
  },
  {
    id: 8,
    title: "Vite",
    percentage: "65",
    img: Vitejs,
  },
  {
    id: 9,
    title: "Tailwind Css",
    percentage: "70",
    img: TailCss,
  },
  {
    id: 10,
    title: "Material Ui",
    percentage: "70",
    img: Material,
  },
  {
    id: 11,
    title: "Php",
    percentage: "30",
    img: Php,
  },
];

export const projectdetails = [
  {
    id: 1,
    name: "Jibbles-Rental",
    description:
      "I designed this rental website using nextjs and tailwindcss. I also used 2 apis. First to import cars details and names. Second to import 3D model.",
    urlto: "https://jibblerentals-67am.vercel.app/?manufacturer=audi&model=q5",
    image: rental,
    date: "15/July/2023",
  },
  {
    id: 2,
    name: "Gericth",
    description:
      "I designed this restraunt add website by being inspired with KegsNBarral website",
    urlto: "https://gericht-c326e.web.app/",
    image: hotel,
    date: "30/September/2022",
  },
  {
    id: 3,
    name: "Bean N Page",
    description:
      "I designed this blog website from scratch using react js, tailwind and material ui.I applied login functionality using auth0.",
    urlto: "https://bean-page.web.app/",
    image: blog,
    date: "15/June/2023",
  },
  {
    id: 4,
    name: "Vchat",
    description:
      "I designed this tick-tock clone named VChat. i used Reactjs and sanity(in backend) for css i used tailwind. There is a server error due to the fact that I am not good in backend work.",
    urlto: "https://vchat-sage.vercel.app/?topic=codeing",
    image: vchat,
    date: "10/November/2023",
  },
  {
    id: 5,
    name: "GPT-3",
    description:
      "I designed this information and add website for functionality of api and gpt 3 apis.",
    urlto: "https://gpt3-e9856.web.app/",
    image: GPT_3,
    date: "1/september/2023",
  },
  {
    id: 6,
    name: "Expenses",
    description:
      "It is my first ever project which I made using reactjs only and basic css. I made it during an online youtube course to learn react for first time.",
    urlto: "https://expemse-tracker.web.app/",
    image: expense,
    date: "15/July/2023",
  },
];
