# 🌙 Kimi CLI — Skills Configuration

> Moonshot AI's terminal-first coding agent with agent swarm orchestration and ACP/MCP support.

---

## Quick Setup

1. Use skills as system prompt content when starting Kimi CLI
2. Or configure via custom instructions in your project
3. Use shell mode (`Ctrl-X`) for direct command execution with skill guidance

## How It Works

Kimi CLI operates as a "chassis" for Moonshot's coding models:
- **System prompts** define skill behaviors
- **Agent swarm** can spawn sub-agents with specialized skills
- **Shell mode** allows inline command execution guided by skills
- **ACP/MCP** connects to external tool ecosystem

## Key Advantages for Skills

| Feature | Benefit |
|:--------|:--------|
| Agent swarm (up to 300 sub-agents) | Massive parallelization of skill tasks |
| Shell integration mode | Skills guide shell commands directly |
| ACP + MCP support | Skills connect to external tools |
| 128K+ context | Reasonable context for skill loading |
| Cost-effective | Run many skill-equipped sessions affordably |

## Recommended Configurations

### Solo Agent (Simple Tasks)
```
Skills: GS‑016, CS‑003, CS‑006
```

### Swarm (Complex Projects)
```
Main Agent:     GS‑004 (Task Decomposer) + GS‑005 (Orchestrator)
Sub-Agent 1:    CS‑003 (Refactoring) + CS‑006 (Testing)
Sub-Agent 2:    CS‑011 (Security) + CS‑033 (Threat Modeling)
Sub-Agent 3:    CS‑005 (Documentation) + CS‑035 (Docs Generator)
```

## Files

- [`SKILLS_CONFIG.md`](SKILLS_CONFIG.md) — Full skills configuration for Kimi CLI

## Official Docs

- [Kimi CLI GitHub](https://github.com/kimiCli/kimi-cli)
- [Moonshot AI Platform](https://platform.moonshot.ai)
