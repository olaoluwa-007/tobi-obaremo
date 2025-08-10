import React from "react";
import resume from "../../assets/files/Tobi-Obaremo-resume.pdf";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      id="about"
      ref={ref}
      className="section px-6 sm:px-8 bg-ivory dark:bg-[#111111] transition-colors duration-300"
    >
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <h2 className="heading text-coral">About Me</h2>

        <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-black dark:text-white leading-relaxed">
          I'm <span className="font-semibold text-coral">Tobi Obaremo</span>, a
          passionate web developer and a Full Stack Developer from Nigeria with a knack for building elegant,
          fast, and scalable web apps. I specialize in the{" "}
          <strong>MERN stack</strong> — from crafting pixel-perfect UIs to
          building robust backend APIs.
        </p>

        <p className="mt-6 max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Beyond code, I value clean design, collaboration, and meaningful work.
          Whether it's shipping a product from 0 to 1 or optimizing a mature
          system, I love solving real-world problems with thoughtful
          engineering, clean architecture, and a focus on user experience.
        </p>

        <div className="mt-8">
          <a
            href={resume}
            download
            className="inline-flex items-center gap-2 bg-coral text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition"
          >
            <FiDownload size={18} />
            Download CV
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
