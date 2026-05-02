# 🔶 Cline — Skills Configuration

> Autonomous AI coding agent for VS Code with browser automation and MCP support.

---

## Quick Setup

1. Open VS Code → Cline extension settings
2. Find the "Custom Instructions" field
3. Paste the content from `SKILLS_CONFIG.md`
4. Skills are now active in every Cline session

## How It Works

Cline uses "Custom Instructions" as persistent system prompts:
- Set via VS Code extension settings
- Applied to every interaction automatically
- Supports any model (Claude, GPT, Gemini, etc.)

## Key Advantages for Skills

| Feature | Benefit |
|:--------|:--------|
| VS Code native | Skills work alongside your IDE features |
| Browser automation | Skills can guide web-based tasks |
| MCP support | Skills connect to external tool servers |
| Model-agnostic | Use skills with any supported model |
| File system access | Skills guide direct file operations |
| Terminal integration | Skills guide command execution |

## Best Use Cases

| Skill Category | Cline Strength |
|:---------------|:---------------|
| CS (Coding) | Full IDE context — file editing, terminal, debugging |
| PS (Product/UX) | Browser automation for visual testing |
| WS (Writing) | In-editor documentation with live preview |
| OS (Operations) | Terminal commands with IDE context |

## Files

- [`SKILLS_CONFIG.md`](SKILLS_CONFIG.md) — Full custom instructions for Cline

## Official Docs

- [Cline Documentation](https://docs.cline.bot)
- [Cline VS Code Extension](https://marketplace.visualstudio.com/items?itemName=saoudrizwan.claude-dev)
