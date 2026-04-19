import Image from "next/image";
import Link from "next/link";

const badges = ["BRRR", "BMV", "North West", "Value-Add"];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#F5F1EB] overflow-hidden flex flex-col"
    >
      <div className="relative flex-1 flex flex-col pt-16">
        {/* Tagline */}
        <p className="relative z-10 text-center text-xs font-medium tracking-widest text-[#111111]/60 uppercase mt-10 mb-2 px-4">
          North West Property Deals for Serious Investors
        </p>

        {/* Oversized brand name */}
        <div className="relative select-none px-2 leading-none text-center z-10">
          <h1
            className="font-black text-[#111111] leading-none tracking-tighter"
            style={{ fontSize: "clamp(2.8rem, 18vw, 16rem)", lineHeight: 0.9 }}
          >
            UF PROPERTY
          </h1>
        </div>

        {/* House image — anchored at bottom center */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
          style={{ zIndex: 10, width: "130vw", maxWidth: "860px" }}
        >
          <Image
            src="/house.png"
            alt="Modern investment property"
            width={1500}
            height={1500}
            className="w-full h-auto"
            priority
          />
        </div>

        {/* Bottom content */}
        <div className="relative z-20 mt-auto px-6 pb-10 pt-[50vw] md:pt-[35vh]">
          {/* Mobile: stacked. Desktop: side by side */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            {/* CTA */}
            <div className="flex flex-col gap-3">
              <p className="text-xs text-[#111111]/60 leading-snug max-w-xs">
                Start your journey towards property investment today.
              </p>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#C8A040] text-[#111111] text-sm font-bold hover:bg-[#b08a30] transition-colors self-start"
              >
                Join the Investor List
              </Link>
            </div>

            {/* Badges */}
            <div className="flex flex-row flex-wrap md:flex-col md:items-end gap-2">
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
      </div>
    </section>
  );
}
