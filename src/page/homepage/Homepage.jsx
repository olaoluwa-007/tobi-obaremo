import React from "react";
import Hero from "../../sections/hero/Hero";
import About from "../../sections/about/About";
import Projects from "../../sections/project/Project";
import Skills from "../../sections/skill/Skills";
import Contact from "../../sections/contact/Contact";
import { Helmet } from "react-helmet-async";


const Homepage = () => {
  return (
    <>
      <Helmet>
        <title>Tobi Obaremo | Full Stack Developer</title>
        <meta name="google-site-verification" content="google11db73dc334298b8.html"/>
        <meta
          name="description"
          content="Portfolio of Tobi Obaremo, a passionate Full Stack Developer building scalable and modern web applications."
        />
        <link rel="canonical" href="https://tobi-obaremo.vercel.app" />

        {/* Open Graph (LinkedIn, Facebook) */}
        <meta
          property="og:title"
          content="Tobi Obaremo | Full Stack Developer"
        />
        <meta
          property="og:description"
          content="Building scalable and modern web applications."
        />
        <meta
          property="og:url"
          content="https://tobi-obaremo.vercel.app"
        />
        <meta
          property="og:image"
          content="https://tobi-obaremo.vercel.app/preview.jpg"
        />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Tobi Obaremo | Full Stack Developer"
        />
        <meta
          name="twitter:description"
          content="Portfolio showcasing clean, responsive, and modern projects."
        />
        <meta
          name="twitter:image"
          content="https://tobi-obaremo.vercel.app/preview.jpg"
        />
      </Helmet>

      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
};

export default Homepage;
