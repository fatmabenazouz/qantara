export default function Journal() {
    return (
      <div className="page">
        <p className="page-subtitle">Reflections</p>
        <h1 className="page-title">Journal</h1>
        <div className="divider" />
        <p style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", lineHeight: 1.85, maxWidth: "620px", marginBottom: "3.5rem", color: "var(--ink)" }}>
          A space for reflections on African literature, publishing, translation,
          memory, cinema, exile, contemporary culture and literary circulation across
          the continent.
        </p>
        <div style={{ background: "var(--forest)", color: "var(--cream)", padding: "4rem 2.5rem", textAlign: "center", maxWidth: "480px", marginBottom: "3rem" }}>
          <p style={{ fontSize: "2.5rem", color: "var(--sand)", marginBottom: "1rem" }}>◎</p>
          <p style={{ fontSize: "0.72rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--sand)", marginBottom: "0.8rem" }}>Coming Soon</p>
          <p style={{ fontSize: "0.9rem", lineHeight: 1.8, color: "var(--blush)", opacity: 0.85 }}>
            Upcoming essays, editorial notes and conversations will be published here.
          </p>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", marginTop: "2rem" }}>
          <span style={{ padding: "0.35rem 0.9rem", background: "var(--blush)", color: "var(--ink)", fontSize: "0.78rem" }}>African literature</span>
          <span style={{ padding: "0.35rem 0.9rem", background: "var(--blush)", color: "var(--ink)", fontSize: "0.78rem" }}>Publishing</span>
          <span style={{ padding: "0.35rem 0.9rem", background: "var(--blush)", color: "var(--ink)", fontSize: "0.78rem" }}>Translation</span>
          <span style={{ padding: "0.35rem 0.9rem", background: "var(--blush)", color: "var(--ink)", fontSize: "0.78rem" }}>Memory</span>
          <span style={{ padding: "0.35rem 0.9rem", background: "var(--blush)", color: "var(--ink)", fontSize: "0.78rem" }}>Cinema</span>
          <span style={{ padding: "0.35rem 0.9rem", background: "var(--blush)", color: "var(--ink)", fontSize: "0.78rem" }}>Exile</span>
          <span style={{ padding: "0.35rem 0.9rem", background: "var(--blush)", color: "var(--ink)", fontSize: "0.78rem" }}>Contemporary culture</span>
          <span style={{ padding: "0.35rem 0.9rem", background: "var(--blush)", color: "var(--ink)", fontSize: "0.78rem" }}>Literary circulation</span>
        </div>
      </div>
    );
  }