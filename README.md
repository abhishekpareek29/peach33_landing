# peach33.com

Static landing page for **Peach33** — a personal AI companion (mobile app, pre-launch).
Hosted on GitHub Pages, custom domain `peach33.com`.

## Files

- `index.html` — single page (hero, problem, how it works, footer).
- `styles.css` — palette, type, layout. No framework.
- `favicon.svg` — peach mark.
- `CNAME` — tells GH Pages the custom domain is `peach33.com`. Do not delete.
- `.nojekyll` — disables GH Pages' Jekyll build step. Do not delete.

## One-time setup

### 1. Wire up Formspree (waitlist form)

1. Sign up at <https://formspree.io> with `abhishekpareek29@gmail.com`.
2. Create a new form. Set the destination email to your inbox.
3. Copy the endpoint URL — looks like `https://formspree.io/f/xyzabc123`.
4. In `index.html`, find `REPLACE_ME` and swap in your form ID:
   ```html
   <form id="waitlist" class="waitlist" action="https://formspree.io/f/xyzabc123" method="POST" novalidate>
   ```
5. Commit and push. First submission triggers a Formspree confirmation email — click the link to activate.

### 2. Create the GitHub repo and enable Pages

```sh
cd /Users/apareek/Projects/peach33
git init
git add .
git commit -m "initial peach33 landing"
gh repo create peach33 --public --source=. --push
```

In GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: `main` / `/ (root)` → Save.**

The `CNAME` file in the repo will populate the custom-domain field automatically.

### 3. Point peach33.com at GitHub Pages

At your domain registrar (whoever you bought peach33.com from), set these DNS records:

**Apex (`peach33.com`)** — four `A` records pointing at GitHub's Pages IPs:
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**`www.peach33.com`** — one `CNAME` record:
```
www  CNAME  apareek.github.io.
```

DNS usually propagates in 5–60 minutes. Once it has, go back to **Settings → Pages** and tick **Enforce HTTPS** (the cert provisions automatically once DNS is verified).

### 4. Verify

- `https://apareek.github.io/peach33/` should render before DNS propagates.
- `https://peach33.com` should render after DNS propagates with a valid Let's Encrypt cert.
- `https://www.peach33.com` should 301-redirect to the apex.

## Editing copy or styling

It's vanilla HTML/CSS — open `index.html` directly in a browser to preview, then `git push` to deploy. No build step.

If you change the copy and want a richer hero subtitle later, the line lives in `index.html` under `<p class="hero-sub">`.
