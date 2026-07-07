'use client';
import { useEffect, useRef, useState } from 'react';

const inquiryTypes = ['Distributor Inquiry', 'Private Label Manufacturing', 'Bulk Purchase', 'Export Partnership', 'HoReCa Supply', 'General Inquiry'];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedType, setSelectedType] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', company: '', phone: '', email: '', message: '' });

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.reveal').forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 90);
          });
        }
      });
    }, { threshold: 0.05 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = () => {
    if (!form.name || !form.phone) return;
    const subject = `[Golden Chinar] ${selectedType || 'New Inquiry'} from ${form.company || form.name}`;
    const body = `Name: ${form.name}\nCompany: ${form.company}\nPhone: ${form.phone}\nEmail: ${form.email}\nInquiry Type: ${selectedType}\n\nMessage:\n${form.message}`;
    window.location.href = `mailto:jvomsales@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-[#FFF5F5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-label reveal mb-3">Get In Touch</span>
          <div className="red-divider mx-auto mb-5 reveal reveal-delay-1" />
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal reveal reveal-delay-1">
            Let's Build <span className="text-[#C41E1E]">Together.</span>
          </h2>
          <p className="text-charcoal/60 font-inter mt-4 reveal reveal-delay-2">Distributor, bulk buyer, or private label partner — we're ready to talk.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact info */}
          <div className="reveal space-y-5">
            {[
              { label: 'Phone', value: '+91 97838 20000', href: 'tel:+919783820000', icon: '📞' },
              { label: 'Email', value: 'jvomsales@gmail.com', href: 'mailto:jvomsales@gmail.com', icon: '✉️' },
            ].map((item) => (
              <div key={item.label} className="card-white p-6 flex items-center gap-5">
                <div className="w-12 h-12 rounded-full bg-[#C41E1E] flex items-center justify-center text-lg flex-shrink-0">{item.icon}</div>
                <div>
                  <p className="text-[#C41E1E] text-xs font-inter tracking-widest uppercase font-semibold mb-1">{item.label}</p>
                  <a href={item.href} className="text-charcoal font-inter font-semibold hover:text-[#C41E1E] transition-colors">{item.value}</a>
                </div>
              </div>
            ))}
            <div className="card-white p-6 flex items-start gap-5">
              <div className="w-12 h-12 rounded-full bg-[#C41E1E] flex items-center justify-center text-lg flex-shrink-0">📍</div>
              <div>
                <p className="text-[#C41E1E] text-xs font-inter tracking-widest uppercase font-semibold mb-1">Address</p>
                <p className="text-charcoal font-inter font-semibold">G-46, RIICO Industrial Area</p>
                <p className="text-charcoal/60 font-inter text-sm">Khairthal, District Alwar, Rajasthan — 301404</p>
              </div>
            </div>
            <div className="card-white p-6">
              <p className="text-[#C41E1E] text-xs font-inter tracking-widest uppercase font-semibold mb-2">Contact Person</p>
              <p className="font-playfair text-xl text-charcoal font-bold">Vikram Singh</p>
              <p className="text-charcoal/50 font-inter text-sm">Jai Vaishno Oil Mills</p>
            </div>
          </div>

          {/* Form */}
          <div className="reveal reveal-delay-2 card-white p-8">
            <h3 className="font-playfair text-xl text-charcoal font-bold mb-6">Send an Inquiry</h3>
            <div className="flex flex-wrap gap-2 mb-5">
              {inquiryTypes.map((type) => (
                <button key={type} onClick={() => setSelectedType(type)}
                  className={`px-3 py-1.5 rounded-full text-xs font-inter font-semibold transition-all duration-200 border ${
                    selectedType === type ? 'bg-[#C41E1E] text-white border-[#C41E1E]' : 'border-charcoal/15 text-charcoal/60 hover:border-[#C41E1E]/40 hover:text-[#C41E1E]'
                  }`}>{type}</button>
              ))}
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="Your Name *" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})}
                  className="border border-charcoal/15 rounded-xl px-4 py-3 text-charcoal text-sm font-inter placeholder-charcoal/35 focus:outline-none focus:border-[#C41E1E]/50 transition-colors" />
                <input type="text" placeholder="Company Name" value={form.company} onChange={(e) => setForm({...form, company: e.target.value})}
                  className="border border-charcoal/15 rounded-xl px-4 py-3 text-charcoal text-sm font-inter placeholder-charcoal/35 focus:outline-none focus:border-[#C41E1E]/50 transition-colors" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input type="tel" placeholder="Phone *" value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value})}
                  className="border border-charcoal/15 rounded-xl px-4 py-3 text-charcoal text-sm font-inter placeholder-charcoal/35 focus:outline-none focus:border-[#C41E1E]/50 transition-colors" />
                <input type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})}
                  className="border border-charcoal/15 rounded-xl px-4 py-3 text-charcoal text-sm font-inter placeholder-charcoal/35 focus:outline-none focus:border-[#C41E1E]/50 transition-colors" />
              </div>
              <textarea placeholder="Tell us your requirements..." rows={4} value={form.message} onChange={(e) => setForm({...form, message: e.target.value})}
                className="w-full border border-charcoal/15 rounded-xl px-4 py-3 text-charcoal text-sm font-inter placeholder-charcoal/35 focus:outline-none focus:border-[#C41E1E]/50 transition-colors resize-none" />
              <button onClick={handleSubmit} disabled={submitted}
                className={`w-full py-4 rounded-full font-inter font-bold text-sm tracking-widest uppercase transition-all duration-300 ${
                  submitted ? 'bg-green-600 text-white' : 'btn-red w-full text-center'
                }`}>
                {submitted ? '✓ Sent — We\'ll be in touch!' : 'Send Inquiry'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
