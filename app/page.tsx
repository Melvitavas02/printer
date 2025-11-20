// page.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Printer, Palette, Zap, Layers, FileText, CreditCard, Award } from "lucide-react";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const infoRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const precisionRef = useRef<HTMLDivElement | null>(null);

  const openImage = (src: string) => setSelectedImage(src);
  const closeImage = () => setSelectedImage(null);

  // Info section reveal (kept)
  useEffect(() => {
    const root = infoRef.current;
    if (!root || typeof window === "undefined") return;

    const targets: HTMLElement[] = Array.from(root.querySelectorAll<HTMLElement>(".reveal"));
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            el.classList.add("reveal-visible");
            observer.unobserve(el);
          }
        });
      },
      { root: null, rootMargin: "0px", threshold: 0.25 }
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  // About reveal (kept)
  useEffect(() => {
    const root = aboutRef.current;
    if (!root || typeof window === "undefined") return;

    const items = Array.from(root.querySelectorAll<HTMLElement>(".reveal"));
    if (!items.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Precision reveal (kept)
  useEffect(() => {
    const el = precisionRef.current;
    if (!el || typeof window === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("reveal-visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Master reveal observer (applies to all .reveal elements across the page)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const selector = ".reveal, .reveal-precision";
    const nodes = Array.from(document.querySelectorAll(selector)) as HTMLElement[];
    if (!nodes.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            el.classList.add("reveal-visible");
            io.unobserve(el); // remove if you want repeat animations
          }
        });
      },
      { threshold: 0.18, root: null, rootMargin: "0px 0px -6% 0px" }
    );

    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  const services = [
    { title: "Printing Service", img: "/114.webp", icon: Printer },
    { title: "Graphic Design", img: "/1337.webp", icon: Zap },
    { title: "Branding and Identity", img: "/fractal.webp", icon: Layers },
    { title: "Stationery Design", img: "/inspiration.webp", icon: Palette },
    { title: "Digital Graphics", img: "/bank-phrom.webp", icon: FileText },
    { title: "Label & Stickers", img: "/social-media.webp", icon: CreditCard },
  ];

  // helper key handler to open images with Enter/Space
  const handleImageKey = (e: React.KeyboardEvent, src: string) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openImage(src);
    }
  };

  // SERVICES: specific intersection observer that triggers staggered left/right entrance
  useEffect(() => {
    const root = servicesRef.current;
    if (!root || typeof window === "undefined") return;

    const cards = Array.from(root.querySelectorAll<HTMLElement>(".service-card"));
    if (!cards.length) return;

    // Observe the container — when it becomes visible trigger the staggered animation
    const containerObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // assign left/right and start stagger
            cards.forEach((card, i) => {
              const anim = i % 2 === 0 ? "left" : "right";
              card.setAttribute("data-anim", anim);
              card.classList.add("reveal");
              // staggered reveal-visible with small delays
              setTimeout(() => {
                card.classList.add("reveal-visible");
              }, i * 120 + 60);
            });
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    containerObserver.observe(root);
    return () => containerObserver.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* --- Animation CSS (inside JSX so it renders) --- */}
      <style>{`
        .reveal {
          opacity: 0;
          transform: translate3d(0,0,0);
          will-change: transform, opacity;
          transition-property: transform, opacity;
          /* SLOWER duration for premium feel */
          transition-duration: 1500ms;
          /* softer easing */
          transition-timing-function: cubic-bezier(.16,.84,.28,1);
        }
        .reveal[data-anim="left"]  { transform: translateX(-64px); }
        .reveal[data-anim="right"] { transform: translateX(64px); }
        .reveal[data-anim="up"]    { transform: translateY(36px); }
        .reveal[data-anim="down"]  { transform: translateY(-36px); }

        .reveal-visible { opacity: 1 !important; transform: translateX(0) translateY(0) !important; }
        .reveal:focus { outline: none; }
        .reveal.staggered { transition-duration: 700ms; }
        .reveal img { backface-visibility: hidden; transform-origin: center; }

        /* SERVICES: improved visibility & hover animation */
        .service-card {
          transition: transform 350ms cubic-bezier(.16,.84,.28,1), box-shadow 350ms cubic-bezier(.16,.84,.28,1);
          transform-origin: center;
          backface-visibility: hidden;
          will-change: transform, box-shadow;
          z-index: 5; /* base z-index for cards lower than left column */
        }
        .service-card:hover, .service-card:focus {
          transform: translateY(-8px) scale(1.03);
          box-shadow: 0 30px 60px rgba(16,24,40,0.28);
          z-index: 20; /* raise on hover */
        }

        /* ensure left column (headings + CTAs) sits on top on small screens */
        .services-left {
          position: relative;
          z-index: 60;
        }

        /* Title overlay - ensures text is readable on images */
        .service-title {
          color: #ffffff;
          text-shadow: 0 6px 20px rgba(2,6,23,0.6), 0 1px 0 rgba(255,255,255,0.02);
          display: inline-block;
          padding: 6px 10px;
          border-radius: 8px;
          background: linear-gradient(180deg, rgba(0,0,0,0.25), rgba(0,0,0,0.45));
          backdrop-filter: blur(4px);
        }

        /* make overlay non-blocking for clicks (so CTA is clickable) */
        .service-card > .overlay, .service-card .absolute.inset-0.z-10 {
          pointer-events: none;
        }

        /* Get a Quote hover: make it fill with rose and text white */
        .get-quote-btn {
          transition: background-color 220ms ease, color 220ms ease, transform 220ms ease;
        }
        .get-quote-btn:hover, .get-quote-btn:focus {
          background-color: #f0414f;
          color: #ffffff !important;
          transform: translateY(-2px);
        }

        /* make the left CTA sticky on very small screens so it remains visible */
        @media (max-width: 640px) {
          .services-left .cta-primary {
            position: sticky;
            top: 12px;
            z-index: 80;
            pointer-events: auto;
            margin-bottom: 12px;
          }
        }
      `}</style>

      {/* ----------------------------- HERO SECTION ----------------------------- */}
      <section className="relative w-full min-h-[90vh] md:min-h-[100vh] grid grid-cols-1 md:grid-cols-12 overflow-hidden">
        {/* LEFT — BLACK BLOCK (visual only) */}
        <div className="md:col-span-4 relative hidden md:block">
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: "#0f1112",
              backgroundImage: `url("data:image/svg+xml;utf8,${encodeURIComponent(
                `<svg xmlns='http://www.w3.org/2000/svg' width='60' height='52'>
                   <polygon points='30,0 60,15 60,45 30,60 0,45 0,15'
                     stroke='rgba(255,255,255,0.03)' fill='none' stroke-width='1'/> 
                 </svg>`
              )}")`,
              backgroundRepeat: "repeat",
            }}
          />
        </div>

        {/* RIGHT — IMAGE */}
        <div className="md:col-span-8 relative">
          <img src="/cleaned_right_side.png" className="absolute inset-0 w-full h-full object-cover object-left" alt="Hero Image" />
          <div className="absolute inset-0 bg-black/10 md:bg-transparent" />
        </div>

        {/* MAIN CONTENT — spans BOTH columns */}
        <div className="absolute inset-0 flex items-center">
          <div className="w-full px-6 md:pl-20 lg:pl-32 xl:pl-40 pointer-events-auto">
            {/* HEADLINE (left entrance) */}
            <h1
              className="reveal text-white font-extrabold leading-[1.05] text-[36px] sm:text-[52px] md:text-[70px] lg:text-[85px]"
              data-anim="left"
              style={{ transitionDelay: "40ms" }}
            >
              <span className="block">Welcome to</span>
              <span className="block mt-2 md:translate-x-12 lg:translate-x-20 xl:translate-x-24">Sigma Graphics</span>
            </h1>

            {/* Subtext (left entrance) */}
            <p
              className="reveal text-white/80 mt-4 max-w-xl text-base md:text-lg"
              data-anim="left"
              style={{ transitionDelay: "120ms" }}
            >
              Where Creativity meets Precision
            </p>

            {/* Buttons */}
            <div className="mt-6 flex gap-4">
              <Link
                href="/contact"
                className="reveal inline-flex items-center gap-3 px-6 py-3 bg-rose-500 hover:bg-rose-600 text-white rounded-lg shadow-md transition"
                data-anim="up"
                style={{ transitionDelay: "220ms" }}
                aria-label="Make an order"
              >
                Make An Order
                <ArrowRight className="w-4 h-4"  focusable="false" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------- INFO SECTION ----------------------- */}
      <section className="relative overflow-hidden pt-6 mt-0">
        {/* full-bleed pattern */}
        <div
         
          className="absolute inset-0"
          style={{
            backgroundColor: "#f0414f",
            backgroundImage: `url("data:image/svg+xml;utf8,${encodeURIComponent(
              `<svg xmlns='http://www.w3.org/2000/svg' width='60' height='52'>
                 <polygon points='30,0 60,15 60,45 30,60 0,45 0,15'
                   stroke='rgba(255,255,255,0.06)' fill='none' stroke-width='1'/> 
               </svg>`
            )}")`,
            backgroundRepeat: "repeat",
            zIndex: 0,
          }}
        />

        <div className="absolute -top-24 -left-20 w-96 h-96 rounded-full opacity-40 pointer-events-none" style={{ background: "linear-gradient(135deg,#ff7b7f,#ffb8c3)", filter: "blur(80px)", zIndex: 1 }} />
        <div className="absolute -bottom-24 -right-20 w-96 h-96 rounded-full opacity-32 pointer-events-none" style={{ background: "linear-gradient(135deg,#ff6a6f,#ffb8c3)", filter: "blur(80px)", zIndex: 1 }} />

        <div ref={infoRef} className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* LEFT: image (enter from left) */}
            <div className="lg:col-span-6 flex items-start">
              <div
                data-index="0"
                className="reveal w-full max-w-lg rounded-xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-[1.02]"
                data-anim="left"
                style={{ transitionDelay: "60ms" }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 pointer-events-none" />
                  <img src="/humaneye.webp" alt="Featured — Sigma Graphics preview" className="w-full h-[320px] md:h-[420px] object-cover will-change-transform" loading="lazy" />
                  <div className="absolute -right-8 -bottom-8 bg-white/6 backdrop-blur rounded-lg p-3 text-xs font-medium text-white/90 shadow-lg transform rotate-3">Premium Print Samples</div>
                </div>
              </div>
            </div>

            {/* RIGHT: copy card (enter from right) */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div
                data-index="1"
                className="reveal rounded-2xl p-6 md:p-12"
                data-anim="right"
                style={{ transitionDelay: "160ms" }}
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-3">Welcome to Sigma Graphics</h2>
                <div className="w-24 h-1 bg-white/30 mb-6 rounded" />
                <p className="text-white/90 mb-6 max-w-xl leading-relaxed">
                  At Sigma Graphics, we believe in the power of creativity and precision to bring your ideas to life. With our extensive experience in the industry, we’re here to be your trusted partner in all your printing and graphic design needs.
                </p>
                <div className="flex gap-4">
                  <a href="/about" className="inline-flex items-center px-6 py-3 border border-white/30 text-white rounded-md hover:bg-white/8 transition" aria-label="Read more about Sigma Graphics">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* SIGMA row */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 text-white">
            {[
              { letter: "S", title: "Superior Quality", desc: "Delivering products and services of the highest quality to ensure client satisfaction." },
              { letter: "I", title: "Innovative Solutions", desc: "Creative, tailored printing solutions that keep pace with modern branding needs." },
              { letter: "G", title: "Graphic Excellence", desc: "Visually stunning design work that communicates your message clearly." },
              { letter: "M", title: "Modern Technology", desc: "State-of-the-art equipment for efficient production and consistent results." },
              { letter: "A", title: "Attention to Detail", desc: "Precision in every step — from concept to final print." }
            ].map((it, i) => (
              <div
                key={i}
                data-index={i + 2}
                className="reveal p-4 rounded-xl border border-transparent hover:border-white/20 transition transform hover:-translate-y-1 hover:scale-[1.01] bg-gradient-to-b from-white/3 to-transparent"
                data-anim={i % 2 === 0 ? "up" : "down"}
                style={{ boxShadow: "0 6px 18px rgba(0,0,0,0.25)", transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-lg flex items-center justify-center text-2xl font-extrabold" style={{ background: "linear-gradient(135deg,#fff0,#ffffff12)", border: "1px solid rgba(255,255,255,0.06)" }}>
                      {it.letter}
                    </div>
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-semibold mb-1">{it.title}</div>
                    <p className="text-xs leading-tight opacity-90">{it.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* bottom drip svg */}
        <svg className="absolute bottom-0 left-0 w-full pointer-events-none" viewBox="0 0 1440 160" preserveAspectRatio="none" >
          <path fill="#ffffff" d="M0,120 C80,90 160,120 280,120 C400,120 480,80 600,120 C720,160 800,120 920,120 C1040,120 1120,160 1240,120 C1360,80 1440,120 1440,160 L0,160 Z" />
          <g fill="#ffffff" transform="translate(0,80)">
            <ellipse cx="160" cy="48" rx="20" ry="36" />
            <ellipse cx="420" cy="38" rx="22" ry="42" />
            <ellipse cx="720" cy="52" rx="30" ry="48" />
            <ellipse cx="1060" cy="45" rx="18" ry="34" />
          </g>
        </svg>
      </section>

      {/* ============= ABOUT SECTION (fixed & animated) ============= */}
      <section className="relative py-10 bg-white overflow-hidden">
        <div ref={aboutRef} className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* LEFT: images (reveal from left) */}
            <div data-index="0" className="lg:col-span-6">
              <div
                className="reveal rounded-2xl overflow-hidden shadow-xl transform transition-transform duration-500 hover:scale-[1.02]"
                data-anim="left"
                style={{ transitionDelay: "60ms" }}
              >
                <img src="/about.jpg" alt="Sigma Graphics team and workspace" className="w-full h-[340px] md:h-[420px] object-cover" loading="lazy" />

                <div className="grid grid-cols-2 gap-5 mt-6">
                  <div className="rounded-xl overflow-hidden shadow-xl transform hover:-translate-y-1 transition-all duration-500">
                    <img src="/about-6.jpg" alt="Team working" className="w-full h-[150px] object-cover" loading="lazy" />
                  </div>

                  <div className="rounded-xl overflow-hidden shadow-xl transform hover:-translate-y-1 transition-all duration-500">
                    <img src="/about-7.jpg" alt="Printing process" className="w-full h-[150px] object-cover" loading="lazy" />
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: text content (reveal from right) */}
            <div data-index="1" className="lg:col-span-6 flex flex-col justify-center">
              <div
                className="reveal rounded-2xl p-8 lg:p-10 shadow-lg border border-gray-200 bg-white"
                data-anim="right"
                style={{ transitionDelay: "120ms" }}
              >
                <p className="text-xs tracking-[0.2em] uppercase text-red-600 mb-3">Unveiling the Essence</p>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-5 leading-tight">
                  About Us
                </h2>

                <p className="text-gray-700 text-base leading-relaxed mb-6">
                  Welcome to <span className="font-semibold">Sigma Graphics</span>, where creativity meets precision.
                  With years of experience, we bring your ideas to life with premium design and flawless print quality.
                </p>

                <p className="text-gray-700 text-base leading-relaxed mb-8">
                  Whether you're growing your brand or launching a project, we are your trusted partner for impactful visual experiences.
                </p>

                <a
                  href="/about"
                  className="inline-flex items-center whitespace-nowrap px-4 py-2 text-sm bg-[#f0414f] text-white font-medium rounded-md shadow hover:bg-red-600 transition-all duration-300"
                  aria-label="Read more about Sigma Graphics"
                  style={{ transitionDelay: "160ms" }}
                >
                  Read More
                  <svg className="w-3 h-3 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"  focusable="false">
                    <path d="M5 12h14" />
                    <path d="M13 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    {/* ----------------------- SERVICES SECTION (mobile-friendly) ----------------------- */}
<section className="relative" style={{ background: "#fff6f6" }}>
  <style>{`
    /* Small, reusable entrance animation (respects reduced-motion) */
    @media (prefers-reduced-motion: no-preference) {
      .svc-reveal { opacity: 0; transform: translateX(0); transition: transform 650ms cubic-bezier(.16,.84,.28,1), opacity 650ms cubic-bezier(.16,.84,.28,1); }
      .svc-from-left  { transform: translateX(-48px); }
      .svc-from-right { transform: translateX(48px); }
      .svc-visible    { opacity: 1; transform: translateX(0); }
    }
    @media (prefers-reduced-motion: reduce) {
      .svc-reveal, .svc-visible { opacity: 1 !important; transform: none !important; transition: none !important; }
    }

    /* minimal hover styles kept */
    .service-card:hover,
    .service-card:focus {
      transform: translateY(-8px);
      transition: transform 260ms cubic-bezier(.16,.84,.28,1);
    }
  `}</style>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div className="flex flex-col md:flex-row md:items-start gap-12">
      {/* Left column: heading + CTA */}
      <div
        className="md:w-1/3 space-y-6 services-left"
        // left column reveal classes applied by observer
        id="services-left"
      >
        <h3 className="text-sm font-semibold svc-reveal svc-from-left" style={{ color: "#f0414f" }}>Our Services</h3>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight svc-reveal svc-from-left">
          Creative & Professional
          <span className="block text-[#f0414f]">Printing Solutions</span>
        </h2>

        <p className="text-gray-600 text-base leading-relaxed svc-reveal svc-from-left">
          We combine craft, premium materials and modern print technology to deliver outstanding results — from small runs to full production.
        </p>

        {/* BOTH BUTTONS MATCHED — same size, color, hover */}
        <div className="flex gap-3 svc-reveal svc-from-left">
          <Link
            href="/services"
            className="inline-flex items-center whitespace-nowrap px-4 py-2 text-sm bg-[#f0414f] text-white font-medium rounded-md shadow hover:bg-red-600 transition-all duration-300 relative z-40"
            aria-label="View all services"
          >
            View All Services
            <svg className="w-3 h-3 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" focusable="false">
              <path d="M5 12h14" />
              <path d="M13 5l7 7-7 7" />
            </svg>
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center whitespace-nowrap px-4 py-2 text-sm bg-[#f0414f] text-white font-medium rounded-md shadow hover:bg-red-600 transition-all duration-300 relative z-40"
            aria-label="Get a quote"
          >
            Get a Quote
            <svg className="w-3 h-3 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" focusable="false">
              <path d="M5 12h14" />
              <path d="M13 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Right column: responsive grid of cards */}
      <div className="md:w-2/3">
        <div ref={servicesRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" id="services-grid">
          {services.map((svc, idx) => {
            const Icon = svc.icon;
            // default each card with svc-reveal; observer will add svc-visible and set from-left/from-right
            return (
              <Link
                key={svc.title}
                href="/services"
                aria-label={`${svc.title} — View services`}
                className="group block"
              >
                <article
                  tabIndex={0}
                  role="button"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") (e.currentTarget as HTMLElement).click();
                  }}
                  className={`service-card svc-reveal rounded-2xl overflow-hidden relative group transition-transform transform bg-white shadow-md`}
                  data-idx={idx}
                  aria-hidden="false"
                >
                  {/* Background image */}
                  <div
                    className="absolute inset-0 z-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${svc.img})`, filter: "brightness(.6) saturate(.95)" }}
                    aria-hidden="true"
                  />

                  {/* gradient overlay on hover */}
                  <div className="absolute inset-0 z-10 overlay bg-gradient-to-t from-black/65 to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out pointer-events-none" />

                  {/* Content */}
                  <div className="relative z-20 p-6 flex flex-col h-full">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-white/90 shadow-sm">
                          {Icon ? <Icon className="w-6 h-6 text-[#f0414f]" aria-hidden="true" /> : null}
                        </div>

                        <div>
                          <h4 className="service-title text-lg font-semibold text-white" style={{ textShadow: "0 6px 20px rgba(2,6,23,0.6)" }}>{svc.title}</h4>
                        </div>
                      </div>

                      {/* mobile Learn More badge */}
                      <div className="ml-3 flex items-center md:hidden">
                        <span className="inline-flex items-center px-3 py-2 rounded-md text-sm font-medium bg-white text-rose-600 shadow whitespace-nowrap">
                          Learn More
                        </span>
                      </div>
                    </div>

                    {/* Desktop hover content */}
                    <div className="mt-auto pt-4">
                      <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-400">
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            window.location.href = "/services";
                          }}
                          className="hidden md:inline-flex items-center whitespace-nowrap px-4 py-2 rounded-md text-sm font-medium bg-white text-rose-600 shadow hover:scale-105 transition"
                        >
                          Learn More →
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="absolute left-4 right-4 bottom-4 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent z-0" />
                </article>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  </div>

  {/* IntersectionObserver for this section — put inside JSX so it executes on render */}
  <script
    // eslint-disable-next-line react/no-danger
    dangerouslySetInnerHTML={{
      __html: `
(function () {
  try {
    if (typeof window === 'undefined' || !document) return;
    const container = document.getElementById('services-grid');
    const leftCol = document.getElementById('services-left');
    if (!container || !leftCol) return;

    const cards = Array.from(container.querySelectorAll('.svc-reveal'));
    if (!cards.length) return;

    // IntersectionObserver triggers the entrance once
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        // reveal left column first (small stagger)
        Array.from(leftCol.querySelectorAll('.svc-reveal')).forEach((el, i) => {
          setTimeout(() => el.classList.add('svc-visible'), i * 80);
        });

        // reveal cards with alternate left / right + stagger
        cards.forEach((card, i) => {
          // only animate actual service cards (not the left column elements)
          const isCard = card.closest('#services-grid') !== null;
          if (!isCard) return;
          const animClass = (i % 2 === 0) ? 'svc-from-left' : 'svc-from-right';
          card.classList.add(animClass);
          setTimeout(() => card.classList.add('svc-visible'), 200 + i * 120);
        });

        obs.unobserve(entry.target); // run once
      });
    }, { threshold: 0.15, root: null, rootMargin: '0px' });

    io.observe(container);
  } catch (e) {
    // fail silently; page still usable
    console.warn('Services reveal init failed', e);
  }
})();
`,
    }}
  />
</section>





















      {/* footer-ish black callout */}
      <section className="bg-black text-white py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 flex items-center justify-center bg-red-600 rounded-full shadow-md flex-shrink-0">
              <Award className="w-5 h-5 text-white" aria-hidden="true" focusable="false" />
            </div>
            <div className="leading-snug">
              <p className="text-sm md:text-base font-semibold opacity-95">Printing Excellence, Lasting Impressions</p>
              <p className="text-sm md:text-base opacity-80">At Sigma Design, we ensure effective communication and memorable brand experiences.</p>
            </div>
          </div>

          <Link
            href="/contact"
            className="contact-btn px-6 py-2 bg-[#f0414f] hover:bg-red-700 text-white rounded-md text-sm font-semibold shadow-md transition flex items-center gap-2"
            aria-label="Contact us"
          >
            Contact Us
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" focusable="false">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7-7l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>


      {/* Precision printing hero */}
      <section className="relative w-full h-[60vh] md:h-[70vh] bg-cover bg-center bg-no-repeat flex items-center justify-center mt-10 overflow-hidden" style={{ backgroundImage: "url('/liquid1.png')" }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div ref={precisionRef} className="relative z-10 text-center px-6 max-w-3xl mx-auto reveal-precision reveal" data-anim="up" style={{ transitionDelay: "80ms" }}>
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">Precision Printing for Impactful Impressions <br /> and Lasting Quality</h2>
        </div>
      </section>

      {/* Auto-Sliding Image Carousel */}
      <section className="w-full bg-white py-10 overflow-hidden">
        <div className="relative flex gap-6 animate-scroll whitespace-nowrap">
          {[0, 1].map((loopIndex) => (
            <div key={loopIndex} className="flex gap-6">
              {[
                "/3.webp",
                "/5.webp",
                "/16 (1).webp",
                "/14.webp",
                "/1.webp",
                "/9.webp",
                "/10.webp",
                "/16.webp",
                "/2.webp",
              ].map((src, i) => (
                <img
                  key={`${loopIndex}-${i}`}
                  src={src}
                  alt={`Slide ${i + 1}`}
                  onClick={() => openImage(src)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Open image ${i + 1}`}
                  onKeyDown={(e) => handleImageKey(e, src)}
                  className="h-48 rounded-lg shadow-lg object-cover cursor-pointer hover:scale-105 transition"
                />
              ))}
            </div>
          ))}
        </div>
      </section>
      

      {/* IMAGE POPUP / LIGHTBOX */}
      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={closeImage}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
        >
          <img
            src={selectedImage}
            alt="Enlarged"
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-2xl animate-zoom"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
