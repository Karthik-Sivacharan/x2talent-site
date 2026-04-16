const steps = [
  {
    num: "01",
    title: "Understand",
    desc: "We get deep on your product, culture, and what this hire actually needs to do. No generic job specs.",
  },
  {
    num: "02",
    title: "Source",
    desc: "We go direct to our network — people we know, not cold DMs. Passive candidates other recruiters can't reach.",
  },
  {
    num: "03",
    title: "Screen",
    desc: "Every candidate runs through our own design screen before you ever see them. We also help early teams design an interview loop that actually works.",
  },
  {
    num: "04",
    title: "Close",
    desc: "We pre-socialize comp, role, and expectations end-to-end so the offer stage isn't where deals die.",
  },
];

export function MethodologySection() {
  return (
    <section id="methodology" className="section-inverted">
      <div className="method-wrapper">
        <div className="method-sticky reveal">
          <span className="meta-label">[02] Our Process</span>
          <h2
            className="display-text"
            style={{
              fontSize: "clamp(3rem, 5vw, 6rem)",
              marginTop: "1rem",
              lineHeight: 1.1,
            }}
          >
            How We
            <br />
            Work
          </h2>
        </div>

        <div className="method-steps">
          {steps.map((s) => (
            <div className="step reveal" key={s.num}>
              <div className="step-num">{s.num}</div>
              <h3
                className="panel-title text-clay"
                style={{ marginBottom: "1rem" }}
              >
                {s.title}
              </h3>
              <p className="panel-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
