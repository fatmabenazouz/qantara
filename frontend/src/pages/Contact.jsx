import { useState } from "react";

const BACKEND_URL = import.meta.env.VITE_API_URL || "";

const fieldStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "0.4rem",
};

const labelStyle = {
  fontSize: "0.72rem",
  letterSpacing: "0.15em",
  textTransform: "uppercase",
  color: "var(--ink)",
  opacity: 0.7,
};

const inputStyle = {
  border: "1px solid var(--blush)",
  borderRadius: 0,
  padding: "0.75rem 1rem",
  fontFamily: "var(--font-body)",
  fontSize: "0.92rem",
  color: "var(--ink)",
  background: "#fff8f5",
  outline: "none",
  width: "100%",
};

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(`${BACKEND_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        console.error(data.error);
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <div className="page">
      <p className="page-subtitle">Get in Touch</p>
      <h1 className="page-title">Contact</h1>
      <div className="divider" />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          gap: "4rem",
          alignItems: "start",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <div>
            <p style={{ fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--copper)", marginBottom: "0.4rem" }}>
              General Inquiries
            </p>
            <p style={{ fontFamily: "var(--font-display)", fontSize: "0.95rem", color: "var(--forest)", wordBreak: "break-all" }}>
              contact@qantaraafricabooks.com
            </p>
          </div>

          <div>
            <p style={{ fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--copper)", marginBottom: "0.4rem" }}>
              Rights &amp; Partnerships
            </p>
            <p style={{ fontFamily: "var(--font-display)", fontSize: "0.95rem", color: "var(--forest)", wordBreak: "break-all" }}>
              rights@qantaraafricabooks.com
            </p>
          </div>

          <div>
            <p style={{ fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--copper)", marginBottom: "0.4rem" }}>
              Based In
            </p>
            <p style={{ fontSize: "0.95rem", color: "var(--ink)", opacity: 0.8 }}>
              Johannesburg, South Africa
            </p>
          </div>

          <div>
            <p style={{ fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--copper)", marginBottom: "0.4rem" }}>
              Social
            </p>
            <p style={{ fontFamily: "var(--font-display)", fontSize: "0.95rem", color: "var(--forest)" }}>
              Instagram
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
          <div style={fieldStyle}>
            <label style={labelStyle}>Name *</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>

          <div style={fieldStyle}>
            <label style={labelStyle}>Email *</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>

          <div style={fieldStyle}>
            <label style={labelStyle}>Subject</label>
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>

          <div style={fieldStyle}>
            <label style={labelStyle}>Message *</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              style={{ ...inputStyle, resize: "vertical" }}
            />
          </div>

          <button
            type="submit"
            className="btn btn-filled"
            disabled={status === "sending"}
            style={{ width: "100%" }}
          >
            {status === "sending" ? "Sending…" : "Send Message"}
          </button>

          {status === "success" && (
            <p style={{ color: "var(--forest)", fontSize: "0.85rem", padding: "0.8rem 1rem", background: "var(--blush)" }}>
              Message received. We will be in touch.
            </p>
          )}

          {status === "error" && (
            <p style={{ color: "#8b2500", fontSize: "0.85rem", padding: "0.8rem 1rem", background: "#fde8de" }}>
              Something went wrong. Please email us directly.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}