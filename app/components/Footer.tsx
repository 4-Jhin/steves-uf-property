"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Opportunities", href: "#deal-types" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    const res = await fetch("/api/mailing-list", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    setStatus(res.ok ? "success" : "error");
  };

  return (
    <footer className="bg-[#111111] px-6">

      {/* Mailing list strip */}
      <div className="max-w-6xl mx-auto py-12 border-b border-[#F5F1EB]/8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-[#F5F1EB] font-bold text-lg">Join our mailing list</p>
          <p className="text-[#F5F1EB]/40 text-sm mt-1">Be first to receive new investment opportunities.</p>
        </div>
        {status === "success" ? (
          <p className="text-[#C8A040] text-sm font-semibold">You&apos;re on the list.</p>
        ) : (
          <form className="flex gap-2 w-full md:w-auto" onSubmit={handleSubmit}>
            <input
              type="email"
              required
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 md:w-64 px-4 py-2.5 rounded-full bg-[#1E1E1E] border border-[#F5F1EB]/10 text-[#F5F1EB] placeholder-[#F5F1EB]/30 text-sm focus:outline-none focus:border-[#C8A040] transition-colors"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="px-5 py-2.5 rounded-full bg-[#C8A040] text-[#111111] text-sm font-bold hover:bg-[#b08a30] transition-colors whitespace-nowrap disabled:opacity-50"
            >
              {status === "loading" ? "..." : "Subscribe"}
            </button>
          </form>
        )}
      </div>

      {/* Bottom bar */}
      <div className="max-w-6xl mx-auto py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-[#F5F1EB]/10 flex items-center justify-center">
            <span className="text-[#C8A040] text-[10px] font-black">UF</span>
          </span>
          <span className="text-[#F5F1EB]/60 text-sm font-semibold">UF Property Group</span>
        </div>

        {/* Links */}
        <nav className="flex flex-wrap justify-center gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-xs text-[#F5F1EB]/35 hover:text-[#C8A040] transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Compliance */}
        <p className="text-xs text-[#F5F1EB]/25 text-center md:text-right max-w-xs leading-relaxed">
          © 2026 UF Property Group. Property sourcing is not regulated by the FCA.
        </p>
      </div>

    </footer>
  );
}
