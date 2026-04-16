import { StarMotif } from "@/components/star-motif";

const hires = [
  {
    num: ".01",
    title: "The First Design Hire",
    titleClass: "",
    desc: "Your zero-to-one designer. The one who sets the bar for brand, product, and team culture before anyone else.",
  },
  {
    num: ".02",
    title: "Senior & Staff",
    titleClass: "",
    desc: "Designers who've shipped at scale and can raise everyone around them. The hires that compound.",
  },
  {
    num: ".03",
    title: "Specialist & Hybrid",
    titleClass: "text-acid",
    desc: "Design engineers, brand designers, motion, and the cross-disciplinary talent that's hardest to find and hardest to keep.",
  },
];

export function ProblemSection() {
  return (
    <section id="problem">
      <div className="section-header reveal">
        <span className="meta-label">[01] What We Search For</span>
        <h2>
          Specialists for the roles that define companies.
        </h2>
        <p className="panel-desc" style={{ maxWidth: 600 }}>
          From the first designer to the team that ships at scale.
        </p>
      </div>

      <div className="grid-3 reveal">
        {hires.map((h) => (
          <div className="panel" key={h.num}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span className="meta-label">Role {h.num}</span>
              <StarMotif />
            </div>
            <h3 className={`panel-title ${h.titleClass}`}>{h.title}</h3>
            <p className="panel-desc">{h.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
