import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { MoreVertical, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
      setMobileMenuOpen(false);
    } else {
      setHidden(false);
    }
  });

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { id: 'about', label: 'About', number: '01.' },
    { id: 'experience', label: 'Experience', number: '02.' },
    { id: 'projects', label: 'Projects', number: '03.' },
    { id: 'certifications', label: 'Certs', number: '04.' },
    { id: 'skills', label: 'Skills', number: '05.' },
    { id: 'contact', label: 'Contact', number: '06.' },
  ];

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-4 backdrop-blur-md bg-midnight/70 border-b border-white/5"
    >
      <div className="text-neonCyan font-mono font-bold text-xl cursor-pointer shrink-0 z-50" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        AD<span className="text-neonPurple">.</span>
      </div>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8 text-sm font-mono text-gray-300 items-center">
        {navLinks.map((link) => (
            <button key={link.id} onClick={() => scrollToSection(link.id)} className="hover:text-neonCyan transition-colors whitespace-nowrap">
                <span className="text-neonCyan mr-1">{link.number}</span>{link.label}
            </button>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden z-50">
        <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="p-2 text-gray-300 hover:text-neonCyan transition-colors"
        >
            {mobileMenuOpen ? <X size={24} /> : <MoreVertical size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
            <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                className="absolute top-16 right-6 w-48 bg-midnight border border-white/10 rounded-xl shadow-2xl p-4 flex flex-col gap-4 md:hidden backdrop-blur-xl"
            >
                {navLinks.map((link) => (
                    <button 
                        key={link.id} 
                        onClick={() => scrollToSection(link.id)} 
                        className="text-left text-gray-300 hover:text-neonCyan font-mono text-sm transition-colors py-1 flex items-center"
                    >
                        <span className="text-neonCyan mr-3">{link.number}</span>
                        {link.label}
                    </button>
                ))}
            </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;