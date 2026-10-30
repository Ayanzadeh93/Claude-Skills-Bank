# Changelog

All notable changes to this project will be documented in this file.

## [2.1.0] - 2026-10-30

### Added
- **`skills.json`** - machine-readable index of all 500 skills (id, name, description, category, file) for agents, editor extensions and catalog UIs
- **`scripts/build-skills-json.mjs`** - generator and validator; `--check` fails on stale output
- **`.github/workflows/validate-skills.yml`** - CI on every push/PR: unique IDs, correct prefix, contiguous `001-050` ranges, no drift between markdown and JSON
- **README "Programmatic Access"** - schema sketch plus `jq` recipes
- **`ROADMAP.md`**, animated **`assets/demo.svg`**, and README comparison table / 30-second start

### Fixed
- **Skill IDs used non-breaking hyphens** (`U+2011`) throughout the skills files, README and platform docs, so an ID copied from the docs was not the ID a user typed. All 1,000+ occurrences are now ASCII hyphens - IDs are greppable, copy-pasteable and parseable.

---

## [2.0.0] - 2026-05-02

### 🚀 Major Release: Multi-Platform Support

#### Added
- **6 platform adaptations** — Claude Code, Codex CLI, Gemini CLI, Kimi CLI, Aider, and Cline
- **`PLATFORMS.md`** — Cross-platform comparison guide
- **`CONTRIBUTING.md`** — Contribution guidelines
- **`LICENSE`** — MIT License
- **`assets/banner.svg`** — Repository banner
- **`.gitignore`** — Standard gitignore
- **Platform directories** under `platforms/` with README and config for each tool

#### Improved
- **README.md** — Complete overhaul with badges, table of contents, usage patterns, platform docs, and beautiful formatting
- **Skill quality** — Fixed capitalization inconsistencies, improved vague descriptions
- **Repository structure** — Organized with clear directory hierarchy

#### Fixed
- DS-027 capitalization ("explainer" → "Explainer")

---

## [1.0.0] – 2025

### Initial Release

- 500 skills across 10 categories
- Skills files organized under `skills/`
- Basic README with category table
