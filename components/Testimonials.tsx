
import React from 'react';
import { Quote, CheckCircle2, TrendingUp, DollarSign, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Marcus Thorne",
      role: "CEO, Nexa Brands",
      content: "Adscrew scaled our monthly revenue from $50k to $450k in just 4 months. Their creative engine is simply unmatched by any global agency we've worked with.",
      avatar: "https://picsum.photos/seed/m1/100/100",
      metric: "$400k+ Scale",
      metricLabel: "Incremental MRR",
      verified: true,
      size: "large"
    },
    {
      name: "Elena Rodriguez",
      role: "Founder, Glow Up",
      content: "The web build they delivered wasn't just pretty—it converted at 8.4%. Best investment we've made this year.",
      avatar: "https://picsum.photos/seed/m2/100/100",
      metric: "8.4%",
      metricLabel: "CR Optimization",
      verified: true,
      size: "small"
    },
    {
      name: "Jason Chen",
      role: "Head of Growth, FinFlow",
      content: "Scientific performance marketing. Our CAC dropped by 40% while volume tripled. They treat our budget like their own.",
      avatar: "https://picsum.photos/seed/m3/100/100",
      metric: "40% CAC ↓",
      metricLabel: "Efficiency Gains",
      verified: true,
      size: "small"
    },
    {
      name: "Sarah Jenkins",
      role: "CMO, UrbanEdge",
      content: "A premium boutique experience with enterprise-level results. Adscrew isn't an agency; they are an extension of our growth team. The data reporting is the best in the business.",
      avatar: "https://picsum.photos/seed/m4/100/100",
      metric: "6.2x ROAS",
      metricLabel: "Ad Spend Efficiency",
      verified: true,
      size: "large"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between mb-20 gap-8">
        <div className="text-center md:text-left">
          <p className="text-blue-500 font-bold uppercase tracking-[0.4em] text-[10px] mb-4">Social Proof</p>
          <h2 className="text-5xl md:text-7xl font-heading font-black uppercase tracking-tighter">Verified <span className="text-white/30">Growth.</span></h2>
        </div>
        <div className="flex items-center space-x-6 glass px-6 py-4 rounded-2xl border border-white/5">
           <div className="flex -space-x-3">
              {[1,2,3,4].map(i => (
                <img key={i} src={`https://picsum.photos/seed/face${i}/50/50`} className="w-10 h-10 rounded-full border-2 border-[#0A0A0A]" />
              ))}
           </div>
           <div className="h-10 w-px bg-white/10"></div>
           <div>
              <div className="flex items-center space-x-1 mb-1">
                 {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 text-yellow-500 fill-yellow-500" />)}
              </div>
              <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">4.9/5 Average Rating</p>
           </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Testimonial Cards */}
        {testimonials.map((t, idx) => (
          <div 
            key={idx} 
            className={`group relative glass rounded-[32px] p-8 border border-white/5 transition-all duration-500 hover:border-blue-500/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] ${
              t.size === 'large' ? 'md:col-span-2' : 'md:col-span-1'
            }`}
          >
            <div className="absolute top-8 right-8 text-blue-500/10 group-hover:text-blue-500/20 transition-colors">
               <Quote className="w-12 h-12" />
            </div>

            <div className="flex items-start justify-between mb-8">
               <div className="flex items-center space-x-4">
                  <div className="relative">
                    <img src={t.avatar} className="w-14 h-14 rounded-2xl object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt={t.name} />
                    {t.verified && (
                      <div className="absolute -bottom-1 -right-1 bg-blue-600 rounded-full p-1 border-2 border-[#0A0A0A]">
                        <CheckCircle2 className="w-3 h-3 text-white" />
                      </div>
                    )}
                  </div>
                  <div>
                     <h4 className="font-heading font-black text-lg uppercase tracking-tight">{t.name}</h4>
                     <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{t.role}</p>
                  </div>
               </div>
            </div>

            <p className={`text-gray-400 font-light leading-relaxed mb-10 ${t.size === 'large' ? 'text-xl' : 'text-base'}`}>
              "{t.content}"
            </p>

            <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-8">
               <div className="space-y-1">
                  <div className="flex items-center space-x-2 text-emerald-400">
                     <TrendingUp className="w-4 h-4" />
                     <span className="text-xl font-heading font-black tracking-tight">{t.metric}</span>
                  </div>
                  <p className="text-[9px] font-black text-gray-600 uppercase tracking-[0.2em]">{t.metricLabel}</p>
               </div>
               <div className="flex items-center justify-end">
                  <div className="px-3 py-1.5 bg-white/[0.03] rounded-lg border border-white/10 flex items-center space-x-2">
                     <DollarSign className="w-3 h-3 text-blue-500" />
                     <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest">Verified Revenue</span>
                  </div>
               </div>
            </div>
          </div>
        ))}

        {/* Call to Action Testimonial Placeholder */}
        <div className="bg-blue-600 rounded-[32px] p-8 flex flex-col items-center justify-center text-center space-y-6 group cursor-pointer hover:bg-blue-500 transition-all shadow-xl shadow-blue-900/20">
           <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mb-2">
              <TrendingUp className="w-8 h-8 text-white group-hover:scale-125 transition-transform duration-500" />
           </div>
           <div>
              <h4 className="text-2xl font-heading font-black uppercase tracking-tight mb-2">Your Result Here?</h4>
              <p className="text-white/70 text-sm font-light leading-relaxed">Join the brands scaling with engineering-first performance marketing.</p>
           </div>
           <a href="#contact" className="w-full py-4 bg-white text-black rounded-2xl font-black uppercase tracking-widest text-[10px] hover:translate-y-[-2px] transition-transform">
              Apply For Partnership
           </a>
        </div>
      </div>

      {/* Verification Badge Bar */}
      <div className="mt-20 flex flex-wrap justify-center gap-12 opacity-30 grayscale items-center">
         <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4" />
            <span className="text-[10px] font-black uppercase tracking-widest">Shopify Plus Partner</span>
         </div>
         <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4" />
            <span className="text-[10px] font-black uppercase tracking-widest">Meta Business Partner</span>
         </div>
         <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4" />
            <span className="text-[10px] font-black uppercase tracking-widest">Google Premier Partner</span>
         </div>
         <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4" />
            <span className="text-[10px] font-black uppercase tracking-widest">TikTok Ad Partner</span>
         </div>
      </div>
    </div>
  );
};

export default Testimonials;
