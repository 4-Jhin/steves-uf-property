"use client";

import { useState } from "react";

const budgetOptions = [
  "Under £50,000",
  "£50,000 – £100,000",
  "£100,000 – £200,000",
  "£200,000+",
];

const strategyOptions = ["BRRR", "BMV Buy-to-Let", "Value-Add Flip", "Cashflow BTL", "Open to all"];

export default function Register() {
  const [strategy, setStrategy] = useState("");
  const [fields, setFields] = useState({ name: "", email: "", phone: "", budget: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setFields((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...fields, strategy }),
    });
    setStatus(res.ok ? "success" : "error");
  };

  return (
    <section id="contact" className="bg-[#111111] py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* Left */}
        <div>
          <p className="text-xs font-semibold tracking-widest uppercase text-[#C8A040] mb-4">
            Get Started
          </p>
          <h2
            className="font-black text-[#F5F1EB] leading-tight mb-6"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Register Your
            <br />
            Buying Criteria
          </h2>
          <p className="text-[#F5F1EB]/50 leading-relaxed mb-8">
            Tell us what you&apos;re looking for. We&apos;ll send you opportunities that match
            your criteria — no spam, no overpriced stock, no hype.
          </p>
          <div className="space-y-3 text-sm text-[#F5F1EB]/40">
            <p>✓ Selective opportunities over volume</p>
            <p>✓ Honest presentation of risks and upside</p>
            <p>✓ Long-term investor relationships</p>
          </div>
        </div>

        {/* Form */}
        {status === "success" ? (
          <div className="flex flex-col justify-center gap-4 py-12">
            <p className="text-[#C8A040] text-2xl font-black">You&apos;re registered.</p>
            <p className="text-[#F5F1EB]/50 text-sm">We&apos;ll be in touch when suitable opportunities come up.</p>
          </div>
        ) : (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                value={fields.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-[#1E1E1E] border border-[#F5F1EB]/10 text-[#F5F1EB] placeholder-[#F5F1EB]/30 text-sm focus:outline-none focus:border-[#C8A040] transition-colors"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                value={fields.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-[#1E1E1E] border border-[#F5F1EB]/10 text-[#F5F1EB] placeholder-[#F5F1EB]/30 text-sm focus:outline-none focus:border-[#C8A040] transition-colors"
              />
            </div>

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number (optional)"
              value={fields.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-[#1E1E1E] border border-[#F5F1EB]/10 text-[#F5F1EB] placeholder-[#F5F1EB]/30 text-sm focus:outline-none focus:border-[#C8A040] transition-colors"
            />

            <select
              name="budget"
              value={fields.budget}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-[#1E1E1E] border border-[#F5F1EB]/10 text-[#F5F1EB]/70 text-sm focus:outline-none focus:border-[#C8A040] transition-colors appearance-none"
            >
              <option value="" disabled>Investment Budget</option>
              {budgetOptions.map((o) => (
                <option key={o} value={o} className="bg-[#1E1E1E]">{o}</option>
              ))}
            </select>

            <div>
              <p className="text-xs text-[#F5F1EB]/40 mb-2 font-medium">Preferred Strategy</p>
              <div className="flex flex-wrap gap-2">
                {strategyOptions.map((o) => (
                  <button
                    key={o}
                    type="button"
                    onClick={() => setStrategy(o)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                      strategy === o
                        ? "bg-[#C8A040] border-[#C8A040] text-[#111111]"
                        : "border-[#F5F1EB]/20 text-[#F5F1EB]/50 hover:border-[#C8A040]/50"
                    }`}
                  >
                    {o}
                  </button>
                ))}
              </div>
            </div>

            <textarea
              name="message"
              placeholder="Anything else we should know?"
              rows={4}
              value={fields.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-[#1E1E1E] border border-[#F5F1EB]/10 text-[#F5F1EB] placeholder-[#F5F1EB]/30 text-sm focus:outline-none focus:border-[#C8A040] transition-colors resize-none"
            />

            {status === "error" && (
              <p className="text-red-400 text-xs">Something went wrong. Please try again.</p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-3.5 rounded-lg bg-[#C8A040] text-[#111111] font-bold text-sm hover:bg-[#b08a30] transition-colors disabled:opacity-50"
            >
              {status === "loading" ? "Sending..." : "Register Interest"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
