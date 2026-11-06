# peach33.com

Responsive, static landing page for **Peach**, an AI agent for your errands and, soon, your business.
Hosted on GitHub Pages at `peach33.com`. No framework, dependencies, or build step.

## Files

- `index.html` — navigation, hero, the demo video, the six "What Peach does" rows, the business team, two waitlist forms, and footer.
- `privacy.html` — privacy policy, served at `/privacy`.
- `terms.html` — terms of service, served at `/terms`.
- `providers.html` — the privacy policy's list of service providers, served at `/providers`.
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

## Legal pages

`privacy.html`, `terms.html` and `providers.html` sit at the repository root
so GitHub Pages serves them at the extensionless URLs `/privacy`, `/terms` and
`/providers`; the app links to the first two. Their canonical URLs are the
extensionless ones. They reuse the landing page's header (which `script.js`
requires), with nav links pointing back to the homepage's `/#…` sections.
Every section keeps a stable `id` so the app and other pages can
link to it, for example `/privacy#ai-processing` or `/privacy#deletion`. The
ids were last restructured before the pages were first published; once they
are live, never rename or remove one.

In the pages, the product is "Peach"; "Peach33" is the operator ("we", "us")
and the business that could be transferred.

Text in `[[DOUBLE BRACKETS]]` is a placeholder the owner must fill in before
the pages are published (work item #149). When the privacy policy or the terms
change, update its "Effective and last updated" date; when the providers page
changes, update its "Last updated" date.

### Keeping the pages current

The pages were restructured on 2026-11-04, after comparable assistants (Cue by
Manus, Muse from Meta, Town), so they don't need rewriting for every feature:

- The privacy policy describes data by kind (account details, what you share
  and what Peach does for you, settings and activity, location, connected
  services, notifications, technical data). Features are examples. Update the
  policy before a feature collects a new kind of data, uses data for a new
  purpose, or shares it with a new kind of recipient. Examples: a new
  connected service such as email, actions in other accounts, or a sign-in
  method that shares more than an email address.
- The companies themselves are listed on `providers.html`, which the policy
  and terms link to. When a provider is added, replaced or removed, or what
  one receives changes, update that page and its date. If a new provider
  receives a new kind of data, update the policy too.
- The terms describe abilities and approvals generally, and say that features
  may come with additional terms shown before use. Update the terms before
  Peach can act in someone's other accounts (for example changing a calendar,
  sending messages or making purchases), as they promise.
- Never describe a feature as "not available yet": such sentences go stale.

All placeholders were filled with the owner's answers on 2026-11-03. The
Azure deployment is in Virginia (the owner gave "IAD"); "Where data is
processed" also says Microsoft may use another Azure region to manage
capacity, which Microsoft documents for every deployment type. If the
deployment moves, update that sentence.

Before publishing, the pages also depend on these being true:

- **Fly.io's data processing agreement (DPA) is deferred.** The owner hasn't
  signed it (2026-11-04: it asks for a company), so the policy relies only on
  Fly.io's terms of service (confidentiality with reasonable safeguards) and
  its EU-U.S. Data Privacy Framework statement (fly.io/legal/data-privacy-framework).
  GDPR (Article 28) requires a processing contract with each processor once
  Peach serves people in the EU or UK, so sign it (fly.io/documents) before
  inviting testers there, then say so in "Who we share data with".
- **Email still matches the policy.** Since 2026-11-03 peach33.com's DNS is
  on Cloudflare, and support@peach33.com is a Cloudflare Email Routing address
  that forwards to the owner's inbox. The policy names Cloudflare and calls
  the inbox's host "our email provider". If mail moves (for example to Google
  Workspace, whose MX records replace Cloudflare's), update `providers.html`
  and the policy's "Who we share data with". Email Routing only receives: mail sent as support@peach33.com from
  another service fails SPF and DMARC (`p=quarantine`) unless that service is
  added to the SPF record and signs with DKIM for peach33.com.
- **Cloudflare and the website.** The website's DNS records were proxied
  through Cloudflare on 2026-11-06, so the pages say Cloudflare "may" pass the
  site's traffic to GitHub, handle visitors' IP addresses and set a security
  cookie: true whether the records are proxied or "DNS only" (grey cloud).
  DNS only is simpler, and lets GitHub Pages renew its certificate. While
  proxied, turn off Cloudflare's Email Address Obfuscation, which rewrites the
  pages' `mailto:` links and adds a script.
- **The waitlist promise is kept:** when someone is invited or asks to be
  removed, delete their sign-up in Formspree and its email in the mailbox.
- **Search and weather match production.** The pages name Brave Search and
  Microsoft's web search for Azure (Bing), and weather lookups through Brave
  and the US National Weather Service. They describe #256 part 2 (backend
  pull request #264) as live: Brave gets the city, region and country of the
  last known location, or else the time zone's country, and the National
  Weather Service gets the stored rounded coordinates for "weather here" in
  the US. If production adds another provider, or `WEATHER_ENABLED` changes,
  update `providers.html` and the policy's "Who we share data with".
- **Google Calendar wording agrees.** The backend asks Google only for
  `calendar.events.readonly`, which lets it view events on all the user's
  calendars (Google's consent screen says so), and reads only the primary
  calendar; the policy says both, and that Peach can't change events. The
  terms point to the policy for what each connected service allows. The app's
  Connectors screen says "Let Peach read and add calendar events" because the
  owner plans to let Peach add events (2026-11-06). Before that ships, the
  backend must ask Google for write access (`calendar.events`), and the
  policy's Connected services section, the terms (they promise an update
  before Peach can change a calendar) and Google's OAuth verification must
  all say so. Until then the policy says read-only. The app has no Disconnect button yet, so the policy
  points people to their Google Account or to email; tokens revoked there are
  deleted the next time Peach tries to use them.
- **No per-account machines.** Each user's assistant has run inside the shared
  service since backend #169 and #170. The pages say so; don't reintroduce
  "its own machine". The draft homepage on `add-privacy-terms` still says
  "on its own private machine" (hero, FAQ, privacy row); the live homepage on
  `main` doesn't, so keep `main`'s wording when merging the two.
- **Abilities start on.** Every ability starts on (owner decision,
  2026-10-27) and users can turn each off, so the pages never say users turn
  abilities on. Web search and weather reach Brave by default.
- **Email providers aren't named.** `providers.html` lists "our email
  providers" by role: the inbox Cloudflare forwards to, and the SMTP service
  that sends sign-in codes and invitations. Name them there once settled.
- **No "Connected tools" servers are enabled.** Before enabling one, add its
  provider and what it receives to `providers.html`.

Pushing `main` deploys, so before merging run this and expect no output:

```sh
grep -n '\[\[' index.html privacy.html terms.html providers.html
```

Optional features are described conditionally ("if you allow notifications",
"if you share your location", "if you connect"), so the policy stays accurate
before and after the server offers them.

Every page's footer carries Privacy policy (`/privacy`), Terms (`/terms`) and
Contact (`mailto:support@peach33.com`). On desktop they sit to the right of
`© 2026`; below 1024px they wrap onto a second row. On the legal pages, mark
the current page's link with `aria-current="page"`. Keep the header's
navigation the same as the homepage's.

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
