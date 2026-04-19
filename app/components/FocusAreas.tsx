const areas = [
  { name: "Bolton", note: "Strong demand, achievable purchase prices" },
  { name: "Greater Manchester", note: "Deep tenant pool, diverse opportunities" },
  { name: "Rochdale", note: "Value-add potential, growing market" },
  { name: "Oldham", note: "Undervalued stock with solid yields" },
  { name: "Wigan", note: "Consistent rental demand, BRRR opportunities" },
  { name: "Lancashire", note: "Investor-grade numbers across multiple towns" },
];

export default function FocusAreas() {
  return (
    <section id="focus-areas" className="bg-[#F5F1EB] py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-semibold tracking-widest uppercase text-[#C8A040] mb-4">
          Where We Operate
        </p>
        <h2
          className="font-black text-[#111111] mb-4"
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
        >
          Focus Areas
        </h2>
        <p className="text-[#111111]/55 mb-16 max-w-xl">
          Areas where demand remains strong and investors can still find genuine value
          — selected based on fundamentals, not trend-chasing.
        </p>

        <div className="space-y-0">
          {areas.map((area, i) => (
            <div
              key={area.name}
              className="flex items-center justify-between py-5 border-b border-[#111111]/10 group hover:bg-[#EEEBE3] -mx-4 px-4 rounded transition-colors cursor-default"
            >
              <div className="flex items-center gap-6">
                <span className="text-xs text-[#111111]/30 font-mono w-5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className="font-black text-[#111111] group-hover:text-[#C8A040] transition-colors"
                  style={{ fontSize: "clamp(1.4rem, 3vw, 2.2rem)" }}
                >
                  {area.name}
                </span>
              </div>
              <span className="hidden sm:block text-xs text-[#111111]/45 max-w-xs text-right">
                {area.note}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
