import React, { Suspense } from 'react';
import Background from './components/Background';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen font-sans selection:bg-neonCyan/30 selection:text-white">
      <Background />
      <Navbar />
      
      <main className="flex flex-col gap-0 md:gap-10">
        <Hero />
        
        <div id="about">
          <About />
        </div>
        
        <div id="experience">
          <Experience />
        </div>
        
        <div id="projects">
          <Projects />
        </div>

        <div id="certifications">
          <Certifications />
        </div>
        
        <div id="skills">
          <Skills />
        </div>

        <div id="contact">
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;