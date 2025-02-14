import React from "react";
import { motion } from "framer-motion"; // Import motion
import CtaBanner from "./CtaBanner";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center bg-[url('https://img.freepik.com/free-photo/3d-technology-geometric-black-background_53876-97124.jpg?t=st=1739542977~exp=1739546577~hmac=7f253a46316ddcb6e6357677d7916295dbd2238765c0d330e96a1e1c494b09a7&w=996')] bg-cover bg-center">
      {/* Navbar Section */}
      <nav className="bg-gradient-to-r from-indigo-600 to-teal-400 p-4 w-full fixed top-0 left-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-white font-bold text-2xl">YeneAD</div>
          <ul className="flex space-x-8 text-white font-semibold">
            <li>
              <a
                href="#home"
                className="hover:text-yellow-400 transition-all duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-yellow-400 transition-all duration-300"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#features"
                className="hover:text-yellow-400 transition-all duration-300"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-yellow-400 transition-all duration-300"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="hover:text-yellow-400 transition-all duration-300"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#blog"
                className="hover:text-yellow-400 transition-all duration-300"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-yellow-400 transition-all duration-300"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="#client"
                className="hover:text-yellow-400 transition-all duration-300"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                href="#faqs"
                className="hover:text-yellow-400 transition-all duration-300"
              >
                FAQs
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section with Video Background */}
      <motion.section
        id="home"
        className="relative w-full h-screen flex flex-col justify-center items-center pt-16"
        initial={{ opacity: 0, y: 50 }} // Start hidden
        whileInView={{ opacity: 1, y: 0 }} // Animate to visible
        transition={{ duration: 0.5 }} // Animation duration
      >
        <div className="flex justify-center items-center w-full mt-20 -mb-6">
          <iframe
            className="relative z-10 w-100 h-full object-cover"
            src="https://www.youtube.com/embed/N6v7HQiCNiQ?autoplay=1&si=OvrjD_RaWMuHsUhv"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-white text-center py-24 px-6">
          <h1 className="text-4xl font-extrabold leading-tight text-yellow-400 -mt-16">
            Revolutionizing Advertising in East Africa with 3D Technology
          </h1>
          <p className="mt-6 text-2xl max-w-4xl mx-auto text-gray-100">
            YeneAD is the only 3D LED screen provider in East Africa, offering
            cutting-edge digital advertising solutions that bring your brand to
            life with stunning visuals and clarity.
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <button className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white py-3 px-8 rounded-lg text-xl hover:bg-indigo-600 transition-all duration-300 transform hover:scale-105">
              Get in Touch
            </button>
            <button className="bg-gradient-to-r from-yellow-400 to-amber-500 text-white py-3 px-8 rounded-lg text-xl hover:bg-amber-600 transition-all duration-300 transform hover:scale-105">
              Learn More
            </button>
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 px-8 rounded-lg text-xl hover:bg-purple-600 transition-all duration-300 transform hover:scale-105">
              Book a Slot
            </button>
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        id="testimonials"
        className="p-10 text-center text-white w-full"
        initial={{ opacity: 0, y: 50 }} // Start hidden
        whileInView={{ opacity: 1, y: 0 }} // Animate to visible
        transition={{ duration: 0.5 }} // Animation duration
      >
        <h2 className="text-3xl font-bold mb-6">Client Testimonials</h2>
        <blockquote className="mt-4 text-xl italic max-w-2xl mx-auto">
          <p>"This screen has transformed our advertising strategy!"</p>
          <footer className="mt-4 text-lg">- Happy Advertiser</footer>
        </blockquote>
      </motion.section>
    </div>
  );
};

export default HomePage;
