import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Work from './components/Work';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import SecurityInsights from './components/SecurityInsights';
import AboutExperience from './components/AboutExperience';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
    }
  };

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-[#030303] text-white' : 'bg-[#f9f9f9] text-zinc-900'}`}>
      <div className={`fixed inset-0 -z-10 pointer-events-none transition-opacity duration-500 ${isDark ? 'opacity-100' : 'opacity-30'}`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.03)_0%,transparent_50%)]" />
      </div>
      
      <Navbar toggleTheme={toggleTheme} isDark={isDark} />
      
      <main className="max-w-6xl mx-auto px-6 pt-32 pb-20 space-y-32">
        <section id="home">
          <Hero />
        </section>
        
        <section id="work">
          <Work />
        </section>
        
        <section id="skills">
          <Skills />
        </section>
        
        <section id="certificates">
          <Certificates />
        </section>
        
        <section id="insights">
          <SecurityInsights />
        </section>
        
        <section id="about">
          <AboutExperience isDark={isDark} />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default App;