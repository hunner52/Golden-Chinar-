import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-red-900 text-white pt-16 pb-10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-amber-400/60">
                <Image src="/images/logo-leaf.jpg" alt="Golden Chinar" width={44} height={44} className="w-full h-full object-cover" />
              </div>
              <div>
                <div style={{ fontFamily: 'Playfair Display, serif' }} className="text-lg font-bold text-white">Golden Chinar</div>
                <div className="text-amber-400 text-[10px] tracking-[0.25em] uppercase font-semibold">Since 1992</div>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-6">
              Kachi Ghani mustard oil manufactured with military-grade discipline. RIICO Industrial Area, Khairthal, Alwar, Rajasthan — 301404.
            </p>
            <div className="flex gap-3">
              {['AGMARK', 'FSSAI', 'Make in India'].map(c => (
                <span key={c} className="px-3 py-1 border border-amber-400/25 rounded-full text-amber-400 text-[10px] font-semibold tracking-widest uppercase">{c}</span>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-amber-400 text-xs font-semibold tracking-widest uppercase mb-5">Navigate</h4>
            <div className="space-y-3">
              {[['#about','Our Story'],['#products','Products'],['#manufacturing','Manufacturing'],['#private-label','Private Label'],['#quality','Quality'],['#contact','Contact']].map(([h,l]) => (
                <a key={h} href={h} className="block text-white/50 text-sm hover:text-amber-400 transition-colors duration-200">{l}</a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-amber-400 text-xs font-semibold tracking-widest uppercase mb-5">Contact</h4>
            <div className="space-y-3">
              <p style={{ fontFamily: 'Playfair Display, serif' }} className="text-white font-semibold">Vikram Singh</p>
              <a href="tel:+919783820000" className="block text-white/50 text-sm hover:text-amber-400 transition-colors">+91 97838 20000</a>
              <a href="mailto:jvomsales@gmail.com" className="block text-white/50 text-sm hover:text-amber-400 transition-colors">jvomsales@gmail.com</a>
              <p className="text-white/50 text-sm leading-relaxed">G-46, RIICO Industrial Area<br />Khairthal, Alwar, Rajasthan<br />301404</p>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">© {new Date().getFullYear()} Jai Vaishno Oil Mills. Golden Chinar is a registered brand.</p>
          <p className="text-white/25 text-xs tracking-widest uppercase">Heritage · Purity · Excellence</p>
        </div>
      </div>
    </footer>
  );
}
