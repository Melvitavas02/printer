"use client";

import React, { useEffect } from "react";

/**
 * About page with CSS + small JS animations.
 * - No framer-motion or other runtime deps.
 * - Uses IntersectionObserver to add "in-view" class for reveal animations.
 * - Left-side content slides in from left; right-side content slides in from right.
 */

export default function About() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return; // don't animate for users who prefer reduced motion

    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-animate]"));
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            el.classList.add("in-view");
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.16 }
    );

    els.forEach((el, i) => {
      // set a stagger delay index used by CSS
      el.style.setProperty("--stagger-index", String(i));
      io.observe(el);
    });

    return () => io.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Page-scoped CSS */}
      <style>{`
        /* animation tuning variables */
        :root {
          --stagger-delta: 120ms;   /* base stagger multiplier */
          --anim-duration: 800ms;   /* main reveal duration (slower) */
          --ease: cubic-bezier(.22,.9,.3,1);
        }

        @media (prefers-reduced-motion: reduce) {
          .reveal, .float-slow { animation: none !important; transition: none !important; opacity: 1 !important; transform: none !important; }
        }

        /* float decor */
        @keyframes floatSlow {
          0% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0); }
        }
        .float-slow { animation: floatSlow 6s ease-in-out infinite; }
        .float-slow-delayed { animation: floatSlow 6s ease-in-out infinite 0.6s; }

        /* base reveal (hidden state) */
        .reveal {
          opacity: 0;
          transform: translateY(10px);
          transition-property: opacity, transform;
          transition-duration: var(--anim-duration);
          transition-timing-function: var(--ease);
          will-change: opacity, transform;
        }

        /* direction-specific hidden start positions */
        .reveal[data-direction="left"] {
          transform: translateX(-28px) translateY(10px);
        }
        .reveal[data-direction="right"] {
          transform: translateX(28px) translateY(10px);
        }
        .reveal[data-direction="up"] {
          transform: translateY(32px);
        }

        /* staggered transition delay (multiplied by index) */
        .reveal[data-stagger="true"] {
          transition-delay: calc(var(--stagger-index) * var(--stagger-delta));
        }

        /* when in view: neutral transform and visible */
        .reveal.in-view {
          opacity: 1;
          transform: none;
        }

        /* small hero pop (separate so it uses fade keyframe for nicer pop) */
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(14px) scale(.997); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .hero-pop {
          opacity: 0;
          transform: translateY(10px) scale(.997);
        }
        .hero-pop.in-view {
          animation: fadeUp 640ms var(--ease) both;
          transition-delay: calc(var(--stagger-index) * var(--stagger-delta));
        }

        /* micro interactions */
        .card-hover:hover { transform: translateY(-6px) scale(1.01); box-shadow: 0 18px 40px rgba(0,0,0,0.08); }
        .btn-ghost:focus { outline: 3px solid rgba(244,63,79,0.18); outline-offset: 2px; }
        .btn-fade { transition: transform 220ms ease, box-shadow 220ms ease; }
        .btn-fade:hover { transform: translateY(-3px); }

        /* decorative wave color fix */
        .wave-fill { fill: #faf5f4; }
      `}</style>

      {/* HERO */}
      <section
        className="relative w-full h-[60vh] md:h-[75vh] lg:h-[78vh] overflow-hidden bg-local md:bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url('/aboutus.jpg')` }}
        aria-label="About hero"
      >
        {/* translucent overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-red-600/60 via-red-600/45 to-red-600/30"
          style={{ mixBlendMode: "multiply" }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 h-full flex items-center justify-center">
          <div className="text-center text-white max-w-3xl">
            <h1
              data-animate
              data-stagger="true"
              data-direction="up"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight hero-pop reveal"
            >
              About Us
            </h1>

            <p data-animate data-stagger="true" data-direction="up" className="mt-4 text-base md:text-lg text-white/90 reveal">
              We combine creativity with precision to deliver stunning print & design solutions.
            </p>

          
          </div>
        </div>

        {/* decorative wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] pointer-events-none" aria-hidden="true">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[80px] md:h-[100px] lg:h-[120px] block" aria-hidden="true">
            <path className="wave-fill" d="M0,0 C150,80 350,80 600,40 C850,0 1050,0 1200,60 L1200,120 L0,120 Z" />
          </svg>
        </div>
      </section>

      {/* SECTION 1 — Welcome */}
      <section className="relative pt-16 md:pt-16 pb-20 md:pb-28 bg-gradient-to-br from-red-50 via-white to-red-100/40 overflow-hidden">
        {/* float decor */}
        <div className="absolute -top-10 -left-10 w-72 h-72 rounded-full blur-3xl bg-red-200/30 float-slow" aria-hidden="true" />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full blur-3xl bg-red-300/20 float-slow-delayed" aria-hidden="true" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT (text) — slide in from left */}
          <div
            data-animate
            data-stagger="true"
            data-direction="left"
            className="space-y-6 reveal"
          >
            <p className="text-red-600 text-sm font-semibold tracking-widest uppercase">Welcome to Sigma Graphics</p>

            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
              Creativity + Precision <br />
              <span className="text-red-600">Powerful Results</span>
            </h2>

            <p className="text-muted-foreground leading-relaxed mt-4">
              At <strong>Sigma Graphics</strong>, we believe in the power of creativity and precision to bring your ideas to life.
            </p>

            <p className="text-muted-foreground leading-relaxed mt-3">
              From eye-catching business cards to captivating banners, our talented designers and printing experts are dedicated to delivering superior quality.
            </p>

            <div className="mt-6">
              <a href="/services" className="inline-block px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg shadow transition transform btn-fade reveal" data-animate data-stagger="true" data-direction="left">
                Explore Our Services
              </a>
            </div>
          </div>

          {/* RIGHT (image) — slide in from right */}
          <div
            data-animate
            data-stagger="true"
            data-direction="right"
            className="relative reveal"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-red-100 transform transition-all card-hover">
              <img src="/wedding.webp" alt="Sigma Graphics Welcome" className="w-full h-[400px] object-cover" />
            </div>

            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-red-200 rounded-2xl opacity-90" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* SECTION 2 — About Us */}
      <section className="relative py-20 md:py-28 bg-[#faf5f4] overflow-hidden">
        <div className="absolute top-0 left-0 w-80 h-80 bg-red-200/30 rounded-full blur-2xl opacity-50" aria-hidden="true" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-red-100/40 rounded-full blur-3xl opacity-50" aria-hidden="true" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* LEFT image (slide from left slightly) */}
          <div data-animate data-stagger="true" data-direction="left" className="relative reveal">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-red-100">
              <img src="/fireworks.webp" alt="About Sigma Graphics" className="w-full h-[420px] object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-red-200 rounded-2xl opacity-90" aria-hidden="true" />
          </div>

          {/* RIGHT content (slide from right) */}
          <div className="space-y-6">
            <div data-animate data-stagger="true" data-direction="right" className="reveal">
              <p className="text-red-600 text-sm font-semibold tracking-widest uppercase">About Us</p>

              <h2 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
                Where Creativity <br />
                <span className="text-red-600">Meets Precision</span>
              </h2>

              <p className="text-muted-foreground leading-relaxed mt-4">
                With years of industry experience, Sigma Graphics has been the trusted partner for businesses and individuals seeking world-class printing and graphic design solutions.
              </p>
            </div>

            <div data-animate data-stagger="true" data-direction="right" className="grid grid-cols-1 gap-3 mt-4 reveal">
              <p className="text-muted-foreground leading-relaxed">
                Our journey began with a passion for creating visually stunning and impactful print materials. We stay ahead of industry trends and constantly invest in modern technology to deliver exceptional quality.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether it's a business card, brochure, poster, or complete branding package — we approach each project with creativity, precision, and care.
              </p>
            </div>

            <div data-animate data-stagger="true" data-direction="right" className="mt-4 reveal">
              <a href="/contact" className="inline-block px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg shadow transition btn-fade">Contact Us</a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — VISION & MISSION */}
      <section className="relative py-10 md:py-14 bg-[#f0414f] overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div data-animate data-stagger="true" data-direction="left" className="flex flex-col justify-center reveal">
              <p className="text-xs tracking-widest uppercase text-white/90 font-semibold mb-2">What Drives Us</p>

              <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight max-w-lg">
                Our <span className="text-white">Vision</span> &amp; <span className="text-white">Mission</span>
              </h2>

              <p className="mt-4 text-white/90 text-sm max-w-lg">
                We blend creativity with precision to craft printed materials that leave a lasting impression. Innovation, quality and friendly service are at the heart of everything we do.
              </p>

      <div className="mt-6 flex flex-wrap gap-4">
  <a
    data-animate
    data-stagger="true"
    data-direction="left"
    href="/services"
    className="inline-flex items-center justify-center px-8 py-3 text-[18px] font-semibold rounded-full shadow-sm bg-white text-[#f0414f] transition-all duration-200 hover:bg-red-100 reveal min-w-[200px]"
  >
    Explore Services
  </a>

  <a
    data-animate
    data-stagger="true"
    data-direction="left"
    href="/contact"
    className="inline-flex items-center justify-center px-8 py-3 text-[18px] font-semibold rounded-full shadow-sm bg-white text-[#f0414f] transition-all duration-200 hover:bg-red-100 reveal min-w-[200px]"
  >
    Talk to Us
  </a>
</div>



            </div>

            <div data-animate data-stagger="true" data-direction="right" className="flex flex-col gap-4 reveal">
              <article className="group relative rounded-xl p-5 md:p-6 bg-white shadow-sm border border-white/20 hover:shadow-md transition overflow-hidden cursor-pointer">
                <div aria-hidden="true" className="absolute inset-0 bg-[#f0414f]/95 transform -translate-y-full group-hover:translate-y-0 group-focus:translate-y-0 transition-transform duration-500 ease-out pointer-events-none" style={{ zIndex: 10 }} />

                <div className="relative z-20 flex items-start gap-3 group-hover:text-white transition-colors duration-300">
                  <div className="flex-none bg-[#f0414f]/10 rounded-lg p-2">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
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
                <div aria-hidden="true" className="absolute inset-0 bg-[#f0414f]/95 transform -translate-y-full group-hover:translate-y-0 group-focus:translate-y-0 transition-transform duration-500 ease-out pointer-events-none" style={{ zIndex: 10 }} />

                <div className="relative z-20 flex items-start gap-3 group-hover:text-white transition-colors duration-300">
                  <div className="flex-none bg-[#f0414f]/10 rounded-lg p-2">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
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
    </div>
  );
}
