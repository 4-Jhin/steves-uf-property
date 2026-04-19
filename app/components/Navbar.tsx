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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#F5F1EB] shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="#home" className="flex items-center gap-2 group">
          <span className="w-7 h-7 rounded-full bg-[#111111] flex items-center justify-center">
            <span className="text-[#C8A040] text-xs font-black leading-none">UF</span>
          </span>
          <span className="font-bold text-sm tracking-tight text-[#111111]">
            UF Property Group
          </span>
        </Link>

        {/* Centre nav links */}
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

        {/* Join button */}
        <Link
          href="#contact"
          className="hidden md:inline-flex items-center px-4 py-2 rounded-full bg-[#111111] text-[#F5F1EB] text-sm font-semibold hover:bg-[#C8A040] hover:text-[#111111] transition-colors"
        >
          Join
        </Link>

        {/* Mobile hamburger placeholder */}
        <button className="md:hidden flex flex-col gap-1.5 p-2" aria-label="Menu">
          <span className="w-5 h-0.5 bg-[#111111]" />
          <span className="w-5 h-0.5 bg-[#111111]" />
          <span className="w-3 h-0.5 bg-[#111111]" />
        </button>
      </div>
    </nav>
  );
}
