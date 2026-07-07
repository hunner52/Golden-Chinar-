'use client';
import { useEffect, useRef } from 'react';

const workflow = [
  { step: '01', title: 'Consultation', desc: 'Discuss your brand vision, SKU requirements and volume needs with our team.' },
  { step: '02', title: 'Packaging Design', desc: 'We assist with label development, FSSAI compliance and packaging formats.' },
  { step: '03', title: 'Manufacturing', desc: '35 TPD Kachi Ghani capacity. AGMARK Grade 1 oil, every batch, every time.' },
  { step: '04', title: 'Quality Assurance', desc: 'Batch-wise GLC testing, four-stage filtration, archived control samples.' },
  { step: '05', title: 'Dispatch', desc: 'On-time delivery pan-India. Direct rail loading to North Eastern states.' },
];

export default function PrivateLabel() {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.reveal').forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 110);
          });
        }
      });
    }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="private-label" ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <span className="section-label reveal mb-3">Private Label Manufacturing</span>
            <div className="red-divider mb-5 reveal reveal-delay-1" />
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal leading-tight reveal reveal-delay-1">
              You Build The Brand.<br />
              <span className="text-[#C41E1E]">We Build The Product.</span>
            </h2>
            <p className="text-charcoal/60 font-inter text-lg mt-6 leading-relaxed reveal reveal-delay-2">
              Trusted by Patanjali, Modicare, Dalmia Bharat and Louis Dreyfus — we have the infrastructure, certifications and 30 years of expertise to be your manufacturing partner.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 reveal reveal-delay-3">
              {['All SKU sizes', 'AGMARK Grade 1', 'FSSAI Compliant', 'Custom labelling', 'Nitrogen flushed'].map((tag) => (
                <span key={tag} className="px-4 py-2 bg-[#FFF5F5] border border-[#C41E1E]/20 rounded-full text-[#C41E1E] text-xs font-inter font-semibold">{tag}</span>
              ))}
            </div>
            <div className="mt-8 reveal reveal-delay-3">
              <button onClick={() => scrollTo('#contact')} className="btn-red mr-4">Start the Conversation</button>
              <a href="tel:+919783820000" className="text-[#C41E1E] font-inter font-semibold text-sm hover:underline">+91 97838 20000</a>
            </div>
          </div>

          {/* Right: workflow */}
          <div className="space-y-5 reveal reveal-delay-2">
            {workflow.map((step, i) => (
              <div key={step.step} className="flex gap-5 items-start group">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#C41E1E] flex items-center justify-center text-white font-playfair font-bold text-sm">
                  {step.step}
                </div>
                <div className="flex-1 pb-5 border-b border-charcoal/8 last:border-0">
                  <h3 className="font-playfair text-lg text-charcoal font-semibold mb-1">{step.title}</h3>
                  <p className="text-charcoal/50 font-inter text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
