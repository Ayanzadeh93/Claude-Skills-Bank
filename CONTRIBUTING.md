# Contributing to AI Skills Bank

Thank you for your interest in contributing! This guide will help you get started.

---

## 🆕 Proposing New Skills

### Criteria for a Good Skill

A skill should be:

1. **Specific** — Clearly defined role with a distinct behavior
2. **Actionable** — The description tells the AI exactly what to do
3. **Reusable** — Useful across multiple tasks and contexts
4. **Unique** — Not a duplicate of an existing skill

### How to Propose

1. **Open an Issue** with the title: `[New Skill] Category‑XXX – Skill Name`
2. Include:
   - **Category** (GS, CS, DS, RS, WS, PS, ES, CR, OS, or AS)
   - **Proposed ID** (next available number in the category)
   - **Name** (concise, descriptive)
   - **Description** (one-line, actionable)
   - **Use case** (when would someone use this?)
3. If the skill is approved, submit a PR adding it to the appropriate file.

### Skill Naming Conventions

- Names should be **Title Case**
- Names should end with a role noun: Specialist, Assistant, Helper, Designer, Writer, Coach, etc.
- Names should be 2–5 words long

### Description Conventions

- Start with a **verb** (e.g., "Designs…", "Helps…", "Generates…", "Reviews…")
- Keep to **one sentence** (under 15 words ideal)
- Be **specific** about what the skill does, not vague

---

## ✏️ Improving Existing Skills

If a skill description is vague, misleading, or could be clearer:

1. Open a PR with the improved description
2. In the PR body, explain:
   - What was wrong with the original
   - Why your version is better
   - An example of the skill in action

---

## 🔌 Adding Platform Adaptations

We welcome adaptations for new AI coding platforms!

### Structure

Each platform gets its own directory under `platforms/`:

```
platforms/
└── your-platform/
    ├── README.md           ← Setup instructions and overview
    ├── SKILLS_CONFIG.md    ← Complete skills configuration file
    └── examples/           ← Usage examples (optional)
```

### Requirements

- **README.md** must include:
  - Platform name and brief description
  - Installation/setup instructions
  - How to load skills into the platform
  - Links to official platform documentation
- **SKILLS_CONFIG.md** must:
  - Adapt skills to the platform's native configuration format
  - Include at least the top 20 most useful skills
  - Use the platform's conventions (file format, syntax, etc.)

---

## 📝 Style Guide

### Markdown

- Use `‑` (non-breaking hyphen, U+2011) in skill IDs (e.g., `GS‑001`)
- Use `–` (en dash, U+2013) to separate ID from name (e.g., `GS‑001 – Name`)
- Use `&` in Markdown headings for compound category names
- Wrap skill entries in bold: `**GS‑001 – Name**`

### Formatting

- One skill per line
- Sequential numbering within each category file (1–50)
- Global numbering across all files (1–500)

---

## 🔄 Pull Request Process

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/add-new-skill`)
3. Make your changes
4. Ensure formatting is consistent
5. Submit a Pull Request with a clear description

---

## 💬 Questions?

Open an issue with the `question` label and we'll be happy to help!
