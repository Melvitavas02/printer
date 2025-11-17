'use client';

import React, { useMemo, useState } from 'react';

const ITEMS = [
  // WEBSITES
  {
    id: 1,
    title: 'MSG Oilfield',
    category: 'websites',
    thumb: '/w1.png', // put image in public/portfolio/
    description: 'Material Solutions Grid',
    url: 'https://www.msgoilfield.com/',
  },
  {
    id: 2,
    title: 'Niagra Woodworks',
    category: 'websites',
    thumb: '/w7.PNG',
    description: 'Carpentry & wood solutions',
    url: 'https://www.niagrauae.com/',
  },

  // NEW websites items (added)
  {
    id: 3,
    title: 'Zyva Interiors',
    category: 'websites',
    thumb: '/w3.png',
    description: 'Interior design & architecture site',
    url: 'https://zyvawaterdxb.ae/',
  },
  {
    id: 4,
    title: 'BEDIA',
    category: 'websites',
    thumb: '/w4.png',
    description: 'POTTERY',
    url: 'https://bediapottery.ae/',
  },
{
    id: 5,
    title: 'AGRIMOUNT',
    category: 'websites',
    thumb: '/w5.png',
    description: 'SPICES',
    url: 'https://agrimount.ae/',
  },
  {
    id: 6,
    title: 'SABACOUA',
    category: 'websites',
    thumb: '/w6.png',
    description: ' building material',
    url: 'https://sabacouae.ae/',
  },
  // MAJOR CLIENTS
  // replace the existing client entries (id: 10, 11, 12, ...) with these
{
  id: 10,
  title: 'Infinity Tours',
  category: 'clients',
  thumb: '/Logo-Infinity.webp', // put Logo-Infinity.webp into public/portfolio/
  description: 'Travel & Tours branding',
  
},
{
  id: 11,
  title: 'Pen & Inc',
  category: 'clients',
  thumb: '/PENINC.webp', // put PENINC.webp into public/portfolio/
  description: 'Creative studio branding',
  
},
{
  id: 12,
  title: 'NJ Group',
  category: 'clients',
  thumb: '/NJ-Group.webp', // put NJ-Group.webp into public/portfolio/
  description: 'Corporate identity',
  
},
{
  id: 13,
  title: 'Client Extra',
  category: 'clients',
  thumb: '/image012.webp', // put image012.webp into public/portfolio/
  description: 'Additional client logo',
  
},


  // BROCHURE / PDF
  
];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<'websites' | 'clients' | 'brochure'>('websites');

  const filtered = useMemo(() => ITEMS.filter((it) => it.category === activeTab), [activeTab]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HERO — same design as Contact Us */}
      <section
        className="relative w-full h-[60vh] md:h-[75vh] lg:h-[78vh] overflow-hidden bg-local md:bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url('/portfolio.jpg')` }}
        aria-label="Portfolio hero"
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

        {/* Red Overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(240,65,79,0.75), rgba(240,65,79,0.65))',
            mixBlendMode: 'multiply',
          }}
        />

        {/* Center Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 h-full flex flex-col items-center justify-center text-center">
          <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white">
            Our Portfolio
          </h1>
          <p className="hero-subtext mt-4 text-base md:text-lg text-white/90">
            Showcase of our best work and client projects
          </p>
        </div>

        {/* Curved bottom shape */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] pointer-events-none">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[80px] md:h-[100px] lg:h-[120px] block" aria-hidden>
            <path d="M0,0 C150,80 350,80 600,40 C850,0 1050,0 1200,60 L1200,120 L0,120 Z" fill="#faf5f4" />
          </svg>
        </div>
      </section>

      {/* --- SECOND SECTION: TABS + FILTERED GRID --- */}
      {/* --- SECOND SECTION: TABS + STACKED IMAGES (replace only this section) --- */}
{/* --- SECOND SECTION: TABS + BEAUTIFIED VIEWS (replace only this section) --- */}
{/* --- SECOND SECTION: PREMIUM TABS + WEBSITE / CLIENT VIEWS (Replace only this section) --- */}
{/* --- SECOND SECTION: premium + readable red overlay on hover (replace only this section) --- */}
<section
  className="py-16 md:py-24"
  style={{
    background:
      'linear-gradient(180deg, rgba(250,245,244,1) 0%, rgba(250,245,244,0.98) 30%, rgba(255,255,255,1) 100%)',
    marginTop: '-2px',
  }}
>
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    {/* Tabs */}
    <div className="flex flex-col items-center gap-3">
      <div className="flex items-center gap-4 justify-center">
        <button
          onClick={() => setActiveTab('websites')}
          className={`px-6 py-2 rounded-full text-sm md:text-base font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
            activeTab === 'websites'
              ? 'bg-black text-white shadow-lg'
              : 'bg-white text-gray-700 border border-border hover:shadow-sm'
          }`}
        >
          Websites
        </button>

        <button
          onClick={() => setActiveTab('clients')}
          className={`px-6 py-2 rounded-full text-sm md:text-base font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
            activeTab === 'clients'
              ? 'bg-black text-white shadow-lg'
              : 'bg-white text-gray-700 border border-border hover:shadow-sm'
          }`}
        >
          Our Major Clients
        </button>

        <button
          onClick={() => setActiveTab('brochure')}
          className={`px-6 py-2 rounded-full text-sm md:text-base font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
            activeTab === 'brochure'
              ? 'bg-black text-white shadow-lg'
              : 'bg-white text-gray-700 border border-border hover:shadow-sm'
          }`}
        >
          Brochure
        </button>
      </div>

      {/* animated underline */}
      <div className="relative w-full max-w-3xl mt-4 h-4">
        <div className="absolute left-0 right-0 top-2 h-[1px] bg-border/50" />
        <div
          aria-hidden
          className="absolute top-0 h-1 rounded-full bg-[#f0414f] transition-all duration-300"
          style={{
            width: Math.min(240, (filtered.length || 1) * 42),
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        />
      </div>
    </div>

    {/* Content area */}
    <div className="mt-10">
      {/* WEBSITES: premium card stack */}
      {activeTab === 'websites' && (
        <div className="flex flex-col gap-8">
          {filtered.map((it) => (
            <article
              key={it.id}
              className="relative group overflow-hidden grid grid-cols-1 md:grid-cols-[360px_1fr] gap-6 items-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-1"
            >
              {/* sliding red overlay (top -> bottom) - reduced opacity so content still shows */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"
                style={{ background: 'linear-gradient(180deg, rgba(240,65,79,0.62), rgba(240,65,79,0.55))' }}
              />

              {/* image panel */}
              <div className="w-full h-44 md:h-36 flex items-center justify-center overflow-hidden rounded-xl bg-gray-50 border border-gray-100 relative z-10">
                <img src={it.thumb} alt={it.title} className="w-full h-full object-contain" loading="lazy" />
              </div>

              {/* content (force above overlay and change colors on hover) */}
              <div className="flex flex-col justify-center gap-4 relative z-10">
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-foreground transition-colors duration-300 group-hover:text-white">
                    {it.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground max-w-2xl transition-colors duration-300 group-hover:text-white/90">
                    {it.description}
                  </p>
                </div>

                <div className="flex items-center gap-4 mt-2">
                  <a
                    href={it.url || '#'}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#f0414f] text-white text-xs md:text-sm font-medium shadow-md hover:bg-[#d73845] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 whitespace-nowrap"
                  >
                    Visit site
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                      <path fillRule="evenodd" d="M12.293 3.293a1 1 0 011.414 0L18 7.586V6a1 1 0 112 0v6a1 1 0 01-1 1h-6a1 1 0 110-2h1.586L12.293 8.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      <path d="M3 13a1 1 0 011-1h4a1 1 0 110 2H5v2a1 1 0 11-2 0v-3z" />
                    </svg>
                  </a>

                  <span className="text-sm text-muted-foreground transition-colors duration-300 group-hover:text-white/90">Preview in a new tab</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* CLIENTS: refined logo grid */}
      {activeTab === 'clients' && (
        <>
          

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {filtered.map((it) => (
              <button
                key={it.id}
                onClick={() => it.url && window.open(it.url, '_blank', 'noopener,noreferrer')}
                className="relative group flex flex-col items-center justify-center gap-3 bg-white rounded-lg p-3 border border-gray-100 shadow-sm hover:shadow-lg transition transform hover:-translate-y-1 focus:outline-none overflow-hidden"
                title={it.title}
                aria-label={it.title}
                style={{ minHeight: 88 }}
              >
                {/* sliding overlay */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 -translate-y-full group-hover:translate-y-0 transition-transform duration-450 ease-out"
                  style={{ background: 'linear-gradient(180deg, rgba(240,65,79,0.66), rgba(240,65,79,0.5))' }}
                />

                <div className="w-24 h-16 flex items-center justify-center relative z-10">
                  <img src={it.thumb} alt={it.title} className="max-w-full max-h-full object-contain" loading="lazy" />
                </div>
                <div className="text-xs text-muted-foreground relative z-10 transition-colors duration-300 group-hover:text-white">
                  {it.title}
                </div>
              </button>
            ))}
          </div>

         
        </>
      )}

      {/* BROCHURE (use stacked cards like websites) */}
      {activeTab === 'brochure' && (
        <div className="flex flex-col gap-8">
          {filtered.map((it) => (
            <a
              key={it.id}
              href={it.url || '#'}
              target="_blank"
              rel="noreferrer noopener"
              className="group relative block overflow-hidden rounded-2xl border border-gray-100 bg-gradient-to-b from-white/60 to-gray-50 shadow-md hover:shadow-2xl transition transform hover:-translate-y-1"
              title={it.title}
            >
              {/* overlay */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"
                style={{ background: 'linear-gradient(180deg, rgba(240,65,79,0.62), rgba(240,65,79,0.5))' }}
              />

              <div className="p-6 md:p-8 flex items-center gap-6 relative z-10">
                <div className="w-40 h-32 flex items-center justify-center bg-gray-50 rounded-lg border border-gray-100 overflow-hidden">
                  <img src={it.thumb} alt={it.title} className="w-full h-full object-contain" loading="lazy" />
                </div>

                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-foreground transition-colors duration-300 group-hover:text-white">{it.title}</h4>
                  <p className="mt-1 text-sm text-muted-foreground transition-colors duration-300 group-hover:text-white/90">{it.description}</p>
                </div>

                <div>
                  <span className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-[#f0414f] text-white font-medium">
                    Open Brochure
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  </div>

  {/* accessible transitions */}
  <style jsx>{`
    @media (prefers-reduced-motion: reduce) {
      * {
        transition: none !important;
        transform: none !important;
      }
    }
  `}</style>
</section>



    </div>
  );
} 