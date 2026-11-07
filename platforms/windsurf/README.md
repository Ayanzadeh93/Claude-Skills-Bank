# Windsurf — Skills Configuration

> One project rule file for the Windsurf editor. Five flagship skills from the bank, in the `.windsurfrules` file Windsurf still imports.

---

## Quick Setup

1. Copy [`.windsurfrules`](.windsurfrules) to your project root. Keep the name `.windsurfrules`.
2. Or paste [`SKILLS_CONFIG.md`](SKILLS_CONFIG.md) into the workspace rules editor.
3. Open the project in Windsurf. The file loads for the whole session, so each skill says when to apply it.

## What is in the pack

| Skill | When it applies |
|:------|:----------------|
| GS-016 | Every session |
| GS-020 | Before an implementation |
| CS-009 | Code review |
| CS-011 | Security pass on a change |
| DS-004 | Exploring a dataset |

Descriptions are copied from `skills.json`. The full bank stays in [`skills/`](../../skills/).

## Files

- [`.windsurfrules`](.windsurfrules) — Copy to the project root
- [`SKILLS_CONFIG.md`](SKILLS_CONFIG.md) — Same five skills, for a paste into workspace rules

## Official docs

- [Rules, including the imported `.windsurfrules` file](https://docs.devin.ai/desktop/cascade/memories#rules)
