
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/5 pt-20 pb-10 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-lg rotate-12">A</div>
              <span className="text-xl font-bold tracking-tighter font-heading uppercase">Adscrew</span>
            </div>
            <p className="text-gray-500 max-w-sm mb-6 font-light">
              A specialized performance agency building the future of commerce through engineering-first marketing systems.
            </p>
            <div className="flex space-x-4">
              {['Twitter', 'LinkedIn', 'Instagram'].map(social => (
                <a key={social} href="#" className="text-xs uppercase font-bold tracking-widest text-gray-400 hover:text-white transition-colors">{social}</a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold uppercase text-xs tracking-[0.2em] mb-6">Navigation</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Services</a></li>
              <li><a href="#flywheel" className="hover:text-blue-400 transition-colors">Methodology</a></li>
              <li><a href="#proof" className="hover:text-blue-400 transition-colors">Case Studies</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Apply Now</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold uppercase text-xs tracking-[0.2em] mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li>growth@adscrew.agency</li>
              <li>London / New York</li>
              <li className="text-blue-400 font-bold uppercase text-[10px] tracking-widest">Always On.</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 gap-4">
          <p className="text-[10px] text-gray-600 uppercase tracking-widest">© 2024 ADSCREW PERFORMANCE LTD. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-6 text-[10px] text-gray-600 uppercase tracking-widest">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
