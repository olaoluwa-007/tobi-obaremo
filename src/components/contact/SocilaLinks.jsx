import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="mt-8 text-center flex justify-center gap-6 text-2xl">
      <a
        href="https://github.com/olaoluwa-007"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="hover:text-coral transition"
      >
        <FaGithub />
      </a>
      <a
        href="https://linkedin.com/in/tobi-obaremo"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="hover:text-coral transition"
      >
        <FaLinkedin />
      </a>
    </div>
  );
};

export default SocialLinks;
