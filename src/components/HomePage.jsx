import React from "react";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      
      {/* Hero Section with Video Background */}
      <motion.section
        id="home"
        className="pt-16"
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
        <div className="relative z-10  text-center py-24 px-6">
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
    </div>
  );
};

export default HomePage;
