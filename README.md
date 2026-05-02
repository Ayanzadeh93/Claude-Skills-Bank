# Claude Skills Bank

A curated library of Claude “skills” – reusable roles, patterns, and prompt templates you can plug into your workflows, products, and agents.

---

## Repository overview

- 10 main categories.  
- 500 skills total (50 per category).  
- Each skill has:
  - An **ID** (stable reference for tooling and documentation).
  - A **Name**.
  - A **One‑line description**.

You can use each skill as:

- A **system prompt role**.  
- A **named tool/agent behavior** (e.g., “route coding tasks to CS‑012 Code Refactoring Specialist”).  
- A **prompt preset** in your own UI.

---

## Categories

| Prefix | Range       | Category                                   |
|--------|-------------|--------------------------------------------|
| GS     | GS‑001–050  | General & Meta Skills                      |
| CS     | CS‑001–050  | Coding & Code Review                       |
| DS     | DS‑001–050  | Data, Analysis & Math                      |
| RS     | RS‑001–050  | Research & Reading                         |
| WS     | WS‑001–050  | Writing & Editing                          |
| PS     | PS‑001–050  | Product, UX & Business                     |
| ES     | ES‑001–050  | Education & Teaching                       |
| CR     | CR‑001–050  | Creativity & Ideation                      |
| OS     | OS‑001–050  | Operations & Productivity                  |
| AS     | AS‑001–050  | Accessibility, Vision & Multimodal         |

Each category is also available in its own file under `skills/` for easier browsing.

---

## Files in this repo

- `README.md` – Overview, table of categories, and quick usage notes.
- `skills/skills-general-meta.md` – General & Meta Skills (GS‑001–GS‑050).
- `skills/skills-coding.md` – Coding & Code Review (CS‑001–CS‑050).
- `skills/skills-data-analysis.md` – Data, Analysis & Math (DS‑001–DS‑050).
- `skills/skills-research-reading.md` – Research & Reading (RS‑001–RS‑050).
- `skills/skills-writing-editing.md` – Writing & Editing (WS‑001–WS‑050).
- `skills/skills-product-ux-business.md` – Product, UX & Business (PS‑001–PS‑050).
- `skills/skills-education-teaching.md` – Education & Teaching (ES‑001–ES‑050).
- `skills/skills-creativity-ideation.md` – Creativity & Ideation (CR‑001–CR‑050).
- `skills/skills-operations-productivity.md` – Operations & Productivity (OS‑001–OS‑050).
- `skills/skills-accessibility-multimodal.md` – Accessibility, Vision & Multimodal (AS‑001–AS‑050).

---

## How to use these skills

- **As prompt roles** – Copy the ID + name + description into your Claude system prompt as a role definition.
- **As agents/tools** – Map specific IDs to tools or agents (e.g., route coding tasks to `CS‑001`–`CS‑050`).
- **As presets** – Save common skill IDs as presets in your own UI or scripts.

For the full list of skills by category, see the files under `skills/`.
