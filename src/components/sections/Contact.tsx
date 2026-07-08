'use client';
import { useEffect, useRef, useState } from 'react';

const types = ['Distributor Inquiry', 'Private Label', 'Bulk Purchase', 'Export Partnership', 'HoReCa Supply', 'General Inquiry'];

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const [type, setType] = useState('');
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', company: '', phone: '', email: '', message: '' });

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach((el, i) => setTimeout(() => el.classList.add('visible'), i * 80)); });
    }, { threshold: 0.05 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const submit = () => {
    if (!form.name || !form.phone) return;
    const sub = `[Golden Chinar] ${type || 'Inquiry'} from ${form.company || form.name}`;
    const body = `Name: ${form.name}\nCompany: ${form.company}\nPhone: ${form.phone}\nEmail: ${form.email}\nType: ${type}\n\n${form.message}`;
    window.location.href = `mailto:jvomsales@gmail.com?subject=${encodeURIComponent(sub)}&body=${encodeURIComponent(body)}`;
    setSent(true); setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contact" ref={ref} className="section-pad" style={{ background: '#FAFAFA' }}>
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="eyebrow reveal justify-center mb-5">Get In Touch</div>
          <h2 className="heading-xl text-gray-900 reveal reveal-delay-1">
            Let's Build<br /><span className="text-red-shine">Something Together.</span>
          </h2>
          <p className="text-gray-500 text-lg mt-5 leading-relaxed reveal reveal-delay-2">
            Distributor, bulk buyer, or private label partner — we're ready to talk.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Info — 2 cols */}
          <div className="lg:col-span-2 reveal-left space-y-5">
            <div className="card-white p-7 flex gap-5 items-start">
              <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5 text-red-700">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <div>
                <p className="text-red-700 text-xs font-bold tracking-widest uppercase mb-1">Phone</p>
                <a href="tel:+919783820000" className="text-gray-900 font-semibold hover:text-red-700 transition-colors">+91 97838 20000</a>
              </div>
            </div>

            <div className="card-white p-7 flex gap-5 items-start">
              <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5 text-red-700">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <div>
                <p className="text-red-700 text-xs font-bold tracking-widest uppercase mb-1">Email</p>
                <a href="mailto:jvomsales@gmail.com" className="text-gray-900 font-semibold hover:text-red-700 transition-colors">jvomsales@gmail.com</a>
              </div>
            </div>

            <div className="card-white p-7 flex gap-5 items-start">
              <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5 text-red-700">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <div>
                <p className="text-red-700 text-xs font-bold tracking-widest uppercase mb-1">Address</p>
                <p className="text-gray-900 font-semibold text-sm">G-46, RIICO Industrial Area</p>
                <p className="text-gray-500 text-sm">Khairthal, Alwar, Rajasthan — 301404</p>
              </div>
            </div>

            <div className="card-white p-7">
              <p className="text-red-700 text-xs font-bold tracking-widest uppercase mb-2">Contact Person</p>
              <p style={{ fontFamily: 'Playfair Display, serif' }} className="text-gray-900 text-xl font-bold">Vikram Singh</p>
              <p className="text-gray-500 text-sm">Jai Vaishno Oil Mills</p>
            </div>
          </div>

          {/* Form — 3 cols */}
          <div className="lg:col-span-3 reveal-right">
            <div className="card-white p-8 md:p-10">
              <h3 style={{ fontFamily: 'Playfair Display, serif' }} className="text-gray-900 text-xl font-bold mb-6">Send an Inquiry</h3>

              <div className="flex flex-wrap gap-2 mb-6">
                {types.map(t => (
                  <button key={t} onClick={() => setType(t)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 border ${type === t ? 'bg-red-700 text-white border-red-700' : 'border-gray-200 text-gray-500 hover:border-red-300 hover:text-red-700'}`}>
                    {t}
                  </button>
                ))}
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="Your Name *" value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                    className="border border-gray-200 rounded-xl px-4 py-3.5 text-gray-800 text-sm placeholder-gray-400 focus:outline-none focus:border-red-400 transition-colors" />
                  <input type="text" placeholder="Company Name" value={form.company} onChange={e => setForm({...form, company: e.target.value})}
                    className="border border-gray-200 rounded-xl px-4 py-3.5 text-gray-800 text-sm placeholder-gray-400 focus:outline-none focus:border-red-400 transition-colors" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input type="tel" placeholder="Phone *" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})}
                    className="border border-gray-200 rounded-xl px-4 py-3.5 text-gray-800 text-sm placeholder-gray-400 focus:outline-none focus:border-red-400 transition-colors" />
                  <input type="email" placeholder="Email" value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                    className="border border-gray-200 rounded-xl px-4 py-3.5 text-gray-800 text-sm placeholder-gray-400 focus:outline-none focus:border-red-400 transition-colors" />
                </div>
                <textarea placeholder="Tell us your requirements..." rows={5} value={form.message} onChange={e => setForm({...form, message: e.target.value})}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-gray-800 text-sm placeholder-gray-400 focus:outline-none focus:border-red-400 transition-colors resize-none" />
                <button onClick={submit} disabled={sent}
                  className={`w-full py-4 rounded-full font-semibold text-sm tracking-widest uppercase transition-all duration-300 ${sent ? 'bg-green-600 text-white' : 'btn-primary justify-center'}`}>
                  {sent ? '✓ Sent — We\'ll be in touch!' : 'Send Inquiry →'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
