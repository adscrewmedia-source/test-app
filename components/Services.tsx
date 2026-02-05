
import React from 'react';
import { BarChart3, Video, Globe, Zap, Target, PenTool } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <p className="text-blue-500 font-bold uppercase tracking-widest text-xs mb-4">Capabilities</p>
          <h2 className="text-4xl md:text-6xl font-heading font-extrabold uppercase tracking-tighter">Our Core Stack.</h2>
        </div>
        <div className="max-w-md text-gray-400 text-sm">
          We don't do fluff. We build systems that print results. Using a blend of high-end creative and cold, hard data.
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-6 grid-rows-auto gap-4 md:h-[800px]">
        {/* Performance Card - Large */}
        <div className="md:col-span-4 md:row-span-2 glass rounded-3xl p-8 flex flex-col justify-between overflow-hidden relative group">
          <div className="relative z-10">
            <div className="bg-blue-500/10 text-blue-400 p-3 rounded-xl w-fit mb-6">
              <BarChart3 className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-heading font-bold uppercase tracking-tighter mb-4">Performance Marketing</h3>
            <p className="text-gray-400 max-w-md mb-8">Full-funnel optimization across Meta, Google, TikTok and Programmatic. We manage millions in spend with a focus on unit economics and LTV.</p>
            
            <div className="grid grid-cols-2 gap-4">
              {['Media Buying', 'Audit & Strategy', 'Retention', 'Tracking (CAPI)'].map(item => (
                <div key={item} className="flex items-center space-x-2 text-xs font-bold text-gray-300 uppercase tracking-widest">
                  <Target className="w-3 h-3 text-blue-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="absolute bottom-[-10%] right-[-5%] w-2/3 opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700 pointer-events-none">
             <div className="aspect-square bg-gradient-to-br from-blue-500 to-transparent blur-3xl rounded-full"></div>
          </div>
        </div>

        {/* Content Card - Vertical Small */}
        <div className="md:col-span-2 md:row-span-3 glass rounded-3xl p-8 flex flex-col group overflow-hidden relative">
          <div className="bg-emerald-500/10 text-emerald-400 p-3 rounded-xl w-fit mb-6">
            <Video className="w-8 h-8" />
          </div>
          <h3 className="text-3xl font-heading font-bold uppercase tracking-tighter mb-4">Content Engine</h3>
          <p className="text-gray-400 mb-8">We treat content as infrastructure. High-fidelity video, static ads, and long-form narrative that scales brands into icons.</p>
          
          <div className="mt-auto space-y-4">
            <div className="h-40 bg-white/5 rounded-2xl overflow-hidden relative">
               <img src="https://picsum.photos/seed/content/400/300" alt="Video Content" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
               <div className="absolute inset-0 bg-emerald-500/20 mix-blend-overlay"></div>
            </div>
            <div className="flex flex-wrap gap-2">
              {['UGC', 'High Fidelity', 'Motion'].map(tag => (
                <span key={tag} className="px-3 py-1 bg-white/5 rounded-full text-[10px] uppercase font-bold text-emerald-400 border border-emerald-500/20">{tag}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Web Dev - Horizontal Small */}
        <div className="md:col-span-4 md:row-span-1 glass rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8 group">
          <div className="flex-1">
            <div className="bg-purple-500/10 text-purple-400 p-3 rounded-xl w-fit mb-6">
              <Globe className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-heading font-bold uppercase tracking-tighter mb-4">Web Builds</h3>
            <p className="text-gray-400">Headless Shopify, Webflow, or custom React apps. Speed, conversion, and aesthetics combined.</p>
          </div>
          <div className="flex-1 w-full flex items-center justify-center">
             <div className="w-full h-24 glass rounded-xl border-dashed border-white/20 flex items-center justify-center p-4">
                <code className="text-xs text-purple-400 font-mono">
                   &lt;Adscrew.Scale /&gt;
                </code>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
