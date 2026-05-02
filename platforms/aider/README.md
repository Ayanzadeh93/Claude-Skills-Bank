# 🟡 Aider — Skills Configuration

> Open-source, Git-first AI pair programmer with model-agnostic support and auto-commit workflows.

---

## Quick Setup

1. Copy the `system-prompt` content from `SKILLS_CONFIG.md`
2. Add it to your `.aider.conf.yml` file
3. Or pass via CLI: `aider --system-prompt "$(cat skills-prompt.txt)"`

## How It Works

Aider uses system prompts to define behavior:
- **`.aider.conf.yml`** — Project-level configuration with `system-prompt` field
- **CLI flags** — `--system-prompt` for ad-hoc skill loading
- **Architect mode** — Separate planning and coding agents

## Key Advantages for Skills

| Feature | Benefit |
|:--------|:--------|
| Git-first auto-commit | Every skill-guided change is auditable |
| Model-agnostic | Use skills with Claude, GPT, Gemini, DeepSeek, or local models |
| Repo-map awareness | Skills have architectural context automatically |
| 100+ languages | Skills apply across any language |
| Architect + Coder modes | Use planning skills in Architect, coding skills in Coder |

## Mode-Skill Mapping

| Mode | Best Skills | Use Case |
|:-----|:-----------|:---------|
| **Architect** | GS‑004, GS‑005, GS‑020, CS‑049 | Planning, decomposition, risk analysis |
| **Code** | CS‑003, CS‑006, CS‑047, CS‑024 | Implementation, testing, error handling |
| **Ask** | GS‑002, RS‑004, DS‑004 | Research, exploration, analysis |

## Files

- [`SKILLS_CONFIG.md`](SKILLS_CONFIG.md) — Full `.aider.conf.yml` configuration with skills

## Official Docs

- [Aider Documentation](https://aider.chat/docs/)
- [Aider GitHub](https://github.com/Aider-AI/aider)
