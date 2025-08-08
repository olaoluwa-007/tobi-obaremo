import React from "react";
import SkillBadge from "./SkillBadge";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
};

const badgeVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const SkillCategory = ({ title, skills }) => {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-4 text-coral">{title}</h3>

      <motion.ul
        className="flex flex-wrap gap-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skills.map((skill, idx) => (
          <motion.li key={idx} variants={badgeVariants}>
            <SkillBadge name={skill.name} icon={skill.icon} />
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default SkillCategory;
