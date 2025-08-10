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
        <meta name="google-site-verification" content="cNH_e0e9xgVHfR54-Am35EupSonPyJsGROp3hKf8ODk" />
        <title>Web Developer in Nigeria | Tobi Obaremo - Full Stack Developer</title>
        <meta
          name="description"
          content="Tobi Obaremo is a skilled web developer in Nigeria, specializing in building fast, modern, and scalable web applications using the MERN stack."
        />
        <link rel="canonical" href="https://tobi-obaremo.vercel.app" />

        {/* Open Graph (LinkedIn, Facebook) */}
        <meta
          property="og:title"
          content="Web Developer in Nigeria | Tobi Obaremo - Full Stack Developer"
        />
        <meta
          property="og:description"
          content="Portfolio of Tobi Obaremo, a professional web developer in Nigeria, delivering clean, responsive, and performance-driven web applications."
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
          content="Web Developer in Nigeria | Tobi Obaremo - Full Stack Developer"
        />
        <meta
          name="twitter:description"
          content="Portfolio showcasing the work of Tobi Obaremo , a professional web developer in Nigeria with clean, responsive, and modern projects."
        />
        <meta
          name="twitter:image"
          content="https://tobi-obaremo.vercel.app/preview.jpg"
        />

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Tobi Obaremo",
              "jobTitle": "Web Developer",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "Nigeria"
              },
              "url": "https://tobi-obaremo.vercel.app",
              "sameAs": [
                "https://github.com/olaoluwa-007",
                "https://linkedin.com/in/tobi-obaremo"
              ]
            }
          `}
        </script>
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
