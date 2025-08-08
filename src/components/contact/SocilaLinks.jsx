import React, { useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion, useInView } from "framer-motion";

const SocialLinks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const iconVariants = {
    initial: { opacity: 0, y: 20 },
    animate: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.2,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div
      ref={ref}
      className="mt-8 text-center flex justify-center gap-6 text-2xl"
    >
      {[ 
        { icon: <FaGithub />, href: "https://github.com/olaoluwa-007", label: "GitHub" },
        { icon: <FaLinkedin />, href: "https://linkedin.com/in/tobi-obaremo", label: "LinkedIn" },
      ].map((link, i) => (
        <motion.a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className="hover:text-coral transition"
          custom={i}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={iconVariants}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
        >
          {link.icon}
        </motion.a>
      ))}
    </div>
  );
};

export default SocialLinks;
