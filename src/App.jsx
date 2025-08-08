import React from "react";
import Navbar from "./components/navbar/Navbar";
import Homepage from "./page/homepage/Homepage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/btn/ScrollToTop";

const App = () => {
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white scroll-smooth">
      <Navbar />

      <main>
        <Homepage />
      </main>

      <ScrollToTop />

      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default App;
