const steps = [
  {
    number: "01",
    title: "Register Your Criteria",
    description:
      "Tell us your budget, target areas and preferred strategy. We match opportunities to your specific requirements.",
  },
  {
    number: "02",
    title: "Receive Selected Deals",
    description:
      "We send you carefully filtered opportunities backed by practical analysis, realistic comparables and clear exit strategies.",
  },
  {
    number: "03",
    title: "Analyse & Invest",
    description:
      "Review the numbers, ask questions and move forward with confidence. We support you through the process.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#F5F1EB] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-semibold tracking-widest uppercase text-[#C8A040] mb-4">
          Process
        </p>
        <h2
          className="font-black text-[#111111] mb-16"
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
        >
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="group">
              <p
                className="font-black text-[#111111]/10 leading-none mb-4 group-hover:text-[#C8A040]/20 transition-colors"
                style={{ fontSize: "5rem" }}
              >
                {step.number}
              </p>
              <div className="w-8 h-0.5 bg-[#C8A040] mb-4" />
              <h3 className="font-bold text-[#111111] text-lg mb-2">{step.title}</h3>
              <p className="text-[#111111]/60 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
