import Link from "next/link";
import HouseGraphic from "./HouseGraphic";

const badges = ["BRRR", "BMV", "North West", "Value-Add"];

export default function Hero() {
  return (
    <section id="home" className="bg-[#F5F1EB] overflow-hidden">

      {/* ── MOBILE layout (hidden on md+) ── */}
      <div className="md:hidden flex flex-col pt-20 pb-10">
        <p className="text-center text-xs font-medium tracking-widest text-[#111111]/60 uppercase mb-2 px-4">
          North West Property Deals for Serious Investors
        </p>
        <h1
          className="font-black text-[#111111] leading-none tracking-tighter text-center px-2"
          style={{ fontSize: "clamp(2.8rem, 18vw, 5rem)", lineHeight: 0.9 }}
        >
          UF PROPERTY
          <br />
          GROUP
        </h1>
        <HouseGraphic className="w-full mt-4" />

        <div className="px-6 mt-4 flex flex-col gap-3">
          <p className="text-xs text-[#111111]/60 leading-snug">
            Start your journey towards property investment today.
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#C8A040] text-[#111111] text-sm font-bold hover:bg-[#b08a30] transition-colors self-start"
          >
            Join the Investor List
          </Link>
          <div className="flex flex-wrap gap-2 mt-2">
            {badges.map((b) => (
              <span
                key={b}
                className="px-3 py-1 rounded-full border border-[#111111]/20 text-xs font-medium text-[#111111]/70"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── DESKTOP layout (hidden on mobile) ── */}
      <div className="hidden md:flex flex-col min-h-screen relative pt-16">
        <p className="relative z-10 text-center text-sm font-medium tracking-widest text-[#111111]/60 uppercase mt-10 mb-2 px-4">
          North West Property Deals for Serious Investors
        </p>
        <div className="relative select-none px-2 leading-none text-center z-10">
          <h1
            className="font-black text-[#111111] leading-none tracking-tighter"
            style={{ fontSize: "clamp(2.8rem, 18vw, 16rem)", lineHeight: 0.9 }}
          >
            UF PROPERTY
          </h1>
        </div>

        {/* House graphic — overlapping the text */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{ zIndex: 10 }}>
          <HouseGraphic className="w-full" style={{ height: "55vh", minHeight: "320px" }} />
        </div>

        <div className="relative z-20 mt-auto px-8 pb-12 pt-[45vh] flex items-end justify-between">
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
          <div className="flex flex-col items-end gap-2">
            {badges.map((b) => (
              <span
                key={b}
                className="px-3 py-1 rounded-full border border-[#111111]/20 text-xs font-medium text-[#111111]/70 bg-[#F5F1EB]/60 backdrop-blur-sm"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
