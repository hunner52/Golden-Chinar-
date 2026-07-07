'use client';
import { useEffect, useRef } from 'react';

const clients = [
  { name: 'Patanjali Ayurved', detail: 'Exclusive manufacturer for 200ml & 500ml. Not packed at their own plant.', category: 'FMCG Giant', abbr: 'PAT' },
  { name: 'Modicare Ltd.', detail: 'Soul Flavours Kachi Ghani for India\'s largest direct selling company — KK Modi Group.', category: 'Direct Selling', abbr: 'MDC' },
  { name: 'Louis Dreyfus Company', detail: 'Vibhor brand for the Netherlands-HQ global merchant firm. Highest quality standards.', category: 'Global MNC', abbr: 'LDC' },
  { name: 'Dalmia Bharat Sugar', detail: 'Utsav brand Kachi Ghani mustard oil for one of India\'s most respected conglomerates.', category: 'Industrial Group', abbr: 'DB' },
  { name: 'Aastha Channel (PAL)', detail: 'Aastha brand packed exclusively by us. Television-scale distribution demands consistency.', category: 'Media & Retail', abbr: 'AST' },
  { name: 'SPG Consumer Products', detail: 'Swaad brand Kachi Ghani mustard oil — Vocal for Local premium Indian consumer brand.', category: 'Consumer Brand', abbr: 'SPG' },
];

export default function Clients() {
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
    <section id="clients" ref={sectionRef} className="py-24 bg-[#C41E1E]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[#F5C518] text-xs font-inter font-semibold tracking-[0.3em] uppercase reveal mb-3 block">Our Clients</span>
          <div className="yellow-divider mx-auto mb-5 reveal reveal-delay-1" />
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white reveal reveal-delay-1">
            Trusted by India's <span className="text-[#F5C518]">Biggest Names.</span>
          </h2>
          <p className="text-white/65 font-inter mt-4 reveal reveal-delay-2">
            When India's most demanding brands need a mustard oil manufacturer — they come to us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {clients.map((client, i) => (
            <div key={client.name} className={`reveal reveal-delay-${Math.min(i+1,5)} card-red p-8 group`}>
              <div className="w-12 h-12 rounded-xl bg-[#F5C518] flex items-center justify-center mb-5">
                <span className="text-[#C41E1E] font-playfair font-bold text-sm">{client.abbr}</span>
              </div>
              <span className="text-[#F5C518]/60 text-xs font-inter tracking-widest uppercase">{client.category}</span>
              <h3 className="font-playfair text-lg text-white font-semibold mt-1 mb-3">{client.name}</h3>
              <p className="text-white/55 font-inter text-sm leading-relaxed">{client.detail}</p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="reveal text-center">
          <div className="inline-block bg-white/8 border border-white/15 rounded-2xl p-10 max-w-3xl">
            <div className="text-[#F5C518]/40 font-playfair text-6xl leading-none mb-4">"</div>
            <p className="font-playfair text-xl md:text-2xl text-white italic leading-relaxed mb-6">
              We prioritise long-term sustainability over short-term profits. We work transparently and set up customised solutions for our partners.
            </p>
            <div className="yellow-divider mx-auto mb-4" />
            <p className="text-[#F5C518] text-sm font-inter tracking-widest uppercase">Vikram Singh — Jai Vaishno Oil Mills</p>
          </div>
        </div>
      </div>
    </section>
  );
}
