import { Link } from "react-router-dom";

const areas = ["Southern Africa", "North Africa", "Francophone Africa", "Europe", "African Diaspora"];
const interests = [
  "Translation partnerships",
  "Co-editions",
  "Francophone / Anglophone rights exchanges",
  "African literary circulation",
  "International distribution partnerships",
  "Literary events connecting African regions and diasporas",
];
const collaborators = [
  "Publishers", "Translators", "Literary agents",
  "Cultural institutions", "Festivals", "Universities",
  "International literary organizations",
];

export default function Rights() {
  return (
    <div className="page">
      <p className="page-subtitle">Collaboration</p>
      <h1 className="page-title">Rights & Partnerships</h1>
      <div className="divider" />

      <p style={styles.lead}>
        QANTARA Africa Books actively seeks collaborations with publishers, translators,
        literary agents, cultural institutions, festivals, universities and international
        literary organizations.
      </p>

      <div style={styles.grid}>
        <div style={styles.box}>
          <p style={styles.boxLabel}>We Collaborate With</p>
          {collaborators.map((c) => (
            <p key={c} style={styles.item}><span style={styles.dash}>—</span> {c}</p>
          ))}
        </div>

        <div style={styles.box}>
          <p style={styles.boxLabel}>Areas of Interest</p>
          {interests.map((i) => (
            <p key={i} style={styles.item}><span style={styles.dash}>—</span> {i}</p>
          ))}
        </div>
      </div>

      <h2 style={styles.h2}>Geographic Focus</h2>
      <div className="divider" />
      <div style={styles.regions}>
        {areas.map((a) => (
          <span key={a} style={styles.region}>{a}</span>
        ))}
      </div>

      <h2 style={styles.h2}>Translation</h2>
      <div className="divider" />
      <p style={styles.body}>
        QANTARA strongly believes translation is essential to the future of African
        literature. We aim to support the circulation of literary works between English,
        French and other African literary spaces through partnerships with translators,
        publishers and cultural institutions.
      </p>

      <div style={styles.contact}>
        <p style={styles.contactLabel}>Rights & Partnerships Inquiries</p>
        <a href="mailto:rights@qantaraafricabooks.com" style={styles.email}>
          rights@qantaraafricabooks.com
        </a>
        <br />
        <Link to="/contact" className="btn btn-copper" style={{ marginTop: "1.2rem", display: "inline-block" }}>
          Send an Inquiry
        </Link>
      </div>
    </div>
  );
}

const styles = {
  lead: {
    fontFamily: "var(--font-display)",
    fontSize: "1.15rem",
    lineHeight: 1.85,
    maxWidth: "680px",
    marginBottom: "3rem",
    color: "var(--ink)",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "1.5rem",
    marginBottom: "3rem",
  },
  box: {
    background: "var(--forest)",
    padding: "2rem",
    color: "var(--cream)",
  },
  boxLabel: {
    fontSize: "0.72rem",
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    color: "var(--sand)",
    marginBottom: "1.2rem",
  },
  item: { fontSize: "0.88rem", lineHeight: 1.9, color: "var(--blush)" },
  dash: { color: "var(--copper)", marginRight: "0.4rem" },
  h2: {
    fontFamily: "var(--font-display)",
    fontSize: "1.7rem",
    color: "var(--forest)",
    marginTop: "3rem",
    marginBottom: "0.4rem",
  },
  regions: { display: "flex", flexWrap: "wrap", gap: "0.8rem", marginBottom: "3rem" },
  region: {
    padding: "0.4rem 1rem",
    border: "1px solid var(--copper)",
    color: "var(--copper)",
    fontSize: "0.78rem",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
  },
  body: {
    fontSize: "0.93rem",
    lineHeight: 1.9,
    maxWidth: "640px",
    opacity: 0.85,
    marginBottom: "3rem",
  },
  contact: {
    background: "var(--blush)",
    padding: "2rem 2.5rem",
    maxWidth: "420px",
  },
  contactLabel: {
    fontSize: "0.72rem",
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    color: "var(--ink)",
    opacity: 0.6,
    marginBottom: "0.8rem",
  },
  email: {
    fontFamily: "var(--font-display)",
    fontSize: "1.1rem",
    color: "var(--ink)",
  },
};