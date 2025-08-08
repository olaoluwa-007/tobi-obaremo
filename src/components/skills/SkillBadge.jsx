import React from "react";
import { motion } from "framer-motion";

const SkillBadge = ({ name, icon }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="flex items-center gap-2 border border-coral dark:border-mint px-3 py-1 rounded-full text-sm font-medium text-coral dark:text-mint bg-coral/10 dark:bg-mint/10 transition"
    >
      <span className="text-lg">{icon}</span>
      <span>{name}</span>
    </motion.div>
  );
};

export default SkillBadge;
