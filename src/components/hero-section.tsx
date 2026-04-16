import { StarMotif } from "@/components/star-motif";

const BOOK_URL = "https://cal.com/carlwheatley/book-a-hiring-chat";

export function HeroSection() {
  return (
    <section className="hero">
      <div className="monumental-vertical">Design</div>

      <div className="hero-content reveal">
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <StarMotif className="text-clay" />
          <span className="meta-label">High-craft design recruiting</span>
        </div>

        <h1>
          Design
          <br />
          Talent That
          <br />
          Defines.
        </h1>

        <p>
          Specialized search for the founding designers, senior ICs, and design
          leaders who raise the bar everywhere they ship.
        </p>

        <div className="btn-group">
          <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Book a Hiring Chat
          </a>
          <a href="#methodology" className="btn btn-secondary">
            See How We Work
          </a>
        </div>
      </div>
    </section>
  );
}
