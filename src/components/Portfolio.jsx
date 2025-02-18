import React from "react";
import { motion } from "framer-motion"; // Import motion

const Portfolio = () => {
  return (
    <div
      className="container mx-auto px-6 py-12  text-white"
      id="portfolio"
    >
      <motion.h1
        className="text-5xl font-extrabold mb-12 text-center text-indigo-100"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Portfolio / Case Studies
      </motion.h1>

      {/* Sample Campaigns Section */}
      <motion.section
        className="mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-semibold mb-8 text-center text-indigo-200">
          Sample Campaigns
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Example Campaign 1 */}
          <motion.div
            className="bg-gradient-to-r from-teal-300 to-blue-500 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="link-to-campaign-image-1"
              alt="Campaign 1"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-indigo-600">
                Campaign Title 1
              </h3>
              <p className="mt-4 text-gray-700">
                Brief description of the campaign highlighting its objectives
                and outcomes.
              </p>
            </div>
          </motion.div>

          {/* Example Campaign 2 */}
          <motion.div
            className="bg-gradient-to-r from-teal-300 to-blue-500 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="link-to-campaign-image-2"
              alt="Campaign 2"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-indigo-600">
                Campaign Title 2
              </h3>
              <p className="mt-4 text-gray-700">
                Brief description of the campaign highlighting its objectives
                and outcomes.
              </p>
            </div>
          </motion.div>

          {/* Example Campaign 3 (Newly Added) */}
          <motion.div
            className="bg-gradient-to-r from-teal-300 to-blue-500 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="link-to-campaign-image-3"
              alt="Campaign 3"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-indigo-600">
                Campaign Title 3
              </h3>
              <p className="mt-4 text-gray-700">
                Brief description of the third campaign showcasing its unique
                objectives and measurable results.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Case Studies Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-semibold mb-8 text-center text-indigo-100">
          Case Studies
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">
          {/* Example Case Study 1 */}
          <motion.div
            className="bg-gradient-to-r from-teal-300 to-blue-500 p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-indigo-800">
              Case Study Title 1
            </h3>
            <p className="mt-4 text-gray-800">
              <strong>Client Goals:</strong> Describe the client's objectives.
            </p>
            <p className="mt-4 text-gray-800">
              <strong>Strategies Used:</strong> Outline the strategies
              implemented in the campaign.
            </p>
            <p className="mt-4 text-gray-800">
              <strong>Results Achieved:</strong> Summarize the outcomes and
              impact of the campaign.
            </p>
          </motion.div>

          {/* Example Case Study 2 */}
          <motion.div
            className="bg-gradient-to-r from-teal-300 to-blue-500 p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-indigo-800">
              Case Study Title 2
            </h3>
            <p className="mt-4 text-gray-800">
              <strong>Client Goals:</strong> Describe the client's objectives.
            </p>
            <p className="mt-4 text-gray-800">
              <strong>Strategies Used:</strong> Outline the strategies
              implemented in the campaign.
            </p>
            <p className="mt-4 text-gray-800">
              <strong>Results Achieved:</strong> Summarize the outcomes and
              impact of the campaign.
            </p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Portfolio;
