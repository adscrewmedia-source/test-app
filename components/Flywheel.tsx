
import React from 'react';
import { Layers, Zap, MousePointer2 } from 'lucide-react';

const Flywheel: React.FC = () => {
  const steps = [
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Content Engines",
      desc: "We build viral-ready creative assets that capture attention and build authority before the click.",
      color: "text-blue-400",
      bg: "bg-blue-400/10"
    },
    {
      icon: <MousePointer2 className="w-6 h-6" />,
      title: "Conversion Web",
      desc: "Highly-optimized landing pages designed with behavioral psychology to turn traffic into pipeline.",
      color: "text-emerald-400",
      bg: "bg-emerald-400/10"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance Ads",
      desc: "Scientific ad deployment across Meta, Google, and TikTok to scale what works and cut what doesn't.",
      color: "text-purple-400",
      bg: "bg-purple-400/10"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <p className="text-blue-500 font-bold uppercase tracking-widest text-xs mb-4">The Methodology</p>
        <h2 className="text-4xl md:text-6xl font-heading font-extrabold uppercase tracking-tighter mb-6">The Growth Flywheel</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">Our circular approach ensures that every creative fuels a landing page, and every landing page optimizes your ad performance.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 relative">
        {/* Connection Line (Hidden on mobile) */}
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2 z-0"></div>
        
        {steps.map((step, idx) => (
          <div key={idx} className="relative z-10 group">
            <div className="glass p-10 rounded-3xl border border-white/5 hover:border-white/20 transition-all duration-500 group-hover:-translate-y-2 h-full flex flex-col">
              <div className={`${step.bg} ${step.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transform transition-transform group-hover:rotate-6`}>
                {step.icon}
              </div>
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-[10px] font-bold text-gray-500 font-mono tracking-tighter">0{idx + 1}</span>
                <h3 className="text-2xl font-heading font-bold uppercase tracking-tight">{step.title}</h3>
              </div>
              <p className="text-gray-400 leading-relaxed font-light mb-6 flex-grow">{step.desc}</p>
              <div className={`h-1 w-0 ${step.bg.replace('/10', '')} transition-all duration-700 group-hover:w-full rounded-full`}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Flywheel;
