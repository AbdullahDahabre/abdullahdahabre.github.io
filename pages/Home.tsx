import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Certifications from '../components/Certifications';
import Contact from '../components/Contact';

const Home: React.FC = () => (
  <>
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
  </>
);

export default Home;
