import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiVite,
  SiMongodb,
  SiExpress,
  SiPostman,
  SiNetlify,
  SiVercel,
  SiRender,
  SiSwagger,
  SiThunderstore,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { BiLogoVisualStudio } from "react-icons/bi";

const skillsData = [
  {
    title: "Frontend",
    stack: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "React", icon: <FaReact /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Vite", icon: <SiVite /> },
    ],
  },
  {
    title: "Backend",
    stack: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Mongoose", icon: <SiMongodb /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "Thunder Client", icon: <SiThunderstore /> },
    ],
  },
  {
    title: "Tools & DevOps",
    stack: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "VS Code", icon: <BiLogoVisualStudio /> },
      { name: "Netlify", icon: <SiNetlify /> },
      { name: "Vercel", icon: <SiVercel /> },
      { name: "Render", icon: <SiRender /> },
      { name: "Swagger UI", icon: <SiSwagger /> },
    ],
  },
  {
    title: "Other",
    stack: [{ name: "REST APIs", icon: <TbApi /> }],
  },
];

export default skillsData;
