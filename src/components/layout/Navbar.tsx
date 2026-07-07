'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#about', label: 'About Us' },
  { href: '#products', label: 'Products' },
  { href: '#manufacturing', label: 'Manufacturing' },
  { href: '#private-label', label: 'Private Label' },
  { href: '#clients', label: 'Our Clients' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 backdrop-blur-sm py-3'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-[#C41E1E] flex-shrink-0">
              <Image src="/images/logo-leaf.jpg" alt="Golden Chinar Logo" width={44} height={44} className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-playfair text-lg font-bold text-[#C41E1E] tracking-wide leading-none">Golden Chinar</span>
              <span className="text-[#9B1515] text-[10px] tracking-[0.2em] uppercase font-inter font-medium">Since 1992</span>
            </div>
          </button>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <button key={link.href} onClick={() => scrollTo(link.href)}
                className="text-charcoal/70 hover:text-[#C41E1E] text-sm font-inter font-medium tracking-wide transition-colors duration-200 relative group">
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[#C41E1E] transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <button onClick={() => scrollTo('#contact')} className="btn-red text-sm">
              Partner With Us
            </button>
          </div>

          {/* Mobile toggle */}
          <button className="lg:hidden text-[#C41E1E] p-2" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`fixed inset-0 z-40 bg-white flex flex-col justify-center items-center gap-8 transition-all duration-400 ${
        menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        {navLinks.map((link) => (
          <button key={link.href} onClick={() => scrollTo(link.href)}
            className="font-playfair text-3xl text-charcoal hover:text-[#C41E1E] transition-colors duration-200">
            {link.label}
          </button>
        ))}
        <button onClick={() => scrollTo('#contact')} className="btn-red mt-4">Partner With Us</button>
      </div>
    </>
  );
}
