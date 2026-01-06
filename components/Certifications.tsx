import React from 'react';
import { motion } from 'framer-motion';
import { Certification } from '../types';

const certifications: Certification[] = [
  { name: 'Agentic AI Engineering', issuer: 'Udemy', url: 'https://www.udemy.com/certificate/UC-6fa7d62e-8106-488e-85eb-6f22afb6e2f5', logo: '/certificate_udemy.webp' },
  { name: 'Machine Learning A-Z', issuer: 'Udemy', url: 'https://www.udemy.com/certificate/UC-743671f3-6679-4954-9d2c-a616d1cb9f4a', logo: '/certificate_udemy.webp' },
  { name: 'Deep Learning Specialization', issuer: 'Coursera', url: 'https://www.coursera.org/account/accomplishments/specialization/Y7LS66FTK3TK', logo: '/certificate_deep.webp' },
  { name: 'IBM Data Science Specialization', issuer: 'Coursera', url: 'https://www.coursera.org/account/accomplishments/specialization/HZDQ94KAQ2U2', logo: '/certificate_ibm.webp' },
  { name: 'MLOps Specialization', issuer: 'Duke University', url: 'https://www.coursera.org/account/accomplishments/specialization/7J8USLWMYN05', logo: '/certificate_duke.webp' },
  { name: 'Build Chat Applications', issuer: '365 Data Science', url: 'https://learn.365datascience.com/c/fc2137dad3/', logo: '/certificate_365.webp' },
];

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 bg-midnight/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-20 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4"
        >
          <span className="text-neonCyan font-mono text-xl">04.</span>
          <h2 className="text-3xl font-bold text-white">Certifications</h2>
          <div className="h-[1px] bg-gray-700 flex-grow max-w-xs ml-4 hidden md:block"></div>
        </motion.div>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex gap-8 items-center">
          {[...certifications, ...certifications].map((cert, i) => (
            <a
              key={`${cert.name}-${i}`}
              href={cert.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 px-8 py-4 glass-card rounded-full hover:bg-gradient-to-r hover:from-neonCyan/10 hover:to-neonPurple/10 hover:border-neonCyan/30 hover:shadow-[0_0_20px_rgba(6,182,212,0.15),0_0_20px_rgba(168,85,247,0.15)] transition-all duration-300 mx-4 shrink-0"
            >
              {cert.logo ? (
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden flex-shrink-0"
                  style={{
                    backgroundColor: cert.issuer === 'Duke University' ? '#012169' :
                      cert.issuer === '365 Data Science' ? '#1A1A1A' : '#ffffff'
                  }}
                >
                  <img src={cert.logo} alt={cert.issuer} className={`w-full h-full object-contain ${['Duke University', '365 Data Science'].includes(cert.issuer) ? 'p-0' : 'p-1'}`} />
                </div>
              ) : (
                <div className="w-10 h-10 rounded-full bg-neonPurple/20 flex-shrink-0"></div>
              )}
              <div className="flex flex-col justify-center text-left">
                <p className="text-white font-bold leading-snug">{cert.name}</p>
                <p className="text-xs text-gray-400 font-mono">{cert.issuer}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Duplicate for infinite scroll smoothness */}
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex gap-8 items-center">
          {[...certifications, ...certifications].map((cert, i) => (
            <a
              key={`dup-${cert.name}-${i}`}
              href={cert.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 px-8 py-4 glass-card rounded-full hover:bg-gradient-to-r hover:from-neonCyan/10 hover:to-neonPurple/10 hover:border-neonCyan/30 hover:shadow-[0_0_20px_rgba(6,182,212,0.15),0_0_20px_rgba(168,85,247,0.15)] transition-all duration-300 mx-4 shrink-0"
            >
              {cert.logo ? (
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden flex-shrink-0"
                  style={{
                    backgroundColor: cert.issuer === 'Duke University' ? '#012169' :
                      cert.issuer === '365 Data Science' ? '#1A1A1A' : '#ffffff'
                  }}
                >
                  <img src={cert.logo} alt={cert.issuer} className={`w-full h-full object-contain ${['Duke University', '365 Data Science'].includes(cert.issuer) ? 'p-0' : 'p-1'}`} />
                </div>
              ) : (
                <div className="w-10 h-10 rounded-full bg-neonPurple/20 flex-shrink-0"></div>
              )}
              <div className="flex flex-col justify-center text-left">
                <p className="text-white font-bold leading-snug">{cert.name}</p>
                <p className="text-xs text-gray-400 font-mono">{cert.issuer}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .animate-marquee {
          animation: marquee 50s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 50s linear infinite;
        }
        .group:hover .animate-marquee,
        .group:hover .animate-marquee2 {
          animation-play-state: paused;
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0%); }
        }
      `}</style>
    </section>
  );
};

export default Certifications;
