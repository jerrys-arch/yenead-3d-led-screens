import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-teal-400 p-4 w-full fixed top-0 left-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <NavLink to="#" className="text-white font-bold text-2xl">YeneAD</NavLink>
        <ul className="hidden md:flex space-x-8 text-white font-semibold">
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? "text-yellow-400 font-bold" : "hover:text-yellow-400 transition-all duration-300"}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/about" 
              className={({ isActive }) => isActive ? "text-yellow-400 font-bold" : "hover:text-yellow-400 transition-all duration-300"}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/features" 
              className={({ isActive }) => isActive ? "text-yellow-400 font-bold" : "hover:text-yellow-400 transition-all duration-300"}
            >
              Features
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/services" 
              className={({ isActive }) => isActive ? "text-yellow-400 font-bold" : "hover:text-yellow-400 transition-all duration-300"}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/portfolio" 
              className={({ isActive }) => isActive ? "text-yellow-400 font-bold" : "hover:text-yellow-400 transition-all duration-300"}
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/blog" 
              className={({ isActive }) => isActive ? "text-yellow-400 font-bold" : "hover:text-yellow-400 transition-all duration-300"}
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => isActive ? "text-yellow-400 font-bold" : "hover:text-yellow-400 transition-all duration-300"}
            >
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/testimonials" 
              className={({ isActive }) => isActive ? "text-yellow-400 font-bold" : "hover:text-yellow-400 transition-all duration-300"}
            >
              Testimonials
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/faqs" 
              className={({ isActive }) => isActive ? "text-yellow-400 font-bold" : "hover:text-yellow-400 transition-all duration-300"}
            >
              FAQs
            </NavLink>
          </li>
        </ul>
        <button
          onClick={() => navigate('/contact', { replace: true })}
          className="hidden md:block bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg hover:bg-yellow-500 transition-all duration-300"
        >
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;