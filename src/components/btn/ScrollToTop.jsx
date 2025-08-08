import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return isVisible ? (
    <button
      onClick={scrollToTop}
      className="fixed bottom-20 right-6 z-50 p-3 rounded-full bg-coral text-white hover:bg-coral-dark shadow-lg transition-colors"
      aria-label="Scroll to top"
    >
      <FaArrowUp className="text-xl" />
    </button>
  ) : null;
};

export default ScrollToTop;
