# 🟢 Codex CLI — Skills Configuration

> OpenAI's agentic terminal coding tool with multi-agent orchestration and cloud sandboxing.

---

## Quick Setup

1. Create the skills directory: `mkdir -p ~/.agents/skills/`
2. Copy skill files from this directory into `~/.agents/skills/`
3. Codex CLI auto-discovers skills at session start

## How It Works

Codex CLI supports a "Skills" system (introduced Dec 2025):
- Skills are stored as files in `~/.agents/skills/`
- Each skill file defines a behavior the agent inherits
- Multiple agents can run in parallel, each with different skill sets

## Key Advantages for Skills

| Feature | Benefit |
|:--------|:--------|
| Multi-agent orchestration | Run different skills in parallel agents |
| Cloud sandbox execution | Test skills in isolated environments |
| 400K token context | Substantial codebase awareness |
| Git lifecycle management | Skills guide full PR workflow |

## Recommended Starter Skills

### Parallel Agent Configuration

```
Agent 1 (Feature Dev):    CS‑047, CS‑003, CS‑005
Agent 2 (Testing):        CS‑006, CS‑041, CS‑007
Agent 3 (Security):       CS‑011, CS‑033, GS‑020
```

## Files

- [`SKILLS_CONFIG.md`](SKILLS_CONFIG.md) — Full skills configuration for Codex CLI

## Official Docs

- [Codex CLI Documentation](https://platform.openai.com/docs/codex)
