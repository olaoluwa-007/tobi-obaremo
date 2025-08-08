import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();


  return (
    <footer className="bg-white dark:bg-black text-black dark:text-white py-6 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">
          &copy; {currentYear} Tobi Obaremo. All rights reserved.
        </p>

        <div className="flex gap-4 text-xl">
          <a
            href="https://github.com/olaoluwa-007"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-coral transition-colors"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/tobi-obaremo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-coral transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>


    </footer>
  );
};

export default Footer;
