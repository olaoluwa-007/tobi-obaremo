import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import DarkModeToggle from "../darkMode/DarkModeToggle";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = ["about", "projects", "skills", "contact"];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 bg-white/70 dark:bg-black/70 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-all"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-coral tracking-tight">
          Tobi Obaremo
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="link-hover capitalize"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <DarkModeToggle />
        </nav>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-coral focus:outline-none"
          onClick={toggleMenu}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Animation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-black px-6 py-4 flex flex-col items-start gap-4 text-sm font-medium"
          >
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="block link-hover capitalize"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <DarkModeToggle />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
