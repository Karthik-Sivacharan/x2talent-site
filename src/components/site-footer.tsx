const LINKEDIN_URL = "https://www.linkedin.com/in/carlcwheatley/";
const EMAIL = "carl@x2talent.com";

export function SiteFooter() {
  return (
    <footer
      style={{
        position: "relative",
        zIndex: 20,
        padding: "5rem var(--container-padding) 3rem",
        borderTop: "1px solid var(--grid-line-strong)",
      }}
    >
      {/* Top row */}
      <div className="footer-top-row">
        <div style={{ maxWidth: 400 }}>
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.5rem",
              fontWeight: 700,
              color: "var(--text-main)",
              marginBottom: "1rem",
              letterSpacing: "-0.02em",
            }}
          >
            X2Talent
          </div>
          <p
            style={{
              fontSize: "0.8rem",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "var(--text-muted)",
              lineHeight: 1.7,
              fontWeight: 500,
            }}
          >
            Specialized design recruiting for
            <br />
            the SF Bay Area startup ecosystem.
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.75rem" }}>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="footer-icon"
            style={{
              width: 48,
              height: 48,
              border: "1px solid var(--grid-line-strong)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--text-main)",
              textDecoration: "none",
              transition: "all 0.3s ease",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.59 0 4.26 2.36 4.26 5.43v6.31zM5.34 7.44a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
            </svg>
          </a>
          <a
            href={`mailto:${EMAIL}`}
            aria-label="Email"
            className="footer-icon"
            style={{
              width: 48,
              height: 48,
              border: "1px solid var(--grid-line-strong)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--text-main)",
              textDecoration: "none",
              transition: "all 0.3s ease",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>
          </a>
        </div>
      </div>

      {/* Divider */}
      <div
        style={{
          height: 1,
          background: "var(--grid-line-strong)",
          margin: "3rem 0 2rem",
        }}
      />

      {/* Bottom row */}
      <div className="footer-bottom-row">
        <span className="meta-label">© 2024 X2Talent. All rights reserved.</span>
        <span className="meta-label">Built for the top 1%.</span>
      </div>
    </footer>
  );
}
