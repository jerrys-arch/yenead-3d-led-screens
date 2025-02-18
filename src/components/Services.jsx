import React from "react";
import { motion } from "framer-motion"; // Import motion

const Services = () => {
  return (
    <div className="container mx-auto px-6 py-6  text-white">
      <motion.h1
        className="text-4xl font-extrabold mb-6 text-center text-indigo-100"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Services
      </motion.h1>

      {/* Service Containers */}
      <motion.section
        className="flex flex-col md:flex-row gap-6"
        id="services"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* First Service - Advertising Packages (Vertically aligned) */}
        <motion.div
          className="service-container bg-gradient-to-r from-teal-300 to-blue-500 p-6 rounded-lg shadow-xl hover:shadow-2xl hover:scale-105 hover:translate-y-[-8px] transition-all duration-300 w-full md:w-1/3"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-center text-indigo-600">
            Advertising Packages
          </h2>
          <p className="text-base text-gray-800 text-center">
            We offer a variety of advertising packages tailored to meet your
            campaign needs. Choose from short-term to long-term options,
            depending on your objectives. Below are the available packages:
          </p>
          <ul className="list-disc ml-6 mt-2 text-sm text-gray-800">
            <li>
              <strong className="text-indigo-500">1-Week Package:</strong> $500
              - Perfect for short-term campaigns.
            </li>
            <li>
              <strong className="text-indigo-500">1-Month Package:</strong>{" "}
              $1500 - Great for monthly promotions.
            </li>
            <li>
              <strong className="text-indigo-500">3-Month Package:</strong>{" "}
              $4000 - Longer visibility for your brand.
            </li>
            <li>
              <strong className="text-indigo-500">6-Month Package:</strong>{" "}
              $7000 - Best value for ongoing advertising.
            </li>
            <li>
              <strong className="text-indigo-500">1-Year Package:</strong>{" "}
              $12000 - Comprehensive advertising solution.
            </li>
          </ul>
          <p className="mt-2 text-center text-gray-700 text-sm">
            We offer both 3D and 2D slots, as well as hourly packages. Slot
            availability varies, so please contact us for more information.
          </p>
        </motion.div>

        {/* Second and Third Services - Production & Custom Solutions (Horizontally aligned) */}
        <div className="flex w-full md:w-2/3 gap-6">
          {/* Production Services */}
          <motion.div
            className="service-container bg-gradient-to-r from-teal-300 to-blue-500 p-6 rounded-lg shadow-xl hover:shadow-2xl hover:scale-105 hover:translate-y-[-8px] transition-all duration-300 w-full"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-center text-indigo-600">
              Production Services
            </h2>
            <p className="text-base text-gray-800 text-center">
              We partner with top studios to provide high-quality video
              production support. Our team can help you create engaging content
              that resonates with your audience.
            </p>
          </motion.div>

          {/* Custom Solutions */}
          <motion.div
            className="service-container bg-gradient-to-r from-teal-300 to-blue-500 p-6 rounded-lg shadow-xl hover:shadow-2xl hover:scale-105 hover:translate-y-[-8px] transition-all duration-300 w-full"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-center text-indigo-600">
              Custom Solutions
            </h2>
            <p className="text-base text-gray-800 text-center">
              We offer tailored advertising solutions to meet the unique needs
              of different industries or specific campaign requirements. Whether
              you're looking for a unique concept or a targeted approach, we've
              got you covered.
            </p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Services;
