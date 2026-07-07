'use client';
import { useEffect, useRef } from 'react';

const facilities = [
  { label: 'Crushing Capacity', value: '100 TPD', sub: 'Mustard seed daily' },
  { label: 'Kachi Ghani Output', value: '35 TPD', sub: 'Cold-pressed per day' },
  { label: 'Packing Capacity', value: '100 TPD', sub: '8 automated lines' },
  { label: 'Oil Storage', value: '500 MT', sub: 'On-plant facility' },
  { label: 'Cold Press Kohuls', value: '166', sub: 'Traditional extraction' },
  { label: 'Power Backup', value: '885 KVA', sub: '125% of requirement' },
];

const packingLines = [
  { line: 'Line 1', desc: 'PLC Flow Meter 6-head machine — 2L to 15L formats' },
  { line: 'Line 2', desc: '6-head filling, capping & labelling — 200ml to 1L bottles' },
  { line: 'Line 3', desc: '6-head filling, capping & labelling — 200ml to 1L bottles' },
  { line: 'Line 4', desc: '6-head filling, capping & labelling — 200ml to 500ml' },
  { line: 'Line 5', desc: '4-head induction sealing — 2L to 5L single stroke' },
  { line: 'Line 6', desc: 'PLC 6-head line — 15kg/L bulk filling' },
  { line: 'Line 7', desc: 'Side-seal pouch packing with carton taping' },
  { line: 'Line 8', desc: 'Centre-seal pouch packing with carton taping' },
];

export default function Manufacturing() {
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
    <section id="manufacturing" ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-label reveal mb-3">The Facility</span>
          <div className="red-divider mx-auto mb-5 reveal reveal-delay-1" />
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal reveal reveal-delay-1">
            Industrial Scale. <span className="text-[#C41E1E]">Artisan Precision.</span>
          </h2>
          <p className="text-charcoal/60 font-inter mt-4 leading-relaxed reveal reveal-delay-2">
            RIICO Industrial Area, Khairthal — in India's highest mustard-seed producing district.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-14">
          {facilities.map((f, i) => (
            <div key={f.label} className={`reveal reveal-delay-${Math.min(i+1,5)} card-white p-6 text-center group`}>
              <div className="font-playfair text-3xl md:text-4xl font-bold text-[#C41E1E] mb-1">{f.value}</div>
              <div className="text-charcoal font-inter font-semibold text-sm mb-1">{f.label}</div>
              <div className="text-charcoal/40 font-inter text-xs">{f.sub}</div>
            </div>
          ))}
        </div>

        {/* Packing lines */}
        <div className="reveal mb-14">
          <h3 className="font-playfair text-2xl text-charcoal font-bold mb-6">8 Dedicated Packing Lines</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {packingLines.map((line) => (
              <div key={line.line} className="flex items-start gap-4 p-4 rounded-xl border border-[#f0e8e8] hover:border-[#C41E1E]/30 hover:bg-[#FFF5F5] transition-all duration-300 group">
                <span className="flex-shrink-0 px-3 py-1 bg-[#C41E1E] rounded text-white text-xs font-inter font-bold">{line.line}</span>
                <p className="text-charcoal/60 font-inter text-sm leading-relaxed">{line.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Location advantage */}
        <div className="reveal bg-[#C41E1E] rounded-2xl p-8 md:p-10 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-[#F5C518] text-xs font-inter tracking-[0.3em] uppercase font-semibold">Locational Advantage</span>
              <h3 className="font-playfair text-2xl md:text-3xl font-bold mt-2 mb-4">India's Mustard Heartland</h3>
              <p className="text-white/75 font-inter text-sm leading-relaxed">
                RIICO Industrial Area, Khairthal — 80km from Gurgaon NCR. Alwar district is India's highest mustard seed producing region. Direct rail to North Eastern states saves ₹25,000+ per wagon over Jaipur-based plants.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { v: '80 km', l: 'From Gurgaon NCR' },
                { v: '₹500/MT', l: 'Freight saving vs Jaipur' },
                { v: 'Direct Rail', l: 'North Eastern states' },
                { v: '₹25,000+', l: 'Savings per wagon' },
              ].map((item) => (
                <div key={item.l} className="bg-white/10 border border-[#F5C518]/20 rounded-xl p-4 text-center">
                  <div className="font-playfair text-lg text-[#F5C518] font-bold">{item.v}</div>
                  <div className="text-white/50 text-xs font-inter mt-1">{item.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
