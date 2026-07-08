'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function LoadingScreen() {
  const [p, setP] = useState(0);
  const [done, setDone] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const t = setInterval(() => {
      setP(prev => {
        if (prev >= 100) { clearInterval(t); setTimeout(() => setDone(true), 200); setTimeout(() => setHidden(true), 900); return 100; }
        return prev + Math.random() * 15 + 3;
      });
    }, 80);
    return () => clearInterval(t);
  }, []);

  if (hidden) return null;

  return (
    <div className={`fixed inset-0 z-[9999] bg-red-800 flex flex-col items-center justify-center transition-all duration-700 ${done ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100 scale-100'}`}>
      <div className={`mb-8 transition-all duration-500 ${done ? 'scale-110 opacity-0' : 'scale-100 opacity-100'}`}>
        <div className="w-24 h-24 rounded-full border-4 border-amber-400/60 overflow-hidden shadow-2xl shadow-black/30">
          <Image src="/images/logo-leaf.jpg" alt="Golden Chinar" width={96} height={96} className="w-full h-full object-cover" />
        </div>
      </div>
      <div style={{ fontFamily: 'Playfair Display, serif' }} className="text-3xl text-white font-bold mb-1">Golden Chinar</div>
      <div className="text-amber-400 text-xs tracking-[0.35em] uppercase font-semibold mb-12">Heritage · Purity · Excellence</div>
      <div className="w-48 h-0.5 bg-white/15 rounded-full overflow-hidden">
        <div className="h-full bg-amber-400 rounded-full transition-all duration-150" style={{ width: `${Math.min(p, 100)}%` }} />
      </div>
    </div>
  );
}
