const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// In-memory store for contact submissions (replace with Supabase later if needed)
const contactSubmissions = [];

// GET all submissions (admin use)
app.get("/api/submissions", (req, res) => {
  res.json(contactSubmissions);
});

// POST a new contact message
app.post("/api/contact", (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email and message are required." });
  }

  const submission = {
    id: Date.now(),
    name,
    email,
    subject: subject || "General Inquiry",
    message,
    receivedAt: new Date().toISOString(),
  };

  contactSubmissions.push(submission);

  console.log("New contact submission:", submission);

  res.status(201).json({ success: true, message: "Message received. We will be in touch." });
});

// DELETE a submission by id
app.delete("/api/submissions/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = contactSubmissions.findIndex((s) => s.id === id);
  if (index === -1) return res.status(404).json({ error: "Submission not found." });
  contactSubmissions.splice(index, 1);
  res.json({ success: true });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Qantara API running on port ${PORT}`));

module.exports = app;