'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    { title: "Graphic Design", text: "Our team of experienced designers will work closely with you to create captivating and effective designs that communicate your message and enhance your brand identity.", img: "/inspiration.webp" },
    { title: "Printing Services", text: "From business cards to banners, flyers to brochures, we offer a wide range of printing options to suit your needs. With state-of-the-art technology and high-quality materials.", img: "/114.webp" },
    { title: "Stationery Design", text: "Elevate your professional image with custom-designed stationery, including letterheads, envelopes, and notepads, that reflect your brand identity and attention to detail.", img: "/1337.webp" },
    { title: "Digital Graphics", text: "From website graphics to social media graphics and digital advertisements, we’ll help you create visually engaging digital assets that attract attention and drive engagement.", img: "/bank-phrom.webp" },
    { title: "Label & Stickers", text: "In addition to standard printing services, we offer specialty printing options such as labels, stickers, packaging, and more, to help you stand out from the crowd.", img: "/fractal.webp" },
    { title: "Branding and Identity", text: "Let us help you establish a strong brand identity with our branding and identity services. From logo design to brand guidelines, we'll help you create a cohesive and memorable brand image.", img: "/social-media.webp" },
    { title: "Personalized Items", text: "Make a lasting impression with personalized items such as T-shirts, mugs, pens, and more, featuring your logo or design.", img: "/personalized.webp" },
    { title: "Invitations & Banners", text: "Elegant wedding invites to vibrant party banners, our designs captivate and set the tone for memorable occasions.", img: "/invitation.webp" },
    { title: "Illustration", text: "Add a touch of creativity to your projects with custom illustrations that bring your ideas to life in vibrant detail.", img: "/ilustration.webp" },
    { title: "Presentation Design", text: "Engage your audience with professionally designed presentations that communicate your message clearly and creatively.", img: "/presentation.webp" },
    { title: "Website Development", text: "We transform your ideas into dynamic websites. From sleek designs to seamless functionality, we build it all.", img: "/website.webp" },
    { title: "Search Engine Optimization (SEO)", text: "Boost your visibility with strategic keyword targeting, content optimization, and technical enhancements.", img: "/seo.webp" },
  ];

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            el.classList.add('in-view');
            observer.unobserve(el); // play once
          }
        });
      },
      { root: null, rootMargin: '0px', threshold: 0.12 }
    );

    document.querySelectorAll('.service-card').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <section
        className="relative w-full h-[60vh] md:h-[75vh] lg:h-[78vh] overflow-hidden bg-local md:bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url('/services.jpg')` }}
        aria-label="Services hero"
      >
       <style>{`
  /* Slow fade-up used globally */
  @keyframes fadeUpSlow {
    0% { opacity: 0; transform: translateY(18px) scale(0.98); }
    100% { opacity: 1; transform: translateY(0) scale(1); }
  }

  /* Cards hidden initially */
  .service-card {
    opacity: 0;
    transform: translateY(18px) scale(0.98);
    will-change: transform, opacity;
  }

  .service-card.in-view {
    animation-name: fadeUpSlow;
    animation-duration: 1000ms; 
    animation-timing-function: cubic-bezier(.16,.84,.24,1);
    animation-fill-mode: forwards;
    animation-delay: var(--delay, 0ms);
  }

  /* HERO animations */
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
    .service-card, .service-card.in-view,
    .hero-title, .hero-subtext {
      animation: none !important;
      opacity: 1 !important;
      transform: none !important;
    }
  }

  /* ⭐ Hover Reveal for Card Description ⭐ */
  .card-desc {
    position: relative;
    overflow: hidden;
  }

  .card-desc::before {
    content: "";
    position: absolute;
    inset: 0;
    background: white;
    transform: translateY(-100%);
    transition: transform 0.45s ease;
    z-index: 0;
  }

  .card-desc:hover::before {
    transform: translateY(0);
  }

  .card-desc * {
    position: relative;
    z-index: 1;
  }
    /* Make text readable when the white overlay slides in */
.card-desc h3,
.card-desc p {
  transition: color 260ms ease, transform 260ms ease;
}

/* switch text to dark when overlay is visible (hover) */
.card-desc:hover h3,
.card-desc:hover p {
  color: #111; /* dark text on white */
}

/* small lift for a nicer effect (optional) */
.card-desc:hover h3 {
  transform: translateY(-2px);
}

/* Respect prefers-reduced-motion */
@media (prefers-reduced-motion: reduce) {
  .card-desc h3,
  .card-desc p {
    transition: none;
    transform: none;
  }
}
  

`
}</style>


        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-red-600/65 via-red-600/50 to-red-600/35" style={{ mixBlendMode: 'multiply' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 h-full flex items-center justify-center">
          <div className="text-center text-white max-w-3xl">
            <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
Our Services</h1>
            <p className="hero-subtext mt-4 text-base md:text-lg text-white/90">
Comprehensive printing and design solutions</p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] pointer-events-none">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[80px] md:h-[100px] lg:h-[120px] block" aria-hidden>
            <path d="M0,0 C150,80 350,80 600,40 C850,0 1050,0 1200,60 L1200,120 L0,120 Z" fill="#faf5f4" />
          </svg>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="pt-2 md:pt-4 pb-20 md:pb-24 bg-[#f7f7f9]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs md:text-sm tracking-[0.2em] uppercase" style={{ color: "#f0414f" }}>Why we&apos;re the best</p>
            <p className="mt-4 max-w-2xl mx-auto text-sm md:text-base text-gray-600">Sigma Graphics offers a comprehensive range of printing and graphic design services to meet all your needs. Our services include</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <article
                key={service.title}
                className="service-card bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full"
                style={{ ['--delay' as any]: `${idx * 220}ms` }} /* <-- larger stagger (slower) */
              >
                <div className="img-wrap h-44 md:h-48 w-full relative overflow-hidden rounded-t-xl flex-shrink-0">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover block" loading="lazy" />
                </div>

                <div className="p-5 mt-auto card-desc" style={{ backgroundColor: "#f0414f" }}>

                  <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-sm text-white leading-relaxed">{service.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ADDITIONAL SERVICES */}
     <section
  className="pt-10 md:pt-16 pb-20 md:pb-24 backdrop-blur-sm"
  style={{ backgroundColor: "rgba(240,240,240,0.55)" }}
>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs md:text-sm tracking-[0.2em] uppercase text-black">More Options For You</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-semibold text-black">Additional Services</h2>
            <p className="mt-4 max-w-2xl mx-auto text-sm md:text-base text-[#f0414f]">Expand your possibilities with our extended range of creative and digital services.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Invitation Cards and Visiting Cards", text: "Make a lasting impression with our elegantly designed invitation cards and professional visiting cards. From weddings to business meetings, our premium cards speak volumes about your style and professionalism.", img: "/invitationcards.webp" },
              { title: "Letterheads & Receipt Books", text: "Elevate your correspondence with our custom-designed letterheads and streamline your transactions with personalized receipt books. Impress clients and customers with every interaction", img: "/letterheads.webp" },
              { title: "Pamphlets / Flyers / Flex Banners", text: "Stand out from the crowd with our eye-catching pamphlets, flyers, and flex banners. Whether you're promoting an event or advertising your business, our vibrant designs and high-quality printing ensure maximum impact and visibility.", img: "/pamphlets.webp" },
              { title: "Mementos, Certificates & Frames", text: "Commemorate special moments with our exquisite mementos, certificates, and frames. Celebrate achievements, honor milestones, and create cherished memories. Perfect for schools, events, and personal celebrations.", img: "/Mementos.webp" },
              { title: "ID Cards & School Stationery", text: "Keep your school or organization running smoothly with our reliable ID cards and school stationery. From student IDs to official documents, our products are designed to meet your specific needs.", img: "/idcards.webp" },
              { title: "Obituary & Memorial Cards", text: "Honor the memory of your loved ones with our heartfelt obituary and memorial cards. Thoughtfully designed and personalized, our cards offer a dignified way to pay tribute and provide comfort during difficult times.", img: "/obituary.webp" },
            ].map((service, idx) => (
              <article
                key={service.title}
                className="service-card bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 flex flex-col h-full"
                style={{ ['--delay' as any]: `${(idx + 6) * 220}ms` }}
              >
                <div className="img-wrap h-44 md:h-48 w-full relative overflow-hidden rounded-t-xl flex-shrink-0">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover block" loading="lazy" />
                  <div className="absolute bottom-0 left-0 w-full h-1" style={{ backgroundColor: "#f0414f" }} />
                </div>

                <div className="p-5 mt-auto card-desc" style={{ backgroundColor: "#f0414f" }}>

                  <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-sm text-white leading-relaxed">{service.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>



{/* FINAL CONTACT SECTION */}
{/* CONTACT — Modern Centered Design (single block, no right side) */}
<section className="relative py-20 bg-white overflow-hidden" aria-labelledby="contact-heading-modern">
  <style>{`
    /* Background wave */
    .contact-wave-top {
      position:absolute;
      top:-2px; left:0;
      width:100%; height:90px;
      pointer-events:none;
      z-index:1;
    }

    /* Decorative blobs */
    .blob-a, .blob-b {
      position:absolute;
      width:230px; height:230px;
      border-radius:50%;
      filter: blur(30px);
      opacity:0.55;
      pointer-events:none;
      z-index:0;
    }
    .blob-a {
      background:#ffb3bb;
      top:20%; left:-6%;
      transform:rotate(-12deg);
    }
    .blob-b {
      background:#ffd6da;
      bottom:18%; right:-6%;
      transform:rotate(9deg);
    }

    /* Central card */
    .contact-center {
      position:relative;
      z-index:10;
      max-width:780px;
      margin:0 auto;
      text-align:center;
      background:#ffffffee;
      padding:48px 32px;
      border-radius:18px;
      box-shadow:0 18px 48px rgba(0,0,0,0.07);
      border:1px solid rgba(0,0,0,0.035);
      backdrop-filter:blur(4px);
    }

    .eyebrow {
      font-size:12px;
      font-weight:700;
      color:#f0414f;
      text-transform:uppercase;
      letter-spacing:.14em;
      margin-bottom:10px;
    }

    .contact-title {
      font-size:clamp(1.8rem, 3vw, 2.6rem);
      font-weight:800;
      margin:0 0 14px;
      color:#0f1724;
      line-height:1.08;
    }

    .contact-sub {
      margin:0 auto 24px;
      color:#475569;
      font-size:1.05rem;
      max-width:620px;
      line-height:1.65;
    }

    .contact-cta {
      display:inline-flex;
      align-items:center;
      justify-content:center;
      padding:14px 34px;
      border-radius:999px;
      font-weight:700;
      font-size:1rem;
      background:linear-gradient(180deg,#ff6b7a,#f0414f);
      color:white;
      text-decoration:none;
      box-shadow:0 12px 30px rgba(240,65,79,0.18);
      transition:transform .18s ease, box-shadow .18s ease;
    }
    .contact-cta:hover {
      transform:translateY(-3px);
      box-shadow:0 18px 40px rgba(240,65,79,0.24);
    }

    /* floating circles */
    .float-dot {
      position:absolute;
      width:14px; height:14px;
      border-radius:50%;
      background:#f0414f;
      opacity:0.75;
      z-index:12;
      animation: bob 4s ease-in-out infinite;
    }
    .float-dot.d1 { top:14%; left:20%; animation-delay:0s; }
    .float-dot.d2 { top:32%; right:18%; animation-delay:1.2s; }
    .float-dot.d3 { bottom:20%; left:42%; animation-delay:2.1s; }

    @keyframes bob {
      0% { transform:translateY(0); }
      50% { transform:translateY(-9px); }
      100% { transform:translateY(0); }
    }

    @media (max-width:768px){
      .contact-center { padding:36px 22px; }
      .float-dot { display:none; }
      .blob-a,.blob-b { display:none; }
    }

    @media (prefers-reduced-motion:reduce){
      .float-dot { animation:none !important; }
    }
  `}</style>

  {/* wave connection */}
  <div className="contact-wave-top" aria-hidden>
    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full block">
      <path d="M0,0 C150,80 350,80 600,40 C850,0 1050,0 1200,60 L1200,120 L0,120 Z" fill="#ffffff"/>
    </svg>
  </div>

  {/* background blobs */}
  <div className="blob-a" aria-hidden></div>
  <div className="blob-b" aria-hidden></div>

  {/* floating dots */}
  <span className="float-dot d1" aria-hidden></span>
  <span className="float-dot d2" aria-hidden></span>
  <span className="float-dot d3" aria-hidden></span>

  {/* center content */}
  <div className="contact-center">
    <div className="eyebrow">More Options For You</div>
    <h2 id="contact-heading-modern" className="contact-title">
      Let’s create something amazing together! Sigma Graphics
    </h2>
    <p className="contact-sub">
      From printing to branding and creative design solutions — our team is ready to help bring your ideas to life. Start your project with us today.
    </p>

    <a href="/contact" className="contact-cta">
      Contact Us
    </a>
  </div>
</section>











      
    </div>
  );
}
