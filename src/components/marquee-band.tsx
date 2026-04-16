const items = [
  "Instagram",
  "Applied Intuition",
  "BCG Digital Ventures",
  "Greenlite AI",
  "MEXT",
  "500 Startups",
];

export function MarqueeBand() {
  const all = [...items, ...items];

  return (
    <div className="marquee-container reveal">
      <div className="marquee" id="marquee">
        {all.map((name, i) => (
          <span key={`${name}-${i}`} className="marquee-item solid">
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
