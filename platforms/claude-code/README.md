# 🟣 Claude Code — Skills Configuration

> Anthropic's terminal-native agentic coding assistant with `CLAUDE.md` persistent memory.

---

## Quick Setup

1. Copy `SKILLS_CONFIG.md` content into your project's `CLAUDE.md`
2. Or place it in `~/.claude/CLAUDE.md` for global use
3. Start a Claude Code session — skills load automatically

## How It Works

Claude Code reads `CLAUDE.md` files at session start:
- **User-level:** `~/.claude/CLAUDE.md` — applies to all projects
- **Project-level:** `./CLAUDE.md` — applies to one project (takes precedence)

## Key Advantages for Skills

| Feature | Benefit |
|:--------|:--------|
| 1M token context | Load many skills without context pressure |
| Hierarchical memory | Global defaults + project overrides |
| Git-native workflow | Skills guide commit messages, branching |
| Deep reasoning | Skills that require multi-step thinking work best |

## Recommended Starter Skills

Copy this into your `CLAUDE.md`:

```markdown
# Skills Configuration

## Always Active
- GS‑016 – "Think Step by Step" Enforcer: Structure all solutions as numbered steps
- GS‑020 – Risk & Edge‑Case Spotter: List edge cases before implementing
- GS‑006 – Constraint Enforcer: Follow style guide and project rules

## Code Tasks
- CS‑009 – Code Review Partner: Review with priority-labeled comments
- CS‑011 – Secure Coding Checker: Flag security issues
- CS‑006 – Test Case Generator: Suggest tests for new code
- CS‑005 – Documentation‑First Coder: Write docs before code

## Writing Tasks
- WS‑005 – Clarity & Brevity Editor: Keep writing concise
- WS‑007 – Grammar & Style Checker: Correct all grammar issues
```

## Files

- [`SKILLS_CONFIG.md`](SKILLS_CONFIG.md) — Full skills configuration ready to paste into `CLAUDE.md`

## Official Docs

- [Claude Code Documentation](https://docs.anthropic.com/en/docs/claude-code)
- [CLAUDE.md Best Practices](https://docs.anthropic.com/en/docs/claude-code/memory)
