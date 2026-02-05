
import React from 'react';
import { Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-blue-500 font-bold uppercase tracking-widest text-xs mb-4">Let's Connect</p>
          <h2 className="text-5xl md:text-7xl font-heading font-extrabold uppercase tracking-tighter mb-8">
            Let's Screw the <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Standard.</span> <br />
            Start Scaling.
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-md">
            Stop burning budget on generic agencies. Partner with a boutique engine designed for aggressive growth.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 glass rounded-lg flex items-center justify-center">
                 <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              </div>
              <span className="text-sm font-bold uppercase tracking-widest text-gray-400">3 Spots Available for Q3</span>
            </div>
          </div>
        </div>

        <div className="glass p-8 md:p-12 rounded-3xl border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 blur-3xl rounded-full"></div>
          
          <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 ml-1">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 ml-1">Work Email</label>
                <input 
                  type="email" 
                  placeholder="john@brand.com" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 ml-1">Company Website</label>
              <input 
                type="text" 
                placeholder="https://brand.com" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 ml-1">Monthly Budget</label>
              <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors appearance-none">
                <option className="bg-[#0A0A0A]">$10k - $25k</option>
                <option className="bg-[#0A0A0A]">$25k - $50k</option>
                <option className="bg-[#0A0A0A]">$50k - $100k</option>
                <option className="bg-[#0A0A0A]">$100k+</option>
              </select>
            </div>

            <button className="w-full bg-white text-black font-bold uppercase tracking-widest text-xs py-4 rounded-xl flex items-center justify-center space-x-2 hover:bg-blue-600 hover:text-white transition-all group active:scale-[0.98]">
              <span>Apply for an Audit</span>
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
