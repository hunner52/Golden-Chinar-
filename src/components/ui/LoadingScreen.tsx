'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(timer);
          setTimeout(() => setDone(true), 200);
          setTimeout(() => setHidden(true), 900);
          return 100;
        }
        return p + Math.random() * 15 + 3;
      });
    }, 80);
    return () => clearInterval(timer);
  }, []);

  if (hidden) return null;

  return (
    <div className={`fixed inset-0 z-[9999] bg-[#C41E1E] flex flex-col items-center justify-center transition-all duration-700 ${done ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div className={`mb-8 transition-all duration-500 ${done ? 'scale-110 opacity-0' : 'scale-100 opacity-100'}`}>
        <div className="w-24 h-24 rounded-full bg-white/15 border-2 border-white/40 flex items-center justify-center overflow-hidden">
          <Image src="/images/logo-leaf.jpg" alt="Golden Chinar" width={96} height={96} className="w-full h-full object-cover" />
        </div>
      </div>
      <h1 className="font-playfair text-3xl text-white mb-1 tracking-wide">Golden Chinar</h1>
      <p className="text-[#F5C518] text-xs tracking-[0.35em] uppercase font-inter mb-10">Heritage · Purity · Excellence</p>
      <div className="w-48 h-1 bg-white/20 rounded-full overflow-hidden">
        <div className="h-full bg-[#F5C518] rounded-full transition-all duration-200" style={{ width: `${Math.min(progress, 100)}%` }} />
      </div>
    </div>
  );
}
