import React from "react";
import skillsData from "../../data/skillsData";
import SkillCategory from "../../components/skills/SkillCategory";

const Skills = () => {
  return (
    <section
      id="skills"
      className="section px-6 sm:px-8 bg-white dark:bg-[#111111] text-black dark:text-white transition-colors duration-300"
    >
      <div className="text-center mb-12">
        <h2 className="heading">Tech Toolbox</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
          A snapshot of tools, libraries, and languages I use to build fast and
          scalable web apps.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {skillsData.map((category, idx) => (
          <SkillCategory
            key={idx}
            title={category.title}
            skills={category.stack}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
