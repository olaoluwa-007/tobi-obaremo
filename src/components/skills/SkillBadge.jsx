import React from "react";

const SkillBadge = ({ name, icon }) => {
  return (
    <div className="flex items-center gap-2 border border-coral dark:border-mint px-3 py-1 rounded-full text-sm font-medium text-coral dark:text-mint bg-coral/10 dark:bg-mint/10 transition">
      <span className="text-lg">{icon}</span>
      <span>{name}</span>
    </div>
  );
};

export default SkillBadge;
