'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '#about', label: 'Our Story' },
  { href: '#products', label: 'Products' },
  { href: '#manufacturing', label: 'Manufacturing' },
  { href: '#private-label', label: 'Private Label' },
  { href: '#quality', label: 'Quality' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id: string) => { setOpen(false); document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' }); };

  return (
    <>
      <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/98 backdrop-blur-md shadow-sm shadow-red-900/5 py-2' : 'bg-white py-4'}`}>
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-red-700 shadow-md group-hover:shadow-red-700/30 transition-shadow duration-300">
              <Image src="/images/logo-leaf.jpg" alt="Golden Chinar" fill className="object-cover" />
            </div>
            <div>
              <div style={{ fontFamily: 'Playfair Display, serif' }} className="text-[1.05rem] font-bold text-red-800 leading-none tracking-wide">Golden Chinar</div>
              <div className="text-[0.6rem] tracking-[0.25em] uppercase text-amber-600 font-semibold mt-0.5">Since 1992</div>
            </div>
          </button>

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map(l => (
              <button key={l.href} onClick={() => go(l.href)}
                className="text-[0.82rem] font-medium text-gray-600 hover:text-red-700 transition-colors duration-200 relative group tracking-wide">
                {l.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-red-700 rounded-full transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <button onClick={() => go('#contact')} className="btn-primary text-xs">Partner With Us →</button>
          </div>

          <button className="lg:hidden p-2 text-red-800" onClick={() => setOpen(!open)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile */}
      <div className={`fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-10 transition-all duration-500 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-red-700 mb-2">
          <Image src="/images/logo-leaf.jpg" alt="Golden Chinar" width={64} height={64} className="w-full h-full object-cover" />
        </div>
        {links.map((l, i) => (
          <button key={l.href} onClick={() => go(l.href)}
            style={{ fontFamily: 'Playfair Display, serif', transitionDelay: `${i * 40}ms` }}
            className="text-3xl font-bold text-gray-800 hover:text-red-700 transition-colors duration-200">
            {l.label}
          </button>
        ))}
        <button onClick={() => go('#contact')} className="btn-primary mt-2">Partner With Us →</button>
      </div>
    </>
  );
}
