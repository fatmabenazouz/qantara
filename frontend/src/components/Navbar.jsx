import { useState } from "react";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/catalogue", label: "Catalogue" },
  { to: "/authors", label: "Authors" },
  { to: "/rights", label: "Rights" },
  { to: "/journal", label: "Journal" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav style={styles.nav}>
      <NavLink to="/" style={styles.brand}>
        Qantara
      </NavLink>

      {/* Desktop links */}
      <ul style={styles.links}>
        {links.map((l) => (
          <li key={l.to}>
            <NavLink
              to={l.to}
              end={l.to === "/"}
              style={({ isActive }) => ({
                ...styles.link,
                color: isActive ? "var(--copper)" : "var(--forest)",
                borderBottom: isActive ? "1px solid var(--copper)" : "none",
              })}
            >
              {l.label}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Mobile hamburger */}
      <button style={styles.hamburger} onClick={() => setOpen(!open)} aria-label="Menu">
        <span style={{ ...styles.bar, transform: open ? "rotate(45deg) translate(5px,5px)" : "none" }} />
        <span style={{ ...styles.bar, opacity: open ? 0 : 1 }} />
        <span style={{ ...styles.bar, transform: open ? "rotate(-45deg) translate(5px,-5px)" : "none" }} />
      </button>

      {/* Mobile menu */}
      {open && (
        <ul style={styles.mobileMenu}>
          {links.map((l) => (
            <li key={l.to} style={{ listStyle: "none" }}>
              <NavLink
                to={l.to}
                end={l.to === "/"}
                style={({ isActive }) => ({
                  ...styles.mobileLink,
                  color: isActive ? "var(--copper)" : "var(--cream)",
                })}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

const styles = {
  nav: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    background: "var(--cream)",
    borderBottom: "1px solid var(--blush)",
    padding: "1rem 2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  brand: {
    fontFamily: "var(--font-display)",
    fontSize: "1.5rem",
    color: "var(--forest)",
    letterSpacing: "0.05em",
    fontWeight: 600,
  },
  links: {
    display: "flex",
    gap: "2rem",
    listStyle: "none",
    alignItems: "center",
    flexWrap: "wrap",
  },
  link: {
    fontFamily: "var(--font-body)",
    fontSize: "0.78rem",
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    paddingBottom: "2px",
    transition: "color 0.2s",
  },
  hamburger: {
    display: "none",
    flexDirection: "column",
    gap: "5px",
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: "4px",
  },
  bar: {
    display: "block",
    width: "22px",
    height: "1.5px",
    background: "var(--forest)",
    transition: "all 0.3s",
  },
  mobileMenu: {
    position: "fixed",
    top: "57px",
    left: 0,
    right: 0,
    background: "var(--ink)",
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    gap: "1.2rem",
    listStyle: "none",
  },
  mobileLink: {
    fontFamily: "var(--font-body)",
    fontSize: "1.1rem",
    letterSpacing: "0.15em",
    textTransform: "uppercase",
  },
};

// Media query for hamburger — inject once
const style = document.createElement("style");
style.textContent = `
  @media (max-width: 720px) {
    nav ul:not([style*="position: fixed"]) { display: none !important; }
    button[aria-label="Menu"] { display: flex !important; }
  }
`;
document.head.appendChild(style);