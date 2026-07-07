'use client';
import { useEffect, useRef } from 'react';

const pillars = [
  { title: '100% Pure', desc: 'No adulteration, no blending. Only cold-pressed Kachi Ghani from premium mustard seeds.' },
  { title: 'AGMARK Grade 1', desc: 'India\'s highest government certification for mustard oil quality and composition.' },
  { title: '30+ Years Experience', desc: 'Founded 1992. Three decades of manufacturing discipline and industry trust.' },
  { title: 'In-House GLC Lab', desc: 'Gas Liquid Chromatography + NIR Analyser test every batch before dispatch.' },
  { title: '166 Kohl Cold Press', desc: 'Traditional Kachi Ghani at scale — preserving natural pungency and aroma.' },
  { title: 'Private Label Ready', desc: 'Custom packaging, all SKU sizes, AGMARK certified — your brand, our manufacturing.' },
  { title: 'Bulk Supply', desc: '500 MT storage, 100 TPD packing, 8 lines — large-volume supply without disruption.' },
  { title: '125% Power Backup', desc: '885 KVA DG Sets ensure zero production downtime. Every order ships on schedule.' },
];

export default function WhyUs() {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.reveal').forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 70);
          });
        }
      });
    }, { threshold: 0.05 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="why-us" ref={sectionRef} className="py-24 bg-[#FFF5F5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-label reveal mb-3">Why Golden Chinar</span>
          <div className="red-divider mx-auto mb-5 reveal reveal-delay-1" />
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal reveal reveal-delay-1">
            Manufactured to a <span className="text-[#C41E1E]">Higher Standard.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((pillar, i) => (
            <div key={pillar.title} className={`reveal reveal-delay-${Math.min((i%4)+1,5)} card-white p-6 group`}>
              <div className="w-8 h-8 rounded-full bg-[#C41E1E] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <div className="w-2 h-2 rounded-full bg-white" />
              </div>
              <h3 className="font-playfair text-base text-charcoal font-bold mb-2">{pillar.title}</h3>
              <p className="text-charcoal/50 font-inter text-xs leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
