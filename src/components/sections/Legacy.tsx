'use client';
import { useEffect, useRef } from 'react';

const milestones = [
  { year: '1992', title: 'Founded with Honour', desc: 'Col. Sansar Singh, Vir Chakra (Retd.) founds Jai Vaishno Oil Mills under SEMFEX after 30 years of distinguished military service.' },
  { year: '2000s', title: 'Scaling Up', desc: 'Plant expands to 100 MT crushing capacity. 166 cold-press Kohul machines commissioned for authentic Kachi Ghani extraction.' },
  { year: '2010s', title: 'AGMARK Certified', desc: 'Awarded AGMARK Grade 1 — India\'s highest mustard oil certification. In-house GLC lab and NIR Analyser installed.' },
  { year: '2015', title: 'Patanjali Partnership', desc: 'Become exclusive manufacturer for Patanjali Ayurved. 200ml & 500ml packed solely by us — not even at Patanjali\'s own plant.' },
  { year: '2020s', title: 'Enterprise Scale', desc: 'Trusted by Louis Dreyfus (Netherlands), Modicare (KK Modi Group), Dalmia Bharat Sugar, and Aastha Channel.' },
  { year: 'Today', title: 'Manufacturing Excellence', desc: '100 TPD packing, 500 MT storage, 8 automated lines — a manufacturing powerhouse in India\'s mustard heartland.' },
];

export default function Legacy() {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.reveal').forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 120);
          });
        }
      });
    }, { threshold: 0.05 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-label reveal mb-3">Our Legacy</span>
          <div className="red-divider mx-auto mb-5 reveal reveal-delay-1" />
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal leading-tight reveal reveal-delay-1">
            A Story Born From <span className="text-[#C41E1E]">Valour.</span>
          </h2>
          <p className="text-charcoal/60 text-lg font-inter mt-5 leading-relaxed reveal reveal-delay-2">
            Founded by a Vir Chakra decorated war hero. Built with military-grade discipline and a manufacturer's obsession for purity.
          </p>
        </div>

        {/* Founder card */}
        <div className="bg-[#C41E1E] rounded-2xl p-8 md:p-10 mb-16 reveal max-w-3xl mx-auto text-white">
          <div className="flex items-start gap-5">
            <div className="flex-shrink-0 w-1 self-stretch bg-[#F5C518] rounded-full" />
            <div>
              <span className="text-[#F5C518] text-xs font-inter tracking-[0.3em] uppercase font-semibold">Founder</span>
              <h3 className="font-playfair text-2xl font-bold mt-1 mb-3">
                Col. Sansar Singh, <span className="text-[#F5C518]">Vir Chakra</span> (Retd.)
              </h3>
              <p className="text-white/80 font-inter leading-relaxed text-sm">
                Awarded the Vir Chakra by the President of India for exemplary gallantry in the Indo-Pak War. After 30 years of distinguished military service, Colonel Singh channelled the same discipline and integrity into founding Jai Vaishno Oil Mills in 1992. The values he instilled — honesty, precision, and zero compromise — remain the backbone of every drop we produce today.
              </p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#C41E1E]/50 to-transparent md:-translate-x-px" />
          <div className="space-y-10">
            {milestones.map((m, i) => (
              <div key={m.year} className={`reveal reveal-delay-${Math.min(i+1,5)} flex gap-8 md:gap-0 ${i%2===0?'md:flex-row':'md:flex-row-reverse'}`}>
                <div className={`flex-1 pl-12 md:pl-0 ${i%2===0?'md:pr-14 md:text-right':'md:pl-14'}`}>
                  <span className="text-[#C41E1E] font-playfair text-xl font-bold">{m.year}</span>
                  <h4 className="font-playfair text-lg text-charcoal font-semibold mt-1 mb-1">{m.title}</h4>
                  <p className="text-charcoal/50 font-inter text-sm leading-relaxed">{m.desc}</p>
                </div>
                <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 w-3 h-3 bg-[#C41E1E] rounded-full border-2 border-white shadow mt-1.5" />
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
