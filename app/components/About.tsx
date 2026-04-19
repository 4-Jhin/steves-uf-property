const areas = ["Bolton", "Greater Manchester", "Rochdale", "Oldham", "Wigan", "Lancashire"];

export default function About() {
  return (
    <section id="about" className="bg-[#EEEBE3] py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* Pull quote */}
        <div>
          <p className="text-xs font-semibold tracking-widest uppercase text-[#C8A040] mb-4">
            About
          </p>
          <h2
            className="font-black text-[#111111] leading-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Numbers first.
            <br />
            No noise.
          </h2>
          <div className="flex flex-wrap gap-2 mt-8">
            {areas.map((a) => (
              <span
                key={a}
                className="px-3 py-1 rounded-full bg-[#111111] text-[#F5F1EB] text-xs font-medium"
              >
                {a}
              </span>
            ))}
          </div>
        </div>

        {/* Copy */}
        <div className="space-y-5 pt-2">
          <p className="text-[#111111]/80 leading-relaxed">
            UF Property Group sources carefully selected property investment
            opportunities across Bolton, Greater Manchester and surrounding areas.
            We focus on deals backed by real numbers — BRRR projects, below market
            value opportunities and value-add investments.
          </p>
          <p className="text-[#111111]/80 leading-relaxed">
            Our aim is simple: help investors access opportunities without wasting
            time on overpriced stock or unrealistic projections.
          </p>
          <p className="text-[#111111]/80 leading-relaxed">
            We value clarity, integrity and long-term relationships over hype.
          </p>
          <div className="pt-4 border-t border-[#111111]/10">
            <p className="text-sm font-semibold text-[#111111]">
              Built by a focused entrepreneur. Driven by disciplined deal analysis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
