import React from "react";
import projectsData from "../../data/projectData";
import ProjectCard from "../../components/projectCard/ProjectCard";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      id="projects"
      className="section bg-[#F9FAFB] dark:bg-black transition-colors duration-300"
      ref={ref}
    >
      <motion.div
        className="max-w-6xl mx-auto"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Title + Intro */}
        <motion.div
          variants={cardVariants}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A glimpse into what I’ve been building recently — from tools to solve real-world problems to passion-driven experiments.
          </p>
        </motion.div>

        {/* Grid of Projects */}
        <motion.div
          className="grid gap-10 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
        >
          {projectsData.map((project, idx) => (
            <motion.div key={idx} variants={cardVariants}>
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
