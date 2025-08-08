import React from "react";
import profile from "../../assets/images/tobi.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      id="hero"
      ref={ref}
      className="section min-h-screen flex flex-col justify-center items-center text-center bg-white text-black dark:bg-black dark:text-white pt-20 transition-colors duration-300"
    >
      <motion.img
        src={profile}
        alt="Tobi Obaremo"
        loading="lazy"
        className="w-32 h-32 md:w-40 md:h-40 rounded-full shadow-lg mb-6 object-cover"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
      />

      <motion.h1
        className="text-4xl md:text-6xl font-extrabold leading-tight mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        Crafting Scalable Web Solutions
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl text-mint dark:text-ivory max-w-xl mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        I'm <span className="text-coral font-semibold">Tobi Obaremo</span>, a
        Full Stack Developer (MERN) passionate about building clean, functional,
        and performance-driven web experiences.
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <a href="#projects" className="btn-primary text-center w-full sm:w-auto">
          View Projects
        </a>
        <a href="#contact" className="btn-outline text-center w-full sm:w-auto">
          Contact Me
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
