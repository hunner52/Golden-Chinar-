'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const words = headlineRef.current?.querySelectorAll('.word');
    words?.forEach((word, i) => {
      setTimeout(() => {
        (word as HTMLElement).style.opacity = '1';
        (word as HTMLElement).style.transform = 'translateY(0)';
      }, 1000 + i * 100);
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Mustard field background */}
      <div className="absolute inset-0">
        <Image src="/images/mustard-field.jpg" alt="Golden mustard fields" fill priority className="object-cover object-center" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#C41E1E]/85 via-[#9B1515]/70 to-[#C41E1E]/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Logo mark */}
        <div className="flex justify-center mb-8" style={{ animation: 'fadeIn 1s ease 0.5s both' }}>
          <div className="w-20 h-20 rounded-full border-4 border-[#F5C518] overflow-hidden shadow-2xl">
            <Image src="/images/logo-leaf.jpg" alt="Golden Chinar" width={80} height={80} className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Eyebrow */}
        <div className="inline-flex items-center gap-3 mb-6" style={{ animation: 'fadeIn 1s ease 0.8s both' }}>
          <span className="h-px w-8 bg-[#F5C518]/70" />
          <span className="text-[#F5C518] text-xs font-inter font-semibold tracking-[0.3em] uppercase">Est. 1992 · Khairthal, Rajasthan</span>
          <span className="h-px w-8 bg-[#F5C518]/70" />
        </div>

        {/* Headline */}
        <h1 ref={headlineRef} className="font-playfair text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-6 text-white">
          {['Crafted', 'By', 'Tradition.'].map((word, i) => (
            <span key={i} className="word inline-block mr-[0.22em] transition-all duration-600"
              style={{ opacity: 0, transform: 'translateY(30px)' }}>
              {word}
            </span>
          ))}
          <br />
          <span className="word inline-block mr-[0.22em] transition-all duration-600"
            style={{ opacity: 0, transform: 'translateY(30px)' }}>Trusted</span>
          <span className="word inline-block mr-[0.22em] text-yellow-shimmer transition-all duration-600"
            style={{ opacity: 0, transform: 'translateY(30px)' }}>For</span>
          <span className="word inline-block text-[#F5C518] transition-all duration-600"
            style={{ opacity: 0, transform: 'translateY(30px)' }}>Generations.</span>
        </h1>

        <p className="text-white/80 text-lg md:text-xl font-inter font-light max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ animation: 'fadeUp 1s ease 1.8s both' }}>
          Premium Kachi Ghani mustard oil — AGMARK Grade 1 certified, trusted by Patanjali, Modicare, Louis Dreyfus and more.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" style={{ animation: 'fadeUp 1s ease 2.1s both' }}>
          <button onClick={() => scrollTo('#products')} className="btn-yellow">Explore Products</button>
          <button onClick={() => scrollTo('#contact')} className="btn-outline-white">Partner With Us</button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto" style={{ animation: 'fadeIn 1s ease 2.5s both' }}>
          {[
            { num: '30+', label: 'Years of Trust' },
            { num: '100', label: 'MT/Day Capacity' },
            { num: '6+', label: 'Brand Clients' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-playfair text-2xl md:text-3xl font-bold text-[#F5C518]">{stat.num}</div>
              <div className="text-white/50 text-xs tracking-widest uppercase font-inter mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ animation: 'fadeIn 1s ease 3s both' }}>
        <span className="text-white/40 text-xs tracking-[0.3em] uppercase font-inter">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-[#F5C518]/60 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
