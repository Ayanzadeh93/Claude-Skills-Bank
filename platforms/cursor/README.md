# Cursor — Skills Configuration

> Project rules for the Cursor editor. Five flagship skills from the bank, as files you can drop into `.cursor/rules`.

---

## Quick Setup

1. Copy `rules/` into your project as `.cursor/rules/` (keep the `.mdc` files).
2. Or paste `SKILLS_CONFIG.md` into a project rule if you want one file instead of five.
3. Open the project in Cursor. Rules with `alwaysApply: true` load every chat. The others load when the request matches their description.

## What is in the pack

| Rule file | Skill | When it applies |
|:----------|:------|:----------------|
| `gs-016-step-by-step.mdc` | GS-016 | Every chat |
| `gs-020-risk-edge-cases.mdc` | GS-020 | Before an implementation |
| `cs-009-code-review.mdc` | CS-009 | Code review |
| `cs-011-secure-coding.mdc` | CS-011 | Security pass on a change |
| `ds-004-eda.mdc` | DS-004 | Exploring a dataset |

Descriptions are copied from `skills.json`. The full bank stays in [`skills/`](../../skills/).

## Files

- [`rules/`](rules/) — Copy into `.cursor/rules/`
- [`SKILLS_CONFIG.md`](SKILLS_CONFIG.md) — Same five skills in one paste block

## Official docs

- [Cursor Rules](https://docs.cursor.com/context/rules)
