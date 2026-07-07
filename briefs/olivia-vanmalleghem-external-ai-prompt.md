# External-AI build prompt — olivia-vanmalleghem

A self-contained prompt for handing this site's design to another AI website builder
(Lovable, v0, Framer AI, Bolt, …). Derived from
`olivia-vanmalleghem-design-brief.md` and the built site in
`sites/olivia-vanmalleghem/` — keep all three in sync if the design evolves.

Paste everything between the fences:

```
Design and build a complete personal professional website for OLIVIA VANMALLEGHEM —
a Belgian speaker, builder, and acquirer of businesses. Read this whole spec before
designing; every decision below is deliberate.

## THE CONCEPT — an audience-router homepage
Olivia serves three very different visitors, and the site's core idea is letting them
self-select. The homepage opens with ONE plain sentence establishing who she is, then
presents three "doors" (prominent card links):
  1. FOR ORGANIZERS — "Book a talk or workshop" → Speaking page
  2. FOR BUSINESS OWNERS — "Explore selling your business" → For-owners page
  3. JUST CURIOUS — "Who is Olivia?" → About page
Rule: the homepage must never feel like an evasive "choose your path" splash screen —
identity first, fork second. Shared proof (speaking, building, acquiring) echoes on
every path, tuned to that audience.

## GOAL HIERARCHY (per page, not global)
- Speaking page lead CTA: "Check availability" (booking)
- For-owners page lead CTA: "Start a confidential conversation" (inquiry)
- Home/About soft CTA: newsletter signup ("Occasional letters")
- Ambient goal everywhere: credibility.
Never flatten these into one generic "Contact me" CTA.

## PAGES (6, plus full Dutch mirror)
1. Home — one-line hero, the three doors, a three-column proof strip
   (Speaking / Building / Buying), newsletter footer.
2. Speaking & workshops — hero promise ("Sessions your team is still using three
   months later"), 3 topic cards (practical AI adoption beyond the demo; the agentic
   back-office; validate before you build), formats list (keynote 30–45 min, hands-on
   workshop half/full day, executive briefing 90 min), engagements placeholder panel,
   closing CTA panel.
3. For owners — the emotionally distinct page. Tone: discreet, grounded, zero pressure.
   Hero: "You built something sound. What comes next should honour that." Explain her
   model in 3 numbered steps: (1) a quiet confidential conversation, (2) a paid scoped
   engagement working INSIDE the business proving value first, (3) an option to buy on
   shared terms — never an ultimatum. Callout box: "Buy to fix and keep — never strip
   and flip." Then a "This might fit if…" checklist. CTA: confidential conversation.
4. About — warm first-person intro ("Hi, I'm Olivia"), portrait slot (placeholder
   allowed), what she does in three connected threads, personality: "leverage without
   theatre", allergic to busywork and slide-deck transformation. Soft newsletter CTA.
5. Ventures / work — 3 cards: a holding acquiring sound-but-underperforming Belgian
   SMEs; idea-validation systems (waitlist pages, A/B copy tests, channel attribution);
   agentic personal/business operating systems she runs herself ("everything I
   recommend, I run somewhere myself").
6. Contact — email card, speaking-inquiry card, confidential-conversation card
   (visually distinct, navy-tinted), practical notes (based in Belgium, works in Dutch
   and English).
DUTCH: every page has an NL mirror (natural Flemish Dutch, not literal translation),
with an EN/NL switcher in the header. The for-owners page matters most in Dutch.

## VISUAL DIRECTION — "warm editorial: grounded, reassuring, elegant"
Think well-art-directed magazine profile, not tech startup.
- Palette: paper #F6F3ED (background), cream #EFEAE0 (alt sections/cards),
  ink #2A2723 (text), muted #6E685D (secondary), hairlines #E0D9CC.
  PRIMARY ACCENT bordeaux #722F37 (links, lead CTAs, italic hero emphasis; hover
  #5A2129). SECONDARY ACCENT navy #1E3A5F (footer background, all owners-path
  accents and its CTA buttons, small uppercase labels; tint #EAEEF4 for panels).
- Type: Fraunces (serif) 500–600 for headlines, big scale (up to ~54px), tight
  leading, one italic word in bordeaux per hero headline; Inter 400/500/600 for body
  and UI. Uppercase letterspaced mini-labels (11–12px) as section eyebrows in navy.
- Layout: airy and confident — generous whitespace, max ~65ch text measure, rounded
  cards (14–16px radius) with hairline borders on white, subtle hover lift only.
- Footer: navy background, cream text, contains the newsletter block on every page.
- Imagery: NONE required — the design must stand on typography and color alone. The
  only image slot is an About portrait (4:5); use an elegant monogram block until a
  photo exists.
- Motion: restrained — gentle hover transitions, nothing animated on scroll.

## VOICE
Direct, warm, zero corporate filler. Short declarative sentences. Honest to the point
of disarming ("you'll get a clear 'not a fit' if that's the honest answer"). No
buzzwords, no "passionate", no exclamation marks. Dutch copy sounds native Flemish.

## HARD CONSTRAINTS
- Fully responsive (390px → 1440px), semantic HTML, real focus states, WCAG AA
  contrast, one h1 per page, meta titles + descriptions per page.
- Fast and lightweight: no heavy frameworks or animation libraries needed by design.
- Placeholders stay honest: email hello@oliviavanmalleghem.com is UNCONFIRMED; booking
  and newsletter have no provider yet (use clearly-marked stub links); no invented
  client names, logos, testimonials, or engagement lists — use a tasteful "list
  available on request" panel instead.

## ANTI-PATTERNS (reject these)
Purple-gradient AI aesthetics; glassmorphism; stock photos of handshakes or laptops;
emoji; three-tier pricing tables; fake testimonials; dark-mode-first; anything that
makes a 55-year-old Flemish business owner feel like they're on a crypto landing page.
```
