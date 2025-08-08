
import React from "react";
import projectsData from "../../data/projectData";
import ProjectCard from "../../components/projectCard/ProjectCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="section bg-[#F9FAFB] dark:bg-black transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-black dark:text-white">
          Featured Projects
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          A glimpse into what I’ve been building recently — from tools to solve real-world problems to passion-driven experiments.
        </p>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
