'use client';
import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 30, suffix: '+', label: 'Years of Manufacturing', sub: 'Est. 1992' },
  { value: 100, suffix: ' TPD', label: 'Crushing Capacity', sub: 'Mustard seed daily' },
  { value: 166, suffix: '', label: 'Cold Press Kohuls', sub: 'Kachi Ghani extraction' },
  { value: 500, suffix: ' MT', label: 'Oil Storage', sub: 'On-plant capacity' },
  { value: 8, suffix: '', label: 'Packing Lines', sub: '200ml to 15L' },
  { value: 6, suffix: '+', label: 'Brand Clients', sub: 'Patanjali to Louis Dreyfus' },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const duration = 2000;
        const start = performance.now();
        const animate = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.floor(eased * value));
          if (progress < 1) requestAnimationFrame(animate);
          else setCount(value);
        };
        requestAnimationFrame(animate);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);
  return <span ref={ref} className="font-playfair text-4xl md:text-5xl font-bold text-[#C41E1E]">{count}{suffix}</span>;
}

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.reveal').forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 80);
          });
        }
      });
    }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-[#FFF5F5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="section-label reveal mb-3">Impact By Numbers</span>
          <div className="red-divider mx-auto mb-5 reveal reveal-delay-1" />
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal reveal reveal-delay-1">
            The Scale of <span className="text-[#C41E1E]">Our Craft.</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {stats.map((stat, i) => (
            <div key={stat.label} className={`reveal reveal-delay-${Math.min(i+1,5)} card-white p-8 text-center`}>
              <Counter value={stat.value} suffix={stat.suffix} />
              <div className="text-charcoal font-inter font-semibold text-sm mt-2 mb-1">{stat.label}</div>
              <div className="text-charcoal/40 font-inter text-xs">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
