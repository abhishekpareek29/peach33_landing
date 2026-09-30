# peach33.com

Responsive, static landing page for **Peach33**, a personal AI companion.
Hosted on GitHub Pages at `peach33.com`. No framework, dependencies, or build step.

## Files

- `index.html` — navigation, hero, product sections, approval illustration, privacy, FAQ, two waitlist forms, and footer.
- `tokens.css` — shared colors, typography, spacing, radii, and shadows from the Peach33 design handoff.
- `styles.css` — responsive layouts and landing-specific measurements.
- `script.js` — mobile navigation and progressively enhanced waitlist submissions.
- `peach-mark.svg` — shared pixel-peach logo and favicon.
- `CNAME` — GitHub Pages custom domain. Do not delete.
- `.nojekyll` — disables GitHub Pages' Jekyll build step. Do not delete.

## Design reference

The implementation follows `peach33-design-handoff/landing/html/landing-desktop.html`
and `landing-mobile.html`, their PNG references, and the shared design tokens.
It is one responsive page: desktop at 1024px and above, mobile below 640px,
and an intermediate tablet layout.

Body and display text use the Arial-led system stack at weight 400. Only the
wordmark uses Silkscreen Bold, loaded from Google Fonts. The phone and approval
card are decorative, static illustrations, not working app controls.

Edit shared design values in `tokens.css`; edit landing layouts in `styles.css`.
Email fields have a dark lower border so their boundary remains visible against
the warm backgrounds. Focus indicators and reduced-motion preferences are supported.

The mobile design shortens some copy. The page keeps one version of each text:
where the mobile design only drops a trailing phrase, that phrase is wrapped in
`.desktop-only` (hidden below 1024px). Other shortened mobile lines use the
desktop wording.

The design's footer links (Privacy policy, Terms, Contact) are intentionally
omitted until the policy pages and a public contact address exist. When they do,
add them to the right of `© 2026` in the footer, following the spec's spacing;
do not ship the handoff's placeholder URLs.

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
email validation and standard form submission still work. The FAQ uses native
`details` elements, and section links remain available without JavaScript.

Do not send test signups to the live endpoint; intercept requests locally when
checking submission states.

## Deployment

GitHub Pages serves the repository root. Keep the existing Pages configuration,
`CNAME`, and `.nojekyll`. Push approved changes to the configured publishing
branch to deploy; no build command is needed.
