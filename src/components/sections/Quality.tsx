'use client';
import { useEffect, useRef } from 'react';

const points = [
  { title: 'AGMARK Grade 1 Certified', desc: 'India\'s highest government quality certification for mustard oil.' },
  { title: 'Batch-Wise GLC Testing', desc: 'Gas Liquid Chromatography on every single production lot.' },
  { title: 'Four-Stage Filtration', desc: 'Micro-filtration and polishing filters down to 2.5 microns.' },
  { title: 'Archived Control Samples', desc: 'Every batch sample stored for complete traceability.' },
  { title: 'In-House NIR Analyser', desc: 'Seed quality verified before processing begins.' },
  { title: 'FSSAI Compliant', desc: 'Full compliance with Food Safety Standards Authority regulations.' },
];

export default function Quality() {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.reveal').forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 90);
          });
        }
      });
    }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="quality" ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="section-label reveal mb-3">Quality Assurance</span>
            <div className="red-divider mb-5 reveal reveal-delay-1" />
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal leading-tight reveal reveal-delay-1">
              Quality Without <span className="text-[#C41E1E]">Compromise.</span>
            </h2>
            <p className="text-charcoal/60 font-inter text-lg mt-5 leading-relaxed reveal reveal-delay-2">
              Every litre is tested, certified, and traceable. We don't just meet AGMARK standards — we're the manufacturer others trust to meet their standards.
            </p>
            <div className="mt-8 space-y-4 reveal reveal-delay-3">
              {points.map((p) => (
                <div key={p.title} className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#C41E1E] flex items-center justify-center mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                  </div>
                  <div>
                    <span className="text-charcoal font-inter font-semibold text-sm">{p.title}</span>
                    <span className="text-charcoal/45 font-inter text-sm"> — {p.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="reveal reveal-delay-2">
            <div className="bg-[#C41E1E] rounded-2xl p-10 text-center text-white">
              <div className="relative inline-flex items-center justify-center mb-6">
                {[120, 90, 60].map((size) => (
                  <div key={size} className="absolute rounded-full border border-[#F5C518]/20" style={{ width: size*2, height: size*2 }} />
                ))}
                <div className="relative z-10 w-24 h-24 rounded-full bg-[#F5C518] flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-10 h-10 text-[#C41E1E]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                </div>
              </div>
              <div className="font-playfair text-2xl font-bold mb-1">AGMARK Grade 1</div>
              <div className="text-[#F5C518] text-xs font-inter tracking-widest uppercase mb-6">Certified Since Inception</div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                {['GLC Tested', 'FSSAI Approved', '4-Stage Filter', 'NIR Verified', 'Batch Traced', 'Nitrogen Flushed'].map((l) => (
                  <div key={l} className="bg-white/10 rounded-lg py-2 px-3 text-white/80 text-xs font-inter">{l}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
