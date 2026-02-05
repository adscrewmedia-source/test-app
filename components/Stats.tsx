
import React, { useEffect, useState, useRef } from 'react';

const Stats: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const data = [
    { label: "Managed Spend", value: "$25M+", sub: "Across Meta & Google" },
    { label: "Leads Generated", value: "850k+", sub: "High Intent Pipeline" },
    { label: "Revenue Attributed", value: "$140M+", sub: "Verified Shopify/CRM" },
    { label: "Partner Brands", value: "48+", sub: "Global Scale" }
  ];

  return (
    <div ref={sectionRef} className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {data.map((item, idx) => (
          <div 
            key={idx} 
            className={`text-center md:text-left transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: `${idx * 200}ms` }}
          >
            <p className="text-blue-500 font-bold uppercase tracking-widest text-[10px] mb-2">{item.label}</p>
            <div className="text-5xl lg:text-7xl font-heading font-extrabold tracking-tighter mb-4">{item.value}</div>
            <p className="text-gray-500 text-sm uppercase tracking-wide">{item.sub}</p>
          </div>
        ))}
      </div>

      <div className="mt-20 border-t border-white/5 pt-20 flex flex-col md:flex-row items-center justify-between gap-10">
        <h3 className="text-2xl md:text-4xl font-heading font-bold uppercase tracking-tight max-w-xl text-center md:text-left">
          Ready to screw the baseline? <br />
          <span className="text-gray-500">We don't follow trends, we set the pace.</span>
        </h3>
        <div className="flex -space-x-4">
          {[1, 2, 3, 4, 5].map(i => (
            <img 
              key={i} 
              src={`https://picsum.photos/seed/avatar${i}/100/100`} 
              alt="Client" 
              className="w-14 h-14 rounded-full border-4 border-[#0A0A0A] object-cover"
            />
          ))}
          <div className="w-14 h-14 rounded-full border-4 border-[#0A0A0A] bg-blue-600 flex items-center justify-center text-xs font-bold">
            +100
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
