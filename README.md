# peach33.com

Responsive, static landing page for **Peach**, an AI agent for your errands and, soon, your business.
Hosted on GitHub Pages at `peach33.com`. No framework, dependencies, or build step.

## Files

- `index.html` — navigation, hero, the demo video, the six "What Peach does" rows, the business team, two waitlist forms, and footer.
- `tokens.css` — colors, type sizes, spacing, radii, and shadows from the Peach33 design handoff. Unchanged; do not edit.
- `styles.css` — fonts, the app's shape language, responsive layouts, and the app-screen illustrations.
- `script.js` — mobile navigation, progressively enhanced waitlist submissions, and the hero's motion.
- `assets/peach-mascot.svg`, `assets/peach-mascot-small.svg` — the Agent Visor mascot masters, byte-for-byte from the app repo. Use the small one wherever the mascot renders at 32px or less.
- `assets/favicon.png`, `assets/apple-touch-icon.png` — byte-for-byte copies of the app's generated `web/favicon.png` and `web/icons/Icon-192.png`.
- `assets/fonts/` — self-hosted Arimo and Fredoka subsets with their OFL licences (see Fonts).
- `assets/peach-demo.mp4`, `assets/peach-demo-poster.jpg`, `assets/peach-demo.en.vtt` — the demo video, its poster and its captions (see Demo video).
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
  the names in name pills: Peach and its agents).
- **Shape:** pills for buttons, fields, chips and the eyebrow; 24px cards
  (`--corner-card`); 32px panels (`--corner-panel`); circles for mascot holders
  and round buttons; 18px chat bubbles. Colours come only from `tokens.css`.
- **Hero:** the h1 is the demo video's closing line, "Your errands, handled.
  Your business, staffed.", with "handled." and "staffed." in `accent`. The
  pill under the mascot rotates through what Peach is doing; edit the
  `activities` list in `script.js`, which names only what beta users can do.
  The mascot is the master's own geometry, inlined so CSS can animate it to the
  app's "Chat header" spec.
- **Motion:** it runs only while the `motion` class is on `<html>`. The script
  sets it unless the visitor prefers reduced motion or has pressed the hero's
  pause button, and pauses the hero while it is off screen or the tab is
  hidden. Without motion the mascot holds the app's still working pose.
- **App screens:** the phones are HTML illustrations of app screens
  (`role="img"` with a one-line label), built at the app's 390×844 size and
  scaled with `zoom`. The first three rows show real app screens; the errand
  rows and the team chat show the demo video's scenes, with its names and
  numbers, and the app's approval card ("Needs your OK"; Approve, Details, No).
  Replace them with real screenshots when those exist; keep the label.
- **Agents:** Tico (Sales), Ashley (Accountant) and Simba (Marketing) are the
  demo's business team. Until the app has their avatars, they use the mascot
  recoloured with the demo's CSS filters, the one exception to colours coming
  only from `tokens.css`.
- **Features not live yet:** the page describes Peach as the demo shows it,
  without "Coming soon" pills, and has no privacy or FAQ section (the owner's
  call, November 2026). Only the hero's "Soon, it can staff your business
  too" says some of it is still ahead. Today that is reading your inbox,
  making calls, cancelling subscriptions and the whole business team. Keep
  such features out of the hero's rotating pill, and update the privacy policy
  and terms before any of them goes live.
- **Demo video:** the section under the hero plays `assets/peach-demo.mp4`, the
  pitch video from `~/Projects/peach33-pitch-video` (`out/peach-pitch-1080p.mp4`,
  copied with `ffmpeg -c copy -movflags +faststart` so it starts before it has
  fully downloaded). The poster is its frame 3150, and the captions follow the
  narration script, timed from a transcription. When the video is re-rendered,
  replace all three files. Its music is Mixkit's "A Blue Day" (free licence,
  which allows website videos), and the voice-over was made on a paid
  ElevenLabs plan.
- **Footer:** the Privacy policy, Terms and Contact links return with the legal
  pages (work item #149, branch `add-privacy-terms`).

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

Then visit `http://127.0.0.1:8000`.

## Waitlist

Both forms POST to the existing Formspree endpoint,
`https://formspree.io/f/xbdwdjdj`. Each retains the `_gotcha` honeypot and the
`_subject` hidden field. If the endpoint changes, update **both** form actions
in `index.html`.

With JavaScript, each form shows inline invalid-email, sending, success, and
request-error states. Repeated submits are blocked while a request is pending,
and requests time out after 15 seconds so the user can retry. On success, the
submitted form is replaced by its confirmation. Without JavaScript, native
email validation and standard form submission still work, and section links
remain available without JavaScript.

Do not send test signups to the live endpoint; intercept requests locally when
checking submission states.

## Deployment

GitHub Pages serves the repository root of `main`. Keep the existing Pages
configuration, `CNAME`, and `.nojekyll`. Pushing `main` deploys in about 30
seconds; no build command is needed.
