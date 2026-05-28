import { books } from "../data/books";
import { Link } from "react-router-dom";

export default function Catalogue() {
  return (
    <div className="page">
      <p className="page-subtitle">Publications</p>
      <h1 className="page-title">Our Books</h1>
      <div className="divider" />

      <div style={styles.grid}>
        {books.map((book) => (
          <article key={book.id} style={styles.card}>
            <div style={styles.spine} />
            <div style={styles.cardBody}>
              <p style={styles.status}>{book.status}</p>
              <h2 style={styles.bookTitle}>{book.title}</h2>
              <p style={styles.author}>by {book.author}</p>
              <p style={styles.tagline}>{book.tagline}</p>
              <p style={styles.desc}>{book.description}</p>

              <div style={styles.meta}>
                {book.formats.length > 0 && (
                  <div style={styles.metaRow}>
                    <span style={styles.metaLabel}>Formats</span>
                    <span>{book.formats.join(", ")}</span>
                  </div>
                )}
                <div style={styles.metaRow}>
                  <span style={styles.metaLabel}>Availability</span>
                  <span>{book.availability}</span>
                </div>
                <div style={styles.metaRow}>
                  <span style={styles.metaLabel}>Rights</span>
                  <span>{book.rightsNote}</span>
                </div>
              </div>

              <div style={styles.actions}>
                {book.buyLink && (
                  <a href={book.buyLink} target="_blank" rel="noreferrer" className="btn btn-filled">
                    Buy on Amazon
                  </a>
                )}
                <Link to="/contact" className="btn btn-copper">
                  Rights Inquiry
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "2rem",
    marginTop: "1rem",
  },
  card: {
    background: "#fff8f5",
    display: "flex",
    overflow: "hidden",
    boxShadow: "0 2px 16px rgba(38,19,17,0.07)",
    transition: "box-shadow 0.3s",
  },
  spine: {
    width: "6px",
    minHeight: "100%",
    background: "var(--copper)",
    flexShrink: 0,
  },
  cardBody: {
    padding: "2rem",
    flex: 1,
  },
  status: {
    fontFamily: "var(--font-body)",
    fontSize: "0.7rem",
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    color: "var(--copper)",
    marginBottom: "0.6rem",
  },
  bookTitle: {
    fontFamily: "var(--font-display)",
    fontSize: "1.9rem",
    color: "var(--forest)",
    marginBottom: "0.3rem",
  },
  author: {
    fontFamily: "var(--font-display)",
    fontStyle: "italic",
    fontSize: "1rem",
    color: "var(--copper)",
    marginBottom: "1rem",
  },
  tagline: {
    fontSize: "0.92rem",
    fontStyle: "italic",
    color: "var(--ink)",
    marginBottom: "0.8rem",
    opacity: 0.7,
  },
  desc: {
    fontSize: "0.87rem",
    lineHeight: 1.8,
    color: "var(--ink)",
    opacity: 0.8,
    marginBottom: "1.5rem",
  },
  meta: {
    borderTop: "1px solid var(--blush)",
    paddingTop: "1.2rem",
    marginBottom: "1.5rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    fontSize: "0.8rem",
    color: "var(--ink)",
    opacity: 0.8,
  },
  metaRow: { display: "flex", gap: "0.8rem", flexWrap: "wrap" },
  metaLabel: {
    color: "var(--copper)",
    fontWeight: 500,
    minWidth: "80px",
  },
  actions: { display: "flex", gap: "0.8rem", flexWrap: "wrap" },
};