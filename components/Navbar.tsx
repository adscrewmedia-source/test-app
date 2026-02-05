
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12 py-4 ${
        scrolled ? 'bg-[#0A0A0A]/80 backdrop-blur-lg border-b border-white/5 py-3' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-lg rotate-12">A</div>
          <span className="text-xl font-bold tracking-tighter font-heading uppercase">Adscrew</span>
        </div>

        <div className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide text-gray-400">
          <a href="#services" className="hover:text-white transition-colors uppercase">Services</a>
          <a href="#flywheel" className="hover:text-white transition-colors uppercase">Process</a>
          <a href="#proof" className="hover:text-white transition-colors uppercase">Success</a>
          <a href="#social" className="hover:text-white transition-colors uppercase">Clients</a>
        </div>

        <a 
          href="#contact" 
          className="bg-white text-black px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-all duration-300 transform active:scale-95"
        >
          Work With Us
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
