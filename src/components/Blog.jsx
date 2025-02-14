import React from "react";
import { motion } from "framer-motion"; // Import motion

const Blog = () => {
  return (
    <div
      className="container mx-auto px-6 py-12 bg-[url('https://img.freepik.com/free-photo/3d-technology-geometric-black-background_53876-97124.jpg?t=st=1739542977~exp=1739546577~hmac=7f253a46316ddcb6e6357677d7916295dbd2238765c0d330e96a1e1c494b09a7&w=996')] bg-cover bg-center text-white"
      id="blog"
    >
      <motion.h1
        className="text-5xl font-extrabold mb-12 text-center text-indigo-100"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Blog / Insights
      </motion.h1>

      {/* Industry News Section */}
      <motion.section
        className="mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-semibold mb-6 text-center text-indigo-200">
          Industry News
        </h2>
        <ul className="space-y-4 text-lg">
          <li className="bg-gradient-to-r from-indigo-400 to-teal-500 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-all duration-300 text-black">
            <strong className="text-indigo-600">Article Title 1:</strong> Brief
            description of the article.{" "}
            <a href="#" className="hover:underline text-indigo-600">
              Read more
            </a>
          </li>
          <li className="bg-gradient-to-r from-indigo-400 to-teal-500 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-all duration-300 text-black">
            <strong className="text-indigo-600">Article Title 2:</strong> Brief
            description of the article.{" "}
            <a href="#" className="hover:underline text-indigo-600">
              Read more
            </a>
          </li>
          {/* Add more articles as needed */}
        </ul>
      </motion.section>

      {/* Tips & Tricks Section */}
      <motion.section
        className="mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-semibold mb-6 text-center text-indigo-200">
          Tips & Tricks
        </h2>
        <ul className="space-y-4 text-lg">
          <li className="bg-gradient-to-r from-indigo-400 to-teal-500 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-all duration-300 text-black">
            <strong className="text-indigo-600">Tip 1:</strong> Creating
            effective 3D content.
          </li>
          <li className="bg-gradient-to-r from-indigo-400 to-teal-500 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-all duration-300 text-black">
            <strong className="text-indigo-600">Tip 2:</strong> Maximizing ROI
            from digital advertising.
          </li>
          <li className="bg-gradient-to-r from-indigo-400 to-teal-500 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-all duration-300 text-black">
            <strong className="text-indigo-600">Tip 3:</strong> Engaging your
            audience with interactive displays.
          </li>
        </ul>
      </motion.section>

      {/* YeneAD Updates Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-semibold mb-6 text-center text-indigo-200">
          YeneAD Updates
        </h2>
        <ul className="space-y-4 text-lg">
          <li className="bg-gradient-to-r from-indigo-400 to-teal-500 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-all duration-300 text-black">
            <strong className="text-indigo-600">Update 1:</strong> News about
            company growth.
          </li>
          <li className="bg-gradient-to-r from-indigo-400 to-teal-500 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-all duration-300 text-black">
            <strong className="text-indigo-600">Update 2:</strong> Announcement
            of new partnerships.
          </li>
          <li className="bg-gradient-to-r from-indigo-400 to-teal-500 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-all duration-300 text-black">
            <strong className="text-indigo-600">Update 3:</strong> Recent
            achievements and milestones.
          </li>
        </ul>
      </motion.section>
    </div>
  );
};

export default Blog;
