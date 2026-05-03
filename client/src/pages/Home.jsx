import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Stats from '../components/Stats';
import WhyChooseUs from '../components/TempWhyChooseUs';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Services />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;