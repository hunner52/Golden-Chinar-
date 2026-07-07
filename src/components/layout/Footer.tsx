import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#C41E1E] text-white py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full border-2 border-[#F5C518] overflow-hidden">
                <Image src="/images/logo-leaf.jpg" alt="Golden Chinar" width={40} height={40} className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="font-playfair text-base font-bold text-white">Golden Chinar</div>
                <div className="text-[#F5C518] text-[10px] tracking-[0.2em] uppercase font-inter">Since 1992</div>
              </div>
            </div>
            <p className="text-white/55 font-inter text-sm leading-relaxed max-w-xs">
              Kachi Ghani mustard oil manufactured with military-grade discipline. RIICO Industrial Area, Khairthal, Rajasthan.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-[#F5C518] font-inter font-semibold text-xs tracking-widest uppercase mb-5">Navigate</h4>
            <div className="space-y-3">
              {[['#about','About Us'],['#products','Products'],['#manufacturing','Manufacturing'],['#private-label','Private Label'],['#clients','Our Clients'],['#contact','Contact']].map(([href,label]) => (
                <a key={href} href={href} className="block text-white/55 font-inter text-sm hover:text-[#F5C518] transition-colors duration-200">{label}</a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#F5C518] font-inter font-semibold text-xs tracking-widest uppercase mb-5">Contact</h4>
            <div className="space-y-3">
              <p className="text-white/80 font-inter text-sm font-semibold">Vikram Singh</p>
              <a href="tel:+919783820000" className="block text-white/55 font-inter text-sm hover:text-[#F5C518] transition-colors">+91 97838 20000</a>
              <a href="mailto:jvomsales@gmail.com" className="block text-white/55 font-inter text-sm hover:text-[#F5C518] transition-colors">jvomsales@gmail.com</a>
              <p className="text-white/55 font-inter text-sm leading-relaxed">G-46, RIICO Industrial Area<br />Khairthal, Alwar, Rajasthan — 301404</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/15 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/35 font-inter text-xs">© {new Date().getFullYear()} Jai Vaishno Oil Mills. Golden Chinar is a registered brand.</p>
          <div className="flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-[#F5C518]/50" />
            <span className="text-white/35 font-inter text-xs tracking-widest uppercase">Heritage · Purity · Excellence</span>
            <span className="w-1 h-1 rounded-full bg-[#F5C518]/50" />
          </div>
        </div>
      </div>
    </footer>
  );
}
