'use client';
import { useEffect, useRef, useState } from 'react';

const stats = [
  { v: 30, s: '+', l: 'Years of Manufacturing', sub: 'Est. 1992, Khairthal' },
  { v: 100, s: ' TPD', l: 'Crushing Capacity', sub: 'Mustard seed daily' },
  { v: 166, s: '', l: 'Cold Press Kohuls', sub: 'Traditional extraction' },
  { v: 500, s: ' MT', l: 'Oil Storage', sub: 'On-plant capacity' },
  { v: 8, s: '', l: 'Packing Lines', sub: '200ml to 15L' },
  { v: 6, s: '+', l: 'Major Brand Clients', sub: 'Patanjali to Louis Dreyfus' },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const dur = 2200; const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setCount(Math.floor(eased * value));
          if (p < 1) requestAnimationFrame(tick); else setCount(value);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [value]);
  return (
    <div ref={ref} className="flex items-baseline gap-1">
      <span style={{ fontFamily: 'Playfair Display, serif' }} className="text-5xl md:text-6xl font-black text-white leading-none">{count}</span>
      <span className="text-amber-400 text-xl font-bold">{suffix}</span>
    </div>
  );
}

export default function Stats() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.querySelectorAll('.reveal').forEach((el, i) => setTimeout(() => el.classList.add('visible'), i * 80)); });
    }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="section-pad bg-red-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(ellipse at 50% 50%, #FCD34D 0%, transparent 70%)' }} />
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <div className="eyebrow-light reveal justify-center mb-5">Impact By Numbers</div>
          <h2 className="heading-xl text-white reveal reveal-delay-1">
            The Scale of <span className="text-yellow-shine">Our Craft.</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {stats.map((s, i) => (
            <div key={s.l} className={`reveal reveal-delay-${Math.min((i % 3) + 1, 5)} card-dark p-8 group hover:border-amber-400/25`}>
              <Counter value={s.v} suffix={s.s} />
              <div className="text-white font-semibold text-sm mt-3 mb-1">{s.l}</div>
              <div className="text-white/35 text-xs">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
