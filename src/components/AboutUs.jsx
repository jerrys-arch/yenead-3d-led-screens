import React from "react";
import { motion } from "framer-motion"; // Import motion

const AboutUs = () => {
  return (
    <div
      className="container mx-auto px-4 py-12  text-white scroll-smooth md:scroll-auto"
      id="about"
    >
      <motion.h1
        className="text-4xl font-extrabold mb-8 text-center text-indigo-100"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Us
      </motion.h1>

      <motion.section
        className="mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-semibold mb-6 text-center text-indigo-600">
          Company Overview
        </h2>
        <p className="text-xl mb-4 text-center text-white">
          YeneAD was founded with the vision to revolutionize visual experiences
          in East Africa. Our journey began with a passion for innovative
          technology and a commitment to delivering high-quality visual
          solutions to our clients.
        </p>
        <div className="flex flex-col items-center justify-center text-center mt-6 space-y-4">
          <p className="text-lg text-white">
            <strong className="text-indigo-500">Mission:</strong> To provide
            cutting-edge 3D LED screen technology that enhances communication
            and engagement.
          </p>
          <p className="text-lg text-white">
            <strong className="text-indigo-500">Vision:</strong> To be the
            leading provider of advanced visual solutions in East Africa,
            setting new standards in the industry.
          </p>
          <p className="text-lg text-white">
            <strong className="text-indigo-500">Core Values:</strong>{" "}
            Innovation, Quality, Customer Satisfaction, Integrity, and Community
            Engagement.
          </p>
        </div>
      </motion.section>

      <motion.section
        className="mb-12 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-semibold mb-6 text-indigo-600">
          Founder's Note
        </h2>
        <p className="text-xl max-w-3xl mx-auto text-white">
          "Welcome to YeneAD! Our journey has been fueled by a commitment to
          excellence and a desire to make a difference in the visual landscape
          of East Africa. We aim to provide not just products, but
          transformative experiences. With our state-of-the-art technology, we
          aspire to help businesses and communities connect more effectively.
          Thank you for being part of our story."
        </p>
      </motion.section>

      <motion.section
        className="mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-semibold mb-6 text-indigo-600 text-center">
          Why Choose YeneAD
        </h2>
        <div className="flex justify-center items-center">
          <ul className="list-disc ml-6 text-lg text-white space-y-3">
            <li>The Only 3D LED Screen in East Africa</li>
            <li>Beyond 4K Resolution</li>
            <li>Prime Location</li>
            <li>Large Screen Size</li>
          </ul>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-semibold mb-8 text-center text-indigo-600">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <motion.div
            className="bg-gradient-to-r from-teal-300 to-blue-300 text-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="link-to-photo-1"
              alt="Robel Degu"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h3 className="text-xl font-bold mt-4 text-indigo-600">
              Robel Degu
            </h3>
            <p className="text-lg text-gray-600">Founder & CEO</p>
            <p className="mt-2 text-gray-700">
              Robel has over 10 years of experience in the tech industry and
              leads YeneAD with a vision to revolutionize the advertising space
              in East Africa.
            </p>
          </motion.div>

          {/* Team Member 2 */}
          <motion.div
            className="bg-gradient-to-r from-teal-300 to-blue-300 text-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="link-to-photo-2"
              alt="Mariam Ali"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h3 className="text-xl font-bold mt-4 text-indigo-600">
              Mariam Ali
            </h3>
            <p className="text-lg text-gray-600">Chief Operating Officer</p>
            <p className="mt-2 text-gray-700">
              With a strong background in operations management, Mariam ensures
              smooth workflows across the company and supports key business
              functions.
            </p>
          </motion.div>

          {/* Team Member 3 */}
          <motion.div
            className="bg-gradient-to-r from-teal-300 to-blue-500 text-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="link-to-photo-3"
              alt="Ethan Smith"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h3 className="text-xl font-bold mt-4 text-indigo-600">
              Ethan Smith
            </h3>
            <p className="text-lg text-gray-600">Lead Developer</p>
            <p className="mt-2 text-gray-700">
              Ethan leads our development team, ensuring that we stay at the
              cutting edge of technology, providing high-performance solutions
              to our clients.
            </p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutUs;
