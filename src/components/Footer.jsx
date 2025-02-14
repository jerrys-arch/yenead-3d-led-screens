import React, { useState } from "react";
import { motion } from "framer-motion"; // Import motion

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing with email: ${email}`);
    setEmail(""); // Clear the input field after submission
  };

  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Social Media Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-6">
              <a
                href="https://www.tiktok.com"
                className="hover:text-yellow-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                TikTok
              </a>
              <a
                href="https://www.instagram.com"
                className="hover:text-yellow-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com"
                className="hover:text-yellow-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li>
                <a href="/services" className="hover:text-yellow-500">
                  Services
                </a>
              </li>
              <li>
                <a href="/portfolio" className="hover:text-yellow-500">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-yellow-500">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-yellow-500">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Subscribe to Our Newsletter
            </h3>
            <form
              onSubmit={handleNewsletterSubmit}
              className="flex flex-col space-y-4"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="p-2 border-white rounded-lg text-gray-400"
              />
              <button
                type="submit"
                className="bg-yellow-500 text-gray-400 py-2 px-6 rounded-lg text-xl font-semibold hover:bg-yellow-600 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div
          className="mt-8 text-center text-sm text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p>&copy; 2025 YeneAD. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
