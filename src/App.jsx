import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"

import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import Features from './components/Features';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import ContactUs from './components/ContactUs';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Faqs from './components/Faqs';
import RootLayout from './layout/RootLayout';

import './index.css';

function App() {
 const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />}/>
        <Route path="portfolio" element={<Portfolio />}/>
        <Route path="about" element={<AboutUs />}/>
        <Route path="testimonials" element={<Testimonials />}/>
        <Route path="contact" element={<ContactUs />}/>
        <Route path="services" element={<Services />}/>
        <Route path="features" element={<Features />}/>
        <Route path="faqs" element={<Faqs />}/>
        <Route path="blog" element={<Blog />}/>

      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}

export default App

