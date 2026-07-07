# Site contract — olivia-vanmalleghem

Personal professional site for Olivia Vanmalleghem. Built from
[`briefs/olivia-vanmalleghem-design-brief.md`](../../briefs/olivia-vanmalleghem-design-brief.md)
— read the brief before redesigning anything; this file is the operating contract for
edits.

## Architecture decisions (don't undo casually)

- **Plain HTML/CSS, zero JS, zero build step.** Every page works from `file://` and any
  static host. Do not introduce a framework, bundler, or JS dependency for cosmetic
  reasons — the owner's systems are deliberately zero-dependency.
- **Audience-router homepage.** The home hero states who Olivia is in one line, then
  three "doors" route the three audiences (organizers → `speaking.html`, owners →
  `owners.html`, curious → `about.html`). Each door page has its **own lead CTA**:
  speaking = *Check availability*, owners = *Start a confidential conversation*
  (navy button — the owners path uses navy accents deliberately), about/home =
  newsletter. Don't flatten this into one generic CTA.
- **Bilingual EN/NL with strict parity.** Every top-level page has a mirror in `nl/`
  with the same filename. Editing copy on one side means updating the other side in the
  same commit — the validator enforces the file parity, but content parity is on you.
  The owners door matters most in Dutch (Flemish SME owners).
- **Design tokens** live only in `assets/style.css` `:root`: paper `#F6F3ED`, cream
  `#EFEAE0`, ink `#2A2723`, bordeaux `#722F37` (primary accent), navy `#1E3A5F`
  (secondary/owners accent). Fonts: Fraunces (headlines) + Inter (body). Change colors
  there, nowhere else.

## Stubs awaiting real services (each marked with a `TODO` comment in the HTML)

- **Booking**: all "Check availability" buttons are `mailto:` links → swap for a
  Cal.com/Calendly URL when chosen.
- **Newsletter**: all subscribe buttons are `mailto:` links → swap for a provider embed
  (e.g. Buttondown) when chosen.
- **Email** `hello@oliviavanmalleghem.com` is unconfirmed — a placeholder in 30+ places;
  change with a project-wide find-and-replace on both languages.
- **Portrait**: About pages show a monogram block → replace with a real photo (keep the
  4/5 aspect ratio).
- **Speaking engagements**: a placeholder panel on both speaking pages awaits a real list.

## Verifying changes

From the repo root: `node check.mjs` (validates structure, links, i18n parity, and HTML
basics for every site — see repo `CLAUDE.md`). For visual changes, open the affected
pages in a browser at mobile and desktop widths; there is no build step, just open the
file.

## Deploying

Any static host, pointed at this folder. Recommended: Netlify or Vercel free tier with
base directory `sites/olivia-vanmalleghem`. Domain to acquire: `oliviavanmalleghem.be`
(+ `.com`). Nothing in the site assumes a specific host; fonts are the only external
request (Google Fonts).
