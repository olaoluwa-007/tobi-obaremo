import React from "react";
import ContactForm from "../../components/contact/ContactForm";
import SocialLinks from "../../components/contact/SocilaLinks";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="section bg-white dark:bg-black text-black dark:text-white transition-colors duration-300"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="text-center mb-12">
        <h2 className="heading">Get in Touch</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
          Got a question, project idea, or just want to say hi? Fill out the
          form or connect with me below!
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <ContactForm />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <SocialLinks />
      </motion.div>
    </motion.section>
  );
};

export default Contact;
