'use client';
import { useEffect, useRef } from 'react';

const steps = [
  { number: '01', title: 'Seed Selection', desc: 'Premium black mustard from Alwar district — India\'s highest producing belt. Only Grade 1 seeds pass intake inspection.' },
  { number: '02', title: 'Cleaning & Sorting', desc: 'Multi-stage cleaning removes impurities. Seeds graded for oil content using in-house NIR Analyser.' },
  { number: '03', title: 'Kachi Ghani Extraction', desc: '166 cold-press Kohul machines extract oil at low temperature, preserving pungency, aroma, and nutrients.' },
  { number: '04', title: 'Four-Stage Filtration', desc: 'Micro-filtration and polishing filters remove particles down to 2.5 microns. Crystal clarity guaranteed.' },
  { number: '05', title: 'Quality Testing', desc: 'GLC lab tests every batch against FSSAI and AGMARK standards. Control samples archived per run.' },
  { number: '06', title: 'Precision Packaging', desc: '8 dedicated automated lines — 200ml to 15L. Nitrogen flushed. Inkjet coded for full traceability.' },
];

export default function Process() {
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
    }, { threshold: 0.05 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" ref={sectionRef} className="py-24 bg-[#C41E1E]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[#F5C518] text-xs font-inter font-semibold tracking-[0.3em] uppercase reveal mb-3 block">The Process</span>
          <div className="yellow-divider mx-auto mb-5 reveal reveal-delay-1" />
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white reveal reveal-delay-1">
            From Seed <span className="text-[#F5C518]">To Trust.</span>
          </h2>
          <p className="text-white/65 font-inter mt-4 leading-relaxed reveal reveal-delay-2">
            Every drop passes through a rigorous six-stage journey — from raw seed to sealed bottle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((step, i) => (
            <div key={step.number} className={`reveal reveal-delay-${Math.min(i+1,5)} card-red p-7 group`}>
              <div className="font-playfair text-5xl font-bold text-[#F5C518]/25 group-hover:text-[#F5C518]/50 transition-colors duration-400 mb-5">{step.number}</div>
              <h3 className="font-playfair text-xl text-white font-semibold mb-3">{step.title}</h3>
              <p className="text-white/60 font-inter text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center reveal">
          <div className="inline-flex flex-wrap gap-3 justify-center">
            {['AGMARK Grade 1', 'FSSAI Compliant', 'GLC Lab Tested', 'Make in India'].map((cert) => (
              <span key={cert} className="px-5 py-2 border border-[#F5C518]/40 rounded-full text-[#F5C518] text-xs font-inter font-semibold tracking-widest uppercase">{cert}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
