const deals = [
  {
    letter: "B",
    title: "BRRR",
    subtitle: "Buy, Refurbish, Refinance, Rent",
    description:
      "Recycle your capital through strategic refurbishment and refinancing to build a growing portfolio.",
  },
  {
    letter: "£",
    title: "Below Market Value",
    subtitle: "Strong purchase-to-value gaps",
    description:
      "Acquire properties at a discount with genuine equity from day one, improving your risk position.",
  },
  {
    letter: "V",
    title: "Value-Add Flips",
    subtitle: "Forced appreciation opportunities",
    description:
      "Identify assets where targeted improvements unlock meaningful uplift in value or rental income.",
  },
  {
    letter: "C",
    title: "Cashflow Buy-to-Let",
    subtitle: "Sustainable rental demand",
    description:
      "Yield-focused investments in areas with long-term tenant demand and sensible purchase prices.",
  },
];

export default function DealTypes() {
  return (
    <section id="deal-types" className="bg-[#EEEBE3] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-semibold tracking-widest uppercase text-[#C8A040] mb-4">
          Opportunities
        </p>
        <h2
          className="font-black text-[#111111] mb-16"
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
        >
          Deal Types We Source
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {deals.map((d) => (
            <div
              key={d.title}
              className="bg-[#F5F1EB] rounded-xl p-6 border-l-4 border-[#C8A040] hover:shadow-md transition-shadow"
            >
              <p className="font-black text-[#C8A040] text-4xl mb-4">{d.letter}</p>
              <h3 className="font-bold text-[#111111] text-base mb-1">{d.title}</h3>
              <p className="text-xs font-medium text-[#111111]/50 mb-3">{d.subtitle}</p>
              <p className="text-sm text-[#111111]/65 leading-relaxed">{d.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
