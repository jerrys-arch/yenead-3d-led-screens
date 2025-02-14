import React from "react";
import { motion } from "framer-motion"; // Import motion

const Testimonials = () => {
  return (
    <div
      className="container mx-auto px-6 py-12 bg-[url('https://img.freepik.com/free-photo/3d-technology-geometric-black-background_53876-97124.jpg?t=st=1739542977~exp=1739546577~hmac=7f253a46316ddcb6e6357677d7916295dbd2238765c0d330e96a1e1c494b09a7&w=996')] bg-cover bg-center text-white"
      id="client"
    >
      <motion.h1
        className="text-5xl font-extrabold mb-12 text-center text-indigo-100"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Client Testimonials
      </motion.h1>

      {/* Testimonials Section */}
      <motion.section
        className="mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-semibold mb-8 text-center text-indigo-200">
          Quotes and Reviews
        </h2>
        <div className="space-y-8">
          {/* Example Testimonial 1 */}
          <motion.div
            className="bg-gradient-to-r from-indigo-600 to-teal-500 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="italic text-gray-800 text-lg">
              "YeneAD transformed our advertising strategy and significantly
              boosted our engagement!"
            </p>
            <p className="mt-4 text-white font-semibold">
              <strong>- Client Name, Position</strong>
            </p>
          </motion.div>

          {/* Example Testimonial 2 */}
          <motion.div
            className="bg-gradient-to-r from-indigo-600 to-teal-500 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="italic text-gray-800 text-lg">
              "The 3D display was a game-changer for our product launch!"
            </p>
            <p className="mt-4 text-white font-semibold">
              <strong>- Client Name, Position</strong>
            </p>
          </motion.div>
          {/* Add more testimonials as needed */}
        </div>
      </motion.section>

      {/* Logos Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-semibold mb-8 text-center text-indigo-200">
          Logos of Major Advertisers
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {/* Example Logo 1 */}
          <motion.div
            className="flex justify-center items-center bg-gradient-to-r from-indigo-600 to-teal-500 p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="link-to-logo-1"
              alt="Brand 1"
              className="h-16 object-contain"
            />
          </motion.div>
          {/* Example Logo 2 */}
          <motion.div
            className="flex justify-center items-center bg-gradient-to-r from-indigo-600 to-teal-500 p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="link-to-logo-2"
              alt="Brand 2"
              className="h-16 object-contain"
            />
          </motion.div>
          {/* Example Logo 3 */}
          <motion.div
            className="flex justify-center items-center bg-gradient-to-r from-indigo-600 to-teal-500 p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="link-to-logo-3"
              alt="Brand 3"
              className="h-16 object-contain"
            />
          </motion.div>
          {/* Example Logo 4 */}
          <motion.div
            className="flex justify-center items-center bg-gradient-to-r from-indigo-600 to-teal-500 p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="link-to-logo-4"
              alt="Brand 4"
              className="h-16 object-contain"
            />
          </motion.div>
          {/* Add more logos as needed */}
        </div>
      </motion.section>
    </div>
  );
};

export default Testimonials;
