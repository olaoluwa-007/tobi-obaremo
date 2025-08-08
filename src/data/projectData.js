import fixerhub from "../assets/images/fixerhub.jpg";
import renewableSolutions from "../assets/images/renewablesolutions.jpg";
import budgetTracker from "../assets/images/budgettracker.jpg";

const projectsData = [
  {
    title: "Fixerhub",
    description:
      "Connect individuals and businesses in Nigeria with trusted artisans across a variety of skills.",
    techStack: ["React", "Vite", "Tailwind", "Node.js", "Express", "MongoDB"],
    image: fixerhub,
    live: "https://fixer-hub.vercel.app",
    github: null,
  },
  {
    title: "Solar Solutions",
    description:
      "A landing page with a clean and modern design for a solar energy company.",
    techStack: ["React", "Tailwind", "Vite", "Framer Motion"],
    image: renewableSolutions,
    live: "https://renewablesolutions.vercel.app",
    github: "https://github.com/olaoluwa-007/myrepo.git",
  },
  {
    title: "Budget Tracker",
    description:
      "A simple web app to track income and expenses. Built with HTML, CSS, and vanilla JavaScript to understand DOM manipulation.",
    techStack: ["HTML", "CSS", "JavaScript"],
    image: budgetTracker,
    live: "https://olaoluwa-007.github.io/budget_tracker",
    github: "https://github.com/olaoluwa-007/budget_tracker.git",
    type: "Practice",
  },
];

export default projectsData;
