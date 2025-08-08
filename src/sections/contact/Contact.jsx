import React from "react";
import ContactForm from "../../components/contact/ContactForm";
import SocialLinks from "../../components/contact/SocilaLinks";


const Contact = () => {
  return (
    <section
      id="contact"
      className="section bg-white dark:bg-black text-black dark:text-white transition-colors duration-300"
    >
      <div className="text-center mb-12">
        <h2 className="heading">Get in Touch</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
          Got a question, project idea, or just want to say hi? Fill out the form or connect with me below!
        </p>
      </div>

      <ContactForm />
      <SocialLinks />
    </section>
  );
};

export default Contact;
