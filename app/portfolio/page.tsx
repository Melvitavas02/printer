"use client";

import React, { useMemo, useState } from 'react';

const ITEMS = [
  // MAJOR CLIENTS (kept)
  {
    id: 10,
    title: 'Infinity Tours',
    category: 'clients',
    thumb: '/Logo-Infinity.webp',
    description: 'Travel & Tours branding',
    url: '',
  },
  {
    id: 11,
    title: 'Pen & Inc',
    category: 'clients',
    thumb: '/PENINC.webp',
    description: 'Creative studio branding',
    url: '',
  },
  {
    id: 12,
    title: 'NJ Group',
    category: 'clients',
    thumb: '/NJ-Group.webp',
    description: 'Corporate identity',
    url: '',
  },
  {
    id: 13,
    title: 'Client Extra',
    category: 'clients',
    thumb: '/image012.webp',
    description: 'Additional client logo',
    url: '',
  },
];

export default function Portfolio() {
  const clients = useMemo(() => ITEMS.filter((it) => it.category === 'clients'), []);
  const [selected, setSelected] = useState<number | null>(null);

  // helper to open with keyboard (Enter or Space)
  const activateCard = (e: React.KeyboardEvent | React.MouseEvent, id: number) => {
    if ('key' in (e as any)) {
      const ev = e as React.KeyboardEvent;
      if (ev.key === 'Enter' || ev.key === ' ') {
        ev.preventDefault();
        setSelected(id);
      }
    } else {
      setSelected(id);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HERO — same design */}
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

        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(240,65,79,0.75), rgba(240,65,79,0.65))',
            mixBlendMode: 'multiply',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 h-full flex flex-col items-center justify-center text-center">
          <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white">
            Our Portfolio
          </h1>
          <p className="hero-subtext mt-4 text-base md:text-lg text-white/90">
            Showcase of our best work and client projects
          </p>
        </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] pointer-events-none">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[80px] md:h-[100px] lg:h-[120px] block" aria-hidden="true" focusable="false">
            <path d="M0,0 C150,80 350,80 600,40 C850,0 1050,0 1200,60 L1200,120 L0,120 Z" fill="#faf5f4" />
          </svg>
        </div>
      </section>

      {/* CLIENTS GRID */}
      <section
        className="py-12 md:py-16"
        style={{
          background:
            'linear-gradient(180deg, rgba(250,245,244,1) 0%, rgba(250,245,244,0.98) 30%, rgba(255,255,255,1) 100%)',
          marginTop: '-2px',
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">Our Major Clients</h2>
              <p className="mt-2 text-sm text-muted-foreground max-w-2xl">
                Trusted brands we’ve partnered with. Click a logo to view larger and learn more.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a href="/contact" className="px-4 py-2 border border-gray-200 rounded-md text-sm" aria-label="Contact us">Contact Us</a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {clients.map((c) => (
              <div
                key={c.id}
                onClick={(e) => activateCard(e, c.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => activateCard(e, c.id)}
                className="group bg-white rounded-2xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-2xl transition-transform transform hover:-translate-y-2 cursor-pointer overflow-hidden"
                aria-label={`View ${c.title}`}
                aria-describedby={`client-desc-${c.id}`}
              >
                <div className="w-full flex items-center justify-center">
                  <div className="w-56 h-44 md:w-64 md:h-52 lg:w-72 lg:h-56 flex items-center justify-center bg-gray-50 rounded-lg border border-gray-100 overflow-hidden">
                    <img src={c.thumb} alt={`${c.title} logo`} className="max-w-full max-h-full object-contain" loading="lazy" />
                  </div>
                </div>

                <div className="mt-5">
                  <div id={`client-title-${c.id}`} className="text-lg font-semibold text-foreground">{c.title}</div>
                  <div id={`client-desc-${c.id}`} className="text-sm text-muted-foreground mt-1">{c.description}</div>
                </div>

                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-3" aria-hidden="true">
                  {c.url ? (
                    <a href={c.url} target="_blank" rel="noreferrer" className="text-sm text-[#f0414f] font-medium" aria-label={`Visit ${c.title} site`}>Visit site</a>
                  ) : (
                    <span className="text-sm text-gray-500">No website</span>
                  )}
                  <button
                    onClick={(e) => { e.stopPropagation(); setSelected(c.id); }}
                    className="px-3 py-1 rounded-md border border-gray-200 text-sm"
                    aria-label={`View ${c.title} details`}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setSelected(c.id); } }}
                  >
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX for logo preview */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby={`lightbox-title-${selected}`}
        >
          <div
            className="max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            role="document"
          >
            <div className="p-6 flex items-start justify-between">
              <div>
                <h3 id={`lightbox-title-${selected}`} className="text-lg font-semibold">
                  {clients.find(x => x.id === selected)?.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">{clients.find(x => x.id === selected)?.description}</p>
              </div>
              <div>
                <button
                  onClick={() => setSelected(null)}
                  className="text-sm text-gray-500"
                  aria-label="Close preview"
                >
                  Close
                </button>
              </div>
            </div>

            <div className="bg-gray-50 flex items-center justify-center p-6">
              <img
                src={clients.find(x => x.id === selected)?.thumb}
                alt={`${clients.find(x => x.id === selected)?.title} preview`}
                className="max-w-full max-h-[70vh] object-contain"
              />
            </div>

            <div className="p-4 flex justify-end gap-3">
              {clients.find(x => x.id === selected)?.url ? (
                <a
                  href={clients.find(x => x.id === selected)?.url}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-[#f0414f] text-white rounded-md text-sm"
                  aria-label={`Visit ${clients.find(x => x.id === selected)?.title} site`}
                >
                  Visit site
                </a>
              ) : null}
              <button
                onClick={() => setSelected(null)}
                className="px-4 py-2 border border-gray-200 rounded-md text-sm"
                aria-label="Close preview"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* small style tweaks */}
      <style jsx>{`
        .text-muted-foreground { color: #6b7280; }
        .bg-background { background: linear-gradient(180deg,#fffaf9,#ffffff); }
      `}</style>
    </div>
  );
}
