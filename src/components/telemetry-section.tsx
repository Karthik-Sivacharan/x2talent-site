export function TelemetrySection() {
  return (
    <section className="reveal">
      <div className="section-header" style={{ marginBottom: "3rem" }}>
        <span className="meta-label">[03] Why X2Talent</span>
        <h2>Most recruiters are generalists. We&rsquo;re not.</h2>
      </div>

      <div className="stats-grid">
        <div className="stat-item">
          <div className="meta-label" style={{ marginBottom: "1rem" }}>
            Design Fluency
          </div>
          <div className="stat-num">10+</div>
          <h4 className="panel-title" style={{ marginBottom: "0.5rem" }}>
            We Speak Design
          </h4>
          <p className="panel-desc">
            Portfolio reviews, critique, process, product judgment — we evaluate
            the way your team already does. Run by designers turned recruiters.
          </p>
        </div>

        <div className="stat-item">
          <div className="meta-label" style={{ marginBottom: "1rem" }}>
            Talent Network
          </div>
          <div className="stat-num text-clay">
            4<span style={{ fontSize: "0.5em" }}> cities</span>
          </div>
          <h4 className="panel-title" style={{ marginBottom: "0.5rem" }}>
            A Trusted Network
          </h4>
          <p className="panel-desc">
            An active, personally-vetted bench across SF, NY, Seattle, London,
            and beyond — not cold outreach. Real relationships, not LinkedIn spam.
          </p>
        </div>

        <div className="stat-item">
          <div className="meta-label" style={{ marginBottom: "1rem" }}>
            Speed
          </div>
          <div className="stat-num">
            1<span style={{ fontSize: "0.5em" }}> week</span>
          </div>
          <h4 className="panel-title" style={{ marginBottom: "0.5rem" }}>
            To First Candidate
          </h4>
          <p className="panel-desc">
            We move at startup speed. Expect highly vetted, high-fidelity
            candidates in your inbox within the first week.
          </p>
        </div>
      </div>
    </section>
  );
}
