#!/usr/bin/env node
/**
 * Websites repo validator. Zero dependencies, Node 18+.
 *
 *   node check.mjs        exit 0 = all sites conform; exit 1 = contract broken
 *
 * Applies the CLAUDE.md contract to EVERY folder under sites/ (current and future):
 *  - each site has a brief (briefs/<slug>-design-brief.md) and a README.md contract
 *  - every HTML page: doctype, correct lang (nl under nl/), exactly one <h1>,
 *    non-empty <title>, meta description, viewport, alt on images,
 *    balanced structural tags, and internal links/assets that resolve
 *  - language subfolders mirror the top-level page set exactly (file parity)
 *  - TODO stubs are counted and reported (visibility, not failure)
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const SITES = path.join(ROOT, 'sites');
const errors = [];
const warnings = [];
const err = (m) => errors.push(m);
const warn = (m) => warnings.push(m);

const LANG_DIRS = ['nl', 'fr', 'de', 'en'];
const STRUCTURAL = ['div', 'section', 'main', 'header', 'footer', 'nav', 'ul', 'ol', 'article', 'aside'];

function* htmlFiles(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) yield* htmlFiles(p);
    else if (e.name.endsWith('.html')) yield p;
  }
}

function checkPage(file, siteDir) {
  const rel = path.relative(siteDir, file);
  const site = path.basename(siteDir);
  const where = `sites/${site}/${rel}`;
  const html = fs.readFileSync(file, 'utf8');

  if (!/^<!DOCTYPE html>/i.test(html.trim())) err(`${where}: missing <!DOCTYPE html>`);

  const langMatch = html.match(/<html[^>]*\blang="([^"]*)"/);
  if (!langMatch) err(`${where}: <html> has no lang attribute`);
  else {
    const dirLang = LANG_DIRS.find((l) => rel.split(path.sep).includes(l));
    const expected = dirLang || 'en';
    if (langMatch[1] !== expected) err(`${where}: lang="${langMatch[1]}" but pages ${dirLang ? `under ${dirLang}/` : 'at the top level'} must be lang="${expected}"`);
  }

  const h1s = html.match(/<h1[\s>]/g) || [];
  if (h1s.length !== 1) err(`${where}: has ${h1s.length} <h1> elements — every page needs exactly one`);
  if (!/<title>[^<]+<\/title>/.test(html)) err(`${where}: missing or empty <title>`);
  if (!/<meta name="description" content="[^"]+"/.test(html)) err(`${where}: missing meta description`);
  if (!/<meta name="viewport"/.test(html)) err(`${where}: missing viewport meta — pages must be responsive`);

  for (const img of html.matchAll(/<img\b[^>]*>/g)) {
    if (!/\balt="/.test(img[0])) err(`${where}: <img> without alt attribute: ${img[0].slice(0, 60)}…`);
  }

  for (const tag of STRUCTURAL) {
    const open = (html.match(new RegExp(`<${tag}[\\s>]`, 'g')) || []).length;
    const close = (html.match(new RegExp(`</${tag}>`, 'g')) || []).length;
    if (open !== close) err(`${where}: unbalanced <${tag}> — ${open} opened, ${close} closed`);
  }

  // internal links & assets must resolve
  for (const m of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const url = m[1];
    if (/^(https?:|mailto:|tel:|#|data:)/.test(url)) continue;
    const target = url.split('#')[0].split('?')[0];
    if (!target) continue;
    const resolved = path.resolve(path.dirname(file), target);
    if (!fs.existsSync(resolved)) err(`${where}: broken internal link/asset "${url}"`);
  }

  return (html.match(/TODO/g) || []).length;
}

if (!fs.existsSync(SITES)) {
  console.log('✓ no sites/ directory yet — nothing to validate');
  process.exit(0);
}

const sites = fs.readdirSync(SITES, { withFileTypes: true }).filter((e) => e.isDirectory()).map((e) => e.name);
let pages = 0;
for (const site of sites) {
  const siteDir = path.join(SITES, site);
  if (!fs.existsSync(path.join(ROOT, 'briefs', `${site}-design-brief.md`))) {
    err(`sites/${site}: no design brief at briefs/${site}-design-brief.md — every site starts from a brief (run /design-website)`);
  }
  if (!fs.existsSync(path.join(siteDir, 'README.md'))) {
    err(`sites/${site}: no README.md contract — every site documents its decisions, stubs and deploy notes`);
  }

  let todos = 0;
  const topPages = [];
  for (const f of htmlFiles(siteDir)) {
    pages++;
    todos += checkPage(f, siteDir);
    if (path.dirname(f) === siteDir) topPages.push(path.basename(f));
  }
  if (!topPages.includes('index.html')) err(`sites/${site}: no top-level index.html`);

  // language parity: every lang subfolder mirrors the top-level page set exactly
  for (const lang of LANG_DIRS) {
    const langDir = path.join(siteDir, lang);
    if (!fs.existsSync(langDir) || !fs.statSync(langDir).isDirectory()) continue;
    const langPages = fs.readdirSync(langDir).filter((f) => f.endsWith('.html')).sort();
    const top = [...topPages].sort();
    const missing = top.filter((p) => !langPages.includes(p));
    const extra = langPages.filter((p) => !top.includes(p));
    for (const p of missing) err(`sites/${site}: ${lang}/${p} is missing — language folders mirror the top-level page set`);
    for (const p of extra) err(`sites/${site}: ${lang}/${p} has no top-level counterpart — add ${p} or remove the orphan`);
  }

  if (todos) warn(`sites/${site}: ${todos} TODO stub(s) still open — see the stub list in sites/${site}/README.md`);
}

for (const e of errors) console.log(`✗ ${e}`);
for (const w of warnings) console.log(`△ ${w}`);
console.log(errors.length
  ? `${errors.length} error(s), ${warnings.length} warning(s).`
  : `✓ ${sites.length} site(s), ${pages} page(s) — structure, links, lang parity and HTML basics all conform${warnings.length ? ` (${warnings.length} warning(s) above)` : ''}`);
process.exit(errors.length ? 1 : 0);
