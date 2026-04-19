import Image from "next/image";
import Link from "next/link";

const badges = ["BRRR", "BMV", "North West", "Value-Add"];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#F5F1EB] overflow-hidden flex flex-col"
    >
      {/* Big brand text + house image layer */}
      <div className="relative flex-1 flex flex-col justify-center pt-16">
        {/* Tagline */}
        <p className="relative z-10 text-center text-sm font-medium tracking-widest text-[#111111]/60 uppercase mt-12 mb-2 px-4">
          North West Property Deals for Serious Investors
        </p>

        {/* Oversized brand name */}
        <div className="relative select-none px-2 leading-none text-center">
          <h1
            className="font-black text-[#111111] leading-none tracking-tighter"
            style={{ fontSize: "clamp(3rem, 16vw, 14rem)", lineHeight: 0.9 }}
          >
            UF PROPERTY
          </h1>
          <h1
            className="font-black text-[#111111] leading-none tracking-tighter"
            style={{ fontSize: "clamp(3rem, 16vw, 14rem)", lineHeight: 0.9 }}
          >
            GROUP
          </h1>
        </div>

        {/* House image — overlaid on the text */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{ zIndex: 10 }}
        >
          <div className="relative w-full max-w-2xl mx-auto" style={{ height: "70vh" }}>
            <Image
              src="/house.png"
              alt="Modern investment property"
              fill
              style={{ objectFit: "contain", objectPosition: "center bottom" }}
              priority
            />
          </div>
        </div>

        {/* Bottom row */}
        <div
          className="relative z-20 flex items-end justify-between px-8 pb-12 mt-auto pt-[45vh]"
        >
          {/* CTA left */}
          <div className="flex flex-col gap-3 max-w-xs">
            <p className="text-xs text-[#111111]/60 leading-snug">
              Start your journey towards property investment today.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#C8A040] text-[#111111] text-sm font-bold hover:bg-[#b08a30] transition-colors self-start"
            >
              Join the Investor List
            </Link>
          </div>

          {/* Badges right */}
          <div className="flex flex-col items-end gap-2">
            {badges.map((b) => (
              <span
                key={b}
                className="px-3 py-1 rounded-full border border-[#111111]/20 text-xs font-medium text-[#111111]/70 bg-[#F5F1EB]/60 backdrop-blur-sm"
              >
                {b}
              </span>
            ))}
            <button className="mt-1 text-xs font-semibold text-[#111111] underline underline-offset-2 hover:text-[#C8A040] transition-colors">
              Explore
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
