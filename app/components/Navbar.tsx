"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Opportunities", href: "#deal-types" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || menuOpen ? "bg-[#F5F1EB] shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="#home"
            className="flex items-center gap-2"
            onClick={() => setMenuOpen(false)}
          >
            <span className="w-7 h-7 rounded-full bg-[#111111] flex items-center justify-center">
              <span className="text-[#C8A040] text-xs font-black leading-none">UF</span>
            </span>
            <span className="font-bold text-sm tracking-tight text-[#111111]">
              UF Property Group
            </span>
          </Link>

          {/* Centre nav links — desktop only */}
          <div className="hidden md:flex items-center gap-1 bg-[#111111]/8 backdrop-blur-sm rounded-full px-4 py-2">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="px-3 py-1 text-sm font-medium text-[#111111] hover:text-[#C8A040] transition-colors rounded-full hover:bg-[#111111]/5"
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Join button — desktop only */}
          <Link
            href="#contact"
            className="hidden md:inline-flex items-center px-4 py-2 rounded-full bg-[#111111] text-[#F5F1EB] text-sm font-semibold hover:bg-[#C8A040] hover:text-[#111111] transition-colors"
          >
            Join
          </Link>

          {/* Hamburger — mobile only */}
          <button
            className="md:hidden flex flex-col justify-center gap-1.5 p-2 w-10 h-10"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span
              className={`w-5 h-0.5 bg-[#111111] transition-transform origin-center ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-5 h-0.5 bg-[#111111] transition-opacity ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-5 h-0.5 bg-[#111111] transition-transform origin-center ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {menuOpen && (
          <div className="md:hidden bg-[#F5F1EB] border-t border-[#111111]/10 px-6 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="py-3 text-base font-medium text-[#111111] border-b border-[#111111]/8 hover:text-[#C8A040] transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-3 py-3 text-center rounded-full bg-[#111111] text-[#F5F1EB] text-sm font-semibold hover:bg-[#C8A040] hover:text-[#111111] transition-colors"
            >
              Join the Investor List
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}
