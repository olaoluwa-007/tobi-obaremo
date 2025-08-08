import React from "react";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const cardHover = {
  rest: { scale: 1, boxShadow: "0px 0px 0px rgba(0,0,0,0)" },
  hover: {
    scale: 1.02,
    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  tap: { scale: 0.98 },
};

const ProjectCard = ({
  title,
  description,
  techStack,
  image,
  live,
  github,
  type,
}) => {
  return (
    <motion.div
      variants={cardHover}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      animate="rest"
      className="relative bg-white dark:bg-zinc-900 rounded-xl overflow-hidden transition-all"
    >
      {type && (
        <span className="absolute top-3 right-3 text-xs uppercase bg-gray-200 dark:bg-zinc-700 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full z-10">
          {type}
        </span>
      )}

      <img
        src={image}
        alt={title}
        loading="lazy"
        className="w-full h-56 object-cover"
      />

      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold text-black dark:text-white">
          {title}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="bg-mint/20 text-mint dark:bg-mint/10 dark:text-mint text-xs font-medium px-2.5 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 pt-2">
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-coral hover:underline text-sm flex items-center gap-1"
            >
              <ExternalLink size={16} /> Live Site
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-coral hover:underline text-sm flex items-center gap-1"
            >
              <Github size={16} /> GitHub
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
