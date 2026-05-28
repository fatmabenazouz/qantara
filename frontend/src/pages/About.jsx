export default function About() {
    return (
      <div className="page">
        <p className="page-subtitle">Who We Are</p>
        <h1 className="page-title">About Qantara</h1>
        <div className="divider" />
  
        <p style={styles.lead}>
          QANTARA Africa Books is an independent publishing house based in Johannesburg,
          South Africa. Founded by Tunisian-born physician, filmmaker and writer Dr Hichem
          Ben Azouz, QANTARA was created with a clear vision: to build editorial and
          literary bridges between Anglophone and Francophone Africa.
        </p>
  
        <p style={styles.body}>
          While African literary spaces remain deeply connected historically and culturally,
          they are still often separated by language barriers, publishing systems and
          distribution networks. QANTARA seeks to create circulation between these worlds.
        </p>
  
        <h2 style={styles.h2}>Our Editorial Vision</h2>
        <div className="divider" />
        <p style={styles.body}>
          QANTARA focuses on literary fiction, border narratives, memory, exile,
          postcolonial imaginaries and contemporary African voices. We are particularly
          interested in works that explore displacement, identity, memory, spirituality,
          migration, historical fractures, contemporary African realities, and the
          circulation of cultures across the continent.
        </p>
        <p style={styles.body}>
          Our approach is intentionally selective. Rather than publishing a large number of
          titles, QANTARA aims to develop a carefully curated catalogue built around
          literary quality, long-term editorial relationships and international circulation.
        </p>
  
        <h2 style={styles.h2}>Johannesburg as a Literary Crossroads</h2>
        <div className="divider" />
        <p style={styles.body}>
          Johannesburg stands at the heart of our vision. As one of the continent's major
          cultural crossroads, the city represents movement, reinvention, fracture,
          migration and possibility. From Johannesburg, QANTARA seeks to imagine new
          literary circulations between Southern Africa, North Africa, the Francophone
          world and the African diaspora.
        </p>
  
        <div style={styles.missionBox}>
          <p style={styles.missionLabel}>Our Mission</p>
          {[
            "To support strong and original literary voices.",
            "To encourage translation and cross-border publishing.",
            "To foster dialogue between African literary spaces.",
            "To contribute to the emergence of a truly transnational African publishing culture.",
          ].map((item) => (
            <p key={item} style={styles.missionItem}>
              <span style={styles.bullet}>—</span> {item}
            </p>
          ))}
        </div>
      </div>
    );
  }
  
  const styles = {
    lead: {
      fontFamily: "var(--font-display)",
      fontSize: "1.25rem",
      lineHeight: 1.8,
      color: "var(--ink)",
      marginBottom: "1.5rem",
      fontWeight: 400,
    },
    body: {
      fontSize: "0.95rem",
      lineHeight: 1.9,
      color: "var(--ink)",
      marginBottom: "1.2rem",
      opacity: 0.85,
      maxWidth: "700px",
    },
    h2: {
      fontFamily: "var(--font-display)",
      fontSize: "1.8rem",
      color: "var(--forest)",
      marginTop: "3rem",
      marginBottom: "0.4rem",
    },
    missionBox: {
      background: "var(--forest)",
      padding: "2.5rem",
      marginTop: "3rem",
      maxWidth: "600px",
    },
    missionLabel: {
      fontFamily: "var(--font-body)",
      fontSize: "0.75rem",
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      color: "var(--sand)",
      marginBottom: "1.5rem",
    },
    missionItem: {
      color: "var(--cream)",
      fontSize: "0.92rem",
      lineHeight: 1.8,
      marginBottom: "0.6rem",
    },
    bullet: { color: "var(--copper)", marginRight: "0.5rem" },
  };