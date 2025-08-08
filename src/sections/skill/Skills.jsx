import React from "react";
import skillsData from "../../data/skillsData";
import SkillCategory from "../../components/skills/SkillCategory";
import { motion } from "framer-motion";

const Skills = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
  };

  return (
    <section
      id="skills"
      className="section px-6 sm:px-8 bg-white dark:bg-[#111111] text-black dark:text-white transition-colors duration-300"
    >
      <motion.div
        className="text-center mb-12"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="heading">Tech Toolbox</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
          A snapshot of tools, libraries, and languages I use to build fast and
          scalable web apps.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {skillsData.map((category, idx) => (
          <motion.div
            key={idx}
            custom={idx}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <SkillCategory title={category.title} skills={category.stack} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
