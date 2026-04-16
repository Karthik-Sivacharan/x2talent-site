import { StarMotif } from "@/components/star-motif";

const BOOK_URL = "https://cal.com/carlwheatley/book-a-hiring-chat";

export function FooterCta() {
  return (
    <section id="cta" className="footer-cta reveal section-inverted">
      <div
        style={{
          maxWidth: 800,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        <StarMotif
          className="text-clay"
          style={{ width: 48, height: 48 }}
        />
        <h2>Let&rsquo;s Talk.</h2>
        <p
          className="panel-desc"
          style={{ fontSize: "1.2rem", textAlign: "center" }}
        >
          Book a hiring chat — 30 minutes. We&rsquo;ll talk about your team,
          what you&rsquo;re building, and whether we&rsquo;re the right fit. No
          pitch. Just a conversation between people who care about design.
        </p>
        <a
          href={BOOK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
          style={{ marginTop: "1rem" }}
        >
          Book a Hiring Chat
        </a>
      </div>
    </section>
  );
}
