'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

const products = [
  { name: '200ml Bottle', subtitle: 'Kachi Ghani Mustard Oil', desc: 'Compact everyday essential. Pure cold-pressed oil for households.', img: '/images/product-200ml.jpg', tag: 'Retail' },
  { name: '500ml Bottle', subtitle: 'Kachi Ghani Mustard Oil', desc: 'Most popular format. Strong natural aroma, AGMARK Grade 1 certified.', img: '/images/product-500ml.jpg', tag: 'Bestseller' },
  { name: '1 Litre Bottle', subtitle: 'Kachi Ghani Mustard Oil', desc: 'The family size. Full-flavoured for daily Indian cooking.', img: '/images/product-1l.jpg', tag: 'Retail' },
  { name: '1 Litre Pouch', subtitle: 'Kachi Ghani Cold Pressed', desc: 'Modern convenience meets traditional purity. Centre & side-seal options.', img: '/images/product-1l-pouch.jpg', tag: 'Economy' },
  { name: '5 Litre Jerry Can', subtitle: 'Kachi Ghani Mustard Oil', desc: 'For large families, restaurants and HoReCa buyers.', img: '/images/product-5l.jpg', tag: 'HoReCa' },
  { name: 'Bulk & Private Label', subtitle: 'Custom Manufacturing', desc: 'Your brand, our expertise. Full AGMARK-certified private label manufacturing.', img: '/images/products-range.jpg', tag: 'B2B' },
];

export default function Products() {
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
    }, { threshold: 0.05 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="products" ref={sectionRef} className="py-24 bg-[#FFF5F5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-label reveal mb-3">Our Products</span>
          <div className="red-divider mx-auto mb-5 reveal reveal-delay-1" />
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal reveal reveal-delay-1">
            Purity in <span className="text-[#C41E1E]">Every Format.</span>
          </h2>
          <p className="text-charcoal/60 font-inter mt-4 leading-relaxed reveal reveal-delay-2">
            From 200ml bottles to bulk tins — every SKU carries the same AGMARK Grade 1 standard.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <div key={product.name} className={`reveal reveal-delay-${Math.min(i+1,5)} card-white group cursor-pointer`}>
              {/* Image */}
              <div className="relative h-56 overflow-hidden rounded-t-2xl bg-white flex items-center justify-center">
                <Image src={product.img} alt={product.name} fill className="object-contain p-6 transition-transform duration-500 group-hover:scale-110" sizes="(max-width:768px) 100vw, 33vw" />
                <div className="absolute top-3 right-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-inter font-semibold tracking-wide ${
                    product.tag === 'Bestseller' ? 'bg-[#C41E1E] text-white' : 
                    product.tag === 'B2B' ? 'bg-[#F5C518] text-charcoal' : 
                    'bg-charcoal/10 text-charcoal'
                  }`}>{product.tag}</span>
                </div>
              </div>
              {/* Info */}
              <div className="p-6">
                <p className="text-[#C41E1E] text-xs font-inter tracking-widest uppercase font-semibold mb-1">{product.subtitle}</p>
                <h3 className="font-playfair text-xl text-charcoal font-bold mb-2">{product.name}</h3>
                <p className="text-charcoal/55 font-inter text-sm leading-relaxed">{product.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-[#C41E1E] text-sm font-inter font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Enquire Now</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Full range banner */}
        <div className="mt-10 rounded-2xl overflow-hidden relative reveal">
          <Image src="/images/products-range.jpg" alt="Complete Golden Chinar product range" width={1400} height={400} className="w-full object-cover h-48 md:h-64" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#C41E1E]/90 via-[#C41E1E]/60 to-transparent flex items-center px-10">
            <div>
              <h3 className="font-playfair text-2xl md:text-3xl text-white font-bold mb-1">Complete Range</h3>
              <p className="text-[#F5C518] text-sm font-inter tracking-wide">200ml · 500ml · 1L · 2L · 5L · 15L · Bulk Tin · Pouches</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
