"use client";

import Link from "next/link";
import { Facebook, Twitter, Youtube, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0f1112] text-white overflow-visible pb-10">
      {/* ===================== MAIN CONTENT ===================== */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-12 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm text-white/80 leading-relaxed max-w-xs">
              A print is a plot of land that is used to grow crops and raise livestock, as in our farm, we raise sheep and sell their wool. The word farm is also used as a verb to mean to work land.
            </p>
          </div>

          {/* Other Pages */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Other Pages</h3>

            {/* Use smaller text and compact spacing for footer links */}
            <ul className="space-y-2 text-sm text-white/80">
            <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>

              <li>
                <Link href="/portfolio" className="hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <div className="text-sm text-white/80 space-y-3">
              <div>UB 18 / #8-95/19,</div>
              <div>Pineapple City,</div>
              <div>Opp. GV Pai Hospital,</div>
              <div>Moodubidire – 574227</div>
            </div>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe Us</h3>
            <p className="text-sm text-white/80 mb-4">
              Subscribe &amp; receive updates in your inbox directly
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const input = e.currentTarget.querySelector("input");
                if (input && input.value) {
                  alert(`Subscribed: ${input.value}`);
                  input.value = "";
                }
              }}
              className="flex gap-3 items-center max-w-sm"
            >
              <div className="relative flex-1">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-red-400 pointer-events-none">
                  <Mail className="w-4 h-4" />
                </span>
                <input
                  type="email"
                  placeholder="Email address"
                  aria-label="Email address"
                  required
                  className="w-full pl-10 pr-3 py-3 rounded-md bg-white/10 placeholder:text-white/60 text-white outline-none focus:ring-2 focus:ring-red-500 transition"
                />
              </div>

              <button
                type="submit"
                className="footer-send-btn inline-flex items-center justify-center px-4 py-3 bg-red-600 text-white rounded-md shadow hover:bg-red-700 transition"
                aria-label="Subscribe"
              >
                <svg className="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M2 12l18-9-9 18-2-7-7-2z" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* ===================== BOTTOM BAR ===================== */}
      <div className="bg-[#f0414f] pt-6 pb-6 mt-12 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* LEFT — LOGO */}
          <div className="flex items-center gap-3">
            <img src="/sigmalogo.webp" alt="Sigma Graphics Logo" className="w-36 h-12 object-contain" />
          </div>

          {/* CENTER — COPYRIGHT TEXT */}
          <div className="text-sm text-white text-center">
            Copyright &amp; {currentYear} sigma-graphics.com. Powered by
            <span className="font-semibold"> Vision Flow Technologies</span>
          </div>

          {/* RIGHT — SOCIAL ICONS + TOP BUTTON */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <a href="#" className="p-2 bg-white/20 rounded-md hover:bg-white/30 transition" aria-label="Facebook">
                <Facebook className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="p-2 bg-white/20 rounded-md hover:bg-white/30 transition" aria-label="Twitter">
                <Twitter className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="p-2 bg-white/20 rounded-md hover:bg-white/30 transition" aria-label="YouTube">
                <Youtube className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="p-2 bg-white/20 rounded-md hover:bg-white/30 transition" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4 text-white" />
              </a>
            </div>

            {/* Back to Top */}
            <a
              href="#top"
              className="ml-4 inline-flex items-center justify-center w-10 h-10 rounded-full border border-white text-white hover:bg-white hover:text-red-600 transition"
              aria-label="Back to top"
            >
              ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
