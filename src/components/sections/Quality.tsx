'use client';
import { useEffect, useRef } from 'react';

const points = [
  { t: 'AGMARK Grade 1', d: "India's highest government certification for mustard oil quality." },
  { t: 'GLC Tested Every Batch', d: 'Gas Liquid Chromatography analysis on every single production lot.' },
  { t: 'Four-Stage Filtration', d: 'Polishing filters remove particles to 2.5 microns for crystal clarity.' },
  { t: 'Archived Control Samples', d: 'Every batch sample stored for complete, auditable traceability.' },
  { t: 'In-House NIR Analyser', d: 'Seed quality verified before processing begins — no shortcuts.' },
  { t: 'FSSAI Compliant', d: 'Full compliance with Food Safety and Standards Authority regulations.' },
];

export default function Quality() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.querySelectorAll('.reveal,.reveal-left,.reveal-right,.reveal-scale').forEach((el, i) => setTimeout(() => el.classList.add('visible'), i * 80)); });
    }, { threshold: 0.05 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="quality" ref={ref} className="section-pad bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <div>
            <div className="eyebrow reveal mb-6">Quality Assurance</div>
            <h2 className="heading-xl text-gray-900 reveal reveal-delay-1 mb-6">
              Quality Without<br /><span className="text-red-shine">Compromise.</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed reveal reveal-delay-2 mb-10">
              Every litre is tested, certified and traceable. We don't just meet AGMARK standards — we're the manufacturer others trust to meet their standards.
            </p>
            <div className="space-y-5 reveal reveal-delay-3">
              {points.map(p => (
                <div key={p.t} className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-700 flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform duration-300">
                    <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3"><path d="M2 6l2.5 2.5L10 3.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <div>
                    <span className="text-gray-900 font-semibold text-sm">{p.t}</span>
                    <span className="text-gray-500 text-sm"> — {p.d}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — visual */}
          <div className="reveal-scale">
            <div className="bg-red-800 rounded-3xl p-10 md:p-14 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 30% 30%, #FCD34D 0%, transparent 60%)' }} />
              <div className="relative text-center">
                {/* Concentric circles */}
                <div className="relative inline-flex items-center justify-center mb-8">
                  {[180, 140, 100].map((s, i) => (
                    <div key={s} className="absolute rounded-full border border-amber-400/15"
                      style={{ width: s, height: s, animation: `float ${5+i}s ease-in-out infinite`, animationDelay: `${i*0.5}s` }} />
                  ))}
                  <div className="relative z-10 w-24 h-24 rounded-full bg-amber-400 flex items-center justify-center shadow-2xl shadow-amber-500/30">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-10 h-10 text-red-800">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                  </div>
                </div>
                <div style={{ fontFamily: 'Playfair Display, serif' }} className="text-white text-2xl font-bold mb-1">AGMARK Grade 1</div>
                <div className="text-amber-400 text-xs tracking-widest uppercase mb-8">Certified Since Inception</div>
                <div className="grid grid-cols-3 gap-3">
                  {['GLC Tested', 'FSSAI', '4-Stage Filter', 'NIR Verified', 'Batch Traced', 'N₂ Flushed'].map(l => (
                    <div key={l} className="bg-white/8 rounded-xl py-3 px-2 text-white/70 text-xs font-medium">{l}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
