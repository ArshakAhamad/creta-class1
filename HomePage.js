import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Features from '../components/Features';
import SkillsSection from '../components/SkillsSection';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Features />
      <SkillsSection />
      <Footer />
    </div>
  );
};

export default HomePage;  // Ensure it's default export
