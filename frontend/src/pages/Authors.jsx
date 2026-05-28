export default function Authors() {
    return (
      <div className="page">
        <p className="page-subtitle">Voices</p>
        <h1 className="page-title">Authors</h1>
        <div className="divider" />
  
        <div style={styles.card}>
          <div style={styles.header}>
            <div style={styles.initial}>H</div>
            <div>
              <h2 style={styles.name}>Dr Hichem Ben Azouz</h2>
              <p style={styles.role}>Founder, Qantara Africa Books</p>
            </div>
          </div>
  
          <p style={styles.bio}>
            Dr Hichem Ben Azouz is a Tunisian-born physician, filmmaker and novelist
            based in Johannesburg, South Africa. His work explores themes of exile,
            memory, identity, spirituality and postcolonial experience through a
            deeply cinematic and literary approach.
          </p>
  
          <div style={styles.works}>
            <p style={styles.worksLabel}>Selected Works</p>
            {[
              { title: "SANGOMA – Le guérisseur", note: "" },
              { title: "CERCLE", note: "" },
              { title: "Les Veilleurs", note: "forthcoming" },
            ].map((w) => (
              <div key={w.title} style={styles.work}>
                <span style={styles.dash}>—</span>
                <span style={styles.workTitle}>{w.title}</span>
                {w.note && <span style={styles.workNote}>{w.note}</span>}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  const styles = {
    card: {
      background: "#fff8f5",
      padding: "2.5rem",
      maxWidth: "660px",
      boxShadow: "0 2px 20px rgba(38,19,17,0.07)",
    },
    header: {
      display: "flex",
      alignItems: "center",
      gap: "1.5rem",
      marginBottom: "1.8rem",
    },
    initial: {
      width: "64px",
      height: "64px",
      borderRadius: "50%",
      background: "var(--forest)",
      color: "var(--cream)",
      fontFamily: "var(--font-display)",
      fontSize: "2rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    },
    name: {
      fontFamily: "var(--font-display)",
      fontSize: "1.6rem",
      color: "var(--forest)",
      marginBottom: "0.2rem",
    },
    role: {
      fontSize: "0.78rem",
      letterSpacing: "0.15em",
      textTransform: "uppercase",
      color: "var(--copper)",
    },
    bio: {
      fontSize: "0.93rem",
      lineHeight: 1.9,
      color: "var(--ink)",
      opacity: 0.85,
      marginBottom: "2rem",
    },
    works: {
      borderTop: "1px solid var(--blush)",
      paddingTop: "1.5rem",
    },
    worksLabel: {
      fontSize: "0.75rem",
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      color: "var(--copper)",
      marginBottom: "1rem",
    },
    work: {
      display: "flex",
      alignItems: "baseline",
      gap: "0.7rem",
      marginBottom: "0.6rem",
    },
    dash: { color: "var(--copper)", fontSize: "1rem" },
    workTitle: {
      fontFamily: "var(--font-display)",
      fontSize: "1.1rem",
      color: "var(--forest)",
    },
    workNote: {
      fontSize: "0.75rem",
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: "var(--sand)",
    },
  };