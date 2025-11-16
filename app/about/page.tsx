"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HERO with fixed background on md+ (mobile uses local background for compatibility) */}
      <section
  className="
    relative
    w-full
    h-[60vh] md:h-[75vh] lg:h-[78vh]
    overflow-hidden
    bg-local md:bg-fixed bg-center bg-cover
  "
  style={{
    backgroundImage: `url('/aboutus.jpg')`,
  }}
  aria-label="About hero"
>
  {/* Inline animation CSS (scoped to page) */}
  <style>{`
    @keyframes fadeUp {
      0% { opacity: 0; transform: translateY(12px); }
      100% { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-up {
      animation: fadeUp 700ms cubic-bezier(.22,.9,.3,1) both;
    }
    .animate-fade-up-delayed {
      animation: fadeUp 900ms cubic-bezier(.22,.9,.3,1) 120ms both;
    }
  `}</style>

  {/* Red translucent overlay */}
  <div
    aria-hidden="true"
    className="absolute inset-0 bg-gradient-to-b from-red-600/60 via-red-600/50 to-red-600/40"
    style={{ mixBlendMode: "multiply" }}
  />

  {/* Centered heading content */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 h-full flex items-center justify-center">
    <div className="text-center text-white max-w-3xl">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight animate-fade-up">
        About Us
      </h1>

      {/* optional subheading — animated slightly delayed */}
      <p className="mt-4 text-base md:text-lg text-white/90 animate-fade-up-delayed">
        We combine creativity with precision to deliver stunning print & design solutions.
      </p>
    </div>
  </div>

  {/* decorative wave at bottom — match next section bg (#faf5f4) so there is no white seam */}
  <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] pointer-events-none">
    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[80px] md:h-[100px] lg:h-[120px] block" aria-hidden="true">
      <path
        d="M0,0 C150,80 350,80 600,40 C850,0 1050,0 1200,60 L1200,120 L0,120 Z"
        fill="#faf5f4"
      />
    </svg>
  </div>
</section>

{/* ================= SECTION 1 — Welcome to Sigma Graphics ================= */}
{/* ================= SECTION 1 — WELCOME ================= */}
<section className="relative pt-15 md:pt-16 pb-20 md:pb-28 bg-gradient-to-br from-red-50 via-white to-red-100/40 overflow-hidden">


  {/* Soft floating shapes */}
  <div className="absolute -top-10 -left-10 w-72 h-72 bg-red-200/30 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 right-0 w-80 h-80 bg-red-300/20 rounded-full blur-3xl"></div>

  <div className="relative mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

    {/* LEFT CONTENT */}
    <div className="space-y-6">
      <p className="text-red-600 text-sm font-semibold tracking-widest uppercase">
        Welcome to Sigma Graphics
      </p>

      <h2 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
        Creativity + Precision <br />
        <span className="text-red-600">Powerful Results</span>
      </h2>

      <p className="text-muted-foreground leading-relaxed">
        At <strong>Sigma Graphics</strong>, we believe in the power of creativity 
        and precision to bring your ideas to life. With years of experience, we are 
        your trusted partner for all printing and graphic design needs.
      </p>

      <p className="text-muted-foreground leading-relaxed">
        From eye-catching business cards to captivating banners, our talented 
        designers and printing experts are dedicated to delivering superior quality, 
        innovative solutions, and outstanding customer service.
      </p>

      <a href="/services" className="inline-block px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg shadow transition">
        Explore Our Services
      </a>
    </div>

    {/* RIGHT IMAGE */}
    <div className="relative">
      <div className="rounded-2xl overflow-hidden shadow-2xl border border-red-100">
        <img 
          src="/wedding.webp"
          alt="Sigma Graphics Welcome"
          className="w-full h-[400px] object-cover"
        />
      </div>

      {/* Decorative outline behind image */}
      <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-red-200 rounded-2xl"></div>
    </div>

  </div>
</section>

{/* ================= END SECTION 1 ================= */}
{/* ================= SECTION 2 — About Us ================= */}
{/* ================= SECTION 2 — ABOUT US ================= */}
<section className="relative py-20 md:py-28 bg-[#faf5f4] overflow-hidden">

  {/* Decorative background circles */}
  <div className="absolute top-0 left-0 w-80 h-80 bg-red-200/30 rounded-full blur-2xl opacity-50"></div>
  <div className="absolute bottom-10 right-10 w-96 h-96 bg-red-100/40 rounded-full blur-3xl opacity-50"></div>

  <div className="relative mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

    {/* LEFT IMAGE */}
    <div className="relative">
      <div className="rounded-2xl overflow-hidden shadow-xl border border-red-100">
        <img 
          src="/fireworks.webp"
          alt="About Sigma Graphics"
          className="w-full h-[420px] object-cover"
        />
      </div>

      {/* Decorative offset border */}
      <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-red-200 rounded-2xl"></div>
    </div>

    {/* RIGHT CONTENT */}
    <div className="space-y-6">
      <p className="text-red-600 text-sm font-semibold tracking-widest uppercase">
        About Us
      </p>

      <h2 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
        Where Creativity <br />
        <span className="text-red-600">Meets Precision</span>
      </h2>

      <p className="text-muted-foreground leading-relaxed">
        With years of industry experience, Sigma Graphics has been the trusted 
        partner for businesses and individuals seeking world-class printing and 
        graphic design solutions.
      </p>

      <p className="text-muted-foreground leading-relaxed">
        Our journey began with a passion for creating visually stunning and impactful 
        print materials. We stay ahead of industry trends and constantly invest in 
        modern technology to deliver exceptional quality.
      </p>

      <p className="text-muted-foreground leading-relaxed">
        Whether it's a business card, brochure, poster, or complete branding package — 
        we approach each project with creativity, precision, and care.
      </p>

      <p className="text-muted-foreground leading-relaxed">
        Every project is unique. We tailor our services to fit your vision perfectly — 
        from concept to final print.
      </p>

      <p className="text-muted-foreground leading-relaxed">
        Thank you for choosing <strong>Sigma Graphics.</strong>  
        Let’s create something amazing together!
      </p>

      <a href="/contact" className="inline-block px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg shadow transition">
        Contact Us
      </a>
    </div>

  </div>
</section>

{/* ================= END SECTION 2 ================= */}

{/* ================= SECTION 3 — VISION & MISSION ================= */}
<section className="relative py-10 md:py-14 bg-[#f0414f] overflow-hidden">
  <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
      {/* LEFT COLUMN: heading + copy + CTA */}
      <div className="flex flex-col justify-center">
        <p className="text-xs tracking-widest uppercase text-white/90 font-semibold mb-2">
          What Drives Us
        </p>

        <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight max-w-lg">
          Our <span className="text-white">Vision</span> &amp; <span className="text-white">Mission</span>
        </h2>

        <p className="mt-4 text-white/90 text-sm max-w-lg">
          We blend creativity with precision to craft printed materials that leave a lasting impression.
          Innovation, quality and friendly service are at the heart of everything we do.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="/services"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-md shadow-sm bg-white text-[#f0414f] transition-all duration-200 hover:bg-red-100"
          >
            Explore Services
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-md shadow-sm bg-white text-[#f0414f] transition-all duration-200 hover:bg-red-100"
          >
            Talk to Us
          </a>
        </div>

        {/* Stats */}
        <div className="mt-6 flex gap-6 text-xs">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-white/20 text-white text-lg">★</span>
            <span className="text-white/90">Trusted by clients</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-white/20 text-white text-lg">⚡</span>
            <span className="text-white/90">Fast turnarounds</span>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN: stacked cards */}
      <div className="flex flex-col gap-4">
        <article className="group relative rounded-xl p-5 md:p-6 bg-white shadow-sm border border-white/20 hover:shadow-md transition overflow-hidden cursor-pointer">
          {/* overlay that slides down on hover */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[#f0414f]/95 transform -translate-y-full group-hover:translate-y-0 group-focus:translate-y-0 transition-transform duration-500 ease-out pointer-events-none"
            style={{ zIndex: 10 }}
          />

          {/* content sits above overlay and turns white on hover */}
          <div className="relative z-20 flex items-start gap-3 group-hover:text-white transition-colors duration-300">
            <div className="flex-none bg-[#f0414f]/10 rounded-lg p-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                <path d="M12 2v6l4 2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="14" r="6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-white transition-colors duration-300">Our Vision</h3>
              <p className="text-gray-700 text-sm mt-1 group-hover:text-white/90 transition-colors duration-300">
                To be the leading provider of innovative printing and graphic design solutions, setting the standard for excellence and creativity in the industry.
              </p>
            </div>
          </div>
        </article>

        <article className="group relative rounded-xl p-5 md:p-6 bg-white shadow-sm border border-white/20 hover:shadow-md transition overflow-hidden cursor-pointer">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[#f0414f]/95 transform -translate-y-full group-hover:translate-y-0 group-focus:translate-y-0 transition-transform duration-500 ease-out pointer-events-none"
            style={{ zIndex: 10 }}
          />

          <div className="relative z-20 flex items-start gap-3 group-hover:text-white transition-colors duration-300">
            <div className="flex-none bg-[#f0414f]/10 rounded-lg p-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                <path d="M3 12h18M12 3v18" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-white transition-colors duration-300">Our Mission</h3>
              <p className="text-gray-700 text-sm mt-1 group-hover:text-white/90 transition-colors duration-300">
                Empowering businesses and individuals to make a lasting impression through visually stunning and impactful printed materials, delivered with exceptional quality, creativity, and customer service.
              </p>
            </div>
          </div>

          <div className="mt-4 relative z-20 flex items-center justify-between text-xs text-gray-500 group-hover:text-white/90 transition-colors duration-300">
            <span>Quality • Creativity</span>
            <a href="/portfolio" className="hover:underline group-hover:text-white">See work →</a>
          </div>
        </article>
      </div>
    </div>
  </div>
</section>
{/* ================= END SECTION 3 ================= */}

{/* ================= END SECTION 3 ================= */}



     

    </div>
  );
}
