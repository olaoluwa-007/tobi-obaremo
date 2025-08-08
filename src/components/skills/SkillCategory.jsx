import React from "react";
import SkillBadge from "./SkillBadge";


const SkillCategory = ({ title, skills }) => {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-4 text-coral">{title}</h3>
       <ul className="flex flex-wrap gap-3">
        {skills.map((skill, idx) => (
          <li key={idx}>
            <SkillBadge name={skill.name} icon={skill.icon} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCategory;
