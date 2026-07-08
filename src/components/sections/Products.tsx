'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const products = [
  { name: '200ml Bottle', sub: 'Kachi Ghani Mustard Oil', desc: 'The everyday essential. Pure cold-pressed purity in the most convenient size for households.', img: '/images/product-200ml.jpg', tag: 'Retail', color: 'from-red-50' },
  { name: '500ml Bottle', sub: 'Kachi Ghani Mustard Oil', desc: 'Our bestseller. Strong natural aroma, AGMARK Grade 1 — for kitchens that never compromise.', img: '/images/product-500ml.jpg', tag: 'Bestseller', color: 'from-amber-50' },
  { name: '1 Litre Bottle', sub: 'Kachi Ghani Mustard Oil', desc: 'The family staple. Full-flavoured cold-pressed oil built for daily Indian cooking.', img: '/images/product-1l.jpg', tag: 'Retail', color: 'from-red-50' },
  { name: '1 Litre Pouch', sub: 'Cold Pressed Kachi Ghani', desc: 'Modern convenience, traditional purity. Centre and side-seal options. AGMARK certified.', img: '/images/product-1l-pouch.jpg', tag: 'Economy', color: 'from-amber-50' },
  { name: '5 Litre Jerry Can', sub: 'Kachi Ghani Mustard Oil', desc: 'Built for large families, HoReCa buyers and foodservice. Induction-sealed freshness.', img: '/images/product-5l.jpg', tag: 'HoReCa', color: 'from-red-50' },
  { name: 'Bulk & Private Label', sub: 'Custom Manufacturing', desc: 'Your brand, our expertise. AGMARK-certified oil, custom packaging, all SKU formats.', img: '/images/products-range.jpg', tag: 'B2B', color: 'from-amber-50' },
];

export default function Products() {
  const ref = useRef<HTMLElement>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach((el, i) => setTimeout(() => el.classList.add('visible'), i * 80)); });
    }, { threshold: 0.05 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const tilt = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientY - r.top) / r.height - 0.5) * -10;
    const y = ((e.clientX - r.left) / r.width - 0.5) * 10;
    e.currentTarget.style.transform = `perspective(1000px) rotateX(${x}deg) rotateY(${y}deg) translateY(-6px)`;
  };
  const reset = (e: React.MouseEvent<HTMLDivElement>) => { e.currentTarget.style.transform = ''; };

  return (
    <section id="products" ref={ref} className="section-pad" style={{ background: '#FAFAFA' }}>
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="eyebrow reveal justify-center mb-5">Our Products</div>
          <h2 className="heading-xl text-gray-900 reveal reveal-delay-1">
            Purity in<br /><span className="text-red-shine">Every Format.</span>
          </h2>
          <p className="text-gray-500 text-lg mt-5 leading-relaxed reveal reveal-delay-2">
            From 200ml bottles to 15L bulk — every SKU carries the same AGMARK Grade 1 standard.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <div key={p.name}
              className={`reveal reveal-delay-${Math.min((i % 3) + 1, 5)} card-white group cursor-pointer`}
              style={{ transformStyle: 'preserve-3d', transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s ease, border-color 0.3s ease' }}
              onMouseMove={tilt} onMouseLeave={reset}
              onMouseEnter={() => setHovered(i)}>
              {/* Image */}
              <div className={`relative h-60 bg-gradient-to-b ${p.color} to-white overflow-hidden flex items-center justify-center`}>
                <Image src={p.img} alt={p.name} fill className="object-contain p-8 transition-transform duration-700 group-hover:scale-115" sizes="400px" />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold tracking-wide ${
                    p.tag === 'Bestseller' ? 'bg-red-700 text-white' :
                    p.tag === 'B2B' ? 'bg-amber-500 text-white' :
                    'bg-gray-100 text-gray-600'
                  }`}>{p.tag}</span>
                </div>
              </div>
              {/* Content */}
              <div className="p-7">
                <p className="text-red-700 text-xs font-semibold tracking-widest uppercase mb-1">{p.sub}</p>
                <h3 style={{ fontFamily: 'Playfair Display, serif' }} className="text-gray-900 text-xl font-bold mb-3">{p.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                <div className="mt-5 flex items-center gap-1.5 text-red-700 text-sm font-semibold opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 transition-all duration-300">
                  Enquire about this SKU <span>→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Full range strip */}
        <div className="mt-10 reveal rounded-3xl overflow-hidden relative h-64 md:h-80">
          <Image src="/images/products-range.jpg" alt="Full product range" fill className="object-cover" sizes="1200px" />
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/92 via-red-800/75 to-transparent" />
          <div className="absolute inset-0 flex items-center px-10 md:px-16">
            <div>
              <div className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase mb-2">Complete Range</div>
              <h3 style={{ fontFamily: 'Playfair Display, serif' }} className="text-white text-2xl md:text-4xl font-bold mb-4">
                Every Format.<br />One Standard.
              </h3>
              <p className="text-white/60 text-sm">200ml · 500ml · 1L · 2L · 5L · 15L · Bulk Tin · Pouches</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
