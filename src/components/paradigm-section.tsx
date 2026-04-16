import { StarMotif } from "@/components/star-motif";

const cards = [
  {
    title: "Designers, Not Generalists",
    desc: "We don't just know how to hire designers — we know how to evaluate craft, assess process, and identify the talent that actually ships.",
    motifClass: "text-acid",
  },
  {
    title: "Network, Not Cold Outreach",
    desc: "Direct relationships with design leaders and senior ICs other recruiters simply can't reach. These are people we know.",
    motifClass: "text-clay",
  },
  {
    title: "Day One, Not Months",
    desc: "We move at startup speed. From first conversation to offer acceptance, we compress timelines without cutting corners.",
    motifStyle: { color: "var(--text-main)" } as React.CSSProperties,
  },
];

export function ParadigmSection() {
  return (
    <section className="reveal">
      <div className="section-header" style={{ marginBottom: "3rem" }}>
        <span className="meta-label">[04] The Difference</span>
      </div>
      <div
        className="grid-3"
        style={{ background: "transparent", border: "none" }}
      >
        {cards.map((c) => (
          <div
            key={c.title}
            style={{
              border: "1px solid var(--grid-line-strong)",
              background: "var(--bg)",
            }}
          >
            <StarMotif
              className={c.motifClass ?? ""}
              style={c.motifStyle}
            />
            <h3 className="panel-title">{c.title}</h3>
            <p className="panel-desc">{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
