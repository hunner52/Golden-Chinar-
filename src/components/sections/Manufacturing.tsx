'use client';
import { useEffect, useRef } from 'react';

const specs = [
  { v: '100 TPD', l: 'Crushing Capacity', s: 'Mustard seed daily' },
  { v: '35 TPD', l: 'Kachi Ghani Output', s: 'Cold-pressed per day' },
  { v: '100 TPD', l: 'Packing Capacity', s: '8 automated lines' },
  { v: '500 MT', l: 'Oil Storage', s: 'On-plant facility' },
  { v: '166', l: 'Cold Press Kohuls', s: 'Traditional extraction' },
  { v: '885 KVA', l: 'Power Backup', s: '125% of requirement' },
];

const lines = [
  { n: 'L1', d: 'PLC Flow Meter 6-head — 2L to 15L formats' },
  { n: 'L2', d: '6-head filling, capping & labelling — 200ml to 1L' },
  { n: 'L3', d: '6-head filling, capping & labelling — 200ml to 1L' },
  { n: 'L4', d: '6-head filling, capping & labelling — 200ml to 500ml' },
  { n: 'L5', d: '4-head induction sealing — 2L to 5L single stroke' },
  { n: 'L6', d: 'PLC 6-head — 15kg/L bulk filling' },
  { n: 'L7', d: 'Side-seal pouch packing with carton taping' },
  { n: 'L8', d: 'Centre-seal pouch packing with carton taping' },
];

export default function Manufacturing() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach((el, i) => setTimeout(() => el.classList.add('visible'), i * 80)); });
    }, { threshold: 0.05 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="manufacturing" ref={ref} className="section-pad bg-white">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="eyebrow reveal justify-center mb-5">The Facility</div>
          <h2 className="heading-xl text-gray-900 reveal reveal-delay-1">
            Industrial Scale.<br /><span className="text-red-shine">Artisan Precision.</span>
          </h2>
          <p className="text-gray-500 text-lg mt-5 leading-relaxed reveal reveal-delay-2">
            RIICO Industrial Area, Khairthal — 80km from Gurgaon, in India's highest mustard-seed producing belt.
          </p>
        </div>

        {/* Specs grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mb-16">
          {specs.map((s, i) => (
            <div key={s.l} className={`reveal reveal-delay-${Math.min((i % 3) + 1, 5)} card-white p-7 group text-center`}>
              <div style={{ fontFamily: 'Playfair Display, serif' }} className="text-3xl md:text-4xl font-black text-red-700 mb-2">{s.v}</div>
              <div className="text-gray-800 font-semibold text-sm mb-1">{s.l}</div>
              <div className="text-gray-400 text-xs">{s.s}</div>
            </div>
          ))}
        </div>

        {/* Packing lines */}
        <div className="reveal mb-16">
          <h3 style={{ fontFamily: 'Playfair Display, serif' }} className="text-gray-900 text-2xl font-bold mb-6">8 Dedicated Packing Lines</h3>
          <div className="grid md:grid-cols-2 gap-3">
            {lines.map(l => (
              <div key={l.n} className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-red-200 hover:bg-red-50/50 transition-all duration-300 group">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-red-700 flex items-center justify-center text-white text-xs font-bold">{l.n}</div>
                <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-800 transition-colors">{l.d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Location card */}
        <div className="reveal rounded-3xl bg-red-800 overflow-hidden relative">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 80% 50%, #FCD34D 0%, transparent 60%)' }} />
          <div className="relative p-10 md:p-14 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase mb-3">Locational Advantage</div>
              <h3 style={{ fontFamily: 'Playfair Display, serif' }} className="text-white text-2xl md:text-3xl font-bold mb-4">
                India's Mustard Heartland
              </h3>
              <p className="text-white/65 text-sm leading-relaxed">
                Alwar district is India's highest mustard seed producing region. Direct rail to North Eastern states, and ₹25,000+ freight savings per wagon over Jaipur-based plants.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { v: '80 km', l: 'From Gurgaon NCR' },
                { v: '₹500/MT', l: 'Freight saving' },
                { v: 'Direct Rail', l: 'North East India' },
                { v: '₹25,000+', l: 'Saved per wagon' },
              ].map(i => (
                <div key={i.l} className="bg-white/8 border border-amber-400/15 rounded-2xl p-5 text-center">
                  <div style={{ fontFamily: 'Playfair Display, serif' }} className="text-amber-400 text-xl font-bold mb-1">{i.v}</div>
                  <div className="text-white/45 text-xs">{i.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
