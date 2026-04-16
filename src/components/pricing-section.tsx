const faqs = [
  {
    num: "01",
    question: "Who do you work with?",
    answer:
      "We partner with design-led organisations at every stage — from pre-seed founders making their first design hire to growth-stage teams scaling a product and brand org.",
  },
  {
    num: "02",
    question: "What are your pricing models?",
    answer:
      "Flexible pricing tailored to the stage and scope of your search. We optimise for long-term partnership and outcomes over rigid commission structures.",
    recommended: true,
  },
  {
    num: "03",
    question: "How long does a search take?",
    answer:
      "We move at startup speed. Expect highly vetted, high-fidelity candidates in your inbox within the first week — and an offer in hand in weeks, not months.",
  },
  {
    num: "04",
    question: "What roles do you specialize in?",
    answer:
      "Founding designers, senior and staff product designers, design leaders, design engineers, brand and motion designers, and the cross-disciplinary hybrid roles that are hardest to fill.",
  },
];

export function PricingSection() {
  return (
    <section className="reveal">
      <div className="section-header" style={{ marginBottom: "3rem" }}>
        <span className="meta-label">[05] FAQ</span>
        <h2>Questions, Answered</h2>
      </div>

      <div className="tiers">
        {faqs.map((f) => (
          <div
            className="tier-card panel"
            key={f.num}
            style={
              f.recommended
                ? { borderColor: "var(--clay)" }
                : undefined
            }
          >
            <span className={`meta-label${f.recommended ? " text-clay" : ""}`}>
              {f.num}
            </span>
            <h3 className="panel-title">{f.question}</h3>
            <p className="panel-desc">{f.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
