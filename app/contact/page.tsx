'use client';

import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    number: '',
    email: '',
    message: '',
  });

  const maxNumberChars = 10;

  // refs for parallax on text
  const heroRef = useRef<HTMLElement | null>(null);
  const headingRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);

  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    // Parallax for *text only* — background stays fixed (background-attachment: fixed)
    if (prefersReducedMotion) {
      // reset transforms if reduced motion
      if (headingRef.current) headingRef.current.style.transform = 'none';
      return;
    }

    const heroEl = heroRef.current;
    const headingEl = headingRef.current;
    if (!heroEl || !headingEl) return;

    const speed = 0.18; // how much the text moves relative to scroll (tweakable)

    const onScroll = () => {
      if (rafRef.current != null) return;
      rafRef.current = window.requestAnimationFrame(() => {
        rafRef.current = null;
        const rect = heroEl.getBoundingClientRect();
        // rect.top is distance from viewport top to hero top
        // when rect.top is negative (scrolled past top), effect increases
        // we'll compute offset based on rect.top clamped
        const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));
        // using negative of rect.top so moving up moves content up a little
        const offset = clamp(-rect.top, -200, 200);
        const y = Math.round(offset * speed);
        headingEl.style.transform = `translateY(${y}px)`;
      });
    };

    // initial position
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [prefersReducedMotion]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'number') {
      if (value.length > maxNumberChars) return;
    }
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form sent:', form);
    alert('Thanks — your message has been sent. We will get back to you soon.');
    setForm({ name: '', number: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HERO — about.jpg as fixed bg, red overlay, heading "Contact Us", text parallax only */}
      {/* CONTACT HERO — EXACT SAME AS SERVICES PAGE */}
<section
  className="relative w-full h-[60vh] md:h-[75vh] lg:h-[78vh] overflow-hidden bg-local md:bg-fixed bg-center bg-cover"
  style={{ backgroundImage: `url('/contact.jpg')` }}
  aria-label="Contact hero"
>
  <style>{`
    @keyframes fadeUpSlow {
      0% { opacity: 0; transform: translateY(18px) scale(0.98); }
      100% { opacity: 1; transform: translateY(0) scale(1); }
    }

    .hero-title {
      opacity: 0;
      transform: translateY(20px) scale(0.97);
      animation: fadeUpSlow 1200ms cubic-bezier(.16,.84,.24,1) forwards;
      animation-delay: 200ms;
    }

    .hero-subtext {
      opacity: 0;
      transform: translateY(20px) scale(0.97);
      animation: fadeUpSlow 1400ms cubic-bezier(.16,.84,.24,1) forwards;
      animation-delay: 450ms;
    }

    @media (prefers-reduced-motion: reduce) {
      .hero-title, .hero-subtext {
        animation: none !important;
        opacity: 1 !important;
        transform: none !important;
      }
    }
  `}</style>

  {/* Red Overlay MATCHING SERVICES PAGE */}
  <div
    aria-hidden="true"
    className="absolute inset-0"
    style={{
      background:
         'linear-gradient(180deg, rgba(240,65,79,0.75), rgba(240,65,79,0.65))',

      mixBlendMode: 'multiply',
    }}
  />

  {/* CENTERED HEADING */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 h-full flex flex-col items-center justify-center text-center">
    <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white">
      Contact Us
    </h1>
    <p className="hero-subtext mt-4 text-base md:text-lg text-white/90">
      Let’s create something amazing together
    </p>
  </div>

  {/* CURVED WHITE SHAPE BOTTOM */}
  <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] pointer-events-none">
    <svg
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      className="w-full h-[80px] md:h-[100px] lg:h-[120px] block"
      aria-hidden
    >
      <path
        d="M0,0 C150,80 350,80 600,40 C850,0 1050,0 1200,60 L1200,120 L0,120 Z"
        fill="#faf5f4"
      />
    </svg>
  </div>
</section>


      {/* Contact Content (pale-pink background like screenshot) */}
      {/* IMPROVED SECOND SECTION — RED BORDER + BEAUTIFUL LAYOUT */}
<section className="py-20 relative" style={{ backgroundColor: "#fff8f7" }}>
  <style>{`
    .shadow-soft {
      box-shadow: 0 8px 22px rgba(0,0,0,0.06);
    }
  `}</style>

  {/* Decorative top wave */}
  <div className="absolute -top-1 left-0 w-full overflow-hidden leading-[0] pointer-events-none">
    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[60px] block">
      <path
        d="M0,0 C150,80 350,80 600,40 C850,0 1050,0 1200,60 L1200,120 L0,120 Z"
        fill="#fff8f7"
      />
    </svg>
  </div>

  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <h2 className="text-center text-3xl md:text-4xl font-bold text-[#333] mb-14">
     Thank you for choosing Sigma Graphics
    </h2>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

      {/* LEFT GRID – CONTACT DETAILS */}
      {/* LEFT GRID – CONTACT DETAILS + MAP */}
<div className="bg-white border-2 border-[#f0414f] rounded-2xl shadow-soft p-10">
 

  {/* Address */}
  <h3 className="text-lg font-semibold mb-2">Address:</h3>
  <p className="text-[15px] leading-relaxed mb-6">
    UB 18 / #8-95/19, Pineapple City, <br />
    Opp. GV Pai Hospital, <br />
    Moodubidire – 574227
  </p>

  {/* Map Embed */}
  <div className="w-full h-60 mb-8 rounded-xl overflow-hidden border border-[#f0414f]">
    <iframe
      title="Sigma Graphics Location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3873.429!2d74.995!3d13.066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf7b93e2d9b0cd%3A0xabcdef123456!2sMoodbidri!5e0!3m2!1sen!2sin!4v1234567890"
      width="100%"
      height="100%"
      loading="lazy"
      style={{ border: 0 }}
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>

  {/* Phone */}
  <h3 className="text-sm italic text-gray-600 mb-2">Phone</h3>
  <div className="space-y-2 mb-6 text-[15px] font-semibold">
    <div className="flex items-center gap-3">
      <Phone className="w-5 h-5 text-[#f0414f]" />
      <span>+91 9743730632</span>
    </div>
    <div className="flex items-center gap-3">
      <Phone className="w-5 h-5 text-[#f0414f]" />
      <span>+91 9731070591</span>
    </div>
  </div>

  {/* Email */}
  <h3 className="text-sm italic text-gray-600 mb-2">Email</h3>
  <div className="flex items-center gap-3 font-semibold text-[15px]">
    <Mail className="w-5 h-5 text-[#f0414f]" />
    <span>sigmapraphics22@gmail.com</span>
  </div>
</div>


      {/* RIGHT GRID – FORM */}
      {/* RIGHT GRID – BEAUTIFUL MODERN FORM */}
<div className="relative bg-white/90 backdrop-blur-md border-2 border-[#f0414f] rounded-2xl shadow-xl p-10 overflow-hidden">

  {/* Decorative shapes */}
  <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#f0414f]/20 rounded-full blur-2xl"></div>
  <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#f0414f]/10 rounded-full blur-2xl"></div>

  <div className="relative z-10">
    <h3 className="text-2xl font-bold text-[#111] mb-6">
      Let’s create something amazing together!
    </h3>

    <form onSubmit={handleSubmit} className="space-y-6">

      {/* Name */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Name</label>
        <Input
          id="name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter your name"
          className="w-full border-[1.5px] border-gray-300 rounded-md focus:border-[#f0414f] focus:ring-[#f0414f]"
          required
        />
      </div>

      {/* Number */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Number</label>
        <Input
          id="number"
          name="number"
          type="tel"
          value={form.number}
          onChange={handleChange}
          placeholder="Phone number"
          className="w-full border-[1.5px] border-gray-300 rounded-md focus:border-[#f0414f] focus:ring-[#f0414f]"
          required
        />
        <p className="text-xs text-gray-500 mt-1">
          {form.number.length} / 10 characters max
        </p>
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
        <Input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your email address"
          className="w-full border-[1.5px] border-gray-300 rounded-md focus:border-[#f0414f] focus:ring-[#f0414f]"
          required
        />
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
        <Textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Write your message here…"
          rows={6}
          className="w-full border-[1.5px] border-gray-300 rounded-md focus:border-[#f0414f] focus:ring-[#f0414f]"
          required
        />
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          className="
            w-full py-3 text-lg font-semibold text-white 
            rounded-full 
            bg-[#f0414f] hover:bg-[#d53c47]
            shadow-lg shadow-[#f0414f]/30
            transition-all duration-200
            hover:shadow-[#f0414f]/50 hover:-translate-y-1
          "
        >
          Submit
        </button>
      </div>

    </form>
  </div>
</div>


    </div>
  </div>
</section>

    </div>
  );
}
