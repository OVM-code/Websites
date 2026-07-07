# Design Brief: Olivia Vanmalleghem — personal professional site

## Summary

The professional front door for Olivia Vanmalleghem — speaker, builder, and acquirer of
Belgian SMEs. The homepage states who she is in one line, then routes visitors through an
**audience selector** ("What brings you here?") to one of three tailored landing paths,
each with its own tone and its own lead call-to-action. Bilingual (English default,
Dutch mirror).

## Audience & Goals

- **Primary audiences (three "doors"):**
  1. **Organizers** — companies & event organizers considering booking a talk or
     workshop (AI adoption, agentic systems, entrepreneurship).
  2. **Owners** — Belgian SME owners quietly exploring an exit; need discretion,
     substance, reassurance.
  3. **Curious** — anyone who googles her after meeting her; wants to know who she is.
- **Goal hierarchy:** all four goals exist (leads, credibility, booking, newsletter) but
  the **lead CTA differs per page**: Speaking → *Check availability* (booking),
  Owners → *Start a confidential conversation* (inquiry), About/Home → credibility +
  *newsletter* as soft capture. Credibility is the ambient goal everywhere.
- **First-5-seconds impression:** depends on the door — organizers: "credible expert,
  book her"; owners: "grounded operator I could trust with my life's work"; curious:
  "warm, sharp, no-nonsense". The homepage before the fork: all three at once, led by
  one plain sentence about what she does.

## Site Map

- **Home (`index.html`)** — one-line hero, the three audience doors, condensed proof
  strip (talks given / things built), newsletter footer.
- **Speaking & workshops (`speaking.html`)** — organizer landing: topics, formats
  (keynote / hands-on workshop / executive briefing), what booking her is like,
  engagements list (placeholder until real list provided). Lead CTA: check availability.
- **For owners (`owners.html`)** — discreet landing: the service-first → option-to-buy
  philosophy in owner-friendly words (no jargon, no pressure), why it's different from
  a broker or a fund, confidentiality note. Lead CTA: confidential conversation.
- **About (`about.html`)** — the curious door: who she is, how she works, personal but
  professional. Soft CTA: newsletter.
- **Ventures / work (`ventures.html`)** — what she builds and operates. Proof for all
  three audiences.
- **Contact (`contact.html`)** — email, booking stub, newsletter stub, location
  (Belgium), languages spoken.
- **Dutch mirror** — every page duplicated under `nl/` with a language switcher in the
  header. Dutch is especially load-bearing for the owners door.

## Features

- Audience router on the homepage (three prominent door cards) — plain links, no JS.
- Newsletter signup — **stubbed**: styled block with a mailto subscribe link and a
  single `TODO` comment to swap in a provider (e.g. Buttondown/Mailchimp) later.
- Book-a-call — **stubbed**: buttons are `mailto:` links with a prefilled subject and a
  single `TODO` comment to swap in Cal.com/Calendly later.
- Contact — `mailto:` links (no backend); form can come later with hosting choice.
- No cookies, no analytics initially (add privacy-friendly analytics later if wanted).

## Content Readiness

- **Copy:** drafted by Claude as reviewable placeholder — reads as final, but Olivia
  must review every claim (especially engagements, venture descriptions, and the email
  address `hello@oliviavanmalleghem.com`, which is assumed, not confirmed).
- **Imagery:** none provided. Design works without photography (typographic + color
  design); a portrait on About is the single most valuable image to add later —
  placeholder block marks the spot.

## Visual Direction

- **Mood:** warm & editorial — magazine-profile feel; grounded, reassuring, elegant.
- **Palette (warm neutrals + bordeaux + navy):**
  - Paper `#F6F3ED` (page background) · Cream `#EFEAE0` (alternate sections/cards)
  - Ink `#2A2723` (text) · Muted `#6E685D` (secondary text) · Line `#E0D9CC` (rules)
  - **Bordeaux `#722F37`** (primary accent: links, lead CTAs, door highlights);
    deep hover `#5A2129`
  - **Navy `#1E3A5F`** (secondary accent: footer background, owners-door accents,
    small labels); light tint `#EAEEF4` for navy-tinted panels
- **Typography:** *Fraunces* (serif, 500–600) for headlines — warm, characterful,
  elegant; *Inter* (400/500/600) for body and UI. Google Fonts with system-font
  fallbacks (Georgia / system sans).
- **Layout density:** airy — generous whitespace, max text width ~65ch, big headline
  scale on landing pages.
- **Reference sites:** none given; direction anchored on the palette/mood words above
  ("grounded, reassuring, elegance").

## Technical Plan

- **Stack:** plain HTML/CSS, zero JS, zero build step — fastest, cheapest to maintain,
  hosts anywhere; matches the owner's zero-dependency system philosophy.
- **Location in repo:** `sites/olivia-vanmalleghem/` — this repo hosts multiple sites,
  one folder per site (see repo `CLAUDE.md`).
- **Hosting (recommendation):** Netlify or Vercel free tier pointed at the
  `sites/olivia-vanmalleghem/` folder (both support subfolder deploys from a repo);
  GitHub Pages also works if this remains the only site. **Domain to buy:**
  `oliviavanmalleghem.be` (and ideally `.com`) — not yet registered as far as known.
- **Timeline:** polished MVP now, iterate later (assumed — built in one pass, stubs
  clearly marked).

## Open Questions / Assumptions

- Email address `hello@oliviavanmalleghem.com` is a placeholder — confirm/replace.
- Engagements/credentials on the speaking page are placeholders awaiting real entries.
- Venture descriptions summarize what exists in Olivia's repos (idea validation tooling,
  SME holding) — review wording before sharing the site.
- Dutch copy drafted in natural Flemish-leaning Dutch — worth a native read-through.
- No booking tool or newsletter provider chosen yet — stubs carry `TODO` markers.
