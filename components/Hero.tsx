
import React, { useState } from 'react';
import { ArrowUpRight, ShieldCheck, Zap, TrendingUp, BarChart3, Activity } from 'lucide-react';

const Hero: React.FC = () => {
  const [activeBrand, setActiveBrand] = useState<number | null>(null);

  const brands = [
    { name: "TETS", result: "2.4x ROAS", industry: "Sportswear", color: "from-orange-500" },
    { name: "REVOLUT", result: "+40% LTV", industry: "Fintech", color: "from-blue-400" },
    { name: "AIRBNB", result: "12% CAC ↓", industry: "Travel", color: "from-rose-500" },
    { name: "HYPERICE", result: "$2M Scaled", industry: "Wellness", color: "from-emerald-400" },
    { name: "GYMSHARK", result: "5.1x ROI", industry: "Apparel", color: "from-blue-600" }
  ];

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 text-center overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-emerald-600/5 blur-[100px] rounded-full pointer-events-none"></div>
      
      {/* Decorative SVG Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <line x1="10%" y1="0" x2="10%" y2="100%" stroke="white" strokeWidth="1" />
        <line x1="90%" y1="0" x2="90%" y2="100%" stroke="white" strokeWidth="1" />
        <circle cx="10%" cy="20%" r="4" fill="white" />
        <circle cx="90%" cy="80%" r="4" fill="white" />
      </svg>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center">
        {/* Badge */}
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="inline-flex items-center space-x-2 px-4 py-2 mb-8 rounded-full border border-blue-500/20 glass text-[10px] uppercase tracking-[0.4em] font-bold text-blue-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span>Performance Audit Available</span>
          </div>
        </div>
        
        {/* Headline */}
        <h1 className="text-6xl md:text-9xl font-heading font-black tracking-tighter leading-[0.85] mb-8 uppercase animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
          STOP <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-gray-600">GUESSING</span>. <br />
          START <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-emerald-400 to-blue-600 text-glow">GROWING</span>.
        </h1>
        
        {/* Sub-headline */}
        <p className="text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed font-light animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
          Adscrew is the growth engine for ambitious brands. We fuse 
          <span className="text-white font-medium"> performance engineering </span> with 
          <span className="text-white font-medium"> viral-ready creative </span> to dominate market share.
        </p>
        
        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-300">
          <a 
            href="#contact" 
            className="group relative px-10 py-5 bg-white text-black rounded-full font-black uppercase tracking-widest text-xs flex items-center space-x-3 hover:bg-blue-600 hover:text-white transition-all duration-500 shadow-2xl shadow-white/5 active:scale-95"
          >
            <span>Scale My Brand</span>
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
          
          <a 
            href="#services" 
            className="group px-10 py-5 glass rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white/10 transition-all border border-white/10 flex items-center space-x-2"
          >
            <span>Our Capability</span>
            <Zap className="w-4 h-4 text-blue-400 group-hover:animate-bounce" />
          </a>
        </div>

        {/* Dashboard UI Preview */}
        <div className="w-full relative animate-in fade-in zoom-in duration-1000 delay-500 mb-32">
          <div className="absolute inset-0 bg-blue-600/20 blur-[150px] -z-10 rounded-full scale-75 opacity-50"></div>
          <div className="glass rounded-[40px] p-2 md:p-6 border border-white/10 shadow-3xl">
            <div className="bg-[#050505] rounded-[32px] overflow-hidden border border-white/5 relative">
              <div className="h-16 border-b border-white/5 flex items-center justify-between px-8 bg-white/[0.02]">
                <div className="flex items-center space-x-4">
                  <div className="flex space-x-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                  </div>
                  <div className="h-6 w-px bg-white/10 mx-2"></div>
                  <span className="text-[10px] font-mono text-gray-500 tracking-tighter uppercase">AdscrewOS_v4.2.0</span>
                </div>
                <div className="hidden md:flex items-center space-x-4">
                  <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Real-time Attribution</span>
                  <div className="px-3 py-1 bg-emerald-500/10 rounded-md border border-emerald-500/20 flex items-center space-x-2">
                    <Activity className="w-3 h-3 text-emerald-400 animate-pulse" />
                    <span className="text-emerald-400 text-[10px] font-black tracking-widest uppercase">LIVE</span>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-12 gap-px bg-white/5">
                <div className="md:col-span-8 p-8 md:p-12 bg-[#050505]">
                  <div className="flex items-center justify-between mb-12">
                    <div className="text-left">
                      <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">Total Scaling Portfolio</p>
                      <h3 className="text-5xl md:text-7xl font-heading font-black tracking-tighter">$14,242,900.00</h3>
                    </div>
                  </div>
                  <div className="flex items-end space-x-1 md:space-x-3 h-48">
                    {[30, 45, 60, 25, 80, 55, 95, 40, 70, 85, 50, 65, 90, 100].map((h, i) => (
                      <div 
                        key={i} 
                        className={`flex-1 rounded-t-lg transition-all duration-1000 ease-out hover:opacity-100 opacity-60 ${
                          i === 13 ? 'bg-gradient-to-t from-blue-600 to-blue-400 shadow-[0_0_20px_rgba(37,99,235,0.4)]' : 'bg-white/10'
                        }`}
                        style={{ height: `${h}%` }}
                      ></div>
                    ))}
                  </div>
                </div>
                <div className="md:col-span-4 p-8 md:p-12 bg-white/[0.01] border-l border-white/5 space-y-10">
                  <div className="space-y-4">
                    <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">Current ROAS</p>
                    <div className="flex items-baseline space-x-2">
                      <span className="text-4xl font-heading font-black">6.82x</span>
                      <span className="text-blue-400 text-xs font-bold">Target: 4.5x</span>
                    </div>
                    <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                      <div className="w-full h-full bg-blue-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="space-y-4 pt-4">
                    <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                       <div className="flex items-center space-x-3 mb-2">
                          <BarChart3 className="w-4 h-4 text-blue-400" />
                          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Winning Creative</span>
                       </div>
                       <div className="h-16 rounded-lg bg-white/10 overflow-hidden relative group">
                          <img src="https://picsum.photos/seed/ads/200/100" className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 transition-all duration-500" alt="Winning Ad" />
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Improved Trusted By Section */}
        <div className="w-full animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-700">
           <div className="relative flex flex-col items-center">
             <div className="flex items-center space-x-4 mb-12">
               <div className="h-px w-12 bg-gradient-to-r from-transparent to-white/20"></div>
               <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.5em]">Powering Market Leaders</p>
               <div className="h-px w-12 bg-gradient-to-l from-transparent to-white/20"></div>
             </div>
             
             <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 lg:gap-24 relative px-6">
                {brands.map((brand, idx) => (
                  <div 
                    key={idx}
                    className="relative group cursor-pointer"
                    onMouseEnter={() => setActiveBrand(idx)}
                    onMouseLeave={() => setActiveBrand(null)}
                  >
                    <span className={`text-2xl md:text-3xl lg:text-4xl font-heading font-black tracking-tighter transition-all duration-500 ${
                      activeBrand === idx ? 'text-white scale-110' : 'text-white/20 hover:text-white/40'
                    }`}>
                      {brand.name}
                    </span>
                    
                    {/* Hover Stats Card */}
                    <div className={`absolute -top-16 left-1/2 -translate-x-1/2 transition-all duration-300 pointer-events-none ${
                      activeBrand === idx ? 'opacity-100 -translate-y-2' : 'opacity-0 translate-y-2'
                    }`}>
                      <div className="bg-white/5 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-xl whitespace-nowrap shadow-2xl">
                        <div className="flex items-center space-x-3">
                           <div className={`w-2 h-2 rounded-full bg-gradient-to-tr ${brand.color} shadow-[0_0_10px_rgba(255,255,255,0.2)]`}></div>
                           <div>
                             <p className="text-[8px] text-gray-500 uppercase font-black tracking-widest leading-none mb-1">{brand.industry}</p>
                             <p className="text-xs font-bold text-white uppercase">{brand.result}</p>
                           </div>
                        </div>
                      </div>
                      <div className="w-2 h-2 bg-white/5 border-r border-b border-white/10 rotate-45 mx-auto -mt-1 backdrop-blur-xl"></div>
                    </div>
                  </div>
                ))}
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
