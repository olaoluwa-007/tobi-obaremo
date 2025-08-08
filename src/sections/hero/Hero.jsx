import React from "react";
import profile from "../../assets/images/tobi.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="section min-h-screen flex flex-col justify-center items-center text-center bg-white text-black dark:bg-black dark:text-white pt-20 transition-colors duration-300"
    >
      <img
        src={profile}
        alt="Tobi Obaremo"
        className="w-32 h-32 md:w-40 md:h-40 rounded-full shadow-lg mb-6 object-cover"
      />

      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
        Crafting Scalable Web Solutions
      </h1>

      <p className="text-lg md:text-xl text-mint dark:text-ivory max-w-xl mb-8">
        I'm <span className="text-coral font-semibold">Tobi Obaremo</span>, a
        Full Stack Developer (MERN) passionate about building clean, functional,
        and performance-driven web experiences.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <a href="#projects" className="btn-primary text-center w-full sm:w-auto">
          View Projects
        </a>

        <a href="#contact" className="btn-outline text-center w-full sm:w-auto">
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Hero;
