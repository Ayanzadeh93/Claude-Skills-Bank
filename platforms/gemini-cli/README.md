# 🔵 Gemini CLI — Skills Configuration

> Google's open-source terminal AI agent with MCP integration and multi-autonomy modes.

---

## Quick Setup

1. Create a `GEMINI.md` file in your project root
2. Paste the skills configuration from `SKILLS_CONFIG.md`
3. Run `gemini` in your project directory — context loads automatically

## How It Works

Gemini CLI uses project context files:
- **`GEMINI.md`** — Project-specific instructions and skills
- **`tech_stack.md`** — Technology stack documentation
- Supports MCP for connecting to external tools and services

### Autonomy Modes

| Mode | Use With Skills |
|:-----|:----------------|
| **Ask Mode** | Interactive brainstorming — use GS‑002, GS‑017, CR skills |
| **Auto-run Mode** | Autonomous execution — use CS, OS skills with safety checks |
| **Thinking Mode** | Deep reasoning — use RS, DS skills for complex analysis |
| **Fast Mode** | Quick tasks — use GS‑040, WS‑005 for concise output |

## Key Advantages for Skills

| Feature | Benefit |
|:--------|:--------|
| 2M token context | Load entire codebases + all skills simultaneously |
| MCP integration | Skills can leverage external tools via MCP |
| Multi-autonomy modes | Match skill complexity to execution mode |
| Open source | Customize skill loading behavior |
| Deepthink | Parallel evaluation for complex skill tasks |

## Files

- [`SKILLS_CONFIG.md`](SKILLS_CONFIG.md) — Full skills configuration for `GEMINI.md`

## Official Docs

- [Gemini CLI GitHub](https://github.com/google-gemini/gemini-cli)
- [Gemini API Documentation](https://ai.google.dev/docs)
