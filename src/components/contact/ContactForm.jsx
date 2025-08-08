import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isFormValid = form.name && form.email && form.message;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isFormValid) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await axios.post(
        "https://formspree.io/f/xldlobkg",
        form,
        { headers: { Accept: "application/json" } }
      );

      if (response.status === 200) {
        toast.success("Message sent successfully!");
        setForm({ name: "", email: "", project: "", message: "" });
      } else {
        toast.error("Failed to send message. Try again.");
      }
    } catch (error) {
      toast.error("Something went wrong. Please check your network.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto grid gap-6 bg-gray-50 dark:bg-[#111111] p-6 md:p-10 rounded-xl shadow-lg transition-all"
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        className="input-style"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={form.email}
        onChange={handleChange}
        className="input-style"
      />
      <input
        type="text"
        name="project"
        placeholder="Project Type (optional)"
        value={form.project}
        onChange={handleChange}
        className="input-style"
      />
      <textarea
        name="message"
        rows="5"
        placeholder="Your Message"
        value={form.message}
        onChange={handleChange}
        className="input-style resize-none"
      />
      <button
        type="submit"
        disabled={!isFormValid || isSubmitting}
        className={`py-3 px-6 rounded-md text-white font-semibold transition-all duration-300 ${
          isFormValid && !isSubmitting
            ? "bg-coral hover:bg-[#e85e47]"
            : "bg-gray-400 cursor-not-allowed"
        }`}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};

export default ContactForm;
