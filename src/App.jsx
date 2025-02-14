import React from 'react';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import Features from './components/Features';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import ContactUs from './components/ContactUs';
import Testimonials from './components/Testimonials';
import Faqs from './components/Faqs';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';
import './index.css';

const App = () => {
  return (
    <div>
      <HomePage />
      <AboutUs />
      <Features />
      
      <Services />
      <Portfolio />
      <Blog />
      <ContactUs />
      <Testimonials />
      <Faqs />
      <CtaBanner 
        message="Ready to take your business to the next level?"
        button1Text="Book a Demo"
        button1Link="/demo"
        button2Text="Request a Quote"
        button2Link="/quote"
        button3Text="Schedule a Call"
        button3Link="/schedule"
      />
      <Footer />
    </div>
  );
}

export default App;