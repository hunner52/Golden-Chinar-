'use client';
import { useEffect, useRef } from 'react';

const milestones = [
  { year: '1992', title: 'Founded with Honour', desc: 'Col. Sansar Singh, Vir Chakra (Retd.) establishes Jai Vaishno Oil Mills under SEMFEX — channelling 30 years of military discipline into a mustard oil legacy.' },
  { year: '2000s', title: 'Scaling the Plant', desc: 'Capacity grows to 100 MT crushing per day. 166 cold-press Kohul machines installed for authentic Kachi Ghani extraction at industrial scale.' },
  { year: '2010s', title: 'AGMARK Grade 1', desc: "India's highest mustard oil certification awarded. In-house GLC lab and NIR Analyser commissioned for world-class quality control." },
  { year: '2015', title: 'Patanjali Partnership', desc: 'Become exclusive manufacturer for Patanjali Ayurved. 200ml & 500ml packed solely by us — not even at their own plant.' },
  { year: '2020s', title: 'Global Clients', desc: 'Trusted by Louis Dreyfus Company (Netherlands), Modicare, Dalmia Bharat Sugar and Aastha Channel.' },
  { year: 'Today', title: '100 TPD & Growing', desc: '8 automated packing lines, 500 MT oil storage, 125% power backup — a manufacturing powerhouse in India\'s mustard heartland.' },
];

export default function Legacy() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.querySelectorAll('.reveal,.reveal-left,.reveal-right,.reveal-scale').forEach((el, i) => setTimeout(() => el.classList.add('visible'), i * 100)); });
    }, { threshold: 0.05 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="section-pad bg-white">
      <div className="container">
        {/* Split header */}
        <div className="grid lg:grid-cols-2 gap-16 items-end mb-20">
          <div>
            <div className="eyebrow reveal mb-5">Our Legacy</div>
            <h2 className="heading-xl text-gray-900 reveal reveal-delay-1">
              A Story Born<br />From <span className="text-red-shine">Valour.</span>
            </h2>
          </div>
          <div className="reveal reveal-delay-2">
            <p className="text-gray-500 text-lg leading-relaxed mb-6">
              Founded by a Vir Chakra decorated war hero. Built with military-grade discipline. Scaled by an uncompromising obsession for purity. This is the story of Golden Chinar.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-red-700" /><span>Khairthal, Rajasthan</span></div>
              <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-amber-500" /><span>RIICO Industrial Area</span></div>
            </div>
          </div>
        </div>

        {/* Founder callout — full width, stunning */}
        <div className="reveal-scale mb-20 rounded-3xl overflow-hidden bg-red-800 relative">
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: 'radial-gradient(circle at 70% 50%, #FCD34D 0%, transparent 60%)' }} />
          <div className="relative p-10 md:p-14 grid md:grid-cols-3 gap-10 items-center">
            {/* Medal icon */}
            <div className="flex justify-center md:justify-start">
              <div className="relative w-32 h-32">
                <div className="w-32 h-32 rounded-full bg-amber-400/20 border-2 border-amber-400/40 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-amber-400 text-4xl mb-1">★</div>
                    <div className="text-white/60 text-xs font-semibold tracking-widest uppercase">Vir Chakra</div>
                  </div>
                </div>
                {/* Pulse rings */}
                <div className="absolute inset-0 rounded-full border-2 border-amber-400/20 animate-ping" />
              </div>
            </div>

            <div className="md:col-span-2">
              <div className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase mb-3">Founder · 1992</div>
              <h3 style={{ fontFamily: 'Playfair Display, serif' }} className="text-white text-2xl md:text-3xl font-bold mb-4">
                Col. Sansar Singh, <span className="text-amber-400">Vir Chakra</span> (Retd.)
              </h3>
              <p className="text-white/70 leading-relaxed text-base">
                Decorated with the Vir Chakra by the President of India for exemplary gallantry in the Indo-Pak War. After 30 years of distinguished military service, Colonel Singh channelled the same discipline, integrity and refusal to compromise into building Jai Vaishno Oil Mills in 1992. Those founding values live in every drop we produce today.
              </p>
            </div>
          </div>
        </div>

        {/* Timeline — redesigned */}
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-red-800/40 via-red-800/20 to-transparent hidden md:block" />
          <div className="space-y-12">
            {milestones.map((m, i) => (
              <div key={m.year} className={`flex gap-0 md:gap-8 relative ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className={`flex-1 pl-10 md:pl-0 ${i % 2 === 0 ? 'md:pr-14 md:text-right' : 'md:pl-14'} reveal reveal-delay-${Math.min(i % 3 + 1, 5)}`}>
                  <div className={`inline-flex items-center gap-2 mb-2 ${i % 2 === 0 ? 'md:flex-row-reverse md:justify-end' : ''}`}>
                    <span style={{ fontFamily: 'Playfair Display, serif' }} className="text-red-700 text-2xl font-bold">{m.year}</span>
                  </div>
                  <h4 style={{ fontFamily: 'Playfair Display, serif' }} className="text-gray-900 text-lg font-semibold mb-2">{m.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-sm">{m.desc}</p>
                </div>

                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-red-700 border-4 border-white shadow-lg mt-2 z-10" />
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
