"use client";

import React, { useState, useEffect, useRef } from "react";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import {
  ArrowRight,
  Printer,
  Palette,
  Zap,
  Layers,
  FileText,
  CreditCard,
  Award,
} from "lucide-react";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const servicesRef = useRef<HTMLDivElement | null>(null);

  const openImage = (src: string) => {
    setSelectedImage(src);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  // INFO SECTION reveal observer
  const infoRef = useRef<HTMLDivElement | null>(null);

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
            // optional: unobserve after reveal for performance
            observer.unobserve(el);
          }
        });
      },
      { root: null, rootMargin: "0px", threshold: 0.25 }
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  // ABOUT SECTION reveal
  const aboutRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = aboutRef.current;
    if (!root || typeof window === "undefined") return;

    const items = Array.from(root.querySelectorAll<HTMLElement>(".reveal-about"));
    if (!items.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // PRECISION PRINTING section reveal
  const precisionRef = useRef<HTMLDivElement | null>(null);

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

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* -------------------------------- HERO SECTION (full-bleed BG; centered inner content) -------------------------------- */}
      <section
        className="relative w-full h-[100vh] bg-cover bg-center bg-no-repeat flex items-center"
        style={{
          backgroundImage: "url('/graphic.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        {/* full-bleed overlays (stay outside container) */}
        <div className="absolute inset-0 bg-[rgba(185,25,40,0.72)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />

        {/* centered content -- same gutter as other sections */}
        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 md:pt-20 lg:pt-24">
            <h1
              className="text-white leading-[1.0] text-[46px] sm:text-[70px] md:text-[90px] lg:text-[110px] font-semibold mb-3"
            >
              <span className="block animate-fade-up" style={{ animationDelay: "0.20s" }}>
                Wellcome to
              </span>
              <span className="block animate-fade-up" style={{ animationDelay: "0.50s" }}>
                Sigma Graphics
              </span>
            </h1>

            <p className="mt-3 text-white/90 text-lg max-w-xl animate-fade-up" style={{ animationDelay: "0.85s" }}>
              Where Creativity meets Precision
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact">
                <button
                  className="btn-slide rounded border border-white px-6 py-3 text-white hover:text-white transition relative animate-pop-in"
                  style={{ animationDelay: "1.20s" }}
                >
                  CONTACT US
                </button>
              </Link>

              <Link href="/how-it-works">
                <button
                  className="btn-slide rounded bg-white px-6 py-3 text-black hover:text-white transition relative animate-pop-in"
                  style={{ animationDelay: "1.40s" }}
                >
                  HOW IT WORKS
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* service-cards (absolute but centered) */}
        <div className="absolute inset-x-0 -bottom-30 z-30 flex justify-center pointer-events-none">
          <div className="w-full max-w-7xl px-6 lg:px-8 pointer-events-auto">
            <div className="bg-transparent px-2 py-6 rounded-xl">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
                {[
                  { title: "Printing Service", img: "/114.webp", icon: Printer },
                  { title: "Graphic Design", img: "/1337.webp", icon: Zap },
                  { title: "Branding and Identity", img: "/fractal.webp", icon: Layers },
                  { title: "Stationery Design", img: "/inspiration.webp", icon: Palette },
                  { title: "Digital Graphics", img: "/bank-phrom.webp", icon: FileText },
                  { title: "Label & Stickers", img: "/social-media.webp", icon: CreditCard },
                ].map((svc, idx) => {
                  const Icon = svc.icon;
                  return (
                    <Link key={idx} href="/services" className="group block">
                      <article
                        className="
                          relative h-40 w-full overflow-hidden rounded-lg border border-gray-100
                          bg-white shadow-sm transform opacity-0 translate-y-6
                          transition-all duration-700 ease-out
                          group-hover:-translate-y-1 group-hover:shadow-[0_10px_25px_rgba(0,0,0,0.45)]
                          animate-card-enter
                        "
                      >
                        <div
                          className="
                            absolute inset-0 pointer-events-none z-10
                            -translate-y-full group-hover:translate-y-0
                            transition-transform duration-500 ease-out
                          "
                        >
                          <div className="absolute inset-0 bg-gradient-to-b from-red-600/80 to-red-600/20" />
                        </div>

                        <div
                          className="
                            absolute inset-0 bg-cover bg-center scale-105
                            opacity-0 group-hover:opacity-100 group-hover:blur-[1px]
                            transition-all duration-500
                            z-0
                          "
                          style={{ backgroundImage: `url(${svc.img})` }}
                        />

                        <div className="absolute top-0 left-0 right-0 h-[70%] flex items-center justify-center z-20">
                          <div className="w-16 h-16 rounded-md flex items-center justify-center bg-white transition-colors duration-300 group-hover:bg-transparent">
                            <Icon className="w-8 h-8 text-red-600 group-hover:text-white transition-colors duration-300" />
                          </div>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 h-[30%] flex items-center justify-center z-20">
                          <div className="w-full h-full flex items-center justify-center bg-white transition-colors duration-300 group-hover:bg-red-600">
                            <div className="text-sm font-semibold text-gray-800 group-hover:text-white transition-colors duration-300">
                              {svc.title}
                            </div>
                          </div>
                        </div>

                        <div className="absolute bottom-0 left-6 right-6 h-1 rounded-sm bg-black/90 z-0 translate-y-2"></div>
                      </article>
                    </Link>
                  );
                })}
                {/* SMALL VIEW MORE BUTTON — centered & slightly lower */}


              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------- RESPONSIVE + ANIMATED INFO SECTION (full-bleed bg pattern, centered content) ----------------------- */}
      <section className="relative overflow-hidden pt-6 mt-40">
        {/* full-bleed pattern */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            backgroundColor: "#f0414f",
            backgroundImage: `url("data:image/svg+xml;utf8,${encodeURIComponent(
              `<svg xmlns='http://www.w3.org/2000/svg' width='60' height='52'><polygon points='30,0 60,15 60,45 30,60 0,45 0,15' stroke='rgba(255,255,255,0.06)' fill='none' stroke-width='1'/></svg>`
            )}")`,
            backgroundRepeat: "repeat",
            zIndex: 0,
          }}
        />

        {/* top drip svg */}
        <svg className="absolute top-0 left-0 w-full pointer-events-none" viewBox="0 0 1440 140" preserveAspectRatio="none" style={{ zIndex: 5 }} aria-hidden="true">
          <path fill="#ffffff" d="M0,40 C60,10 120,60 240,40 C360,20 420,10 540,40 C660,70 720,40 840,40 C960,40 1020,70 1140,40 C1260,10 1320,60 1440,40 L1440,0 L0,0 Z" />
          <g fill="#ffffff" transform="translate(0,20)">
            <ellipse cx="120" cy="40" rx="22" ry="40" />
            <ellipse cx="420" cy="45" rx="18" ry="36" />
            <ellipse cx="720" cy="38" rx="28" ry="48" />
            <ellipse cx="1020" cy="44" rx="16" ry="32" />
            <ellipse cx="1320" cy="46" rx="20" ry="38" />
          </g>
        </svg>

        {/* decorative blur blobs */}
        <div className="absolute -top-24 -left-20 w-96 h-96 rounded-full opacity-40 pointer-events-none" style={{ background: "linear-gradient(135deg,#ff7b7f,#ffb8c3)", filter: "blur(80px)", zIndex: 1 }} />
        <div className="absolute -bottom-24 -right-20 w-96 h-96 rounded-full opacity-32 pointer-events-none" style={{ background: "linear-gradient(135deg,#ff6a6f,#ffb8c3)", filter: "blur(80px)", zIndex: 1 }} />

        {/* centered content wrapper */}
        <div ref={infoRef} className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* LEFT: image (reveal item 0) */}
            <div className="lg:col-span-6 flex items-start">
              <div
                data-index="0"
                className="reveal w-full max-w-lg rounded-xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-[1.02]"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 pointer-events-none" />
                  <img
                    src="/humaneye.webp"
                    alt="Featured — Sigma Graphics preview"
                    className="w-full h-[320px] md:h-[420px] object-cover will-change-transform"
                    style={{ transform: "translateZ(0)", transition: "transform 450ms ease" }}
                  />
                  <div className="absolute -right-8 -bottom-8 bg-white/6 backdrop-blur rounded-lg p-3 text-xs font-medium text-white/90 shadow-lg transform rotate-3">
                    Premium Print Samples
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: copy card (reveal item 1) */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div
                data-index="1"
                className="reveal rounded-2xl p-6 md:p-12"
                style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))", border: "1px solid rgba(255,255,255,0.08)", backdropFilter: "saturate(140%) blur(6px)" }}
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-3">
                  Welcome to Sigma Graphics
                </h2>

                <div className="w-24 h-1 bg-white/30 mb-6 rounded" />

                <p className="text-white/90 mb-6 max-w-xl leading-relaxed">
                  We combine creativity with precision to bring your ideas to life. From eye-catching graphics to high-quality prints, Sigma Graphics is your trusted partner for design and production.
                </p>

                <div className="flex gap-4">
                  <a href="/about" className="inline-flex items-center px-6 py-3 border border-white/30 text-white rounded-md hover:bg-white/8 transition" aria-label="Read more about Sigma Graphics">
                    Read More
                  </a>
                  
                </div>
              </div>
            </div>
          </div>

          {/* SIGMA row - each item will reveal with a small stagger */}
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
                data-index={i + 2} /* continue stagger indexes after main two reveals */
                className="reveal p-4 rounded-xl border border-transparent hover:border-white/20 transition transform hover:-translate-y-1 hover:scale-[1.01] bg-gradient-to-b from-white/3 to-transparent"
                style={{ boxShadow: "0 6px 18px rgba(0,0,0,0.25)" }}
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
        <svg className="absolute bottom-0 left-0 w-full pointer-events-none" viewBox="0 0 1440 160" preserveAspectRatio="none" style={{ zIndex: 5 }} aria-hidden="true">
          <path fill="#ffffff" d="M0,120 C80,90 160,120 280,120 C400,120 480,80 600,120 C720,160 800,120 920,120 C1040,120 1120,160 1240,120 C1360,80 1440,120 1440,160 L0,160 Z" />
          <g fill="#ffffff" transform="translate(0,80)">
            <ellipse cx="160" cy="48" rx="20" ry="36" />
            <ellipse cx="420" cy="38" rx="22" ry="42" />
            <ellipse cx="720" cy="52" rx="30" ry="48" />
            <ellipse cx="1060" cy="45" rx="18" ry="34" />
          </g>
        </svg>
      </section>






      {/* ============= ABOUT SECTION (clean + animated) ============= */}
      <section className="relative py-10 bg-white overflow-hidden">
        <div ref={aboutRef} className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* LEFT IMAGES (reveal-about index 0) */}
            <div data-index="0" className="reveal-about lg:col-span-6">
              <div className="relative w-full">
                <div className="rounded-2xl overflow-hidden shadow-xl transform transition-all duration-500 hover:scale-[1.02]">
                  <img src="/about.jpg" alt="About Sigma Graphics" className="w-full h-[340px] md:h-[420px] object-cover" />
                </div>

                <div className="grid grid-cols-2 gap-5 mt-6">
                  <div className="rounded-xl overflow-hidden shadow-xl transform hover:-translate-y-1 transition-all duration-500">
                    <img src="/about-6.jpg" alt="Team" className="w-full h-[150px] object-cover" />
                  </div>

                  <div className="rounded-xl overflow-hidden shadow-xl transform hover:-translate-y-1 transition-all duration-500">
                    <img src="/about-7.jpg" alt="Printing" className="w-full h-[150px] object-cover" />
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT TEXT CONTENT (reveal-about index 1) */}
            <div data-index="1" className="reveal-about lg:col-span-6">
              <div className="p-8 lg:p-10 rounded-2xl shadow-lg border border-gray-200 bg-white">
                <p className="text-xs tracking-[0.2em] uppercase text-red-600 mb-3">
                  Unveiling the Essence
                </p>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-5 leading-tight">
                  About Us
                </h2>

                <p className="text-gray-700 text-base leading-relaxed mb-6">
                  Welcome to <span className="font-semibold">Sigma Graphics</span>, where creativity meets precision.
                  With years of experience, we bring your ideas to life with premium design and flawless print quality.
                </p>

                <p className="text-gray-700 text-base leading-relaxed mb-8">
                  Whether you're growing your brand or launching a project, we are your trusted partner
                  for impactful visual experiences.
                </p>

                {/* replace the old <a href="/about" ...>Read More</a> with this */}
<a
  href="/about"
  className="read-more-btn inline-flex items-center gap-1 px-3 py-1 text-xs bg-[#f0414f] text-white font-medium rounded-md shadow hover:bg-red-600 transition-all duration-300"
>
  Read More
  <svg
    className="w-3 h-3 ml-1 flex-none"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path d="M5 12h14" />
    <path d="M13 5l7 7-7 7" />
  </svg>
</a>



              </div>
            </div>
          </div>
        </div>
      </section>











      <section className="bg-black text-white py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            {/* ICON */}
            <div className="w-10 h-10 flex items-center justify-center bg-red-600 rounded-full shadow-md flex-shrink-0">
              <Award className="w-5 h-5 text-white" />
            </div>

            {/* TWO LINES OF TEXT */}
            <div className="leading-snug">
              <p className="text-sm md:text-base font-semibold opacity-95">
                Printing Excellence, Lasting Impressions
              </p>
              <p className="text-sm md:text-base opacity-80">
                At Sigma Design, we ensure effective communication and memorable brand experiences.
              </p>
            </div>
          </div>

         <Link href="/contact">
  <button className="contact-btn px-6 py-2 bg-[#f0414f] hover:bg-red-700 text-white rounded-md text-sm font-semibold shadow-md transition flex items-center gap-2">
    Contact Us
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7-7l7 7-7 7" />
              </svg>
            </button>
          </Link>
        </div>
      </section>

      {/* Precision Printing Section (animated) */}
      <section
        className="relative w-full h-[60vh] md:h-[70vh] bg-cover bg-center bg-no-repeat flex items-center justify-center mt-10 overflow-hidden"
        style={{ backgroundImage: "url('/liquid1.png')" }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Centered Text (animated) */}
        <div ref={precisionRef} className="relative z-10 text-center px-6 max-w-3xl mx-auto reveal-precision">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
            Precision Printing for Impactful Impressions <br />
            and Lasting Quality
          </h2>
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
