#!/usr/bin/env node
/**
 * Build (or verify) skills.json from the markdown skill files.
 *
 *   node scripts/build-skills-json.mjs          # write skills.json
 *   node scripts/build-skills-json.mjs --check   # fail if skills.json is stale or invalid
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SKILLS_DIR = path.join(ROOT, "skills");
const OUT_FILE = path.join(ROOT, "skills.json");
const CHECK = process.argv.includes("--check");

// The markdown uses typographic hyphens in places; normalize before parsing so
// IDs stay copy-pasteable and grep-able.
const norm = (s) => s.replace(/[\u2010\u2011\u2012]/g, "-");
const DASH = "[-\\u2013\\u2014]";

const files = fs
  .readdirSync(SKILLS_DIR)
  .filter((f) => f.startsWith("skills-") && f.endsWith(".md"))
  .sort();

const errors = [];
const categories = [];
const skills = [];
const seenIds = new Map();

for (const file of files) {
  const text = norm(fs.readFileSync(path.join(SKILLS_DIR, file), "utf8"));
  const lines = text.split(/\r?\n/);

  const header = lines.find((l) => /^#\s/.test(l)) ?? "";
  const hm = header.match(
    new RegExp(`^#\\s*\\d+\\.\\s*(.+?)\\s*\\(([A-Z]{2})-(\\d{3})${DASH}([A-Z]{2})-(\\d{3})\\)`)
  );
  if (!hm) {
    errors.push(`${file}: missing "# <n>. <Category> (<PREFIX>-001-<PREFIX>-050)" header`);
    continue;
  }
  const category = hm[1].trim();
  const prefix = hm[2];
  const rangeStart = Number(hm[3]);
  const rangeEnd = Number(hm[5]);
  if (hm[4] !== prefix) errors.push(`${file}: range prefixes differ (${prefix} vs ${hm[4]})`);

  const itemRe = new RegExp(
    `^\\s*\\d+\\.\\s*\\*\\*([A-Z]{2})-(\\d{3})\\s*${DASH}\\s*(.+?)\\*\\*\\s*${DASH}\\s*(.+?)\\s*$`
  );

  let count = 0;
  for (const line of lines) {
    if (!/^\s*\d+\.\s*\*\*/.test(line)) continue;
    const m = line.match(itemRe);
    if (!m) {
      errors.push(`${file}: unparseable skill line -> ${line.slice(0, 80)}`);
      continue;
    }
    const id = `${m[1]}-${m[2]}`;
    if (m[1] !== prefix) errors.push(`${file}: ${id} does not belong to prefix ${prefix}`);
    if (seenIds.has(id)) errors.push(`duplicate id ${id} (${seenIds.get(id)} and ${file})`);
    seenIds.set(id, file);
    const skill = {
      id,
      name: m[3].trim(),
      description: m[4].trim().replace(/\s+/g, " "),
      category,
      file: `skills/${file}`,
    };
    if (!skill.name) errors.push(`${file}: ${id} has an empty name`);
    if (skill.description.length < 10) errors.push(`${file}: ${id} has a too-short description`);
    skills.push(skill);
    count += 1;
  }

  const expected = rangeEnd - rangeStart + 1;
  if (count !== expected) errors.push(`${file}: found ${count} skills, range promises ${expected}`);
  categories.push({ name: category, prefix, file: `skills/${file}`, count });
}

const byPrefix = Object.fromEntries(
  categories.map((c) => [
    c.prefix,
    skills.filter((s) => s.id.startsWith(`${c.prefix}-`)).map((s) => Number(s.id.split("-")[1])),
  ])
);
for (const [prefix, nums] of Object.entries(byPrefix)) {
  for (let i = 1; i <= 50; i += 1) {
    if (!nums.includes(i)) errors.push(`${prefix}-${String(i).padStart(3, "0")} is missing`);
  }
}

const index = {
  schemaVersion: 1,
  name: "AI Skills Bank",
  description:
    "500 reusable AI skills with stable IDs, for Claude Code, Codex CLI, Gemini CLI, Kimi CLI, Aider and Cline.",
  repo: "https://github.com/Ayanzadeh93/Claude-Skills-Bank",
  license: "MIT",
  total: skills.length,
  categories,
  skills,
};
const serialized = `${JSON.stringify(index, null, 2)}\n`;

if (CHECK) {
  if (!fs.existsSync(OUT_FILE)) {
    errors.push("skills.json is missing — run: node scripts/build-skills-json.mjs");
  } else if (fs.readFileSync(OUT_FILE, "utf8") !== serialized) {
    errors.push("skills.json is out of date — run: node scripts/build-skills-json.mjs");
  }
} else {
  fs.writeFileSync(OUT_FILE, serialized);
}

if (errors.length) {
  console.error(`✗ ${errors.length} problem(s):`);
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}

console.log(
  `${CHECK ? "✓ valid" : "✓ wrote skills.json"} — ${skills.length} skills across ${categories.length} categories`
);
