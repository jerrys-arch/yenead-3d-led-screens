import React from "react";
import { motion } from "framer-motion"; // Import motion

const Blog = () => {
  return (
    <div className="container mx-auto px-6 py-12 text-white" id="blog">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ArticleCard title="Article Title 1" description="Brief description of the article." />
          <ArticleCard title="Article Title 2" description="Brief description of the article." />
          <ArticleCard title="Article Title 3" description="Brief description of the article." />
          {/* Add more articles as needed */}
        </div>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TipCard tip="Creating effective 3D content." />
          <TipCard tip="Maximizing ROI from digital advertising." />
          <TipCard tip="Engaging your audience with interactive displays." />
        </div>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <UpdateCard update="News about company growth." />
          <UpdateCard update="Announcement of new partnerships." />
          <UpdateCard update="Recent achievements and milestones." />
        </div>
      </motion.section>
    </div>
  );
};

// Reusable Card Components
const ArticleCard = ({ title, description }) => (
  <div className="bg-gradient-to-r from-indigo-400 to-teal-500 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-all duration-300 text-black">
    <strong className="text-indigo-600">{title}:</strong> {description}{" "}
    <a href="#" className="hover:underline text-indigo-600">
      Read more
    </a>
  </div>
);

const TipCard = ({ tip }) => (
  <div className="bg-gradient-to-r from-indigo-400 to-teal-500 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-all duration-300 text-black">
    <strong className="text-indigo-600">Tip:</strong> {tip}
  </div>
);

const UpdateCard = ({ update }) => (
  <div className="bg-gradient-to-r from-indigo-400 to-teal-500 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-all duration-300 text-black">
    <strong className="text-indigo-600">Update:</strong> {update}
  </div>
);

export default Blog;
