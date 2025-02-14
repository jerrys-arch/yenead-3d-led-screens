import React from "react";
import { motion } from "framer-motion"; // Import motion

const Features = () => {
  return (
    <div
      className="container mx-auto px-6 py-12 bg-[url('https://img.freepik.com/free-photo/3d-technology-geometric-black-background_53876-97124.jpg?t=st=1739542977~exp=1739546577~hmac=7f253a46316ddcb6e6357677d7916295dbd2238765c0d330e96a1e1c494b09a7&w=996')] bg-cover bg-center text-white"
      id="features"
    >
      <motion.h1
        className="text-4xl font-extrabold mb-8 text-center text-indigo-100"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        3D Screen Features
      </motion.h1>

      {/* Technical Specifications */}
      <motion.section
        className="mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-semibold mb-6 text-center text-indigo-600">
          Technical Specifications
        </h2>
        <div className="flex items-center justify-center">
          <ul className="list-disc ml-8 text-lg space-y-4">
            <li>
              <strong className="text-indigo-500">Resolution:</strong> 3840 x
              2160 (4K)
            </li>
            <li>
              <strong className="text-indigo-500">Refresh Rate:</strong> 120Hz
            </li>
            <li>
              <strong className="text-indigo-500">Screen Size:</strong> 55
              inches
            </li>
            <li>
              <strong className="text-indigo-500">Brightness:</strong> 1000 nits
            </li>
            <li>
              <strong className="text-indigo-500">Contrast Ratio:</strong>{" "}
              5000:1
            </li>
            {/* Add more specifications as needed */}
          </ul>
        </div>
      </motion.section>

      {/* Display Capabilities */}
      <motion.section
        className="mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-semibold mb-6 text-center text-indigo-600">
          Display Capabilities
        </h2>
        <p className="text-lg max-w-2xl mx-auto text-white text-center">
          Our 3D screens offer high-definition visuals with exceptional motion
          smoothness and an immersive curved design that captures attention and
          enhances the viewer experience.
        </p>
      </motion.section>

      {/* Why 3D Matters */}
      <motion.section
        className="mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-semibold mb-6 text-center text-indigo-600">
          Why 3D Matters
        </h2>
        <p className="text-lg max-w-2xl mx-auto text-white text-center">
          3D technology significantly enhances advertising effectiveness by
          immersing audiences in a visually captivating experience, leading to
          higher engagement and retention of information.
        </p>
      </motion.section>

      {/* Use Cases */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-semibold mb-6 text-center text-indigo-600">
          Use Cases
        </h2>
        <div className="flex items-center justify-center">
          <ul className="list-disc ml-8 text-lg space-y-4 text-white">
            <li>Product Launches</li>
            <li>Brand Campaigns</li>
            <li>Live Events</li>
            <li>Trade Shows</li>
            <li>Interactive Experiences</li>
          </ul>
        </div>
      </motion.section>
    </div>
  );
};

export default Features;
