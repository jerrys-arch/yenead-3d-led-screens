import React from "react";
import { motion } from "framer-motion"; // Import motion

const ContactUs = () => {
  return (
    <div
      className="container mx-auto px-6 py-12 bg-[url('https://img.freepik.com/free-photo/3d-technology-geometric-black-background_53876-97124.jpg?t=st=1739542977~exp=1739546577~hmac=7f253a46316ddcb6e6357677d7916295dbd2238765c0d330e96a1e1c494b09a7&w=996')] bg-cover bg-center text-white"
      id="contact"
    >
      <motion.h1
        className="text-5xl font-extrabold mb-12 text-center text-indigo-100"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Us
      </motion.h1>

      {/* Contact Form Section */}
      <motion.section
        className="mb-12 flex justify-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-black opacity-50 p-8 rounded-lg shadow-lg w-full sm:w-1/2 lg:w-2/3 space-y-6">
          <h2 className="text-3xl font-semibold text-center text-indigo-600 mb-6">
            Contact Form
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block mb-2 text-indigo-600" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="border border-gray-300 rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-indigo-600" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="border border-gray-300 rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-indigo-600" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                className="border border-gray-300 rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                rows="4"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-lg w-full py-3 hover:bg-blue-600 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </motion.section>

      {/* Location Map Section */}
      <motion.section
        className="mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-semibold mb-4 text-center text-indigo-200">
          Location Map
        </h2>
        <div className="h-64 rounded-lg overflow-hidden">
          <iframe
            title="Random Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.1960528320694!2d-122.41941508468141!3d37.77492927975977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c1f1a2d8f%3A0x7b042d3f7e103c5b!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1617000076030!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </motion.section>

      {/* Contact Information Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-semibold mb-4 text-center text-white">
          Contact Information
        </h2>
        <p className="text-center text-lg">
          <strong className="text-indigo-600">Address:</strong> 123 Example
          Street, City, Country
        </p>
        <p className="text-center text-lg">
          <strong className="text-indigo-600">Email:</strong> contact@yenead.com
        </p>
        <p className="text-center text-lg">
          <strong className="text-indigo-600">Phone:</strong> +123 456 7890
        </p>
      </motion.section>
    </div>
  );
};

export default ContactUs;
