import Image from "next/image";
import { StarMotif } from "@/components/star-motif";

const founders = [
  {
    name: "Carl",
    role: "Ex-Product Designer & Lead Recruiter",
    image: "/images/carl.png",
    bio: [
      "I'm a former Product Designer who realized my true passion was building the teams that build the products.",
      "With over 10 years of recruiting experience, including 6 years at Meta and time at BCG Digital Ventures, I've seen firsthand what it takes to find and hire world-class design talent.",
    ],
    quote:
      "I don't just look at resumes; I look at portfolios, process, and potential. I speak the language of design because I've lived it.",
  },
  {
    name: "Jeremy",
    role: "Ex-Meta Design Recruiting Leader",
    image: "/images/jeremy.png",
    bio: [
      "I came up in design, so I speak the language. Then I spent 11 years at Meta on the other side of the table — my teams hired the designers, and I hired the design leaders. From IC to Org Leader, I've personally recruited and closed the talent that built Meta's design org through its biggest growth era, 4,000 to 120,000 employees.",
      "Since leaving Meta, I've been working with companies of all sizes to find great design and technical talent — from early-stage startups to established orgs looking to level up their teams.",
    ],
    quote:
      "There's no design leader in tech that's more than one call away. I've either hired them, recruited against them, or built the team they came from.",
  },
];

export function TeamSection() {
  return (
    <section className="team-section reveal">
      <div className="section-header" style={{ marginBottom: "3rem" }}>
        <span className="meta-label">The Team</span>
        <h2>Designers who recruit.</h2>
      </div>

      <div className="team-grid">
        {founders.map((f) => (
          <div className="team-card" key={f.name}>
            <div className="team-card-photo">
              <Image
                src={f.image}
                alt={f.name}
                width={480}
                height={480}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
                priority
              />
            </div>

            <div className="team-card-info">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div>
                  <h3 className="panel-title">{f.name}</h3>
                  <span className="meta-label">{f.role}</span>
                </div>
                <StarMotif className="text-clay" />
              </div>

              {f.bio.map((p, j) => (
                <p key={j} className="panel-desc">{p}</p>
              ))}

              <blockquote className="team-quote">
                &ldquo;{f.quote}&rdquo;
              </blockquote>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
