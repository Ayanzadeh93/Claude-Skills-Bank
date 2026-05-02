# 🔌 Cross-Platform Comparison Guide

A detailed comparison of how to use AI Skills Bank across different AI coding platforms.

---

## Platform Overview

| Feature | Claude Code | Codex CLI | Gemini CLI | Kimi CLI | Aider | Cline |
|:--------|:----------:|:---------:|:----------:|:--------:|:-----:|:-----:|
| **Provider** | Anthropic | OpenAI | Google | Moonshot AI | Open Source | Open Source |
| **Interface** | Terminal | Terminal + Desktop | Terminal | Terminal | Terminal | VS Code |
| **Config File** | `CLAUDE.md` | `~/.agents/skills/` | `GEMINI.md` | System prompt | `.aider.conf.yml` | Custom Instructions |
| **Context Window** | 1M tokens | 400K tokens | 2M tokens | 128K+ tokens | Model-dependent | Model-dependent |
| **Multi-Agent** | ❌ | ✅ | ✅ | ✅ (Swarm) | ❌ | ❌ |
| **Git Integration** | ✅ Native | ✅ Native | ✅ | ✅ | ✅ Auto-commit | ✅ |
| **MCP Support** | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ |
| **Browser Use** | ✅ | ✅ (Desktop) | ✅ | ❌ | ❌ | ✅ |
| **Model Agnostic** | ❌ (Claude) | ❌ (GPT) | ❌ (Gemini) | ❌ (Kimi) | ✅ | ✅ |
| **Open Source** | ❌ | ❌ | ✅ | ✅ | ✅ | ✅ |
| **Cost** | Subscription | Subscription | Free tier + paid | Free tier + paid | Free (BYOK) | Free (BYOK) |

---

## How Skills Map to Each Platform

### Skill Loading Mechanism

| Platform | How Skills Are Loaded |
|:---------|:---------------------|
| **Claude Code** | Written into `CLAUDE.md` files (project-level or user-level) that auto-load on session start |
| **Codex CLI** | Placed as files in `~/.agents/skills/` directory, auto-discovered by the agent |
| **Gemini CLI** | Written into `GEMINI.md` or project context files loaded at session initialization |
| **Kimi CLI** | Passed as system prompt content or configured via custom instructions |
| **Aider** | Defined in `.aider.conf.yml` under `system-prompt` or passed via `--system-prompt` flag |
| **Cline** | Configured as "Custom Instructions" in Cline's VS Code settings panel |

### Skill Format Differences

Each platform has slightly different conventions for how skills should be formatted:

#### Claude Code Format
```markdown
## Skill: CS‑003 – Refactoring Specialist
Refactor code for readability and maintainability while preserving behavior.
Always explain each refactoring decision and suggest tests for changed code.
```

#### Codex CLI Format
```markdown
# Skill Definition
name: CS‑003 – Refactoring Specialist
behavior: Refactor code for readability and maintainability while preserving behavior.
rules:
  - Preserve all existing tests
  - Suggest new tests for refactored code
  - Explain each refactoring decision
```

#### Gemini CLI Format
```markdown
## Active Skill: CS‑003 – Refactoring Specialist
When refactoring code, apply these principles:
- Prioritize readability and maintainability
- Preserve existing behavior (no functional changes)
- Document each refactoring decision inline
```

#### Aider Format
```yaml
system-prompt: |
  Active Skill CS‑003: You are a Refactoring Specialist.
  Refactor code for readability and maintainability while preserving behavior.
```

#### Cline / Kimi Format
```markdown
# Active Skills
- CS‑003 (Refactoring Specialist): Refactor code for readability and maintainability while preserving behavior. Explain each decision.
```

---

## Recommended Skill Sets by Platform

### For Claude Code Users
Best suited skills leverage Claude's deep reasoning and large context window:

| Skill Set | Skills | Why |
|:----------|:-------|:----|
| **Deep Code Review** | CS‑009, CS‑011, CS‑010, GS‑020 | Claude excels at thorough, multi-aspect review |
| **Research Workflows** | RS‑004, RS‑005, RS‑009, RS‑017 | Large context handles entire papers |
| **Documentation** | CS‑005, CS‑035, CS‑028, WS‑029 | Strong writing quality |

### For Codex CLI Users
Best suited skills leverage multi-agent orchestration and cloud sandboxing:

| Skill Set | Skills | Why |
|:----------|:-------|:----|
| **Parallel Dev** | CS‑006, CS‑009, CS‑011 (parallel) | Run tests, review, and security in parallel agents |
| **Full Lifecycle** | CS‑030, CS‑031, CS‑032 | CI/CD, Docker, IaC in sandbox |
| **Rapid Prototyping** | CS‑047, CS‑016, CS‑017 | Quick scaffold with test execution |

### For Gemini CLI Users
Best suited skills leverage MCP integration and reasoning modes:

| Skill Set | Skills | Why |
|:----------|:-------|:----|
| **MCP-Enhanced** | CS‑036, DS‑012, OS‑026 | Connect to external tools via MCP |
| **Deep Analysis** | DS‑004, DS‑013, DS‑014 | Gemini Deepthink for complex analysis |
| **Multi-Format** | GS‑041, GS‑013, GS‑011 | Flexible output formatting |

### For Kimi CLI Users
Best suited skills leverage agent swarm and shell integration:

| Skill Set | Skills | Why |
|:----------|:-------|:----|
| **Swarm Tasks** | CS‑049, GS‑004, GS‑005 | Decompose and parallelize with sub-agents |
| **Shell Workflows** | CS‑026, CS‑030, CS‑031 | Direct shell integration |
| **Large Codebases** | CS‑034, CS‑022, CS‑028 | Navigate and understand large repos |

### For Aider Users
Best suited skills leverage Git-first workflow and model flexibility:

| Skill Set | Skills | Why |
|:----------|:-------|:----|
| **Git-Native** | CS‑029, CS‑041, CS‑042 | Pairs perfectly with auto-commit |
| **Iterative Dev** | GS‑036, CS‑003, CS‑006 | Build-test-fix loops with auto-commit |
| **Code Quality** | CS‑021, CS‑043, CS‑024 | Enforce consistency across commits |

### For Cline Users
Best suited skills leverage VS Code integration and browser automation:

| Skill Set | Skills | Why |
|:----------|:-------|:----|
| **Full-Stack** | CS‑015, CS‑017, CS‑018 | Frontend + API design in IDE |
| **Visual Tasks** | PS‑009, PS‑010, PS‑044 | UI/UX with live preview |
| **Documentation** | CS‑035, CS‑005, WS‑029 | Docs alongside code |

---

## Migration Between Platforms

If you're switching between platforms, here's a quick mapping:

| Source | Target | Key Changes |
|:-------|:-------|:------------|
| Claude Code → Codex CLI | Move `CLAUDE.md` content to `~/.agents/skills/` files |
| Claude Code → Gemini CLI | Rename `CLAUDE.md` to `GEMINI.md`, adjust format |
| Codex CLI → Claude Code | Merge skill files into single `CLAUDE.md` |
| Aider → Claude Code | Move `system-prompt` from YAML to `CLAUDE.md` |
| Any → Cline | Copy skill descriptions to Custom Instructions panel |

---

<p align="center">
  <sub>See individual platform directories under <code>platforms/</code> for ready-to-use configurations.</sub>
</p>
