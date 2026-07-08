'use client';
import { useEffect, useRef } from 'react';

const steps = [
  { n: '01', t: 'Consultation', d: 'Discuss brand vision, SKU formats, volume and timelines.' },
  { n: '02', t: 'Packaging Design', d: 'We assist with FSSAI-compliant label design and packaging formats.' },
  { n: '03', t: 'Manufacturing', d: '35 TPD Kachi Ghani capacity. AGMARK Grade 1, every batch.' },
  { n: '04', t: 'Quality Assurance', d: 'GLC testing, 4-stage filtration, archived control samples.' },
  { n: '05', t: 'Dispatch', d: 'On-time pan-India delivery. Direct rail for North Eastern states.' },
];

const clientNames = ['Patanjali Ayurved', 'Modicare Ltd.', 'Louis Dreyfus', 'Dalmia Bharat', 'Aastha Channel', 'SPG Consumer'];

export default function PrivateLabel() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach((el, i) => setTimeout(() => el.classList.add('visible'), i * 90)); });
    }, { threshold: 0.05 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const go = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="private-label" ref={ref} className="section-pad" style={{ background: '#FAFAFA' }}>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left */}
          <div>
            <div className="eyebrow reveal mb-6">Private Label Manufacturing</div>
            <h2 className="heading-xl text-gray-900 reveal reveal-delay-1 mb-6">
              You Build<br />The Brand.<br /><span className="text-red-shine">We Build The Product.</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed reveal reveal-delay-2 mb-8">
              We manufacture for Patanjali, Modicare, Dalmia Bharat and Louis Dreyfus. If India's biggest brands trust us — your brand can too.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8 reveal reveal-delay-3">
              {['All SKU sizes', 'AGMARK Grade 1', 'FSSAI Compliant', 'Custom labelling', 'Nitrogen flushed', 'Inkjet coded'].map(t => (
                <span key={t} className="px-4 py-2 bg-red-50 border border-red-100 rounded-full text-red-700 text-xs font-semibold">{t}</span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 reveal reveal-delay-4">
              <button onClick={() => go('#contact')} className="btn-primary">Start the Conversation →</button>
              <a href="tel:+919783820000" className="btn-outline-red">+91 97838 20000</a>
            </div>

            {/* Client names marquee */}
            <div className="mt-12 reveal reveal-delay-5">
              <p className="text-gray-400 text-xs tracking-widest uppercase mb-4 font-semibold">Trusted by</p>
              <div className="overflow-hidden">
                <div className="marquee-track gap-6">
                  {[...clientNames, ...clientNames].map((name, i) => (
                    <div key={i} className="flex-shrink-0 px-5 py-2.5 border border-gray-200 rounded-full text-gray-500 text-xs font-medium mr-3">{name}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right — workflow */}
          <div className="reveal reveal-right">
            <div className="bg-white rounded-3xl border border-gray-100 p-8 md:p-10 shadow-lg shadow-gray-100/50">
              <h3 style={{ fontFamily: 'Playfair Display, serif' }} className="text-gray-900 text-xl font-bold mb-8">How It Works</h3>
              <div className="space-y-0">
                {steps.map((s, i) => (
                  <div key={s.n} className="flex gap-6 items-start pb-8 last:pb-0 relative">
                    {i < steps.length - 1 && <div className="absolute left-5 top-10 bottom-0 w-px bg-gray-100" />}
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-700 flex items-center justify-center text-white text-xs font-bold z-10">{s.n}</div>
                    <div>
                      <h4 style={{ fontFamily: 'Playfair Display, serif' }} className="text-gray-900 font-semibold mb-1">{s.t}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{s.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
