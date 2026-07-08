'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const words = ref.current?.querySelectorAll('.word');
    words?.forEach((w, i) => {
      setTimeout(() => {
        (w as HTMLElement).style.opacity = '1';
        (w as HTMLElement).style.transform = 'translateY(0)';
      }, 900 + i * 80);
    });
  }, []);

  const go = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="relative min-h-screen flex items-end overflow-hidden pt-20">
      {/* BG */}
      <div className="absolute inset-0">
        <Image src="/images/mustard-field.jpg" alt="Mustard fields" fill priority className="object-cover object-center scale-105" sizes="100vw" />
        {/* Layered overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-red-950/95 via-red-900/70 to-red-800/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
      </div>

      {/* Floating badges */}
      <div className="absolute top-1/4 right-8 md:right-16 hidden md:flex flex-col gap-3" style={{ animation: 'fadeIn 1s ease 2s both' }}>
        {[
          { label: 'AGMARK', sub: 'Grade 1' },
          { label: 'FSSAI', sub: 'Certified' },
          { label: '30+', sub: 'Years' },
        ].map((b) => (
          <div key={b.label} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-3 text-center">
            <div style={{ fontFamily: 'Playfair Display, serif' }} className="text-amber-400 font-bold text-lg leading-none">{b.label}</div>
            <div className="text-white/60 text-xs mt-1 tracking-wide uppercase">{b.sub}</div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container pb-20 md:pb-28">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-6" style={{ animation: 'fadeIn 1s ease 0.5s both' }}>
          <div className="w-8 h-8 rounded-full overflow-hidden border border-amber-400/50">
            <Image src="/images/logo-leaf.jpg" alt="" width={32} height={32} className="w-full h-full object-cover" />
          </div>
          <span className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase">Jai Vaishno Oil Mills · Est. 1992</span>
        </div>

        {/* Headline */}
        <div ref={ref} className="mb-8">
          <h1 style={{ fontFamily: 'Playfair Display, serif' }} className="text-white font-black leading-[1.02]" style={{ fontSize: 'clamp(3rem, 8vw, 6.5rem)', letterSpacing: '-0.02em' }}>
            {['Crafted', 'by'].map((w, i) => (
              <span key={i} className="word inline-block mr-4 transition-all duration-700"
                style={{ opacity: 0, transform: 'translateY(40px)', fontFamily: 'Playfair Display, serif' }}>{w}</span>
            ))}
            <span className="word inline-block transition-all duration-700"
              style={{ opacity: 0, transform: 'translateY(40px)', fontFamily: 'Playfair Display, serif', color: '#FCD34D' }}>
              Tradition.
            </span>
            <br />
            {['Trusted', 'for'].map((w, i) => (
              <span key={i} className="word inline-block mr-4 transition-all duration-700"
                style={{ opacity: 0, transform: 'translateY(40px)', fontFamily: 'Playfair Display, serif' }}>{w}</span>
            ))}
            <span className="word inline-block transition-all duration-700"
              style={{ opacity: 0, transform: 'translateY(40px)', fontFamily: 'Playfair Display, serif' }}>
              <span className="text-yellow-shine">Generations.</span>
            </span>
          </h1>
        </div>

        <p className="text-white/65 text-lg md:text-xl font-light max-w-2xl leading-relaxed mb-10"
          style={{ animation: 'fadeUp 1s ease 1.8s both' }}>
          Premium Kachi Ghani mustard oil from the heart of Rajasthan. AGMARK Grade 1 certified, trusted by Patanjali, Modicare, Louis Dreyfus and more.
        </p>

        <div className="flex flex-wrap gap-4 items-center" style={{ animation: 'fadeUp 1s ease 2.1s both' }}>
          <button onClick={() => go('#products')} className="btn-primary">Explore Products →</button>
          <button onClick={() => go('#contact')} className="btn-ghost">Partner With Us</button>
        </div>

        {/* Bottom stats bar */}
        <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-3 md:grid-cols-5 gap-6"
          style={{ animation: 'fadeIn 1s ease 2.5s both' }}>
          {[
            { n: '100', u: 'MT/Day', l: 'Crushing' },
            { n: '35', u: 'TPD', l: 'Kachi Ghani' },
            { n: '166', u: 'Kohuls', l: 'Cold Press' },
            { n: '500', u: 'MT', l: 'Storage' },
            { n: '8', u: 'Lines', l: 'Packing' },
          ].map((s) => (
            <div key={s.l} className="text-center md:text-left">
              <div className="flex items-baseline gap-1 justify-center md:justify-start">
                <span style={{ fontFamily: 'Playfair Display, serif' }} className="text-2xl md:text-3xl font-bold text-white">{s.n}</span>
                <span className="text-amber-400 text-xs font-semibold">{s.u}</span>
              </div>
              <div className="text-white/40 text-xs tracking-widest uppercase mt-0.5">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ animation: 'fadeIn 1s ease 3s both' }}>
        <div className="w-5 h-8 rounded-full border-2 border-white/30 flex items-start justify-center pt-1.5">
          <div className="w-1 h-1.5 rounded-full bg-white/60 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
