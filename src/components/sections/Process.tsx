'use client';
import { useEffect, useRef } from 'react';

const steps = [
  { n: '01', title: 'Seed Selection', desc: "Premium black mustard from Alwar — India's highest-producing district. Only Grade 1 seeds clear intake." },
  { n: '02', title: 'Cleaning & Sorting', desc: 'Multi-stage cleaning and NIR Analyser grading before any processing begins.' },
  { n: '03', title: 'Kachi Ghani Extraction', desc: '166 cold-press Kohuls extract oil at low temperature — preserving pungency, aroma and nutrients.' },
  { n: '04', title: 'Four-Stage Filtration', desc: 'Micro and polishing filters remove particles to 2.5 microns. Crystal clarity, guaranteed.' },
  { n: '05', title: 'Quality Testing', desc: 'GLC lab tests every batch against FSSAI and AGMARK. Control samples archived per run.' },
  { n: '06', title: 'Precision Packaging', desc: '8 automated lines — 200ml to 15L. Nitrogen flushed, inkjet coded, fully traceable.' },
];

export default function Process() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.querySelectorAll('.reveal,.reveal-scale').forEach((el, i) => setTimeout(() => el.classList.add('visible'), i * 80)); });
    }, { threshold: 0.05 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="process" ref={ref} className="section-pad bg-red-800 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-red-700/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="eyebrow-light reveal mb-5">The Process</div>
            <h2 className="heading-xl text-white reveal reveal-delay-1">
              From Seed<br /><span className="text-yellow-shine">To Trust.</span>
            </h2>
          </div>
          <p className="text-white/55 max-w-xs leading-relaxed text-sm reveal reveal-delay-2">
            Every drop travels through six rigorous stages — from raw seed to sealed, certified bottle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((s, i) => (
            <div key={s.n} className={`reveal reveal-delay-${Math.min((i % 3) + 1, 5)} card-dark p-8 group relative overflow-hidden`}>
              {/* Large number bg */}
              <div style={{ fontFamily: 'Playfair Display, serif' }} className="absolute -right-4 -top-4 text-9xl font-black text-white/[0.04] select-none pointer-events-none">{s.n}</div>
              <div className="relative">
                <div style={{ fontFamily: 'Playfair Display, serif' }} className="text-amber-400/30 text-5xl font-black mb-5 group-hover:text-amber-400/60 transition-colors duration-400">{s.n}</div>
                <h3 style={{ fontFamily: 'Playfair Display, serif' }} className="text-white text-xl font-semibold mb-3">{s.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Cert strip */}
        <div className="mt-12 flex flex-wrap gap-3 justify-center reveal">
          {['AGMARK Grade 1', 'FSSAI Compliant', 'GLC Lab Tested', 'NIR Verified', 'Make in India'].map(c => (
            <span key={c} className="px-5 py-2.5 border border-amber-400/30 rounded-full text-amber-400 text-xs font-semibold tracking-widest uppercase hover:bg-amber-400/10 transition-colors duration-200">{c}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
