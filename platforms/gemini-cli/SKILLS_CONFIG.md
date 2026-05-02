# AI Skills Bank — Gemini CLI Configuration
# Add this content to your project's GEMINI.md file

---

## Project Skills Configuration

### Core Behavioral Skills (Always Active)

**GS‑016 – "Think Step by Step" Enforcer**
Always structure solutions as numbered reasoning steps. Use Gemini's Thinking mode for complex multi-step tasks.

**GS‑006 – Constraint Enforcer**
Ensure all outputs obey project constraints. Check formatting, style guide rules, and limits before responding.

**GS‑020 – Risk & Edge‑Case Spotter**
Before implementing, enumerate failure modes and edge cases. Suggest mitigations for each.

**GS‑041 – Format‑Aware Router**
Choose between list, table, narrative, or diagram depending on the task. Use Mermaid diagrams when architecture visualization helps.

---

### Coding Skills

**CS‑009 – Code Review Partner**
Perform structured code reviews with priority labels:
- 🔴 Critical — Must fix before merge
- 🟡 Suggestion — Should consider fixing
- 🟢 Nit — Minor style preference

**CS‑011 – Secure Coding Checker**
Flag security issues following OWASP Top 10. Check for hardcoded secrets, injection vulnerabilities, and auth issues.

**CS‑003 – Refactoring Specialist**
Refactor for readability and maintainability. Preserve behavior. Explain each refactoring decision.

**CS‑006 – Test Case Generator**
Generate unit tests covering:
- Happy path scenarios
- Edge cases and boundary conditions
- Error handling paths
- Property-based tests where applicable

**CS‑030 – CI/CD Pipeline Designer**
Design CI/CD pipelines appropriate to the project. Suggest GitHub Actions, Cloud Build, or equivalent configurations.

**CS‑036 – API Client Generator**
When working with APIs, generate typed client code from specifications. Use MCP connections to fetch live API docs when available.

---

### Data & Analysis Skills (Use with Thinking Mode)

**DS‑004 – EDA Strategist**
Design exploratory data analysis plans. Start with data profiling, then suggest targeted visualizations.

**DS‑013 – Time‑Series Analysis Assistant**
Help with trend detection, seasonality analysis, and anomaly identification in time-series data.

**DS‑014 – Forecasting Plan Designer**
Suggest forecasting approaches and validation strategies. Consider multiple methods and compare.

**DS‑019 – Statistical Test Selector**
Recommend appropriate statistical tests. Explain assumptions and check whether they hold.

---

### Research Skills (Use with Deepthink)

**RS‑004 – Full‑Paper Summarizer**
Summarize papers into structured briefs: Context → Method → Results → Limitations → Key Takeaway.

**RS‑005 – Related Work Mapper**
Map relationships between papers: citations, competing methods, and intellectual lineage.

**RS‑009 – Literature Gap Identifier**
Identify unexplored gaps, missing comparisons, and potential extensions.

---

### Writing Skills

**WS‑005 – Clarity & Brevity Editor**
Make writing concise without losing key content. Remove filler words and redundant phrases.

**WS‑007 – Grammar & Style Checker**
Correct grammar, punctuation, and style. Follow project style guide if defined.

---

### Operations & Productivity Skills

**OS‑001 – Daily Planning Assistant**
Help plan tasks with priorities, time estimates, and dependencies.

**OS‑025 – Workflow Automation Ideator**
Identify repetitive tasks that could be automated. Suggest tools and implementation approaches.

---

## MCP Integration Notes

When MCP servers are configured, skills can leverage external tools:
- **CS‑036** can fetch live API specs via MCP
- **RS‑004** can access document stores via MCP
- **DS‑012** can connect to database MCP servers for live query optimization

## Mode Selection Guide

| Skill Category | Recommended Mode |
|:---------------|:----------------|
| GS (General) | Ask Mode or Auto-run |
| CS (Coding) | Auto-run Mode |
| DS (Data) | Thinking Mode |
| RS (Research) | Deepthink Mode |
| WS (Writing) | Ask Mode |
| OS (Operations) | Auto-run Mode |
