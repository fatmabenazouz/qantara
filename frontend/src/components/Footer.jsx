import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.inner}>
        <div style={styles.brand}>
          <p style={styles.name}>Qantara Africa Books</p>
          <p style={styles.tagline}>Independent Pan-African Publishing House</p>
          <p style={styles.location}>Johannesburg, South Africa</p>
        </div>
        <div style={styles.links}>
          {["/about", "/catalogue", "/authors", "/rights", "/journal", "/contact"].map((path) => (
            <Link key={path} to={path} style={styles.link}>
              {path.replace("/", "").replace(/^\w/, (c) => c.toUpperCase())}
            </Link>
          ))}
        </div>
        <div style={styles.contact}>
          <p>contact@qantaraafricabooks.com</p>
          <p>rights@qantaraafricabooks.com</p>
          <div style={{ marginTop: "0.8rem" }}>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" style={styles.social}>
              Instagram
            </a>
          </div>
        </div>
      </div>
      <div style={styles.copy}>
        © 2026 Qantara Africa Books. All rights reserved.
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    background: "var(--ink)",
    color: "var(--blush)",
    padding: "4rem 2rem 2rem",
    fontFamily: "var(--font-body)",
    fontSize: "0.85rem",
  },
  inner: {
    maxWidth: "900px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "2fr 1fr 1.5fr",
    gap: "3rem",
    paddingBottom: "2.5rem",
    borderBottom: "1px solid #3a2a28",
    flexWrap: "wrap",
  },
  brand: {},
  name: {
    fontFamily: "var(--font-display)",
    fontSize: "1.4rem",
    color: "var(--blush)",
    marginBottom: "0.3rem",
  },
  tagline: { color: "#a08070", fontSize: "0.78rem", lineHeight: 1.6 },
  location: { color: "#a08070", fontSize: "0.78rem", marginTop: "0.3rem" },
  links: {
    display: "flex",
    flexDirection: "column",
    gap: "0.6rem",
  },
  link: {
    color: "#a08070",
    fontSize: "0.78rem",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    transition: "color 0.2s",
  },
  contact: { color: "#a08070", lineHeight: 1.9 },
  social: {
    color: "var(--sand)",
    fontSize: "0.78rem",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
  },
  copy: {
    maxWidth: "900px",
    margin: "1.5rem auto 0",
    color: "#5a4040",
    fontSize: "0.75rem",
    letterSpacing: "0.08em",
  },
};