# Websites — the site factory

This repo produces and hosts websites — one folder per site, each born from a design
brief. It is a *system*, not a pile of pages: every site follows the same lifecycle and
the same contract, so any future session can maintain any site without archaeology.

## The lifecycle of a site

1. **Discovery** — run the `/design-website` skill (`.claude/skills/design-website/`).
   It interviews the owner and writes `briefs/<slug>-design-brief.md`. No code yet.
2. **Build** — create `sites/<slug>/` from the brief. Default stack is plain
   HTML/CSS with zero JS and zero build step unless the brief explicitly says otherwise.
3. **Contract** — every site folder gets a `README.md` stating its architecture
   decisions, per-page CTAs, design tokens, stubs/TODOs, verification, and deploy notes.
   The brief says what was *intended*; the site README says what *is* and what must not
   be casually undone.
4. **Verify** — `node check.mjs` from the repo root must pass. CI runs it on every push.

## The contract (applies to every site, current and future)

- **`briefs/<slug>-design-brief.md` and `sites/<slug>/README.md` must both exist** for
  every site. A site without a brief or a contract README fails validation.
- **Self-contained static sites.** Each `sites/<slug>/` works from `file://` and any
  static host. No cross-site imports — sites must stay independently deployable.
  External requests only for fonts unless the site README documents more.
- **Bilingual sites keep file parity.** If a site has a `nl/` (or other language)
  subfolder, it contains exactly the same page filenames as the top level. Copy changes
  update both languages in the same commit.
- **Stubs are explicit.** Anything fake-but-launchable (mailto instead of a booking
  tool, placeholder email, missing portrait) carries a `TODO` comment at the spot and a
  line in the site README's stub list. Never let a placeholder look permanent.
- **Don't invent facts in copy.** Claims about the owner (engagements, clients,
  credentials) are placeholders until confirmed — mark them and list them in the brief's
  Open Questions and the site README.
- **HTML basics are enforced** by the validator: one `h1` per page, `<title>`, meta
  description, viewport, correct `lang` attribute (pages under `nl/` are `lang="nl"`),
  resolving internal links and assets, `alt` on images, balanced structural tags.

## External-AI round-trip (optional per site)

A site's design can be developed in an external AI builder (Lovable, v0, Framer, …).
The workflow:

1. Write `briefs/<slug>-external-ai-prompt.md` — a self-contained prompt **derived
   from the design brief** (never write a prompt without a brief; the validator
   errors on orphans). It must carry the same design tokens, page specs, and the
   honest-placeholder constraints (no invented testimonials/clients/emails).
2. The owner pastes it into the external tool and iterates there.
3. When a result comes back, import it into `sites/<slug>/` (or a variant folder for
   comparison) — it is then held to the full site contract like anything built here.
4. **The brief, the prompt, and the built site must not drift.** The validator
   enforces the mechanical part: every hex color a brief/prompt specifies must exist
   in the site's stylesheets, and every `:root` token in the site's CSS must be
   documented in the brief/prompt. If a design decision changes, change all three in
   the same commit. Non-mechanical drift (page structure, CTA hierarchy, voice) is on
   you — re-read the brief after any external import.

## Verification

```
node check.mjs        # zero dependencies, Node 18+ — validates every site
```

Run before every commit; CI (`.github/workflows/check.yml`) runs it on every push and
PR. If you add a convention, extend the validator in the same commit — this document
and `check.mjs` must not drift apart.

## Playbooks

- **New site:** `/design-website` → brief saved → build `sites/<slug>/` → write its
  README contract → `node check.mjs` → commit brief + site together.
- **Editing an existing site:** read `sites/<slug>/README.md` first (30 seconds, saves
  undoing a deliberate decision). Bilingual edits touch both languages. Re-run
  `node check.mjs`.
- **Replacing a stub with a real service:** search the site for the matching `TODO`
  comment, replace every instance (both languages), remove the entry from the site
  README's stub list.
- **Retiring a site:** move the folder to `archive/<slug>/` rather than deleting — the
  brief stays in `briefs/` either way.

## Layout

```
briefs/                     one design brief per site (the intent)
sites/<slug>/               one folder per live site (self-contained, static)
sites/<slug>/README.md      the site's operating contract (the reality)
archive/<slug>/             retired sites, kept whole
check.mjs                   validator for everything above
.claude/skills/design-website/   the discovery interview that starts every site
```
