import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={styles.wrapper}>
      {/* Hero */}
      <section style={styles.hero}>
        <div style={styles.heroInner}>
          <p style={styles.eyebrow}>Pan-African Independent Publishing</p>
          <h1 style={styles.title}>
            Qantara<br />Africa Books
          </h1>
          <div style={styles.divider} />
          <p style={styles.tagline}>
            Stories crossing languages,<br />borders and worlds.
          </p>
          <p style={styles.intro}>
            An independent publishing house based in Johannesburg, South Africa —
            building editorial bridges between Anglophone and Francophone Africa.
            We publish literary fiction, border narratives, works of memory, exile
            and contemporary African voices.
          </p>
          <div style={styles.buttons}>
            <Link to="/catalogue" className="btn btn-filled">Explore Our Catalogue</Link>
            <Link to="/about" className="btn btn-copper" style={{ marginLeft: "1rem" }}>About Qantara</Link>
          </div>
        </div>
        <div style={styles.heroAccent} />
      </section>

      {/* Three pillars */}
      <section style={styles.pillars}>
        {[
          { label: "Literary Fiction", text: "Original voices. Border narratives. Memory and exile." },
          { label: "Translation", text: "Moving works between English, French and African literary spaces." },
          { label: "Johannesburg", text: "A crossroads of movement, reinvention and possibility." },
        ].map((p) => (
          <div key={p.label} style={styles.pillar}>
            <div style={styles.pillarLine} />
            <h3 style={styles.pillarTitle}>{p.label}</h3>
            <p style={styles.pillarText}>{p.text}</p>
          </div>
        ))}
      </section>

      {/* CTA strip */}
      <section style={styles.cta}>
        <p style={styles.ctaText}>
          Interested in rights, translation or partnership?
        </p>
        <Link to="/rights" className="btn">Rights & Partnerships</Link>
      </section>
    </div>
  );
}

const styles = {
  wrapper: { minHeight: "100vh" },
  hero: {
    minHeight: "92vh",
    display: "flex",
    alignItems: "center",
    padding: "8rem 2rem 5rem",
    position: "relative",
    overflow: "hidden",
    background: "var(--cream)",
  },
  heroInner: {
    maxWidth: "680px",
    margin: "0 auto",
    position: "relative",
    zIndex: 2,
  },
  eyebrow: {
    fontFamily: "var(--font-body)",
    fontSize: "0.75rem",
    letterSpacing: "0.25em",
    textTransform: "uppercase",
    color: "var(--copper)",
    marginBottom: "1.2rem",
  },
  title: {
    fontFamily: "var(--font-display)",
    fontSize: "clamp(3.5rem, 10vw, 6.5rem)",
    fontWeight: 300,
    lineHeight: 1.05,
    color: "var(--forest)",
    letterSpacing: "-0.01em",
  },
  divider: {
    width: "48px",
    height: "2px",
    background: "var(--copper)",
    margin: "2rem 0",
  },
  tagline: {
    fontFamily: "var(--font-display)",
    fontSize: "clamp(1.2rem, 3vw, 1.6rem)",
    fontStyle: "italic",
    color: "var(--copper)",
    marginBottom: "1.5rem",
    fontWeight: 300,
  },
  intro: {
    fontSize: "0.95rem",
    color: "var(--ink)",
    lineHeight: 1.9,
    maxWidth: "560px",
    marginBottom: "2.5rem",
    opacity: 0.85,
  },
  buttons: { display: "flex", flexWrap: "wrap", gap: "0.5rem" },
  heroAccent: {
    position: "absolute",
    right: "-80px",
    top: "50%",
    transform: "translateY(-50%)",
    width: "420px",
    height: "420px",
    borderRadius: "50%",
    background: "var(--blush)",
    opacity: 0.35,
    zIndex: 1,
  },
  pillars: {
    background: "var(--forest)",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 0,
  },
  pillar: {
    padding: "3.5rem 2.5rem",
    borderRight: "1px solid rgba(255,255,255,0.08)",
  },
  pillarLine: {
    width: "32px",
    height: "2px",
    background: "var(--copper)",
    marginBottom: "1.2rem",
  },
  pillarTitle: {
    fontFamily: "var(--font-display)",
    fontSize: "1.4rem",
    color: "var(--cream)",
    marginBottom: "0.8rem",
  },
  pillarText: {
    fontSize: "0.85rem",
    color: "var(--blush)",
    lineHeight: 1.8,
    opacity: 0.8,
  },
  cta: {
    background: "var(--blush)",
    padding: "3.5rem 2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "2.5rem",
    flexWrap: "wrap",
  },
  ctaText: {
    fontFamily: "var(--font-display)",
    fontSize: "1.35rem",
    color: "var(--ink)",
    fontStyle: "italic",
  },
};