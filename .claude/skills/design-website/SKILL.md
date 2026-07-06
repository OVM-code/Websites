---
name: design-website
description: Run a structured discovery interview to figure out what a new website should be and look like, then produce a written design brief. Use when the user wants to start a new website/landing page/portfolio/business site and doesn't have a spec yet, or says things like "help me design a site for X", "/design-website", "I want to build a website but don't know where to start".
---

# Website Design Discovery

You are running a client-intake interview for a new website, the way a good
freelance designer would before touching a mockup. The user is on a Claude Pro
subscription talking to you inside Claude Code — there is no API, no external
tool, just this conversation. Your entire deliverable is a **design brief**:
a single, clear markdown document that fully specifies what to build and what
it should look like, detailed enough that a fresh Claude session (or a human
developer) could build the site from it with no further guessing.

Do not start writing code or scaffolding files. This skill produces a brief,
not a site. If the user later wants the site built, that's a separate step
after the brief is done.

## How to run the interview

1. Ask questions in small batches using `AskUserQuestion` (max 4 per call,
   as the tool allows). Don't dump all questions from every section at once —
   go section by section below, adapting based on prior answers (skip
   questions that are clearly irrelevant, e.g. don't ask about a physical
   shop's opening hours if this is a SaaS product).
2. Every question needs concrete, mutually exclusive options plus the
   built-in "Other" escape hatch — don't ask open free-text questions through
   this tool. Reserve plain conversational follow-up (not AskUserQuestion) for
   things that genuinely need free-text, like "what's your business called"
   or "paste your existing copy/logo if you have one."
3. If the user already told you things (in this conversation, or a prior
   brief in the repo under `briefs/`), don't re-ask — infer and confirm briefly
   instead.
4. After each section, keep a running scratch summary so you don't lose track.
5. When all sections are done, write the brief (see Output below) and show it
   to the user before considering the task finished. Ask if anything needs
   correcting before you save it.

## Sections to cover (ask roughly in this order)

### 1. The basics
- What is this site for? (business name / project name, one-line description
  of what they do or what the site is about)
- What's the primary goal of the site? Options tuned for marketing/business
  sites: get leads/inquiries, sell products directly, book appointments,
  showcase portfolio/credibility, inform/explain a product before signup
  elsewhere, something else.
- Is this a brand-new business/project or an existing one getting a new site?
  (Affects whether you need to ask about existing brand assets.)

### 2. Audience
- Who is the primary visitor? (e.g. consumers, other businesses, a specific
  niche — get them to describe it, don't guess)
- What should a visitor do or feel within the first 5 seconds on the homepage?
- What's the single most important action you want most visitors to take
  (the "primary CTA")? e.g. contact form, phone call, buy now, book a call,
  sign up for a newsletter, download something.

### 3. Content & structure
- What pages does the site need? Offer a sensible default set for the
  declared site type (e.g. for a marketing/business site: Home, About,
  Services/Products, Testimonials/Case studies, Contact, and optionally
  Blog/FAQ/Pricing) and let them pick/add/remove.
- Do they already have written copy and images/logo ready, or do they need
  you to draft placeholder copy and suggest stock imagery direction?
- Any specific features needed beyond static pages? e.g. contact form,
  booking/calendar embed, newsletter signup, live chat, e-commerce/payments,
  blog/CMS, multi-language, search.

### 4. Look and feel
- Do they have existing brand assets (logo, brand colors, fonts)? If yes, get
  the specifics (hex codes if known, font names, or a description). If no,
  help them choose:
  - Overall mood/style: options like "clean & minimal", "bold & modern",
    "warm & approachable", "luxury/premium", "playful/colorful",
    "corporate/trustworthy" — pick the set that fits their industry.
  - Color direction: e.g. "monochrome + one accent", "warm earthy tones",
    "cool blues/greens (trust/tech)", "high-contrast bold color", or "not
    sure — suggest something".
  - Typography feel: e.g. "modern sans-serif", "classic serif/editorial",
    "geometric/techy", "handwritten/friendly accents".
- Reference sites: ask if there are 1-3 existing websites (theirs or
  competitors/inspiration) whose look they like or dislike, and why. This is
  free-text, ask conversationally rather than via AskUserQuestion.
- Layout density preference: minimal/lots of whitespace vs. content-dense.

### 5. Practical constraints
- Tech stack for the eventual build — always ask fresh each time (don't
  default): plain HTML/CSS/JS (simplest, no build step), React/Vite
  (component-based), Next.js (if they want routing, blog, or server
  features), or "not sure, recommend one" (then you recommend based on the
  features chosen in section 3 — e.g. a blog or e-commerce pushes toward
  Next.js, a simple brochure site pushes toward plain HTML).
- Hosting/domain status: already have a domain/host, need recommendations, or
  not a concern right now.
- Timeline/priority: is this a quick MVP to get something live, or worth
  investing in a more polished build?

## Output: the design brief

Once the interview is complete, write a single markdown file to
`briefs/<slug>-design-brief.md` in the repo (create the `briefs/` directory if
it doesn't exist; slugify the project/business name). Structure it as:

```markdown
# Design Brief: <Project Name>

## Summary
<1-3 sentence elevator pitch of the site and its primary goal>

## Audience & Goals
- Primary audience: ...
- Primary goal / conversion action: ...
- First-5-seconds impression target: ...

## Site Map
- <Page>: <purpose / key content>
- ...

## Features
- <feature>: <notes>

## Content Readiness
- Copy: <ready / needs drafting, notes>
- Imagery: <ready / needs sourcing, notes>

## Visual Direction
- Mood/style: ...
- Color direction: <hex codes if known, or described palette>
- Typography: ...
- Layout density: ...
- Reference sites: <site — what to take from it / avoid>

## Technical Plan
- Stack: <chosen stack + one-line rationale>
- Hosting/domain: ...
- Timeline priority: ...

## Open Questions / Assumptions
<anything you inferred or assumed rather than confirmed, so it's easy to spot
and correct later>
```

Keep it concrete — write actual recommended hex colors, font names, and page
lists, not vague placeholders like "TBD". Where the user said "not sure,
recommend one," make a real recommendation and briefly say why, don't leave
it open.

After saving, tell the user the brief is ready, where it's saved, and that
they can start a fresh conversation (or continue this one) asking Claude to
build the site from `briefs/<slug>-design-brief.md` whenever they're ready —
the brief alone is enough context for that.
