"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileMenuId = "primary-mobile-menu";

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-black/95 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Logo (has alt text already) */}
          <Link href="/" aria-label="Go to homepage" className="flex items-center gap-2">
            <img src="/sigmalogo.webp" alt="Sigma Graphics logo" className="h-8 w-auto object-contain" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" role="navigation" aria-label="Primary">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white hover:text-gray-300 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA — use a link styled as a button (avoid nesting button inside anchor) */}
         

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen((s) => !s)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls={mobileMenuId}
            className="md:hidden p-2 hover:bg-gray-800 rounded-lg transition-colors inline-flex items-center justify-center"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5 text-white" aria-hidden="true" focusable="false" />
            ) : (
              <Menu className="h-5 w-5 text-white" aria-hidden="true" focusable="false" />
            )}
          </button>
        </div>

        {/* Mobile Nav (rendered only when open to avoid focusable elements in hidden containers) */}
        {isMenuOpen && (
          <div
            id={mobileMenuId}
            className="md:hidden pb-4 space-y-3 border-t border-gray-700 pt-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-sm font-medium text-white hover:text-gray-300 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile CTA (link styled as button) */}
           
          </div>
        )}
      </div>
    </header>
  );
}
