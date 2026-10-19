# peach33.com

Responsive, static landing page for **Peach**, a personal AI companion.
Hosted on GitHub Pages at `peach33.com`. No framework, dependencies, or build step.

## Files

- `index.html` — navigation, hero, the six "What Peach does" rows, privacy, FAQ, two waitlist forms, and footer.
- `privacy.html` — privacy policy, served at `/privacy`.
- `terms.html` — terms of service, served at `/terms`.
- `tokens.css` — colors, type sizes, spacing, radii, and shadows from the Peach33 design handoff. Unchanged; do not edit.
- `styles.css` — fonts, the app's shape language, responsive layouts, and the app-screen illustrations.
- `script.js` — mobile navigation, progressively enhanced waitlist submissions, and the hero's motion.
- `assets/peach-mascot.svg`, `assets/peach-mascot-small.svg` — the Agent Visor mascot masters, byte-for-byte from the app repo. Use the small one wherever the mascot renders at 32px or less.
- `assets/favicon.png`, `assets/apple-touch-icon.png` — byte-for-byte copies of the app's generated `web/favicon.png` and `web/icons/Icon-192.png`.
- `assets/fonts/` — self-hosted Arimo and Fredoka subsets with their OFL licences (see Fonts).
- `CNAME` — GitHub Pages custom domain. Do not delete.
- `.nojekyll` — disables GitHub Pages' Jekyll build step. Do not delete.

## Design

The site follows the Peach mobile app. Its rules live in the app repo,
`personal-assistant-mobile/design/README.md` ("Peach33 branding", "Shape",
"Chat header", "Tab bar", "Agent questions"); where that file and the original
handoff disagree, it wins. The redesign's decisions are recorded in
`~/Projects/peach33-assets/specs/2026-10-18-site-redesign-design.md`.

- **Name:** the product is "Peach" in all copy. "Peach33" appears only in the
  domain and in the waitlist email's `_subject`.
- **Brand:** the wordmark is a lowercase "peach" in Fredoka 600 at -0.02em with
  only the "a" in `accent`. All other text is Arimo at weight 400 (700 only for
  "Peach" in name pills).
- **Shape:** pills for buttons, fields, chips and the eyebrow; 24px cards
  (`--corner-card`); 32px panels (`--corner-panel`); circles for mascot holders
  and round buttons; 18px chat bubbles. Colours come only from `tokens.css`.
- **Hero:** the h1's accessible name is always "Peach, AI that takes things off
  your plate". The visible ending rotates through what Peach does, and the pill
  under the mascot says what it is doing; edit both together in the `steps`
  list in `script.js`. The mascot is the master's own geometry, inlined so CSS
  can animate it to the app's "Chat header" spec.
- **Motion:** it runs only while the `motion` class is on `<html>`. The script
  sets it unless the visitor prefers reduced motion or has pressed the hero's
  pause button, and pauses the hero while it is off screen or the tab is
  hidden. Without motion the mascot holds the app's still working pose.
- **App screens:** the six phones are HTML illustrations of real app screens
  (`role="img"` with a one-line label), built at the app's 390×844 size and
  scaled with `zoom`. Replace them with real screenshots when those exist; keep
  the label.
- **Coming soon:** a capability row for a feature that isn't live for beta
  users carries a "Coming soon" pill (and the same words, hidden, in its
  heading for screen readers) and stays out of the rotating headline. Today
  that is approvals and Google Calendar. When one goes live, remove its pill
  and update the privacy policy and terms first.
- **Footer:** every page's footer carries Privacy policy (`/privacy`), Terms
  (`/terms`) and Contact (`mailto:support@peach33.com`). On desktop they sit to
  the right of `© 2026`; below 1024px they wrap onto a second row. Mark the
  current page's link with `aria-current="page"` and keep the footer identical
  on all three pages.

## Legal pages

`privacy.html` and `terms.html` sit at the repository root so GitHub Pages
serves them at the extensionless URLs `/privacy` and `/terms`, which the app
links to. Their canonical URLs are the extensionless ones. They reuse the
landing page's header (which `script.js` requires), with nav links pointing
back to `/#…` except Privacy, which goes to `/privacy`. Every section keeps a
stable `id` so the app can deep-link to it, for example `/privacy#ai-processing`
or `/privacy#deletion`; never rename or remove one.

In the pages, the product is "Peach"; "Peach33" is only the defined name of the
operator ("Peach33", "we", "us") and the business that could be transferred.

Text in `[[DOUBLE BRACKETS]]` is a placeholder the owner must fill in before
the pages are published (work item #149). When either page changes, update its
"Effective and last updated" date.

Placeholders to fill in:

- `[[EFFECTIVE DATE]]` (both pages)
- `[[OWNER LEGAL NAME]]` and `[[CITY, STATE/REGION, COUNTRY]]` (both pages)
- `[[MINIMUM AGE]]` (both pages)
- `[[WEB SEARCH PROVIDER]]`: Brave Search or Microsoft Azure, whichever
  production uses (both pages)
- `[[GOVERNING LAW JURISDICTION]]` and `[[LIABILITY CAP AMOUNT]]` (terms)
- `[[EMAIL PROVIDER]]`, `[[WAITLIST NOTIFICATION INBOX PROVIDER]]`,
  `[[WAITLIST RETENTION PERIOD]]`, `[[LOG RETENTION PERIOD]]` and
  `[[AZURE REGION]]` (privacy)
- `[[FORMSPREE reCAPTCHA ON/OFF: …]]` (privacy, waitlist)
- `[[CONFIRM AND STATE: …]]` Azure prompt retention and training use (privacy)
- `[[CONFIRM: …]]` Azure and Fly.io data-processing terms, no enabled
  "Connected tools" servers in production, and EU/UK transfer safeguards
  (privacy)
- `[[CONFIRM WITH #153: …]]` whether the app keeps the installation ID in the
  Keychain, and that signing out unregisters the phone for push (privacy)

Pushing `main` deploys, so before merging run this and expect no output:

```sh
grep -n '\[\[' index.html privacy.html terms.html
```

The policy describes push notifications conditionally ("if you allow
notifications"), so it stays accurate before and after the app starts asking
(#153). It describes document upload as available, which is true only while
the orchestrator's `EMBEDDING_MODEL` secret is set; if it is removed, update
both pages. Calendar, approval requests and connected tools are described as
not available yet; update both pages before any of them goes live.

## Fonts

The fonts are cut from the app's pinned `assets/fonts/Fredoka.ttf` and
`Arimo.ttf` to Google Fonts' "latin" range, so the site makes no requests to a
font service. To regenerate them, install fonttools 4.60.1 with brotli
(`pip install "fonttools[woff]==4.60.1"`) in a throwaway virtual environment
and run this from this repository's root, with the app repo beside it:

```sh
export SOURCE_DATE_EPOCH=1792281600  # pins the fonts' build date, so the output is byte-identical
APP=../personal-assistant-mobile/assets/fonts
LATIN="U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD"
fonttools varLib.instancer "$APP/Fredoka.ttf" wght=600 wdth=100 -o /tmp/fredoka-600.ttf
fonttools varLib.instancer "$APP/Arimo.ttf" wght=400 -o /tmp/arimo-400.ttf
fonttools varLib.instancer "$APP/Arimo.ttf" wght=700 -o /tmp/arimo-700.ttf
for f in fredoka-600 arimo-400 arimo-700; do
  pyftsubset "/tmp/$f.ttf" --unicodes="$LATIN" --layout-features='*' --flavor=woff2 --output-file="assets/fonts/$f.woff2"
done
```

The licences are copied unchanged: `Fredoka-OFL.txt` as `OFL-Fredoka.txt` and
`OFL.txt` (Arimo) as `OFL-Arimo.txt`.

## Preview

Open `index.html` directly, or serve this directory:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Then visit `http://127.0.0.1:8000`. The local server does not resolve
extensionless URLs, so preview the legal pages at `/privacy.html` and
`/terms.html`; links to `/privacy` and `/terms` only work once deployed.

## Waitlist

Both forms POST to the existing Formspree endpoint,
`https://formspree.io/f/xbdwdjdj`. Each retains the `_gotcha` honeypot and the
`_subject` hidden field. If the endpoint changes, update **both** form actions
in `index.html`.

With JavaScript, each form shows inline invalid-email, sending, success, and
request-error states. Repeated submits are blocked while a request is pending,
and requests time out after 15 seconds so the user can retry. On success, the
submitted form is replaced by its confirmation. Without JavaScript, native
email validation and standard form submission still work. The FAQ uses native
`details` elements, and section links remain available without JavaScript.

Do not send test signups to the live endpoint; intercept requests locally when
checking submission states.

## Deployment

GitHub Pages serves the repository root of `main`. Keep the existing Pages
configuration, `CNAME`, and `.nojekyll`. Pushing `main` deploys in about 30
seconds; no build command is needed.
